/* "Sobre a matéria" — a página de livro-texto de cada questão de go.
   Chave "fonte#numero" (a mesma da entrada); HTML em linhas, uma tag de
   bloco por linha (montar.js tira as quebras). Seis partes na ordem:
   Objetivos de aprendizagem · Termos-chave · O essencial · Ponto clínico
   (div.ponto) · Resumo · Verifique o que aprendeu. As regras estão em
   verificar.js. Escrito à mão. */
module.exports = {
"susp2026#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a mola hidatiforme completa pelos sinais clássicos.</li>
<li>Explicar por que hipertensão antes de 20 semanas obriga a pensar em doença trofoblástica.</li>
<li>Conduzir o esvaziamento e o seguimento com hCG.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Mola completa</dt>
<dd>Diploide, de origem paterna, sem embrião; vesículas difusas, hCG muito alto, mais risco de neoplasia.</dd>
<dt>Mola parcial</dt>
<dd>Triploide, com tecido fetal; hCG menor e menor risco de malignização.</dd>
<dt>Cistos tecaluteínicos</dt>
<dd>Cistos ovarianos bilaterais pela hiperestimulação do hCG; regridem sozinhos.</dd>
<dt>Neoplasia trofoblástica gestacional</dt>
<dd>Persistência ou elevação do hCG após o esvaziamento; tratada com quimioterapia.</dd>
</dl>
<h4>O essencial</h4>
<p>A mola completa é uma gestação sem embrião em que o trofoblasto prolifera e produz <strong>hCG em quantidade enorme</strong>. Daí vêm os sinais: <strong>sangramento escuro</strong> no primeiro ou segundo trimestre, <strong>útero maior do que a idade gestacional</strong> e amolecido, <strong>hiperêmese</strong> intensa, <strong>hipertireoidismo</strong> (o hCG estimula o receptor de TSH: taquicardia, fraqueza, tremor), cistos tecaluteínicos e, o mais característico, <strong>pré-eclâmpsia antes de 20 semanas</strong>. Hipertensão com proteinúria nessa idade gestacional, sem ultrassonografia prévia, é mola até prova em contrário, porque a pré-eclâmpsia da gestação normal não acontece antes das 20 semanas.</p>
<p>O diagnóstico é a <strong>ultrassonografia</strong> (imagem em "tempestade de neve" ou cachos de uva, sem feto na completa; feto malformado com placenta cística na parcial) e o <strong>hCG</strong> muito acima do esperado. O tratamento é o <strong>esvaziamento por vácuo-aspiração</strong>, com ocitocina após o início da aspiração, tipagem e imunoglobulina anti-D se Rh negativo, e histerectomia apenas em mulheres com prole completa e mais de 40 anos; a pré-eclâmpsia e o hipertireoidismo se resolvem com o esvaziamento. O material vai à histopatologia.</p>
<p>O <strong>seguimento</strong> é o hCG semanal até negativar por três semanas consecutivas e depois mensal por 6 meses (completa) ou 3 (parcial), com <strong>anticoncepção</strong> eficaz nesse período, porque uma nova gestação confunde a curva. Platô por três semanas, elevação ou persistência além de 6 meses definem <strong>neoplasia trofoblástica gestacional</strong>, tratada com metotrexato ou esquemas combinados conforme o escore de risco, com cura próxima de 100%.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Grávida de 17 semanas sem ultrassom, com útero de 24 semanas, vômitos incoercíveis, taquicardia e pressão alta: peça o hCG e o ultrassom antes de qualquer outra coisa, e prepare o esvaziamento. A pré-eclâmpsia antes das 20 semanas é a assinatura da mola, e o hipertireoidismo é o que faz o coração correr.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sangramento escuro, útero grande, hiperêmese, hipertireoidismo, cistos tecaluteínicos, pré-eclâmpsia precoce.</li>
<li>Hipertensão antes de 20 semanas obriga a pensar em mola.</li>
<li>Ultrassonografia e hCG; esvaziamento por vácuo-aspiração; anti-D se Rh negativo.</li>
<li>hCG semanal até negativar e mensal por 6 meses, com anticoncepção; platô ou elevação: neoplasia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a mola causa hipertireoidismo? <details><summary>Resposta</summary>Porque o hCG em quantidade muito alta estimula o receptor de TSH.</details></li>
<li>O que define neoplasia trofoblástica após o esvaziamento? <details><summary>Resposta</summary>Platô do hCG por três semanas, elevação ou persistência além de 6 meses.</details></li>
</ol>
`,
"susp2026#62": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir vacinas inativadas, permitidas na gestação, das vivas, adiadas para o puerpério.</li>
<li>Aplicar o calendário da gestante: dTpa, hepatite B, influenza, covid-19, dT.</li>
<li>Saber que a tríplice viral, a varicela e a HPV esperam o puerpério.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Vacina inativada</dt>
<dd>Sem microrganismo vivo; segura na gestação (dTpa, hepatite B, influenza, covid-19, dT).</dd>
<dt>Vacina de vírus vivo atenuado</dt>
<dd>Tríplice viral, varicela, febre amarela: contraindicadas na gestação pelo risco teórico ao feto.</dd>
<dt>dTpa</dt>
<dd>Difteria, tétano e coqueluche acelular, a partir de 20 semanas em toda gestação, para proteger o recém-nascido.</dd>
<dt>Puerpério</dt>
<dd>Momento de aplicar as vacinas vivas adiadas; a amamentação não contraindica.</dd>
</dl>
<h4>O essencial</h4>
<p>A regra que organiza a vacinação da gestante é simples: <strong>inativadas podem; vivas esperam</strong>. O calendário do PNI para a gestante inclui a <strong>dTpa</strong> a partir de <strong>20 semanas</strong>, em <strong>toda gestação</strong>, mesmo que a última dose tenha sido recente, porque os anticorpos passados ao feto protegem o recém-nascido da coqueluche nos primeiros meses (quem nunca se vacinou completa o esquema com dT e recebe a dTpa como uma das doses); a <strong>hepatite B</strong>, em três doses, iniciada em <strong>qualquer trimestre</strong> se a gestante for suscetível; a <strong>influenza</strong> na campanha anual, em qualquer idade gestacional; e a <strong>covid-19</strong> conforme a recomendação vigente.</p>
<p>As <strong>vacinas vivas</strong> são contraindicadas: <strong>tríplice viral</strong> (sarampo, caxumba, rubéola), <strong>varicela</strong> e, salvo risco epidemiológico alto, <strong>febre amarela</strong>. A gestante suscetível à rubéola ou ao sarampo, portanto, é vacinada <strong>no puerpério</strong>, de preferência antes da alta da maternidade, e a amamentação não é impedimento; a vacinação inadvertida na gestação não indica interrupção, apenas seguimento. A vacina contra o HPV, embora inativada, não é recomendada na gestação por falta de dados, e é adiada.</p>
<p>Diante da gestante de 24 semanas com dúvidas, a consulta revisa o cartão: dTpa agora, hepatite B se as sorologias mostram suscetibilidade, influenza se for a época, covid-19 conforme o esquema, e o registro de que a tríplice viral e a varicela ficam para depois do parto. Soro e imunoglobulina (tétano, hepatite B, varicela, raiva) podem ser usados quando indicados.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante com sorologia negativa para rubéola não recebe a tríplice viral agora, mas sai da maternidade vacinada, e o cartão da mãe deve dizer isso antes da alta. A dTpa, por outro lado, não espera nem se pula: cada gestação, a partir de 20 semanas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Inativadas podem: dTpa a partir de 20 semanas em toda gestação, hepatite B em qualquer trimestre, influenza, covid-19.</li>
<li>Vivas esperam: tríplice viral, varicela, febre amarela (salvo alto risco).</li>
<li>Puerpério: vacinar as vivas adiadas antes da alta; amamentação não contraindica.</li>
<li>HPV adiada na gestação; imunoglobulinas podem ser usadas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando a gestante suscetível recebe a tríplice viral? <details><summary>Resposta</summary>No puerpério, de preferência antes da alta da maternidade; é vacina viva, contraindicada na gestação.</details></li>
<li>Por que a dTpa se repete em toda gestação? <details><summary>Resposta</summary>Para transferir anticorpos contra a coqueluche ao feto e proteger o recém-nascido nos primeiros meses.</details></li>
</ol>
`,
"susp2026#63": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os componentes do ultrassom morfológico de 11 a 14 semanas.</li>
<li>Explicar o papel do Doppler das artérias uterinas no rastreio de pré-eclâmpsia.</li>
<li>Saber o que o exame de primeiro trimestre vê e o que fica para o de segundo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Translucência nucal</dt>
<dd>Espaço líquido na nuca fetal medido com CCN de 45 a 84 mm; aumentada acima do percentil 95 ou de 3 mm.</dd>
<dt>Osso nasal e ducto venoso</dt>
<dd>Marcadores adicionais de aneuploidia: osso nasal ausente e onda a reversa no ducto venoso.</dd>
<dt>Doppler das artérias uterinas</dt>
<dd>Índice de pulsatilidade médio elevado indica placentação deficiente e maior risco de pré-eclâmpsia.</dd>
<dt>Rastreio combinado</dt>
<dd>Idade materna, translucência nucal, bioquímica (PAPP-A e beta-hCG) e marcadores: risco de trissomias.</dd>
</dl>
<h4>O essencial</h4>
<p>O exame de <strong>11 a 13 semanas e 6 dias</strong> é o primeiro grande ponto de avaliação fetal. Ele <strong>data</strong> a gestação pelo comprimento cabeça-nádega (o método mais preciso), conta os fetos e define a <strong>corionicidade</strong>, avalia a <strong>anatomia precoce</strong> (crânio, coluna, parede abdominal, membros, estômago, bexiga, coração em quatro câmaras) e mede os <strong>marcadores de aneuploidia</strong>: <strong>translucência nucal</strong>, <strong>osso nasal</strong>, <strong>fluxo no ducto venoso</strong> e regurgitação tricúspide. Combinados à idade materna e à bioquímica (PAPP-A e beta-hCG livre), produzem um risco de trissomia 21, 18 e 13 que orienta o teste de DNA fetal ou o diagnóstico invasivo.</p>
<p>O mesmo exame rastreia a <strong>pré-eclâmpsia</strong>: o <strong>Doppler das artérias uterinas</strong>, com índice de pulsatilidade médio elevado, revela a invasão trofoblástica deficiente que está na origem da forma precoce e grave. O algoritmo da Fetal Medicine Foundation combina fatores maternos, pressão arterial média, índice de pulsatilidade das uterinas e PlGF, e identifica as gestantes de alto risco, que recebem <strong>ácido acetilsalicílico</strong> 100 a 150 mg à noite, iniciado antes de 16 semanas, com redução importante da pré-eclâmpsia pré-termo. Sem o algoritmo completo, os fatores clínicos de risco (hipertensão crônica, pré-eclâmpsia prévia, diabetes, doença renal, lúpus, gemelaridade, obesidade, primigesta, extremos de idade) já justificam a aspirina.</p>
<p>O que o primeiro trimestre não faz: a anatomia detalhada de coração, face, rins e sistema nervoso e a biometria de crescimento ficam para o <strong>morfológico de 20 a 24 semanas</strong>, quando também se mede o colo por via transvaginal e se repete o Doppler das uterinas. A ultrassonografia não substitui o cariótipo: ela estima risco, e o diagnóstico é genético.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na consulta em que se pede o morfológico de primeiro trimestre, peça também o Doppler das uterinas e a pressão arterial média, e decida a aspirina antes das 16 semanas: depois disso a prevenção da pré-eclâmpsia perde eficácia. A translucência nucal é um risco, não um diagnóstico; explique isso antes do resultado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>11 a 14 semanas: datação, corionicidade, anatomia precoce, translucência nucal, osso nasal, ducto venoso.</li>
<li>Rastreio combinado com bioquímica estima risco de trissomias; diagnóstico é genético.</li>
<li>Doppler das artérias uterinas rastreia pré-eclâmpsia; alto risco recebe aspirina antes de 16 semanas.</li>
<li>Anatomia detalhada e colo ficam para o morfológico de 20 a 24 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Para que serve o Doppler das artérias uterinas no primeiro trimestre? <details><summary>Resposta</summary>Para calcular o risco de pré-eclâmpsia, ao revelar a placentação deficiente, e indicar a aspirina antes de 16 semanas.</details></li>
<li>Quais são os marcadores de aneuploidia do exame de 11 a 14 semanas? <details><summary>Resposta</summary>Translucência nucal, osso nasal, fluxo no ducto venoso e regurgitação tricúspide.</details></li>
</ol>
`,
"susp2026#64": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Identificar a gestante de risco para parto pré-termo espontâneo.</li>
<li>Aplicar o corte de 25 mm do colo uterino medido por via transvaginal.</li>
<li>Indicar progesterona vaginal e cerclagem conforme a história e a medida.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Colo curto</dt>
<dd>Comprimento cervical abaixo de 25 mm entre 16 e 24 semanas, por via transvaginal.</dd>
<dt>Progesterona vaginal</dt>
<dd>200 mg ao dia até 36 semanas para colo curto, com ou sem história de prematuridade.</dd>
<dt>Cerclagem</dt>
<dd>Sutura do colo entre 12 e 24 semanas; por história, por ultrassom (colo curto com prematuro prévio) ou de emergência.</dd>
<dt>Parto pré-termo espontâneo prévio</dt>
<dd>Parto antes de 37 semanas por trabalho de parto ou rotura de membranas; o maior fator de risco.</dd>
</dl>
<h4>O essencial</h4>
<p>A prematuridade espontânea tem dois preditores fortes: a <strong>história de parto pré-termo anterior</strong>, sobretudo antes de 34 semanas, e o <strong>colo curto</strong> na gestação atual. A medida do colo é feita por <strong>ultrassonografia transvaginal</strong> (a via abdominal superestima e é inadequada), entre 16 e 24 semanas, no morfológico de segundo trimestre em toda gestante, e de forma seriada, a cada 2 semanas, nas de alto risco. O <strong>corte é 25 mm</strong>: abaixo dele o risco de parto antes de 34 semanas sobe de forma exponencial.</p>
<p>As intervenções dependem da combinação. Colo curto <strong>sem história</strong> de prematuridade: <strong>progesterona vaginal</strong> diária até 36 semanas, que reduz o parto pré-termo e a morbidade neonatal. História de prematuro prévio <strong>sem colo curto</strong>: progesterona vaginal desde 16 semanas e medida seriada do colo. Colo abaixo de 25 mm <strong>com história de parto antes de 34 semanas</strong>: <strong>cerclagem</strong> indicada por ultrassom, que nesse grupo reduz o parto pré-termo e a mortalidade perinatal; a cerclagem por história (três ou mais perdas de segundo trimestre ou partos pré-termo) é feita eletivamente entre 12 e 14 semanas, e a de emergência, na dilatação com membranas visíveis sem infecção. O pessário é opção em estudo, sem benefício consistente.</p>
<p>O que não previne: repouso no leito, tocolítico profilático, antibiótico sem infecção e cerclagem para colo curto sem história em gestação única (a progesterona é a resposta). Na gestação gemelar, a evidência é fraca para todas as intervenções, e a cerclagem por colo curto pode até prejudicar. O tratamento da bacteriúria assintomática e da vaginose em gestantes de risco, a cessação do tabagismo e o intervalo interpartal de 18 meses completam a prevenção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante com parto anterior aos 30 semanas e colo de 20 mm às 20 semanas não recebe apenas progesterona: recebe a cerclagem, porque é o único grupo em que a sutura muda o desfecho. A mesma medida em quem nunca teve prematuro pede progesterona vaginal e nada de cirurgia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Preditores: parto pré-termo prévio e colo curto (abaixo de 25 mm, transvaginal, 16 a 24 semanas).</li>
<li>Colo curto sem história: progesterona vaginal até 36 semanas.</li>
<li>Colo curto com parto prévio antes de 34 semanas: cerclagem.</li>
<li>Repouso, tocolítico profilático e antibiótico sem infecção não previnem.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a via e o corte da medida do colo para prever prematuridade? <details><summary>Resposta</summary>Ultrassonografia transvaginal, com corte de 25 mm entre 16 e 24 semanas.</details></li>
<li>Quando a cerclagem está indicada por ultrassom? <details><summary>Resposta</summary>Colo abaixo de 25 mm em gestante com parto pré-termo espontâneo anterior, sobretudo antes de 34 semanas.</details></li>
</ol>
`,
"susp2026#65": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a abordagem da hemorragia pós-parto pelos quatro Ts.</li>
<li>Executar a primeira medida na atonia: massagem uterina e ocitocina.</li>
<li>Escalar o tratamento até o balão, a cirurgia e a transfusão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hemorragia pós-parto</dt>
<dd>Perda de 500 mL ou mais no parto vaginal (1.000 na cesárea) ou qualquer perda com instabilidade.</dd>
<dt>Quatro Ts</dt>
<dd>Tônus (atonia, 70%), Trauma (lacerações, inversão), Tecido (restos, acretismo), Trombina (coagulopatia).</dd>
<dt>Massagem uterina</dt>
<dd>Compressão bimanual do fundo, primeira medida da atonia, junto do esvaziamento vesical e da ocitocina.</dd>
<dt>Balão de Bakri</dt>
<dd>Tamponamento intrauterino quando os uterotônicos falham; ponte para a cirurgia.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia pós-parto é a principal causa de morte materna no mundo, e a resposta precisa ser <strong>sequencial e rápida</strong>. A prevenção é a <strong>ocitocina profilática</strong> no terceiro período em todo parto. Diante do sangramento aumentado, a primeira ação é chamar ajuda, monitorar, obter acesso e <strong>procurar a causa pelos quatro Ts</strong>. A <strong>atonia</strong> responde por 70% dos casos: útero amolecido, acima da cicatriz umbilical, com sangramento que não para.</p>
<p>Na atonia, a <strong>primeira conduta é a massagem uterina</strong> (compressão bimanual, com esvaziamento da bexiga), que estimula a contração de imediato e reduz o sangramento enquanto os fármacos agem; junto dela, <strong>ocitocina</strong> intravenosa em infusão. Se não responde: <strong>metilergometrina</strong> intramuscular (contraindicada na hipertensão), <strong>misoprostol</strong> retal ou sublingual, e o <strong>ácido tranexâmico</strong> 1 g intravenoso nas primeiras 3 horas, que reduz mortalidade. Persistindo, o <strong>balão de Bakri</strong> tampona o útero, e a falha leva à cirurgia: suturas compressivas (B-Lynch), ligadura das artérias uterinas e, como último recurso, histerectomia. A reanimação corre em paralelo, com cristaloide limitado e hemocomponentes cedo, em proporção, e o traje antichoque não pneumático nas transferências.</p>
<p>Os outros Ts têm outras respostas: <strong>trauma</strong> exige revisão do canal e sutura (e a inversão uterina, redução manual); <strong>tecido</strong> exige curagem ou curetagem sob ultrassom (e o acretismo, cirurgia planejada); <strong>trombina</strong> exige correção da coagulopatia com plasma, fibrinogênio e plaquetas. Um útero contraído e firme com sangramento contínuo aponta para trauma ou tecido, não para atonia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Puérpera que sangra três horas após o parto: a mão vai ao fundo do útero antes de qualquer prescrição. Se ele está mole, massagem e ocitocina no mesmo minuto, e a sequência de uterotônicos com o relógio na parede; se está firme, a resposta está no canal ou dentro do útero, e a massagem não vai resolver.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Quatro Ts: tônus (70%), trauma, tecido, trombina; ocitocina profilática em todo parto.</li>
<li>Atonia: massagem uterina e ocitocina primeiro; depois metilergometrina, misoprostol, ácido tranexâmico.</li>
<li>Falha dos fármacos: balão de Bakri; depois suturas compressivas, ligaduras, histerectomia.</li>
<li>Reanimação em paralelo com hemocomponentes cedo; útero firme sangrando é trauma ou tecido.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a primeira medida na hemorragia por atonia? <details><summary>Resposta</summary>A massagem uterina com compressão bimanual, junto do esvaziamento vesical e da ocitocina.</details></li>
<li>Em que situação a metilergometrina é contraindicada? <details><summary>Resposta</summary>Na hipertensão arterial e na pré-eclâmpsia.</details></li>
</ol>
`,
"susp2026#66": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a prenhez ectópica rota pela dor súbita, pelo choque e pelo sangramento vaginal discreto.</li>
<li>Diferenciá-la do abortamento e das outras causas de abdome agudo no primeiro trimestre.</li>
<li>Conduzir: estabilização e laparoscopia ou laparotomia imediata.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Gravidez ectópica</dt>
<dd>Implantação fora do útero, 95% na tuba; fatores: doença inflamatória pélvica, cirurgia tubária, ectópica prévia, DIU, reprodução assistida.</dd>
<dt>Ectópica rota</dt>
<dd>Rotura da tuba com hemoperitônio: dor súbita, sinais de irritação peritoneal, choque hipovolêmico.</dd>
<dt>Sinal de Proust</dt>
<dd>Dor intensa ao toque do fundo de saco posterior (grito de Douglas) pelo sangue acumulado.</dd>
<dt>Salpingectomia</dt>
<dd>Retirada da tuba rota; a salpingostomia conserva a tuba na ectópica íntegra em quem deseja fertilidade.</dd>
</dl>
<h4>O essencial</h4>
<p>Toda mulher em idade fértil com dor abdominal e atraso menstrual tem gravidez ectópica até prova em contrário. A forma <strong>íntegra</strong> se apresenta com dor pélvica insidiosa, <strong>sangramento vaginal escuro e escasso</strong> e hCG positivo, com útero vazio na ultrassonografia transvaginal e massa anexial; a forma <strong>rota</strong> muda o cenário: <strong>dor súbita e intensa</strong> no abdome inferior, irradiada ao ombro pela irritação diafragmática, <strong>sinais de choque</strong> (taquicardia, hipotensão, palidez, sudorese, lipotimia) e abdome com <strong>defesa e descompressão dolorosa</strong>, com dor ao toque do fundo de saco.</p>
<p>A chave diagnóstica é a <strong>desproporção</strong>: a mulher está em choque, mas o sangramento vaginal é pequeno, porque o sangue está na cavidade peritoneal, não saindo pelo colo. No <strong>abortamento</strong>, ao contrário, o sangramento vaginal é abundante, com cólicas, colo aberto e restos, e o choque é proporcional ao que se vê. Na torção anexial há massa e dor, mas hCG negativo e sem choque hemorrágico; na rotura de cisto de corpo lúteo, o quadro pode imitar a ectópica, e a laparoscopia resolve as duas.</p>
<p>Na ectópica rota, o tratamento é <strong>cirúrgico e imediato</strong>: dois acessos, cristaloide, sangue reservado e <strong>laparoscopia</strong> (ou laparotomia se instabilidade grave ou sem recurso), com <strong>salpingectomia</strong>. A ultrassonografia, se disponível na sala, mostra líquido livre e confirma, mas não atrasa a cirurgia na instável. A ectópica íntegra, pequena, com hCG baixo e sem batimentos, pode receber metotrexato ou conduta expectante; a íntegra com tuba viável e desejo reprodutivo, salpingostomia. Rh negativo recebe imunoglobulina anti-D.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Atraso menstrual, dor que começou de repente, pressão baixa e pouco sangue no absorvente: não é abortamento, é hemoperitônio. Não espere o hCG quantitativo nem a ultrassonografia agendada; reanime e leve ao centro cirúrgico. A ectópica rota mata em horas, e o toque que faz gritar já fez o diagnóstico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dor súbita, choque e sangramento vaginal escasso no primeiro trimestre: ectópica rota.</li>
<li>Desproporção entre o choque e o sangramento visível; abortamento sangra por fora.</li>
<li>Instável: reanimar e laparoscopia ou laparotomia imediata com salpingectomia.</li>
<li>Íntegra e estável: metotrexato, expectante ou salpingostomia conforme critérios; anti-D se Rh negativo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que dado separa a ectópica rota do abortamento? <details><summary>Resposta</summary>Na ectópica rota o choque é desproporcional ao sangramento vaginal, que é escasso; no abortamento o sangramento é abundante.</details></li>
<li>Qual é a conduta na ectópica rota instável? <details><summary>Resposta</summary>Reanimação e cirurgia imediata, laparoscópica ou aberta, com salpingectomia.</details></li>
</ol>
`,
"susp2026#67": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar a glicemia de jejum da primeira consulta pelos três intervalos do protocolo brasileiro.</li>
<li>Diagnosticar diabetes gestacional com jejum de 92 a 125 mg/dL sem repetir.</li>
<li>Saber quem faz o teste de tolerância entre 24 e 28 semanas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Glicemia de jejum na primeira consulta</dt>
<dd>Abaixo de 92 normal; 92 a 125 diabetes gestacional; 126 ou mais diabetes prévio.</dd>
<dt>Diabetes mellitus gestacional</dt>
<dd>Hiperglicemia detectada na gestação abaixo dos critérios de diabetes franco.</dd>
<dt>TOTG 75 g de 24 a 28 semanas</dt>
<dd>Para quem teve jejum abaixo de 92: cortes 92, 180 e 153 mg/dL; um valor basta.</dd>
<dt>Cobertura parcial</dt>
<dd>Onde não há TOTG, repete-se a glicemia de jejum entre 24 e 28 semanas.</dd>
</dl>
<h4>O essencial</h4>
<p>O rastreamento brasileiro (OPAS, Ministério da Saúde, FEBRASGO e SBD, 2017) é universal e começa com a <strong>glicemia de jejum na primeira consulta</strong>, idealmente antes de 20 semanas. Os três intervalos decidem tudo: <strong>abaixo de 92 mg/dL</strong> é normal, e a gestante segue para o <strong>TOTG de 75 g entre 24 e 28 semanas</strong>; <strong>de 92 a 125 mg/dL</strong> é <strong>diabetes mellitus gestacional</strong>, diagnosticado com um único valor, sem repetição e sem TOTG; <strong>126 mg/dL ou mais</strong> é <strong>diabetes prévio</strong> descoberto na gestação, que se confirma com segunda amostra ou hemoglobina glicada de 6,5% e exige avaliação de retina, rim e coração.</p>
<p>Um valor de <strong>exatamente 92 mg/dL</strong> às 11 semanas é diabetes gestacional: o corte é inclusivo, e o IMC normal e a ausência de comorbidades não mudam a leitura. O erro clássico é chamar de "limítrofe" e pedir para repetir, ou mandar ao TOTG, que só é indicado para quem teve jejum abaixo de 92. O TOTG entre 24 e 28 semanas tem cortes de 92 (jejum), 180 (1 hora) e 153 mg/dL (2 horas), e um valor alterado fecha o diagnóstico. Onde não há TOTG disponível, o protocolo aceita repetir a glicemia de jejum nesse período.</p>
<p>Diagnosticado, o tratamento começa na mesma consulta: orientação nutricional, atividade física, automonitorização com metas de jejum abaixo de 95 e pós-prandial de 1 hora abaixo de 140, e insulina se as metas não forem atingidas em 1 a 2 semanas; a gestante passa ao pré-natal de alto risco compartilhado, com vigilância do crescimento fetal e reclassificação com TOTG 6 semanas após o parto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jejum de 92 na primeira consulta é diagnóstico, não alarme falso. Diga o nome da doença, entregue o plano alimentar e o glicosímetro e marque o retorno em duas semanas. Quem "repete para confirmar" perde o segundo trimestre inteiro de hiperglicemia fetal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Primeira consulta: abaixo de 92 normal; 92 a 125 diabetes gestacional; 126 ou mais diabetes prévio.</li>
<li>92 a 125: diagnóstico com um valor, sem repetir e sem TOTG.</li>
<li>Abaixo de 92: TOTG 75 g de 24 a 28 semanas (92/180/153, um valor basta).</li>
<li>Tratar de imediato: dieta, exercício, monitorização, insulina se preciso; reclassificar após o parto.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Glicemia de jejum de 92 mg/dL às 11 semanas: qual é o diagnóstico? <details><summary>Resposta</summary>Diabetes mellitus gestacional, com um único valor, sem necessidade de TOTG.</details></li>
<li>Quem faz o TOTG entre 24 e 28 semanas? <details><summary>Resposta</summary>As gestantes com glicemia de jejum abaixo de 92 mg/dL na primeira consulta.</details></li>
</ol>
`,
"susp2026#68": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Determinar a corionicidade no ultrassom de primeiro trimestre pelos sinais do lambda e do T.</li>
<li>Distinguir corionicidade de zigosidade.</li>
<li>Conhecer os riscos e o seguimento das gestações mono e dicoriônicas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Corionicidade</dt>
<dd>Número de placentas: dicoriônica (duas) ou monocoriônica (uma, compartilhada).</dd>
<dt>Sinal do lambda</dt>
<dd>Projeção triangular de tecido coriônico na base da membrana: dicoriônica.</dd>
<dt>Sinal do T</dt>
<dd>Membrana fina que se insere em ângulo reto na placenta única: monocoriônica.</dd>
<dt>Síndrome de transfusão feto-fetal</dt>
<dd>Anastomoses desbalanceadas na placenta monocoriônica; rastreada a cada 2 semanas a partir de 16 semanas.</dd>
</dl>
<h4>O essencial</h4>
<p>Na gestação gemelar, a informação que mais importa não é se os gêmeos são idênticos, é <strong>quantas placentas</strong> há. A <strong>corionicidade</strong> define o risco e o seguimento, e é determinada com máxima acurácia no <strong>ultrassom inicial</strong>, entre <strong>11 e 14 semanas</strong> (idealmente antes), quando a membrana e a base placentária são nítidas: o <strong>sinal do lambda</strong> (tecido coriônico em cunha na inserção da membrana espessa) diz <strong>dicoriônica</strong>; o <strong>sinal do T</strong> (membrana fina inserida em ângulo reto numa placenta única) diz <strong>monocoriônica</strong>; sem membrana, monoamniótica. Depois de 14 a 16 semanas o lambda desaparece e a distinção fica difícil; por isso a corionicidade se registra cedo e não se revisa.</p>
<p><strong>Corionicidade não é zigosidade</strong>: gêmeos dizigóticos são sempre dicoriônicos, mas monozigóticos podem ser dicoriônicos (divisão até o 3º dia), monocoriônicos diamnióticos (do 4º ao 8º dia, a maioria), monoamnióticos (do 9º ao 12º) ou unidos (após o 13º). Uma gestação dicoriônica de sexos iguais pode ser de idênticos; a monocoriônica é sempre de idênticos.</p>
<p>As <strong>monocoriônicas</strong> compartilham a circulação placentária e têm risco de <strong>síndrome de transfusão feto-fetal</strong> (10 a 15%), restrição seletiva e sequência anemia-policitemia: por isso o ultrassom é <strong>a cada 2 semanas a partir de 16 semanas</strong>, com avaliação de líquido, bexigas, Doppler e biometria, e o parto é programado em torno de 36 a 37 semanas (32 a 34 nas monoamnióticas). As <strong>dicoriônicas</strong> têm seguimento a cada 4 semanas e parto em torno de 37 a 38 semanas. Ambas somam risco de prematuridade, pré-eclâmpsia, diabetes gestacional e hemorragia pós-parto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando o primeiro ultrassom da gemelar chega sem a corionicidade descrita, peça outro antes das 14 semanas, e escreva na capa do cartão: mono ou di. É a única palavra que decide se a gestante volta em duas ou em quatro semanas e se o parto é às 36 ou às 38.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Corionicidade define risco e seguimento; determinada no ultrassom inicial (11 a 14 semanas).</li>
<li>Lambda: dicoriônica; T: monocoriônica; sem membrana: monoamniótica.</li>
<li>Corionicidade não é zigosidade: monozigóticos podem ser di ou monocoriônicos.</li>
<li>Monocoriônica: ultrassom a cada 2 semanas desde 16 semanas, parto às 36 a 37; dicoriônica: a cada 4 semanas, parto às 37 a 38.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o melhor momento para determinar a corionicidade e por quê? <details><summary>Resposta</summary>No ultrassom inicial, até 14 semanas, quando os sinais do lambda e do T são nítidos; depois a distinção fica difícil.</details></li>
<li>Gêmeos monocoriônicos são sempre idênticos? <details><summary>Resposta</summary>Sim; a placenta única indica origem monozigótica, mas dicoriônicos podem ser idênticos ou não.</details></li>
</ol>
`,
"susp2026#69": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reproduzir a cronologia dos sinais ultrassonográficos do primeiro trimestre.</li>
<li>Relacionar cada sinal à idade gestacional e ao hCG.</li>
<li>Aplicar a cronologia ao diagnóstico de gestação inviável e de ectópica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Reação decidual</dt>
<dd>Espessamento do endométrio pela progesterona, primeiro sinal, inespecífico.</dd>
<dt>Saco gestacional</dt>
<dd>Coleção anecoica com halo ecogênico, excêntrica no endométrio, visível a partir de 4,5 a 5 semanas.</dd>
<dt>Vesícula vitelínica</dt>
<dd>Primeira estrutura dentro do saco, entre 5 e 5,5 semanas; confirma a gestação intrauterina.</dd>
<dt>Zona discriminatória</dt>
<dd>hCG acima de 1.500 a 3.500 mUI/mL com útero vazio na transvaginal: suspeita de ectópica.</dd>
</dl>
<h4>O essencial</h4>
<p>A ultrassonografia transvaginal enxerga a gestação numa <strong>sequência fixa</strong>. Primeiro, a <strong>reação decidual</strong>, o endométrio espesso e ecogênico da fase lútea prolongada, que existe também na ectópica. Aos <strong>4,5 a 5 semanas</strong>, o <strong>saco gestacional</strong>, anecoico, com halo ecogênico, implantado de forma excêntrica no endométrio (o sinal do duplo saco decidual o distingue do pseudossaco da ectópica, que fica central). Aos <strong>5 a 5,5 semanas</strong>, a <strong>vesícula vitelínica</strong> dentro do saco, que prova que a gestação é intrauterina. Aos <strong>5,5 a 6 semanas</strong>, o <strong>embrião</strong>, como um espessamento junto da vesícula, e logo os <strong>batimentos cardíacos</strong>, a partir de comprimento cabeça-nádega de 2 a 5 mm, com frequência que sobe de 100 para 150 a 170 bpm até a 9ª semana.</p>
<p>O hCG acompanha: o saco costuma aparecer com <strong>1.500 a 2.000 mUI/mL</strong>, e acima de <strong>3.500</strong> (zona discriminatória conservadora) a ausência de saco no útero torna a ectópica a hipótese principal. A datação pelo comprimento cabeça-nádega até 14 semanas é o método mais preciso e prevalece sobre a data da última menstruação quando a diferença é maior que 5 a 7 dias.</p>
<p>A mesma cronologia define a <strong>gestação inviável</strong>: comprimento cabeça-nádega de <strong>7 mm ou mais sem batimentos</strong>; saco gestacional com diâmetro médio de <strong>25 mm ou mais sem embrião</strong>; ausência de embrião com batimentos 2 semanas após um saco sem vesícula, ou 11 dias após um saco com vesícula. Abaixo desses critérios, o exame é repetido em 7 a 14 dias em vez de concluir; a "gestação de localização indeterminada" com hCG que não dobra em 48 horas é seguida até definir ectópica ou aborto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Saco sem vesícula com 5 semanas não é aborto, é cedo demais: repita em uma semana. Útero vazio com hCG de 4.000 não é "gestação muito inicial": é ectópica até prova em contrário. A cronologia é o que separa a paciência da urgência.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sequência: reação decidual, saco gestacional (4,5 a 5 semanas), vesícula vitelínica (5 a 5,5), embrião (5,5 a 6), batimentos.</li>
<li>Saco com hCG de 1.500 a 2.000; útero vazio acima de 3.500: ectópica provável.</li>
<li>Inviável: CCN 7 mm ou mais sem batimentos; saco 25 mm ou mais sem embrião; ausência de evolução em 11 a 14 dias.</li>
<li>Datação pelo CCN até 14 semanas prevalece sobre a última menstruação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a ordem dos sinais ultrassonográficos da gestação inicial? <details><summary>Resposta</summary>Reação decidual, saco gestacional, vesícula vitelínica, embrião e batimentos cardíacos.</details></li>
<li>Que achado prova que a gestação é intrauterina? <details><summary>Resposta</summary>A vesícula vitelínica (ou o embrião) dentro do saco gestacional no útero.</details></li>
</ol>
`,
"susp2026#70": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios diagnósticos atuais de pré-eclâmpsia, com e sem proteinúria.</li>
<li>Usar a relação proteína/creatinina urinária com corte de 0,3.</li>
<li>Explicar a fisiopatologia da placentação deficiente e a distinção entre formas precoce e tardia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pré-eclâmpsia</dt>
<dd>Hipertensão a partir de 20 semanas com proteinúria ou com disfunção de órgão-alvo ou placentária.</dd>
<dt>Relação proteína/creatinina</dt>
<dd>Amostra isolada de urina; 0,3 ou mais equivale a 300 mg em 24 horas.</dd>
<dt>Sinais de gravidade</dt>
<dd>Pressão de 160/110 ou mais, plaquetas abaixo de 100.000, transaminases dobradas, creatinina acima de 1,1, edema pulmonar, sintomas neurológicos.</dd>
<dt>Placentação deficiente</dt>
<dd>Invasão trofoblástica incompleta das artérias espiraladas, base da forma precoce.</dd>
</dl>
<h4>O essencial</h4>
<p>A pré-eclâmpsia deixou de ser definida apenas por hipertensão com proteinúria. Os critérios atuais (ACOG 2020, FEBRASGO 2023) são <strong>hipertensão nova a partir de 20 semanas</strong> (140/90 ou mais em duas medidas com 4 horas de intervalo) associada a <strong>proteinúria</strong> (<strong>relação proteína/creatinina de 0,3 ou mais</strong> em amostra isolada, 300 mg ou mais em 24 horas, ou fita de 2+ quando os outros não estão disponíveis) <strong>ou</strong>, na ausência de proteinúria, a qualquer <strong>disfunção de órgão-alvo</strong>: plaquetas abaixo de 100.000, creatinina acima de 1,1 mg/dL, transaminases duas vezes o normal, edema pulmonar, cefaleia ou alterações visuais que não respondem a analgésicos, ou disfunção placentária (restrição de crescimento, Doppler alterado).</p>
<p>A relação proteína/creatinina substituiu a urina de 24 horas por ser rápida, reprodutível e feita em amostra isolada; o corte de 0,3 (mg/mg) corresponde aos 300 mg diários.</p>
<p>A fisiopatologia é uma síndrome com mais de uma doença. Na forma <strong>precoce</strong> (antes de 34 semanas), a <strong>invasão trofoblástica deficiente</strong> das artérias espiraladas mantém vasos de alta resistência, a placenta isquêmica libera fatores antiangiogênicos (sFlt-1, endoglina) e a mãe responde com disfunção endotelial generalizada: hipertensão, proteinúria, lesão hepática e neurológica, restrição fetal. Na forma <strong>tardia</strong>, mais comum e menos grave, a placenta é normal ou quase, e a doença nasce da incapacidade materna (obesidade, resistência à insulina, hipertensão crônica) de tolerar a demanda do terceiro trimestre. A predisposição constitucional materna e a placentação explicam por que o rastreio combina fatores maternos e Doppler das uterinas, e por que a aspirina antes de 16 semanas previne sobretudo a forma precoce.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante hipertensa às 32 semanas com fita de urina negativa, mas plaquetas de 90.000, tem pré-eclâmpsia com sinais de gravidade, e a ausência de proteinúria não muda a conduta: sulfato de magnésio, controle pressórico e programação do parto. Peça a relação proteína/creatinina, não a urina de 24 horas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipertensão a partir de 20 semanas com proteinúria (relação proteína/creatinina 0,3 ou mais) ou com disfunção de órgão-alvo.</li>
<li>Proteinúria não é obrigatória nem gradua gravidade.</li>
<li>Precoce: placentação deficiente e fatores antiangiogênicos; tardia: intolerância materna com placenta quase normal.</li>
<li>Aspirina antes de 16 semanas previne sobretudo a forma precoce.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o corte da relação proteína/creatinina para proteinúria significativa? <details><summary>Resposta</summary>0,3 mg/mg em amostra isolada, equivalente a 300 mg em 24 horas.</details></li>
<li>Pode haver pré-eclâmpsia sem proteinúria? <details><summary>Resposta</summary>Sim: hipertensão nova com plaquetopenia, lesão renal ou hepática, edema pulmonar, sintomas neurológicos ou disfunção placentária.</details></li>
</ol>
`,
"susp2026#71": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar placenta prévia de descolamento prematuro pelo caráter do sangramento.</li>
<li>Lembrar a proibição do toque vaginal no sangramento de terceiro trimestre.</li>
<li>Conduzir a placenta prévia: ultrassom, estabilização, corticoide e via de parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Placenta prévia</dt>
<dd>Placenta que cobre o orifício interno do colo após 28 semanas; sangramento vermelho vivo, indolor, recorrente.</dd>
<dt>Descolamento prematuro de placenta</dt>
<dd>Separação da placenta antes do parto: sangramento escuro, dor, hipertonia uterina, sofrimento fetal.</dd>
<dt>Toque proibido</dt>
<dd>O toque vaginal na placenta prévia pode desencadear hemorragia maciça; o exame é o especular e o ultrassom.</dd>
<dt>Acretismo</dt>
<dd>Invasão da placenta no miométrio, associada à prévia com cesárea anterior; risco de histerectomia.</dd>
</dl>
<h4>O essencial</h4>
<p>O sangramento do terceiro trimestre tem duas grandes causas, e o exame físico as separa antes de qualquer imagem. A <strong>placenta prévia</strong> sangra <strong>vermelho vivo</strong>, de <strong>início súbito</strong>, <strong>sem dor</strong> e <strong>sem contrações</strong>, com útero relaxado e tônus normal, batimentos fetais normais, muitas vezes em episódios que cessam e recorrem, em multíparas, com cesáreas prévias, idade avançada ou tabagismo; a apresentação fetal costuma ser anômala ou alta. O <strong>descolamento prematuro</strong> sangra <strong>escuro</strong>, com <strong>dor</strong> intensa e contínua, <strong>hipertonia</strong> uterina, sofrimento fetal ou óbito, em hipertensas, após trauma ou uso de cocaína, e o sangramento visível pode ser pequeno diante do hematoma retroplacentário, com coagulopatia de consumo.</p>
<p>Na suspeita de placenta prévia, o <strong>toque vaginal é proibido</strong> até que a ultrassonografia afaste a implantação baixa: o dedo pode romper os vasos placentários no colo e converter um sangramento moderado em hemorragia catastrófica. O exame é <strong>especular</strong>, para ver a origem e o volume, seguido da <strong>ultrassonografia</strong>, transabdominal e, com cuidado, transvaginal, que confirma a posição da placenta e a distância do orifício interno; na prévia com cesárea anterior, procura-se acretismo.</p>
<p>A conduta depende da idade gestacional e da hemodinâmica: estabilizar, tipar e reservar sangue, imunoglobulina anti-D se Rh negativo, <strong>corticoide</strong> entre 24 e 34 semanas para a maturidade pulmonar, internação e observação enquanto o sangramento é moderado e o feto está bem; <strong>cesárea</strong> na hemorragia grave, no sofrimento fetal ou, eletivamente, entre 36 e 37 semanas na prévia total. A placenta de inserção baixa, a mais de 2 cm do orifício, pode permitir parto vaginal. A prévia total sem sangramento ativo no termo é cesárea programada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sangue vermelho vivo sem dor às 36 semanas: espéculo, não toque. Confirme a placenta no ultrassom, deixe sangue reservado e, com hemorragia importante ou feto comprometido, cesárea agora. Na mesma paciente, sangue escuro com útero de madeira seria descolamento, e a resposta seria outra e mais rápida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Prévia: vermelho vivo, indolor, sem contração, útero relaxado, feto bem, recorrente.</li>
<li>Descolamento: escuro, dor, hipertonia, sofrimento fetal, hipertensão ou trauma.</li>
<li>Toque proibido até o ultrassom afastar a prévia; exame especular.</li>
<li>Estabilizar, corticoide de 24 a 34 semanas, cesárea na hemorragia grave ou eletiva às 36 a 37 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que características do sangramento apontam para placenta prévia? <details><summary>Resposta</summary>Vermelho vivo, de início súbito, indolor, sem contrações, com útero relaxado e feto bem.</details></li>
<li>Por que o toque vaginal é proibido na suspeita de placenta prévia? <details><summary>Resposta</summary>Porque pode romper os vasos placentários sobre o colo e desencadear hemorragia maciça.</details></li>
</ol>
`,
"susp2026#72": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir puberdade precoce e distinguir a forma central da periférica.</li>
<li>Explicar o mecanismo dos análogos de GnRH e por que tratam só a forma central.</li>
<li>Conhecer a investigação: idade óssea, LH, teste de estímulo e ressonância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Puberdade precoce</dt>
<dd>Sinais puberais antes dos 8 anos na menina e dos 9 no menino.</dd>
<dt>Central (dependente de gonadotrofinas)</dt>
<dd>Ativação precoce do eixo hipotálamo-hipófise-gônada; LH puberal; idiopática na maioria das meninas.</dd>
<dt>Periférica (independente)</dt>
<dd>Esteroides sexuais sem ativação do eixo: cistos e tumores ovarianos, McCune-Albright, hiperplasia adrenal, tumores testiculares.</dd>
<dt>Análogo de GnRH</dt>
<dd>Leuprorrelina ou triptorrelina de depósito: estímulo contínuo que dessensibiliza a hipófise e suprime LH e FSH.</dd>
</dl>
<h4>O essencial</h4>
<p>Puberdade precoce é o aparecimento de caracteres sexuais secundários <strong>antes dos 8 anos na menina</strong> (telarca) e dos 9 no menino (aumento testicular). A avaliação começa pela anamnese (história familiar, condições de nascimento, exposição a estrogênios e andrógenos em cremes e medicamentos, sintomas neurológicos) e pelo exame (Tanner, velocidade de crescimento, manchas café com leite), seguidos de <strong>idade óssea</strong> avançada, <strong>LH basal</strong> e, se preciso, <strong>teste de estímulo com GnRH</strong>: LH que sobe define a forma <strong>central</strong>; LH suprimido com estradiol ou testosterona altos define a <strong>periférica</strong>. Na central, a <strong>ressonância de crânio</strong> procura hamartoma hipotalâmico e outras lesões, obrigatória em meninos e em meninas abaixo de 6 anos; nas meninas mais velhas a forma idiopática predomina.</p>
<p>O tratamento da <strong>forma central</strong> é o <strong>análogo de GnRH</strong> de depósito. O mecanismo é paradoxal: o GnRH endógeno é pulsátil, e a hipófise só responde a pulsos; o análogo oferece estímulo <strong>contínuo</strong>, que após um breve aumento inicial (flare) <strong>dessensibiliza os receptores</strong> e suprime LH e FSH, e com eles os esteroides gonadais. A puberdade para, a velocidade de crescimento e a idade óssea desaceleram, e a estatura final é preservada, sobretudo em quem começou antes dos 6 anos; o tratamento é mantido até a idade puberal normal e a puberdade reinicia após a suspensão.</p>
<p>Na <strong>forma periférica</strong> o análogo não funciona, porque o eixo já está suprimido: trata-se a causa (retirada da fonte exógena, cirurgia do tumor, inibidores da aromatase ou antiandrogênios na McCune-Albright e na testotoxicose, hidrocortisona na hiperplasia adrenal). As variantes benignas, telarca e adrenarca precoces isoladas, sem avanço de idade óssea, são apenas acompanhadas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Menina de 6 anos com mamas e idade óssea de 9: LH e ressonância antes do análogo, porque a resposta ao GnRH diz se o eixo está ligado e a ressonância diz por quê. Se o LH estiver suprimido e o estradiol alto, o análogo não vai funcionar, e a resposta está no ovário ou na adrenal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Precoce: antes de 8 anos na menina, 9 no menino; idade óssea, LH, teste de GnRH, ressonância na central.</li>
<li>Central: eixo ativado, LH puberal; periférica: esteroides com LH suprimido.</li>
<li>Análogo de GnRH: estímulo contínuo dessensibiliza a hipófise e suprime as gonadotrofinas; só na central.</li>
<li>Periférica: tratar a causa; telarca e adrenarca isoladas: acompanhar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o análogo de GnRH suprime a puberdade se o GnRH a inicia? <details><summary>Resposta</summary>Porque a hipófise responde a pulsos; o estímulo contínuo do análogo dessensibiliza os receptores e suprime LH e FSH.</details></li>
<li>O análogo trata a puberdade precoce periférica? <details><summary>Resposta</summary>Não; nela o eixo já está suprimido, e o tratamento é da causa que produz os esteroides.</details></li>
</ol>
`,
"susp2026#73": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a endometriose pelos sintomas e pelos achados de exame e imagem.</li>
<li>Saber que a laparoscopia é o padrão-ouro diagnóstico e que a imagem tem limites.</li>
<li>Tratar a dor com contraceptivos combinados ou progestagênios, equivalentes como primeira linha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Endometriose</dt>
<dd>Tecido endometrial fora do útero: peritoneal superficial, endometrioma ovariano e profunda infiltrativa.</dd>
<dt>Laparoscopia com biópsia</dt>
<dd>Padrão-ouro diagnóstico; hoje reservada a quem não responde ao tratamento clínico ou tem indicação cirúrgica.</dd>
<dt>Ultrassonografia com preparo intestinal</dt>
<dd>Exame de imagem de escolha para endometrioma e endometriose profunda; a ressonância complementa.</dd>
<dt>Progestagênios</dt>
<dd>Dienogeste, noretisterona, DIU de levonorgestrel: primeira linha da dor, tão eficazes quanto os combinados.</dd>
</dl>
<h4>O essencial</h4>
<p>A endometriose acomete 6 a 10% das mulheres em idade reprodutiva e se apresenta com <strong>dismenorreia progressiva</strong>, <strong>dispareunia de profundidade</strong>, dor pélvica crônica, <strong>disquezia</strong> e disúria cíclicas e <strong>infertilidade</strong>. O exame pode mostrar útero retrovertido fixo, nódulos no fundo de saco e nos ligamentos uterossacros e massa anexial. A demora diagnóstica média é de anos, e as diretrizes atuais (ESHRE 2022) permitem o <strong>diagnóstico clínico presuntivo</strong> e o início do tratamento sem confirmação cirúrgica.</p>
<p>A <strong>imagem</strong> é a <strong>ultrassonografia transvaginal com preparo intestinal</strong>, feita por examinador treinado, que identifica endometriomas e a endometriose profunda de septo retovaginal, ligamentos e intestino; a <strong>ressonância</strong> complementa o mapeamento cirúrgico. Ambas têm sensibilidade limitada para as lesões peritoneais superficiais, e por isso um exame normal não afasta a doença. O <strong>padrão-ouro</strong> continua sendo a <strong>laparoscopia</strong> com visualização e biópsia das lesões, mas ela deixou de ser exigida para tratar: fica para a dor refratária ao tratamento clínico, para o endometrioma grande ou a doença profunda com indicação cirúrgica e para a infertilidade em casos selecionados.</p>
<p>O tratamento da dor é <strong>hormonal</strong>, com o objetivo de suprimir a menstruação e a estimulação estrogênica das lesões: <strong>contraceptivos combinados</strong> (de preferência em uso contínuo) e <strong>progestagênios</strong> (dienogeste, DIU de levonorgestrel, noretisterona, implante) são <strong>equivalentes como primeira linha</strong>, e a escolha se faz pela tolerância, pelas contraindicações e pelo custo; anti-inflamatórios aliviam a dismenorreia. A cirurgia remove ou destrói as lesões, com excisão dos endometriomas preservando o ovário, e é indicada na falha clínica e nas lesões profundas sintomáticas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Adolescente com dismenorreia que não cede a anti-inflamatório e a falta na escola todo mês não precisa de laparoscopia para ser tratada: comece o progestagênio ou o combinado contínuo hoje e peça a ultrassonografia com preparo intestinal a quem sabe fazer. A laparoscopia entra se a dor não melhorar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dismenorreia progressiva, dispareunia profunda, disquezia, infertilidade; diagnóstico clínico presuntivo permitido.</li>
<li>Imagem: ultrassonografia com preparo intestinal e ressonância; não veem lesões superficiais.</li>
<li>Padrão-ouro: laparoscopia com biópsia, reservada à falha clínica e à indicação cirúrgica.</li>
<li>Dor: combinados e progestagênios equivalentes em primeira linha; GnRH em segunda; cirurgia na falha.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o padrão-ouro para o diagnóstico de endometriose? <details><summary>Resposta</summary>A laparoscopia com visualização e biópsia das lesões.</details></li>
<li>Combinados ou progestagênios: qual é melhor para a dor? <details><summary>Resposta</summary>São equivalentes como primeira linha; a escolha depende de tolerância, contraindicações e custo.</details></li>
</ol>
`,
"susp2026#74": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer os pontos-chave da diretriz brasileira de 2025: teste de HPV primário, 25 a 64 anos, intervalo de 5 anos.</li>
<li>Entender a citologia reflexa e por que o co-teste não é recomendado.</li>
<li>Saber o lugar da autocoleta e da citologia onde o teste de HPV não está disponível.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Teste de DNA-HPV oncogênico</dt>
<dd>Detecção molecular dos tipos de alto risco; método primário de rastreamento a partir de 2025.</dd>
<dt>Citologia reflexa</dt>
<dd>Citologia feita na mesma amostra só quando o HPV é positivo, para decidir quem vai à colposcopia.</dd>
<dt>Co-teste</dt>
<dd>HPV e citologia feitos ao mesmo tempo em todas; não recomendado por custo e sem ganho de proteção.</dd>
<dt>Autocoleta</dt>
<dd>Coleta vaginal pela própria mulher para o teste de HPV; aceita, com acurácia semelhante para os testes por PCR.</dd>
</dl>
<h4>O essencial</h4>
<p>As Diretrizes Brasileiras para o Rastreamento do Câncer do Colo do Útero de 2025 mudaram o método: o <strong>teste de DNA-HPV oncogênico</strong> passa a ser o <strong>exame primário</strong>, no lugar da citologia, para mulheres e pessoas com colo do útero de <strong>25 a 64 anos</strong>, com intervalo de <strong>5 anos</strong> após um resultado negativo, porque o teste tem sensibilidade maior para as lesões precursoras e um negativo protege por mais tempo. Abaixo de 25 anos não se rastreia, mesmo com vida sexual, pela alta prevalência de infecções transitórias e pelo baixo risco de câncer; acima de 64, quem tem dois negativos recentes sai do programa.</p>
<p>Um teste de HPV <strong>positivo</strong> não é diagnóstico de lesão: dispara a <strong>citologia reflexa</strong> na mesma amostra (ou a genotipagem para 16 e 18, que vai direto à colposcopia). Citologia com atipias leva à <strong>colposcopia</strong>; citologia normal com HPV positivo leva a novo teste em 12 meses. Por isso a diretriz <strong>não recomenda o co-teste</strong>: fazer citologia em todas as mulheres ao mesmo tempo que o HPV não aumenta a proteção, multiplica custos e falsos positivos, e a citologia cumpre seu papel como triagem das positivas.</p>
<p>A <strong>autocoleta</strong> é aceita como estratégia para ampliar a cobertura, sobretudo em quem não comparece, com testes validados por PCR; o positivo exige a coleta profissional para a citologia. Onde o teste de HPV ainda não está implantado, a <strong>citologia</strong> segue as regras anteriores (25 a 64 anos, dois exames anuais e depois trienais). Vacinadas contra o HPV continuam no rastreamento. Gestantes seguem o mesmo esquema; imunossuprimidas têm intervalos menores.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a mulher pergunta se "o preventivo" mudou, a resposta é: agora é o teste de HPV, a cada cinco anos, dos 25 aos 64, e a citologia só entra se o HPV vier positivo. Não peça os dois juntos "para garantir"; a garantia é a sensibilidade do teste de HPV, não a duplicação de exames.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>2025: teste de DNA-HPV oncogênico primário, 25 a 64 anos, a cada 5 anos se negativo.</li>
<li>Positivo: citologia reflexa (ou genotipagem 16/18); atipias vão à colposcopia; normal repete em 12 meses.</li>
<li>Co-teste não recomendado; autocoleta aceita com testes validados.</li>
<li>Sem teste de HPV disponível: citologia pelas regras anteriores; vacinadas seguem rastreadas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o exame primário e o intervalo do rastreamento a partir de 2025? <details><summary>Resposta</summary>O teste de DNA-HPV oncogênico, dos 25 aos 64 anos, a cada 5 anos após resultado negativo.</details></li>
<li>Por que a citologia não é feita junto com o teste de HPV em todas? <details><summary>Resposta</summary>Porque o co-teste não aumenta a proteção e eleva custos e falsos positivos; a citologia é reflexa, só nas positivas.</details></li>
</ol>
`,
"susp2026#75": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o esquema vigente da vacina contra o HPV no PNI.</li>
<li>Identificar os grupos especiais vacinados de 9 a 45 anos e seus esquemas.</li>
<li>Entender que a vacina previne e não trata a infecção ou as lesões.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Vacina HPV quadrivalente</dt>
<dd>Tipos 6, 11, 16 e 18; previne verrugas e a maioria dos cânceres de colo, ânus, vulva, pênis e orofaringe.</dd>
<dt>Dose única</dt>
<dd>Esquema do PNI desde 2024 para meninas e meninos de 9 a 14 anos, com resgate até 19 anos.</dd>
<dt>Grupos especiais</dt>
<dd>Pessoas com HIV, transplantados de órgãos e medula, pacientes oncológicos, vítimas de violência sexual, usuários de PrEP: 9 a 45 anos.</dd>
<dt>Esquema de três doses</dt>
<dd>0, 2 e 6 meses para os imunossuprimidos, pela resposta menor.</dd>
</dl>
<h4>O essencial</h4>
<p>O HPV é a infecção sexualmente transmissível mais comum, e os tipos oncogênicos 16 e 18 respondem por 70% dos cânceres de colo do útero. A vacina é <strong>preventiva</strong>: induz anticorpos que impedem a infecção pelos tipos vacinais, e por isso é mais eficaz <strong>antes do início da vida sexual</strong>; não trata a infecção já existente nem as lesões, embora seja recomendada após o tratamento de lesões de alto grau para reduzir recorrência.</p>
<p>O esquema do PNI, a partir da Nota Técnica de 2024, é <strong>dose única</strong> da vacina quadrivalente para <strong>meninas e meninos de 9 a 14 anos</strong>, com <strong>resgate</strong> dos não vacinados <strong>até os 19 anos</strong>. Nos <strong>grupos especiais</strong>, a vacinação é gratuita de <strong>9 a 45 anos</strong>: pessoas vivendo com HIV, transplantados de órgãos sólidos ou medula, pacientes oncológicos em quimioterapia ou radioterapia, vítimas de violência sexual (na profilaxia) e usuários de PrEP; os imunossuprimidos recebem <strong>três doses</strong> (0, 2 e 6 meses), e os demais do grupo, o esquema conforme a idade. Fora do PNI, a vacina nonavalente está disponível na rede privada até os 45 anos.</p>
<p>A vacina é segura, com reações locais e síncope vasovagal na adolescência (aplicar sentado e observar 15 minutos); não é indicada na gestação, mas a aplicação inadvertida não exige nenhuma medida. A vacinação não dispensa o rastreamento do colo a partir dos 25 anos, porque a vacina não cobre todos os tipos oncogênicos, e a cobertura alta dos dois sexos é o que reduz a circulação do vírus.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Adolescente de 15 anos que perdeu a vacina aos 12 ainda recebe a dose única pelo resgate até os 19. Adulto de 30 anos com HIV recebe três doses pelo SUS. Mulher de 40 anos sem condição especial vacina na rede privada. E ninguém deixa de fazer o rastreamento porque se vacinou.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dose única de 9 a 14 anos, meninas e meninos; resgate até 19 anos.</li>
<li>Grupos especiais de 9 a 45 anos: HIV, transplantados, oncológicos, violência sexual, PrEP; imunossuprimidos com três doses.</li>
<li>Preventiva, não terapêutica; mais eficaz antes da vida sexual.</li>
<li>Não substitui o rastreamento; segura; síncope na adolescência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quem é vacinado gratuitamente contra o HPV dos 9 aos 45 anos? <details><summary>Resposta</summary>Pessoas com HIV, transplantados, pacientes oncológicos, vítimas de violência sexual e usuários de PrEP.</details></li>
<li>A vacina trata lesões pelo HPV? <details><summary>Resposta</summary>Não; é preventiva, embora reduza recorrência após tratamento de lesões de alto grau.</details></li>
</ol>
`,
"susp2026#76": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Indicar a terapia hormonal da menopausa pelos sintomas vasomotores na janela de oportunidade.</li>
<li>Responder às duas perguntas: tem útero? tem risco trombótico?</li>
<li>Escolher estrogênio transdérmico com progestagênio na mulher obesa com útero.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Janela de oportunidade</dt>
<dd>Início da terapia antes dos 60 anos ou até 10 anos da menopausa, quando o benefício supera o risco.</dd>
<dt>Progestagênio obrigatório</dt>
<dd>Na mulher com útero, protege o endométrio da hiperplasia e do câncer induzidos pelo estrogênio.</dd>
<dt>Estrogênio transdérmico</dt>
<dd>Evita a primeira passagem hepática: não eleva fatores de coagulação nem triglicerídeos; preferido na obesidade e no risco trombótico.</dd>
<dt>Contraindicações</dt>
<dd>Câncer de mama ou endométrio, tromboembolismo, doença coronariana ou AVC, hepatopatia grave, sangramento sem diagnóstico.</dd>
</dl>
<h4>O essencial</h4>
<p>A terapia hormonal é o tratamento mais eficaz dos <strong>sintomas vasomotores</strong> (fogachos, suores noturnos) e dos distúrbios de sono e humor a eles ligados, além de tratar a atrofia genital e prevenir a perda óssea. O benefício supera o risco quando iniciada na <strong>janela de oportunidade</strong>, antes dos 60 anos ou até 10 anos da menopausa, em mulheres sem contraindicação. A avaliação prévia inclui mamografia, pressão arterial, perfil lipídico e glicemia, e a história de trombose, câncer e doença cardiovascular.</p>
<p>A prescrição responde a duas perguntas. <strong>Tem útero?</strong> Se sim, o estrogênio nunca vai sozinho: associa-se um <strong>progestagênio</strong> (progesterona micronizada, didrogesterona, DIU de levonorgestrel) para proteger o endométrio; a histerectomizada recebe estrogênio isolado. <strong>Tem risco trombótico ou metabólico?</strong> A <strong>obesidade</strong>, a hipertrigliceridemia, o tabagismo, a hipertensão, o diabetes, a doença hepática e a enxaqueca com aura apontam para a <strong>via transdérmica</strong> (gel ou adesivo), que evita a primeira passagem hepática e não aumenta o risco de tromboembolismo venoso nem os triglicerídeos, ao contrário do estrogênio oral. A menor dose eficaz, reavaliada anualmente, é a regra.</p>
<p>Uma mulher de 49 anos, obesa, com útero, com fogachos e insônia na transição menopausal, recebe, portanto, <strong>estrogênio transdérmico com progestagênio</strong>; a tireoidectomia por câncer não contraindica. A tibolona e as combinações orais são opções em quem não tem risco trombótico; os moduladores seletivos, os inibidores da recaptação de serotonina e a fezolinetanta tratam os fogachos em quem não pode usar hormônio. O estrogênio vaginal em baixa dose trata a atrofia isolada sem progestagênio.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de prescrever, pergunte "tem útero?" e "tem risco de trombose?": a primeira resposta decide se há progestagênio, a segunda decide a via. Obesa com útero é transdérmico mais progesterona; histerectomizada magra pode ser oral isolado. Repita a mamografia e reavalie a cada ano.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Indicação: sintomas vasomotores na janela de oportunidade, sem contraindicações.</li>
<li>Com útero: estrogênio sempre com progestagênio; sem útero: estrogênio isolado.</li>
<li>Obesidade, hipertrigliceridemia, tabagismo, hipertensão: via transdérmica.</li>
<li>Não hormonais para quem não pode; estrogênio vaginal isolado para a atrofia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a mulher com útero precisa de progestagênio na terapia hormonal? <details><summary>Resposta</summary>Para proteger o endométrio da hiperplasia e do câncer induzidos pelo estrogênio isolado.</details></li>
<li>Por que preferir a via transdérmica na obesa? <details><summary>Resposta</summary>Porque evita a primeira passagem hepática e não aumenta o risco de tromboembolismo nem os triglicerídeos.</details></li>
</ol>
`,
"susp2026#77": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios de elegibilidade da OMS à anticoncepção no puerpério e na lactação.</li>
<li>Saber por que o estrogênio é contraindicado nas primeiras semanas e o que a amamentação muda.</li>
<li>Escolher o método imediato antes da alta: implante, injetável ou pílula de progestagênio; DIU na janela certa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Categorias da OMS</dt>
<dd>1 sem restrição; 2 vantagens superam riscos; 3 riscos superam vantagens; 4 risco inaceitável.</dd>
<dt>Métodos só de progestagênio</dt>
<dd>Implante de etonogestrel, injetável trimestral, pílula de desogestrel, DIU de levonorgestrel: categoria 1 ou 2 no puerpério.</dd>
<dt>Combinados no puerpério</dt>
<dd>Categoria 4 até 21 dias (risco trombótico) e categoria 3 até 6 semanas na lactante; categoria 2 depois de 6 meses.</dd>
<dt>Janela do DIU</dt>
<dd>Inserção em até 48 horas do parto ou a partir de 4 semanas; entre 48 horas e 4 semanas é categoria 3.</dd>
</dl>
<h4>O essencial</h4>
<p>O puerpério é o momento de maior risco de gestação não planejada com intervalo curto, e a anticoncepção deve ser resolvida <strong>antes da alta</strong>. Os <strong>critérios da OMS</strong> organizam a escolha. Os <strong>combinados</strong> (pílula, adesivo, anel, injetável mensal) são <strong>categoria 4 nos primeiros 21 dias</strong>, pelo risco de tromboembolismo do puerpério, e <strong>categoria 3 até 6 semanas na lactante</strong>, pelo efeito do estrogênio sobre a produção de leite; entre 6 semanas e 6 meses, categoria 2 na lactante; não lactantes podem usar a partir de 21 dias se não tiverem outros fatores de risco trombótico.</p>
<p>Os <strong>métodos só de progestagênio</strong> não têm esse problema: o <strong>implante de etonogestrel</strong>, a <strong>pílula de desogestrel</strong> e o <strong>injetável trimestral</strong> são categoria 1 ou 2 desde o pós-parto imediato, inclusive na amamentação exclusiva, e podem ser iniciados antes da alta. O <strong>implante</strong> é o de maior eficácia e duração (3 anos), reversível, sem interferir na lactação, e é a escolha para quem quer um método de longa duração já na maternidade. O <strong>DIU</strong> (de cobre ou de levonorgestrel) tem uma janela: inserção nas <strong>primeiras 48 horas</strong> após o parto (pós-placentário) ou <strong>a partir de 4 semanas</strong>; entre esses momentos a expulsão e a perfuração aumentam, e a categoria é 3. A laqueadura é opção para quem tem prole constituída e cumpre a lei (25 anos ou dois filhos, com consentimento), mas pode não estar disponível no momento.</p>
<p>A amamentação exclusiva com amenorreia (método LAM) protege por até 6 meses, mas exige exclusividade, ausência de menstruação e o limite de 6 meses, e falha quando um desses critérios cai. Preservativo soma proteção contra infecções.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Puérpera no terceiro dia, amamentando, que quer um método antes da alta: implante no braço hoje, ou pílula de desogestrel se preferir, e a explicação de que a pílula combinada só depois de 6 semanas e o DIU só a partir da 4ª semana. Ela não deve sair da maternidade "para decidir depois".</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Combinados: categoria 4 até 21 dias, 3 até 6 semanas na lactante; nada de estrogênio no pós-parto imediato.</li>
<li>Progestagênio isolado (implante, desogestrel, injetável trimestral): categoria 1 ou 2 desde o parto, na amamentação.</li>
<li>DIU: até 48 horas ou a partir de 4 semanas; entre esses, categoria 3.</li>
<li>Implante é o método imediato de longa duração; LAM só com exclusividade, amenorreia e até 6 meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que métodos podem ser iniciados antes da alta na puérpera que amamenta? <details><summary>Resposta</summary>Implante de etonogestrel, pílula de desogestrel e injetável trimestral; o DIU só nas primeiras 48 horas ou após 4 semanas.</details></li>
<li>Por que os combinados são contraindicados nas primeiras semanas? <details><summary>Resposta</summary>Pelo risco de tromboembolismo do puerpério até 21 dias e pelo efeito do estrogênio sobre a lactação até 6 semanas.</details></li>
</ol>
`,
"susp2026#78": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir os limites de idade da puberdade normal e precoce na menina.</li>
<li>Reconhecer a leucorreia fisiológica pré-menarca e distingui-la da vulvovaginite.</li>
<li>Saber a sequência dos eventos puberais femininos e o intervalo até a menarca.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Telarca</dt>
<dd>Broto mamário, primeiro sinal da puberdade feminina, entre 8 e 13 anos.</dd>
<dt>Pubarca</dt>
<dd>Aparecimento dos pelos pubianos, em geral 6 a 12 meses após a telarca.</dd>
<dt>Leucorreia fisiológica</dt>
<dd>Corrimento claro, mucoide, sem odor, sem prurido, pela ação do estrogênio no epitélio vaginal, meses antes da menarca.</dd>
<dt>Menarca</dt>
<dd>Primeira menstruação, 2 a 2,5 anos após a telarca, em média aos 12 anos.</dd>
</dl>
<h4>O essencial</h4>
<p>A puberdade feminina normal começa entre <strong>8 e 13 anos</strong> com a <strong>telarca</strong>, seguida em meses pela <strong>pubarca</strong> (que pode precedê-la em parte das meninas, sobretudo negras), pelo <strong>estirão</strong> de crescimento, que na menina é precoce, em Tanner 2 a 3, e pela <strong>menarca</strong>, 2 a 2,5 anos após a telarca, quando a velocidade de crescimento já cai. A sequência dura 3 a 4 anos. Sinais antes dos 8 anos definem <strong>puberdade precoce</strong>; ausência de telarca aos 13 ou de menarca aos 15 (ou 3 anos após a telarca) define atraso.</p>
<p>Uma menina que iniciou telarca e pubarca aos 8 anos e está aos 9 em Tanner 2, com genitália normal e sem outros sinais, tem <strong>puberdade fisiológica</strong>: começou no limite inferior do normal e progride no ritmo esperado. Não há indicação de investigação hormonal nem de imagem quando a idade de início é 8 anos ou mais, a progressão é lenta e a estatura e a velocidade de crescimento são compatíveis; a idade óssea pode ser feita se houver dúvida sobre a velocidade.</p>
<p>A <strong>leucorreia fisiológica</strong> é parte dessa fase: o estrogênio espessa o epitélio vaginal, que descama e produz um corrimento <strong>claro ou esbranquiçado, mucoide, sem odor, sem prurido nem hiperemia</strong>, que aparece 6 a 12 meses antes da menarca e persiste depois, com variação cíclica. O exame mostra vulva normal e hímen íntegro, e nenhum exame é necessário; a orientação é higiene simples, roupa de algodão e tranquilizar mãe e filha. O que muda o raciocínio: corrimento amarelado, fétido, com prurido, sangue ou dor (vulvovaginite, corpo estranho, infecção), sinais de puberdade antes dos 8 anos, virilização (clitoromegalia, acne, voz) ou sinais de abuso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mãe preocupada com "corrimento" na filha de 9 anos com mamas em Tanner 2: examine, veja que é claro e sem odor, e explique que a menstruação vem em um a dois anos e que aquele muco é o anúncio. Nem antibiótico, nem creme, nem exame de sangue; só a data do retorno.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Telarca entre 8 e 13 anos; pubarca meses depois; estirão precoce; menarca 2 a 2,5 anos após a telarca.</li>
<li>Precoce: antes de 8 anos; atraso: sem telarca aos 13 ou sem menarca aos 15.</li>
<li>Início aos 8 anos com progressão lenta é fisiológico; sem investigação.</li>
<li>Leucorreia fisiológica: clara, mucoide, sem odor e sem prurido, antes da menarca; só orientação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Telarca aos 8 anos é puberdade precoce? <details><summary>Resposta</summary>Não; o limite é antes dos 8 anos. Aos 8 é o início normal da puberdade.</details></li>
<li>Que características definem a leucorreia fisiológica? <details><summary>Resposta</summary>Corrimento claro ou esbranquiçado, mucoide, sem odor, prurido ou hiperemia, meses antes da menarca.</details></li>
</ol>
`,
"susp2026#79": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir T-score e Z-score e saber quando usar cada um.</li>
<li>Aplicar os cortes da OMS para osteopenia e osteoporose.</li>
<li>Distinguir o risco relativo da densitometria do risco absoluto do FRAX.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>T-score</dt>
<dd>Desvios-padrão da densidade mineral óssea em relação ao pico de massa óssea do adulto jovem do mesmo sexo.</dd>
<dt>Z-score</dt>
<dd>Desvios-padrão em relação à média de pessoas da mesma idade e sexo; usado em pré-menopausa, homens abaixo de 50 e crianças.</dd>
<dt>Cortes da OMS</dt>
<dd>T-score até −1 normal; −1,1 a −2,4 osteopenia; −2,5 ou menos osteoporose; com fratura por fragilidade, osteoporose grave.</dd>
<dt>FRAX</dt>
<dd>Ferramenta que estima a probabilidade absoluta de fratura em 10 anos a partir de fatores clínicos, com ou sem a densitometria.</dd>
</dl>
<h4>O essencial</h4>
<p>A densitometria por DXA mede a densidade mineral óssea na coluna lombar e no fêmur proximal (colo e fêmur total), e às vezes no rádio, e expressa o resultado em dois escores. O <strong>T-score</strong> compara a paciente com o <strong>pico de massa óssea do adulto jovem</strong> do mesmo sexo, em desvios-padrão: cada desvio abaixo aumenta o risco de fratura em cerca de duas vezes, o que faz do T-score uma medida de <strong>risco relativo</strong> de fratura em comparação com o adulto jovem. O <strong>Z-score</strong> compara com pessoas da <strong>mesma idade</strong>; um Z-score de −2 ou menos ("abaixo do esperado para a idade") sugere causa secundária e é o parâmetro usado em mulheres na pré-menopausa, homens abaixo de 50 anos e crianças, em quem os cortes da OMS não se aplicam.</p>
<p>Os <strong>cortes da OMS</strong> valem para mulheres na pós-menopausa e homens a partir de 50 anos, pelo menor T-score entre coluna, colo e fêmur total: <strong>até −1,0 normal</strong>; <strong>entre −1,1 e −2,4 osteopenia</strong> (baixa massa óssea); <strong>−2,5 ou menos osteoporose</strong>; osteoporose com fratura por fragilidade é osteoporose grave ou estabelecida. Uma fratura de fragilidade de quadril ou vértebra define osteoporose clinicamente, independentemente do T-score.</p>
<p>O T-score diz quanto o osso está abaixo do pico, não quantas mulheres com aquele valor vão fraturar: a maioria das fraturas ocorre em quem tem osteopenia, porque são muitas. O <strong>risco absoluto</strong> vem do <strong>FRAX</strong>, que combina idade, sexo, IMC, fratura prévia, fratura de quadril nos pais, tabagismo, corticoide, artrite reumatoide, osteoporose secundária e álcool, com ou sem o T-score do colo do fêmur, e estima a probabilidade de fratura maior e de quadril em 10 anos; os cortes brasileiros do FRAX orientam o tratamento na osteopenia. A densitometria é indicada em mulheres a partir de 65 anos e homens a partir de 70, e antes com fatores de risco.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Laudo com T-score de −2,0 na coluna não é "quase normal": é osteopenia, e a pergunta seguinte é o FRAX. Se a probabilidade de fratura de quadril em 10 anos ultrapassa o corte, trata-se mesmo sem chegar a −2,5. E na mulher de 45 anos que menstrua, leia o Z-score, não o T.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>T-score: comparação com o pico do adulto jovem; risco relativo de fratura.</li>
<li>Z-score: comparação com a mesma idade; pré-menopausa, homens abaixo de 50, crianças.</li>
<li>OMS: até −1 normal; −1,1 a −2,4 osteopenia; −2,5 ou menos osteoporose; fratura de fragilidade define osteoporose.</li>
<li>FRAX dá o risco absoluto em 10 anos e decide o tratamento na osteopenia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Com quem o T-score compara a densidade óssea da paciente? <details><summary>Resposta</summary>Com o pico de massa óssea do adulto jovem do mesmo sexo, em desvios-padrão.</details></li>
<li>Quando usar o Z-score em vez do T-score? <details><summary>Resposta</summary>Em mulheres na pré-menopausa, homens abaixo de 50 anos e crianças.</details></li>
</ol>
`,
"susp2026#80": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer as calcificações tipicamente benignas do BI-RADS.</li>
<li>Classificar a mamografia e agir conforme a categoria.</li>
<li>Manter o rastreamento de rotina diante de um BI-RADS 2.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>BI-RADS</dt>
<dd>Sistema de laudo: 0 inconclusivo; 1 negativo; 2 benigno; 3 provavelmente benigno; 4 suspeito; 5 altamente suspeito; 6 câncer conhecido.</dd>
<dt>Calcificações em pipoca</dt>
<dd>Grosseiras, densas, de bordas irregulares e arredondadas: fibroadenoma em involução; BI-RADS 2.</dd>
<dt>Calcificações suspeitas</dt>
<dd>Amorfas, grosseiras heterogêneas, pleomórficas finas ou lineares ramificadas, em distribuição agrupada, linear ou segmentar.</dd>
<dt>Rastreamento no Brasil</dt>
<dd>Mamografia bienal dos 50 aos 69 anos pelo Ministério da Saúde; anual a partir dos 40 pelas sociedades.</dd>
</dl>
<h4>O essencial</h4>
<p>O laudo mamográfico segue o <strong>BI-RADS</strong>, e cada categoria tem uma conduta: <strong>0</strong> pede exames adicionais (incidências, ultrassonografia, comparação com anteriores); <strong>1 e 2</strong> voltam ao rastreamento de rotina; <strong>3</strong> (menos de 2% de malignidade) faz controle em 6 meses; <strong>4</strong> (2 a 95%) e <strong>5</strong> (acima de 95%) vão à biópsia; <strong>6</strong> é câncer já confirmado. A categoria 2 inclui achados benignos que o radiologista reconhece com segurança e descreve para que não sejam investigados.</p>
<p>As <strong>calcificações tipicamente benignas</strong> são a maior fonte de investigações desnecessárias quando não reconhecidas: <strong>em pipoca</strong> (grosseiras, densas, do fibroadenoma em involução), <strong>cutâneas</strong> (com centro lucente), <strong>vasculares</strong> (em trilho paralelo), <strong>em bastão</strong> (ectasia ductal, grossas e lineares), <strong>redondas e puntiformes</strong> dispersas, <strong>em casca de ovo</strong> (cistos oleosos, esteatonecrose), <strong>leite de cálcio</strong> (em xícara no perfil), de sutura e distróficas pós-cirúrgicas. Nenhuma delas exige biópsia; o laudo é BI-RADS 2 e a paciente segue o rastreio.</p>
<p>As calcificações que preocupam têm <strong>morfologia</strong> amorfa, grosseira heterogênea, <strong>pleomórfica fina</strong> ou <strong>linear fina ramificada</strong>, e <strong>distribuição</strong> agrupada, linear ou segmentar, que sugerem carcinoma ductal in situ; essas são BI-RADS 4 ou 5 e vão à biópsia guiada por estereotaxia. Uma mulher de 52 anos, na pós-menopausa, com calcificações em pipoca no quadrante superolateral, tem um fibroadenoma calcificado: <strong>BI-RADS 2</strong>, sem ultrassonografia, sem biópsia, sem controle precoce; <strong>mantém a mamografia conforme a idade e os fatores de risco</strong>. A nuliparidade e a menopausa recente não mudam a leitura de um achado benigno.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando o laudo descreve "calcificações em pipoca" e conclui BI-RADS 2, a consulta termina com a data da próxima mamografia, não com um pedido de ultrassonografia "para complementar". Investigar o benigno típico gera ansiedade, biópsias e custo sem achar câncer.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>BI-RADS: 0 complementar; 1 e 2 rotina; 3 controle em 6 meses; 4 e 5 biópsia.</li>
<li>Benignas típicas: pipoca, cutâneas, vasculares, bastão, redondas, casca de ovo, leite de cálcio, sutura.</li>
<li>Suspeitas: pleomórficas finas ou lineares ramificadas, agrupadas, lineares ou segmentares: biópsia.</li>
<li>Pipoca é fibroadenoma calcificado: BI-RADS 2, rastreamento de rotina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que representam as calcificações em pipoca e qual é a categoria? <details><summary>Resposta</summary>Fibroadenoma em involução, calcificação tipicamente benigna: BI-RADS 2.</details></li>
<li>Qual é a conduta diante de um BI-RADS 2? <details><summary>Resposta</summary>Manter o rastreamento de rotina conforme a idade e os fatores de risco, sem investigação adicional.</details></li>
</ol>
`,
"susp2021#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Investigar o sangramento pós-menopausa como câncer de endométrio até prova em contrário.</li>
<li>Usar a espessura endometrial na ultrassonografia transvaginal para decidir a biópsia.</li>
<li>Saber que a amostra endometrial pode ser colhida no consultório.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sangramento pós-menopausa</dt>
<dd>Qualquer sangramento após 12 meses de amenorreia; câncer de endométrio em cerca de 10%.</dd>
<dt>Espessura endometrial</dt>
<dd>Corte de 4 mm na ultrassonografia transvaginal: até 4 mm o risco é muito baixo; acima, biópsia.</dd>
<dt>Biópsia ambulatorial</dt>
<dd>Pipelle ou AMIU (aspiração manual intrauterina), sem anestesia, no consultório, com alta sensibilidade para câncer.</dd>
<dt>Histeroscopia com biópsia</dt>
<dd>Padrão-ouro quando a biópsia ambulatorial é insuficiente, negativa com sangramento persistente ou há lesão focal.</dd>
</dl>
<h4>O essencial</h4>
<p>Sangramento depois da menopausa é o sintoma de apresentação de mais de 90% dos cânceres de endométrio, e o câncer está presente em cerca de <strong>10%</strong> das mulheres que sangram; obesidade, diabetes, hipertensão, nuliparidade, menopausa tardia, anovulação crônica e estrogênio sem progestagênio somam risco. A causa mais comum é a atrofia, mas a atrofia não pode ser presumida: <strong>toda mulher com sangramento pós-menopausa é investigada</strong>.</p>
<p>O primeiro exame é a <strong>ultrassonografia transvaginal</strong>, que mede a espessura do eco endometrial. Com <strong>4 mm ou menos</strong> e sangramento único, o risco de câncer é abaixo de 1% e é aceitável observar, com biópsia se o sangramento recorre. Com <strong>mais de 4 mm</strong>, endométrio heterogêneo, líquido na cavidade ou se a medida não for confiável, a <strong>amostra endometrial</strong> é obrigatória. Em quem usa tamoxifeno, a ultrassonografia é pouco útil e o sangramento vai direto à biópsia.</p>
<p>A amostra pode ser colhida <strong>no consultório</strong>, sem anestesia, com a cânula de <strong>Pipelle</strong> ou a <strong>AMIU</strong>: a sensibilidade para câncer de endométrio passa de 90% na pós-menopausa, o custo é baixo e o resultado orienta o próximo passo. Quando a amostra é insuficiente, a biópsia é negativa mas o sangramento persiste, ou a ultrassonografia sugere pólipo ou lesão focal, faz-se a <strong>histeroscopia com biópsia dirigida</strong>, o padrão-ouro. A curetagem às cegas sob anestesia perdeu espaço. O achado de hiperplasia com atipia ou carcinoma leva ao estadiamento e à cirurgia (histerectomia com anexectomia, com avaliação linfonodal conforme o risco).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher de 65 anos, obesa, que sangrou por oito dias e tem endométrio de 12 mm não espera a vaga do centro cirúrgico: a Pipelle na sala de exame dá o diagnóstico na mesma semana. Se vier insuficiente ou negativa e ela seguir sangrando, a histeroscopia é o passo seguinte, não a tranquilização.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sangramento pós-menopausa: câncer de endométrio em 10%; investigar sempre.</li>
<li>Ultrassonografia transvaginal: até 4 mm pode observar; acima de 4 mm, biópsia.</li>
<li>Biópsia ambulatorial com Pipelle ou AMIU, sem anestesia, sensibilidade acima de 90%.</li>
<li>Histeroscopia com biópsia dirigida se amostra insuficiente, sangramento persistente ou lesão focal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o corte de espessura endometrial que indica biópsia no sangramento pós-menopausa? <details><summary>Resposta</summary>Mais de 4 mm na ultrassonografia transvaginal.</details></li>
<li>Como se colhe a amostra endometrial no consultório? <details><summary>Resposta</summary>Com a cânula de Pipelle ou por aspiração manual intrauterina (AMIU), sem anestesia.</details></li>
</ol>
`,
"susp2021#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a NIC 1 confirmada por biópsia com seguimento, sem tratamento.</li>
<li>Explicar por que a lesão de baixo grau regride e a de alto grau se trata.</li>
<li>Conhecer o seguimento e quando tratar a NIC 1 persistente.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>NIC 1 (lesão de baixo grau)</dt>
<dd>Expressão histológica da infecção pelo HPV; regride em 60 a 90% em 1 a 2 anos.</dd>
<dt>NIC 2 e 3 (lesão de alto grau)</dt>
<dd>Verdadeiras precursoras do câncer; tratadas por excisão (EZT ou conização) ou ablação.</dd>
<dt>Conduta expectante</dt>
<dd>Controle citológico e colposcópico semestral (ou teste de HPV em 12 meses) sem tratar.</dd>
<dt>Persistência</dt>
<dd>NIC 1 mantida por 2 anos ou mais: tratamento pode ser oferecido, sobretudo acima de 25 anos.</dd>
</dl>
<h4>O essencial</h4>
<p>A biópsia dirigida pela colposcopia que mostra <strong>NIC 1</strong> não diagnostica uma lesão precursora: mostra o efeito citopático da infecção pelo HPV, que na grande maioria das mulheres <strong>regride espontaneamente</strong> em 1 a 2 anos, sobretudo nas jovens. Tratar a NIC 1 significa tratar uma infecção transitória com procedimentos que encurtam o colo e aumentam o risco de prematuridade nas gestações futuras, sem reduzir o risco de câncer. Por isso as diretrizes brasileiras e internacionais mandam <strong>conduta expectante</strong>.</p>
<p>O seguimento é <strong>citologia e colposcopia a cada 6 meses</strong> (nas diretrizes de 2016) ou, no fluxo baseado em HPV, <strong>teste de HPV em 12 meses</strong>: dois resultados negativos devolvem a mulher ao rastreamento de rotina; nova alteração leva a nova colposcopia e biópsia. Só se <strong>trata a NIC 1 persistente</strong> por 2 anos ou mais, por opção da mulher, com métodos destrutivos (cauterização, crioterapia) quando a lesão é totalmente visível, ou excisão quando a junção não é visível ou a colposcopia é insatisfatória. Em menores de 25 anos, a regressão é ainda maior e o seguimento é mais conservador.</p>
<p>A <strong>NIC 2 e 3</strong> são outra doença: precursoras de verdade, com potencial de progressão, tratadas por <strong>excisão da zona de transformação</strong> (EZT, cirurgia de alta frequência) ou conização quando a lesão é endocervical ou há suspeita de invasão, com margens avaliadas; a NIC 2 em mulheres jovens com desejo reprodutivo e lesão visível pode ser observada por até 2 anos em casos selecionados. Após o tratamento, o teste de HPV em 6 a 12 meses define a cura. A discordância entre citologia de alto grau e biópsia de NIC 1 exige revisão das lâminas e da colposcopia, porque a biópsia pode ter perdido a lesão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>NIC 1 na biópsia é uma conversa sobre paciência: a mulher volta em 6 meses, e não sai da sala com a cirurgia marcada. O que exige ação é a citologia de alto grau que a biópsia não confirmou: aí a resposta é rever, não esperar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>NIC 1 é infecção pelo HPV, regride em 60 a 90%: conduta expectante.</li>
<li>Seguimento: citologia e colposcopia semestrais ou teste de HPV em 12 meses; dois negativos, rotina.</li>
<li>Tratar só a NIC 1 persistente por 2 anos ou mais, por opção da mulher.</li>
<li>NIC 2 e 3: precursoras, tratadas por EZT ou conização; HPV em 6 a 12 meses após.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a conduta na NIC 1 confirmada por biópsia? <details><summary>Resposta</summary>Expectante, com controle citológico e colposcópico semestral ou teste de HPV em 12 meses.</details></li>
<li>Quando a NIC 1 pode ser tratada? <details><summary>Resposta</summary>Se persistir por 2 anos ou mais, por opção da mulher, com método destrutivo ou excisional conforme a colposcopia.</details></li>
</ol>
`,
"susp2021#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a hemodinâmica do ducto venoso e o que sua onda representa.</li>
<li>Ler a onda a e reconhecer a onda a ausente ou reversa como sinal de falência.</li>
<li>Situar o ducto venoso na sequência de deterioração da restrição de crescimento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ducto venoso</dt>
<dd>Vaso que leva sangue oxigenado da veia umbilical ao átrio direito, direcionado ao forame oval.</dd>
<dt>Onda a</dt>
<dd>Componente da onda venosa correspondente à contração atrial; positiva no feto normal.</dd>
<dt>Território venoso fetal</dt>
<dd>Reflete a função cardíaca e a pressão venosa central; o ducto venoso é o vaso eleito para representá-lo.</dd>
<dt>Sequência de deterioração</dt>
<dd>Umbilical, cerebral média (centralização), ducto venoso, pulsatilidade da veia umbilical, cardiotocografia.</dd>
</dl>
<h4>O essencial</h4>
<p>O <strong>ducto venoso</strong> é um vaso curto e afilado que conecta a veia umbilical intra-abdominal à veia cava inferior, e projeta o sangue mais oxigenado da placenta através do <strong>forame oval</strong> para o átrio esquerdo, o coração e o cérebro. Sua onda de fluxo é trifásica: pico S (sístole ventricular), pico D (diástole precoce) e <strong>onda a</strong> (contração atrial), que no feto normal é <strong>positiva</strong>, com fluxo anterógrado durante todo o ciclo. O índice de pulsatilidade venoso a quantifica.</p>
<p>Por estar diretamente conectado ao átrio direito, o ducto venoso <strong>reflete a pressão venosa central e a função cardíaca fetal</strong>: quando o ventrículo direito sofre, por pós-carga alta (placenta de resistência elevada) e hipóxia, a pressão atrial sobe e a contração atrial empurra o sangue para trás: a onda a diminui, desaparece (<strong>ausente</strong>) e depois se inverte (<strong>reversa</strong>). Entre os vasos venosos, o ducto é o eleito pela maioria dos estudos para representar o <strong>território venoso</strong> por ser reprodutível, acessível e o mais precoce a se alterar.</p>
<p>Na <strong>restrição de crescimento precoce</strong>, a deterioração segue uma ordem: aumento da resistência na <strong>artéria umbilical</strong> (diástole reduzida, zero, reversa), <strong>centralização</strong> (queda do índice da cerebral média), <strong>alteração do ducto venoso</strong>, pulsatilidade na veia umbilical, e por fim alterações da cardiotocografia e do perfil biofísico. A onda a ausente ou reversa no ducto indica <strong>acidemia e falência cardíaca iminente</strong> e, a partir de 26 a 28 semanas, é indicação de parto após corticoide; antes de 26 semanas, decide-se com a família. O ducto venoso também é marcador de aneuploidia e cardiopatia no primeiro trimestre, quando a onda a reversa aumenta o risco combinado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Feto restrito com diástole zero na umbilical e ducto venoso ainda normal pode esperar o corticoide com vigilância diária; quando a onda a do ducto some ou inverte, o tempo acabou. Olhe o ducto antes de decidir "mais uma semana": ele diz como está o coração, não a placenta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ducto venoso: veia umbilical ao átrio direito pelo forame oval; onda trifásica com onda a positiva.</li>
<li>Representa o território venoso: pressão venosa central e função cardíaca.</li>
<li>Onda a ausente ou reversa: acidemia e falência iminente; indicação de parto a partir de 26 a 28 semanas.</li>
<li>Sequência: umbilical, cerebral média, ducto venoso, veia umbilical pulsátil, cardiotocografia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que o ducto venoso representa na avaliação fetal? <details><summary>Resposta</summary>O território venoso: a pressão venosa central e a função cardíaca do feto.</details></li>
<li>O que significa a onda a reversa no ducto venoso? <details><summary>Resposta</summary>Aumento da pressão atrial por falência cardíaca e acidemia; indica parto após 26 a 28 semanas.</details></li>
</ol>
`,
"susp2021#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a hiperatividade uterina sem obstrução (parto taquitócico).</li>
<li>Conduzir: não acelerar, analgesia, amniotomia tardia, proteger o canal e vigiar o recém-nascido.</li>
<li>Diferenciar da hiperatividade com obstrução, que é outra emergência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Parto taquitócico</dt>
<dd>Trabalho de parto com menos de 3 horas de duração, por contrações intensas e frequentes sem obstáculo.</dd>
<dt>Hiperatividade uterina</dt>
<dd>Taquissistolia (mais de 5 contrações em 10 minutos) ou hipersistolia (contrações de amplitude excessiva).</dd>
<dt>Hipóxia fetal por hiperatividade</dt>
<dd>Contrações sem intervalo reduzem a perfusão placentária; o feto pode nascer deprimido.</dd>
<dt>Lacerações do canal</dt>
<dd>Colo, vagina e períneo rasgam pela passagem rápida; a revisão cuidadosa após o parto é obrigatória.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>hiperatividade uterina</strong> pode ter duas causas opostas. Com <strong>obstrução</strong> (desproporção, apresentação anômala), o útero luta contra um obstáculo, forma o anel de Bandl e caminha para a rotura: a resposta é a cesárea. <strong>Sem obstrução</strong>, o útero apenas contrai demais e o parto acontece depressa: é o <strong>parto taquitócico</strong>, comum em multíparas, com ocitocina ou misoprostol em excesso, descolamento de placenta ou espontâneo. O problema não é o feto passar, é passar <strong>rápido demais e sob hipóxia</strong>.</p>
<p>A conduta é <strong>frear e proteger</strong>. Frear: suspender ocitócicos, colocar a paciente em decúbito lateral, hidratar, e, se houver sofrimento fetal, tocólise aguda com terbutalina; <strong>não realizar amniotomia precoce</strong>, porque a rotura das membranas intensifica as contrações e acelera ainda mais (a <strong>amniotomia é tardia</strong>, no fim do período expulsivo, se ainda necessária); e <strong>analgesia precoce</strong>, de preferência peridural, que reduz a dor, a ansiedade e o reflexo de puxo prematuro e permite um expulsivo controlado. A vigilância fetal é contínua, porque contrações sem intervalo comprometem a oxigenação.</p>
<p>Proteger: no expulsivo, controle da saída da cabeça, proteção do períneo, e, após o parto, <strong>revisão cuidadosa do canal</strong> (colo, vagina, períneo) à procura das lacerações que o parto rápido produz, com sutura e atenção à hemorragia pós-parto, mais frequente pelo trauma e pela atonia após a hiperatividade. O <strong>recém-nascido</strong> precisa de <strong>observação rigorosa</strong>: nasce deprimido pela hipóxia das contrações e pela descompressão súbita, com risco de hemorragia intracraniana, e a equipe de reanimação deve estar presente. O parto taquitócico ainda leva a maior risco de embolia amniótica e inversão uterina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Multípara com contrações a cada minuto e dilatação que avança a olhos vistos: desligue a ocitocina, deite-a de lado, chame a anestesia e a pediatria, e não rompa a bolsa. Depois do bebê nascer, a lanterna vai ao colo e à vagina antes de qualquer comemoração.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hiperatividade com obstrução: anel de Bandl, cesárea; sem obstrução: parto taquitócico.</li>
<li>Frear: suspender ocitócicos, decúbito lateral, tocólise se sofrimento; amniotomia tardia; analgesia precoce.</li>
<li>Proteger: expulsivo controlado, revisão do canal, vigilância da hemorragia.</li>
<li>Recém-nascido: reanimação presente e observação rigorosa por hipóxia e hemorragia intracraniana.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a amniotomia é tardia no parto taquitócico? <details><summary>Resposta</summary>Porque a rotura das membranas intensifica as contrações e acelera ainda mais o parto, aumentando a hipóxia e o trauma.</details></li>
<li>Que cuidado o recém-nascido do parto taquitócico exige? <details><summary>Resposta</summary>Reanimação disponível e observação rigorosa, pelo risco de depressão por hipóxia e de hemorragia intracraniana.</details></li>
</ol>
`,
"susp2021#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a via de parto na gestante com HIV pela carga viral às 34 semanas.</li>
<li>Aplicar a regra da cesárea às 38 semanas com carga viral de 1.000 cópias ou mais ou desconhecida.</li>
<li>Decidir na gestante que chega em trabalho de parto: 4 cm e membranas íntegras.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Carga viral de 34 semanas</dt>
<dd>Exame que define a via de parto e a profilaxia intraparto.</dd>
<dt>Cesárea eletiva às 38 semanas</dt>
<dd>Indicada com carga viral de 1.000 cópias ou mais ou desconhecida, antes do trabalho de parto e com membranas íntegras.</dd>
<dt>Zidovudina intravenosa intraparto</dt>
<dd>Iniciada 3 horas antes da cesárea ou no trabalho de parto, com carga viral de 1.000 ou mais ou desconhecida.</dd>
<dt>Profilaxia do recém-nascido</dt>
<dd>Zidovudina por 4 semanas (baixo risco) ou esquema com três drogas (alto risco), iniciada nas primeiras 4 horas.</dd>
</dl>
<h4>O essencial</h4>
<p>A prevenção da transmissão vertical do HIV se sustenta em terapia antirretroviral desde o diagnóstico, carga viral indetectável no terceiro trimestre, via de parto conforme a carga viral, profilaxia intraparto e neonatal e substituição do aleitamento. A <strong>carga viral de 34 semanas</strong> é a que decide: <strong>abaixo de 1.000 cópias/mL</strong> (idealmente indetectável), a via de parto é <strong>obstétrica</strong>, e o parto vaginal é permitido, com cuidados (evitar amniotomia precoce, episiotomia e procedimentos invasivos no feto); <strong>1.000 cópias ou mais</strong>, ou <strong>desconhecida</strong>, indica <strong>cesárea eletiva às 38 semanas</strong>, antes do início do trabalho de parto e com membranas íntegras, com <strong>zidovudina intravenosa</strong> iniciada 3 horas antes.</p>
<p>Quando a gestante com carga viral alta ou desconhecida <strong>chega em trabalho de parto</strong>, a cesárea ainda reduz a transmissão se as condições forem <strong>dilatação menor que 4 cm e membranas íntegras</strong>: nesse caso, cesárea com zidovudina intravenosa. Com dilatação de 4 cm ou mais, ou membranas rotas, o benefício da cesárea se perde, e o parto segue pela via mais rápida, com zidovudina intravenosa e os cuidados para reduzir a exposição.</p>
<p>O recém-nascido recebe a profilaxia nas primeiras 4 horas: <strong>zidovudina por 4 semanas</strong> no baixo risco (mãe com carga viral indetectável em terapia), ou esquema com <strong>zidovudina, lamivudina e raltegravir (ou nevirapina)</strong> no alto risco (carga viral de 1.000 ou mais, desconhecida, sem terapia ou diagnóstico tardio), com inibição da lactação e fórmula infantil, e seguimento com carga viral do bebê. A gestante mantém a terapia antirretroviral após o parto, para sempre.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Primigesta no termo, com HIV e carga viral de 3.000 às 34 semanas, que chega com 2 cm e bolsa íntegra: zidovudina na veia e cesárea agora, porque ainda dá tempo de a cesárea proteger. Se chegasse com 6 cm e bolsa rota, a resposta seria o parto vaginal com zidovudina, sem demora.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Carga viral de 34 semanas decide: abaixo de 1.000, via obstétrica; 1.000 ou mais ou desconhecida, cesárea às 38 semanas.</li>
<li>Em trabalho de parto com carga viral alta: cesárea se dilatação abaixo de 4 cm e membranas íntegras.</li>
<li>Zidovudina intravenosa intraparto com carga viral de 1.000 ou mais ou desconhecida.</li>
<li>Recém-nascido: zidovudina 4 semanas (baixo risco) ou três drogas (alto risco); sem aleitamento.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando a cesárea ainda está indicada na gestante com HIV que chega em trabalho de parto? <details><summary>Resposta</summary>Com carga viral de 1.000 ou mais (ou desconhecida), dilatação menor que 4 cm e membranas íntegras.</details></li>
<li>Qual é a via de parto com carga viral indetectável às 34 semanas? <details><summary>Resposta</summary>Via obstétrica: parto vaginal permitido, com cuidados para reduzir a exposição.</details></li>
</ol>
`,
"unesp2026#21": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Calcular a idade gestacional e classificar o pré-termo tardio.</li>
<li>Reconhecer o trabalho de parto pré-termo e saber o que muda a partir de 34 semanas.</li>
<li>Indicar a profilaxia do estreptococo do grupo B e assistir ao parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pré-termo tardio</dt>
<dd>Nascimento entre 34 e 36 semanas e 6 dias; a maior parcela dos prematuros.</dd>
<dt>Tocólise</dt>
<dd>Inibição das contrações por 48 horas para o corticoide agir; indicada entre 24 e 34 semanas.</dd>
<dt>Corticoide antenatal</dt>
<dd>Betametasona ou dexametasona de 24 a 34 semanas; entre 34 e 36 semanas só em casos selecionados.</dd>
<dt>Profilaxia do estreptococo B</dt>
<dd>Penicilina ou ampicilina intraparto no trabalho de parto pré-termo, salvo cultura negativa nas últimas 5 semanas.</dd>
</dl>
<h4>O essencial</h4>
<p>O primeiro passo diante de contrações é <strong>datar</strong>: pela última menstruação de 20 de fevereiro, em 1º de novembro a gestação tem 36 semanas e 2 dias, um <strong>pré-termo tardio</strong>; a ultrassonografia precoce, quando existe, prevalece se a diferença for maior que uma semana. O <strong>trabalho de parto</strong> se define por contrações regulares e dolorosas com modificação do colo (dilatação de 2 cm ou mais e esvaecimento), e a avaliação inclui vitalidade fetal, apresentação, membranas, sinais de infecção e de descolamento.</p>
<p>As intervenções da prematuridade têm janelas. A <strong>tocólise</strong> (nifedipino, atosibana, indometacina antes de 32 semanas) ganha tempo para o <strong>corticoide</strong> e para a transferência, e é indicada entre <strong>24 e 34 semanas</strong>; depois de 34 semanas os riscos neonatais são pequenos e a inibição não traz benefício. O <strong>corticoide</strong> tem sua maior evidência de 24 a 34 semanas; entre 34 e 36 semanas e 6 dias pode ser considerado em quem não recebeu antes e tem parto provável em 7 dias, com o custo de hipoglicemia neonatal, e não retarda o parto. O <strong>sulfato de magnésio</strong> para neuroproteção é usado antes de 32 semanas. Nenhum desses três se aplica à gestante de 36 semanas em trabalho de parto.</p>
<p>O que resta, e é obrigatório, é a <strong>profilaxia do estreptococo do grupo B</strong>: todo trabalho de parto pré-termo recebe penicilina G cristalina ou ampicilina intravenosa desde a admissão até o parto, salvo cultura retovaginal negativa colhida nas últimas 5 semanas; a cultura é colhida na admissão se não existe. Segue-se a <strong>assistência ao trabalho de parto</strong> pela via obstétrica, com monitorização fetal, neonatologista presente e cuidados do pré-termo tardio: hipotermia, hipoglicemia, dificuldade de sucção e icterícia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Aos 36 semanas com 4 cm de dilatação, não há o que inibir nem o que amadurecer: penicilina na veia e assistência ao parto, com a pediatria avisada. A conta da idade gestacional é o que impede de prescrever nifedipino e corticoide a quem já passou da janela.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Datar primeiro; 34 a 36 semanas e 6 dias é pré-termo tardio.</li>
<li>Tocólise e corticoide de rotina só até 34 semanas; sulfato de magnésio até 32.</li>
<li>Trabalho de parto pré-termo: profilaxia do estreptococo B desde a admissão, salvo cultura negativa recente.</li>
<li>Assistir ao parto pela via obstétrica com neonatologia presente.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que intervenção resta no trabalho de parto às 36 semanas? <details><summary>Resposta</summary>A profilaxia intraparto do estreptococo do grupo B e a assistência ao parto; tocólise e corticoide já não se aplicam.</details></li>
<li>Até que idade gestacional a tocólise é indicada? <details><summary>Resposta</summary>Até 34 semanas, para dar tempo ao corticoide e à transferência.</details></li>
</ol>
`,
"unesp2026#23": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar o corte de 92 mg/dL para o diabetes gestacional na primeira consulta.</li>
<li>Interpretar o TSH da gestante e tratar o hipotireoidismo subclínico acima de 4,0 mUI/L.</li>
<li>Iniciar as duas condutas ao mesmo tempo: estilo de vida e levotiroxina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Diabetes gestacional na primeira consulta</dt>
<dd>Glicemia de jejum de 92 a 125 mg/dL antes de 20 semanas; diagnóstico com um valor.</dd>
<dt>Hipotireoidismo subclínico na gestação</dt>
<dd>TSH acima do limite trimestral (ou de 4,0 mUI/L) com T4 livre normal.</dd>
<dt>Anti-TPO</dt>
<dd>Anticorpo que, positivo, indica tratamento com TSH acima de 2,5 e vigilância da tireoidite pós-parto.</dd>
<dt>Levotiroxina na gestação</dt>
<dd>Iniciada de imediato e ajustada a cada 4 semanas para TSH abaixo de 2,5 no primeiro trimestre.</dd>
</dl>
<h4>O essencial</h4>
<p>A primeira consulta de uma gestante de 39 anos com IMC de 36 traz dois resultados que cobram decisão. A <strong>glicemia de jejum de 94 mg/dL</strong> cai no intervalo de <strong>92 a 125</strong>: é <strong>diabetes mellitus gestacional</strong>, diagnosticado com um único valor, sem repetição e sem teste de tolerância, e o tratamento começa na mesma consulta com <strong>orientação de estilo de vida</strong> (dieta com nutricionista, atividade física, controle do ganho de peso), automonitorização glicêmica e insulina se as metas não forem atingidas em 1 a 2 semanas. Idade avançada e obesidade só reforçam o risco.</p>
<p>O <strong>TSH de 6 mUI/L</strong> com T4 livre normal é <strong>hipotireoidismo subclínico</strong>. Na gestação, o hCG estimula a tireoide e o TSH normal do primeiro trimestre é mais baixo; a FEBRASGO e a ATA orientam <strong>tratar</strong> com levotiroxina o TSH <strong>acima de 4,0 mUI/L</strong> (ou acima do limite trimestral do laboratório) independentemente do anti-TPO, e o TSH entre 2,5 e 4,0 quando o anti-TPO é positivo; o hipotireoidismo não tratado se associa a abortamento, prematuridade, pré-eclâmpsia e prejuízo neurocognitivo. A dose inicial é de 1 a 1,6 µg/kg conforme o valor, com TSH a cada 4 semanas até a metade da gestação e meta abaixo de 2,5 no primeiro trimestre; quem já usava levotiroxina aumenta a dose em 25 a 30% ao confirmar a gravidez.</p>
<p>As duas condutas não competem: <strong>mudança de estilo de vida</strong> para o diabetes gestacional e <strong>levotiroxina</strong> para a tireoide, ambas iniciadas agora, com o pré-natal passando a alto risco. O rastreamento universal do TSH na gestação é discutido, mas a gestante com fatores de risco (idade, obesidade, história familiar, autoimunidade) o faz sempre.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Duas prescrições saem da mesma consulta: a dieta com o glicosímetro e a levotiroxina em jejum. Não repita a glicemia para "confirmar" nem espere o anti-TPO para tratar um TSH de 6: os dois atrasos custam semanas do primeiro trimestre, quando o feto mais precisa do hormônio e menos tolera a glicose.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Jejum de 92 a 125 na primeira consulta: diabetes gestacional; estilo de vida e monitorização já.</li>
<li>TSH acima de 4,0 na gestação: levotiroxina, independentemente do anti-TPO; entre 2,5 e 4,0, tratar se anti-TPO positivo.</li>
<li>TSH a cada 4 semanas até a metade da gestação; meta abaixo de 2,5 no primeiro trimestre.</li>
<li>Quem já usa levotiroxina aumenta 25 a 30% ao engravidar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Glicemia de jejum de 94 mg/dL às 12 semanas: qual é a conduta? <details><summary>Resposta</summary>Diagnosticar diabetes gestacional e iniciar orientação de estilo de vida e automonitorização, sem repetir o exame.</details></li>
<li>Qual é o corte de TSH para iniciar levotiroxina na gestação sem anti-TPO? <details><summary>Resposta</summary>Acima de 4,0 mUI/L (ou do limite trimestral do laboratório).</details></li>
</ol>
`,
"unesp2026#24": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Identificar os marcadores clínicos de risco para pré-eclâmpsia.</li>
<li>Prescrever as três medidas preventivas com evidência: ácido acetilsalicílico, cálcio e atividade física.</li>
<li>Saber o que não previne pré-eclâmpsia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Marcadores de alto risco</dt>
<dd>Pré-eclâmpsia prévia, hipertensão crônica, diabetes, doença renal, lúpus ou SAF, gemelaridade; e a soma de moderados (idade de 35 ou mais, negra, obesidade, primigesta, história familiar, reprodução assistida).</dd>
<dt>Ácido acetilsalicílico</dt>
<dd>100 a 150 mg à noite, de 12 a 16 semanas até 36 semanas; reduz a pré-eclâmpsia pré-termo.</dd>
<dt>Cálcio</dt>
<dd>1 a 2 g ao dia em populações com baixa ingestão, como a brasileira; reduz a pré-eclâmpsia e a prematuridade.</dd>
<dt>Atividade física</dt>
<dd>150 minutos semanais de intensidade moderada, que reduzem hipertensão gestacional, pré-eclâmpsia e diabetes.</dd>
</dl>
<h4>O essencial</h4>
<p>A prevenção da pré-eclâmpsia começa pela identificação de risco na primeira consulta. Os <strong>fatores de alto risco</strong> (pré-eclâmpsia em gestação anterior, hipertensão crônica, diabetes pré-gestacional, doença renal, lúpus, síndrome antifosfolípide, gestação múltipla) indicam profilaxia por si sós; os <strong>fatores moderados</strong> se somam: <strong>idade de 35 anos ou mais</strong>, <strong>raça negra</strong>, obesidade, nuliparidade, história familiar, intervalo interpartal longo, reprodução assistida. Uma tercigesta de 38 anos, negra, já reúne dois moderados e entra na profilaxia. Onde o rastreio combinado com Doppler das uterinas está disponível, ele refina a seleção.</p>
<p>Três medidas têm evidência. O <strong>ácido acetilsalicílico</strong> em dose de <strong>100 a 150 mg</strong>, à noite, iniciado entre <strong>12 e 16 semanas</strong> (o benefício cai quando começa depois) e mantido até 36 semanas, reduz a pré-eclâmpsia pré-termo em cerca de 60% nas de alto risco. O <strong>cálcio</strong>, <strong>1 a 2 g ao dia</strong>, indicado pela OMS e pelo Ministério da Saúde para populações com baixa ingestão como a brasileira, reduz a pré-eclâmpsia, sobretudo nas de alto risco. A <strong>atividade física</strong> de <strong>150 minutos por semana</strong>, moderada, reduz a hipertensão gestacional, a pré-eclâmpsia e o diabetes gestacional, e é recomendada a toda gestante sem contraindicação.</p>
<p>O que <strong>não previne</strong>: restrição de sal, repouso, vitaminas C e E, ômega-3, magnésio e ácido fólico em dose alta (o ácido fólico previne defeitos do tubo neural, não pré-eclâmpsia), diuréticos e anti-hipertensivos profiláticos; a heparina não tem indicação fora da síndrome antifosfolípide. A vigilância da pressão e dos sintomas, e a orientação sobre sinais de alarme, completam a prevenção secundária.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A receita da primeira consulta da gestante de 38 anos, negra: aspirina 100 mg à noite a partir de agora, cálcio 1 g ao dia, e a caminhada de 30 minutos cinco vezes por semana escrita como prescrição. O ácido fólico já estava lá por outro motivo, e a vitamina C não entra.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Alto risco por um fator maior ou pela soma de moderados (35 anos ou mais, negra, obesidade, primigesta, história familiar).</li>
<li>Ácido acetilsalicílico 100 a 150 mg à noite, de 12 a 16 até 36 semanas.</li>
<li>Cálcio 1 a 2 g ao dia; atividade física 150 minutos semanais.</li>
<li>Sal, repouso, vitaminas C e E, ômega-3 e ácido fólico não previnem pré-eclâmpsia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as três medidas preventivas de pré-eclâmpsia com evidência? <details><summary>Resposta</summary>Ácido acetilsalicílico em baixa dose a partir de 12 semanas, cálcio 1 a 2 g ao dia e atividade física de 150 minutos semanais.</details></li>
<li>Por que a aspirina deve começar até 16 semanas? <details><summary>Resposta</summary>Porque age na fase de placentação; iniciada depois, o benefício sobre a pré-eclâmpsia pré-termo cai.</details></li>
</ol>
`,
"unesp2026#26": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a atonia uterina pelo útero alto e amolecido após o parto.</li>
<li>Executar a sequência inicial: dois acessos calibrosos, cristaloide, ocitocina e ácido tranexâmico.</li>
<li>Conhecer os fatores de risco e os passos seguintes da hemorragia pós-parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Atonia uterina</dt>
<dd>Útero que não contrai após a dequitação: fundo acima da cicatriz umbilical, amolecido, sangrando.</dd>
<dt>Acessos venosos calibrosos</dt>
<dd>Dois cateteres periféricos de 16 ou 18 G, que permitem infusão rápida; a via central não é a primeira.</dd>
<dt>Ocitocina em bolus e infusão</dt>
<dd>Uterotônico de primeira linha: 5 a 10 UI lentas seguidas de infusão contínua.</dd>
<dt>Ácido tranexâmico</dt>
<dd>1 g intravenoso nas primeiras 3 horas do sangramento, repetido se persistir; reduz a mortalidade.</dd>
</dl>
<h4>O essencial</h4>
<p>Uma grande multípara que pariu no trajeto da ambulância soma fatores de risco para atonia: multiparidade, parto rápido e sem ocitocina profilática, útero distendido. Na chegada, o exame que decide é a <strong>palpação do fundo uterino</strong>: <strong>acima da cicatriz umbilical, amolecido, sem o globo de segurança</strong>, com sangramento vaginal ativo, é atonia, a causa de 70% das hemorragias pós-parto. A avaliação inclui sinais vitais, palidez, nível de consciência, e a busca das outras causas (restos placentários, lacerações, coagulopatia) segue em paralelo.</p>
<p>A sequência inicial é padronizada e simultânea, na "hora de ouro": chamar ajuda; <strong>dois acessos venosos periféricos calibrosos</strong>; <strong>cristaloide</strong> aquecido em infusão inicial (limitada, para não diluir os fatores), com coleta de tipagem, hemograma, coagulograma e fibrinogênio; oxigênio, sonda vesical e aquecimento; <strong>massagem uterina</strong> e esvaziamento da bexiga; <strong>ocitocina em bolus</strong> lento seguido de infusão; e <strong>ácido tranexâmico 1 g</strong> intravenoso o mais cedo possível, dentro das primeiras 3 horas. A reposição de hemocomponentes começa cedo se a perda é grande ou a resposta ao cristaloide é transitória, com hemácias, plasma e plaquetas em proporção próxima de 1:1:1 e fibrinogênio quando abaixo de 200 mg/dL.</p>
<p>Se o útero não contrai, os passos seguintes são a <strong>metilergometrina</strong> intramuscular (salvo hipertensão), o <strong>misoprostol</strong>, o <strong>balão intrauterino</strong> e, na falha, a cirurgia (suturas compressivas, ligaduras arteriais, histerectomia), com o traje antichoque não pneumático e a transferência quando não há recurso. A revisão do canal e da placenta (completa? membranas?) faz parte da avaliação desde o início, porque o útero alto pode esconder restos ou um hematoma.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O fundo do útero na altura do umbigo, mole, em quem acabou de parir no SAMU: enquanto uma pessoa massageia, outra puncione as duas veias, corra o soro com a ocitocina e prepare o tranexâmico. As quatro coisas acontecem no mesmo minuto; a ordem da prova é a ordem da sala.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Útero acima do umbigo e amolecido com sangramento: atonia; multiparidade e parto rápido são risco.</li>
<li>Sequência inicial: ajuda, dois acessos calibrosos, cristaloide, massagem, ocitocina em bolus e infusão, ácido tranexâmico em 3 horas.</li>
<li>Hemocomponentes cedo se perda grande; fibrinogênio acima de 200.</li>
<li>Falha: metilergometrina, misoprostol, balão, cirurgia; revisar canal e placenta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado do exame define a atonia uterina? <details><summary>Resposta</summary>Fundo uterino acima da cicatriz umbilical, amolecido, sem globo de segurança, com sangramento ativo.</details></li>
<li>Em quanto tempo o ácido tranexâmico deve ser dado? <details><summary>Resposta</summary>Nas primeiras 3 horas do início do sangramento, 1 g intravenoso, repetido se persistir.</details></li>
</ol>
`,
"unesp2026#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Nomear a variedade de posição pelo ponto de referência fetal e sua relação com a pelve.</li>
<li>Calcular a rotação interna necessária e seu sentido.</li>
<li>Reconhecer as variedades posteriores como causa de parto prolongado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ponto de referência</dt>
<dd>Na apresentação cefálica fletida, o occipício (lambda); a variedade se nomeia pela sua posição na pelve.</dd>
<dt>Variedades de posição</dt>
<dd>OP (púbis), OEA e ODA (anteriores), OET e ODT (transversas), OEP e ODP (posteriores), OS (sacro).</dd>
<dt>Rotação interna</dt>
<dd>Giro da cabeça no estreito médio para levar o occipício ao púbis: 45° das anteriores, 90° das transversas, 135° das posteriores.</dd>
<dt>Sentido da rotação</dt>
<dd>Visto pelo obstetra de frente para a parturiente: as variedades esquerdas rodam em sentido anti-horário, as direitas em sentido horário.</dd>
</dl>
<h4>O essencial</h4>
<p>Na apresentação cefálica fletida, o ponto de referência é o <strong>occipício</strong>, e a variedade de posição descreve para onde ele aponta na pelve materna. Quando o occipício está voltado para a <strong>articulação sacroilíaca esquerda</strong>, a variedade é <strong>occípito-esquerda-posterior (OEP)</strong>: "esquerda" porque o occipício está do lado esquerdo da mãe, "posterior" porque olha para trás, para a sacroilíaca. O toque identifica a sutura sagital oblíqua e a fontanela posterior (lambda) à esquerda e atrás; a fontanela anterior (bregma) fica à direita e à frente, mais acessível.</p>
<p>Para que a cabeça se desprenda pelo mecanismo normal, o occipício precisa chegar ao <strong>púbis</strong> (occípito-púbica). A <strong>rotação interna</strong> mede quanto falta: das variedades <strong>anteriores</strong> (OEA, ODA), 45°; das <strong>transversas</strong> (OET, ODT), 90°; das <strong>posteriores</strong> (OEP, ODP), <strong>135°</strong>. O <strong>sentido</strong> é definido pelo lado: o occipício à esquerda gira para a frente passando pela transversa esquerda e pela anterior esquerda, o que, visto pelo examinador de frente para a paciente, é o sentido <strong>anti-horário</strong>; à direita, horário. Assim, a OEP roda 135° em sentido anti-horário até a OP.</p>
<p>As variedades posteriores são comuns no início do trabalho de parto e a maioria roda espontaneamente; quando persistem, prolongam o segundo período, aumentam a dor lombar, o uso de ocitocina, o parto instrumental e as lacerações; uma minoria se desprende em occípito-sacra, com rotação curta de 45° para trás. A rotação manual ou com fórcipe de Kielland e as mudanças de posição materna são recursos quando a rotação não acontece; a pelve androide e o feto grande favorecem a persistência.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lambda atrás e à esquerda com 8 cm de dilatação é OEP: avise a parturiente de que a dor nas costas tem explicação, mude-a de posição, tenha paciência com o expulsivo e recalcule ao toque seguinte; se o lambda chegou à frente, a cabeça rodou os 135° sozinha.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Occipício voltado à sacroilíaca esquerda: occípito-esquerda-posterior (OEP).</li>
<li>Rotação interna até o púbis: 45° anteriores, 90° transversas, 135° posteriores.</li>
<li>Esquerdas rodam em sentido anti-horário; direitas, horário (visto de frente para a paciente).</li>
<li>Posteriores persistentes: expulsivo longo, dor lombar, instrumental; rotação manual como recurso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Occipício voltado para a articulação sacroilíaca esquerda: qual é a variedade e a rotação necessária? <details><summary>Resposta</summary>Occípito-esquerda-posterior; 135° em sentido anti-horário até a occípito-púbica.</details></li>
<li>Quanto rodam as variedades transversas? <details><summary>Resposta</summary>90°, da transversa até o púbis.</details></li>
</ol>
`,
"unesp2026#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a endometrite puerperal pelo tempo, pela febre e pelo exame uterino.</li>
<li>Explicar por que a infecção é polimicrobiana e exige cobertura de anaeróbios.</li>
<li>Prescrever clindamicina com gentamicina e saber quando parar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Morbidade febril puerperal</dt>
<dd>Temperatura de 38 ºC ou mais em duas medidas com intervalo de ao menos 4 horas, após as primeiras 24 horas.</dd>
<dt>Endometrite</dt>
<dd>Infecção da decídua após o parto, a principal causa de febre puerperal; 5 a 10 vezes mais comum após cesárea.</dd>
<dt>Flora polimicrobiana</dt>
<dd>Anaeróbios (Bacteroides, Peptostreptococcus), estreptococos, enterobactérias, Gardnerella, Ureaplasma.</dd>
<dt>Clindamicina e gentamicina</dt>
<dd>Esquema padrão: anaeróbios e gram-positivos pela clindamicina, gram-negativos pela gentamicina.</dd>
</dl>
<h4>O essencial</h4>
<p>Febre no puerpério tem um diferencial curto: endometrite, infecção da ferida, mastite, infecção urinária, pneumonia e tromboflebite pélvica. A <strong>endometrite</strong> é a mais comum, e a <strong>cesárea</strong> é o maior fator de risco (com trabalho de parto prolongado, rotura de membranas longa, muitos toques, corioamnionite, restos placentários e baixo nível socioeconômico). Apresenta-se entre o <strong>2º e o 10º dia</strong> com <strong>febre</strong>, calafrios, mal-estar, <strong>útero subinvoluído e doloroso</strong> à palpação e à mobilização, lóquios fétidos ou purulentos e, às vezes, taquicardia e leucocitose. Um útero 2 cm acima do umbigo no 4º dia, quando deveria estar na cicatriz ou abaixo, é subinvolução com dor: a assinatura da endometrite.</p>
<p>A infecção é <strong>polimicrobiana</strong>, por ascensão da flora vaginal e intestinal: <strong>anaeróbios</strong>, estreptococos dos grupos A e B, enterococos, enterobactérias, <em>Gardnerella</em> e micoplasmas. Por isso o tratamento exige <strong>cobertura ampla</strong>, e o esquema de referência, com a melhor evidência, é <strong>clindamicina com gentamicina</strong> intravenosas: a clindamicina cobre anaeróbios e gram-positivos, a gentamicina os gram-negativos; ampicilina é acrescentada se houver suspeita de enterococo ou falha em 48 a 72 horas. O diagnóstico é clínico; hemoculturas ajudam nos casos graves e a ultrassonografia procura restos e abscessos.</p>
<p>O antibiótico intravenoso é mantido até <strong>24 a 48 horas afebril</strong>, e não é preciso continuar por via oral depois, salvo bacteremia por estafilococo ou estreptococo. Falha após 72 horas leva a procurar abscesso pélvico, hematoma infectado, restos placentários (curetagem), tromboflebite pélvica séptica (anticoagulação) e infecção da ferida. A prevenção é a profilaxia antibiótica antes da incisão da cesárea (cefazolina, com azitromicina na cesárea em trabalho de parto) e o preparo vaginal.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Puérpera de cesárea com febre no 4º dia e útero acima do umbigo, dolorido: clindamicina e gentamicina na veia hoje, sem esperar cultura, e o exame da ferida e das mamas para não perder outra fonte. Se em 72 horas a febre não cair, procure o abscesso e os restos, não troque só o antibiótico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre puerperal do 2º ao 10º dia com útero subinvoluído e doloroso: endometrite; cesárea é o maior risco.</li>
<li>Polimicrobiana com anaeróbios: cobertura ampla obrigatória.</li>
<li>Clindamicina com gentamicina IV até 24 a 48 horas afebril; ampicilina se enterococo ou falha.</li>
<li>Falha em 72 horas: abscesso, restos, tromboflebite séptica, ferida.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a endometrite exige antibiótico de amplo espectro? <details><summary>Resposta</summary>Porque é polimicrobiana, com anaeróbios, gram-positivos e gram-negativos da flora vaginal e intestinal.</details></li>
<li>Qual é o esquema de referência e até quando se mantém? <details><summary>Resposta</summary>Clindamicina com gentamicina intravenosas, até 24 a 48 horas sem febre, sem necessidade de via oral depois.</details></li>
</ol>
`,
"unesp2026#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a dismenorreia e o aumento do fluxo como efeitos esperados do DIU de cobre.</li>
<li>Tratar com anti-inflamatório nos primeiros dias do ciclo, mantendo o DIU.</li>
<li>Saber quando o DIU deve ser retirado ou trocado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>DIU de cobre</dt>
<dd>Método de longa duração (10 anos), sem hormônio, com ação espermicida e inflamatória local.</dd>
<dt>Efeitos esperados</dt>
<dd>Aumento do fluxo em 20 a 50% e dismenorreia nos primeiros meses, que tendem a melhorar.</dd>
<dt>Anti-inflamatório não esteroide</dt>
<dd>Ibuprofeno, naproxeno, ácido mefenâmico: reduzem prostaglandinas, dor e sangramento com o DIU de cobre.</dd>
<dt>Sinais de alarme com DIU</dt>
<dd>Dor intensa e persistente, febre, corrimento purulento, fios ausentes, atraso menstrual: infecção, expulsão, perfuração, gestação.</dd>
</dl>
<h4>O essencial</h4>
<p>O DIU de cobre é um dos métodos mais eficazes e seguros, sem contraindicação por enxaqueca, trombose ou amamentação, e indicado para adolescentes e nulíparas (categoria 2 da OMS). Seu mecanismo é a reação inflamatória estéril do endométrio ao cobre, que é espermicida e impede a fertilização; a mesma reação eleva as <strong>prostaglandinas locais</strong> e produz os dois efeitos adversos mais comuns: <strong>aumento do fluxo menstrual</strong> e <strong>dismenorreia</strong>, sobretudo nos primeiros 3 a 6 meses, com tendência a melhorar ao longo do primeiro ano. Eles são a principal causa de retirada precoce, e a orientação prévia reduz o abandono.</p>
<p>Uma cólica de intensidade moderada nos dois primeiros dias do fluxo, oito meses após a inserção, com exame normal, colo saudável, fios visíveis e ultrassonografia com o DIU bem posicionado, é o <strong>efeito esperado</strong>, não uma complicação. A conduta é <strong>manter o DIU</strong> e prescrever <strong>anti-inflamatório não esteroide</strong> (ibuprofeno, naproxeno ou ácido mefenâmico) iniciado no primeiro dia do fluxo ou na véspera, por 2 a 3 dias, que reduz a dor e também o volume do sangramento; o ácido tranexâmico é opção para o fluxo excessivo. Antibiótico não tem lugar sem sinais de infecção, e a troca por DIU hormonal ou por outro método é discutida só se os sintomas persistem apesar do tratamento e comprometem a adesão.</p>
<p>O que muda a conduta são os sinais de alarme: dor intensa e contínua fora da menstruação, febre e corrimento purulento (doença inflamatória pélvica, tratada com o DIU no lugar se houver melhora em 72 horas), fios não visíveis (expulsão ou perfuração, a confirmar por ultrassonografia), atraso menstrual (gestação, com risco de ectópica) e DIU mal posicionado na imagem, que se retira e substitui.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Adolescente com cólica nos dois primeiros dias e DIU no lugar não precisa de ultrassonografia de novo nem de retirada: naproxeno desde a véspera da menstruação e a conversa de que os meses seguintes tendem a ser melhores. Retirar o DIU de cobre por dismenorreia sem antes tentar o anti-inflamatório é trocar um método excelente por nenhum.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>DIU de cobre: inflamação local e prostaglandinas; fluxo maior e dismenorreia são esperados e melhoram.</li>
<li>Exame normal, fios visíveis, DIU bem posicionado: manter e prescrever anti-inflamatório nos primeiros dias do ciclo.</li>
<li>Ácido tranexâmico para o fluxo excessivo; troca de método só se persistir.</li>
<li>Alarme: dor contínua, febre, corrimento purulento, fios ausentes, atraso menstrual.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a conduta na dismenorreia moderada com DIU de cobre bem posicionado? <details><summary>Resposta</summary>Manter o DIU e usar anti-inflamatório não esteroide nos primeiros dias do ciclo.</details></li>
<li>Por que o DIU de cobre aumenta a cólica e o fluxo? <details><summary>Resposta</summary>Pela reação inflamatória local com aumento das prostaglandinas endometriais.</details></li>
</ol>
`,
"unesp2026#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a história familiar que indica avaliação genética para câncer de mama hereditário.</li>
<li>Saber quais genes são testados e o que o resultado muda no rastreamento.</li>
<li>Diferenciar rastreamento de risco médio, alto risco familiar e portadoras de mutação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios para teste genético</dt>
<dd>Câncer de mama antes dos 50 em parente de primeiro grau, dois ou mais parentes com câncer de mama ou ovário, câncer bilateral, masculino, triplo-negativo antes dos 60, ascendência judaica asquenazi.</dd>
<dt>BRCA1 e BRCA2</dt>
<dd>Genes de reparo do DNA; mutações elevam o risco de câncer de mama a 60 a 70% e de ovário a 20 a 40% ao longo da vida.</dd>
<dt>PALB2</dt>
<dd>Gene de risco alto para câncer de mama, incluído nos painéis atuais com ATM, CHEK2, TP53, PTEN, CDH1.</dd>
<dt>Rastreamento de alto risco</dt>
<dd>Ressonância magnética anual das mamas, a partir dos 25 a 30 anos, alternada com mamografia.</dd>
</dl>
<h4>O essencial</h4>
<p>Cerca de 5 a 10% dos cânceres de mama são hereditários, e a história familiar é a porta de entrada. Os critérios das diretrizes (NCCN, FEBRASGO, SBM) para <strong>avaliação genética</strong> incluem: parente de primeiro grau com câncer de mama <strong>antes dos 50 anos</strong>, <strong>dois ou mais parentes</strong> do mesmo lado com câncer de mama, câncer de ovário em qualquer idade, câncer de mama masculino, bilateral, triplo-negativo antes dos 60 e ascendência judaica asquenazi. Uma mulher de 35 anos com <strong>mãe aos 45</strong> e <strong>tia materna aos 50</strong> cumpre dois critérios, e a conduta mais adequada é o <strong>aconselhamento e o teste genético</strong>, idealmente começando pela parente afetada, mas na paciente se aquela não estiver disponível.</p>
<p>O teste é um <strong>painel multigênico</strong> que inclui <strong>BRCA1, BRCA2 e PALB2</strong> (alto risco) e outros genes de risco moderado. O resultado muda tudo: a <strong>portadora de mutação</strong> entra no rastreamento de alto risco com <strong>ressonância magnética anual a partir dos 25 anos</strong> e mamografia a partir dos 30, discute a <strong>mastectomia redutora de risco</strong> e a <strong>salpingo-ooforectomia</strong> entre 35 e 45 anos (BRCA1 antes) após a prole, e seus familiares podem ser testados.</p>
<p>Iniciar mamografia ou ressonância antes de definir o risco, ou prescrever quimioprevenção com tamoxifeno sem estratificar, inverte a ordem: a história familiar dessa magnitude pede primeiro a resposta sobre a mutação, e o rastreio de alto risco decorre dela.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mãe com câncer de mama aos 45 e tia aos 50: encaminhe ao aconselhamento genético e peça o painel com BRCA1, BRCA2 e PALB2 antes de decidir se o rastreio será mamografia aos 40 ou ressonância agora. O teste não é para saber "se ela vai ter": é para escolher o rastreamento e as cirurgias que reduzem o risco.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Critérios: primeiro grau antes dos 50, dois ou mais parentes, ovário, masculino, bilateral, triplo-negativo, asquenazi.</li>
<li>Painel com BRCA1, BRCA2, PALB2 e outros; testar a afetada primeiro quando possível.</li>
<li>Portadora: ressonância anual desde 25 anos, mamografia desde 30, cirurgias redutoras de risco.</li>
<li>Negativo sem mutação familiar conhecida: rastreio de alto risco se risco calculado de 20% ou mais.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que história familiar indica teste genético para câncer de mama? <details><summary>Resposta</summary>Parente de primeiro grau com câncer antes dos 50, dois ou mais parentes com câncer de mama ou ovário, câncer masculino, bilateral, triplo-negativo precoce ou ascendência asquenazi.</details></li>
<li>O que muda para a portadora de mutação em BRCA? <details><summary>Resposta</summary>Ressonância anual a partir dos 25 anos, mamografia a partir dos 30 e discussão de mastectomia e salpingo-ooforectomia redutoras de risco.</details></li>
</ol>
`,
"unesp2026#36": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Ler os pontos do POP-Q e situá-los em relação ao hímen.</li>
<li>Aplicar os cortes de cada estágio, sobretudo a fronteira entre III e IV.</li>
<li>Relacionar o estágio à conduta: pessário, fisioterapia ou cirurgia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>POP-Q</dt>
<dd>Sistema de quantificação do prolapso: seis pontos (Aa, Ba, C, D, Ap, Bp) em centímetros em relação ao hímen (zero), negativos acima, positivos abaixo, mais três medidas (gh, pb, TVL).</dd>
<dt>Estágios</dt>
<dd>0 sem prolapso; I ponto mais distal acima de −1; II entre −1 e +1; III abaixo de +1 mas menor que TVL − 2; IV eversão completa, TVL − 2 ou mais.</dd>
<dt>TVL</dt>
<dd>Comprimento vaginal total; define a fronteira entre III e IV.</dd>
<dt>Pessário</dt>
<dd>Dispositivo vaginal de silicone, opção não cirúrgica eficaz em qualquer estágio.</dd>
</dl>
<h4>O essencial</h4>
<p>O POP-Q descreve o prolapso por pontos medidos em centímetros em relação ao <strong>hímen</strong>, durante a manobra de Valsalva máxima: <strong>Aa e Ba</strong> na parede anterior, C no colo ou na cúpula, D no fundo de saco posterior (ausente na histerectomizada), <strong>Ap e Bp</strong> na parede posterior; valores <strong>negativos</strong> estão dentro da vagina, <strong>positivos</strong> fora, e o hímen é zero. As medidas complementares são o hiato genital (gh), o corpo perineal (pb) e o <strong>comprimento vaginal total (TVL)</strong>.</p>
<p>O <strong>estágio</strong> é dado pelo <strong>ponto mais distal</strong> (mais positivo): <strong>0</strong> quando Aa, Ap, Ba e Bp estão em −3 e C ou D em −(TVL − 2) ou mais alto; <strong>I</strong> quando o ponto mais distal fica acima de −1 (dentro da vagina, a mais de 1 cm do hímen); <strong>II</strong> quando fica entre −1 e +1 (até 1 cm de cada lado do hímen); <strong>III</strong> quando desce mais de 1 cm além do hímen (acima de +1), <strong>mas menos que TVL − 2</strong>; <strong>IV</strong> quando o ponto mais distal está a <strong>TVL − 2 ou mais</strong>, ou seja, a eversão é completa, faltando no máximo 2 cm para o comprimento vaginal total.</p>
<p>Uma mulher com Aa em +2 e outros pontos exteriorizados, com TVL de, por exemplo, 8 cm, tem o ponto mais distal a mais de +1 (III), mas só chega ao IV se algum ponto atingir +6 (TVL − 2): fica no <strong>estágio III</strong>. Os sintomas ("bola na vagina", peso, dificuldade miccional por acotovelamento uretral, esvaziamento incompleto) aparecem sobretudo a partir do II com o ponto além do hímen. O tratamento nos estágios I e II sintomáticos começa com fisioterapia do assoalho e estrogênio vaginal; do II ao IV, o <strong>pessário</strong> é a opção não cirúrgica para todas, e a <strong>cirurgia</strong> (reconstrutiva por via vaginal ou abdominal, ou obliterativa em quem não tem vida sexual) é indicada pelos sintomas e pela preferência, não pelo estágio isolado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de dizer "prolapso total", subtraia 2 do TVL e compare com o ponto mais distal: +2 num TVL de 8 é III, não IV. O estágio orienta a cirurgia; a dificuldade para urinar e o resíduo pós-miccional são os dados que decidem se ela é urgente.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>POP-Q: pontos em cm em relação ao hímen; negativos dentro, positivos fora; TVL define o limite superior.</li>
<li>Estágio pelo ponto mais distal: I acima de −1; II de −1 a +1; III além de +1 até TVL − 2; IV a partir de TVL − 2.</li>
<li>Fronteira III/IV: ponto mais distal comparado a TVL − 2.</li>
<li>Fisioterapia e estrogênio nos leves; pessário em todos; cirurgia por sintomas e preferência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Aa em +2 e TVL de 8 cm: qual é o estágio? <details><summary>Resposta</summary>III: o ponto mais distal está além de +1, mas abaixo de TVL − 2 (6 cm).</details></li>
<li>O que define o estágio IV? <details><summary>Resposta</summary>Ponto mais distal a TVL − 2 ou mais: eversão praticamente completa da vagina.</details></li>
</ol>
`,
"unesp2026#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Saber que a radioterapia é parte obrigatória do tratamento conservador do câncer de mama.</li>
<li>Distinguir os adjuvantes que dependem do perfil tumoral dos que dependem da cirurgia.</li>
<li>Conhecer as indicações de quimioterapia, hormonioterapia e anti-HER2.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cirurgia conservadora</dt>
<dd>Setorectomia ou quadrantectomia com margens livres e biópsia do linfonodo sentinela; equivale à mastectomia quando seguida de radioterapia.</dd>
<dt>Radioterapia adjuvante</dt>
<dd>Irradiação da mama após a cirurgia conservadora; reduz a recidiva local em dois terços e a mortalidade.</dd>
<dt>Perfil imuno-histoquímico</dt>
<dd>Receptores de estrogênio e progesterona, HER2 e Ki-67: definem hormonioterapia, anti-HER2 e quimioterapia.</dd>
<dt>Hipofracionamento</dt>
<dd>Esquemas de radioterapia em 3 semanas (ou 1 semana), com eficácia igual ao esquema longo.</dd>
</dl>
<h4>O essencial</h4>
<p>O tratamento conservador do câncer de mama tem dois componentes inseparáveis: a <strong>cirurgia</strong> que retira o tumor com margens livres e avalia a axila pelo <strong>linfonodo sentinela</strong>, e a <strong>radioterapia</strong> da mama remanescente. A meta-análise do EBCTCG mostrou que a radioterapia após a cirurgia conservadora reduz a recidiva local de cerca de 30% para 10% em 10 anos e reduz a mortalidade por câncer de mama; sem ela, a conservação da mama não é equivalente à mastectomia. Por isso a radioterapia é <strong>regra</strong> para toda paciente submetida a setorectomia, com exceções raras (idade acima de 70 anos com tumor pequeno, receptor positivo, sob hormonioterapia). Os esquemas hipofracionados de 3 semanas são o padrão, com reforço no leito tumoral nas mais jovens.</p>
<p>Os demais adjuvantes dependem do <strong>tumor</strong>, não da cirurgia. A <strong>hormonioterapia</strong> (tamoxifeno na pré-menopausa, inibidor de aromatase na pós) é indicada quando os <strong>receptores hormonais são positivos</strong>, por 5 a 10 anos. A <strong>terapia anti-HER2</strong> (trastuzumabe, com pertuzumabe em selecionados) é indicada quando o <strong>HER2 é positivo</strong>, sempre com quimioterapia. A <strong>quimioterapia</strong> depende do subtipo, do estádio e, nos luminais, de assinaturas genômicas e do Ki-67: indicada nos triplo-negativos e HER2-positivos a partir de tumores pequenos, e nos luminais de alto risco. Um T2 N0 pode ou não receber quimioterapia ou hormônio conforme o perfil, mas receberá radioterapia sempre que a mama for conservada.</p>
<p>Após a mastectomia, a radioterapia é seletiva: tumores maiores que 5 cm, quatro ou mais linfonodos comprometidos, margens comprometidas, e discutida com um a três linfonodos. A axila positiva no sentinela com um ou dois linfonodos, em tratamento conservador com radioterapia e adjuvância, dispensa o esvaziamento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a paciente pergunta "vou precisar de radioterapia?" depois da setorectomia, a resposta é sim, independentemente do resultado da imuno-histoquímica que ainda não chegou. O que espera o laudo é a decisão sobre hormônio, quimioterapia e anti-HER2; a radioterapia já está decidida pela cirurgia que ela fez.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Conservadora sem radioterapia não é tratamento completo: recidiva local cai de 30% para 10%, com menos mortalidade.</li>
<li>Radioterapia é regra após setorectomia; hipofracionamento em 3 semanas.</li>
<li>Hormonioterapia se receptor positivo; anti-HER2 se HER2 positivo; quimioterapia pelo subtipo e risco.</li>
<li>Após mastectomia, radioterapia seletiva: T maior que 5 cm, 4 ou mais linfonodos, margens.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que adjuvante é obrigatório após a cirurgia conservadora, independentemente do perfil tumoral? <details><summary>Resposta</summary>A radioterapia da mama.</details></li>
<li>De que depende a indicação de hormonioterapia adjuvante? <details><summary>Resposta</summary>Da positividade dos receptores de estrogênio e progesterona no tumor.</details></li>
</ol>
`,
"unesp2026#39": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar osteoporose pelo T-score de −2,5 ou menos em qualquer sítio.</li>
<li>Indicar tratamento antirreabsortivo com cálcio e vitamina D, e não só suplementar.</li>
<li>Saber quem trata direto e quem precisa do FRAX.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Osteoporose densitométrica</dt>
<dd>T-score de −2,5 ou menos na coluna lombar, no colo do fêmur ou no fêmur total.</dd>
<dt>Indicações de tratamento</dt>
<dd>Osteoporose densitométrica; fratura de fragilidade de quadril ou vértebra; osteopenia com FRAX acima do corte.</dd>
<dt>Bisfosfonatos</dt>
<dd>Alendronato, risedronato, ácido zoledrônico: antirreabsortivos de primeira linha; denosumabe é a opção.</dd>
<dt>Cálcio e vitamina D</dt>
<dd>1.000 a 1.200 mg de cálcio (de preferência da dieta) e 800 a 1.000 UI de vitamina D ao dia: base, não tratamento.</dd>
</dl>
<h4>O essencial</h4>
<p>Na mulher pós-menopausa, a densitometria diagnostica <strong>osteoporose</strong> quando o T-score é <strong>−2,5 ou menos</strong> em <strong>qualquer</strong> dos sítios de referência: coluna lombar, colo do fêmur ou fêmur total. Não é preciso que todos estejam abaixo, nem que haja fratura; o pior sítio define. Uma mulher de 60 anos, sedentária, com mãe que fraturou o fêmur, e um T-score de −2,6 na coluna, tem osteoporose, ainda que o fêmur esteja em osteopenia.</p>
<p>O diagnóstico de osteoporose densitométrica é, por si, <strong>indicação de tratamento farmacológico</strong>, sem necessidade de calcular o FRAX; o mesmo vale para quem já teve <strong>fratura de fragilidade</strong> de quadril ou vértebra, que é osteoporose clínica com qualquer T-score. O <strong>FRAX</strong> entra para decidir na <strong>osteopenia</strong> (T-score entre −1,1 e −2,4): trata-se quando a probabilidade de fratura maior ou de quadril em 10 anos ultrapassa os cortes definidos para o Brasil. Suplementar cálcio e vitamina D sem antirreabsortivo, nesse caso, é subtratar.</p>
<p>O tratamento de primeira linha é um <strong>antirreabsortivo</strong>: <strong>bisfosfonato</strong> oral (alendronato semanal, risedronato) ou intravenoso (ácido zoledrônico anual), ou <strong>denosumabe</strong> semestral quando o bisfosfonato é contraindicado (insuficiência renal, intolerância digestiva); os anabólicos (teriparatida, romosozumabe) ficam para a osteoporose grave com fraturas. A base é <strong>cálcio</strong> (1.000 a 1.200 mg ao dia, de preferência alimentar) e <strong>vitamina D</strong> (800 a 1.000 UI, com dosagem de 25-OH-vitamina D), <strong>exercício</strong> de força e equilíbrio, cessação do tabagismo e prevenção de quedas. Antes de tratar, afastam-se causas secundárias (hiperparatireoidismo, hipertireoidismo, doença celíaca, mieloma, corticoide) com exames básicos; a densitometria é repetida em 1 a 2 anos, e após 5 anos de bisfosfonato oral discute-se a pausa nas de menor risco.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>T-score de −2,5 num só sítio já é osteoporose e já pede o bisfosfonato, não apenas "cálcio, vitamina D e caminhada". Reserve o FRAX para a osteopenia; na osteoporose densitométrica ele só confirmaria o que a densitometria já decidiu.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Osteoporose: T-score de −2,5 ou menos em coluna, colo do fêmur ou fêmur total; o pior sítio define.</li>
<li>Osteoporose densitométrica ou fratura de fragilidade: tratar direto; osteopenia: FRAX decide.</li>
<li>Antirreabsortivo (bisfosfonato ou denosumabe) mais cálcio, vitamina D, exercício e prevenção de quedas.</li>
<li>Afastar causas secundárias; densitometria de controle em 1 a 2 anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>T-score de −2,6 na coluna e −1,8 no fêmur: qual é o diagnóstico e a conduta? <details><summary>Resposta</summary>Osteoporose (o pior sítio define); tratamento com antirreabsortivo, cálcio e vitamina D.</details></li>
<li>Quando o FRAX é necessário para decidir o tratamento? <details><summary>Resposta</summary>Na osteopenia (T-score entre −1,1 e −2,4) sem fratura de fragilidade.</details></li>
</ol>
`,
"einstein2026#47": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a investigação da amenorreia primária pelo desenvolvimento puberal.</li>
<li>Pedir a ultrassonografia pélvica antes do cariótipo quando a puberdade está completa.</li>
<li>Reconhecer as causas anatômicas: agenesia mülleriana, septo e hímen imperfurado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Amenorreia primária</dt>
<dd>Ausência de menarca aos 15 anos com caracteres sexuais presentes, ou aos 13 sem eles.</dd>
<dt>Caracteres sexuais secundários</dt>
<dd>Mamas indicam estrogênio (ovário funcionante); pelos indicam andrógenos (adrenal e ovário).</dd>
<dt>Síndrome de Mayer-Rokitansky-Küster-Hauser</dt>
<dd>Agenesia de útero e dois terços superiores da vagina, com ovários e cariótipo 46,XX normais.</dd>
<dt>Insensibilidade androgênica</dt>
<dd>46,XY com testículos e ausência de útero; mamas presentes, pelos escassos.</dd>
</dl>
<h4>O essencial</h4>
<p>A amenorreia primária se investiga a partir de duas perguntas: <strong>a puberdade aconteceu?</strong> e <strong>há útero?</strong> Uma adolescente de 16 anos com <strong>mamas e pelos em Tanner IV a V</strong> tem estrogênio e andrógenos circulando: o eixo hipotálamo-hipófise-ovário funciona e as gônadas produzem hormônio. Nessa situação, a causa mais provável não está no eixo, mas na <strong>anatomia do trato de saída</strong>: agenesia mülleriana, septo vaginal transverso ou hímen imperfurado (esses dois com dor cíclica e hematocolpo), ou, mais raramente, insensibilidade androgênica com útero ausente. O exame genital orienta, e a <strong>ultrassonografia pélvica</strong> (e abdominal, para os rins, frequentemente malformados na agenesia mülleriana) é o exame de escolha para dizer se há útero e vagina, e como estão os ovários.</p>
<p>Se a ultrassonografia mostra <strong>útero e vagina normais</strong>, a investigação segue como a da amenorreia secundária: beta-hCG, TSH, prolactina, FSH e estradiol, com teste de progesterona. Se <strong>não há útero</strong>, o <strong>cariótipo</strong> separa a agenesia mülleriana (46,XX, testosterona feminina) da insensibilidade androgênica (46,XY, testosterona masculina), o que muda a conduta (gonadectomia após a puberdade na insensibilidade). Pedir o cariótipo antes da imagem, em quem tem puberdade completa, inverte a lógica: ele é a segunda etapa, e só quando falta útero ou quando o FSH é alto.</p>
<p>Quando a puberdade <strong>não aconteceu</strong> (sem mamas aos 13), o caminho é outro: FSH alto indica falência ovariana (Turner e outras disgenesias, com cariótipo obrigatório), FSH baixo indica hipogonadismo hipogonadotrófico (atraso constitucional, anorexia, Kallmann, tumores). A história de menopausa precoce materna sugere insuficiência ovariana familiar, mas em quem tem mamas desenvolvidas ela não é a primeira hipótese; o FSH será pedido na sequência.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dezesseis anos, mamas e pelos completos, nunca menstruou: examine a genitália e peça a ultrassonografia pélvica e de rins na mesma consulta. O cariótipo entra se não houver útero; os hormônios, se houver. Começar pelo cariótipo custa semanas e não responde à pergunta que importa agora.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Puberdade completa com amenorreia primária: eixo funciona; a suspeita é anatômica.</li>
<li>Primeiro exame: ultrassonografia pélvica e abdominal (útero, vagina, ovários, rins).</li>
<li>Útero normal: hCG, TSH, prolactina, FSH, estradiol; sem útero: cariótipo (MRKH versus insensibilidade androgênica).</li>
<li>Sem puberdade: FSH alto (falência ovariana, cariótipo) ou baixo (hipogonadismo hipogonadotrófico).</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro exame na amenorreia primária com Tanner IV? <details><summary>Resposta</summary>Ultrassonografia pélvica e abdominal, para avaliar útero, vagina, ovários e rins.</details></li>
<li>Quando o cariótipo entra na investigação? <details><summary>Resposta</summary>Quando não há útero na imagem ou quando o FSH está elevado, indicando falência gonadal.</details></li>
</ol>
`,
"einstein2026#50": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o esquema de ácido acetilsalicílico e heparina na síndrome antifosfolípide gestacional.</li>
<li>Manejar a heparina no periparto e na analgesia neuroaxial.</li>
<li>Reconhecer a trombocitopenia induzida pela heparina e suspender a heparina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome antifosfolípide</dt>
<dd>Trombose ou morbidade obstétrica com anticoagulante lúpico, anticardiolipina ou anti-beta2-glicoproteína persistentes em 12 semanas.</dd>
<dt>SAF obstétrica</dt>
<dd>Três ou mais abortos precoces, uma perda fetal após 10 semanas, ou prematuridade por pré-eclâmpsia grave ou insuficiência placentária.</dd>
<dt>Trombocitopenia induzida pela heparina (HIT)</dt>
<dd>Reação imune à heparina com queda das plaquetas e trombose; exige suspensão imediata e anticoagulante alternativo.</dd>
<dt>Heparina de baixo peso molecular</dt>
<dd>Enoxaparina profilática ou terapêutica; suspensa 12 ou 24 horas antes do bloqueio neuroaxial.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome antifosfolípide causa trombose placentária e inflamação, e o tratamento na gestação combina <strong>ácido acetilsalicílico em baixa dose</strong> (iniciado antes da concepção ou ao confirmar a gravidez) com <strong>heparina</strong>: em dose <strong>profilática</strong> (enoxaparina 40 mg ao dia) na SAF obstétrica sem trombose prévia, e em dose <strong>terapêutica</strong> (1 mg/kg de 12 em 12 horas) em quem já teve trombose, mantida por toda a gestação e por 6 semanas no puerpério. A varfarina é contraindicada no primeiro trimestre (embriopatia) e os anticoagulantes orais diretos não são usados na SAF nem na gestação.</p>
<p>No <strong>periparto</strong>, a heparina profilática é suspensa <strong>12 horas</strong> antes do bloqueio neuroaxial e a terapêutica, <strong>24 horas</strong>, para permitir a analgesia de parto e a raquianestesia sem hematoma espinhal; retoma-se 4 a 12 horas após a punção ou a retirada do cateter. A gestante com SAF tem pré-natal de alto risco, com Doppler das uterinas e umbilical, vigilância de pré-eclâmpsia e crescimento fetal, e parto programado conforme a evolução.</p>
<p>A <strong>trombocitopenia induzida pela heparina</strong> é rara com a heparina de baixo peso, mas grave: queda das plaquetas de 50% ou mais entre o 5º e o 14º dia, com ou sem trombose nova. Diante do diagnóstico (escore 4T e anticorpos anti-PF4), a <strong>heparina deve ser suspensa de imediato</strong>, em qualquer forma, e substituída por um anticoagulante não heparínico compatível com a gestação, como o fondaparinux (ou argatrobana, com menos dados); a transfusão de plaquetas é evitada, e a varfarina não se inicia enquanto as plaquetas estão baixas. Manter ou reduzir a dose da heparina na HIT é o erro que leva à trombose.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante com SAF em enoxaparina cujas plaquetas caíram pela metade no 8º dia: suspenda a heparina hoje, peça o anti-PF4, e troque por fondaparinux; não "espere a confirmação" com a heparina correndo. E anote no cartão a hora da última dose para a anestesia: 12 ou 24 horas antes da agulha.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>SAF na gestação: ácido acetilsalicílico mais heparina, profilática (obstétrica) ou terapêutica (trombose prévia), até 6 semanas pós-parto.</li>
<li>Varfarina proibida no primeiro trimestre; anticoagulantes orais diretos não se usam.</li>
<li>Bloqueio neuroaxial: suspender a profilática 12 horas e a terapêutica 24 horas antes.</li>
<li>HIT: suspender a heparina de imediato e trocar por fondaparinux; sem transfusão de plaquetas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que fazer diante de trombocitopenia induzida pela heparina na gestante com SAF? <details><summary>Resposta</summary>Suspender a heparina de imediato e substituí-la por anticoagulante não heparínico, como o fondaparinux.</details></li>
<li>Quanto tempo antes da analgesia de parto se suspende a enoxaparina? <details><summary>Resposta</summary>12 horas para a dose profilática e 24 horas para a dose terapêutica.</details></li>
</ol>
`,
"einstein2026#51": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a centralização hemodinâmica fetal pela relação cérebro-placentária.</li>
<li>Interpretar a sequência de alterações do Doppler na restrição de crescimento.</li>
<li>Definir o momento do parto conforme a gravidade e a idade gestacional.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Restrição do crescimento fetal</dt>
<dd>Peso estimado abaixo do percentil 3, ou abaixo do 10 com Doppler alterado; precoce antes de 32 semanas, tardia depois.</dd>
<dt>Relação cérebro-placentária</dt>
<dd>Índice de pulsatilidade da cerebral média dividido pelo da umbilical; abaixo de 1 (ou do percentil 5) indica centralização.</dd>
<dt>Centralização</dt>
<dd>Redistribuição do fluxo para cérebro, coração e adrenais em resposta à hipóxia: vasodilatação cerebral e resistência umbilical alta.</dd>
<dt>Diástole zero e reversa</dt>
<dd>Ausência ou inversão do fluxo diastólico na artéria umbilical: insuficiência placentária grave.</dd>
</dl>
<h4>O essencial</h4>
<p>Quando a placenta falha, o feto se adapta. A resistência na <strong>artéria umbilical</strong> sobe (índice de pulsatilidade acima do percentil 95, depois <strong>diástole zero</strong> e <strong>reversa</strong>), e o feto responde com <strong>vasodilatação cerebral</strong> para proteger o cérebro: o índice da <strong>artéria cerebral média</strong> cai. A <strong>relação cérebro-placentária</strong> (cerebral média dividida pela umbilical) capta os dois movimentos e, quando cai abaixo de 1 ou do percentil 5, demonstra a <strong>centralização hemodinâmica</strong>, muitas vezes antes que cada vaso isolado cruze seu limite. É o sinal de hipóxia compensada, e na restrição tardia pode ser a única alteração.</p>
<p>A sequência de deterioração na restrição <strong>precoce</strong> segue: umbilical alterada, cerebral média com centralização, diástole zero, diástole reversa, <strong>ducto venoso</strong> com onda a ausente ou reversa (descompensação cardíaca e acidemia), veia umbilical pulsátil, e por fim alterações da cardiotocografia (variabilidade reduzida, desacelerações tardias) e do perfil biofísico. A vigilância é semanal ou mais frequente conforme o estágio, com corticoide entre 24 e 34 semanas e sulfato de magnésio antes de 32.</p>
<p>O <strong>momento do parto</strong> equilibra o risco de morte intraútero com o da prematuridade: umbilical alterada com diástole presente, parto em torno de <strong>37 semanas</strong>; centralização isolada na restrição tardia, 37 a 38; <strong>diástole zero</strong>, <strong>34 semanas</strong>; <strong>diástole reversa</strong>, <strong>32 semanas</strong>; <strong>ducto venoso alterado</strong> ou cardiotocografia anormal, parto a partir de <strong>26 a 28 semanas</strong> após corticoide, ou antes com a família. A via é obstétrica quando o Doppler permite; com diástole zero ou reversa e ducto alterado, a cesárea é a regra, porque o feto não tolera o trabalho de parto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Feto pequeno com umbilical "normal" e cerebral média baixa tem relação cérebro-placentária abaixo de 1: já está centralizado, e a vigilância aperta mesmo sem diástole zero. Não espere a umbilical inverter para acreditar na hipóxia; a relação vê antes.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Centralização: cerebral média dilatada e umbilical resistente; relação cérebro-placentária abaixo de 1 ou do percentil 5.</li>
<li>Sequência: umbilical, centralização, diástole zero, reversa, ducto venoso, veia umbilical, cardiotocografia.</li>
<li>Parto: 37 semanas com umbilical alterada; 34 com diástole zero; 32 com reversa; 26 a 28 com ducto alterado.</li>
<li>Corticoide de 24 a 34 semanas; magnésio antes de 32; cesárea quando o Doppler é grave.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como o Doppler demonstra a centralização fetal? <details><summary>Resposta</summary>Pela redução da relação cérebro-placentária: índice da cerebral média baixo dividido pelo da umbilical elevado.</details></li>
<li>Com que idade gestacional se indica o parto na diástole reversa da umbilical? <details><summary>Resposta</summary>Por volta de 32 semanas, após corticoide, em geral por cesárea.</details></li>
</ol>
`,
"einstein2026#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a bradicardia fetal prolongada no período expulsivo.</li>
<li>Escolher entre parto instrumental e cesárea pela altura da apresentação e pela dilatação.</li>
<li>Conhecer os pré-requisitos do fórcipe e do vácuo-extrator.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Desaceleração prolongada</dt>
<dd>Queda da frequência cardíaca fetal por 2 a 10 minutos; acima de 10 é bradicardia; exige ação imediata.</dd>
<dt>Ressuscitação intrauterina</dt>
<dd>Decúbito lateral, suspender ocitocina, oxigênio, corrigir hipotensão, toque para afastar prolapso de cordão.</dd>
<dt>Pré-requisitos do instrumental</dt>
<dd>Dilatação total, membranas rotas, cabeça insinuada (plano zero ou abaixo), variedade conhecida, pelve adequada, bexiga vazia, analgesia.</dd>
<dt>Fórcipe de alívio e baixo</dt>
<dd>Cabeça no assoalho pélvico ou em +2 e abaixo: extração rápida e segura; o médio é evitado.</dd>
</dl>
<h4>O essencial</h4>
<p>Uma <strong>desaceleração prolongada</strong> de 6 minutos no expulsivo é uma emergência: as causas comuns são hipotensão materna após o bloqueio, hiperestimulação uterina, compressão de cordão e, no expulsivo, a compressão da cabeça. A <strong>ressuscitação intrauterina</strong> é feita de imediato: decúbito lateral, suspender a ocitocina, oxigênio, volume e vasopressor se hipotensão, toque vaginal para afastar prolapso de cordão e avaliar a apresentação. Se a frequência não se recupera em poucos minutos, o feto precisa nascer pela via <strong>mais rápida e segura</strong>.</p>
<p>A decisão depende do toque: com <strong>dilatação total</strong>, <strong>cabeça baixa</strong> (plano +2 de De Lee ou abaixo, ou no assoalho), membranas rotas, variedade de posição conhecida e pelve compatível, o <strong>parto vaginal instrumental</strong> com <strong>fórcipe ou vácuo-extrator</strong> é a escolha: leva minutos, enquanto a cesárea, mesmo de emergência, exige transporte, preparo e uma cabeça profundamente encaixada que é difícil de desprender, com mais lesão materna. A analgesia já estabelecida facilita. Se a cabeça está alta ou a dilatação é incompleta, a cesárea é a via. Uma gestante analgesiada, com dilatação total, cabeça em +3 e occípito-anterior, em bradicardia refratária, é o caso clássico do instrumental imediato.</p>
<p>O <strong>fórcipe</strong> (Simpson, Kielland para rotação) e o <strong>vácuo</strong> têm eficácia semelhante; o vácuo tem menos lesão materna e mais cefalo-hematoma e hemorragia subgaleal, e não é usado abaixo de 34 semanas; o fórcipe exige mais treino e causa mais lacerações. A regra é uma tentativa com um instrumento, sem trocar de um para o outro, e desistir se não houver progresso em três trações; o neonatologista deve estar presente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Bradicardia que não volta com a paciente de lado e a ocitocina desligada, com cabeça em +3 e dilatação total: o fórcipe ou o vácuo está a três trações do nascimento; a cesárea está a vinte minutos. Escolha o que chega antes ao bebê.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Desaceleração prolongada: ressuscitação intrauterina imediata e toque para afastar prolapso.</li>
<li>Refratária com dilatação total e cabeça baixa: parto instrumental imediato; cabeça alta: cesárea.</li>
<li>Pré-requisitos: dilatação total, membranas rotas, cabeça em +2 ou abaixo, variedade conhecida, pelve, bexiga vazia.</li>
<li>Um instrumento, três trações, neonatologia presente; vácuo não antes de 34 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o instrumental é preferido à cesárea na bradicardia com cabeça baixa? <details><summary>Resposta</summary>Porque é mais rápido e a cesárea com cabeça profundamente encaixada é difícil e mais lesiva para a mãe.</details></li>
<li>Quais são os pré-requisitos do parto instrumental? <details><summary>Resposta</summary>Dilatação total, membranas rotas, cabeça insinuada (+2 ou abaixo), variedade conhecida, pelve adequada, bexiga vazia e analgesia.</details></li>
</ol>
`,
"einstein2026#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Selecionar a candidata ao metotrexato na gravidez ectópica íntegra.</li>
<li>Aplicar a regra dos 15% entre o 4º e o 7º dia.</li>
<li>Saber quando repetir a dose e quando operar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios para metotrexato</dt>
<dd>Estabilidade, ectópica íntegra, massa até 3,5 a 4 cm, sem batimentos, hCG até 5.000 mUI/mL, sem contraindicações, com seguimento garantido.</dd>
<dt>Dose única</dt>
<dd>Metotrexato 50 mg/m² intramuscular, com hCG nos dias 4 e 7.</dd>
<dt>Regra dos 15%</dt>
<dd>Queda do hCG de 15% ou mais do dia 4 ao dia 7 indica sucesso; menor, segunda dose.</dd>
<dt>Sinais de falha</dt>
<dd>Dor intensa, instabilidade, líquido livre, rotura: cirurgia, mesmo em tratamento.</dd>
</dl>
<h4>O essencial</h4>
<p>A gravidez ectópica <strong>íntegra</strong>, em paciente <strong>estável</strong>, com <strong>massa anexial até 3,5 a 4 cm</strong>, <strong>sem batimentos</strong> embrionários, <strong>hCG até 5.000 mUI/mL</strong> (melhor resposta abaixo de 2.000), sem líquido livre significativo, sem contraindicação (hepatopatia, nefropatia, discrasia, imunodeficiência, amamentação, gestação intrauterina) e com seguimento garantido, é candidata ao <strong>metotrexato</strong>, que interrompe a proliferação do trofoblasto e evita a cirurgia. Uma mulher de 28 anos, com 6 semanas, dor leve, massa de 2,5 cm sem líquido livre e hCG baixo, preenche os critérios.</p>
<p>O protocolo de <strong>dose única</strong> é o mais usado: 50 mg/m² intramuscular no dia 1, com hCG nos dias <strong>4 e 7</strong>. O hCG pode subir do dia 1 ao 4 (o trofoblasto ainda morre), e o que importa é a comparação do dia 4 com o dia 7: <strong>queda de 15% ou mais</strong> indica sucesso, e o hCG é seguido semanalmente até negativar; <strong>queda menor que 15%</strong>, estabilidade ou elevação indica que a primeira dose não bastou, e a conduta é <strong>repetir o metotrexato</strong> (segunda dose no dia 7, com novo hCG nos dias 11 e 14), desde que a paciente continue estável e a ectópica íntegra. Cerca de 15 a 20% precisam da segunda dose, e a taxa de sucesso final passa de 85 a 90%. A cirurgia entra na falha após duas doses ou a qualquer momento se houver <strong>rotura</strong>, dor intensa, instabilidade ou líquido livre em quantidade.</p>
<p>Durante o tratamento: evitar relações, exercício intenso e álcool, suspender ácido fólico e anti-inflamatórios (interação), esperar 3 meses para nova gestação, e imunoglobulina anti-D se Rh negativo. A dor leve nos primeiros dias (dor de separação) é esperada e se diferencia da rotura pela estabilidade e pela ultrassonografia. A conduta expectante é opção com hCG abaixo de 1.000 e em queda espontânea.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>hCG do dia 7 caiu só 8% em relação ao dia 4, paciente com dor leve e sem líquido livre: segunda dose de metotrexato hoje, e hCG de novo nos dias 11 e 14. Se a dor virasse intensa ou a pressão caísse, o laboratório deixaria de importar e a laparoscopia seria a resposta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Metotrexato: íntegra, estável, até 3,5 a 4 cm, sem batimentos, hCG até 5.000, sem contraindicações.</li>
<li>Dose única de 50 mg/m² com hCG nos dias 4 e 7; queda de 15% ou mais entre eles é sucesso.</li>
<li>Queda menor que 15%: repetir a dose; falha após duas doses ou rotura: cirurgia.</li>
<li>Seguir o hCG até negativar; anti-D se Rh negativo; nova gestação após 3 meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se avalia a resposta ao metotrexato em dose única? <details><summary>Resposta</summary>Pela queda do hCG de 15% ou mais entre o dia 4 e o dia 7.</details></li>
<li>O que fazer se a queda for menor que 15% e a paciente estiver estável? <details><summary>Resposta</summary>Repetir a dose de metotrexato e dosar o hCG nos dias 11 e 14.</details></li>
</ol>
`,
"einstein2026#57": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a enxaqueca com aura como contraindicação absoluta ao estrogênio (categoria 4).</li>
<li>Escolher métodos só de progestagênio ou o DIU para essa paciente.</li>
<li>Aplicar os critérios de elegibilidade da OMS na consulta de anticoncepção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Enxaqueca com aura</dt>
<dd>Sintomas neurológicos focais transitórios antes da cefaleia; dobra o risco de AVC isquêmico, que o estrogênio multiplica.</dd>
<dt>Categoria 4 da OMS</dt>
<dd>Condição em que o método representa risco inaceitável: combinados na enxaqueca com aura, em qualquer idade.</dd>
<dt>DIU de levonorgestrel</dt>
<dd>Método de longa duração, sem estrogênio, categoria 1 na enxaqueca; reduz o fluxo e a dismenorreia.</dd>
<dt>Métodos só de progestagênio</dt>
<dd>Implante, injetável trimestral, pílula de desogestrel, DIU hormonal: categoria 1 ou 2 na enxaqueca com aura.</dd>
</dl>
<h4>O essencial</h4>
<p>A enxaqueca com aura é um fator de risco independente para <strong>AVC isquêmico</strong> em mulheres jovens, e o <strong>etinilestradiol</strong> dos contraceptivos combinados multiplica esse risco por efeito pró-trombótico e vascular. Por isso os critérios de elegibilidade da OMS e do CDC classificam os <strong>combinados</strong> (pílula, anel, adesivo, injetável mensal) como <strong>categoria 4</strong> na enxaqueca com aura, em qualquer idade: risco inaceitável. A enxaqueca sem aura é categoria 2 abaixo de 35 anos e 3 acima, e o aparecimento de aura durante o uso de combinado obriga a suspendê-lo.</p>
<p>A saída é um método <strong>sem estrogênio</strong>. Os <strong>só de progestagênio</strong> são categoria 1 ou 2: <strong>DIU de levonorgestrel</strong> (categoria 1), <strong>implante de etonogestrel</strong>, <strong>injetável trimestral</strong> e <strong>pílula de desogestrel</strong>, todos com eficácia alta e sem aumento do risco de AVC; o <strong>DIU de cobre</strong> é categoria 1 e não tem hormônio, mas não regulariza os ciclos e pode aumentar o fluxo. Para uma nulípara de 25 anos com ciclos irregulares, o DIU de levonorgestrel é uma escolha excelente: reversível, de longa duração (5 a 8 anos), reduz o sangramento e a dismenorreia, e a nuliparidade não é contraindicação (categoria 2); o implante é a opção equivalente em quem prefere não inserir o DIU.</p>
<p>A consulta de anticoncepção segue os critérios da OMS para toda condição clínica: hipertensão, tabagismo acima de 35 anos, trombose prévia, lúpus com anticorpos, doença hepática, câncer de mama, puerpério e amamentação, cada uma com sua categoria por método. O raciocínio é o mesmo: categoria 4 fecha a porta do estrogênio, e quase sempre há um progestagênio isolado ou um DIU de categoria 1 ou 2 esperando.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>"Enxaqueca com aura" na anamnese apaga a pílula combinada da receita, mesmo na jovem sem outro fator: o risco é de AVC, não de dor de cabeça. Ofereça o DIU de levonorgestrel ou o implante na mesma consulta; ela sai com um método melhor do que o que veio pedir.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Enxaqueca com aura: combinados são categoria 4 (AVC isquêmico); sem aura: 2 abaixo de 35 anos, 3 acima.</li>
<li>Métodos sem estrogênio: DIU de levonorgestrel (1), implante, injetável trimestral, desogestrel (1 ou 2), DIU de cobre (1).</li>
<li>Nulípara pode usar DIU (categoria 2); o hormonal reduz fluxo e dismenorreia.</li>
<li>Aura que surge durante o combinado: suspender e trocar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a categoria da OMS para contraceptivo combinado na enxaqueca com aura? <details><summary>Resposta</summary>Categoria 4: risco inaceitável, pelo AVC isquêmico.</details></li>
<li>Que método de longa duração é ideal para a nulípara com enxaqueca com aura e ciclos irregulares? <details><summary>Resposta</summary>O DIU de levonorgestrel, sem estrogênio, que ainda reduz o fluxo e a dismenorreia; o implante é a opção equivalente.</details></li>
</ol>
`,
"einstein2026#58": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que o morcelamento do útero é controverso: o sarcoma indistinguível do mioma.</li>
<li>Conhecer o morcelamento protegido em bolsa e o que ele pretende evitar.</li>
<li>Selecionar as pacientes e informar sobre o risco antes da cirurgia minimamente invasiva.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Morcelamento</dt>
<dd>Fragmentação do útero ou do mioma dentro da cavidade para retirá-lo por incisões pequenas na laparoscopia.</dd>
<dt>Leiomiossarcoma oculto</dt>
<dd>Sarcoma diagnosticado só na peça, em cerca de 1 em 350 a 1 em 1.000 cirurgias por mioma presumido; mais comum após os 50 anos.</dd>
<dt>Morcelamento protegido (contido)</dt>
<dd>Fragmentação dentro de uma bolsa de contenção, para não disseminar células pela cavidade.</dd>
<dt>Sinais de suspeita</dt>
<dd>Crescimento rápido ou na pós-menopausa, dor, sangramento anormal, imagem heterogênea com necrose, LDH elevada.</dd>
</dl>
<h4>O essencial</h4>
<p>A histerectomia laparoscópica por miomas exige retirar um útero grande por incisões pequenas, e a solução é o <strong>morcelamento</strong>: fragmentar a peça dentro do abdome. O problema é que o <strong>leiomiossarcoma</strong> é clínica e radiologicamente indistinguível do mioma na maioria dos casos, e a biópsia pré-operatória não é factível; quando um sarcoma oculto é morcelado sem proteção, as células se espalham pela cavidade, o estadiamento sobe e a sobrevida cai de forma expressiva. Foi por isso que a FDA, em 2014, alertou contra o morcelador elétrico e, em 2020, restringiu seu uso a procedimentos com sistema de contenção, em pacientes selecionadas e informadas.</p>
<p>O <strong>morcelamento protegido</strong>, ou contido, é a resposta técnica: a peça é colocada em uma <strong>bolsa</strong> de contenção insuflada dentro da cavidade, e a fragmentação (com bisturi, sob visão, ou com morcelador elétrico dentro da bolsa) acontece sem contato com o peritônio. O objetivo é evitar a <strong>disseminação de um sarcoma oculto</strong>, e também a de células de mioma benigno, que podem implantar-se e formar leiomiomatose peritoneal.</p>
<p>A seleção exclui o morcelamento em quem tem <strong>suspeita de malignidade</strong>: pós-menopausa com mioma que cresce, sangramento anormal sem outra explicação, dor, imagem com necrose e vascularização atípica, LDH alta, uso de tamoxifeno, história de irradiação pélvica ou de retinoblastoma. Uma mulher de 50 anos com sangramento volumoso e miomas, com rastreamentos normais, pode ser candidata à histerectomia laparoscópica com morcelamento contido, desde que informada por escrito de que existe risco pequeno de sarcoma oculto e de que a contenção reduz, mas não elimina, a disseminação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de morcelar, pergunte três coisas: ela está na pós-menopausa? o mioma cresceu depressa? a imagem é heterogênea com necrose? Qualquer sim manda retirar o útero inteiro. E o consentimento precisa ter a palavra "sarcoma", ainda que a probabilidade seja de uma em centenas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sarcoma oculto é indistinguível do mioma; o morcelamento livre o dissemina e piora a sobrevida.</li>
<li>Morcelamento protegido em bolsa evita a disseminação de sarcoma e de mioma benigno.</li>
<li>Excluir suspeita: pós-menopausa, crescimento rápido, dor, imagem atípica, LDH, tamoxifeno, irradiação.</li>
<li>Consentimento informado com o risco de sarcoma; retirada inteira por via vaginal ou minilaparotomia quando indicado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a principal preocupação que justifica o morcelamento contido? <details><summary>Resposta</summary>A disseminação de um sarcoma uterino oculto, indistinguível do mioma antes da cirurgia.</details></li>
<li>Que achados contraindicam o morcelamento? <details><summary>Resposta</summary>Pós-menopausa com crescimento, sangramento anormal, dor, imagem heterogênea com necrose, LDH elevada, tamoxifeno ou irradiação prévia.</details></li>
</ol>
`,
"einstein2025#48": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as malformações associadas ao diabetes pré-gestacional descompensado.</li>
<li>Explicar por que o controle glicêmico antes da concepção é o que previne.</li>
<li>Planejar a consulta pré-concepcional da diabética: glicada, ácido fólico, medicações, exames.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Embriopatia diabética</dt>
<dd>Malformações pela hiperglicemia nas primeiras 7 a 8 semanas, antes do primeiro pré-natal; risco proporcional à glicada.</dd>
<dt>Síndrome da regressão caudal</dt>
<dd>Agenesia sacral e de membros inferiores; rara, mas 200 vezes mais frequente em filhos de mãe diabética.</dd>
<dt>Cardiopatias</dt>
<dd>Defeitos de septo interventricular, transposição, coarctação: as malformações mais comuns da embriopatia.</dd>
<dt>Meta pré-concepcional</dt>
<dd>Hemoglobina glicada abaixo de 6,5% (idealmente abaixo de 6) antes de suspender a contracepção.</dd>
</dl>
<h4>O essencial</h4>
<p>A hiperglicemia no período da <strong>organogênese</strong>, entre a 3ª e a 8ª semana, quando a mulher muitas vezes ainda não sabe que está grávida, é teratogênica: o risco de malformações maiores no diabetes pré-gestacional mal controlado é 2 a 4 vezes o da população, e sobe de forma linear com a hemoglobina glicada (acima de 10%, chega a 20%). As mais frequentes são as <strong>cardiopatias</strong> (<strong>defeito de septo interventricular</strong>, transposição das grandes artérias, coarctação, hipertrofia septal), os <strong>defeitos do tubo neural</strong> (anencefalia, espinha bífida) e as malformações renais e gastrointestinais; a mais característica, embora rara, é a <strong>síndrome da regressão caudal</strong> (agenesia sacral, hipoplasia dos membros inferiores).</p>
<p>A prevenção é a <strong>consulta pré-concepcional</strong>: <strong>hemoglobina glicada abaixo de 6,5%</strong> antes de suspender a contracepção, com ajuste do tratamento (a metformina pode ser mantida, mas a insulina é o padrão na gestação e é introduzida quando as metas não são atingidas), <strong>ácido fólico</strong> em dose alta (4 a 5 mg ao dia) desde 3 meses antes, suspensão de estatina e de inibidores da ECA e antagonistas da angiotensina (teratogênicos), controle da pressão, avaliação de <strong>retinopatia</strong> (que pode piorar na gestação), <strong>nefropatia</strong> (albuminúria, creatinina) e função tireoidiana.</p>
<p>Na gestação, o rastreamento das malformações inclui o morfológico de primeiro trimestre, o de segundo trimestre e a <strong>ecocardiografia fetal</strong> entre 24 e 28 semanas, com vigilância de crescimento, pré-eclâmpsia, polidrâmnio e óbito fetal, e parto programado conforme o controle.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A pergunta que muda o desfecho é feita antes da gravidez: "qual é a sua glicada?". Se estiver em 8, a resposta é adiar a concepção, ajustar a insulina, começar o ácido fólico de 5 mg e tirar o enalapril; engravidar agora é aceitar um risco de cardiopatia e regressão caudal que o pré-natal, por melhor que seja, já não previne.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hiperglicemia na organogênese (3ª a 8ª semana) causa malformações; risco cresce com a glicada.</li>
<li>Mais comuns: defeitos de septo interventricular e outras cardiopatias, tubo neural; característica: regressão caudal.</li>
<li>Pré-concepção: glicada abaixo de 6,5%, ácido fólico 4 a 5 mg, suspender estatina e inibidores da ECA, avaliar retina e rim.</li>
<li>Na gestação: morfológicos e ecocardiografia fetal de 24 a 28 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais malformações são associadas ao diabetes pré-gestacional descompensado? <details><summary>Resposta</summary>Cardiopatias como o defeito de septo interventricular, defeitos do tubo neural e, de forma característica, a síndrome da regressão caudal.</details></li>
<li>Por que o controle deve ser alcançado antes da concepção? <details><summary>Resposta</summary>Porque a organogênese ocorre entre a 3ª e a 8ª semana, antes do primeiro pré-natal, e a teratogenia é proporcional à glicada nesse período.</details></li>
</ol>
`,
"einstein2025#49": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a pré-eclâmpsia com sinais de gravidade pela pressão e pelos sintomas.</li>
<li>Executar o tripé: anti-hipertensivo de crise, sulfato de magnésio e interrupção da gestação.</li>
<li>Escolher a via de parto pela condição obstétrica, não pela pré-eclâmpsia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinais de gravidade</dt>
<dd>Pressão de 160/110 ou mais, cefaleia ou alterações visuais, dor epigástrica, plaquetas abaixo de 100.000, transaminases dobradas, creatinina acima de 1,1, edema pulmonar, HELLP.</dd>
<dt>Anti-hipertensivo de crise</dt>
<dd>Hidralazina intravenosa, nifedipino oral de ação rápida ou labetalol; meta de 140 a 150 por 90 a 100 mmHg.</dd>
<dt>Sulfato de magnésio</dt>
<dd>Ataque de 4 g intravenoso e manutenção de 1 a 2 g por hora (esquema de Zuspan) ou Pritchard; previne a eclâmpsia.</dd>
<dt>Interrupção após 34 semanas</dt>
<dd>Na pré-eclâmpsia grave, o parto é indicado a partir de 34 semanas, após estabilização, por indução quando as condições permitem.</dd>
</dl>
<h4>O essencial</h4>
<p>Pressão de 173 por 121 mmHg confirmada, com <strong>dor epigástrica</strong> e náuseas, às 35 semanas, é <strong>pré-eclâmpsia com sinais de gravidade</strong>, com a dor epigástrica anunciando a distensão hepática que precede a síndrome HELLP. A conduta é <strong>internação</strong> imediata e a <strong>rotina hipertensiva</strong> (hemograma com plaquetas, transaminases, LDH, bilirrubinas, creatinina, ácido úrico, relação proteína/creatinina), com vigilância fetal.</p>
<p>O tratamento tem três pernas. A <strong>crise hipertensiva</strong> (160/110 ou mais) é tratada em minutos com <strong>hidralazina</strong> intravenosa (5 mg a cada 20 minutos), nifedipino oral de ação rápida ou labetalol, com meta de 140 a 150 por 90 a 100, sem derrubar demais para não hipoperfundir a placenta. O <strong>sulfato de magnésio</strong> é iniciado para <strong>prevenir a eclâmpsia</strong> em toda pré-eclâmpsia grave, com dose de ataque e manutenção por 24 horas após o parto, e vigilância de reflexos, diurese e frequência respiratória, com gluconato de cálcio como antídoto. A <strong>interrupção da gestação</strong> é o único tratamento definitivo: na pré-eclâmpsia grave a partir de <strong>34 semanas</strong>, o parto é indicado <strong>após a estabilização</strong> materna, sem esperar corticoide, que só se justifica abaixo de 34 semanas; antes de 34 semanas, a conduta expectante em centro terciário é possível em casos selecionados.</p>
<p>A <strong>via de parto</strong> é obstétrica: a pré-eclâmpsia, mesmo grave, não é indicação de cesárea, e a <strong>indução</strong> com misoprostol ou ocitocina é adequada quando o colo e a vitalidade fetal permitem, com analgesia de parto que ajuda a controlar a pressão; a cesárea fica para as indicações habituais, para a deterioração materna ou fetal rápida e para o colo desfavorável muito longe do termo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor epigástrica em hipertensa de 35 semanas não é gastrite: é fígado sob pressão. Hidralazina agora, sulfato correndo, exames de HELLP colhidos e o parto programado assim que a pressão estiver controlada, por indução se o colo deixar. A cesárea "para resolver logo" não é a resposta automática.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pressão de 160/110 ou mais com dor epigástrica: pré-eclâmpsia grave; internar e colher rotina hipertensiva.</li>
<li>Tripé: hidralazina (ou nifedipino, labetalol), sulfato de magnésio, interrupção da gestação.</li>
<li>A partir de 34 semanas, parto após estabilização, sem corticoide.</li>
<li>Via obstétrica: indução quando possível; cesárea pelas indicações habituais.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as três medidas da pré-eclâmpsia grave às 35 semanas? <details><summary>Resposta</summary>Anti-hipertensivo de crise (hidralazina), sulfato de magnésio e interrupção da gestação após a estabilização.</details></li>
<li>A pré-eclâmpsia grave indica cesárea? <details><summary>Resposta</summary>Não; a via é obstétrica, com indução quando colo e vitalidade fetal permitem.</details></li>
</ol>
`,
"einstein2025#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar a gestante Rh negativo não sensibilizada (profilaxia) da aloimunizada (seguimento da doença).</li>
<li>Conduzir o Coombs indireto positivo: identificar o anticorpo e titular.</li>
<li>Vigiar a anemia fetal pelo Doppler da cerebral média e indicar a transfusão intrauterina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Coombs indireto</dt>
<dd>Pesquisa de anticorpos irregulares no soro materno; positivo exige identificação e titulação.</dd>
<dt>Título crítico</dt>
<dd>Anti-D em 1:16 (ou 1:8 conforme o serviço): a partir dele, vigilância fetal por Doppler.</dd>
<dt>Pico de velocidade sistólica da cerebral média</dt>
<dd>Acima de 1,5 múltiplos da mediana prediz anemia fetal moderada a grave sem procedimento invasivo.</dd>
<dt>Imunoglobulina anti-D</dt>
<dd>Profilaxia da não sensibilizada às 28 semanas, em até 72 horas após o parto de bebê Rh positivo e em eventos sensibilizantes; inútil na aloimunizada.</dd>
</dl>
<h4>O essencial</h4>
<p>A gestante Rh negativo tem dois caminhos, e o <strong>Coombs indireto</strong> decide qual. <strong>Negativo</strong>: ela não está sensibilizada, e o pré-natal é de <strong>profilaxia</strong>: Coombs repetido (às 28 semanas, e mensal a partir daí em alguns protocolos), <strong>imunoglobulina anti-D</strong> às 28 semanas, após eventos sensibilizantes (sangramento, procedimentos invasivos, trauma, ectópica, abortamento) e em até 72 horas após o parto de recém-nascido Rh positivo. <strong>Positivo</strong>: ela está <strong>aloimunizada</strong>, a imunoglobulina já não tem papel, e o pré-natal passa a ser de <strong>vigilância da doença hemolítica fetal</strong>.</p>
<p>O primeiro passo diante do Coombs positivo é a <strong>pesquisa de anticorpos irregulares com identificação e titulação</strong>: nem todo anticorpo causa doença (anti-Lewis, por exemplo, não), e o anti-D, o anti-c, o anti-Kell e outros têm comportamentos diferentes (o anti-Kell causa anemia com títulos baixos, por supressão da eritropoese). O <strong>título</strong> é repetido a cada 2 a 4 semanas; abaixo do crítico (em geral 1:16 para o anti-D), a conduta é acompanhar; <strong>a partir do título crítico</strong>, ou em qualquer título no anti-Kell e em quem já teve feto acometido, inicia-se a vigilância fetal.</p>
<p>A vigilância é o <strong>Doppler da artéria cerebral média</strong>: o <strong>pico de velocidade sistólica acima de 1,5 múltiplos da mediana</strong> indica anemia fetal moderada a grave, substituindo a amniocentese para bilirrubina, e leva à <strong>cordocentese com transfusão intrauterina</strong> em centro de medicina fetal, repetida conforme o hematócrito, até o parto programado em torno de 35 a 37 semanas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Coombs indireto positivo na gestante Rh negativo não é indicação de "mais uma anti-D": é indicação de saber qual anticorpo e em que título. Anti-D 1:32 às 24 semanas manda o Doppler da cerebral média para a agenda quinzenal e o telefone da medicina fetal para o cartão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Coombs indireto negativo: profilaxia com anti-D às 28 semanas, em eventos sensibilizantes e até 72 horas pós-parto.</li>
<li>Coombs positivo: aloimunizada; identificar o anticorpo e titular a cada 2 a 4 semanas; anti-D não tem papel.</li>
<li>Título crítico (1:16) ou anti-Kell: Doppler da cerebral média; PVS acima de 1,5 MoM indica anemia.</li>
<li>Anemia: cordocentese com transfusão intrauterina; parto em torno de 35 a 37 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que fazer diante de um Coombs indireto positivo na gestante Rh negativo? <details><summary>Resposta</summary>Pesquisar e identificar o anticorpo irregular e determinar o título, repetindo-o a cada 2 a 4 semanas.</details></li>
<li>Como se rastreia a anemia fetal na aloimunizada com título crítico? <details><summary>Resposta</summary>Pelo pico de velocidade sistólica da artéria cerebral média; acima de 1,5 MoM indica anemia moderada a grave.</details></li>
</ol>
`,
"einstein2025#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a sífilis pelo tempo de evolução e escolher o número de doses de penicilina benzatina.</li>
<li>Definir tratamento adequado da gestante para prevenir a sífilis congênita.</li>
<li>Reconhecer a falha terapêutica pelo título e indicar retratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sífilis recente</dt>
<dd>Primária, secundária ou latente com menos de 1 ano: penicilina benzatina 2,4 milhões UI em dose única.</dd>
<dt>Sífilis tardia ou de duração ignorada</dt>
<dd>Latente com mais de 1 ano ou sem data conhecida: 2,4 milhões UI semanais por 3 semanas (7,2 milhões).</dd>
<dt>Tratamento adequado na gestação</dt>
<dd>Penicilina benzatina no esquema do estágio, iniciada até 30 dias antes do parto, com intervalo entre doses de no máximo 9 dias, e queda dos títulos.</dd>
<dt>Retratamento</dt>
<dd>Aumento do VDRL em duas diluições (4 vezes), ausência de queda de duas diluições em 6 meses na recente ou 12 na tardia, ou sinais clínicos.</dd>
</dl>
<h4>O essencial</h4>
<p>A gestante com sorologias negativas no início do pré-natal que retorna às 28 semanas com teste treponêmico positivo tem <strong>sífilis adquirida na gestação</strong>, portanto <strong>recente</strong> (menos de 1 ano): o tratamento é <strong>penicilina benzatina 2,4 milhões UI</strong> intramuscular em <strong>dose única</strong>, com VDRL para o título basal e tratamento das parcerias. Se o tempo de infecção fosse desconhecido (sem sorologia prévia), a classificação seria de duração ignorada, com <strong>três doses semanais</strong>. Só a penicilina benzatina trata o feto; na alergia, a gestante é dessensibilizada, porque doxiciclina é contraindicada e a ceftriaxona não é considerada tratamento adequado para prevenir a sífilis congênita.</p>
<p>Para que o tratamento materno seja considerado <strong>adequado</strong> e o recém-nascido não seja classificado como sífilis congênita, é preciso: penicilina benzatina no esquema correto para o estágio, <strong>iniciada até 30 dias antes do parto</strong>, com <strong>intervalo entre as doses de no máximo 9 dias</strong> (dose atrasada reinicia o esquema), e <strong>documentação da queda dos títulos</strong>. O seguimento é o VDRL mensal na gestação e trimestral no primeiro ano.</p>
<p>A resposta é lida pelo <strong>título do VDRL</strong>: espera-se queda de duas diluições (por exemplo, de 1:64 para 1:16) em 6 meses na sífilis recente e em 12 na tardia; a persistência de títulos baixos estáveis é a cicatriz sorológica e não exige tratamento. <strong>Aumento do título em duas diluições</strong> (de 1:4 para 1:16) indica <strong>reinfecção ou falha</strong> e manda <strong>retratar</strong>, com investigação de neurossífilis se houver sintomas ou títulos que não caem; ausência de queda no prazo, ou sinais clínicos novos, também retratam.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Teste rápido positivo às 28 semanas com sorologia negativa no primeiro trimestre: penicilina benzatina hoje, uma dose, e VDRL para a linha de base. Se no retorno o título subir de 1:8 para 1:32, ela foi reinfectada ou falhou, e o esquema recomeça; se ficar em 1:2 por meses, é cicatriz, e o bebê está protegido.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Recente (menos de 1 ano, soroconversão na gestação): benzatina 2,4 milhões UI dose única; tardia ou ignorada: 3 doses semanais.</li>
<li>Adequado: esquema do estágio, iniciado até 30 dias antes do parto, intervalo máximo de 9 dias, títulos em queda.</li>
<li>Resposta: queda de duas diluições em 6 (recente) ou 12 meses (tardia).</li>
<li>Retratar: aumento de duas diluições, ausência de queda no prazo ou sinais clínicos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quantas doses de penicilina benzatina recebe a gestante com soroconversão na gestação? <details><summary>Resposta</summary>Uma dose de 2,4 milhões UI, por se tratar de sífilis recente.</details></li>
<li>O que indica retratamento após o tratamento? <details><summary>Resposta</summary>Aumento do VDRL em duas diluições, ausência de queda de duas diluições no prazo esperado ou sinais clínicos novos.</details></li>
</ol>
`,
"einstein2025#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar ameaça de aborto, aborto inevitável, gestação inviável e ectópica no sangramento do primeiro trimestre.</li>
<li>Combinar hCG, ultrassonografia e exame do colo para cada diagnóstico.</li>
<li>Saber a conduta em cada situação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ameaça de aborto</dt>
<dd>Sangramento com colo fechado e gestação intrauterina viável ou ainda não avaliável; conduta expectante.</dd>
<dt>Aborto inevitável</dt>
<dd>Colo aberto com sangramento e cólicas, com ou sem membranas rotas; a gestação vai se perder.</dd>
<dt>Gestação inviável</dt>
<dd>CCN de 7 mm ou mais sem batimentos, saco de 25 mm ou mais sem embrião, ou ausência de evolução em 11 a 14 dias.</dd>
<dt>Gestação de localização indeterminada</dt>
<dd>hCG positivo sem saco no útero nem massa anexial; seguir hCG em 48 horas e repetir a imagem.</dd>
</dl>
<h4>O essencial</h4>
<p>Sangramento com dor às 7 semanas exige três informações: o <strong>colo</strong> (fechado ou aberto), a <strong>ultrassonografia transvaginal</strong> (onde está a gestação e como está) e o <strong>hCG</strong> (valor e evolução). Com <strong>colo fechado</strong> e um <strong>saco gestacional intrauterino</strong> pequeno, de 10 mm, ainda sem embrião, e hCG de 1.200 mUI/mL, compatível com o saco, o diagnóstico é <strong>ameaça de aborto</strong>: a gestação está no útero, é cedo para ver o embrião, e nada prova inviabilidade; a conduta é expectante, com hCG em 48 horas (espera-se aumento de ao menos 50%) e ultrassonografia em 7 a 14 dias, repouso relativo e anti-D se Rh negativo.</p>
<p>Os vizinhos mudam pelos achados. <strong>Colo aberto</strong> com sangramento e cólicas, com o saco no canal ou membranas rotas, é <strong>aborto inevitável</strong> (ou em curso), e a conduta é esvaziar (misoprostol ou aspiração manual) ou aguardar o aborto completo, com antibiótico só se infectado. <strong>Gestação inviável</strong> se define por critérios ultrassonográficos estritos: embrião com <strong>CCN de 7 mm ou mais sem batimentos</strong>, <strong>saco de 25 mm ou mais sem embrião</strong>, ou ausência de embrião com batimentos 2 semanas após um saco sem vesícula (11 dias após saco com vesícula); abaixo desses limites, repete-se, não se conclui. <strong>Ectópica</strong> se suspeita com <strong>útero vazio e hCG acima da zona discriminatória</strong> (1.500 a 3.500), ou com massa anexial e líquido livre; a <strong>localização indeterminada</strong> com hCG baixo se acompanha a cada 48 horas: subida normal sugere intrauterina inicial, queda sugere aborto, platô sugere ectópica.</p>
<p>Os erros a evitar: chamar de aborto um saco pequeno sem embrião, esvaziar uma gestação que só precisava de mais uma semana, e tranquilizar uma paciente com útero vazio e hCG de 4.000.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Saco de 10 mm dentro do útero, colo fechado, hCG de 1.200: é ameaça de aborto, e a resposta é paciência com data marcada, não misoprostol. A mesma mulher com útero vazio e o mesmo hCG seria uma localização indeterminada, e a resposta seria o hCG de 48 horas com o telefone do pronto-socorro na mão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ameaça: colo fechado, gestação intrauterina viável ou precoce demais para avaliar; expectante com hCG em 48 horas e imagem em 1 a 2 semanas.</li>
<li>Inevitável: colo aberto com sangramento e cólicas; esvaziar ou aguardar o completo.</li>
<li>Inviável: CCN 7 mm sem batimentos, saco 25 mm sem embrião, sem evolução em 11 a 14 dias.</li>
<li>Ectópica: útero vazio com hCG acima de 1.500 a 3.500 ou massa anexial; indeterminada: hCG seriado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Saco gestacional intrauterino de 10 mm sem embrião, colo fechado, hCG de 1.200: qual é o diagnóstico? <details><summary>Resposta</summary>Ameaça de aborto: gestação intrauterina inicial sem critérios de inviabilidade; conduta expectante com reavaliação.</details></li>
<li>Que critérios definem a gestação inviável? <details><summary>Resposta</summary>CCN de 7 mm ou mais sem batimentos, saco de 25 mm ou mais sem embrião, ou ausência de evolução em 11 a 14 dias.</details></li>
</ol>
`,
"einstein2025#56": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Montar o tratamento do câncer de mama precoce pelo subtipo imuno-histoquímico.</li>
<li>Indicar terapia anti-HER2 com quimioterapia no tumor HER2-positivo.</li>
<li>Saber que a hormonioterapia depende do receptor e a radioterapia da cirurgia conservadora.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Subtipos imuno-histoquímicos</dt>
<dd>Luminal A e B (receptores positivos), HER2-positivo (com ou sem receptor) e triplo-negativo.</dd>
<dt>Trastuzumabe</dt>
<dd>Anticorpo anti-HER2, por 1 ano, sempre com quimioterapia; pertuzumabe associado nos de maior risco.</dd>
<dt>Hormonioterapia</dt>
<dd>Tamoxifeno ou inibidor de aromatase por 5 a 10 anos, só quando o receptor de estrogênio ou progesterona é positivo.</dd>
<dt>Neoadjuvância</dt>
<dd>Quimioterapia com anti-HER2 antes da cirurgia nos HER2-positivos a partir de T2 ou N positivo, para avaliar resposta e reduzir a cirurgia.</dd>
</dl>
<h4>O essencial</h4>
<p>O tratamento do câncer de mama precoce se monta em duas camadas: a <strong>local</strong> (cirurgia e radioterapia) e a <strong>sistêmica</strong> (quimioterapia, anti-HER2, hormonioterapia), e a segunda é ditada pelo <strong>perfil imuno-histoquímico</strong>. Uma lesão espiculada de 1,7 cm (T1c), com axila clinicamente negativa, <strong>HER2-positivo</strong> e <strong>receptores hormonais negativos</strong>, é um tumor de subtipo HER2-puro, agressivo, mas com alvo terapêutico.</p>
<p>A <strong>cirurgia conservadora</strong> (quadrantectomia com margens livres) com <strong>biópsia do linfonodo sentinela</strong> é adequada para o tumor pequeno em mama de tamanho compatível, e obriga a <strong>radioterapia</strong> adjuvante da mama, que nesse caso depende da cirurgia escolhida e não do subtipo. A terapia sistêmica no HER2-positivo é <strong>quimioterapia</strong> (taxano, com ou sem antraciclina; o esquema paclitaxel semanal com trastuzumabe é suficiente nos tumores pequenos com axila negativa) associada a <strong>trastuzumabe</strong> por 1 ano, com pertuzumabe nos de maior risco; a partir de 2 cm ou com axila positiva, a preferência atual é fazer essa combinação como <strong>neoadjuvância</strong>, e ajustar a adjuvância pela resposta patológica (trastuzumabe-entansina se houver doença residual). A <strong>hormonioterapia não é indicada</strong>, porque os receptores são negativos: tamoxifeno ou inibidor de aromatase não têm alvo nesse tumor.</p>
<p>Os outros subtipos seguem a mesma lógica: luminal de baixo risco, cirurgia, radioterapia se conservadora e hormonioterapia, com quimioterapia decidida por assinatura genômica; luminal HER2-positivo, tudo isso mais trastuzumabe; triplo-negativo, quimioterapia (neoadjuvante com imunoterapia a partir de T2 ou N positivo) sem alvo hormonal nem anti-HER2. A avaliação cardíaca antes do trastuzumabe e a monitorização da fração de ejeção fazem parte do plano.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ao ler "HER2 positivo, RE e RP negativos", o plano se escreve sozinho: conservadora com sentinela, radioterapia, quimioterapia com trastuzumabe por um ano, e nenhuma linha de tamoxifeno. Se o tumor tivesse 2,5 cm, a ordem mudaria: a quimioterapia com anti-HER2 viria antes da cirurgia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Local: conservadora com sentinela mais radioterapia; sistêmica pelo subtipo.</li>
<li>HER2-positivo: quimioterapia com trastuzumabe por 1 ano (pertuzumabe nos de maior risco); neoadjuvância a partir de T2 ou N positivo.</li>
<li>Hormonioterapia só com receptor positivo; triplo-negativo recebe quimioterapia.</li>
<li>Avaliar a função cardíaca antes e durante o trastuzumabe.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que terapia sistêmica recebe o tumor HER2-positivo com receptores hormonais negativos? <details><summary>Resposta</summary>Quimioterapia associada a trastuzumabe por um ano, sem hormonioterapia.</details></li>
<li>De que depende a indicação de radioterapia nesse caso? <details><summary>Resposta</summary>Da cirurgia conservadora: toda quadrantectomia é seguida de radioterapia da mama.</details></li>
</ol>
`,
"einstein2025#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a doença inflamatória pélvica pelos critérios mínimos e adicionais.</li>
<li>Aplicar os critérios de internação e escolher o tratamento ambulatorial.</li>
<li>Reavaliar em 72 horas e tratar as parcerias.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios mínimos</dt>
<dd>Dor à mobilização do colo, dor uterina ou dor anexial, em mulher sexualmente ativa com dor pélvica sem outra causa.</dd>
<dt>Critérios de internação</dt>
<dd>Abscesso tubo-ovariano, gestação, falha ou intolerância ao tratamento oral, quadro grave com vômitos ou febre alta, dúvida diagnóstica com abdome cirúrgico.</dd>
<dt>Esquema ambulatorial</dt>
<dd>Ceftriaxona 500 mg IM dose única, doxiciclina 100 mg 12/12 h por 14 dias e metronidazol 500 mg 12/12 h por 14 dias.</dd>
<dt>Reavaliação em 72 horas</dt>
<dd>Retorno obrigatório em 3 dias: sem melhora, internar, reavaliar o diagnóstico e trocar para esquema venoso.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença inflamatória pélvica é a infecção ascendente do trato genital superior, causada por <em>Chlamydia</em>, gonococo e a flora vaginal, em mulheres sexualmente ativas sem método de barreira. O diagnóstico é <strong>clínico e de baixo limiar</strong>, porque as sequelas (infertilidade, ectópica, dor crônica) dependem do atraso: dor pélvica com <strong>dor à mobilização do colo, dor uterina ou anexial</strong> ao toque basta para tratar, e febre, corrimento mucopurulento, leucocitose, PCR ou VHS elevadas e testes positivos para clamídia e gonococo reforçam. A ultrassonografia é feita para afastar abscesso e outras causas (ectópica, apendicite, cisto torcido); o hCG é obrigatório.</p>
<p>A maioria trata em casa. Os <strong>critérios de internação</strong> são: <strong>abscesso tubo-ovariano</strong>, <strong>gestação</strong>, quadro grave com vômitos, febre alta ou toxemia, <strong>falha ou intolerância ao tratamento oral</strong>, dúvida com abdome agudo cirúrgico e imunossupressão. Uma mulher de 32 anos, com 5 dias de dor progressiva, sem vômitos, sem sinais de peritonite e sem abscesso à imagem, é tratada <strong>ambulatorialmente</strong> com <strong>ceftriaxona</strong> intramuscular em dose única mais <strong>doxiciclina</strong> e <strong>metronidazol</strong> por <strong>14 dias</strong>, cobrindo gonococo, clamídia e anaeróbios, com analgesia, abstinência sexual até o fim do tratamento e das parcerias.</p>
<p>O <strong>retorno em 72 horas</strong> é parte da prescrição: sem melhora clínica em 3 dias, a paciente é internada, o diagnóstico é revisto com imagem e o esquema passa a venoso (ceftriaxona ou cefoxitina com doxiciclina, ou clindamicina com gentamicina). As <strong>parcerias</strong> dos últimos 60 dias são tratadas para gonococo e clamídia, o DIU, se presente, pode ser mantido se houver melhora em 72 horas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor pélvica com colo doloroso ao toque, sem abscesso e sem vômitos: ceftriaxona na hora, doxiciclina e metronidazol por 14 dias, receita para o parceiro, e a frase "volte em três dias, com ou sem melhora". Quem não volta é quem aparece meses depois com a tuba fechada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diagnóstico clínico com limiar baixo: dor à mobilização do colo, uterina ou anexial; hCG e ultrassonografia.</li>
<li>Internar: abscesso, gestação, quadro grave, falha ou intolerância oral, dúvida cirúrgica.</li>
<li>Ambulatorial: ceftriaxona IM dose única, doxiciclina e metronidazol por 14 dias; abstinência; parcerias.</li>
<li>Reavaliar em 72 horas; sem melhora, internar e esquema venoso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os critérios de internação na doença inflamatória pélvica? <details><summary>Resposta</summary>Abscesso tubo-ovariano, gestação, quadro grave com vômitos ou febre alta, falha ou intolerância ao tratamento oral e dúvida com abdome agudo cirúrgico.</details></li>
<li>Qual é o esquema ambulatorial e quando reavaliar? <details><summary>Resposta</summary>Ceftriaxona intramuscular em dose única, doxiciclina e metronidazol por 14 dias, com reavaliação em 72 horas.</details></li>
</ol>
`,
};
