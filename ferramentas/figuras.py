# -*- coding: utf-8 -*-
"""Figuras do banco: uma imagem por questão, do Wikimedia Commons, com
licença aceita (CC0, domínio público, CC BY, CC BY-SA).

  python ferramentas/figuras.py candidatos            # busca CONSULTAS; grava figuras/candidatos.json
  python ferramentas/figuras.py candidatos2..7        # rodadas extras (CONSULTAS2..7) para os ids que ficaram mal
  python ferramentas/figuras.py escolher              # 1ª candidata por questão → figuras/escolhas.json (ponto de partida)
  python ferramentas/figuras.py baixar [id ...]       # baixa as escolhas para figuras/<id>.jpg
  python ferramentas/figuras.py folha [id ...]        # folhas de contato figuras/_folha-N.png, para olhar as escolhas
  python ferramentas/figuras.py trocar <id> "File:X"  # troca a escolha de uma questão e rebaixa
  python ferramentas/figuras.py gerar                 # figuras/figuras.json + figuras/FONTES.md a partir do que foi baixado

O caminho feito: candidatos → (rodadas extras) → escolhas.json ajustado à mão
(cada imagem foi olhada numa folha de contato) → baixar → gerar. A legenda de
cada figura é escrita à mão em ferramentas/legendas.js; montar.js junta
figuras.json + legendas.js à questão pelo id. CONSULTAS: por id do banco, as
buscas em inglês (o Commons responde melhor), da mais específica à mais
genérica."""
import io, json, os, sys, time
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import commons

RAIZ = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
PASTA = os.path.join(RAIZ, "figuras")
CANDIDATOS = os.path.join(PASTA, "candidatos.json")
ESCOLHAS = os.path.join(PASTA, "escolhas.json")

