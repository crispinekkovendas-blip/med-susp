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
};