CONSULTAS = {
  # Pediatria — SUS-SP 2026 (41–60)
  "ped01": ["WHO child growth standards height-for-age chart", "child growth chart"],
  "ped02": ["molluscum contagiosum child", "molluscum contagiosum"],
  "ped03": ["Toxoplasma gondii tachyzoites", "congenital toxoplasmosis"],
  "ped04": ["intranasal midazolam", "electroencephalography child"],
  "ped05": ["Tityus serrulatus", "yellow scorpion Brazil"],
  "ped06": ["aortic valve stenosis echocardiogram", "aortic stenosis heart valve"],
  "ped07": ["urine dipstick test strip", "urinalysis dipstick"],
  "ped08": ["Mantoux tuberculin skin test induration", "tuberculin skin test"],
  "ped09": ["infant vaccination injection thigh", "vacinação bebê"],
  "ped10": ["staphylococcal scalded skin syndrome", "scalded skin syndrome infant"],
  "ped11": ["anxious child hiding", "child anxiety"],
  "ped12": ["transient tachypnea of the newborn chest radiograph", "neonatal chest x-ray"],
  "ped13": ["sickle cell anemia blood smear", "sickle cells peripheral blood"],
  "ped14": ["acute otitis media otoscopy tympanic membrane", "otitis media otoscope"],
  "ped15": ["diabetic ketoacidosis", "insulin infusion pump syringe"],
  "ped16": ["nasolacrimal duct obstruction infant", "dacryocystitis infant"],
  "ped17": ["amoebic liver abscess CT", "Entamoeba histolytica trophozoite"],
  "ped18": ["schistocytes peripheral blood smear", "hemolytic uremic syndrome"],
  "ped19": ["acute dystonic reaction", "metoclopramide"],
  "ped20": ["epidural hematoma CT scan", "head CT trauma"],
  # Pediatria — SUS-SP 2021
  "ped21": ["WHO growth chart length for age boys", "infant growth measurement length"],
  "ped22": ["infant pincer grasp", "baby sitting playing"],
  "ped23": ["Bordetella pertussis", "whooping cough"],
  "ped24": ["lumbar puncture cerebrospinal fluid", "cerebrospinal fluid analysis"],
  "ped25": ["newborn heel prick blood glucose", "neonatal heel prick"],
  # Preventiva — SUS-SP 2026 (81–100, sem 91)
  "prev01": ["Unidade Básica de Saúde", "Estratégia Saúde da Família"],
  "prev02": ["abdominal aortic aneurysm ultrasound", "abdominal aortic aneurysm"],
  "prev03": ["epidemic curve outbreak", "foodborne outbreak investigation"],
  "prev04": ["varicella rash chickenpox", "chickenpox"],
  "prev05": ["confounding variable diagram", "confounder"],
  "prev06": ["oral glucose tolerance test", "glucose meter blood test"],
  "prev07": ["Austin Bradford Hill", "Bradford Hill"],
  "prev08": ["HbA1c test", "diabetic peripheral neuropathy foot"],
  "prev09": ["Student's t-distribution", "William Sealy Gosset"],
  "prev10": ["carotid artery plaque ultrasound", "carotid atherosclerosis"],
  "prev11": ["physician burnout", "burnout"],
  "prev12": ["mammography machine", "mammography"],
  "prev13": ["elderly balance exercise", "older adults exercise class"],
  "prev14": ["blood pressure measurement sphygmomanometer", "blood pressure cuff"],
  "prev15": ["brisk walking exercise", "obesity walking"],
  "prev16": ["pesticide spraying farmer", "organophosphate pesticide"],
  "prev17": ["pulmonary rehabilitation", "COPD emphysema CT"],
  "prev18": ["hepatitis A vaccine", "hepatitis A virus"],
  "prev19": ["Sistema Único de Saúde", "SUS Brasil"],
  # Preventiva — SUS-SP 2021
  "prev20": ["occupational accident work injury", "security guard"],
  "prev21": ["elderly person hands caregiver", "elder abuse"],
  "prev22": ["agente comunitário de saúde", "community health worker Brazil"],
  "prev23": ["women's health Brazil", "mulheres saúde"],
  "prev24": ["Conselho Nacional de Saúde", "conferência nacional de saúde"],
  "prev25": ["prevalence incidence", "epidemiology bathtub prevalence"],
  # Cirurgia — SUS-SP 2026 (22, 24–35, 37–40)
  "cir01": ["adrenal gland anatomy", "hydrocortisone injection"],
  "cir02": ["duodenal ulcer endoscopy", "peptic ulcer visible vessel endoscopy"],
  "cir03": ["gastroduodenal artery", "duodenal ulcer bleeding surgery"],
  "cir04": ["Mallory-Weiss tear endoscopy", "Mallory-Weiss syndrome"],
  "cir05": ["Roux-en-Y gastric bypass", "gastric bypass diagram"],
  "cir06": ["gastric emptying scintigraphy", "gastroparesis"],
  "cir07": ["intensive care unit mechanical ventilation patient", "intensive care unit"],
  "cir08": ["colon adenocarcinoma colonoscopy", "sigmoid colon cancer"],
  "cir09": ["hemorrhoid rubber band ligation", "internal hemorrhoids"],
  "cir10": ["pilonidal cyst", "pilonidal sinus"],
  "cir11": ["condylomata acuminata perianal", "genital warts"],
  "cir12": ["portal vein anatomy", "hepatic portal vein"],
  "cir13": ["Sengstaken-Blakemore tube", "esophageal varices endoscopy"],
  "cir14": ["chronic pancreatitis calcifications CT", "chronic pancreatitis"],
  "cir15": ["pleural effusion chest x-ray", "pleural effusion"],
  "cir16": ["tension pneumothorax chest x-ray", "pneumothorax radiograph"],
  "cir17": ["jaw thrust maneuver", "jaw-thrust airway"],
  # Cirurgia — SUS-SP 2021
  "cir18": ["acute appendicitis surgery", "appendectomy"],
  "cir19": ["inguinal hernia repair mesh", "inguinal hernia surgery"],
  "cir20": ["FAST ultrasound Morison pouch free fluid", "focused assessment with sonography for trauma"],
  "cir21": ["retroperitoneal hematoma CT", "retroperitoneal hemorrhage"],
  "cir22": ["laparoscopic surgery pneumoperitoneum", "laparoscopy"],
  "cir23": ["pancreatic laceration CT trauma", "pancreas injury CT"],
  "cir24": ["rectal cancer MRI", "rectal adenocarcinoma"],
  "cir25": ["colonic diverticulosis colonoscopy", "diverticulitis CT"],
  # GO — SUS-SP 2026 (61–80)
  "go01": ["hydatidiform mole ultrasound", "hydatidiform mole"],
  "go02": ["pregnant woman vaccination", "vaccination pregnancy"],
  "go03": ["nuchal translucency ultrasound", "first trimester ultrasound fetus"],
  "go04": ["cervical length transvaginal ultrasound", "cervical cerclage"],
  "go05": ["postpartum hemorrhage", "oxytocin ampoule"],
  "go06": ["ectopic pregnancy ultrasound", "ruptured ectopic pregnancy laparoscopy"],
  "go07": ["gestational diabetes glucose meter pregnant", "glucometer"],
  "go08": ["twin pregnancy ultrasound lambda sign", "dichorionic twins ultrasound"],
  "go09": ["gestational sac yolk sac ultrasound", "early pregnancy ultrasound 6 weeks"],
  "go10": ["preeclampsia", "urine protein dipstick pregnancy"],
  "go11": ["placenta previa ultrasound", "placenta previa"],
  "go12": ["leuprolide", "GnRH agonist"],
  "go13": ["endometriosis laparoscopy", "endometriosis lesions"],
  "go14": ["HPV test self-sampling", "cervical cancer screening"],
  "go15": ["HPV vaccine Gardasil", "HPV vaccination"],
  "go16": ["estradiol transdermal patch", "hormone replacement therapy patch"],
  "go17": ["contraceptive implant etonogestrel", "Nexplanon"],
  "go18": ["Tanner scale breast development", "Tanner stages"],
  "go19": ["DXA bone densitometry", "dual-energy X-ray absorptiometry"],
  "go20": ["popcorn calcification mammography fibroadenoma", "mammogram benign calcification"],
  # GO — SUS-SP 2021
  "go21": ["endometrial biopsy Pipelle", "endometrial thickness ultrasound postmenopausal"],
  "go22": ["colposcopy", "cervical intraepithelial neoplasia histology"],
  "go23": ["ductus venosus Doppler", "fetal Doppler ultrasound"],
  "go24": ["labor delivery hospital", "childbirth delivery room"],
  "go25": ["zidovudine", "cesarean section surgery"],
  # --- UNESP 2026 / Einstein 2026 / Einstein 2025 (ids 26–50 de cada área) ---
  "ped26": ["neonatal resuscitation bag mask ventilation newborn", "newborn resuscitation"],
  "ped27": ["umbilical cord clamping newborn", "umbilical cord clamp"],
  "ped28": ["Down syndrome teenager", "Down syndrome girl"],
  "ped29": ["acanthosis nigricans neck", "childhood obesity"],
  "ped30": ["pediatric CPR chest compressions child manikin", "cardiopulmonary resuscitation child"],
  "ped31": ["tapioca rice flour cornmeal", "gluten-free flour"],
  "ped32": ["swallowed coin x-ray child", "foreign body ingestion radiograph coin"],
  "ped33": ["mother breastfeeding baby", "breastfeeding infant"],
  "ped34": ["hydronephrosis ultrasound", "voiding cystourethrogram vesicoureteral reflux"],
  "ped35": ["medulloblastoma MRI", "posterior fossa tumor MRI child"],
  "ped36": ["Aschoff body histology", "rheumatic fever Aschoff"],
  "ped37": ["acute chest syndrome chest x-ray sickle cell", "sickle cell disease chest radiograph"],
  "ped38": ["spacer inhaler child mask", "metered dose inhaler spacer toddler"],
  "ped39": ["baby eating solid food", "complementary feeding infant"],
  "ped40": ["hepatitis A virus electron micrograph", "jaundice child sclera"],
  "ped41": ["Kawasaki disease strawberry tongue", "Kawasaki disease child"],
  "ped42": ["Turner syndrome webbed neck", "Turner syndrome karyotype 45,X"],
  "ped43": ["undescended testis", "orchidopexy"],
  "ped44": ["infant choking back blows", "infant back blows first aid"],
  "ped45": ["post-streptococcal glomerulonephritis histology", "impetigo child"],
  "ped46": ["oral rehydration salts child", "oral rehydration solution"],
  "ped47": ["epinephrine auto-injector", "adrenaline autoinjector"],
  "ped48": ["Prader orchidometer", "orchidometer beads"],
  "ped49": ["aphthous ulcer mouth", "aphthous stomatitis"],
  "ped50": ["hip ultrasound effusion child", "transient synovitis hip ultrasound"],
  "prev26": ["INAMPS prédio", "hospital Brasil década de 1970"],
  "prev27": ["promulgação Constituição 1988", "Constituição Federal 1988"],
  "prev28": ["equipe saúde da família", "agente comunitário de saúde visita domiciliar"],
  "prev29": ["declaração de óbito", "death certificate form"],
  "prev30": ["Mycobacterium tuberculosis scanning electron micrograph", "bacteria scanning electron micrograph"],
  "prev31": ["Framingham Heart Study", "cohort study epidemiology researchers"],
  "prev32": ["vaccination child Brazil", "vaccine vial syringe"],
  "prev33": ["BCG vaccine vial", "BCG vaccination scar"],
  "prev34": ["ambulância SAMU", "hospital corridor SUS"],
  "prev35": ["Lei Maria da Penha", "Delegacia da Mulher"],
  "prev36": ["mammography exam", "cancer registry statistics"],
  "prev37": ["electronic health record computer hospital", "prontuário eletrônico"],
  "prev38": ["elderly woman hospital bed", "elderly patient hands nurse"],
  "prev39": ["teenager smoking cigarette", "adolescent smoking"],
  "prev40": ["elderly woman exercise group", "older adults walking group"],
  "prev41": ["tuberculin skin test reading ruler", "Mantoux induration"],
  "prev42": ["ultra-processed food supermarket", "Bolsa Família"],
  "prev43": ["telemedicine doctor video call", "telemedicine consultation"],
  "prev44": ["Aedes aegypti mosquito", "dengue mosquito"],
  "prev45": ["consultório na rua", "homeless people under viaduct Brazil"],
  "prev46": ["Lei Maria da Penha campanha", "wallet money hands"],
  "prev47": ["PrEP Truvada tablet", "tenofovir emtricitabine tablet"],
  "prev48": ["Centro de Atenção Psicossocial", "diazepam tablets"],
  "prev49": ["clinical trial pills placebo", "randomized controlled trial"],
  "prev50": ["medical journals stack library", "Cochrane"],
  "cir26": ["great saphenous vein harvest", "saphenous vein graft"],
  "cir27": ["fasciotomy leg compartment syndrome", "fasciotomy"],
  "cir28": ["benign prostatic hyperplasia ultrasound", "tamsulosin capsule"],
  "cir29": ["ureteral stone CT", "kidney stone CT scan"],
  "cir30": ["retrograde urethrogram urethral injury", "urethrography"],
  "cir31": ["thyroid nodule ultrasound microcalcifications", "thyroid ultrasound nodule"],
  "cir32": ["tonsil carcinoma", "oropharyngeal cancer HPV p16"],
  "cir33": ["ventricular septal rupture myocardial infarction", "papillary muscle rupture"],
  "cir34": ["Fournier gangrene", "necrotizing fasciitis"],
  "cir35": ["diverticular bleeding colonoscopy", "colonic diverticulosis colonoscopy"],
  "cir36": ["chest tube drainage", "chest drain thoracostomy"],
  "cir37": ["sigmoid diverticulitis CT", "diverticulitis CT"],
  "cir38": ["esophageal cancer endoscopy", "esophageal squamous cell carcinoma endoscopy"],
  "cir39": ["surgical wound infection necrosis", "wound debridement"],
  "cir40": ["cefazolin vial", "antibiotic intravenous operating room"],
  "cir41": ["FAST ultrasound free fluid Morison", "trauma bay resuscitation"],
  "cir42": ["inhalation injury burn face", "facial burn"],
  "cir43": ["ERCP biliary stent", "pancreatic head tumor CT"],
  "cir44": ["acute pancreatitis CT", "pancreatitis CT scan"],
  "cir45": ["needle thoracostomy", "tension pneumothorax chest x-ray"],
  "cir46": ["epidural hematoma CT", "anisocoria dilated pupil"],
  "cir47": ["gallstones gallbladder ultrasound", "pigment gallstones"],
  "cir48": ["gastrointestinal stromal tumor endoscopy", "GIST endoscopic ultrasound"],
  "cir49": ["colonoscopy polypectomy", "colon polyp colonoscopy"],
  "cir50": ["varicose veins leg", "varicose veins"],
  "go26": ["cardiotocography monitor", "preterm labor hospital"],
  "go27": ["levothyroxine tablets", "glucose meter pregnancy"],
  "go28": ["aspirin tablets", "calcium carbonate tablets"],
  "go29": ["oxytocin ampoule", "tranexamic acid ampoule"],
  "go30": ["vaginal delivery crowning", "childbirth delivery"],
  "go31": ["clindamycin vial", "postpartum woman hospital bed"],
  "go32": ["copper IUD", "intrauterine device copper"],
  "go33": ["BRCA1 genetic testing", "DNA sequencing laboratory"],
  "go34": ["uterine prolapse", "pelvic organ prolapse"],
  "go35": ["radiotherapy linear accelerator breast", "radiation therapy machine"],
  "go36": ["alendronate tablets", "osteoporosis bone histology"],
  "go37": ["pelvic ultrasound uterus", "transabdominal pelvic ultrasound"],
  "go38": ["enoxaparin syringe", "low molecular weight heparin injection"],
  "go39": ["umbilical artery Doppler waveform", "middle cerebral artery Doppler fetus"],
  "go40": ["obstetric forceps", "vacuum extractor delivery"],
  "go41": ["methotrexate vial", "ectopic pregnancy ultrasound"],
  "go42": ["levonorgestrel IUD Mirena", "hormonal IUD"],
  "go43": ["leiomyosarcoma uterus histology", "uterine sarcoma"],
  "go44": ["caudal regression syndrome x-ray", "sacral agenesis"],
  "go45": ["hydralazine ampoule", "magnesium sulfate ampoule"],
  "go46": ["Coombs test", "blood group Rh typing"],
  "go47": ["benzathine penicillin vial", "Treponema pallidum darkfield"],
  "go48": ["early pregnancy ultrasound gestational sac", "threatened abortion ultrasound"],
  "go49": ["trastuzumab vial", "HER2 immunohistochemistry"],
  "go50": ["pelvic inflammatory disease ultrasound", "ceftriaxone vial"],
  # Clínica Médica — SUS-SP 2026 (1–19), SUS-SP 2021, UNESP 2026, Einstein 2026, Einstein 2025 (2026-10-07)
  "cm01": ["prothrombin complex concentrate vial", "warfarin tablets", "hematemesis endoscopy"],
  "cm02": ["liraglutide pen", "GLP-1 injection pen", "Victoza pen"],
  "cm03": ["dry powder inhaler Ellipta", "COPD inhaler patient", "Anoro Ellipta"],
  "cm04": ["ankylosing spondylitis radiograph bamboo spine", "sacroiliitis radiograph", "ankylosing spondylitis x-ray"],
  "cm05": ["heart failure chest radiograph pulmonary congestion", "chest X-ray cardiomegaly", "jugular venous distension"],
  "cm06": ["human albumin infusion bottle", "ascites abdomen cirrhosis", "albumin 20% bottle"],
  "cm07": ["mechanical ventilator ICU", "intensive care ventilator screen", "ventilator patient ICU"],
  "cm08": ["adrenal adenoma CT", "adrenal gland CT scan", "Conn syndrome adrenal"],
  "cm09": ["insulin infusion pump ICU", "arterial blood gas syringe", "blood gas analyzer"],
  "cm10": ["sodium nitroprusside vial", "hydroxocobalamin Cyanokit", "infusion pump ICU"],
  "cm11": ["Guillain-Barré patient ventilator", "intubated patient ICU", "bedside spirometry"],
  "cm12": ["idiopathic pulmonary fibrosis CT honeycombing", "usual interstitial pneumonia CT", "pulmonary fibrosis HRCT"],
  "cm13": ["hypertrophic cardiomyopathy echocardiogram", "hypertrophic cardiomyopathy ultrasound", "echocardiography septal hypertrophy"],
  "cm14": ["blood transfusion bag", "red blood cell transfusion", "packed red blood cells unit"],
  "cm15": ["herpes labialis", "cold sore lip", "antiretroviral tablets"],
  "cm16": ["cardiac resynchronization therapy chest radiograph", "biventricular pacemaker x-ray", "pacemaker chest x-ray"],
  "cm17": ["multiple sclerosis MRI brain", "multiple sclerosis FLAIR lesions", "MRI demyelinating plaques"],
  "cm18": ["atorvastatin tablets", "statin tablets", "atherosclerosis plaque artery"],
  "cm19": ["paracentesis ascites", "ascitic fluid paracentesis", "abdominal paracentesis"],
  "cm20": ["levothyroxine tablets", "thyroid gland ultrasound", "hypothyroidism thyroid ultrasound"],
  "cm21": ["hepatitis B serology test", "hepatitis B virus electron micrograph", "HBsAg rapid test"],
  "cm22": ["white blood cell cast urine microscopy", "urine sediment microscopy leukocyte cast", "kidney biopsy interstitial nephritis"],
  "cm23": ["tetanus vaccine vial", "dirty wound leg laceration", "wound irrigation emergency"],
  "cm24": ["furosemide tablets", "hypokalemia ECG U wave", "potassium chloride infusion"],
  "cm25": ["oxygen non-rebreather mask", "high flow oxygen mask patient", "cluster headache"],
  "cm26": ["metered dose inhaler spacer", "salbutamol inhaler spacer adult", "asthma inhaler spacer"],
  "cm27": ["rapid sequence intubation laryngoscope", "endotracheal intubation emergency", "video laryngoscope"],
  "cm28": ["Graves disease exophthalmos", "Graves ophthalmopathy", "goiter Graves disease"],
  "cm29": ["blood culture bottles", "chemotherapy infusion", "blood culture collection"],
  "cm30": ["zoledronic acid infusion", "hip fracture radiograph femoral neck", "osteoporosis hip fracture x-ray"],
  "cm31": ["intravenous fluids saline bag", "glucometer high reading", "dehydration elderly patient IV fluids"],
  "cm32": ["dapagliflozin tablets", "empagliflozin tablets", "SGLT2 inhibitor tablet"],
  "cm33": ["acute tubular necrosis histology", "muddy brown casts urine", "renal tubular epithelial cells urine"],
  "cm34": ["elderly man walking frail", "gait speed test elderly", "frail elderly walker"],
  "cm35": ["necrotizing pneumonia chest radiograph cavitation", "Staphylococcus aureus pneumonia x-ray", "lung cavitation radiograph"],
  "cm36": ["budesonide formoterol inhaler", "Symbicort turbuhaler", "turbuhaler inhaler"],
  "cm37": ["gout tophus", "monosodium urate crystals polarized microscopy", "podagra"],
  "cm38": ["ambulatory blood pressure monitor", "blood pressure measurement ambulatory monitor", "sphygmomanometer measurement"],
  "cm39": ["Wenckebach ECG", "second degree AV block ECG", "Mobitz I electrocardiogram"],
  "cm40": ["pulmonary embolism CT angiography", "CT pulmonary angiogram embolus", "saddle pulmonary embolism CT"],
  "cm41": ["urine dipstick nitrite", "urinalysis dipstick", "ceftriaxone vial injection"],
  "cm42": ["desmopressin nasal spray", "pituitary adenoma MRI", "transsphenoidal surgery"],
  "cm43": ["dapagliflozin Forxiga tablets", "ketone blood meter", "operating room anesthesia"],
  "cm44": ["semaglutide pen Ozempic", "GLP-1 agonist pen injection", "Ozempic pen"],
  "cm45": ["verapamil tablets", "atrial fibrillation ECG", "ECG atrial fibrillation rhythm strip"],
  "cm46": ["coronary angiography LAD stenosis", "coronary angioplasty stent angiogram", "percutaneous coronary intervention"],
  "cm47": ["polysomnography sleep apnea", "sleep apnea CPAP patient", "renal artery stenosis angiography"],
  "cm48": ["aspiration pneumonia chest radiograph", "pneumonia chest x-ray consolidation right lower lobe", "lobar pneumonia radiograph"],
  "cm49": ["hemorrhagic transformation stroke CT", "intracerebral hemorrhage CT", "cerebral infarction CT hemorrhage"],
  "cm50": ["defibrillator synchronized cardioversion", "cardioversion paddles", "defibrillator pads patient"],
  # --- Volume 2 · Pediatria (ped51–ped100): Sírio-Libanês 2026 e 2027, UNESP 2025, FAMEMA 2026 ---
  "ped51": ["toddler walking holding hands", "baby first steps with support"],
  "ped52": ["infant nasal saline irrigation", "bronchiolitis infant"],
  "ped53": ["pediatric chest auscultation stethoscope child", "doctor listening child lungs"],
  "ped54": ["zinc sulfate tablets", "oral rehydration salts sachet"],
  "ped55": ["measles vaccine vial MMR", "measles rash child"],
  "ped56": ["urine dipstick nitrite test", "infant urine sample collection"],
  "ped57": ["intravenous drip child hospital", "pediatric intravenous infusion"],
  "ped58": ["pediatric intensive care unit monitor", "child patient monitor vital signs"],
  "ped59": ["diazepam ampoule", "diazepam injection vial"],
  "ped60": ["pediatric defibrillator pads", "defibrillator paddles child manikin"],
  "ped61": ["child blood pressure measurement cuff", "pediatric blood pressure cuff"],
  "ped62": ["scarlet fever strawberry tongue", "scarlet fever rash"],
  "ped63": ["benzathine penicillin vial", "emergency contraception levonorgestrel"],
  "ped64": ["umbilical venous catheter neonate", "umbilical cord catheter newborn"],
  "ped65": ["doctor talking with teenage patient", "adolescent medical consultation"],
  "ped66": ["Heimlich maneuver child", "abdominal thrusts choking child"],
  "ped67": ["microcytic anemia blood smear", "hypochromic microcytic red blood cells"],
  "ped68": ["Ringer's lactate bag", "intravenous fluid bag lactated Ringer"],
  "ped69": ["child head CT scan normal", "CT scanner pediatric patient"],
  "ped70": ["high flow nasal cannula infant", "nasal cannula baby oxygen"],
  "ped71": ["atropine sulfate injection ampoule", "organophosphate pesticide bottle"],
  "ped72": ["respiratory syncytial virus electron micrograph", "RSV virion"],
  "ped73": ["inactivated polio vaccine vial", "IPV vaccine injection infant"],
  "ped74": ["thermometer child fever", "infant axillary temperature"],
  "ped75": ["breastfeeding latch newborn", "mother breastfeeding infant"],
  "ped76": ["asthma inhaler spacer child", "metered dose inhaler spacer"],
  "ped77": ["child lining up toy cars", "autism child playing alone"],
  "ped78": ["neonatal phototherapy jaundice", "newborn under blue light phototherapy"],
  "ped79": ["pulse oximeter infant foot", "pediatric pulse oximetry sensor"],
  "ped80": ["Treponema pallidum dark field microscopy", "Treponema pallidum electron micrograph"],
  "ped81": ["neonatal transport incubator ambulance", "transport incubator newborn"],
  "ped82": ["vitamin K injection newborn", "phytomenadione ampoule"],
  "ped83": ["iron supplement drops infant", "ferrous sulfate oral drops"],
  "ped84": ["newborn heel prick test", "Guthrie card blood spot"],
  "ped85": ["Aedes aegypti mosquito", "Aedes aegypti feeding"],
  "ped86": ["renal ultrasound small kidney", "kidney ultrasound scan child"],
  "ped87": ["urticaria wheals child", "urticaria hives skin"],
  "ped88": ["Bordetella pertussis colonies", "pertussis vaccine Tdap vial"],
  "ped89": ["Mycobacterium tuberculosis Ziehl-Neelsen", "acid-fast bacilli microscopy"],
  "ped90": ["cavernous sinus anatomy", "orbital cellulitis child eye"],
  "ped91": ["toddler sleeping crib", "child asleep bed night"],
  "ped92": ["atopic dermatitis child flexural", "eczema antecubital fossa child"],
  "ped93": ["bone age hand radiograph child", "left hand X-ray bone age"],
  "ped94": ["acetylcysteine injection", "paracetamol tablets 750 mg"],
  "ped95": ["pediatric emergency room resuscitation", "intravenous fluid bolus child"],
  "ped96": ["sodium chloride infusion bag", "hyponatremia serum sodium laboratory"],
  "ped97": ["PICC line arm", "peripherally inserted central catheter"],
  "ped98": ["herpes simplex virus electron micrograph", "neonatal herpes vesicles"],
  "ped99": ["breastfeeding newborn jaundice", "newborn jaundice skin"],
  "ped100": ["cyanotic newborn", "transposition of the great arteries diagram"],
  # --- Volume 2 · Preventiva (prev51–prev100): Sírio-Libanês 2026 e 2027, UNESP 2025, FAMEMA 2026 ---
  "prev51": ["Alma-Ata declaration 1978 conference", "Almaty Kazakhstan primary health care 1978"],
  "prev52": ["epidemiologic triad agent host environment", "epidemiological triangle diagram"],
  "prev53": ["boiling water pot stove", "river water collection bucket rural"],
  "prev54": ["water tank lid mosquito prevention", "Aedes aegypti breeding site container water"],
  "prev55": ["garment factory sewing workshop workers", "immigrant family health clinic child"],
  "prev56": ["Santa Casa de Misericórdia hospital Brazil", "hospital building facade Brazil"],
  "prev57": ["medical consultation patient with companion", "doctor office two women consultation"],
  "prev58": ["household health survey interview", "epidemiological survey questionnaire fieldwork"],
  "prev59": ["community map neighborhood hand drawn", "favela aerial view São Paulo"],
  "prev60": ["life expectancy world map", "life expectancy at birth graph"],
  "prev61": ["ceftriaxone vial injection", "Neisseria gonorrhoeae Gram stain"],
  "prev62": ["varicella vaccine vial", "herpes zoster rash dermatome"],
  "prev63": ["William Beveridge portrait", "National Health Service hospital 1948"],
  "prev64": ["mother with child hospital bed pediatric ward", "pediatric ward mother infant hospital"],
  "prev65": ["sofosbuvir tablets", "hepatitis C virus electron micrograph"],
  "prev66": ["thyroid ultrasound examination", "medical checkup laboratory blood tests"],
  "prev67": ["black woman blood pressure measurement clinic", "Afro-Brazilian women community health"],
  "prev68": ["Unidade Básica de Saúde reception Brazil", "health center waiting room Brazil"],
  "prev69": ["alcohol bottles glass drinking", "beer bottles table alcohol"],
  "prev70": ["doctor listening to patient consultation", "physician patient conversation office"],
  "prev71": ["sertraline tablets", "woman depression sitting window sad"],
  "prev72": ["elderly woman many pills medication", "pill organizer elderly hands"],
  "prev73": ["melanoma skin lesion", "malignant melanoma dermoscopy"],
  "prev74": ["morphine ampoule injection", "palliative care elderly home oxygen"],
  "prev75": ["wheelchair ramp accessibility building entrance", "wheelchair user hospital entrance"],
  "prev76": ["community meeting circle people talking", "Paulo Freire"],
  "prev77": ["rheumatoid arthritis hands", "medical referral letter documents"],
  "prev78": ["low back pain man holding back", "lumbar spine anatomy illustration"],
  "prev79": ["health insurance card plan", "Agência Nacional de Saúde Suplementar"],
  "prev80": ["Supremo Tribunal Federal building Brasília", "court gavel medicine law"],
  "prev81": ["tuberculosis chest x-ray child", "rifampicin isoniazid tablets tuberculosis"],
  "prev82": ["construction worker occupational health", "occupational disease worker dust mask"],
  "prev83": ["fruit and vegetables market stall", "world map cardiovascular disease mortality"],
  "prev84": ["forest plot confidence interval", "confidence interval statistics graph"],
  "prev85": ["health center entrance Brazil UBS", "primary care clinic entrance door"],
  "prev86": ["pharmacy medicine shelves boxes", "Farmácia Popular Brazil"],
  "prev87": ["disease surveillance map epidemiologist", "epidemiology data analysis computer map"],
  "prev88": ["death certificate form", "Declaração de Óbito Brasil"],
  "prev89": ["pregnant woman prenatal care clinic Brazil", "maternal mortality world map"],
  "prev90": ["street market fruit vegetables Brazil feira", "convenience store shelves processed food"],
  "prev91": ["community fair women association Brazil", "farmers market organic vegetables stall"],
  "prev92": ["blood pressure monitor high reading", "ambulatory blood pressure monitor device"],
  "prev93": ["nail polish bottles", "eyelid dermatitis eczema"],
  "prev94": ["methanol bottle laboratory", "ethanol injection ampoule"],
  "prev95": ["minor surgery procedure room clinic", "abscess incision drainage"],
  "prev96": ["heat wave city thermometer sun", "wildfire smoke city air pollution"],
  "prev97": ["family health team Brazil Estratégia Saúde da Família", "community health worker home visit Brazil"],
  "prev98": ["stage construction workers height rigging", "scaffolding workers safety harness"],
  "prev99": ["teenage girl anxious night dark", "nightmare sleep woman bed"],
  "prev100": ["howler monkey Alouatta", "yellow fever vaccine vial"],
  # --- Volume 2 · Cirurgia (cir51–cir100): Sírio-Libanês 2026 e 2027, UNESP 2025, FAMEMA 2026 ---
  "cir51": ["total parenteral nutrition bag", "refeeding syndrome", "malnourished patient hospital bed"],
  "cir52": ["passive leg raising", "intensive care unit patient monitor", "bedside echocardiography ICU"],
  "cir53": ["tourniquet arm bleeding", "combat application tourniquet", "pressure dressing bleeding wound"],
  "cir54": ["pelvic binder trauma", "pelvic fracture X-ray open book", "trauma laparotomy"],
  "cir55": ["cricothyrotomy", "cricothyroid membrane anatomy", "emergency surgical airway"],
  "cir56": ["intracranial pressure monitoring", "head CT trauma", "arterial line blood pressure monitor"],
  "cir57": ["neck zones trauma anatomy", "fiberoptic bronchoscope intubation", "larynx anatomy"],
  "cir58": ["percutaneous abscess drainage CT", "pigtail drainage catheter", "intra-abdominal abscess CT"],
  "cir59": ["cardiac tamponade echocardiography", "pericardial effusion echocardiogram", "deformed steering wheel crash"],
  "cir60": ["inguinal hernia", "inguinal canal anatomy", "indirect inguinal hernia"],
  "cir61": ["Calot's triangle", "laparoscopic cholecystectomy critical view of safety", "gallbladder anatomy cystic duct"],
  "cir62": ["hypoglossal nerve anatomy", "carotid endarterectomy", "carotid bifurcation anatomy"],
  "cir63": ["corona mortis", "obturator artery anatomy", "laparoscopic inguinal hernia repair TAPP"],
  "cir64": ["spleen blood supply splenic artery", "splenectomy", "stomach arteries anatomy"],
  "cir65": ["inferior mesenteric artery anatomy", "colon blood supply marginal artery", "sigmoid colon arteries"],
  "cir66": ["hypothermia trauma patient warming blanket", "blood transfusion bags plasma", "lactate blood gas analyzer"],
  "cir67": ["percutaneous nephrolithotomy", "large kidney stone", "nephroscope"],
  "cir68": ["pregnant woman spine board", "pregnant trauma patient left lateral tilt", "inferior vena cava compression pregnancy"],
  "cir69": ["massive transfusion protocol blood products", "fresh frozen plasma bag", "trauma bay resuscitation"],
  "cir70": ["inguinoscrotal hernia", "large inguinal hernia elderly man", "hernia mesh repair Lichtenstein"],
  "cir71": ["intracranial pressure volume curve", "Monro-Kellie doctrine", "brain herniation CT"],
  "cir72": ["spontaneous pneumothorax X-ray", "pigtail catheter chest", "small bore chest tube"],
  "cir73": ["Billroth II anastomosis diagram", "gastrojejunostomy", "afferent loop syndrome"],
  "cir74": ["cervical collar trauma patient", "cervical spine CT", "cervical collar removal"],
  "cir75": ["blood culture bottles", "sepsis intravenous antibiotics", "ICU patient postoperative"],
  "cir76": ["intraoperative cholangiography", "cholangiogram common bile duct stone", "ERCP choledocholithiasis"],
  "cir77": ["testicular torsion", "scrotal ultrasound Doppler", "testicular torsion surgery"],
  "cir78": ["emergency department thoracotomy", "resuscitative thoracotomy", "clamshell thoracotomy"],
  "cir79": ["inferior vena cava filter", "IVC filter X-ray", "deep vein thrombosis leg swelling"],
  "cir80": ["open abdomen negative pressure wound therapy", "abdominal compartment syndrome", "intra-abdominal pressure bladder measurement"],
  "cir81": ["esophageal pH monitoring", "esophageal pH probe", "gastroesophageal reflux diagram"],
  "cir82": ["motorcycle helmet removal trauma", "full face motorcycle helmet", "motorcycle crash helmet"],
  "cir83": ["spinal cord injury cervical MRI", "diving shallow water", "cervical spine fracture CT"],
  "cir84": ["gallbladder ultrasound gallstones", "gallstones", "cholelithiasis ultrasound"],
  "cir85": ["intussusception ultrasound target sign", "intussusception", "infant abdominal ultrasound"],
  "cir86": ["kidney stone CT scan", "ureteral stone CT", "renal colic CT hydronephrosis"],
  "cir87": ["pericardiocentesis", "pericardial effusion echocardiography", "mechanical heart valve"],
  "cir88": ["second degree burn blister", "silver sulfadiazine cream", "burn wound dressing"],
  "cir89": ["pleural effusion X-ray", "thoracentesis", "pleural fluid sample"],
  "cir90": ["abdominal aortic aneurysm CT", "ruptured abdominal aortic aneurysm", "endovascular aneurysm repair stent graft"],
  "cir91": ["hemothorax X-ray", "chest tube drainage blood", "thoracotomy surgery"],
  "cir92": ["subdural hematoma CT", "elderly woman fall", "warfarin tablets"],
  "cir93": ["abdominal stab wound", "knife wound abdomen", "abdominal CT trauma"],
  "cir94": ["pneumoperitoneum X-ray free air", "perforated peptic ulcer", "perforated duodenal ulcer surgery"],
  "cir95": ["small bowel obstruction X-ray", "small bowel obstruction air-fluid levels", "abdominal adhesions surgery"],
  "cir96": ["patient walking hospital corridor early mobilization", "preoperative carbohydrate drink", "hospital patient eating meal"],
  "cir97": ["thymoma CT", "thymoma", "anterior mediastinal mass CT"],
  "cir98": ["hemorrhoids", "hemorrhoidectomy", "prolapsed hemorrhoids grade IV"],
  "cir99": ["hepatocellular adenoma MRI", "liver adenoma", "oral contraceptive pills blister"],
  "cir100": ["Nissen fundoplication", "Nissen fundoplication diagram", "hiatal hernia endoscopy"],
}

MIN_LADO = 400


def candidatos():
    """Para cada id ainda sem candidatas, até 6 com licença aceita, JPEG/PNG, lado ≥ 400 px.
    Os ids que já estão em candidatos.json não são refeitos."""
    saida = json.load(open(CANDIDATOS, encoding="utf-8")) if os.path.exists(CANDIDATOS) else {}
    for qid, buscas in CONSULTAS.items():
        if qid in saida:
            continue
        lista = []
        for termo in buscas:
            try:
                r = commons.api({"action": "query", "generator": "search", "gsrsearch": termo, "gsrnamespace": 6,
                                 "gsrlimit": 15, "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1400})
            except Exception as e:
                print(qid, termo, "ERRO", e); time.sleep(2); continue
            for p in sorted(r.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99)):
                i = commons.info(p)
                if i["ok"] and i["mime"] in ("image/jpeg", "image/png") and (i["w"] or 0) >= MIN_LADO and (i["h"] or 0) >= MIN_LADO:
                    i["busca"] = termo
                    if all(i["titulo"] != x["titulo"] for x in lista):
                        lista.append(i)
            if len(lista) >= 4:
                break
            time.sleep(0.3)
        saida[qid] = lista[:6]
        print("%-7s %d candidatas  %s" % (qid, len(lista), (lista[0]["titulo"][:70] if lista else "— NADA —")))
    json.dump(saida, open(CANDIDATOS, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


def escolher():
    c = json.load(open(CANDIDATOS, encoding="utf-8"))
    e = json.load(open(ESCOLHAS, encoding="utf-8")) if os.path.exists(ESCOLHAS) else {}
    for qid, lista in c.items():
        if qid not in e and lista:
            e[qid] = lista[0]["titulo"]
    json.dump(e, open(ESCOLHAS, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("%d escolhas; sem candidata: %s" % (len(e), [q for q in CONSULTAS if q not in e]))


def baixar(ids=None):
    e = json.load(open(ESCOLHAS, encoding="utf-8"))
    linhas = []
    for qid, titulo in e.items():
        if ids and qid not in ids:
            continue
        destino = os.path.join(PASTA, qid + ".jpg")
        if os.path.exists(destino) and not ids:
            continue
        buf = io.StringIO(); antigo = sys.stdout; sys.stdout = buf
        try:
            commons.baixar(titulo, destino)
        except (SystemExit, Exception) as ex:   # 404, rede: segue para a próxima, o gerar acusa depois
            sys.stdout = antigo; print(qid, "FALHOU:", titulo, "->", ex); continue
        finally:
            sys.stdout = antigo
        for l in buf.getvalue().splitlines():
            if l.startswith("FONTES.md: "):
                linhas.append(l[len("FONTES.md: "):].replace(destino.replace(os.sep, "/"), "figuras/" + qid + ".jpg"))
        print(qid, "ok", titulo[:60])
        time.sleep(0.4)
    fontes = os.path.join(PASTA, "FONTES.md")
    if not os.path.exists(fontes):
        open(fontes, "w", encoding="utf-8", newline="\n").write(
            "# Fontes das figuras\n\nToda imagem vem do Wikimedia Commons sob CC0, domínio público, CC BY ou CC BY-SA — nunca NC, nunca ND. "
            "A linha de `fonte:` em ferramentas/figuras.js traz autor e licença; a página de origem fica aqui. "
            "Reduzidas para no máximo 1400 px (JPEG 85) com ferramentas/commons.py, chamado por ferramentas/figuras.py.\n\n"
            "| Arquivo | Título no Commons | Autor | Licença | Página | Tamanho gravado |\n|---|---|---|---|---|---|\n")
    with open(fontes, "a", encoding="utf-8", newline="\n") as f:
        for l in linhas:
            f.write(l + "\n")


def folha(ids=None):
    """Folhas de contato: 20 miniaturas por folha, com o id em cima de cada uma."""
    from PIL import Image, ImageDraw
    ids = ids or [q for q in CONSULTAS if os.path.exists(os.path.join(PASTA, q + ".jpg"))]
    por = 20; larg, alt = 260, 220
    for n in range(0, len(ids), por):
        grupo = ids[n:n + por]
        folha_im = Image.new("RGB", (5 * larg, 4 * (alt + 22)), "white")
        d = ImageDraw.Draw(folha_im)
        for k, qid in enumerate(grupo):
            im = Image.open(os.path.join(PASTA, qid + ".jpg")).convert("RGB")
            im.thumbnail((larg - 8, alt - 8))
            x, y = (k % 5) * larg, (k // 5) * (alt + 22)
            folha_im.paste(im, (x + 4, y + 22))
            d.text((x + 6, y + 4), qid, fill="black")
        nome = os.path.join(PASTA, "_folha-%d.png" % (n // por + 1))
        folha_im.save(nome)
        print(nome, grupo)


# Segunda rodada: ids cuja primeira busca trouxe diagrama ou tema errado.
CONSULTAS2 = {
  "ped01": ["stadiometer child height measurement", "measuring height child clinic"],
  "ped09": ["infant vaccination", "baby vaccine injection", "immunization infant nurse"],
  "ped10": ["staphylococcal scalded skin", "Ritter disease", "bullous impetigo"],
  "ped12": ["transient tachypnea newborn", "wet lung newborn", "neonatal respiratory distress radiograph"],
  "ped14": ["otitis media tympanic membrane", "otoscopy bulging tympanic membrane", "tympanic membrane perforation"],
  "ped16": ["epiphora infant", "nasolacrimal duct", "watery eye baby"],
  "ped17": ["liver abscess CT", "amebic abscess", "amoebiasis liver"],
  "ped20": ["extradural hematoma CT", "subdural hematoma CT", "skull fracture CT children"],
  "ped21": ["infant scale weighing baby", "baby weight scale clinic", "infant length measurement"],
  "prev03": ["Unidade de Pronto Atendimento", "outbreak investigation team", "epidemiologist field investigation"],
  "prev05": ["rheumatoid arthritis hands", "rheumatoid arthritis hand deformity"],
  "prev08": ["monofilament test diabetic foot", "diabetic foot examination", "glycated hemoglobin test"],
  "prev09": ["William Sealy Gosset", "Student t-test Gosset"],
  "prev13": ["elderly exercise class", "senior fitness class", "tai chi elderly", "older adults strength training"],
  "prev15": ["nordic walking", "people walking exercise park", "brisk walk"],
  "prev17": ["spirometry", "emphysema chest x-ray", "pulmonary rehabilitation exercise"],
  "prev19": ["Ministério da Saúde Brasília", "DATASUS", "hospital electronic medical record computer"],
  "prev20": ["trauma bay emergency department", "gunshot wound emergency", "emergency room resuscitation"],
  "prev24": ["Conselho Nacional de Saúde reunião", "conferência nacional de saúde", "conselho municipal de saúde"],
  "prev25": ["Ebola treatment unit", "cholera treatment centre", "isolation ward"],
  "cir01": ["hydrocortisone sodium succinate", "Solu-Cortef", "hydrocortisone vial"],
  "cir02": ["duodenal ulcer endoscopy", "gastric ulcer endoscopy", "endoscopic hemoclip bleeding"],
  "cir03": ["gastrectomy surgery", "Billroth", "vagotomy", "peptic ulcer perforation surgery"],
  "cir04": ["Mallory Weiss", "esophagogastric junction endoscopy", "hematemesis"],
  "cir05": ["laparoscopic gastric bypass surgery", "bariatric surgery operating room", "internal hernia CT"],
  "cir11": ["perianal condyloma", "anal warts", "condyloma acuminatum"],
  "cir13": ["Blakemore tube", "esophageal varices", "variceal bleeding endoscopy"],
  "cir16": ["tension pneumothorax", "pneumothorax x-ray", "needle decompression pneumothorax", "chest tube thoracostomy"],
  "cir18": ["inflamed appendix", "acute appendicitis laparoscopic", "appendicitis surgery specimen"],
  "cir20": ["FAST exam ultrasound trauma", "Morison pouch", "hepatorenal recess ultrasound free fluid"],
  "cir21": ["retroperitoneal hematoma", "pelvic fracture CT", "retroperitoneal hemorrhage CT"],
  "cir23": ["pancreatic trauma", "pancreas CT", "pancreatic transection"],
  "go01": ["molar pregnancy ultrasound", "hydatidiform mole ultrasonography", "snowstorm ultrasound"],
  "go02": ["pregnant woman vaccine", "vaccination pregnant", "Tdap vaccine", "influenza vaccine pregnancy"],
  "go05": ["oxytocin", "uterine massage postpartum", "postpartum haemorrhage"],
  "go08": ["twin pregnancy ultrasound", "dichorionic", "twins ultrasound"],
  "go10": ["pregnant blood pressure measurement", "pregnancy hypertension", "antenatal blood pressure"],
  "go14": ["Pap test", "cervical cytology", "speculum examination", "HPV DNA test"],
  "go18": ["Lactobacillus Gram stain vaginal", "vaginal smear lactobacilli", "puberty girls"],
  "go20": ["fibroadenoma mammography", "mammogram", "breast calcification mammography", "mammogram craniocaudal"],
  "go21": ["endometrial biopsy", "endometrial hyperplasia ultrasound", "postmenopausal bleeding", "hysteroscopy"],
  "go22": ["cervical intraepithelial neoplasia", "CIN 1 histology", "colposcopy acetowhite"],
  "go23": ["ductus venosus", "fetal Doppler waveform", "fetal venous Doppler"],
  "go25": ["Retrovir", "zidovudine injection", "cesarean section", "HIV rapid test"],
}

# Terceira rodada: os que ainda ficaram sem foto.
CONSULTAS3 = {
  "ped01": ["child growth monitoring", "measuring child height", "puericultura", "anthropometry child"],
  "ped09": ["vacinação infantil", "oral polio vaccine drops", "immunization baby Brazil", "vaccinating infant"],
  "ped12": ["neonatal CPAP", "neonatal intensive care unit newborn", "newborn incubator", "preterm infant respiratory support"],
  "ped16": ["dacryocystitis", "blocked tear duct baby", "infant eye discharge"],
  "prev08": ["monofilament", "diabetic foot", "Semmes-Weinstein", "foot examination diabetes"],
  "cir01": ["hydrocortisone", "adrenal crisis", "adrenal gland specimen"],
  "cir02": ["duodenal ulcer", "gastric ulcer", "peptic ulcer endoscopic", "Forrest classification"],
  "cir03": ["laparotomy", "abdominal surgery open", "surgeons operating room"],
  "cir05": ["gastric bypass", "bariatric surgery", "obesity surgery laparoscopic"],
  "cir18": ["appendicitis", "appendix surgery", "appendectomy laparoscopic", "appendix specimen"],
  "cir21": ["renal trauma CT", "kidney laceration CT", "retroperitoneum CT"],
  "cir23": ["pancreatic injury", "pancreas laceration", "pancreatic pseudocyst CT", "blunt abdominal trauma CT"],
  "go10": ["prenatal checkup blood pressure", "pregnant woman sphygmomanometer", "antenatal care Brazil", "pre-natal consulta"],
  "go23": ["umbilical artery Doppler", "Doppler ultrasound fetal", "fetal Doppler ultrasound image", "middle cerebral artery Doppler"],
}

CONSULTAS4 = {
  "prev05": ["antiphospholipid syndrome", "livedo reticularis", "deep vein thrombosis leg"],
  "cir21": ["retroperitoneal hemorrhage", "psoas hematoma CT", "pelvic hematoma CT", "kidney trauma"],
}

CONSULTAS5 = {
  "ped02": ["molluscum contagiosum lesions", "molluscum contagiosum skin", "molluscum"],
  "ped16": ["congenital nasolacrimal duct obstruction", "dacryocystocele", "tear duct baby"],
  "prev13": ["senior exercise", "elderly gymnastics", "idosos exercício", "older adults exercise"],
  "prev21": ["elderly care hands", "old man hands", "caregiver elderly"],
  "cir05": ["laparoscopic surgery team", "obesity surgery", "laparoscopic surgery operating theatre"],
  "go06": ["ectopic pregnancy ultrasound", "tubal pregnancy ultrasound", "ectopic pregnancy laparoscopy"],
  "go10": ["antenatal clinic", "maternal health clinic blood pressure", "pregnant woman doctor"],
  "go11": ["placenta praevia", "placenta previa sonography", "low lying placenta ultrasound"],
  "go12": ["leuprorelin", "Lupron", "GnRH analogue injection", "precocious puberty"],
}

CONSULTAS6 = {
  "prev21": ["Parkinson's disease patient", "elderly man wheelchair", "nursing home elderly", "idoso cuidador"],
  "go11": ["Placta prv", "placenta ultrasound", "placenta position ultrasound", "anterior placenta ultrasound"],
  "go12": ["bone age hand radiograph", "hand x-ray child", "left hand wrist radiograph child"],
}

CONSULTAS7 = {
  "prev21": ["visita domiciliar", "home visit nurse elderly", "home care elderly", "elderly patient bed caregiver"],
  "go07": ["blood glucose test finger", "glucose meter reading", "glucometer test strip", "capillary blood glucose"],
  "go10": ["blood pressure pregnant woman clinic", "prenatal care nurse blood pressure", "pregnant blood pressure cuff"],
}


CONSULTAS8 = {
  "ped37": ["chest x-ray pneumonia child", "lobar pneumonia chest radiograph"],
  "ped44": ["infant CPR manikin", "baby first aid manikin", "infant choking"],
  "ped48": ["orchidometer", "testicular volume measurement"],
  "ped50": ["hip joint ultrasound", "pediatric hip ultrasound", "child limping"],
  "prev26": ["Previdência Social prédio", "INPS", "Ministério da Previdência Social"],
  "prev45": ["homeless woman Brazil", "população em situação de rua", "morador de rua São Paulo"],
  "cir33": ["myocardial infarction gross pathology heart", "cardiac surgery operating room", "heart surgery"],
  "cir35": ["diverticulosis colon", "colonic diverticula endoscopy", "diverticula colonoscopy"],
  "cir38": ["esophageal cancer", "esophageal carcinoma", "esophagus tumor endoscopy"],
  "cir40": ["cefazolin", "antibiotic vial syringe", "intravenous antibiotic bag"],
  "go29": ["oxytocin injection", "uterotonic", "postpartum hemorrhage"],
  "go31": ["postpartum ward", "cesarean scar", "endometritis"],
  "go39": ["Doppler ultrasound fetal artery", "umbilical artery Doppler", "obstetric Doppler"],
  "go45": ["magnesium sulfate injection", "hydralazine", "preeclampsia"],
  "go47": ["penicillin injection", "benzathine penicillin", "Treponema pallidum"],
}


CONSULTAS9 = {
  "prev39": ["teen smoking", "young man smoking cigarette", "cigarette in hand"],
  "prev40": ["senior women exercise class", "elderly aerobics", "tai chi park elderly", "hidroginástica idosos"],
  "prev47": ["Truvada", "tenofovir", "HIV prevention pill"],
  "prev49": ["placebo pills", "clinical trial pharmacy", "medical research pills capsules"],
  "prev50": ["medical library journals", "scientific journals shelf", "systematic review"],
  "cir26": ["vein harvesting surgery", "coronary artery bypass vein graft harvest", "saphenous vein"],
  "cir36": ["thoracostomy tube patient", "chest tube insertion", "chest tube patient"],
  "cir40": ["IV antibiotic infusion", "syringe drawing medication vial", "anesthesia induction operating room"],
  "go29": ["oxytocin", "syntocinon ampoule", "labour ward nurse"],
  "go37": ["pelvic ultrasound normal uterus", "transabdominal ultrasound uterus", "uterus ultrasound"],
  "go50": ["salpingitis ultrasound", "tubo-ovarian abscess ultrasound", "hydrosalpinx ultrasound", "ceftriaxone"],
}


CONSULTAS10 = {
  "go42": ["levonorgestrel intrauterine system", "Mirena device photo", "hormonal IUD hand", "Kyleena"],
  "ped28": ["child with Down syndrome playing", "Down syndrome kid smiling", "criança síndrome de Down"],
}

# Clínica Médica, segunda rodada: as sem candidata e as de primeira escolha ruim (2026-10-07)
CONSULTAS11 = {
  "cm02": ["Victoza liraglutide", "liraglutide injection", "Saxenda pen", "GLP-1 receptor agonist pen"],
  "cm06": ["albumin infusion", "human albumin bottle", "cirrhosis ascites patient", "Albumin solution vial"],
  "cm18": ["atorvastatin tablet blister", "Lipitor tablets", "statin pills", "coronary atherosclerosis histology"],
  "cm23": ["tetanus toxoid vaccine", "Tdap vaccine vial", "laceration wound leg", "vaccination syringe arm"],
  "cm27": ["laryngoscope intubation", "endotracheal tube intubation mannequin", "Macintosh laryngoscope", "intubation emergency department"],
  "cm30": ["femoral neck fracture x-ray", "hip fracture radiograph", "zoledronic acid", "osteoporosis vertebral fracture radiograph"],
  "cm31": ["intravenous drip bag", "IV infusion saline hospital", "glucose meter hyperglycemia", "blood glucose meter"],
  "cm34": ["elderly man cane walking", "old man walking frame", "frailty elderly", "geriatric patient walker"],
  "cm35": ["cavitary pneumonia chest x-ray", "lung abscess radiograph", "pneumonia cavitation CT", "Staphylococcus aureus pneumonia"],
  "cm47": ["CPAP machine mask", "obstructive sleep apnea CPAP", "polysomnography patient", "blood pressure cuff clinic"],
}

CONSULTAS12 = {
  "cm30": ["intertrochanteric fracture radiograph", "femoral neck fracture radiograph", "Schenkelhalsfraktur Röntgen", "hip fracture elderly x-ray", "Garden fracture radiograph"],
}


CONSULTAS13 = {
  # Volume 2 · Pediatria (2026-11-26): ids sem candidata na primeira rodada, ou com uma só fora do assunto
  "ped52": ["bronchiolitis", "infant nasal suction bulb", "baby runny nose"],
  "ped54": ["zinc supplement", "oral rehydration solution", "zinc tablets"],
  "ped58": ["patient monitor hospital", "vital signs monitor", "pediatric intensive care"],
  "ped60": ["defibrillator", "automated external defibrillator", "manual defibrillator paddles"],
  "ped61": ["blood pressure measurement", "sphygmomanometer cuff", "blood pressure child"],
  "ped63": ["penicillin injection", "benzathine benzylpenicillin", "levonorgestrel emergency contraception"],
  "ped64": ["umbilical catheter", "neonatal intensive care unit", "newborn resuscitation"],
  "ped65": ["doctor consultation teenager", "adolescent health clinic", "doctor talking to patient"],
  "ped68": ["Ringer's solution", "intravenous therapy", "IV fluid bag"],
  "ped69": ["CT scan head", "computed tomography scanner", "head CT scan normal"],
  "ped70": ["high-flow nasal cannula", "nasal cannula infant", "oxygen therapy infant"],
  "ped71": ["atropine", "organophosphate", "pesticide bottle"],
  "ped73": ["inactivated polio vaccine", "poliomyelitis vaccine", "polio vaccination"],
  "ped74": ["child fever thermometer", "digital thermometer", "sick child"],
  "ped77": ["autism", "child playing alone", "toy cars lined up"],
  "ped79": ["pulse oximeter", "pulse oximeter finger", "oximeter infant"],
  "ped81": ["neonatal transport incubator", "transport incubator", "newborn incubator ambulance"],
  "ped82": ["vitamin K", "phytomenadione", "newborn injection thigh"],
  "ped83": ["ferrous sulfate", "iron supplement", "iron drops"],
  "ped86": ["renal ultrasound", "kidney ultrasonography", "ultrasound kidney"],
  "ped88": ["Bordetella pertussis", "whooping cough", "pertussis vaccine"],
  "ped91": ["sleeping toddler", "child sleeping", "baby sleeping crib"],
  "ped92": ["atopic dermatitis", "eczema arm", "atopic eczema child"],
  "ped94": ["paracetamol", "acetaminophen tablets", "acetylcysteine"],
  "ped95": ["pediatric emergency department", "emergency room child", "child hospital bed intravenous"],
  "ped96": ["saline bag", "sodium chloride infusion", "intravenous saline"],
}


def candidatos2(tabela=None):
    c = json.load(open(CANDIDATOS, encoding="utf-8"))
    for qid, buscas in (tabela or CONSULTAS2).items():
        novos = []
        for termo in buscas:
            try:
                r = commons.api({"action": "query", "generator": "search", "gsrsearch": termo, "gsrnamespace": 6,
                                 "gsrlimit": 15, "prop": "imageinfo", "iiprop": "url|extmetadata|size|mime", "iiurlwidth": 1400})
            except Exception as e:
                print(qid, termo, "ERRO", e); time.sleep(2); continue
            for p in sorted(r.get("query", {}).get("pages", {}).values(), key=lambda p: p.get("index", 99)):
                i = commons.info(p)
                if i["ok"] and i["mime"] in ("image/jpeg", "image/png") and (i["w"] or 0) >= MIN_LADO and (i["h"] or 0) >= MIN_LADO:
                    i["busca"] = termo
                    if all(i["titulo"] != x["titulo"] for x in novos + c.get(qid, [])):
                        novos.append(i)
            time.sleep(0.3)
        c[qid] = novos[:10] + c.get(qid, [])
        print(qid)
        for i in novos[:10]:
            print("    ", i["titulo"][5:95], "|", i["w"], "x", i["h"], "|", i["lic"][:14], "|", i["busca"])
    json.dump(c, open(CANDIDATOS, "w", encoding="utf-8"), ensure_ascii=False, indent=1)


# Autores que o Commons devolve sujos (HTML, aviso, "?") — o nome que entra na fonte.
AUTORES = {
  "ped12": "Glow (Wikimedia Commons)",
  "prev02": "Mikael Häggström",
  "prev04": "autor não identificado",
  "prev07": "Wellcome Collection",
  "prev09": "Wujaszek (pl.wikipedia)",
  "cir01": "Streetz-van der Werf et al.",
  "cir05": "U.S. Navy",
  "cir09": "Apostolos Stamatiadis",
  "cir16": "Clinical Cases (Wikipedia)",
  "go03": "Wolfgang Moroder",
  "go06": "Mikael Häggström",
  "go11": "Wolfgang Moroder",
  "go18": "Janice Carr, CDC",
  "go21": "KGH",
  "go25": "Wellcome Collection",
}


def gerar():
    """figuras/figuras.json (fatos da máquina: arquivo, tamanho, autor, licença,
    página) e figuras/FONTES.md, os dois a partir de escolhas.json + candidatos.json
    + os arquivos gravados. A legenda fica à parte, em ferramentas/legendas.js."""
    import re
    from PIL import Image
    c = json.load(open(CANDIDATOS, encoding="utf-8"))
    e = json.load(open(ESCOLHAS, encoding="utf-8"))
    saida = {}
    linhas = ["# Fontes das figuras", "",
              "Toda imagem vem do Wikimedia Commons sob CC0, domínio público, CC BY ou CC BY-SA — nunca NC, nunca ND. "
              "Cada uma foi reduzida para no máximo 1400 px (JPEG 85) por ferramentas/commons.py, chamado por ferramentas/figuras.py; "
              "a escolha está em figuras/escolhas.json e a legenda em ferramentas/legendas.js. "
              "GERADO por `python ferramentas/figuras.py gerar` — não edite à mão.", "",
              "| Questão | Arquivo | Título no Commons | Autor | Licença | Tamanho gravado |", "|---|---|---|---|---|---|"]
    for qid in CONSULTAS:
        titulo = e.get(qid)
        if not titulo:
            print(qid, "SEM ESCOLHA"); continue
        # a escolha pode ter vindo da lista de outra questão (a busca de cir02 achou a foto de cir03)
        info = next((i for i in c.get(qid, []) if i["titulo"] == titulo), None) or next((i for l in c.values() for i in l if i["titulo"] == titulo), None)
        if not info:
            print(qid, "escolha fora de candidatos.json:", titulo); continue
        arq = os.path.join(PASTA, qid + ".jpg")
        if not os.path.exists(arq):
            print(qid, "arquivo não baixado"); continue
        im = Image.open(arq); w, h = im.size
        autor = AUTORES.get(qid) or re.sub(r"<[^>]+>", "", info.get("autor") or "").strip() or "autor não informado"
        autor = re.sub(r"\s+", " ", autor)
        autor = re.sub(r"\s*\(talk\)", "", autor)
        autor = re.sub(r"\s+from\s+[A-Z].*$", "", autor)
        fonte = "%s · %s · Wikimedia Commons" % (autor, info["lic"])
        saida[qid] = {"src": "figuras/%s.jpg" % qid, "w": w, "h": h, "fonte": fonte, "titulo": titulo, "pagina": info["pagina"], "bytes": os.path.getsize(arq)}
        linhas.append("| %s | %s | [%s](%s) | %s | %s | %d×%d, %d KB |" % (qid, saida[qid]["src"], titulo.replace("|", "\\|"), info["pagina"], autor.replace("|", "\\|"), info["lic"], w, h, saida[qid]["bytes"] // 1024))
    json.dump(saida, open(os.path.join(PASTA, "figuras.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    open(os.path.join(PASTA, "FONTES.md"), "w", encoding="utf-8", newline="\n").write("\n".join(linhas) + "\n")
    print("%d figuras em figuras/figuras.json e figuras/FONTES.md" % len(saida))
    for qid, f in saida.items():
        print("%-7s %4dx%-4d %4d KB  %s" % (qid, f["w"], f["h"], f["bytes"] // 1024, f["fonte"][:70]))


if __name__ == "__main__":
    modo = sys.argv[1] if len(sys.argv) > 1 else ""
    if modo == "candidatos":
        candidatos()
    elif modo == "candidatos2":
        candidatos2()
    elif modo == "candidatos3":
        candidatos2(CONSULTAS3)
    elif modo == "candidatos4":
        candidatos2(CONSULTAS4)
    elif modo == "candidatos5":
        candidatos2(CONSULTAS5)
    elif modo == "candidatos6":
        candidatos2(CONSULTAS6)
    elif modo == "candidatos7":
        candidatos2(CONSULTAS7)
    elif modo == "candidatos8":
        candidatos2(CONSULTAS8)
    elif modo == "candidatos9":
        candidatos2(CONSULTAS9)
    elif modo == "candidatos10":
        candidatos2(CONSULTAS10)
    elif modo == "candidatos11":
        candidatos2(CONSULTAS11)
    elif modo == "candidatos12":
        candidatos2(CONSULTAS12)
    elif modo == "candidatos13":
        candidatos2(CONSULTAS13)
    elif modo == "escolher":
        escolher()
    elif modo == "baixar":
        baixar(sys.argv[2:] or None)
    elif modo == "gerar":
        gerar()
    elif modo == "folha":
        folha(sys.argv[2:] or None)
    elif modo == "trocar" and len(sys.argv) == 4:
        e = json.load(open(ESCOLHAS, encoding="utf-8")); e[sys.argv[2]] = sys.argv[3]
        json.dump(e, open(ESCOLHAS, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        p = os.path.join(PASTA, sys.argv[2] + ".jpg")
        if os.path.exists(p): os.remove(p)
        baixar([sys.argv[2]])
    else:
        print(__doc__)
