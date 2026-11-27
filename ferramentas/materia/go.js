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

/* --- Volume 2 · GO · Sírio-Libanês 2026 (go51–go65) ----------------------------------- */
"sirio2026#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o cisto funcional do ovário pela imagem e pelo contexto clínico.</li>
<li>Diferenciar o cisto simples das massas anexiais que exigem investigação.</li>
<li>Definir a conduta expectante e os critérios para intervir.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cisto folicular</dt>
<dd>Folículo dominante que não ovulou e continuou a crescer, em geral entre 3 e 8 cm, com conteúdo anecoico e parede fina.</dd>
<dt>Cisto de corpo lúteo</dt>
<dd>Corpo lúteo que acumulou líquido ou sangue após a ovulação; pode ter parede espessa, vascularizada, e conteúdo heterogêneo.</dd>
<dt>Cisto simples</dt>
<dd>Imagem anecoica, unilocular, de parede fina e regular, sem septos, sem componentes sólidos e sem fluxo interno ao Doppler.</dd>
<dt>Massa complexa</dt>
<dd>Lesão com septos espessos, papilas, componente sólido ou debris, que exige caracterização adicional e eventual cirurgia.</dd>
</dl>
<h4>O essencial</h4>
<p>Os cistos funcionais nascem do próprio ciclo menstrual. Na fase folicular, um folículo cresce até cerca de 2,5 cm e rompe na ovulação; se o pico de LH falha ou o folículo não se rompe, ele segue acumulando líquido e vira um <strong>cisto folicular</strong>. Depois da ovulação, o corpo lúteo pode sangrar para dentro e formar o cisto de corpo lúteo, que às vezes dói e simula ectópica.</p>
<p>A imagem é o que separa o fisiológico do patológico. O cisto simples, anecoico, sem septos, sem papilas e sem debris, tem risco de malignidade próximo de zero em qualquer idade, e na mulher jovem é funcional até prova em contrário. Já conteúdo em vidro fosco sugere endometrioma; níveis, cabelo e calcificação sugerem teratoma; septos espessos, papilas e fluxo interno exigem marcadores e avaliação oncológica.</p>
<p>A conduta no cisto simples é <strong>expectante</strong>: repetir o ultrassom em seis a oito semanas, de preferência logo após a menstruação, quando o cisto funcional já desapareceu. Anticoncepcionais não aceleram a regressão de um cisto já formado, embora previnam novos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, a adolescente ou mulher jovem assintomática com cisto anecoico de até 8 a 10 cm, sem septos e sem debris, tem cisto funcional, e a resposta é observar. Os distratores são sempre diagnósticos que exigem outro quadro: endometrioma com dismenorreia e dispareunia, abscesso com febre e dor, ectópica com atraso e beta-hCG positivo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cisto folicular: folículo que não ovulou; cisto de corpo lúteo: corpo lúteo que acumulou líquido ou sangue.</li>
<li>Cisto simples: anecoico, unilocular, parede fina, sem septos, sem papilas, sem fluxo interno.</li>
<li>Risco de malignidade do cisto simples é quase nulo; a regressão espontânea ocorre em um a três ciclos.</li>
<li>Conduta: ultrassom de controle em seis a oito semanas; anticoncepcional não dissolve o cisto.</li>
<li>Cirurgia só por torção, rotura instável, dor refratária, crescimento ou persistência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que características ultrassonográficas definem um cisto simples? <details><summary>Resposta</summary>Conteúdo anecoico, unilocular, parede fina e regular, sem septos, sem papilas, sem componente sólido e sem fluxo interno ao Doppler.</details></li>
<li>Em quanto tempo se repete o ultrassom de um cisto funcional e por quê? <details><summary>Resposta</summary>Em seis a oito semanas, logo após a menstruação, quando o cisto funcional já deve ter regredido.</details></li>
<li>O anticoncepcional combinado acelera a regressão de um cisto funcional já formado? <details><summary>Resposta</summary>Não; ele previne a formação de novos cistos, mas não reduz o tempo de regressão do cisto existente.</details></li>
</ol>
`,

"sirio2026#62": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever o rastreamento do câncer do colo do útero com teste de DNA-HPV adotado em 2025.</li>
<li>Aplicar a conduta correta a cada resultado do teste molecular.</li>
<li>Explicar por que os tipos 16 e 18 levam direto à colposcopia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Teste de DNA-HPV</dt>
<dd>Exame molecular que detecta os tipos oncogênicos do papilomavírus no material cervical, com genotipagem parcial para 16 e 18.</dd>
<dt>Triagem por citologia</dt>
<dd>Citologia feita na mesma amostra quando o teste é positivo para outros tipos oncogênicos, para decidir quem vai à colposcopia.</dd>
<dt>Colposcopia</dt>
<dd>Exame do colo com magnificação e ácido acético, que localiza a lesão e dirige a biópsia.</dd>
<dt>Autocoleta</dt>
<dd>Coleta vaginal feita pela própria mulher, com acurácia equivalente para o teste molecular, prevista para ampliar a cobertura.</dd>
</dl>
<h4>O essencial</h4>
<p>O rastreamento brasileiro mudou em 2025: o teste de DNA-HPV passou a ser o exame primário, no lugar da citologia, para mulheres de <strong>25 a 64 anos</strong>, com intervalo de <strong>cinco anos</strong> quando negativo. A razão é a sensibilidade: o teste molecular detecta a lesão precursora muito melhor que o Papanicolaou, com um resultado negativo que protege por mais tempo, e permite reduzir o número de exames na vida da mulher sem perder segurança.</p>
<p>A conduta depende do resultado. <strong>Negativo</strong>: repete em cinco anos. <strong>Positivo para HPV 16 ou 18</strong>: colposcopia imediata, porque esses dois tipos causam cerca de 70% dos cânceres do colo e o risco de lesão de alto grau já presente é da ordem de 15 a 20%. <strong>Positivo para outros tipos oncogênicos</strong>: faz-se a citologia de triagem na mesma amostra; se alterada, colposcopia; se normal, novo teste em um ano. Esse desenho concentra a colposcopia em quem tem risco real e evita a sobrecarga de encaminhamentos.</p>
<p>Alguns cuidados completam o algoritmo. Mulheres vacinadas seguem o mesmo rastreamento. Imunossuprimidas e mulheres com HIV têm intervalo menor. Abaixo dos 25 anos não se rastreia, porque a infecção é transitória e o tratamento de lesões que regrediriam causa dano obstétrico. Na colposcopia, biopsia-se a área suspeita, e a conduta posterior segue a histologia: lesão de baixo grau observa-se, lesão de alto grau trata-se com excisão da zona de transformação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A pergunta clássica é o que fazer com o teste positivo. A regra decorada é simples: 16 ou 18 vai à colposcopia; outros tipos vão à citologia; negativo volta em cinco anos. Tratamento tópico, repetição em poucos meses e imuno-histoquímica são distratores que não fazem parte do fluxo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rastreamento primário com teste de DNA-HPV, 25 a 64 anos, a cada cinco anos quando negativo.</li>
<li>HPV 16 ou 18 positivo: colposcopia direta, pelo risco alto de lesão de alto grau.</li>
<li>Outros tipos oncogênicos: citologia de triagem na mesma amostra; alterada vai à colposcopia, normal repete em um ano.</li>
<li>Não rastrear antes dos 25 anos; vacinadas seguem o mesmo esquema; imunossuprimidas com intervalo menor.</li>
<li>Tratamento depende da histologia da biópsia dirigida, nunca do teste isolado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a faixa etária e o intervalo do rastreamento com teste de DNA-HPV? <details><summary>Resposta</summary>De 25 a 64 anos, com repetição a cada cinco anos quando o teste é negativo.</details></li>
<li>O que fazer diante de um teste positivo para outros tipos oncogênicos, que não o 16 nem o 18? <details><summary>Resposta</summary>Citologia de triagem na mesma amostra: se alterada, colposcopia; se normal, repetir o teste em um ano.</details></li>
<li>Por que o HPV 16 dispensa a citologia e vai direto à colposcopia? <details><summary>Resposta</summary>Porque é o tipo mais oncogênico, responsável com o 18 por cerca de 70% dos cânceres, e o risco de lesão de alto grau já presente é alto demais para esperar.</details></li>
</ol>
`,

"sirio2026#64": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever os estágios do envelhecimento reprodutivo segundo o STRAW+10.</li>
<li>Identificar o critério menstrual que marca o início da transição menopausal.</li>
<li>Diferenciar transição precoce, transição tardia e pós-menopausa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>STRAW+10</dt>
<dd>Sistema de estadiamento do envelhecimento reprodutivo, de −5 (reprodutivo inicial) a +2 (pós-menopausa tardia), baseado no padrão menstrual.</dd>
<dt>Transição menopausal precoce (−2)</dt>
<dd>Variação persistente de sete dias ou mais na duração de ciclos consecutivos.</dd>
<dt>Transição menopausal tardia (−1)</dt>
<dd>Intervalos de amenorreia de 60 dias ou mais, com FSH acima de 25 UI/L e sintomas vasomotores frequentes.</dd>
<dt>Menopausa</dt>
<dd>Última menstruação, reconhecida retrospectivamente após 12 meses de amenorreia; idade média de 51 anos.</dd>
<dt>Perimenopausa</dt>
<dd>Período que vai do início da transição até um ano após a última menstruação.</dd>
</dl>
<h4>O essencial</h4>
<p>O ovário envelhece antes do resto do corpo. A reserva folicular cai de forma acelerada a partir dos 37 anos, e com ela cai a inibina B, que freia o FSH. O FSH sobe, recruta folículos mais cedo e encurta a fase folicular: no fim da vida reprodutiva os ciclos ficam ligeiramente mais curtos, de 25 ou 26 dias. Quando restam poucos folículos, começam a falhar as ovulações, e o padrão muda: ciclos irregulares, que ora encurtam ora se alongam, com atrasos de uma semana ou mais.</p>
<p>O STRAW+10 usa exatamente essa variabilidade como marcador. A <strong>transição precoce</strong> começa quando a duração de ciclos consecutivos varia sete dias ou mais, de modo persistente; a mulher percebe que a menstruação "desregulou", com atrasos. A <strong>transição tardia</strong> é definida por intervalos de 60 dias ou mais sem menstruar, geralmente com fogachos e FSH já claramente alto. A <strong>menopausa</strong> só se confirma depois de 12 meses de amenorreia, e o primeiro ano após a última menstruação ainda pertence à perimenopausa, com sintomas no auge.</p>
<p>Na prática, o diagnóstico é clínico acima dos 45 anos e não precisa de dosagem hormonal, porque o FSH oscila muito de um ciclo para outro na transição. A dosagem ajuda apenas entre 40 e 45 anos ou em quem usa hormônio ou tem o útero retirado. A transição dura em média quatro anos, e a contracepção deve ser mantida até a menopausa confirmada, porque a ovulação, embora rara, ainda acontece.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a prova pergunta pelo primeiro sinal da transição, a resposta é a irregularidade com atrasos, não a amenorreia nem a mudança do fluxo. A amenorreia de 60 dias já é transição tardia, e os 12 meses sem menstruar fecham a menopausa. Volume de sangramento varia, mas não estadia nada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Queda da reserva folicular e da inibina B eleva o FSH; a ovulação passa a falhar.</li>
<li>Transição precoce: variação de sete dias ou mais entre ciclos, percebida como atrasos.</li>
<li>Transição tardia: amenorreia de 60 dias ou mais, FSH acima de 25, fogachos frequentes.</li>
<li>Menopausa: 12 meses de amenorreia; diagnóstico clínico acima dos 45 anos, sem dosagem.</li>
<li>Manter contracepção até a menopausa confirmada; a transição dura cerca de quatro anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual critério menstrual define a transição menopausal precoce no STRAW+10? <details><summary>Resposta</summary>Variação persistente de sete dias ou mais na duração de ciclos consecutivos.</details></li>
<li>O que caracteriza a transição menopausal tardia? <details><summary>Resposta</summary>Intervalos de amenorreia de 60 dias ou mais, com FSH acima de 25 UI/L e sintomas vasomotores.</details></li>
<li>Por que não se dosa FSH para diagnosticar a transição em mulheres acima de 45 anos? <details><summary>Resposta</summary>Porque os níveis oscilam muito de ciclo para ciclo e o diagnóstico clínico, pelo padrão menstrual, é suficiente.</details></li>
</ol>
`,

"sirio2026#65": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que a anovulação é a causa mais comum de sangramento uterino anormal na adolescência.</li>
<li>Reconhecer quando investigar coagulopatia na adolescente que sangra.</li>
<li>Descrever o tratamento do sangramento agudo e a manutenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>PALM-COEIN</dt>
<dd>Classificação da FIGO para o sangramento uterino anormal: causas estruturais (pólipo, adenomiose, leiomioma, malignidade) e não estruturais (coagulopatia, ovulatória, endometrial, iatrogênica, não classificada).</dd>
<dt>Disfunção ovulatória (AUB-O)</dt>
<dd>Sangramento irregular e imprevisível por anovulação, com estímulo estrogênico sem oposição de progesterona.</dd>
<dt>Sangramento agudo</dt>
<dd>Episódio de volume suficiente para exigir intervenção imediata, com ou sem anemia e instabilidade.</dd>
<dt>Doença de von Willebrand</dt>
<dd>Coagulopatia hereditária mais comum, presente em até 10 a 20% das adolescentes com sangramento menstrual intenso.</dd>
</dl>
<h4>O essencial</h4>
<p>Nos primeiros dois a três anos após a menarca, o eixo hipotálamo-hipófise-ovário ainda não gera o pico de LH de forma confiável, e metade dos ciclos é <strong>anovulatória</strong>. Sem ovulação não há corpo lúteo nem progesterona; o estrogênio prolifera o endométrio sem oposição até que ele se torna frágil, descama de forma irregular e sangra por tempo prolongado, às vezes em grande volume.</p>
<p>A segunda causa, e a que não pode passar despercebida, é a <strong>coagulopatia</strong>. A doença de von Willebrand e as disfunções plaquetárias aparecem em até uma de cada cinco adolescentes com sangramento intenso desde a menarca.</p>
<p>O tratamento do episódio agudo é hormonal: estrogênio conjugado venoso em caso de sangramento muito intenso, ou contraceptivo combinado em doses altas por via oral com redução progressiva, ou progestagênio isolado em dose alta (acetato de medroxiprogesterona ou noretisterona) quando o estrogênio é contraindicado. O ácido tranexâmico acrescenta efeito, e a anemia se corrige com ferro ou transfusão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A adolescente que sangra muito e há pouco tempo menstruou tem anovulação como primeira hipótese, e a prova espera isso. Mas o mesmo enunciado com história familiar, sangramento desde a primeira menstruação ou outros sangramentos muda a resposta para coagulopatia. Leia o antecedente antes de responder.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Anovulação por imaturidade do eixo: causa mais comum de sangramento uterino anormal pós-menarca.</li>
<li>Coagulopatia (von Willebrand) é a segunda causa; rastrear se sangramento intenso desde a menarca, anemia, história familiar ou outros sangramentos.</li>
<li>Sempre excluir gravidez com beta-hCG.</li>
<li>Agudo: estrogênio venoso, combinado em dose alta ou progestagênio em dose alta, mais ácido tranexâmico e ferro.</li>
<li>Manutenção hormonal por meses; curetagem só na falha clínica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a adolescente nos primeiros anos pós-menarca sangra de forma irregular? <details><summary>Resposta</summary>Porque o eixo imaturo não gera o pico de LH e muitos ciclos são anovulatórios, com estrogênio sem oposição de progesterona.</details></li>
<li>Quais achados levam a investigar coagulopatia na adolescente com sangramento intenso? <details><summary>Resposta</summary>Sangramento profuso desde a menarca, hemoglobina abaixo de 10, história familiar, epistaxe, gengivorragia, equimoses ou sangramento cirúrgico.</details></li>
<li>Qual é a base do tratamento do sangramento agudo nessa paciente? <details><summary>Resposta</summary>Terapia hormonal (estrogênio venoso, combinado ou progestagênio em dose alta), com ácido tranexâmico e correção da anemia.</details></li>
</ol>
`,

"sirio2026#67": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever as mudanças hormonais da transição menopausal e sua sequência.</li>
<li>Diferenciar hipogonadismo hipergonadotrófico de hipogonadotrófico pelo FSH.</li>
<li>Saber quando a dosagem hormonal é útil no climatério.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Inibina B</dt>
<dd>Peptídeo das células da granulosa dos folículos pequenos, que inibe o FSH; sua queda é o primeiro sinal bioquímico do envelhecimento ovariano.</dd>
<dt>Hormônio antimülleriano</dt>
<dd>Marcador da reserva folicular, produzido pelos folículos pré-antrais; cai antes do FSH subir e fica indetectável perto da menopausa.</dd>
<dt>Hipogonadismo hipergonadotrófico</dt>
<dd>Estradiol baixo com FSH e LH altos: a falha está no ovário.</dd>
<dt>Hipogonadismo hipogonadotrófico</dt>
<dd>Estradiol baixo com FSH e LH baixos ou normais: a falha está no hipotálamo ou na hipófise.</dd>
</dl>
<h4>O essencial</h4>
<p>O eixo reprodutivo funciona por retroalimentação negativa. Os folículos ovarianos produzem estradiol e inibina B, e os dois freiam a secreção de FSH pela hipófise. Quando a reserva folicular diminui, a inibina B é a primeira a cair, e o FSH começa a subir ainda com ciclos regulares; esse FSH mais alto recruta folículos mais cedo e encurta a fase folicular. Com a progressão, o estradiol também cai, as ovulações falham, e o LH acompanha o FSH para cima.</p>
<p>Esse padrão permite localizar a lesão em qualquer hipogonadismo feminino. Gonadotrofinas altas significam que a hipófise está tentando e o ovário não responde: menopausa, insuficiência ovariana prematura, disgenesia gonadal, quimioterapia ou radioterapia pélvica.</p>
<p>Na transição menopausal os hormônios oscilam de ciclo para ciclo, e um FSH normal num mês não exclui a transição. Por isso acima dos 45 anos o diagnóstico é clínico, pelo padrão menstrual e pelos sintomas. A dosagem é útil entre 40 e 45 anos, quando há dúvida, e abaixo dos 40 anos, quando dois valores de FSH acima de 25 UI/L com intervalo de quatro semanas definem insuficiência ovariana prematura.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A mulher de 40 a 50 anos com atrasos menstruais, insônia e irritabilidade tem perimenopausa, e o perfil cobrado é FSH alto, LH alto, estradiol baixo. Se a prova trouxer o mesmo quadro clínico com gonadotrofinas baixas, pense em causa central e peça prolactina e imagem da hipófise.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sequência da transição: queda da inibina B, elevação do FSH, queda do estradiol, elevação do LH.</li>
<li>Perfil da perimenopausa e pós-menopausa: FSH e LH altos, estradiol baixo.</li>
<li>FSH alto localiza a falha no ovário; FSH baixo ou normal com estradiol baixo, no hipotálamo ou na hipófise.</li>
<li>Acima de 45 anos o diagnóstico é clínico; dosagem para 40 a 45 anos e para suspeita de insuficiência ovariana prematura.</li>
<li>Insuficiência ovariana prematura: FSH acima de 25 em duas dosagens, antes dos 40 anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro hormônio a se alterar no envelhecimento ovariano e qual a consequência? <details><summary>Resposta</summary>A inibina B cai, liberando a hipófise para elevar o FSH ainda com ciclos regulares.</details></li>
<li>Como o FSH diferencia a origem de um hipogonadismo feminino? <details><summary>Resposta</summary>FSH alto indica falha ovariana; FSH baixo ou normal com estradiol baixo indica causa hipotalâmica ou hipofisária.</details></li>
<li>Quando a dosagem hormonal é dispensável no diagnóstico da transição menopausal? <details><summary>Resposta</summary>Acima dos 45 anos, com padrão menstrual e sintomas típicos, porque os valores oscilam e o diagnóstico é clínico.</details></li>
</ol>
`,

"sirio2026#68": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar a recomendação brasileira de rastreamento mamográfico para mulheres de risco habitual.</li>
<li>Explicar o balanço entre benefício e dano que define faixa etária e intervalo.</li>
<li>Diferenciar rastreamento de diagnóstico e reconhecer quem sai da regra geral.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Rastreamento</dt>
<dd>Exame periódico em pessoas assintomáticas para detectar a doença antes dos sintomas; difere do exame diagnóstico, pedido por queixa ou achado.</dd>
<dt>Sobrediagnóstico</dt>
<dd>Detecção de tumores que nunca causariam sintomas nem morte, levando a tratamento desnecessário.</dd>
<dt>Falso positivo</dt>
<dd>Exame suspeito em mulher sem câncer, que gera exames adicionais, biópsias e ansiedade.</dd>
<dt>Alto risco</dt>
<dd>Mutação BRCA ou síndromes hereditárias, radioterapia torácica antes dos 30 anos, ou parentes de primeiro grau com câncer de mama antes dos 50; rastreamento próprio.</dd>
</dl>
<h4>O essencial</h4>
<p>A diretriz do Ministério da Saúde e do INCA, de 2015, recomenda <strong>mamografia a cada dois anos para mulheres de 50 a 69 anos</strong> sem sintomas e sem fatores de risco.</p>
<p>A lógica é o balanço entre vidas salvas e danos causados. Dos 50 aos 69 anos, a incidência é alta, a mama é menos densa e a mamografia reduz a mortalidade por câncer de mama em cerca de 20%; o número de mulheres a rastrear para evitar uma morte é aceitável. Antes dos 50, a incidência menor e a mama densa diminuem a sensibilidade e multiplicam falsos positivos, biópsias e sobrediagnóstico, e a redução de mortalidade é pequena.</p>
<p>Existem posições divergentes. A Sociedade Brasileira de Mastologia, o Colégio Brasileiro de Radiologia e a FEBRASGO recomendam mamografia anual a partir dos 40 anos, e essa divergência costuma aparecer nas provas; quando o enunciado cita o Ministério da Saúde ou o INCA, a resposta é 50 a 69 anos, bienal. Mulheres de alto risco saem da regra: começam mais cedo, por volta dos 30 anos ou dez anos antes do caso mais jovem da família, com ressonância anual associada à mamografia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Leia de quem é a diretriz. "Ministério da Saúde", "INCA" e "SUS" significam 50 a 69 anos a cada dois anos, sem autoexame como rastreamento. "Sociedade Brasileira de Mastologia" ou "FEBRASGO" significam anual a partir dos 40. A paciente com sintoma nunca é rastreamento, e a de alto risco tem esquema próprio com ressonância.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ministério da Saúde e INCA (2015): mamografia bienal de 50 a 69 anos para risco habitual.</li>
<li>Recomendação contrária ao rastreamento de rotina de 40 a 49 e acima de 70, e ao autoexame como rastreamento.</li>
<li>Razão: nos 50 a 69 anos o benefício em mortalidade supera falsos positivos e sobrediagnóstico.</li>
<li>Sociedades de especialidade recomendam anual a partir dos 40; a prova cobra a fonte citada.</li>
<li>Alto risco: início precoce com ressonância anual; sintoma é exame diagnóstico, não rastreamento.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a recomendação do Ministério da Saúde para o rastreamento mamográfico de risco habitual? <details><summary>Resposta</summary>Mamografia a cada dois anos para mulheres de 50 a 69 anos, assintomáticas e sem fatores de risco.</details></li>
<li>Por que a diretriz não recomenda o rastreamento de rotina entre 40 e 49 anos? <details><summary>Resposta</summary>Porque a incidência menor e a mama densa reduzem o benefício e aumentam falsos positivos, biópsias e sobrediagnóstico.</details></li>
<li>Como difere o rastreamento da mulher de alto risco hereditário? <details><summary>Resposta</summary>Começa mais cedo, por volta dos 30 anos, com ressonância magnética anual associada à mamografia.</details></li>
</ol>
`,

"sirio2026#69": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar as síndromes hipertensivas da gestação pelo marco das 20 semanas e pela proteinúria.</li>
<li>Reconhecer a hipertensão crônica a partir da carteira de pré-natal.</li>
<li>Descrever o seguimento da gestante hipertensa crônica e a suspeita de pré-eclâmpsia superajuntada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipertensão arterial crônica</dt>
<dd>Pressão de 140 × 90 mmHg ou mais, documentada antes da gestação ou antes de 20 semanas, ou que persiste além de 12 semanas pós-parto.</dd>
<dt>Hipertensão gestacional</dt>
<dd>Hipertensão nova após 20 semanas, sem proteinúria nem disfunção de órgão-alvo, que se resolve no puerpério.</dd>
<dt>Pré-eclâmpsia</dt>
<dd>Hipertensão após 20 semanas com proteinúria ou com sinal de disfunção de órgão (plaquetopenia, creatinina alta, transaminases elevadas, edema pulmonar, sintomas neurológicos).</dd>
<dt>Pré-eclâmpsia superajuntada</dt>
<dd>Pré-eclâmpsia que se instala sobre hipertensão crônica: proteinúria nova, piora abrupta da pressão ou alteração laboratorial.</dd>
</dl>
<h4>O essencial</h4>
<p>A classificação das síndromes hipertensivas gira em torno de duas perguntas: <strong>quando</strong> a pressão subiu e <strong>se há proteinúria ou lesão de órgão</strong>. Pressão alta antes de 20 semanas é hipertensão crônica, mesmo que a mulher nunca tenha recebido o diagnóstico; a gestação apenas revelou. Pressão alta depois de 20 semanas, sem proteinúria, é hipertensão gestacional; com proteinúria ou disfunção de órgão, é pré-eclâmpsia.</p>
<p>A hipertensão crônica tem particularidades. No segundo trimestre a pressão cai fisiologicamente, e a hipertensa pode parecer normotensa por algumas semanas, voltando a subir no terceiro trimestre; é por isso que a leitura da primeira consulta é decisiva.</p>
<p>O grande risco é a <strong>pré-eclâmpsia superajuntada</strong>, que atinge 20 a 25% das hipertensas crônicas e é mais grave que a pré-eclâmpsia isolada. Suspeita-se dela quando surge proteinúria em quem não tinha, quando a pressão sobe abruptamente e exige mais droga, ou quando aparecem plaquetopenia, elevação de transaminases ou creatinina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Procure sempre a pressão da primeira consulta. Se já estava em 140 × 90 ou mais antes de 20 semanas, a resposta é hipertensão crônica, e os distratores "gestacional", "pré-eclâmpsia" e "HELLP" caem, porque exigem início tardio e exames. Sem laboratório, não se diagnostica superajuntada nem HELLP.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Antes de 20 semanas: hipertensão crônica; depois de 20 semanas: gestacional (sem proteinúria) ou pré-eclâmpsia (com proteinúria ou lesão de órgão).</li>
<li>A queda fisiológica da pressão no segundo trimestre pode mascarar a hipertensa crônica.</li>
<li>Hipertensa crônica: aspirina desde 12 semanas, anti-hipertensivo seguro, exames de base precoces.</li>
<li>Superajuntada em 20 a 25%: proteinúria nova, piora abrupta da pressão ou laboratório alterado.</li>
<li>HELLP e superajuntada são diagnósticos laboratoriais; sem exames, não se afirmam.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o critério temporal que separa hipertensão crônica de hipertensão gestacional? <details><summary>Resposta</summary>Hipertensão documentada antes de 20 semanas (ou antes da gestação) é crônica; a que surge após 20 semanas é gestacional.</details></li>
<li>O que diferencia hipertensão gestacional de pré-eclâmpsia? <details><summary>Resposta</summary>A presença de proteinúria ou de sinal de disfunção de órgão-alvo na pré-eclâmpsia.</details></li>
<li>Como se suspeita de pré-eclâmpsia superajuntada na hipertensa crônica? <details><summary>Resposta</summary>Por proteinúria nova, elevação abrupta da pressão exigindo mais droga, ou plaquetopenia, transaminases ou creatinina alteradas.</details></li>
</ol>
`,

"sirio2026#70": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios de Delphi para restrição de crescimento fetal precoce e tardia.</li>
<li>Diferenciar feto pequeno para a idade gestacional de feto com restrição de crescimento.</li>
<li>Descrever o seguimento com Doppler e a decisão do momento do parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pequeno para a idade gestacional</dt>
<dd>Peso estimado abaixo do percentil 10 sem critério de restrição; na maioria, feto constitucionalmente pequeno e saudável.</dd>
<dt>Restrição de crescimento precoce</dt>
<dd>Diagnosticada antes de 32 semanas; associada a insuficiência placentária grave, pré-eclâmpsia e Doppler da umbilical alterado.</dd>
<dt>Restrição de crescimento tardia</dt>
<dd>Diagnosticada a partir de 32 semanas; insuficiência placentária leve, Doppler umbilical normal, alteração da relação cerebroplacentária.</dd>
<dt>Relação cerebroplacentária</dt>
<dd>Índice de pulsatilidade da artéria cerebral média dividido pelo da umbilical; abaixo do percentil 5 indica redistribuição.</dd>
</dl>
<h4>O essencial</h4>
<p>O consenso de Delphi de 2016 trouxe critérios objetivos para separar o feto que é apenas pequeno do feto que não cresce por insuficiência placentária.</p>
<p>A partir de 32 semanas, a <strong>restrição tardia</strong> também se define por peso ou circunferência abaixo do percentil 3, ou por dois de três critérios: peso ou circunferência abaixo do percentil 10, queda de mais de dois quartis na curva de crescimento, e relação cerebroplacentária abaixo do percentil 5 ou umbilical acima do percentil 95.</p>
<p>O seguimento é feito com Doppler seriado, cardiotocografia e perfil biofísico. Na restrição precoce, a progressão vai da umbilical alterada para diástole zero, diástole reversa e, por fim, ducto venoso com onda A ausente ou reversa, que indica parto independentemente da idade gestacional. Com diástole reversa, resolve-se em torno de 32 semanas; com diástole zero, em torno de 34; com umbilical alterada mas diástole presente, em 37.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Duas perguntas resolvem a maioria das questões: a idade gestacional é menor que 32 semanas (precoce) ou não (tardia), e o feto está abaixo do percentil 3 (restrição por si só) ou entre 3 e 10 (precisa de Doppler alterado para ser restrição; sem Doppler alterado é pequeno para a idade gestacional).</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Precoce (antes de 32 semanas): percentil abaixo de 3 isolado, ou diástole zero, ou percentil abaixo de 10 com Doppler umbilical ou uterino alterado.</li>
<li>Tardia (32 semanas ou mais): percentil abaixo de 3, ou dois de três: percentil abaixo de 10, queda de dois quartis, relação cerebroplacentária alterada.</li>
<li>Pequeno para a idade gestacional: abaixo do percentil 10 sem critério de restrição; vigiar e levar a termo.</li>
<li>Progressão do Doppler na precoce: umbilical alterada, diástole zero, diástole reversa, ducto venoso alterado.</li>
<li>Momento do parto guiado pelo Doppler: ducto venoso alterado a qualquer idade; diástole reversa em 32; zero em 34; alterada em 37.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado isolado define restrição de crescimento antes de 32 semanas mesmo com Doppler normal? <details><summary>Resposta</summary>Peso estimado ou circunferência abdominal abaixo do percentil 3.</details></li>
<li>O que diferencia o feto pequeno para a idade gestacional do feto com restrição? <details><summary>Resposta</summary>O pequeno está abaixo do percentil 10 mas acima do 3 e com Doppler normal; o restrito cumpre critério de Delphi, por percentil 3 ou por Doppler alterado.</details></li>
<li>Qual alteração do Doppler indica parto imediato independentemente da idade gestacional? <details><summary>Resposta</summary>Ducto venoso com onda A ausente ou reversa.</details></li>
</ol>
`,

"sirio2026#71": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a corioamnionite clínica na gestante com bolsa rota.</li>
<li>Definir a conduta: antibiótico, parto e via de parto.</li>
<li>Indicar o sulfato de magnésio para neuroproteção fetal e o corticoide no contexto da infecção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Corioamnionite clínica</dt>
<dd>Febre materna de 38 ºC ou mais associada a taquicardia fetal, leucocitose ou secreção purulenta pelo colo; chamada também infecção intra-amniótica.</dd>
<dt>Rotura prematura de membranas pré-termo</dt>
<dd>Rotura antes de 37 semanas e antes do trabalho de parto; a infecção ascendente é sua principal complicação, e o risco cresce com o tempo de latência.</dd>
<dt>Neuroproteção fetal</dt>
<dd>Sulfato de magnésio administrado à mãe antes do parto prematuro abaixo de 32 semanas, que reduz paralisia cerebral no recém-nascido.</dd>
<dt>Período de latência</dt>
<dd>Intervalo entre a rotura das membranas e o parto; na conduta expectante, vigiado com temperatura, frequência cardíaca fetal e leucograma.</dd>
</dl>
<h4>O essencial</h4>
<p>Na rotura prematura de membranas antes de 34 semanas, a conduta é expectante: internação, antibiótico profilático por sete dias (ampicilina com azitromicina, depois amoxicilina), corticoide para maturação pulmonar e vigilância de infecção, porque prolongar a gestação beneficia o feto enquanto a cavidade uterina permanecer estéril.</p>
<p>A via de parto não muda por causa da infecção. Com colo favorável e feto cefálico, induz-se o trabalho de parto com ocitocina; a cesárea fica para as indicações obstétricas habituais, porque operar um útero infectado aumenta a endometrite, a infecção da ferida e a tromboflebite pélvica. O parto não precisa ser imediato em minutos, mas deve ser encaminhado sem demora, enquanto a mãe recebe hidratação e antibiótico para conter a sepse.</p>
<p>Dois adjuvantes completam o cuidado do prematuro que vai nascer. O <strong>sulfato de magnésio</strong> para neuroproteção está indicado em todo parto iminente antes de 32 semanas, infectado ou não, com a mesma dose da pré-eclâmpsia; ele reduz em cerca de 30% a paralisia cerebral. O corticoide pode ser administrado se ainda não foi, mas nunca atrasa o parto diante de infecção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A prova monta um quadro de bolsa rota prolongada com febre, taquicardia fetal e leucocitose e oferece "expectante" como distrator. A resposta tem sempre três partes: antibiótico venoso, parto pela via obstétrica (indução se o colo permitir) e, abaixo de 32 semanas, sulfato de magnésio para o cérebro do prematuro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Corioamnionite: febre materna com taquicardia fetal, leucocitose, útero doloroso ou líquido fétido.</li>
<li>Infecção intra-amniótica é indicação de parto em qualquer idade gestacional; conduta expectante acaba.</li>
<li>Antibiótico terapêutico venoso (ampicilina e gentamicina; clindamicina se cesárea) e hidratação.</li>
<li>Via de parto pela obstetrícia: indução com colo favorável; cesárea só por indicação habitual.</li>
<li>Sulfato de magnésio para neuroproteção abaixo de 32 semanas; corticoide sem atrasar o parto.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados definem a corioamnionite clínica? <details><summary>Resposta</summary>Febre materna de 38 ºC ou mais com taquicardia fetal, leucocitose, útero doloroso ou líquido amniótico purulento ou fétido.</details></li>
<li>A corioamnionite indica cesárea? <details><summary>Resposta</summary>Não; indica parto, pela via obstétrica; com colo favorável e feto cefálico, induz-se o trabalho de parto.</details></li>
<li>Por que o sulfato de magnésio entra na conduta de um parto com 29 semanas? <details><summary>Resposta</summary>Para neuroproteção fetal: abaixo de 32 semanas ele reduz a paralisia cerebral do prematuro.</details></li>
</ol>
`,

"sirio2026#72": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar os testes treponêmicos e não treponêmicos no diagnóstico da sífilis na gestação.</li>
<li>Justificar a penicilina benzatina como único tratamento que previne a sífilis congênita.</li>
<li>Descrever a conduta na gestante alérgica à penicilina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Teste não treponêmico</dt>
<dd>VDRL ou RPR: detecta anticorpos contra cardiolipina, é quantitativo, serve para monitorar e pode ser falso-positivo.</dd>
<dt>Teste treponêmico</dt>
<dd>Teste rápido, FTA-Abs, TPHA ou ELISA: detecta anticorpos específicos contra o Treponema, confirma o diagnóstico e permanece positivo pela vida.</dd>
<dt>Tratamento adequado na gestação</dt>
<dd>Penicilina benzatina em dose e número de doses conforme o estágio, iniciada até 30 dias antes do parto, com intervalo semanal respeitado.</dd>
<dt>Dessensibilização</dt>
<dd>Administração hospitalar de doses orais crescentes de penicilina ao longo de cerca de quatro horas, para induzir tolerância temporária.</dd>
</dl>
<h4>O essencial</h4>
<p>O rastreamento da sífilis na gestação se faz na primeira consulta, no início do terceiro trimestre e no parto. O diagnóstico combina um teste treponêmico e um não treponêmico: o primeiro confirma, o segundo quantifica.</p>
<p>O tratamento tem uma única droga eficaz para o feto: a <strong>penicilina benzatina</strong>, que atravessa a placenta e atinge concentração treponemicida no sangue fetal. Na sífilis recente (primária, secundária ou latente recente, com menos de um ano) basta uma dose de 2,4 milhões de unidades; na latente tardia, terciária ou de duração ignorada são três doses semanais, 7,2 milhões no total.</p>
<p>A alergia à penicilina, portanto, não abre caminho para outros antibióticos. A eritromicina e a azitromicina não atravessam a placenta de modo confiável, e a doxiciclina é contraindicada na gestação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Qualquer opção que troque a penicilina por eritromicina, azitromicina, clindamicina ou ceftriaxona na gestante está errada. Alergia significa dessensibilizar e dar penicilina. E lembre que o teste treponêmico confirma, mas na gestante não se espera por ele para a primeira dose.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rastreio na primeira consulta, no terceiro trimestre e no parto; teste treponêmico confirma, VDRL quantifica e monitora.</li>
<li>Na gestante, iniciar o tratamento com o primeiro teste positivo, sem esperar confirmação.</li>
<li>Penicilina benzatina é a única droga que trata o feto: 2,4 milhões em dose única na recente; 7,2 milhões em três doses na tardia ou ignorada.</li>
<li>Gestante tratada sem penicilina é considerada não tratada; o recém-nascido é tratado como sífilis congênita.</li>
<li>Alergia: dessensibilização hospitalar e penicilina; tratar o parceiro; VDRL mensal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a eritromicina não é aceita para tratar a sífilis na gestante? <details><summary>Resposta</summary>Porque não atravessa a placenta de forma confiável e não trata o feto; a gestante é considerada não tratada.</details></li>
<li>Qual é o esquema de penicilina para a sífilis latente de duração ignorada? <details><summary>Resposta</summary>Três doses semanais de 2,4 milhões de unidades de penicilina benzatina, 7,2 milhões no total.</details></li>
<li>O que fazer com a gestante alérgica à penicilina? <details><summary>Resposta</summary>Dessensibilização em ambiente hospitalar, com doses orais crescentes, seguida do esquema completo de penicilina benzatina.</details></li>
</ol>
`,

"sirio2026#73": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a nomenclatura atual da inserção placentária baseada no ultrassom transvaginal.</li>
<li>Reconhecer os fatores de risco e a apresentação da placenta prévia.</li>
<li>Planejar o seguimento e a via de parto conforme a distância do bordo ao orifício interno.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Placenta prévia</dt>
<dd>Placenta que cobre o orifício interno do colo, total ou parcialmente, após 16 semanas.</dd>
<dt>Placenta baixa</dt>
<dd>Bordo placentário a menos de 2 cm do orifício interno, sem cobri-lo.</dd>
<dt>Migração placentária</dt>
<dd>Afastamento aparente do bordo placentário em relação ao colo ao longo da gestação, pelo crescimento do segmento inferior.</dd>
<dt>Acretismo</dt>
<dd>Invasão anormal do miométrio pelas vilosidades; acompanha a prévia em útero com cesáreas anteriores.</dd>
</dl>
<h4>O essencial</h4>
<p>Até pouco tempo a placenta prévia era graduada em total, parcial, marginal e lateral, com base no toque e na relação com o colo dilatado. A classificação dependia do examinador e do momento do parto, e por isso foi substituída por uma nomenclatura binária medida no <strong>ultrassom transvaginal</strong>: <strong>prévia</strong> quando o tecido cobre o orifício interno, <strong>baixa</strong> quando o bordo fica a menos de 2 cm sem cobrir, e <strong>normal</strong> quando a distância é de 2 cm ou mais.</p>
<p>A placenta prévia ocorre em cerca de 1 em 200 gestações a termo e tem como fatores de risco as cesáreas anteriores, a curetagem, a multiparidade, a idade avançada, o tabagismo e a gemelaridade. O quadro é sangramento vermelho vivo, indolor, de início súbito e sem hipertonia, muitas vezes recorrente, a partir do final do segundo trimestre. O toque vaginal é proibido até a localização da placenta, pelo risco de hemorragia maciça.</p>
<p>O seguimento depende do diagnóstico no segundo trimestre: a maioria das placentas baixas ou prévias vistas às 20 semanas se normaliza até o termo, e por isso o exame se repete às 32 e às 36 semanas. A via de parto segue a distância final: prévia é cesárea eletiva entre 36 e 37 semanas; placenta baixa com bordo entre 1 e 2 cm permite tentativa de parto vaginal em serviço com banco de sangue, e abaixo de 1 cm a maioria dos protocolos indica cesárea.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Memorize o corte de 2 cm: cobre o orifício é prévia, não cobre mas está a menos de 2 cm é baixa, 2 cm ou mais é normal. Os termos marginal, lateral e centro-parcial são distratores da nomenclatura antiga. E não esqueça: diante de sangramento do terceiro trimestre, ultrassom antes do toque.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Nomenclatura atual: prévia (cobre o orifício), baixa (bordo a menos de 2 cm), normal (2 cm ou mais).</li>
<li>Fatores de risco: cesáreas prévias, curetagens, multiparidade, idade, tabagismo, gemelaridade.</li>
<li>Clínica: sangramento vivo, indolor, útero relaxado, feto bem; toque proibido antes do ultrassom.</li>
<li>Repetir ultrassom às 32 e 36 semanas; a migração normaliza a maioria dos casos precoces.</li>
<li>Via de parto: prévia é cesárea 36 a 37 semanas; baixa entre 1 e 2 cm pode tentar vaginal; sangramento ativo é cesárea imediata.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual distância define placenta baixa na nomenclatura atual? <details><summary>Resposta</summary>Bordo placentário a menos de 2 cm do orifício interno do colo, sem cobri-lo.</details></li>
<li>Por que a classificação antiga em total, parcial e marginal foi abandonada? <details><summary>Resposta</summary>Porque dependia do toque e da dilatação do colo no momento do exame, com baixa reprodutibilidade.</details></li>
<li>Qual é a via de parto para a placenta prévia e com que idade gestacional? <details><summary>Resposta</summary>Cesárea eletiva entre 36 e 37 semanas, antecipada em caso de sangramento ativo.</details></li>
</ol>
`,

"sirio2026#74": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a galactocele e diferenciá-la da mastite e do abscesso mamário.</li>
<li>Descrever a conduta conservadora e as indicações de punção.</li>
<li>Revisar as complicações mamárias da lactação e seu manejo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Galactocele</dt>
<dd>Cisto de retenção de leite por obstrução ductal, indolor, móvel e sem inflamação; a lesão benigna mais comum da mama lactante.</dd>
<dt>Ingurgitamento</dt>
<dd>Mamas cheias, tensas e dolorosas por acúmulo de leite e edema, bilateral, nos primeiros dias; trata-se com esvaziamento.</dd>
<dt>Mastite puerperal</dt>
<dd>Inflamação com área quente, vermelha e dolorosa, febre e mal-estar, em geral por Staphylococcus aureus que entra por fissuras.</dd>
<dt>Abscesso mamário</dt>
<dd>Coleção de pus, flutuante, que complica a mastite não tratada; exige drenagem por punção guiada ou cirúrgica.</dd>
</dl>
<h4>O essencial</h4>
<p>A mama lactante produz um espectro de queixas que se distinguem por dor, sinais inflamatórios e febre. O <strong>ingurgitamento</strong> é bilateral, tenso e doloroso, nos primeiros dias, e se resolve com mamadas frequentes, ordenha e compressas. O <strong>ducto obstruído</strong> é um nódulo doloroso localizado, sem febre, que cede com massagem e esvaziamento. A <strong>mastite</strong> acrescenta calor, rubor, febre e mal-estar, e se trata com antibiótico antiestafilocócico (cefalexina) por 10 a 14 dias, analgesia e manutenção da amamentação. O <strong>abscesso</strong> é a mastite que flutua e exige drenagem.</p>
<p>A <strong>galactocele</strong> é diferente de todos: um nódulo <strong>indolor</strong>, amolecido, móvel, sem sinais flogísticos e sem febre, que surge quando um ducto se obstrui e o leite se acumula atrás dele. O ultrassom mostra cisto de conteúdo variável, de anecoico a heterogêneo, às vezes com nível entre gordura e água. Como é benigna e assintomática, a conduta é <strong>conservadora</strong>: manter a amamentação, que favorece a drenagem, e observar; a maioria regride com a lactação ou após o desmame.</p>
<p>A punção aspirativa com agulha fina entra quando há dor, desconforto por volume, crescimento ou dúvida diagnóstica; a saída de leite confirma o diagnóstico e esvazia o cisto, embora ele possa recidivar. Biópsia por agulha grossa fica para nódulo sólido suspeito. Supressão da lactação com cabergolina e antibiótico não têm indicação, porque não há infecção nem motivo para interromper a amamentação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Nódulo na mama de quem amamenta, sem dor, sem vermelhidão e sem febre, com cisto no ultrassom, é galactocele e se observa. Se a prova acrescenta dor, calor e febre, vira mastite e a resposta é antibiótico com amamentação mantida; se acrescenta flutuação, vira abscesso e a resposta é drenar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Galactocele: cisto de leite por ducto obstruído, indolor, sem inflamação, benigno.</li>
<li>Conduta: manter a amamentação e observar; punção só se dor, volume, crescimento ou dúvida.</li>
<li>Mastite: dor, calor, rubor e febre; cefalexina 10 a 14 dias, amamentação mantida.</li>
<li>Abscesso: flutuação; drenagem por punção guiada ou cirúrgica.</li>
<li>Cabergolina e antibiótico não têm lugar na galactocele.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que diferencia a galactocele da mastite ao exame clínico? <details><summary>Resposta</summary>A galactocele é indolor, sem calor, rubor ou febre; a mastite tem área quente, vermelha, dolorosa e febre.</details></li>
<li>Qual é a conduta inicial diante de uma galactocele típica e assintomática? <details><summary>Resposta</summary>Controle clínico, com manutenção da amamentação e reavaliação; sem punção, antibiótico ou supressão da lactação.</details></li>
<li>Quando a punção com agulha fina está indicada na galactocele? <details><summary>Resposta</summary>Quando há dor, desconforto por volume, crescimento ou dúvida diagnóstica; a saída de leite confirma e alivia.</details></li>
</ol>
`,

"sirio2026#76": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o descolamento prematuro de placenta pela tríade de dor, hipertonia e sangramento.</li>
<li>Diferenciar as causas de sangramento do terceiro trimestre.</li>
<li>Definir a conduta conforme a vitalidade fetal e a estabilidade materna.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Descolamento prematuro de placenta</dt>
<dd>Separação da placenta normalmente inserida antes do nascimento, após 20 semanas, por hemorragia decidual.</dd>
<dt>Hematoma retroplacentário</dt>
<dd>Coleção de sangue entre a placenta e a parede uterina, que irrita o miométrio e descola progressivamente a placenta.</dd>
<dt>Útero de Couvelaire</dt>
<dd>Infiltração hemorrágica do miométrio no descolamento grave, com útero arroxeado e hipotônico após o parto.</dd>
<dt>Hemorragia oculta</dt>
<dd>Sangramento retido atrás da placenta, sem exteriorização; o volume visível não reflete a perda.</dd>
</dl>
<h4>O essencial</h4>
<p>O descolamento prematuro de placenta complica cerca de 1% das gestações e é a principal causa de óbito perinatal por hemorragia. Seu fator de risco dominante é a <strong>hipertensão</strong>, crônica ou gestacional; seguem-se o trauma abdominal, o tabagismo, a cocaína, a rotura prematura de membranas, a descompressão súbita do polidrâmnio, a gemelaridade e o antecedente de descolamento, que multiplica o risco por dez.</p>
<p>O quadro é <strong>dor abdominal súbita</strong> e contínua, <strong>hipertonia uterina</strong> (útero lenhoso, com altura maior que a esperada pelo acúmulo de sangue), sangramento vaginal escuro ou vivo em 80% dos casos e <strong>sofrimento fetal</strong>, de taquicardia a bradicardia e óbito. Em 20% a hemorragia é oculta, e a gravidade se mede pela clínica materna e pela vitalidade fetal, não pelo sangue no forro.</p>
<p>A conduta começa pela estabilização materna com dois acessos, cristaloide, hemoderivados e correção da coagulopatia, com sondagem vesical e exames de coagulação. Com <strong>feto vivo</strong> e viável, a resolução é imediata, quase sempre por cesárea, salvo se o parto vaginal for iminente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipertensa com dor súbita, útero duro e sangramento é descolamento, e o sofrimento fetal confirma. A placenta prévia é o espelho: indolor, útero mole, feto bem, cesáreas prévias. Vasa prévia sangra com a rotura da bolsa e o feto bradicardiza; rotura uterina ocorre em útero com cicatriz, em trabalho de parto, com a apresentação que sobe.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fator de risco principal: hipertensão; depois trauma, tabaco, cocaína, rotura de membranas, antecedente.</li>
<li>Clínica: dor súbita, hipertonia, altura uterina aumentada, sangramento (oculto em 20%), sofrimento fetal.</li>
<li>Diagnóstico clínico; ultrassom só exclui prévia e não deve atrasar a conduta.</li>
<li>Estabilizar a mãe e corrigir coagulopatia; feto vivo, cesárea imediata; feto morto, parto vaginal com amniotomia se mãe estável.</li>
<li>Complicações: coagulopatia de consumo, atonia, útero de Couvelaire, insuficiência renal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o principal fator de risco do descolamento prematuro de placenta? <details><summary>Resposta</summary>A hipertensão arterial, crônica ou gestacional.</details></li>
<li>Por que o volume de sangramento vaginal não mede a gravidade do descolamento? <details><summary>Resposta</summary>Porque em até 20% dos casos a hemorragia é oculta, retida atrás da placenta; a gravidade se mede pela clínica materna e pela vitalidade fetal.</details></li>
<li>Qual é a via de parto preferida no descolamento com feto morto e mãe estável? <details><summary>Resposta</summary>Parto vaginal com amniotomia, que reduz a pressão intrauterina e a passagem de tromboplastina.</details></li>
</ol>
`,

"sirio2026#77": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os cinco componentes do índice de Bishop e sua pontuação.</li>
<li>Usar o índice para escolher entre indução direta e preparo cervical.</li>
<li>Reconhecer indicações e métodos de indução do trabalho de parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Índice de Bishop</dt>
<dd>Escore de 0 a 13 que soma dilatação, esvaecimento, consistência e posição do colo e altura da apresentação.</dd>
<dt>Colo favorável</dt>
<dd>Bishop de 8 ou mais (alguns usam 6): a indução com ocitocina tem probabilidade de sucesso semelhante ao parto espontâneo.</dd>
<dt>Preparo cervical</dt>
<dd>Amadurecimento do colo desfavorável com misoprostol, dinoprostona ou balão (sonda de Foley), antes da ocitocina.</dd>
<dt>Taquissistolia</dt>
<dd>Mais de cinco contrações em dez minutos, complicação da ocitocina e do misoprostol, que pode causar sofrimento fetal.</dd>
</dl>
<h4>O essencial</h4>
<p>O índice de Bishop, publicado em 1964, continua a ser a ferramenta clínica para avaliar se o colo está pronto para a indução. São cinco parâmetros: <strong>dilatação</strong> (0 cm, 1 a 2, 3 a 4, 5 ou mais, pontuando 0 a 3), <strong>esvaecimento</strong> (0 a 30%, 40 a 50%, 60 a 70%, 80% ou mais, 0 a 3), <strong>altura da apresentação</strong> (De Lee −3, −2, −1 a 0, +1 ou +2, 0 a 3), <strong>consistência</strong> (firme, média, amolecida, 0 a 2) e <strong>posição</strong> do colo (posterior, central, anterior, 0 a 2). O máximo é 13. Membranas, ângulo subpúbico e peso fetal não entram.</p>
<p>O escore orienta o método. Com colo <strong>favorável</strong>, Bishop de 8 ou mais, a ocitocina venosa em infusão crescente, com ou sem amniotomia, costuma bastar, e a taxa de cesárea é parecida com a do trabalho de parto espontâneo.</p>
<p>As indicações de indução são as situações em que continuar a gestação é mais perigoso que interrompê-la: pré-eclâmpsia, rotura de membranas a termo, gestação de 41 semanas ou mais, diabetes com repercussão fetal, restrição de crescimento com Doppler alterado, óbito fetal e corioamnionite. As contraindicações são as mesmas do parto vaginal: placenta prévia, apresentação anômala, cicatriz uterina corporal, herpes genital ativo. Durante a indução, a vigilância fetal é contínua, e a taquissistolia se trata reduzindo a ocitocina ou retirando o misoprostol.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a prova pergunta o que o Bishop avalia, elimine qualquer item que não seja do colo ou da altura da apresentação: membranas, ângulo subpúbico, peso fetal e paridade não pontuam. Quando pergunta o método, a regra é colo favorável recebe ocitocina, colo desfavorável recebe misoprostol ou balão, e útero com cesárea anterior recebe balão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Bishop: dilatação, esvaecimento, altura da apresentação, consistência e posição do colo; máximo 13.</li>
<li>Favorável (8 ou mais): ocitocina com ou sem amniotomia; desfavorável (menos de 6): preparo cervical.</li>
<li>Preparo: misoprostol 25 mcg a cada 4 a 6 h, dinoprostona ou balão; balão se cesárea anterior.</li>
<li>Indicações: pré-eclâmpsia, bolsa rota a termo, 41 semanas, diabetes, restrição, óbito fetal, corioamnionite.</li>
<li>Vigiar taquissistolia e sofrimento fetal; reduzir ocitocina ou retirar misoprostol.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os cinco parâmetros do índice de Bishop? <details><summary>Resposta</summary>Dilatação, esvaecimento, consistência e posição do colo, e altura da apresentação.</details></li>
<li>Qual método de preparo cervical é preferido na gestante com cesárea anterior e por quê? <details><summary>Resposta</summary>O balão transcervical, porque as prostaglandinas aumentam o risco de rotura do útero com cicatriz.</details></li>
<li>O que define um colo favorável à indução pelo índice de Bishop? <details><summary>Resposta</summary>Escore de 8 ou mais, com chance de sucesso da ocitocina semelhante à do trabalho de parto espontâneo.</details></li>
</ol>
`,

"sirio2026#79": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar as categorias dos critérios de elegibilidade da OMS para contraceptivos.</li>
<li>Identificar as condições que contraindicam o estrogênio.</li>
<li>Escolher o método para a mulher com doença cardiovascular ou fator de risco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Categoria 1</dt>
<dd>Sem restrição ao uso do método.</dd>
<dt>Categoria 2</dt>
<dd>Vantagens superam os riscos; usar com acompanhamento.</dd>
<dt>Categoria 3</dt>
<dd>Riscos superam as vantagens; usar só se não houver outra opção aceitável.</dd>
<dt>Categoria 4</dt>
<dd>Risco inaceitável; método contraindicado.</dd>
<dt>Métodos combinados</dt>
<dd>Pílula, injetável mensal, adesivo e anel vaginal; todos contêm estrogênio e compartilham as mesmas contraindicações.</dd>
</dl>
<h4>O essencial</h4>
<p>Os critérios médicos de elegibilidade da OMS classificam cada condição clínica para cada método em quatro categorias.</p>
<p>A <strong>hipertensão</strong> é um caso instrutivo. Hipertensa controlada com medicação ou com pressão de 140 a 159 por 90 a 99 é categoria <strong>3</strong> para combinados; pressão de 160 × 100 ou mais, ou doença vascular, é categoria <strong>4</strong>. Já os métodos <strong>só de progestagênio</strong> são categoria 1 ou 2 em todas essas faixas: pílula de desogestrel, implante de etonogestrel e DIU de levonorgestrel são categoria 1, e o injetável trimestral é categoria 2 na hipertensão leve e 3 na grave, pelo efeito discreto sobre lipídios e pressão. O DIU de cobre é categoria 1, sem interferência metabólica.</p>
<p>Outras condições seguem a mesma lógica. Na enxaqueca com aura, o estrogênio é categoria 4 e o progestagênio isolado, 2. No pós-parto, o estrogênio é evitado nas primeiras seis semanas se há amamentação e nas três primeiras em qualquer caso, pelo risco trombótico. Na obesidade com IMC acima de 35, os combinados são categoria 2, com atenção ao risco somado de outros fatores. A regra prática é: quando houver qualquer dúvida cardiovascular, tirar o estrogênio e manter a eficácia com progestagênio isolado ou DIU.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante de hipertensa, enxaqueca com aura, trombose prévia ou fumante acima de 35 anos pedindo contracepção, risque todas as opções com estrogênio, inclusive adesivo e anel, que não são "mais seguros" por serem transdérmicos. Sobram pílula de progestagênio, implante, DIU hormonal e DIU de cobre.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>OMS: categorias 1 e 2 permitem; 3 restringe; 4 contraindica.</li>
<li>Estrogênio dos combinados eleva fatores de coagulação e pressão; restrições iguais para pílula, injetável mensal, adesivo e anel.</li>
<li>Hipertensão controlada ou leve: combinados categoria 3; grave ou com doença vascular: categoria 4.</li>
<li>Progestagênio isolado (pílula, implante, DIU hormonal) e DIU de cobre: categoria 1 ou 2 na hipertensa.</li>
<li>Mesma lógica para enxaqueca com aura, trombose prévia, tabagismo acima de 35 anos e pós-parto precoce.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que categoria da OMS está a pílula combinada para a hipertensa controlada com medicação? <details><summary>Resposta</summary>Categoria 3: os riscos superam os benefícios; usar só na falta de outra opção.</details></li>
<li>O adesivo transdérmico é mais seguro que a pílula para a hipertensa? <details><summary>Resposta</summary>Não; contém estrogênio e tem a mesma categoria de restrição dos demais combinados.</details></li>
<li>Quais métodos hormonais são categoria 1 para a mulher hipertensa? <details><summary>Resposta</summary>Pílula de progestagênio isolado, implante de etonogestrel e DIU de levonorgestrel.</details></li>
</ol>
`,

/* --- Volume 2 · GO · Sírio-Libanês 2027 (go66–go80) ----------------------------------- */
"sirio2027#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Comparar eficácia e segurança dos métodos de analgesia no trabalho de parto.</li>
<li>Descrever a analgesia neuroaxial, suas vantagens e seus efeitos adversos.</li>
<li>Posicionar os métodos não farmacológicos à luz da evidência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Analgesia neuroaxial</dt>
<dd>Peridural, raquianestesia ou combinada; bloqueio da dor com anestésico local em baixa concentração e opioide no espaço peridural ou subaracnóideo.</dd>
<dt>Opioides sistêmicos</dt>
<dd>Meperidina, fentanil ou remifentanil por via venosa ou muscular; alívio parcial, com sedação e depressão neonatal.</dd>
<dt>Óxido nitroso</dt>
<dd>Gás inalado a 50% com oxigênio, autoadministrado; analgesia leve, seguro para mãe e feto.</dd>
<dt>Métodos não farmacológicos</dt>
<dd>Imersão em água, deambulação, massagem, relaxamento, acupuntura e TENS; seguros, melhoram a satisfação, com evidência analgésica limitada.</dd>
</dl>
<h4>O essencial</h4>
<p>A dor do trabalho de parto é uma das mais intensas que a mulher experimenta, e aliviá-la é parte do cuidado, não um luxo. A revisão Cochrane que agrupou todas as revisões sistemáticas sobre o tema separa os métodos em três grupos: os que <strong>funcionam</strong> (analgesia neuroaxial e, em menor grau, óxido nitroso e opioides), os que <strong>podem funcionar</strong> (imersão em água, relaxamento, acupuntura, massagem) e os com <strong>evidência insuficiente</strong> (hipnose, TENS, aromaterapia).</p>
<p>A <strong>analgesia neuroaxial</strong> é o padrão: alivia a dor melhor que qualquer outro método, com maior satisfação materna, e pode ser iniciada em qualquer fase do trabalho de parto a pedido da mulher, sem esperar dilatação mínima.</p>
<p>Os <strong>opioides sistêmicos</strong> dão alívio modesto e causam náusea, vômito, sonolência e depressão respiratória neonatal, sobretudo a meperidina; o remifentanil em bomba controlada pela paciente é a opção quando a neuroaxial é contraindicada. O <strong>óxido nitroso</strong> é seguro, de início rápido e reversível, mas fraco. As contraindicações da neuroaxial são coagulopatia, plaquetas abaixo de 70 mil, infecção no local, hipertensão intracraniana e recusa, e nesses casos os demais métodos ganham espaço.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A hierarquia que a prova cobra é: neuroaxial é mais eficaz e mais satisfatória que opioides; opioides causam efeitos adversos maternos e neonatais; óxido nitroso é seguro, mas fraco; métodos não farmacológicos são seguros e bem-vindos, mas a evidência de que tiram a dor é fraca. Nenhuma dilatação mínima é exigida para a peridural.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Neuroaxial: método mais eficaz e com maior satisfação; a pedido da mulher, em qualquer fase.</li>
<li>Efeitos da peridural: hipotensão, febre, retenção urinária, segundo período mais longo, mais ocitocina e fórcipe; sem aumento de cesárea.</li>
<li>Opioides sistêmicos: alívio modesto, náusea, sedação, depressão neonatal.</li>
<li>Óxido nitroso: seguro, autoadministrado, potência baixa.</li>
<li>Não farmacológicos: seguros, melhoram a satisfação, evidência analgésica limitada e inconsistente.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o método de analgesia obstétrica com maior eficácia e satisfação materna? <details><summary>Resposta</summary>A analgesia neuroaxial (peridural ou combinada), superior aos opioides sistêmicos e ao óxido nitroso.</details></li>
<li>A peridural aumenta a taxa de cesárea? <details><summary>Resposta</summary>Não; prolonga um pouco o segundo período e aumenta o uso de ocitocina e de parto instrumental, mas não a cesárea.</details></li>
<li>Como a evidência classifica a eficácia analgésica dos métodos não farmacológicos? <details><summary>Resposta</summary>Como limitada e inconsistente: são seguros e aumentam a satisfação, mas os estudos são pequenos e heterogêneos.</details></li>
</ol>
`,

"sirio2027#62": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o trabalho de parto fisiológico e evitar intervenções sem indicação.</li>
<li>Indicar a analgesia peridural pelo pedido materno e descrever a técnica.</li>
<li>Saber quando amniotomia, ocitocina e tocólise têm lugar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fase ativa do trabalho de parto</dt>
<dd>A partir de 5 cm de dilatação (OMS, 2018) ou 4 cm nos critérios antigos, com contrações regulares; progressão esperada de cerca de 1 cm por hora, com grande variação.</dd>
<dt>Peridural de baixa dose</dt>
<dd>Bupivacaína ou ropivacaína a 0,0625 a 0,125% com fentanil, em bolus ou infusão contínua, preservando a mobilidade.</dd>
<dt>Amniotomia</dt>
<dd>Rotura artificial das membranas; acelera o parto em progressão lenta, mas não é rotina no trabalho de parto normal.</dd>
<dt>Taquissistolia</dt>
<dd>Mais de cinco contrações em dez minutos; risco da ocitocina usada sem indicação.</dd>
</dl>
<h4>O essencial</h4>
<p>O trabalho de parto que progride com dinâmica adequada, dilatação avançando, bolsa íntegra, feto em boa vitalidade e líquido claro não precisa de nenhuma intervenção obstétrica. A OMS e o ACOG insistem em <strong>limitar as intervenções</strong> no parto de baixo risco: nada de amniotomia de rotina, ocitocina de rotina, jejum, tricotomia, enema ou posição imposta. O que a mulher precisa é de apoio contínuo, liberdade de movimento, hidratação e alívio da dor quando desejar.</p>
<p>A <strong>dor</strong> é indicação por si só. O ACOG afirma que, na ausência de contraindicação, o pedido da mulher é motivo suficiente para a analgesia, e que não existe dilatação mínima para iniciá-la; a peridural precoce, com 2 ou 3 cm, não aumenta cesárea nem prolonga de forma relevante o trabalho de parto.</p>
<p>As outras intervenções têm indicações precisas. A <strong>amniotomia</strong> é útil quando a progressão é lenta (menos de 1 cm em duas horas na fase ativa) ou para avaliar o líquido em caso de alteração da frequência cardíaca fetal; de rotina, só acrescenta risco de infecção e de compressão do cordão. A <strong>ocitocina</strong> é para hipoatividade uterina com progressão insatisfatória, começando com dose baixa e titulando até três a cinco contrações em dez minutos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando o enunciado descreve um trabalho de parto normal e a única queixa é dor, a resposta é analgesia peridural; qualquer outra conduta é intervenção sem indicação. O examinador quer saber se você resiste a romper a bolsa e a dar ocitocina "para ajudar" num parto que já está ajudando a si mesmo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Parto fisiológico: progressão adequada, feto bem, líquido claro; nenhuma intervenção de rotina.</li>
<li>Dor é indicação de analgesia; o pedido da mulher basta; sem dilatação mínima.</li>
<li>Peridural de baixa dose com opioide preserva mobilidade e não aumenta cesárea.</li>
<li>Amniotomia e ocitocina só para progressão lenta ou hipoatividade uterina.</li>
<li>Tocólise é para prematuridade; anti-inflamatórios não tratam a dor do parto.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Existe dilatação mínima para iniciar a analgesia peridural? <details><summary>Resposta</summary>Não; o pedido materno é indicação suficiente em qualquer fase, e a peridural precoce não aumenta a cesárea.</details></li>
<li>Quando a amniotomia tem indicação no trabalho de parto? <details><summary>Resposta</summary>Na progressão lenta da fase ativa ou para avaliar o líquido diante de alteração da frequência cardíaca fetal; nunca de rotina.</details></li>
<li>Por que a ocitocina não deve ser dada num trabalho de parto com dinâmica adequada? <details><summary>Resposta</summary>Porque não há hipoatividade a corrigir e ela aumenta a dor e o risco de taquissistolia e sofrimento fetal.</details></li>
</ol>
`,

"sirio2027#64": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Montar o diagnóstico diferencial do sangramento do terceiro trimestre.</li>
<li>Reconhecer a placenta prévia pelo quadro e pelos fatores de risco.</li>
<li>Descrever a conduta na prévia com sangramento e a investigação de acretismo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hemorragia anteparto</dt>
<dd>Sangramento genital após 20 semanas e antes do parto; prévia e descolamento são as causas graves, e as causas cervicais e vaginais, as benignas.</dd>
<dt>Vasa prévia</dt>
<dd>Vasos fetais desprotegidos que cruzam as membranas sobre o colo; rompem com a bolsa e sangram sangue fetal.</dd>
<dt>Rotura uterina</dt>
<dd>Solução de continuidade do miométrio, em geral sobre cicatriz de cesárea, durante o trabalho de parto.</dd>
<dt>Espectro do acretismo placentário</dt>
<dd>Placenta acreta, increta e percreta; invasão do miométrio associada a prévia e cesáreas anteriores.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante do sangramento do terceiro trimestre, três perguntas organizam o raciocínio: há <strong>dor</strong>? o <strong>útero</strong> está relaxado ou hipertônico? como está o <strong>feto</strong>? A <strong>placenta prévia</strong> sangra sem dor, com útero mole, dinâmica ausente e feto em boa vitalidade, e o sangue é vermelho vivo, muitas vezes em episódios repetidos e autolimitados, o primeiro deles em geral após 28 semanas.</p>
<p>Os fatores de risco da prévia são as agressões ao endométrio e o aumento da superfície placentária: <strong>cesáreas anteriores</strong> (o risco cresce com cada cicatriz), curetagens, multiparidade, idade acima de 35 anos, tabagismo, gemelaridade e reprodução assistida.</p>
<p>A conduta no episódio de sangramento começa pela estabilização e pela confirmação com ultrassom transvaginal, sem toque. Com sangramento controlado e feto prematuro, a mulher fica internada, recebe corticoide se abaixo de 34 semanas e imunoglobulina anti-D se Rh negativo, e o parto é programado por cesárea entre 36 e 37 semanas. Sangramento volumoso, instabilidade materna ou sofrimento fetal indicam cesárea imediata em qualquer idade gestacional.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>"Sangramento vermelho vivo, indolor, tônus normal, feto bem, cesáreas anteriores" é placenta prévia em qualquer prova. Se o enunciado acrescentar bolsa rota recente e bradicardia fetal, vire para vasa prévia; se acrescentar dor, hipertonia e hipertensão, vire para descolamento; se acrescentar trabalho de parto com dor que cede e apresentação que sobe, vire para rotura uterina.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Prévia: sangramento indolor, útero mole, feto bem, episódios repetidos; descolamento: dor, hipertonia, sofrimento fetal.</li>
<li>Vasa prévia: sangra com a bolsa rota e o feto bradicardiza; rotura uterina: cicatriz, trabalho de parto, apresentação que sobe.</li>
<li>Fatores de risco da prévia: cesáreas, curetagens, multiparidade, idade, tabaco, gemelar.</li>
<li>Prévia sobre cicatriz: investigar acretismo com Doppler e ressonância.</li>
<li>Conduta: ultrassom transvaginal sem toque; estável, cesárea 36 a 37 semanas; instável ou sofrimento fetal, cesárea imediata.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que três perguntas separam placenta prévia de descolamento à beira do leito? <details><summary>Resposta</summary>Se há dor, se o útero está relaxado ou hipertônico e como está a vitalidade fetal; a prévia é indolor, com útero mole e feto bem.</details></li>
<li>Por que a placenta prévia em mulher com cesáreas anteriores exige investigação adicional? <details><summary>Resposta</summary>Pelo risco de acretismo placentário, que muda o planejamento para cesárea-histerectomia em centro de referência.</details></li>
<li>Qual exame confirma a placenta prévia e o que é proibido antes dele? <details><summary>Resposta</summary>O ultrassom transvaginal; o toque vaginal é proibido até que a placenta seja localizada.</details></li>
</ol>
`,

"sirio2027#66": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o abortamento pelo exame do colo e pelo ultrassom.</li>
<li>Diferenciar ameaça, incompleto, completo, retido, inevitável e infectado.</li>
<li>Descrever as opções de esvaziamento uterino e os cuidados associados.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Abortamento</dt>
<dd>Interrupção da gestação antes de 20 a 22 semanas ou com feto abaixo de 500 g; ocorre em 10 a 15% das gestações reconhecidas.</dd>
<dt>Aborto incompleto</dt>
<dd>Eliminação parcial do conteúdo ovular, com colo pérvio, sangramento persistente e restos na cavidade.</dd>
<dt>Aborto retido</dt>
<dd>Óbito embrionário com colo fechado e sem eliminação, diagnosticado pelo ultrassom.</dd>
<dt>Aspiração manual intrauterina</dt>
<dd>Esvaziamento por cânula e seringa a vácuo; método de escolha abaixo de 12 semanas, ambulatorial e com menos complicações que a curetagem.</dd>
</dl>
<h4>O essencial</h4>
<p>O exame do <strong>colo</strong> e o <strong>ultrassom</strong> classificam o abortamento. Colo <strong>fechado</strong> com embrião vivo é <strong>ameaça</strong>, e a conduta é expectante, com orientações; colo fechado com embrião sem batimentos ou saco vazio é <strong>aborto retido</strong>; colo fechado após sangramento que cessou, com cavidade vazia (endométrio abaixo de 15 mm), é <strong>aborto completo</strong>.</p>
<p>No <strong>aborto incompleto</strong> há três caminhos. A <strong>aspiração manual intrauterina</strong> é o método recomendado pela OMS e pelo Ministério da Saúde abaixo de 12 semanas: rápida, ambulatorial, com anestesia local e menor risco de perfuração e sinéquias que a curetagem. O <strong>misoprostol</strong> (400 a 800 mcg vaginal ou sublingual) é a opção medicamentosa, com sucesso acima de 90% em alguns dias, para a mulher estável que prefere evitar o procedimento.</p>
<p>Os cuidados são os mesmos em qualquer via: tipagem sanguínea com imunoglobulina anti-D para a Rh negativa não sensibilizada, hemograma, analgesia, contracepção imediata (o DIU pode ser inserido logo após o esvaziamento sem infecção) e acolhimento, porque a perda gestacional é um luto. A investigação de causas só se justifica a partir de duas ou três perdas consecutivas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Colo aberto mais restos no ultrassom é aborto incompleto, e a prova gosta de oferecer "ameaça" como distrator, que exige colo fechado e embrião vivo. A conduta de escolha abaixo de 12 semanas é a aspiração manual intrauterina, e o misoprostol e a expectação são aceitáveis na paciente estável.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Colo fechado: ameaça (embrião vivo), retido (sem batimentos) ou completo (cavidade vazia após sangramento).</li>
<li>Colo pérvio: inevitável (em expulsão) ou incompleto (restos heterogêneos e sangramento).</li>
<li>Infectado: febre, útero doloroso, secreção fétida; antibiótico e esvaziamento imediato.</li>
<li>Incompleto abaixo de 12 semanas: aspiração manual intrauterina; misoprostol ou expectação se estável.</li>
<li>Anti-D para Rh negativa, contracepção imediata, acolhimento; investigar causas após duas ou três perdas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que diferencia a ameaça de abortamento do aborto incompleto? <details><summary>Resposta</summary>Na ameaça o colo está fechado e o embrião vivo; no incompleto o colo está pérvio e há restos heterogêneos na cavidade com sangramento.</details></li>
<li>Qual é o método de esvaziamento de escolha no aborto incompleto abaixo de 12 semanas? <details><summary>Resposta</summary>A aspiração manual intrauterina, por ser ambulatorial, rápida e com menos perfurações e sinéquias que a curetagem.</details></li>
<li>Que cuidado específico a mulher Rh negativa recebe após o abortamento? <details><summary>Resposta</summary>Imunoglobulina anti-D, se não sensibilizada, para prevenir aloimunização.</details></li>
</ol>
`,

"sirio2027#67": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a prevenção da transmissão vertical do HIV no pré-natal, no parto e no puerpério.</li>
<li>Aplicar os cortes de carga viral que definem via de parto e zidovudina venosa.</li>
<li>Reconhecer as condutas intraparto que reduzem a exposição do recém-nascido.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Carga viral de 34 semanas</dt>
<dd>Dosagem que decide a via de parto e a profilaxia intraparto; deve ser colhida entre 34 e 36 semanas.</dd>
<dt>Zidovudina venosa intraparto</dt>
<dd>AZT 2 mg/kg na primeira hora e 1 mg/kg/hora até o clampeamento; indicado com carga viral detectável ou desconhecida.</dd>
<dt>Cesárea eletiva</dt>
<dd>Cesárea com 38 semanas, com membranas íntegras e fora do trabalho de parto, para carga viral acima de 1.000 cópias ou desconhecida.</dd>
<dt>Profilaxia neonatal</dt>
<dd>Zidovudina oral por quatro semanas para todo exposto; esquema ampliado com lamivudina e raltegravir ou nevirapina para o alto risco.</dd>
</dl>
<h4>O essencial</h4>
<p>Sem intervenção, a transmissão vertical do HIV chega a 25 a 30%; com o pacote completo, cai para menos de 1%. O pacote começa no pré-natal, com teste na primeira consulta, no terceiro trimestre e no parto, e <strong>terapia antirretroviral</strong> para toda gestante, de preferência tenofovir, lamivudina e dolutegravir, iniciada o quanto antes e mantida para a vida. O objetivo é chegar ao terceiro trimestre com carga viral <strong>indetectável</strong>, e a dosagem decisiva é colhida entre <strong>34 e 36 semanas</strong>.</p>
<p>A carga viral de 34 semanas define o parto. <strong>Abaixo de 50 cópias</strong>, indetectável: via de parto obstétrica, sem zidovudina venosa. <strong>Entre 50 e 1.000 cópias</strong>: via obstétrica, mas com <strong>zidovudina venosa</strong> do início do trabalho de parto ao clampeamento.</p>
<p>No parto vaginal da gestante com HIV evitam-se episiotomia, amniotomia, fórcipe e vácuo, e o tempo de bolsa rota é mantido o menor possível, pois cada hora acrescenta risco; o cordão é clampeado sem ordenha, e o recém-nascido é lavado e aspirado com delicadeza.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Grave dois números: 50 e 1.000. Abaixo de 50, nada de AZT venoso; acima de 50, AZT venoso; acima de 1.000, cesárea eletiva com 38 semanas, se a mulher ainda não está em trabalho de parto com bolsa rota. Terapia oral em uso não dispensa o AZT venoso, e a carga do primeiro trimestre não decide nada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Toda gestante com HIV recebe terapia antirretroviral; meta é carga indetectável no terceiro trimestre.</li>
<li>Carga viral de 34 a 36 semanas define a conduta no parto.</li>
<li>Abaixo de 50: via obstétrica sem AZT; 50 a 1.000: via obstétrica com AZT venoso; acima de 1.000 ou desconhecida: AZT venoso e cesárea eletiva às 38 semanas.</li>
<li>Em trabalho de parto avançado ou bolsa rota prolongada, a cesárea perde o benefício; segue via vaginal com AZT.</li>
<li>Evitar episiotomia, amniotomia e instrumentação; AZT oral ao recém-nascido por quatro semanas; aleitamento contraindicado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Com que carga viral a zidovudina venosa intraparto é dispensada? <details><summary>Resposta</summary>Com carga viral indetectável, abaixo de 50 cópias/mL, na dosagem de 34 a 36 semanas.</details></li>
<li>Qual é a conduta quando a carga viral de 34 semanas é de 1.500 cópias e a gestante não está em trabalho de parto? <details><summary>Resposta</summary>Zidovudina venosa e cesárea eletiva às 38 semanas, com membranas íntegras.</details></li>
<li>Por que a terapia antirretroviral oral em uso não substitui a zidovudina venosa no parto? <details><summary>Resposta</summary>Porque o AZT venoso atinge concentrações altas no feto no momento de maior exposição e reduz a transmissão mesmo em quem usa terapia oral com carga detectável.</details></li>
</ol>
`,

"sirio2027#68": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar a candidata ao parto vaginal após cesárea e seus riscos.</li>
<li>Aplicar a regra brasileira para uma e para duas ou mais cesáreas anteriores.</li>
<li>Reconhecer a rotura uterina e as condutas que aumentam seu risco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Parto vaginal após cesárea</dt>
<dd>Tentativa de trabalho de parto em mulher com cesárea anterior; sucesso em 60 a 80% das candidatas bem selecionadas.</dd>
<dt>Rotura uterina</dt>
<dd>Separação completa da cicatriz com comunicação entre as cavidades uterina e peritoneal; emergência com risco de óbito fetal e histerectomia.</dd>
<dt>Incisão segmentar transversa</dt>
<dd>Incisão habitual da cesárea, no segmento inferior; a única que permite tentativa de parto vaginal posterior.</dd>
<dt>Intervalo interpartal</dt>
<dd>Tempo entre a cesárea e o parto seguinte; abaixo de 18 meses o risco de rotura aumenta.</dd>
</dl>
<h4>O essencial</h4>
<p>O útero com cicatriz pode contrair e parir, mas a cicatriz é o ponto fraco. Após <strong>uma cesárea segmentar transversa</strong>, o risco de rotura na tentativa de parto vaginal é de 0,5 a 0,7%, e o sucesso chega a 70 a 80% quando a indicação da cesárea anterior não se repete (apresentação pélvica, sofrimento fetal) e há parto vaginal prévio. Por isso a tentativa é oferecida e incentivada, em hospital com cesárea disponível em 30 minutos, monitorização fetal contínua e anestesia presente.</p>
<p>Com <strong>duas ou mais cesáreas</strong>, o risco de rotura sobe para cerca de 1,5 a 2%, e a diretriz do Ministério da Saúde e da CONITEC (2016) recomenda <strong>cesárea programada</strong>; o ACOG admite a tentativa após duas cesáreas em casos selecionados, mas a recomendação nacional é a que as provas brasileiras cobram. Cicatriz corporal ou em T, rotura prévia e miomectomia com abertura da cavidade são contraindicações absolutas ao trabalho de parto. A cesárea programada é feita às 39 semanas, ou antes se o trabalho de parto começar.</p>
<p>Durante a tentativa de parto vaginal, as prostaglandinas são contraindicadas para preparo cervical, pelo risco de rotura duas a três vezes maior; a indução, quando indicada, usa balão e ocitocina em dose cautelosa, e a condução com ocitocina em útero com duas cicatrizes é evitada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Uma cesárea anterior: pode tentar o parto vaginal, sem prostaglandina. Duas ou mais: no Brasil, cesárea. Se a mulher com duas cicatrizes chega em trabalho de parto, a resposta é cesárea agora, e nunca ocitocina ou amniotomia para "conduzir". Bradicardia fetal súbita em útero com cicatriz é rotura até prova em contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Uma cesárea segmentar: tentativa de parto vaginal, com risco de rotura de 0,5 a 0,7% e sucesso de 70 a 80%.</li>
<li>Duas ou mais cesáreas: cesárea programada pela diretriz brasileira; risco de rotura de 1,5 a 2%.</li>
<li>Contraindicações absolutas: cicatriz corporal ou em T, rotura prévia, miomectomia com abertura da cavidade.</li>
<li>Prostaglandinas contraindicadas no útero com cicatriz; indução com balão e ocitocina cautelosa só após uma cesárea.</li>
<li>Rotura: bradicardia fetal súbita, dor atípica, apresentação que sobe; laparotomia imediata.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o risco de rotura uterina na tentativa de parto vaginal após uma cesárea segmentar? <details><summary>Resposta</summary>Cerca de 0,5 a 0,7%.</details></li>
<li>Qual é a recomendação brasileira para a via de parto após duas cesáreas? <details><summary>Resposta</summary>Cesárea programada, pela diretriz do Ministério da Saúde e da CONITEC de 2016.</details></li>
<li>Qual é o sinal mais frequente de rotura uterina durante o trabalho de parto? <details><summary>Resposta</summary>Bradicardia fetal súbita, seguida de dor atípica, perda da apresentação e instabilidade materna.</details></li>
</ol>
`,

"sirio2027#69": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a investigação e a conduta no óbito fetal intrauterino.</li>
<li>Escolher o método de indução conforme a idade gestacional e o estado do colo.</li>
<li>Reconhecer os riscos da retenção prolongada do feto morto e as contraindicações do misoprostol.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Óbito fetal</dt>
<dd>Morte do concepto a partir de 20 a 22 semanas ou com 500 g, antes da expulsão; diagnóstico pela ausência de batimentos ao ultrassom.</dd>
<dt>Coagulopatia de consumo</dt>
<dd>Queda de fibrinogênio e plaquetas por liberação de tromboplastina do feto retido; rara antes de quatro semanas de retenção.</dd>
<dt>Misoprostol</dt>
<dd>Análogo da prostaglandina E1 que amadurece o colo e induz contrações; dose e intervalo dependem da idade gestacional.</dd>
<dt>Sinal de Spalding</dt>
<dd>Cavalgamento dos ossos do crânio fetal no ultrassom, sinal tardio de óbito, com maceração.</dd>
</dl>
<h4>O essencial</h4>
<p>O óbito fetal se confirma pela ausência de atividade cardíaca no ultrassom, repetida por um segundo examinador quando possível. Antes de qualquer decisão, a mãe é avaliada: pressão arterial, hemograma, coagulograma com fibrinogênio, tipagem, sorologias e teste de Kleihauer-Betke se Rh negativo.</p>
<p>A conduta é <strong>resolver a gestação por via vaginal</strong>, salvo indicação materna de cesárea (placenta prévia, duas ou mais cesáreas, situação transversa). A espera pelo trabalho de parto espontâneo é possível por alguns dias em mulher estável que a deseje, mas a maioria prefere a indução, e a retenção acima de três a quatro semanas traz risco de coagulopatia e de infecção. O método depende do <strong>colo</strong>: desfavorável, com Bishop baixo, pede <strong>misoprostol</strong>; favorável, aceita ocitocina.</p>
<p>Em útero com <strong>cesárea anterior</strong>, o misoprostol é usado com cautela e doses reduzidas no segundo trimestre e evitado no terceiro, com preferência pelo balão transcervical e ocitocina. O balão isolado, sem preparo farmacológico, é opção mecânica em colo desfavorável, mas a ocitocina concomitante em colo impérvio e grosso tem baixa eficácia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Feto morto é parto vaginal, e a prova testa se você resiste à cesárea. Colo impérvio e grosso pede misoprostol; colo favorável pede ocitocina; útero com cesárea prévia troca o misoprostol pelo balão. Esperar semanas pelo trabalho de parto espontâneo expõe a mãe a coagulopatia e infecção.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Confirmar o óbito ao ultrassom e avaliar a mãe: pressão, hemograma, coagulograma, fibrinogênio, tipagem.</li>
<li>Investigar a causa: história, sorologias, autópsia e exame da placenta; metade fica sem causa.</li>
<li>Resolução por via vaginal; cesárea só por indicação materna.</li>
<li>Colo desfavorável: misoprostol (doses maiores que com feto vivo); colo favorável: ocitocina; cesárea anterior: balão.</li>
<li>Retenção acima de três a quatro semanas: risco de coagulopatia e infecção; apoio ao luto e planejamento da próxima gestação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a cesárea não é a conduta no óbito fetal sem indicação materna? <details><summary>Resposta</summary>Porque expõe a mãe aos riscos cirúrgicos sem nenhum benefício fetal; a via vaginal é mais segura.</details></li>
<li>Qual é o método de indução para o óbito fetal com colo impérvio e grosso? <details><summary>Resposta</summary>Misoprostol, que amadurece o colo e desencadeia contrações; a ocitocina entra depois do preparo.</details></li>
<li>Qual é o risco da retenção prolongada do feto morto? <details><summary>Resposta</summary>Coagulopatia de consumo, por liberação de tromboplastina, e infecção, sobretudo após três a quatro semanas.</details></li>
</ol>
`,

"sirio2027#70": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os anti-hipertensivos permitidos na gestação e suas indicações.</li>
<li>Explicar a fetotoxicidade dos inibidores do sistema renina-angiotensina.</li>
<li>Definir metas pressóricas e o tratamento da emergência hipertensiva.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Inibidores da ECA e bloqueadores do receptor de angiotensina</dt>
<dd>Enalapril, captopril, losartana e similares; contraindicados em toda a gestação pela toxicidade renal fetal.</dd>
<dt>Metildopa</dt>
<dd>Agonista alfa-2 central, droga oral de manutenção com maior experiência na gestação; limitada por sonolência e depressão.</dd>
<dt>Nifedipina de liberação lenta</dt>
<dd>Bloqueador de cálcio, primeira linha oral junto com a metildopa; a forma de ação rápida trata a crise.</dd>
<dt>Hidralazina</dt>
<dd>Vasodilatador venoso em bolus de 5 mg a cada 20 minutos para pressão de 160 × 110 ou mais.</dd>
</dl>
<h4>O essencial</h4>
<p>O tratamento da hipertensão na gestação protege a mãe de acidente vascular cerebral e descolamento, sem reverter a pré-eclâmpsia, que só se cura com o parto.</p>
<p>A contraindicação absoluta são os bloqueadores do sistema renina-angiotensina: <strong>inibidores da ECA</strong>, <strong>bloqueadores do receptor de angiotensina</strong> e inibidores diretos da renina. No segundo e terceiro trimestres, eles reduzem a perfusão e a filtração renal do feto, cujo rim depende da angiotensina II, causando oligúria fetal, <strong>oligoâmnio</strong>, hipoplasia pulmonar, contraturas, hipocalvária e insuficiência renal neonatal com anúria, muitas vezes fatal.</p>
<p>A <strong>emergência hipertensiva</strong>, pressão de 160 × 110 ou mais confirmada em 15 minutos, exige redução em minutos a uma hora, sem levar a pressão abaixo de 140 × 90, para não comprometer a perfusão placentária. As opções são <strong>hidralazina</strong> venosa em bolus de 5 mg repetidos a cada 20 minutos até 20 mg, <strong>nifedipina</strong> oral de ação rápida 10 mg a cada 20 a 30 minutos, ou labetalol venoso onde disponível. Nitroprussiato fica para a refratariedade, por curto período, pelo risco de intoxicação fetal por cianeto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Qualquer droga terminada em "pril" ou "sartana" está errada na gestante. As certas são metildopa, nifedipina, anlodipino e os betabloqueadores exceto atenolol para manutenção, e hidralazina ou nifedipina rápida para a crise. A pergunta "qual é contraindicado" tem resposta única: o bloqueador do sistema renina-angiotensina.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Manutenção: metildopa e nifedipina de liberação lenta em primeira linha; anlodipino, metoprolol e carvedilol como opções; atenolol evitado.</li>
<li>Contraindicados: inibidores da ECA, bloqueadores do receptor de angiotensina, inibidores da renina; espironolactona evitada.</li>
<li>Toxicidade: oligúria fetal, oligoâmnio, hipoplasia pulmonar, hipocalvária, insuficiência renal neonatal.</li>
<li>Meta: 110 a 140 por 85; tratar a partir de 140 × 90 persistente.</li>
<li>Emergência (160 × 110): hidralazina venosa ou nifedipina rápida; sulfato previne convulsão, não baixa pressão.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que efeitos fetais explicam a contraindicação dos inibidores da ECA na gestação? <details><summary>Resposta</summary>Hipoperfusão renal fetal com oligúria, oligoâmnio, hipoplasia pulmonar, hipocalvária e insuficiência renal neonatal.</details></li>
<li>Quais são as drogas orais de primeira linha para manutenção da pressão na gestante? <details><summary>Resposta</summary>Metildopa e nifedipina de liberação lenta.</details></li>
<li>Qual é a droga de escolha para a emergência hipertensiva da pré-eclâmpsia e sua dose? <details><summary>Resposta</summary>Hidralazina venosa, 5 mg em bolus a cada 20 minutos, até 20 mg; nifedipina oral de ação rápida é a outra opção.</details></li>
</ol>
`,

"sirio2027#71": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Justificar o rastreamento e o tratamento da bacteriúria assintomática na gestação.</li>
<li>Aplicar o critério diagnóstico e escolher antibióticos seguros por trimestre.</li>
<li>Diferenciar bacteriúria, cistite e pielonefrite na gestante e suas condutas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bacteriúria assintomática</dt>
<dd>Urocultura com 100.000 UFC/mL ou mais de um único uropatógeno em mulher sem sintomas urinários; afeta 2 a 10% das gestantes.</dd>
<dt>Pielonefrite gestacional</dt>
<dd>Infecção do parênquima renal, com febre, dor lombar e Giordano positivo; indica internação e antibiótico venoso.</dd>
<dt>Fosfomicina trometamol</dt>
<dd>Antibiótico de dose única, 3 g por via oral, seguro em qualquer trimestre e com baixa resistência.</dd>
<dt>Nitrofurantoína</dt>
<dd>Opção oral por 5 a 7 dias; evitada perto do termo pelo risco teórico de hemólise no recém-nascido com deficiência de G6PD.</dd>
</dl>
<h4>O essencial</h4>
<p>A gestação favorece a infecção urinária: a progesterona relaxa o ureter, o útero comprime a pelve renal, há estase, glicosúria e alteração do pH. Por isso a <strong>bacteriúria assintomática</strong>, que fora da gestação não se trata, torna-se uma exceção: sem tratamento, <strong>20 a 35%</strong> das gestantes evoluem para pielonefrite, com risco de sepse, síndrome do desconforto respiratório, parto prematuro e baixo peso.</p>
<p>O critério é a cultura com <strong>100.000 UFC/mL ou mais</strong> de um único germe, em amostra de jato médio; Escherichia coli responde por 70 a 80%, seguida de Klebsiella, Proteus e estreptococo do grupo B, cujo achado em qualquer contagem indica profilaxia intraparto.</p>
<p>A <strong>cistite</strong> (disúria, polaciúria, urgência, sem febre) recebe os mesmos antibióticos por 7 dias. A <strong>pielonefrite</strong> (febre, calafrios, dor lombar, náuseas, Giordano positivo) exige internação, hidratação, hemocultura e urocultura e antibiótico venoso, em geral ceftriaxona, até 48 horas afebril, completando 10 a 14 dias por via oral; pielonefrite ou bacteriúria recorrente indicam profilaxia com nitrofurantoína ou cefalexina em dose baixa noturna até o parto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante assintomática com cultura de 100.000 colônias é tratada, ponto; a ausência de sintomas, que fora da gestação dispensaria antibiótico, aqui é irrelevante. Entre as opções, a fosfomicina em dose única é a resposta prática, e qualquer quinolona está errada. Febre com dor lombar muda tudo: internação e antibiótico venoso.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Bacteriúria assintomática na gestante: tratar sempre; 20 a 35% evoluem para pielonefrite sem tratamento.</li>
<li>Diagnóstico: urocultura com 100.000 UFC/mL ou mais de um germe; rastreio na primeira consulta e no terceiro trimestre.</li>
<li>Drogas seguras: fosfomicina dose única, nitrofurantoína (não após 36 semanas), cefalexina, amoxicilina-clavulanato; quinolonas e tetraciclinas proibidas.</li>
<li>Cultura de controle após o tratamento; estreptococo B na urina indica profilaxia intraparto.</li>
<li>Pielonefrite: internação, ceftriaxona venosa, 10 a 14 dias de tratamento, profilaxia até o parto se recorrente.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a bacteriúria assintomática é tratada na gestante e não na população geral? <details><summary>Resposta</summary>Porque na gestante 20 a 35% evoluem para pielonefrite, com risco de sepse, prematuridade e baixo peso; o tratamento reduz esse risco em cerca de 75%.</details></li>
<li>Qual é o critério diagnóstico de bacteriúria assintomática na urocultura? <details><summary>Resposta</summary>Crescimento de 100.000 UFC/mL ou mais de um único uropatógeno em mulher sem sintomas.</details></li>
<li>Por que a nitrofurantoína é evitada perto do termo? <details><summary>Resposta</summary>Pelo risco teórico de hemólise no recém-nascido com deficiência de G6PD.</details></li>
</ol>
`,

"sirio2027#73": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Relacionar a resistência à insulina com os achados cutâneos e ovarianos da SOP.</li>
<li>Aplicar os critérios diagnósticos de Rotterdam e excluir diferenciais.</li>
<li>Descrever o rastreio metabólico e o tratamento conforme a queixa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome dos ovários policísticos</dt>
<dd>Endocrinopatia mais comum da mulher em idade reprodutiva, presente em 8 a 13%; diagnóstico por dois de três critérios de Rotterdam.</dd>
<dt>Critérios de Rotterdam</dt>
<dd>Oligo ou anovulação; hiperandrogenismo clínico ou laboratorial; morfologia ovariana policística ao ultrassom (20 ou mais folículos ou volume acima de 10 mL).</dd>
<dt>Acantose nigricans</dt>
<dd>Hiperpigmentação aveludada das dobras, marcador cutâneo de hiperinsulinemia; às vezes acompanhada de acrocórdons.</dd>
<dt>Resistência à insulina</dt>
<dd>Resposta reduzida dos tecidos à insulina, com hiperinsulinemia compensatória; presente em 50 a 70% das mulheres com SOP, magras ou obesas.</dd>
</dl>
<h4>O essencial</h4>
<p>A fisiopatologia da SOP junta dois eixos. No <strong>eixo reprodutivo</strong>, a frequência aumentada dos pulsos de GnRH eleva o LH em relação ao FSH; o LH estimula a teca a produzir androgênios, e o FSH insuficiente não leva o folículo à ovulação, acumulando folículos pequenos.</p>
<p>O diagnóstico usa os <strong>critérios de Rotterdam</strong>, dois de três, depois de excluir hiperprolactinemia, disfunção tireoidiana, hiperplasia adrenal não clássica (17-hidroxiprogesterona), síndrome de Cushing e tumores produtores de androgênio (testosterona acima de 200 ng/dL ou virilização rápida). Na adolescente, o ultrassom não vale como critério nos primeiros oito anos pós-menarca, pela frequência de ovários multifoliculares normais; exigem-se irregularidade menstrual persistente e hiperandrogenismo.</p>
<p>Toda mulher com SOP recebe rastreio metabólico: glicemia de jejum e teste de tolerância ou hemoglobina glicada, perfil lipídico, pressão e circunferência abdominal, repetidos a cada um a três anos, além de triagem de apneia do sono, depressão e ansiedade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Separe os sinais pela causa: acne, hirsutismo e alopecia são androgênio; acantose nigricans, acrocórdons e obesidade central são insulina. Quando a prova pergunta a causa da acantose, a resposta é hiperinsulinemia, não hiperandrogenismo. E lembre que SOP é diagnóstico de exclusão: tireoide, prolactina e 17-hidroxiprogesterona antes de fechar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fisiopatologia: LH alto estimula androgênios na teca; hiperinsulinemia amplifica androgênios, reduz SHBG e causa acantose.</li>
<li>Acantose nigricans é marcador de resistência à insulina, não de hiperandrogenismo.</li>
<li>Rotterdam: dois de três entre anovulação, hiperandrogenismo e ovário policístico, após excluir diferenciais.</li>
<li>Rastreio metabólico: glicemia ou teste de tolerância, lipídios, pressão, circunferência abdominal, a cada um a três anos.</li>
<li>Tratamento: estilo de vida; combinado para ciclo e androgênio; metformina para o metabolismo; letrozol para ovulação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o mecanismo da acantose nigricans na SOP? <details><summary>Resposta</summary>A hiperinsulinemia compensatória da resistência à insulina ativa receptores de IGF-1 nos queratinócitos, causando hiperqueratose e hiperpigmentação.</details></li>
<li>Que diagnósticos devem ser excluídos antes de firmar SOP? <details><summary>Resposta</summary>Hiperprolactinemia, disfunção tireoidiana, hiperplasia adrenal não clássica, síndrome de Cushing e tumores produtores de androgênio.</details></li>
<li>Qual é a primeira linha para induzir ovulação na mulher com SOP que deseja engravidar? <details><summary>Resposta</summary>O letrozol, após otimização do peso e do estilo de vida.</details></li>
</ol>
`,

"sirio2027#74": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a investigação da amenorreia secundária em etapas.</li>
<li>Usar FSH, prolactina, TSH e androgênios para localizar a causa no eixo.</li>
<li>Reconhecer a amenorreia hipotalâmica funcional e seu tratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Amenorreia secundária</dt>
<dd>Ausência de menstruação por três meses em mulher com ciclos regulares, ou por seis meses em quem tinha ciclos irregulares.</dd>
<dt>Amenorreia hipotalâmica funcional</dt>
<dd>Supressão dos pulsos de GnRH por déficit energético, estresse ou exercício; gonadotrofinas baixas, estradiol baixo, sem lesão estrutural.</dd>
<dt>Insuficiência ovariana prematura</dt>
<dd>Falência ovariana antes dos 40 anos, com FSH acima de 25 UI/L em duas dosagens; causa hipergonadotrófica.</dd>
<dt>Teste da progesterona</dt>
<dd>Progestagênio por 7 a 10 dias; sangramento após a retirada indica estrogênio presente e trato íntegro.</dd>
</dl>
<h4>O essencial</h4>
<p>A investigação da amenorreia secundária começa sempre pelo <strong>beta-hCG</strong>, porque a gestação é a causa mais comum. Em seguida, uma única rodada de exames localiza o problema: <strong>TSH</strong>, <strong>prolactina</strong> e <strong>FSH</strong>, acrescentando testosterona e 17-hidroxiprogesterona se houver sinais de hiperandrogenismo.</p>
<p>O <strong>FSH</strong> divide os caminhos. <strong>Alto</strong> (acima de 25 UI/L, confirmado), o ovário falhou: insuficiência ovariana prematura, cujo cariótipo deve ser pedido antes dos 30 anos e que exige reposição hormonal até a idade da menopausa. <strong>Baixo ou normal</strong> com estradiol baixo, o defeito está acima: <strong>hipotálamo ou hipófise</strong>.</p>
<p>A <strong>amenorreia hipotalâmica funcional</strong> é diagnóstico de exclusão em mulher jovem com déficit energético, treino intenso ou estresse: as gonadotrofinas e o estradiol estão baixos, o restante é normal, e o tratamento é corrigir a causa com recuperação do peso, redução do exercício e apoio psicológico, com atenção à densidade óssea, porque o hipoestrogenismo prolongado causa osteopenia; o contraceptivo combinado não recupera o osso e mascara a melhora, e o estradiol transdérmico é preferido quando se decide repor.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Amenorreia com FSH e LH baixos é central, e a prova quer que você diga "hipotalâmica ou hipofisária" sem titubear. Prolactina normal afasta o prolactinoma; androgênios normais afastam a SOP; FSH baixo afasta a falência ovariana e a disgenesia. A paciente típica é a jovem magra, estressada ou atleta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Primeiro passo: beta-hCG; depois TSH, prolactina e FSH, com androgênios se houver hirsutismo.</li>
<li>FSH alto: insuficiência ovariana prematura; cariótipo antes dos 30 anos; reposição hormonal.</li>
<li>FSH baixo ou normal com estradiol baixo: causa hipotalâmica ou hipofisária; ressonância se prolactina alta, cefaleia ou sem causa funcional.</li>
<li>Amenorreia hipotalâmica funcional: déficit energético, estresse ou exercício; tratar a causa e proteger o osso.</li>
<li>Gonadotrofinas normais com androgênios altos: SOP; sem sangramento mesmo com hormônios: causa uterina (Asherman).</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro exame diante de qualquer amenorreia secundária? <details><summary>Resposta</summary>O beta-hCG, porque a gestação é a causa mais comum.</details></li>
<li>O que indica um FSH baixo com estradiol baixo em mulher amenorreica? <details><summary>Resposta</summary>Hipogonadismo hipogonadotrófico: a causa está no hipotálamo ou na hipófise, não no ovário.</details></li>
<li>Como se trata a amenorreia hipotalâmica funcional? <details><summary>Resposta</summary>Corrigindo a causa: recuperação do peso, redução do exercício e apoio psicológico, com atenção à densidade óssea.</details></li>
</ol>
`,

"sirio2027#76": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar o mecanismo de ação de cada classe no tratamento da endometriose.</li>
<li>Ordenar as linhas de tratamento clínico e as indicações de cirurgia.</li>
<li>Reconhecer o que cada método trata e o que não trata.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Endometriose</dt>
<dd>Tecido endometrial fora da cavidade uterina, estrogênio-dependente e inflamatório; acomete 10% das mulheres em idade reprodutiva.</dd>
<dt>Dienogeste</dt>
<dd>Progestagênio de quarta geração, 2 mg/dia, com ação direta nos focos e supressão moderada do eixo; primeira linha hormonal.</dd>
<dt>Análogos do GnRH</dt>
<dd>Agonistas (leuprorrelina, gosserrelina) e antagonistas orais (elagolix); suprimem a hipófise e induzem hipoestrogenismo.</dd>
<dt>Terapia add-back</dt>
<dd>Estrogênio e progestagênio em baixa dose associados ao análogo para proteger o osso e aliviar fogachos.</dd>
</dl>
<h4>O essencial</h4>
<p>A endometriose é doença estrogênio-dependente: os focos expressam aromatase, produzem estrogênio local, resistem à progesterona e mantêm inflamação crônica com prostaglandinas, citocinas e neoangiogênese, o que explica dismenorreia progressiva, dispareunia profunda, dor pélvica crônica, dor ao evacuar e infertilidade.</p>
<p>Cada classe age de um jeito. Os <strong>progestagênios</strong>, com o <strong>dienogeste</strong> à frente, agem <strong>diretamente nos focos</strong>: decidualizam e atrofiam o tecido ectópico, reduzem aromatase, prostaglandinas e angiogênese, e ainda suprimem parcialmente a ovulação; o DIU de levonorgestrel faz o mesmo no útero e na pelve próxima, controlando dismenorreia e doença retocervical, mas não reduz endometriomas.</p>
<p>A ordem é: primeira linha, progestagênio (dienogeste) ou combinado contínuo, com anti-inflamatório para a dor; segunda linha, análogo do GnRH com add-back ou inibidor da aromatase em casos selecionados.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a prova pergunta mecanismo, lembre: progestagênio age no foco; análogo do GnRH age na hipófise; estrogênio não trata; DIU hormonal não reduz endometrioma; DIU de cobre piora. Quando pergunta conduta, a primeira linha é dienogeste ou combinado contínuo, e laparoscopia não é obrigatória para começar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Doença estrogênio-dependente e inflamatória; diagnóstico clínico e por imagem, sem laparoscopia obrigatória.</li>
<li>Dienogeste e progestagênios: ação direta nos focos (atrofia, menos aromatase e inflamação) e supressão parcial do eixo.</li>
<li>Análogos do GnRH: ação na hipófise, hipoestrogenismo, efeito indireto nos focos; add-back e tempo limitado.</li>
<li>Combinado contínuo age pelo progestagênio e pela anovulação; etinilestradiol não trata; DIU de cobre piora.</li>
<li>Cirurgia: falha clínica, endometrioma sintomático acima de 4 cm, doença profunda obstrutiva, infertilidade selecionada.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a diferença de mecanismo entre o dienogeste e o análogo do GnRH na endometriose? <details><summary>Resposta</summary>O dienogeste age diretamente nos focos, decidualizando e atrofiando o tecido; o análogo age na hipófise, suprimindo o eixo e induzindo hipoestrogenismo, com efeito indireto.</details></li>
<li>O DIU de levonorgestrel reduz o endometrioma ovariano? <details><summary>Resposta</summary>Não; controla dismenorreia e doença pélvica próxima ao útero, mas não tem efeito sobre o endometrioma.</details></li>
<li>Por que o análogo do GnRH é usado por tempo limitado e com add-back? <details><summary>Resposta</summary>Porque o hipoestrogenismo causa fogachos e perda óssea; o add-back protege o osso e permite uso de seis a doze meses.</details></li>
</ol>
`,

"sirio2027#77": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar vaginose, candidíase e tricomoníase por pH, teste das aminas e microscopia.</li>
<li>Reconhecer a tricomoníase como infecção sexualmente transmissível e suas repercussões.</li>
<li>Prescrever o tratamento e as medidas para o parceiro e para a gestante.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Trichomonas vaginalis</dt>
<dd>Protozoário flagelado, móvel, transmitido por via sexual; a infecção sexualmente transmissível não viral mais comum no mundo.</dd>
<dt>Colpite macular</dt>
<dd>Pontilhado hemorrágico no colo e na vagina, o "colo em framboesa", visível em 2 a 5% das infectadas a olho nu e em mais da metade à colposcopia.</dd>
<dt>Teste das aminas</dt>
<dd>Odor de peixe ao adicionar hidróxido de potássio à secreção; positivo na vaginose e na tricomoníase, negativo na candidíase.</dd>
<dt>Exame a fresco</dt>
<dd>Microscopia da secreção em soro fisiológico: clue cells na vaginose, hifas na candidíase, protozoários móveis e muitos leucócitos na tricomoníase.</dd>
</dl>
<h4>O essencial</h4>
<p>Os três corrimentos clássicos se separam com três ferramentas baratas. A <strong>candidíase</strong> tem pH <strong>normal</strong> (abaixo de 4,5), aminas <strong>negativas</strong>, corrimento branco grumoso aderente, prurido intenso, ardor e hiperemia, e hifas ou pseudo-hifas à microscopia com hidróxido de potássio.</p>
<p>A tricomoníase é uma <strong>infecção sexualmente transmissível</strong>, e isso tem consequências: o parceiro deve ser tratado mesmo assintomático, o casal deve abster-se até completar o tratamento, e a paciente deve ser rastreada para HIV, sífilis, hepatites, clamídia e gonorreia. A infecção aumenta a aquisição e a transmissão do HIV e, na gestante, associa-se a rotura prematura de membranas, prematuridade e baixo peso.</p>
<p>O tratamento é com nitroimidazólico: o CDC recomenda para a mulher <strong>metronidazol 500 mg por via oral duas vezes ao dia por sete dias</strong>, mais eficaz que a dose única de 2 g, que fica como opção; o Ministério da Saúde ainda aceita as duas. Para o homem, dose única de 2 g. Metronidazol tópico não funciona, porque não atinge uretra e glândulas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Corrimento bolhoso, colo em framboesa e protozoário que se mexe no microscópio fecham tricomoníase; o pH alto e as aminas positivas são compartilhados com a vaginose, mas a vaginose não tem bichos móveis, nem piócitos, nem colpite. Trate com metronidazol oral por sete dias e não esqueça o parceiro e o rastreio das outras infecções.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Candidíase: pH normal, aminas negativas, grumos, prurido, hifas.</li>
<li>Vaginose: pH alto, aminas positivas, corrimento fino acinzentado, sem inflamação, clue cells.</li>
<li>Tricomoníase: pH acima de 5, aminas positivas, corrimento bolhoso amarelo-esverdeado, colpite macular, protozoários móveis e piócitos.</li>
<li>Tricomoníase é IST: tratar o parceiro, abstinência, rastrear HIV, sífilis, hepatites, clamídia e gonorreia.</li>
<li>Metronidazol oral 500 mg 2×/dia por 7 dias (mulher); 2 g dose única (homem); seguro na gestação; reteste em 3 meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado microscópico distingue a tricomoníase da vaginose, já que ambas têm pH alto e aminas positivas? <details><summary>Resposta</summary>Protozoários móveis flagelados com muitos leucócitos na tricomoníase; clue cells sem leucócitos na vaginose.</details></li>
<li>Por que o parceiro deve ser tratado na tricomoníase e não na vaginose? <details><summary>Resposta</summary>Porque a tricomoníase é infecção sexualmente transmissível, com o homem como reservatório assintomático; a vaginose é desequilíbrio da flora.</details></li>
<li>Qual é o esquema de tratamento recomendado pelo CDC para a mulher com tricomoníase? <details><summary>Resposta</summary>Metronidazol 500 mg por via oral duas vezes ao dia por sete dias.</details></li>
</ol>
`,

"sirio2027#78": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a incontinência urinária feminina em esforço, urgência e mista.</li>
<li>Interpretar o estudo urodinâmico, em especial a pressão de perda.</li>
<li>Escolher o tratamento conforme o mecanismo da incontinência de esforço.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Incontinência urinária de esforço</dt>
<dd>Perda involuntária aos esforços (tosse, riso, exercício), por hipermobilidade do colo vesical ou deficiência esfincteriana.</dd>
<dt>Pressão de perda sob Valsalva</dt>
<dd>Menor pressão abdominal que provoca perda sem contração do detrusor; abaixo de 60 cm H2O sugere deficiência esfincteriana, acima de 90, hipermobilidade.</dd>
<dt>Bexiga hiperativa</dt>
<dd>Urgência com ou sem incontinência, polaciúria e noctúria; contrações involuntárias do detrusor na urodinâmica.</dd>
<dt>Sling de uretra média</dt>
<dd>Faixa sintética sob a uretra média, retropúbica ou transobturatória; cirurgia padrão para incontinência de esforço.</dd>
</dl>
<h4>O essencial</h4>
<p>A continência depende de dois elementos: um <strong>suporte</strong> que mantém a uretra fixa durante o esforço, dado pela fáscia endopélvica e pelo levantador do ânus, e um <strong>esfíncter</strong> que fecha a uretra, formado por musculatura lisa, estriada, mucosa e coxim vascular dependentes de estrogênio. Quando o suporte falha, a uretra desce com o esforço e a pressão abdominal não se transmite igualmente a ela: é a <strong>hipermobilidade</strong>, a forma mais comum, ligada a partos vaginais e envelhecimento.</p>
<p>A avaliação começa pela história, diário miccional, exame com teste de esforço e Q-tip ou ultrassom para mobilidade uretral, urina e resíduo pós-miccional. O <strong>estudo urodinâmico</strong> é indicado antes de cirurgia, em casos mistos, recidivados ou complexos.</p>
<p>O tratamento começa conservador para todas: perda de peso, fisioterapia do assoalho pélvico, tratamento da constipação e da tosse, estrogênio vaginal na pós-menopausa. Na incontinência de esforço por hipermobilidade, o <strong>sling de uretra média</strong> cura 80 a 90%.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pressão de perda baixa, abaixo de 60, com uretra que não se move: deficiência esfincteriana. Pressão alta, acima de 90, com uretra que desce: hipermobilidade. Urgência e contrações do detrusor: bexiga hiperativa. Resíduo grande e perda contínua: transbordamento. A prova monta o laudo e pergunta o mecanismo; responda pelo número e pela mobilidade.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Continência: suporte (fáscia e levantador) e esfíncter (músculo, mucosa, coxim vascular).</li>
<li>Hipermobilidade: uretra desce ao esforço; deficiência esfincteriana: uretra não fecha, por cirurgia, radioterapia, denervação ou hipoestrogenismo.</li>
<li>Pressão de perda sob Valsalva: abaixo de 60 é esfíncter; acima de 90 é hipermobilidade; entre eles, misto.</li>
<li>Conservador para todas: fisioterapia, peso, estrogênio vaginal.</li>
<li>Cirurgia: sling de uretra média; na deficiência esfincteriana, sling retropúbico, preenchimento periuretral ou esfíncter artificial.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual valor de pressão de perda sob Valsalva indica deficiência esfincteriana intrínseca? <details><summary>Resposta</summary>Abaixo de 60 cm H2O, sobretudo com uretra fixa, sem hipermobilidade.</details></li>
<li>Como a bexiga hiperativa aparece no estudo urodinâmico? <details><summary>Resposta</summary>Com contrações involuntárias do detrusor durante a fase de enchimento, acompanhadas de urgência.</details></li>
<li>Por que a deficiência esfincteriana responde pior à fisioterapia que a hipermobilidade? <details><summary>Resposta</summary>Porque o problema é a falha do próprio esfíncter, não do suporte; fortalecer o assoalho pélvico corrige a mobilidade, não o fechamento uretral.</details></li>
</ol>
`,

"sirio2027#79": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Investigar o sangramento pós-menopausa com o corte do eco endometrial.</li>
<li>Escolher o método de amostragem endometrial e conhecer seus limites.</li>
<li>Reconhecer fatores de risco e achados do câncer de endométrio e da hiperplasia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sangramento pós-menopausa</dt>
<dd>Qualquer sangramento após 12 meses de amenorreia; câncer de endométrio em cerca de 10% dos casos, atrofia na maioria.</dd>
<dt>Eco endometrial</dt>
<dd>Espessura do endométrio medida no ultrassom transvaginal; 4 mm é o corte para investigar na mulher sem terapia hormonal.</dd>
<dt>Histeroscopia com biópsia dirigida</dt>
<dd>Visão direta da cavidade com retirada do tecido da área suspeita; padrão para lesões focais e pólipos.</dd>
<dt>Hiperplasia endometrial com atipia</dt>
<dd>Lesão precursora com risco de 30 a 40% de câncer concomitante ou futuro; tratada com histerectomia ou progestagênio se há desejo de preservar o útero.</dd>
</dl>
<h4>O essencial</h4>
<p>O sangramento após a menopausa é o sintoma de apresentação de 90% dos cânceres de endométrio, e por isso todo episódio, mesmo discreto e único, exige investigação. A causa mais comum é a <strong>atrofia</strong> endometrial e vaginal, seguida de pólipos, terapia hormonal, hiperplasia e câncer.</p>
<p>O primeiro exame é o <strong>ultrassom transvaginal</strong>. Eco endometrial de <strong>4 mm ou menos</strong>, fino e homogêneo, tem valor preditivo negativo acima de 99% para câncer na mulher sem terapia hormonal, e a conduta é observar, tratando a atrofia com estrogênio vaginal; sangramento recorrente, porém, exige amostragem mesmo com eco fino. Eco <strong>acima de 4 mm</strong>, heterogêneo, com coleção ou com lesão focal, exige <strong>amostra histológica</strong>.</p>
<p>A histologia dita a conduta. Atrofia e pólipo benigno: tratamento sintomático ou polipectomia. <strong>Hiperplasia sem atipia</strong>: progestagênio, de preferência DIU de levonorgestrel, com biópsia de controle em seis meses. <strong>Hiperplasia com atipia</strong>: histerectomia total com salpingo-oforectomia, ou progestagênio com vigilância se a mulher não puder operar.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A sequência é fixa: sangramento pós-menopausa, ultrassom transvaginal, corte de 4 mm; acima dele, tecido para o patologista, de preferência por histeroscopia. Progestagênio, DIU hormonal, ácido tranexâmico e "repetir o ultrassom" são distratores que adiam ou escondem um câncer. A obesa nulípara é a paciente de maior risco.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Todo sangramento pós-menopausa se investiga; câncer em 10%, atrofia na maioria.</li>
<li>Fatores de risco: estrogênio sem oposição, obesidade, nuliparidade, anovulação, tamoxifeno, diabetes, Lynch.</li>
<li>Ultrassom transvaginal primeiro: eco até 4 mm observa; acima de 4 mm ou focal, amostra histológica.</li>
<li>Histeroscopia com biópsia dirigida é o padrão de acurácia; Pipelle aceitável no espessamento difuso.</li>
<li>Hiperplasia sem atipia: progestagênio; com atipia: histerectomia; carcinoma: estadiamento cirúrgico. Nunca hormônio empírico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o corte de espessura endometrial que dispensa biópsia no sangramento pós-menopausa sem terapia hormonal? <details><summary>Resposta</summary>Eco endometrial de 4 mm ou menos, fino e homogêneo, salvo sangramento recorrente.</details></li>
<li>Quando a histeroscopia é preferida à biópsia aspirativa ambulatorial? <details><summary>Resposta</summary>Quando o ultrassom sugere lesão focal ou pólipo, ou quando a biópsia às cegas foi insuficiente ou negativa com sangramento persistente.</details></li>
<li>Qual é a conduta na hiperplasia endometrial com atipia? <details><summary>Resposta</summary>Histerectomia total com salpingo-oforectomia; progestagênio com vigilância só se a cirurgia for inviável.</details></li>
</ol>
`,

/* --- Volume 2 · GO · UNESP 2025 (go81–go90) --------------------------------------------- */
"unesp2025#21": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Calcular a idade gestacional pela data da última menstruação com contagem exata de dias.</li>
<li>Aplicar a regra de Naegele e conhecer seus limites.</li>
<li>Saber quando o ultrassom redefine a datação e qual exame é o padrão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Idade gestacional</dt>
<dd>Tempo decorrido desde o primeiro dia da última menstruação, em semanas completas e dias; a concepção ocorre cerca de duas semanas depois.</dd>
<dt>Data provável do parto</dt>
<dd>Dia em que se completam 40 semanas, ou 280 dias, a partir da última menstruação.</dd>
<dt>Regra de Naegele</dt>
<dd>Somar 7 ao dia e 9 ao mês (ou subtrair 3 e somar um ano) da última menstruação; aproximação dos 280 dias.</dd>
<dt>Comprimento cabeça-nádega</dt>
<dd>Medida do embrião no primeiro trimestre, o parâmetro mais preciso para datar a gestação, com erro de 5 a 7 dias.</dd>
</dl>
<h4>O essencial</h4>
<p>Toda a obstetrícia depende de uma idade gestacional confiável: define prematuridade e pós-datismo, o momento dos exames de rastreamento, a interpretação do crescimento fetal e a decisão de induzir o parto. A contagem parte do <strong>primeiro dia da última menstruação</strong>, com a convenção de que a ovulação ocorreu no 14º dia; por isso a gestação "de 40 semanas" tem, de fato, 38 semanas de vida embrionária.</p>
<p>A idade gestacional se calcula contando os dias do calendário e dividindo por sete, com atenção aos meses de 30 e 31 dias e ao fevereiro bissexto. Para a data provável do parto, a <strong>regra de Naegele</strong> é a aproximação clássica: dia mais 7, mês mais 9.</p>
<p>O <strong>ultrassom de primeiro trimestre</strong>, pelo comprimento cabeça-nádega, é o método mais acurado, e o ACOG recomenda que ele seja oferecido a toda gestante para confirmar ou corrigir a data. A regra de redatação é por discordância: até 8 semanas e 6 dias, corrige-se se a diferença passar de 5 dias; de 9 a 13 semanas e 6 dias, se passar de 7 dias; no segundo trimestre, de 10 a 14 dias conforme a idade; no terceiro, acima de 21 dias, com a ressalva de que a esse ponto a imprecisão é grande.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Conte os dias no papel: do dia da última menstruação até o fim do mês, depois os meses inteiros, depois os dias do mês atual, lembrando que fevereiro de ano bissexto tem 29. Divida por sete para semanas e dias. Para a data do parto, some 280 dias; use Naegele só como atalho e confira quando as opções estiverem próximas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Idade gestacional conta do primeiro dia da última menstruação; data confiável exige ciclos regulares e certeza.</li>
<li>Semanas e dias: contar os dias do calendário e dividir por sete, com atenção aos meses e ao bissexto.</li>
<li>Data provável do parto: 280 dias após a última menstruação; Naegele (dia + 7, mês + 9) é aproximação com erro de um a dois dias.</li>
<li>Ultrassom de primeiro trimestre pelo comprimento cabeça-nádega é o padrão; redatar se a discordância passar de 5 a 7 dias.</li>
<li>Estabelecida a melhor estimativa, ela não muda mais no pré-natal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quantos dias tem uma gestação a termo contada a partir da última menstruação? <details><summary>Resposta</summary>280 dias, ou 40 semanas.</details></li>
<li>Por que a regra de Naegele pode errar por um ou dois dias? <details><summary>Resposta</summary>Porque nove meses e sete dias nem sempre somam 280 dias, variando com os meses de 30 ou 31 dias e com o ano bissexto.</details></li>
<li>Quando o ultrassom de primeiro trimestre corrige a data da última menstruação? <details><summary>Resposta</summary>Quando a discordância passa de 5 dias até 8 semanas e 6 dias, ou de 7 dias entre 9 e 13 semanas e 6 dias.</details></li>
</ol>
`,

"unesp2025#23": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a reclassificação glicêmica após o diabetes gestacional.</li>
<li>Aplicar os critérios diagnósticos de diabetes e pré-diabetes fora da gestação.</li>
<li>Orientar a prevenção do diabetes tipo 2 na mulher com antecedente de diabetes gestacional.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Teste oral de tolerância à glicose de 75 g</dt>
<dd>Glicemia em jejum e duas horas após 75 g de glicose; usado na gestação e na reclassificação pós-parto.</dd>
<dt>Glicemia de jejum alterada</dt>
<dd>Jejum entre 100 e 125 mg/dL; forma de pré-diabetes.</dd>
<dt>Tolerância à glicose diminuída</dt>
<dd>Glicemia de 2 horas entre 140 e 199 mg/dL no teste de 75 g; forma de pré-diabetes também chamada intolerância à glicose.</dd>
<dt>Diabetes mellitus</dt>
<dd>Jejum de 126 ou mais, 2 horas de 200 ou mais, hemoglobina glicada de 6,5% ou mais, ou glicemia casual de 200 com sintomas; confirmados em duas ocasiões, salvo sintomas francos.</dd>
</dl>
<h4>O essencial</h4>
<p>O diabetes gestacional é a hiperglicemia que surge na gestação por resistência à insulina induzida pelos hormônios placentários e costuma desaparecer após o parto. Mas ele denuncia uma reserva pancreática limitada: metade das mulheres desenvolve <strong>diabetes tipo 2</strong> nos dez anos seguintes, e o risco cardiovascular também aumenta.</p>
<p>Fora da gestação valem os critérios da ADA e da SBD. <strong>Jejum</strong>: abaixo de 100 é normal, de 100 a 125 é glicemia de jejum alterada e 126 ou mais é diabetes. <strong>Segunda hora do teste</strong>: abaixo de 140 é normal, de <strong>140 a 199</strong> é <strong>tolerância diminuída</strong> e 200 ou mais é diabetes. Hemoglobina glicada de 5,7 a 6,4% é pré-diabetes e 6,5% ou mais é diabetes.</p>
<p>O resultado orienta o seguimento. Normal: rastreio a cada um a três anos com glicemia de jejum, hemoglobina glicada ou teste de tolerância, e antes de nova gestação. Pré-diabetes: mudança intensiva de estilo de vida, com perda de 5 a 7% do peso e 150 minutos semanais de exercício, que reduz a progressão em quase 60%; a metformina é opção, sobretudo com IMC acima de 35 ou idade abaixo de 60. Diabetes: tratamento e planejamento das gestações futuras com glicada controlada antes da concepção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Leia os dois números do teste separadamente e classifique pelo pior. Jejum de 99 com 2 horas de 155 é tolerância diminuída, não glicemia de jejum alterada nem diabetes. O examinador troca os cortes de propósito: 100 e 126 para o jejum, 140 e 200 para a segunda hora.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reclassificar toda diabética gestacional com teste de 75 g entre quatro e doze semanas pós-parto.</li>
<li>Jejum: 100 a 125 é alterada, 126 ou mais é diabetes; 2 horas: 140 a 199 é tolerância diminuída, 200 ou mais é diabetes.</li>
<li>Jejum normal com segunda hora alterada já é pré-diabetes, classificado pelo componente pior.</li>
<li>Normal: rastreio a cada um a três anos; pré-diabetes: estilo de vida, metformina selecionada; diabetes: tratar e planejar gestações.</li>
<li>Metade das mulheres com diabetes gestacional terá diabetes tipo 2 em dez anos; amamentação protege.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando e com que exame se reclassifica a mulher que teve diabetes gestacional? <details><summary>Resposta</summary>Entre quatro e doze semanas pós-parto, com o teste oral de tolerância à glicose de 75 g.</details></li>
<li>Como se classifica jejum de 99 mg/dL com glicemia de 2 horas de 155 mg/dL? <details><summary>Resposta</summary>Como tolerância à glicose diminuída (intolerância), pela segunda hora entre 140 e 199, com jejum normal.</details></li>
<li>Qual é a intervenção que mais reduz a progressão do pré-diabetes para diabetes? <details><summary>Resposta</summary>A mudança intensiva de estilo de vida, com perda de 5 a 7% do peso e 150 minutos semanais de exercício.</details></li>
</ol>
`,

"unesp2025#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios diagnósticos do trabalho de parto prematuro.</li>
<li>Diferenciar trabalho de parto verdadeiro de falso trabalho de parto e contrações de treino.</li>
<li>Indicar corticoide, tocólise e sulfato de magnésio apenas quando há trabalho de parto real.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Trabalho de parto prematuro</dt>
<dd>Contrações regulares (duas em 10 minutos ou quatro em 20) com modificação cervical (dilatação de 2 cm ou mais, esvaecimento de 80% ou mudança entre exames), antes de 37 semanas.</dd>
<dt>Contrações de Braxton Hicks</dt>
<dd>Contrações irregulares, curtas e indolores ou pouco dolorosas, sem modificar o colo; fisiológicas no terceiro trimestre.</dd>
<dt>Fibronectina fetal</dt>
<dd>Glicoproteína da interface coriodecidual; teste negativo na secreção cervicovaginal entre 22 e 34 semanas afasta parto nos próximos 7 a 14 dias.</dd>
<dt>Corticoide antenatal</dt>
<dd>Betametasona 12 mg IM em duas doses com 24 horas de intervalo, entre 24 e 34 semanas, quando o parto é provável em sete dias.</dd>
</dl>
<h4>O essencial</h4>
<p>Metade das gestantes que chegam à maternidade com queixa de contrações antes do termo não está em trabalho de parto.</p>
<p>Quando a dúvida persiste, há recursos: a <strong>observação</strong> por uma a duas horas com novo toque, o <strong>comprimento cervical</strong> ao ultrassom transvaginal (acima de 30 mm torna o parto muito improvável; abaixo de 15 mm, provável) e a <strong>fibronectina fetal</strong>, cujo valor é o negativo, que permite liberar com segurança.</p>
<p>Confirmado o trabalho de parto prematuro entre 24 e 34 semanas, a conduta é o pacote: <strong>corticoide</strong> para maturação pulmonar, <strong>tocólise</strong> por 48 horas (nifedipina ou atosibana, nunca além de 34 semanas e nunca com corioamnionite, descolamento, sofrimento fetal ou óbito) apenas para dar tempo ao corticoide e à transferência, <strong>sulfato de magnésio</strong> para neuroproteção abaixo de 32 semanas, e profilaxia do estreptococo B se a cultura for desconhecida ou positiva.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de marcar qualquer intervenção, confira se há trabalho de parto: contrações regulares mais colo modificado. Uma contração fraca com colo grosso e posterior é falso trabalho de parto, e a resposta é liberar com orientações. O pacote completo (tocólise, corticoide, sulfato) é só para o trabalho de parto verdadeiro, e o sulfato só abaixo de 32 semanas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Trabalho de parto prematuro: contrações regulares (2 em 10 min) mais dilatação de 2 cm, esvaecimento de 80% ou mudança cervical.</li>
<li>Uma contração curta com colo grosso e posterior é falso trabalho de parto; liberar com orientações.</li>
<li>Na dúvida: observar e repetir o toque, comprimento cervical, fibronectina fetal (negativa libera).</li>
<li>Trabalho de parto confirmado entre 24 e 34 semanas: corticoide, tocólise por 48 h, sulfato abaixo de 32 semanas, profilaxia do estreptococo B.</li>
<li>Corticoide sem parto iminente não traz benefício; tocólise nunca após 34 semanas nem com infecção ou sofrimento fetal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que dois critérios devem coexistir para o diagnóstico de trabalho de parto prematuro? <details><summary>Resposta</summary>Contrações regulares e eficazes (duas em dez minutos) e modificação cervical (dilatação de 2 cm ou mais, esvaecimento de 80% ou mudança entre exames).</details></li>
<li>Qual é a utilidade da fibronectina fetal na gestante com contrações? <details><summary>Resposta</summary>O resultado negativo afasta parto nos próximos 7 a 14 dias e permite liberar com segurança.</details></li>
<li>Até que idade gestacional se indica tocólise e por quanto tempo? <details><summary>Resposta</summary>Até 34 semanas, por 48 horas, apenas para completar o corticoide e permitir a transferência.</details></li>
</ol>
`,

"unesp2025#26": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir morbidade febril puerperal e reconhecer as causas de febre no pós-parto.</li>
<li>Diferenciar a elevação térmica fisiológica do ingurgitamento mamário da infecção.</li>
<li>Interpretar o leucograma do puerpério e evitar antibiótico sem diagnóstico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Morbidade febril puerperal</dt>
<dd>Temperatura oral de 38 ºC ou mais em dois dias quaisquer dos primeiros dez dias pós-parto, excluídas as primeiras 24 horas.</dd>
<dt>Endometrite puerperal</dt>
<dd>Infecção polimicrobiana do endométrio, mais comum após cesárea; febre, dor à mobilização uterina, útero amolecido e lóquios fétidos.</dd>
<dt>Ingurgitamento mamário</dt>
<dd>Mamas cheias, tensas e quentes entre o terceiro e o quinto dia; pode elevar a temperatura axilar sem infecção.</dd>
<dt>Leucocitose fisiológica</dt>
<dd>Leucócitos de 12.000 a 20.000 nos primeiros dias pós-parto, sem desvio à esquerda, pelo estresse do parto.</dd>
</dl>
<h4>O essencial</h4>
<p>A febre no puerpério tem causas previsíveis pelo dia e pelo foco: nas primeiras 24 horas, atelectasia e a resposta ao estresse do parto; do segundo ao quinto dia, <strong>endometrite</strong> (a mais frequente, sobretudo após cesárea, bolsa rota prolongada e muitos toques), infecção urinária e, após cesárea, infecção da ferida; do fim da primeira semana em diante, <strong>mastite</strong>, tromboflebite pélvica e abscessos.</p>
<p>Nem toda elevação térmica é infecção. A definição de morbidade febril exige <strong>38 ºC ou mais</strong> por via <strong>oral</strong>, em dois dias, excluídas as primeiras 24 horas; medidas axilares entre 37,5 e 37,9 não cumprem o critério, e o <strong>ingurgitamento mamário</strong> do terceiro ao quinto dia é causa clássica de leitura axilar falsamente elevada, pelo calor local das mamas tensas.</p>
<p>A conduta na puérpera sem febre verdadeira e sem foco é orientar a <strong>curva térmica sublingual</strong> em casa, cuidar do esvaziamento das mamas (mamadas frequentes, ordenha, compressas) e retornar se a temperatura atingir 38 ºC, se surgir dor, secreção ou mal-estar. Internar, pedir culturas ou iniciar antibiótico empírico sem diagnóstico medicaliza um fenômeno fisiológico, seleciona resistência e mascara um eventual quadro que apareceria dias depois.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Confira o termômetro e a via: temperatura axilar de 37,9 com sublingual de 37,2, mamas túrgidas e nenhum foco é ingurgitamento, não infecção. O leucograma de 12.000 sem bastões é normal no puerpério. A resposta é curva térmica e retorno se necessário, não antibiótico nem internação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Morbidade febril puerperal: 38 ºC ou mais por via oral, em dois dias, após as primeiras 24 horas.</li>
<li>Causas por dia: atelectasia (24 h); endometrite, urinária e ferida (2º ao 5º); mastite e tromboflebite (após a 1ª semana).</li>
<li>Ingurgitamento mamário eleva a temperatura axilar sem infecção; conferir pela via sublingual.</li>
<li>Leucócitos de 12.000 a 15.000 sem bastões são fisiológicos no puerpério.</li>
<li>Sem febre verdadeira e sem foco: curva térmica, esvaziamento das mamas e retorno; antibiótico só com diagnóstico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a definição de morbidade febril puerperal? <details><summary>Resposta</summary>Temperatura oral de 38 ºC ou mais em dois dias quaisquer dos primeiros dez dias, excluídas as primeiras 24 horas.</details></li>
<li>Por que a temperatura axilar pode enganar na puérpera do terceiro ao quinto dia? <details><summary>Resposta</summary>Porque o ingurgitamento mamário aquece a região axilar e eleva a leitura sem que haja febre central.</details></li>
<li>Qual é a causa mais comum de febre puerperal verdadeira e como se trata? <details><summary>Resposta</summary>A endometrite, tratada com clindamicina e gentamicina venosas até 48 horas afebril.</details></li>
</ol>
`,

"unesp2025#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais de iminência de eclâmpsia e os critérios de gravidade da pré-eclâmpsia.</li>
<li>Prescrever o sulfato de magnésio pelos esquemas de Pritchard e Zuspan e monitorar a toxicidade.</li>
<li>Decidir anti-hipertensivo e momento do parto na pré-eclâmpsia grave.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Iminência de eclâmpsia</dt>
<dd>Cefaleia persistente, escotomas ou turvação visual, epigastralgia ou dor no hipocôndrio direito, hiperreflexia; sinais que precedem a convulsão.</dd>
<dt>Esquema de Pritchard</dt>
<dd>Sulfato de magnésio 4 g venoso lento mais 10 g intramuscular (5 g em cada glúteo); manutenção de 5 g IM a cada 4 horas.</dd>
<dt>Esquema de Zuspan</dt>
<dd>Sulfato de magnésio 4 g venoso em 20 minutos; manutenção de 1 a 2 g por hora em bomba de infusão.</dd>
<dt>Gluconato de cálcio</dt>
<dd>Antídoto da intoxicação por magnésio: 1 g venoso lento diante de abolição dos reflexos, frequência respiratória abaixo de 12 ou diurese abaixo de 25 mL/h.</dd>
</dl>
<h4>O essencial</h4>
<p>A pré-eclâmpsia ganha o rótulo de <strong>grave</strong> com pressão de 160 × 110 ou mais, sintomas de iminência de eclâmpsia, plaquetas abaixo de 100.000, creatinina acima de 1,1 ou duplicada, transaminases duplicadas, dor epigástrica persistente ou edema pulmonar; a proteinúria maciça não entra mais como critério de gravidade.</p>
<p>O <strong>sulfato de magnésio</strong> é a droga que previne e trata a convulsão, reduzindo-a pela metade, e deve ser iniciado assim que a gravidade ou a iminência é reconhecida, antes de transferir a paciente. Há dois esquemas. <strong>Zuspan</strong>: 4 g venosos em 20 minutos e manutenção de 1 a 2 g por hora em bomba de infusão, ideal em ambiente com monitorização.</p>
<p>O <strong>anti-hipertensivo</strong> de emergência entra só com pressão de 160 × 110 ou mais, com hidralazina venosa ou nifedipina oral, mantendo a pressão entre 140 a 150 por 90 a 100 para não hipoperfundir a placenta; ele não previne a convulsão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cefaleia, escotomas e epigastralgia em gestante hipertensa são iminência de eclâmpsia, e a primeira droga é sulfato de magnésio, não anti-hipertensivo nem diazepam. Se o cenário é unidade sem bomba e transferência, o esquema é Pritchard, com a dose muscular que protege durante a viagem. Hidralazina só a partir de 160 × 110.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Gravidade: 160 × 110, sintomas premonitórios, plaquetas abaixo de 100.000, creatinina ou transaminases alteradas, edema pulmonar.</li>
<li>Iminência de eclâmpsia: cefaleia, escotomas, epigastralgia, hiperreflexia; convulsão pode vir com pressão pouco elevada.</li>
<li>Sulfato de magnésio imediato: Zuspan (4 g IV e 1 a 2 g/h em bomba) ou Pritchard (4 g IV e 10 g IM, depois 5 g IM a cada 4 h) para transporte; manter 24 h pós-parto.</li>
<li>Monitorar reflexo patelar, respiração e diurese; gluconato de cálcio na intoxicação.</li>
<li>Hidralazina ou nifedipina só a partir de 160 × 110; parto após estabilização a partir de 34 semanas ou diante de complicações.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os sinais de iminência de eclâmpsia? <details><summary>Resposta</summary>Cefaleia persistente, escotomas ou turvação visual, epigastralgia ou dor no hipocôndrio direito e hiperreflexia.</details></li>
<li>Como é o esquema de Pritchard e por que ele é preferido antes de uma transferência? <details><summary>Resposta</summary>4 g venosos mais 10 g intramusculares (5 g em cada glúteo), com 5 g IM a cada 4 horas; a dose muscular mantém níveis terapêuticos durante o transporte sem bomba de infusão.</details></li>
<li>Que sinais indicam intoxicação por magnésio e qual é o antídoto? <details><summary>Resposta</summary>Abolição do reflexo patelar, frequência respiratória abaixo de 12 e diurese abaixo de 25 mL/h; gluconato de cálcio 1 g venoso.</details></li>
</ol>
`,

"unesp2025#30": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar indicações e contraindicações da terapia hormonal da menopausa.</li>
<li>Explicar o risco trombótico do estrogênio e a diferença entre vias.</li>
<li>Oferecer tratamentos não hormonais para os sintomas vasomotores e para a osteoporose.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Terapia hormonal da menopausa</dt>
<dd>Estrogênio, com progestagênio se há útero, para sintomas vasomotores e geniturinários e prevenção de perda óssea, iniciada antes dos 60 anos ou de dez anos de menopausa.</dd>
<dt>Janela de oportunidade</dt>
<dd>Período em que o benefício supera o risco: menos de 60 anos e menos de dez anos da menopausa.</dd>
<dt>Contraindicações absolutas</dt>
<dd>Sangramento genital não esclarecido, câncer de mama ou de endométrio, tromboembolismo venoso ou arterial prévio, doença hepática ativa, porfiria, lúpus com antifosfolípide.</dd>
<dt>Fezolinetanto</dt>
<dd>Antagonista do receptor de neurocinina 3, tratamento não hormonal eficaz para os fogachos.</dd>
</dl>
<h4>O essencial</h4>
<p>A terapia hormonal é o tratamento mais eficaz para os <strong>sintomas vasomotores</strong> e para a <strong>síndrome geniturinária</strong> da menopausa, e previne a perda óssea e a fratura. Quando iniciada na janela de oportunidade, em mulher saudável, o balanço é favorável e inclui redução da mortalidade e da doença coronariana em algumas análises.</p>
<p>O ponto fraco do estrogênio é a <strong>coagulação</strong>.</p>
<p>Quem não pode usar hormônio não fica sem tratamento. Para os fogachos, os inibidores de recaptação de serotonina e noradrenalina (venlafaxina, desvenlafaxina, paroxetina em quem não usa tamoxifeno), a gabapentina, a clonidina e o fezolinetanto reduzem a frequência e a intensidade; medidas comportamentais e terapia cognitivo-comportamental ajudam.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Liste primeiro as contraindicações antes de pensar nas indicações: trombose venosa prévia, câncer de mama, sangramento inexplicado e doença coronariana proíbem o hormônio mesmo com fogachos intensos e osteoporose. A obesidade não contraindica, só pede via transdérmica. Para os sintomas, sobram antidepressivos, gabapentina e fezolinetanto; para o osso, bisfosfonato.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Terapia hormonal: melhor tratamento para fogachos e atrofia geniturinária; previne perda óssea; iniciar antes dos 60 anos e de dez anos de menopausa.</li>
<li>Com útero, acrescentar progestagênio; estrogênio isolado só na histerectomizada.</li>
<li>Estrogênio oral dobra o risco de trombose; transdérmico evita a primeira passagem hepática e é preferido em fatores de risco.</li>
<li>Contraindicações: tromboembolismo prévio, câncer de mama ou endométrio, sangramento inexplicado, doença coronariana ou cerebrovascular, hepatopatia ativa.</li>
<li>Sem hormônio: antidepressivos, gabapentina, fezolinetanto para fogachos; estrogênio vaginal para atrofia; bisfosfonato para osteoporose.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o estrogênio transdérmico tem menor risco trombótico que o oral? <details><summary>Resposta</summary>Porque evita a primeira passagem hepática e não aumenta a síntese de fatores de coagulação, proteína C reativa e triglicerídeos.</details></li>
<li>A obesidade contraindica a terapia hormonal da menopausa? <details><summary>Resposta</summary>Não; é fator de risco trombótico que orienta a preferência pela via transdérmica, não uma contraindicação.</details></li>
<li>Que opções tratam os fogachos na mulher com tromboembolismo prévio? <details><summary>Resposta</summary>Inibidores de recaptação de serotonina e noradrenalina, gabapentina, clonidina e fezolinetanto, além de medidas comportamentais.</details></li>
</ol>
`,

"unesp2025#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever os quatro subtipos moleculares do câncer de mama e seus marcadores imuno-histoquímicos.</li>
<li>Relacionar cada subtipo ao prognóstico e ao tratamento sistêmico.</li>
<li>Entender o papel do Ki-67 e das assinaturas genômicas na decisão de quimioterapia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Receptores hormonais</dt>
<dd>Receptor de estrogênio e de progesterona na imuno-histoquímica; positivos a partir de 1% das células; definem sensibilidade à hormonioterapia.</dd>
<dt>HER2</dt>
<dd>Receptor do fator de crescimento epidérmico humano tipo 2; superexpresso em 15 a 20% dos tumores, alvo do trastuzumabe e do pertuzumabe.</dd>
<dt>Ki-67</dt>
<dd>Índice de proliferação celular; baixo (abaixo de 14 a 20%) no luminal A, alto no luminal B e no triplo-negativo.</dd>
<dt>Assinaturas genômicas</dt>
<dd>Testes de expressão gênica (Oncotype DX, MammaPrint) que estimam o risco de recorrência e a utilidade da quimioterapia nos tumores luminais.</dd>
</dl>
<h4>O essencial</h4>
<p>O câncer de mama é um conjunto de doenças com biologia e tratamento diferentes, e a imuno-histoquímica de três marcadores, receptor de estrogênio, receptor de progesterona e HER2, mais o Ki-67, o separa em quatro grupos clínicos. O <strong>luminal A</strong> (cerca de 40%) tem receptores hormonais fortemente positivos, HER2 negativo e Ki-67 baixo: é o de crescimento mais lento e melhor prognóstico, muito sensível à hormonioterapia e pouco à quimioterapia.</p>
<p>O subtipo <strong>HER2 superexpresso</strong> (10 a 15%) tem receptores hormonais negativos e HER2 positivo (imuno-histoquímica 3+ ou amplificação por hibridização in situ): era agressivo, mas o bloqueio anti-HER2 com trastuzumabe e pertuzumabe, associado à quimioterapia, transformou seu prognóstico.</p>
<p>Na prática, o subtipo decide a terapia sistêmica. Tumores luminais recebem <strong>hormonioterapia</strong> por cinco a dez anos (tamoxifeno na pré-menopausa, inibidores de aromatase na pós-menopausa); nos luminais A iniciais, com linfonodo negativo, as assinaturas genômicas permitem omitir a quimioterapia na maioria das pacientes, e nos luminais B elas ajudam a indicá-la.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Memorize o luminal A como o "bonzinho": receptores altos, HER2 negativo, Ki-67 baixo, hormonioterapia e quase nunca quimioterapia. O triplo-negativo é o oposto: nada positivo, Ki-67 alto, quimioterapia. HER2 positivo pede trastuzumabe. Receptores positivos com Ki-67 alto ou HER2 positivo são luminal B.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Luminal A: receptores de estrogênio e progesterona altos, HER2 negativo, Ki-67 baixo; melhor prognóstico; hormonioterapia.</li>
<li>Luminal B: receptor de estrogênio positivo com Ki-67 alto, progesterona baixa ou HER2 positivo; hormonioterapia e frequentemente quimioterapia.</li>
<li>HER2 superexpresso: receptores negativos, HER2 positivo; quimioterapia com trastuzumabe e pertuzumabe.</li>
<li>Triplo-negativo: nenhum marcador, Ki-67 alto, basal-like; quimioterapia, imunoterapia selecionada; pior prognóstico.</li>
<li>Assinaturas genômicas poupam quimioterapia nos luminais A iniciais com linfonodo negativo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as características imuno-histoquímicas do câncer de mama luminal A? <details><summary>Resposta</summary>Receptores de estrogênio e progesterona fortemente positivos, HER2 negativo e Ki-67 baixo.</details></li>
<li>O que distingue o luminal B do luminal A? <details><summary>Resposta</summary>Ki-67 alto, receptor de progesterona baixo ou ausente, ou HER2 positivo, com receptor de estrogênio positivo.</details></li>
<li>Qual é o tratamento sistêmico do subtipo HER2 superexpresso? <details><summary>Resposta</summary>Quimioterapia associada ao bloqueio anti-HER2 com trastuzumabe e pertuzumabe, por um ano.</details></li>
</ol>
`,

"unesp2025#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir atraso puberal e amenorreia primária e os marcos de idade para investigar.</li>
<li>Organizar a investigação pela presença de caracteres sexuais e pelo FSH.</li>
<li>Reconhecer a síndrome de Turner e as outras causas principais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Atraso puberal</dt>
<dd>Ausência de telarca aos 13 anos na menina (ou de aumento testicular aos 14 no menino); corresponde a dois desvios-padrão acima da média.</dd>
<dt>Amenorreia primária</dt>
<dd>Ausência de menarca aos 15 anos com caracteres sexuais presentes, ou aos 13 anos sem nenhum caractere sexual, ou três anos após a telarca.</dd>
<dt>Disgenesia gonadal</dt>
<dd>Desenvolvimento anormal das gônadas, com ovários em fita e falência; a síndrome de Turner (45,X e variantes) é a forma mais comum.</dd>
<dt>Hipogonadismo hipogonadotrófico</dt>
<dd>Puberdade ausente por falha do hipotálamo ou da hipófise, com FSH e LH baixos; inclui retardo constitucional, doenças crônicas e síndrome de Kallmann.</dd>
</dl>
<h4>O essencial</h4>
<p>A puberdade feminina começa pela <strong>telarca</strong>, entre 8 e 13 anos, seguida da pubarca e, cerca de dois a três anos depois, da <strong>menarca</strong>, em média aos 12 anos e meio. A ausência de qualquer broto mamário aos 13 anos é atraso puberal e indica que o ovário nunca secretou estrogênio; não se espera.</p>
<p>A investigação segue o <strong>FSH</strong> e o exame físico. Sem caracteres sexuais e <strong>FSH alto</strong>, a gônada falhou: a causa mais comum é a <strong>síndrome de Turner</strong>, com baixa estatura, pescoço alado, cúbito valgo, implantação baixa dos cabelos e cardiopatia, e o cariótipo confirma; outras são disgenesias 46,XX ou 46,XY e falência por quimioterapia ou radioterapia.</p>
<p>O tratamento depende da causa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Treze anos sem mama é investigar agora, porque o problema está no eixo, acima ou no ovário; quinze anos com mama é olhar o útero e a vagina. "Esperar até os 16" é a conduta antiga e só vale com caracteres presentes. A menina baixa, sem puberdade e com FSH alto é Turner até o cariótipo dizer o contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Telarca entre 8 e 13 anos; menarca dois a três anos depois, em média aos 12,5 anos.</li>
<li>Investigar aos 13 anos sem nenhum caractere sexual; aos 15 anos (ou três anos após a telarca) com caracteres presentes.</li>
<li>Sem caracteres e FSH alto: falência gonadal, Turner em primeiro lugar; cariótipo.</li>
<li>Sem caracteres e FSH baixo: causa hipotalâmica ou hipofisária, constitucional, funcional ou orgânica; ressonância se não houver causa funcional.</li>
<li>Com caracteres e sem menarca: ultrassom pélvico para útero e vagina (Rokitansky, hímen imperfurado, insensibilidade aos androgênios).</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Com que idade se investiga a menina que não tem nenhum sinal de puberdade? <details><summary>Resposta</summary>Aos 13 anos, idade em que a ausência de telarca define atraso puberal.</details></li>
<li>Qual é a causa mais comum de atraso puberal com FSH elevado na menina? <details><summary>Resposta</summary>A síndrome de Turner, disgenesia gonadal por cariótipo 45,X ou variantes.</details></li>
<li>Por que a ausência de mamas afasta uma malformação útero-vaginal como causa da amenorreia? <details><summary>Resposta</summary>Porque nas malformações do trato genital o ovário funciona e os caracteres sexuais se desenvolvem normalmente; a falta de mamas indica que não houve estrogênio.</details></li>
</ol>
`,

"unesp2025#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Planejar a avaliação pré-concepcional da mulher com síndrome dos ovários policísticos.</li>
<li>Identificar os medicamentos que devem ser suspensos antes da gravidez.</li>
<li>Descrever a suplementação de folato e o rastreio metabólico antes da concepção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Consulta pré-concepcional</dt>
<dd>Avaliação antes da gravidez para otimizar doenças crônicas, revisar medicamentos, vacinar e suplementar; reduz malformações e complicações.</dd>
<dt>Espironolactona</dt>
<dd>Antagonista da aldosterona com efeito antiandrogênico, usada no hirsutismo; potencialmente teratogênica, pode feminizar o feto masculino.</dd>
<dt>Ácido fólico</dt>
<dd>400 mcg por dia desde um a três meses antes da concepção até 12 semanas; 4 a 5 mg em obesas, diabéticas, epilépticas ou com antecedente de defeito do tubo neural.</dd>
<dt>Letrozol</dt>
<dd>Inibidor da aromatase, primeira linha para indução da ovulação na SOP, com mais nascidos vivos que o clomifeno.</dd>
</dl>
<h4>O essencial</h4>
<p>A mulher com SOP que deseja engravidar enfrenta dois obstáculos: a <strong>anovulação</strong>, que dificulta a concepção, e o <strong>risco metabólico</strong>, que aumenta as complicações da gestação, como diabetes gestacional, hipertensão, pré-eclâmpsia e prematuridade. A consulta pré-concepcional ataca os dois. Nada disso contraindica a gravidez: com preparo, a maioria concebe e tem gestação segura.</p>
<p>O <strong>contraceptivo combinado</strong>, usado para regularizar o ciclo e reduzir o androgênio, é suspenso, e a fertilidade retorna em um a três meses.</p>
<p>A avaliação acrescenta a <strong>suplementação de folato</strong> (400 mcg por dia, ou 4 a 5 mg na obesa ou diabética), o <strong>rastreio metabólico</strong> com teste oral de tolerância à glicose, para diagnosticar diabetes pré-gestacional e intolerância que pioram malformações e perdas, perfil lipídico, pressão e função tireoidiana, e a orientação de <strong>perda de peso</strong> de 5 a 10% quando há sobrepeso, que por si só restaura a ovulação em parte das mulheres e reduz complicações.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Três ações resumem a consulta da mulher com SOP que quer engravidar: parar o contraceptivo e a espironolactona, começar o ácido fólico e fazer o teste de tolerância à glicose. Manter a espironolactona é o erro que a prova espera que você identifique; dizer que ela não pode engravidar é o outro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>SOP não contraindica a gravidez; aumenta diabetes gestacional, pré-eclâmpsia e prematuridade, controláveis com preparo.</li>
<li>Suspender contraceptivo combinado, espironolactona (antiandrogênico teratogênico), finasterida, retinoides e estatinas; metformina pode continuar.</li>
<li>Ácido fólico 400 mcg/dia, ou 4 a 5 mg na obesa ou diabética, desde antes da concepção.</li>
<li>Rastreio metabólico pré-concepcional: teste de tolerância à glicose, lipídios, pressão, TSH; perda de 5 a 10% do peso.</li>
<li>Indução da ovulação com letrozol se a anovulação persistir; clomifeno em segunda linha.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a espironolactona deve ser suspensa antes de tentar engravidar? <details><summary>Resposta</summary>Porque seu efeito antiandrogênico pode feminizar a genitália de um feto masculino.</details></li>
<li>Qual é a dose de ácido fólico pré-concepcional para a mulher obesa com SOP? <details><summary>Resposta</summary>4 a 5 mg por dia, em vez dos 400 mcg habituais, pelo maior risco de defeito do tubo neural.</details></li>
<li>Qual é a primeira linha para induzir a ovulação na SOP após otimizar o peso? <details><summary>Resposta</summary>O letrozol, com monitorização para evitar gestação múltipla.</details></li>
</ol>
`,

"unesp2025#40": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a relação temporal entre o DIU e a doença inflamatória pélvica.</li>
<li>Conduzir a DIP na usuária de DIU, incluindo a decisão sobre o dispositivo.</li>
<li>Revisar diagnóstico, critérios de internação e tratamento da DIP.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença inflamatória pélvica</dt>
<dd>Infecção ascendente do trato genital superior (endometrite, salpingite, abscesso tubo-ovariano, pelviperitonite), em geral por Chlamydia, gonococo e anaeróbios.</dd>
<dt>Critérios mínimos de diagnóstico</dt>
<dd>Dor à mobilização do colo, dor uterina ou dor anexial em mulher sexualmente ativa com dor pélvica, sem outra causa evidente.</dd>
<dt>Risco pós-inserção</dt>
<dd>Aumento transitório de DIP nas três primeiras semanas após a colocação do DIU, por contaminação do canal cervical no procedimento.</dd>
<dt>Critérios de internação</dt>
<dd>Abscesso tubo-ovariano, gestação, doença grave com náuseas e febre alta, intolerância ou falha do tratamento oral, dúvida com emergência cirúrgica.</dd>
</dl>
<h4>O essencial</h4>
<p>O medo histórico de que o DIU causasse DIP vinha dos dispositivos antigos e de estudos sem controle para comportamento sexual. A evidência atual mostra que o risco é <strong>transitório</strong>: concentra-se nas <strong>três primeiras semanas</strong> após a inserção e decorre da passagem de bactérias do canal cervical para a cavidade durante o procedimento, sobretudo quando há cervicite por Chlamydia ou gonococo não diagnosticada.</p>
<p>Quando a usuária de DIU desenvolve DIP, as diretrizes do CDC e do Ministério da Saúde recomendam <strong>não retirar o dispositivo de rotina</strong>. O antibiótico é iniciado com o DIU no lugar, a mulher é reavaliada em <strong>48 a 72 horas</strong>, e a remoção só é considerada se não houver melhora clínica nesse prazo.</p>
<p>O tratamento ambulatorial é ceftriaxona 500 mg intramuscular em dose única, doxiciclina 100 mg duas vezes ao dia por 14 dias e metronidazol 500 mg duas vezes ao dia por 14 dias, com reavaliação em 72 horas; o parceiro dos últimos 60 dias é tratado para Chlamydia e gonococo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Duas ideias derrubam os distratores: o DIU só aumenta a DIP nas três semanas após a inserção, e na DIP da usuária o DIU fica, com reavaliação em 48 a 72 horas. Retirar "para não disseminar", internar "por causa do DIU" e afirmar mais abscessos com o DIU de cobre são afirmações sem base na evidência atual.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Risco de DIP associado ao DIU é restrito às três primeiras semanas após a inserção; depois é igual ao das não usuárias.</li>
<li>Rastreio de IST no dia da inserção, sem adiar; profilaxia antibiótica não reduz DIP.</li>
<li>DIP na usuária de DIU: tratar com o dispositivo no lugar; reavaliar em 48 a 72 horas; retirar só sem melhora.</li>
<li>Ambulatorial: ceftriaxona IM, doxiciclina e metronidazol por 14 dias; tratar o parceiro.</li>
<li>Internar: abscesso, gestação, doença grave, falha ou intolerância oral, dúvida cirúrgica; o DIU não é critério.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que período o DIU aumenta o risco de doença inflamatória pélvica e por quê? <details><summary>Resposta</summary>Nas três primeiras semanas após a inserção, pela contaminação do canal cervical durante o procedimento.</details></li>
<li>Qual é a conduta com o DIU na mulher que desenvolve DIP? <details><summary>Resposta</summary>Manter o dispositivo, iniciar antibiótico e reavaliar em 48 a 72 horas; retirar apenas se não houver melhora clínica.</details></li>
<li>Quais são os critérios de internação na DIP? <details><summary>Resposta</summary>Abscesso tubo-ovariano, gestação, doença grave, intolerância ou falha do tratamento oral e impossibilidade de excluir emergência cirúrgica.</details></li>
</ol>
`,

/* --- Volume 2 · GO · FAMEMA 2026 (go91–go100) ------------------------------------------- */
"famema2026#49": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a vaginose bacteriana pelos critérios de Amsel e pela história.</li>
<li>Diferenciá-la da candidíase e da tricomoníase.</li>
<li>Tratar a vaginose, inclusive na gestante e nos casos recorrentes.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Vaginose bacteriana</dt>
<dd>Desequilíbrio da microbiota vaginal com queda dos lactobacilos e predomínio de anaeróbios (Gardnerella, Atopobium, Mobiluncus, Prevotella); causa mais comum de corrimento.</dd>
<dt>Critérios de Amsel</dt>
<dd>Corrimento homogêneo acinzentado, pH acima de 4,5, teste das aminas positivo e clue cells; três de quatro fecham o diagnóstico.</dd>
<dt>Clue cells</dt>
<dd>Células epiteliais vaginais recobertas por cocobacilos, com bordas apagadas, vistas no exame a fresco.</dd>
<dt>Escore de Nugent</dt>
<dd>Graduação da flora na coloração de Gram, de 0 a 10; 7 ou mais define vaginose; padrão laboratorial.</dd>
</dl>
<h4>O essencial</h4>
<p>A vagina saudável é dominada por lactobacilos, que produzem ácido láctico e peróxido de hidrogênio e mantêm o pH entre 3,8 e 4,5. Na <strong>vaginose</strong> essa população cai e os anaeróbios se multiplicam, formando um biofilme sobre o epitélio e produzindo aminas voláteis (putrescina, cadaverina, trimetilamina), responsáveis pelo <strong>odor de peixe</strong>. O odor piora quando o meio fica alcalino, isto é, após o <strong>sêmen</strong> e durante a <strong>menstruação</strong>, e é esse detalhe da história que a identifica.</p>
<p>O diagnóstico clínico usa os <strong>critérios de Amsel</strong>: corrimento fino, homogêneo e acinzentado, aderido às paredes; <strong>pH acima de 4,5</strong>; <strong>teste das aminas positivo</strong> (odor de peixe ao pingar hidróxido de potássio a 10%); e <strong>clue cells</strong> em mais de 20% das células no exame a fresco. Três de quatro bastam.</p>
<p>O tratamento é <strong>metronidazol 500 mg por via oral duas vezes ao dia por sete dias</strong>, ou metronidazol gel vaginal por cinco noites, ou clindamicina creme vaginal por sete noites; a dose única de 2 g é menos eficaz e não é mais recomendada. O parceiro não é tratado, porque não reduz a recorrência.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A frase que entrega a vaginose é "o cheiro piora depois da relação e na menstruação": o sêmen e o sangue alcalinizam o meio e volatilizam as aminas. Sem prurido, sem inflamação, sem resposta ao antifúngico. Trate com metronidazol oral por sete dias e não trate o parceiro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Queda dos lactobacilos e predomínio de anaeróbios (Gardnerella e outros); aminas voláteis causam o odor de peixe.</li>
<li>Odor piora com sêmen e menstruação; pouco prurido; mucosa sem inflamação; não é IST.</li>
<li>Amsel: corrimento homogêneo, pH acima de 4,5, aminas positivas, clue cells; três de quatro.</li>
<li>Diferenciais: candidíase (pH normal, grumos, prurido), tricomoníase (bolhoso, colpite, protozoários móveis).</li>
<li>Metronidazol 500 mg 2×/dia por 7 dias; parceiro não se trata; gestante sintomática se trata; recorrência com gel supressivo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o odor da vaginose piora após a relação sexual e na menstruação? <details><summary>Resposta</summary>Porque sêmen e sangue alcalinizam o meio vaginal e volatilizam as aminas produzidas pelos anaeróbios.</details></li>
<li>Quais são os critérios de Amsel e quantos são necessários? <details><summary>Resposta</summary>Corrimento homogêneo acinzentado, pH acima de 4,5, teste das aminas positivo e clue cells; três de quatro.</details></li>
<li>O parceiro da mulher com vaginose deve ser tratado? <details><summary>Resposta</summary>Não; o tratamento do parceiro não reduz a recorrência e a vaginose não é infecção sexualmente transmissível.</details></li>
</ol>
`,

"famema2026#51": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os fatores de risco e as manifestações do leiomioma uterino.</li>
<li>Classificar os miomas pela localização (FIGO) e relacionar com os sintomas.</li>
<li>Escolher o tratamento conforme sintoma, desejo reprodutivo e idade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Leiomioma</dt>
<dd>Tumor benigno monoclonal do músculo liso uterino, estrogênio e progesterona-dependente; presente em até 70% das mulheres aos 50 anos, sintomático em um quarto.</dd>
<dt>Classificação FIGO</dt>
<dd>Tipos 0 a 2 submucosos, 3 e 4 intramurais, 5 a 7 subserosos, 8 outros; o tipo define sintomas e abordagem.</dd>
<dt>Miomectomia</dt>
<dd>Retirada dos miomas com preservação do útero, por histeroscopia (submucosos), laparoscopia ou laparotomia; indicada no desejo reprodutivo.</dd>
<dt>Degeneração</dt>
<dd>Alteração do mioma por isquemia (hialina, cística, rubra na gestação); causa dor aguda e crescimento aparente.</dd>
</dl>
<h4>O essencial</h4>
<p>Os leiomiomas nascem de uma única célula muscular lisa e crescem sob estrogênio e progesterona, o que explica por que surgem na menacme, crescem na gestação e regridem na menopausa.</p>
<p>Os <strong>submucosos</strong> (FIGO 0 a 2) e os intramurais que deformam a cavidade causam <strong>sangramento menstrual aumentado</strong>, com ciclos regulares, por aumento da superfície endometrial, alteração da contratilidade e angiogênese local, e são os que mais reduzem a fertilidade, por prejudicar a implantação; os <strong>intramurais</strong> grandes aumentam o útero e dão sensação de peso; os <strong>subserosos</strong> (5 a 7) comprimem bexiga, reto e ureter, com polaciúria, constipação e dor lombar, e podem torcer quando pediculados.</p>
<p>Mioma assintomático se observa. Para o sangramento, as opções clínicas são o DIU de levonorgestrel (sem distorção da cavidade), o ácido tranexâmico, os contraceptivos e, por curto prazo, os análogos do GnRH ou antagonistas orais, que reduzem o volume antes da cirurgia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher negra, nuligesta, com menarca precoce, menstruação cada vez mais volumosa, peso pélvico e infertilidade, sem dor na relação, tem miomatose; a dispareunia e a dismenorreia progressiva apontariam para endometriose, e a multípara acima de 40 com útero globoso e doloroso, para adenomiose. Com desejo de gravidez, a resposta terapêutica é miomectomia, não histerectomia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tumor benigno hormônio-dependente; risco maior em negras, menarca precoce, nuliparidade, obesidade, 35 a 50 anos.</li>
<li>Submucosos: sangramento e infertilidade; intramurais: volume e peso; subserosos: compressão e torção.</li>
<li>Menorragia com ciclos regulares e sem dispareunia distingue mioma de endometriose e adenomiose.</li>
<li>Ultrassom transvaginal diagnostica; histeroscopia e ressonância planejam.</li>
<li>Assintomático observa; sangramento com DIU hormonal, tranexâmico ou análogos; desejo reprodutivo pede miomectomia; prole completa, histerectomia ou embolização.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais fatores de risco para leiomioma a história costuma trazer? <details><summary>Resposta</summary>Etnia negra, menarca precoce, nuliparidade, obesidade, história familiar e idade entre 35 e 50 anos.</details></li>
<li>Que tipo de mioma mais causa sangramento e infertilidade? <details><summary>Resposta</summary>O submucoso e o intramural que deforma a cavidade, por aumentar a superfície endometrial e prejudicar a implantação.</details></li>
<li>Qual é o tratamento cirúrgico para a mulher com miomas sintomáticos que deseja engravidar? <details><summary>Resposta</summary>A miomectomia, histeroscópica para os submucosos e laparoscópica ou aberta para os demais, preservando o útero.</details></li>
</ol>
`,

"famema2026#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o transtorno do desejo sexual hipoativo na mulher climatérica.</li>
<li>Descrever o uso da testosterona transdérmica: indicação, dose, monitorização.</li>
<li>Entender o efeito das vias de estrogênio sobre a testosterona livre.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Transtorno do desejo sexual hipoativo</dt>
<dd>Redução persistente do desejo e das fantasias sexuais que causa sofrimento pessoal, não explicada por relação, doença ou medicamento.</dd>
<dt>Globulina ligadora de hormônios sexuais (SHBG)</dt>
<dd>Proteína hepática que liga estradiol e testosterona; o estrogênio oral a eleva, reduzindo a testosterona livre.</dd>
<dt>Testosterona transdérmica em dose feminina</dt>
<dd>Cerca de 300 mcg/dia, um décimo da dose masculina, visando níveis séricos da pré-menopausa.</dd>
<dt>Síndrome geniturinária da menopausa</dt>
<dd>Atrofia vulvovaginal e urinária por hipoestrogenismo; dispareunia e secura que também reduzem o desejo e se tratam com estrogênio vaginal.</dd>
</dl>
<h4>O essencial</h4>
<p>A função sexual feminina depende de fatores relacionais, psicológicos e hormonais, e o <strong>desejo</strong> tem forte componente androgênico. A produção ovariana e adrenal de testosterona cai gradualmente com a idade e despenca após a ooforectomia; a menopausa natural reduz menos, mas o hipoestrogenismo acrescenta secura e dispareunia, que afastam a mulher do sexo.</p>
<p>O <strong>Consenso Global de 2019</strong> sobre testosterona na mulher concluiu que a única indicação com evidência é o <strong>transtorno do desejo sexual hipoativo na pós-menopausa</strong>, em dose fisiológica feminina por via <strong>transdérmica</strong>, com ganho significativo em desejo, excitação, orgasmo, prazer e redução do sofrimento.</p>
<p>A testosterona se acrescenta à <strong>terapia estrogênica</strong> em curso, que deve ser mantida: o estrogênio controla os fogachos, trata a atrofia e é parte do substrato hormonal da resposta sexual.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher climatérica em terapia hormonal com fogachos controlados e desejo baixo: a resposta é acrescentar testosterona transdérmica e manter o estrogênio. Trocar o estrogênio para a via oral piora, porque sobe a SHBG; suspender o estrogênio tira o alívio dos fogachos; mexer no anti-hipertensivo não resolve a libido.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Desejo tem componente androgênico; excluir depressão, antidepressivos, dispareunia, conflito, prolactina e tireoide antes de tratar.</li>
<li>Única indicação com evidência para testosterona na mulher: desejo hipoativo na pós-menopausa, via transdérmica, dose de um décimo da masculina.</li>
<li>Monitorar níveis para a faixa da pré-menopausa; efeitos: acne, hirsutismo; suspender se sem resposta em seis meses.</li>
<li>Manter a terapia estrogênica; preferir via transdérmica, porque o estrogênio oral eleva a SHBG e reduz a testosterona livre.</li>
<li>Estrogênio vaginal, lubrificantes e terapia sexual completam o cuidado; anti-hipertensivos raramente são a causa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a única indicação com evidência para testosterona na mulher, segundo o consenso de 2019? <details><summary>Resposta</summary>O transtorno do desejo sexual hipoativo na pós-menopausa, em dose fisiológica por via transdérmica.</details></li>
<li>Por que a mudança do estrogênio para a via oral pode piorar o desejo? <details><summary>Resposta</summary>Porque o estrogênio oral eleva a SHBG hepática e reduz a fração livre da testosterona.</details></li>
<li>Como se monitora a mulher em uso de testosterona transdérmica? <details><summary>Resposta</summary>Dosando a testosterona antes e após três a seis semanas para mantê-la na faixa da pré-menopausa, e vigiando acne e hirsutismo.</details></li>
</ol>
`,

"famema2026#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever os métodos contraceptivos reversíveis de longa duração e sua eficácia.</li>
<li>Justificar sua recomendação como primeira linha para adolescentes.</li>
<li>Desfazer os mitos sobre DIU em nulíparas e sobre o acesso da adolescente à contracepção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>LARC</dt>
<dd>Contraceptivos reversíveis de longa duração: implante de etonogestrel (3 anos), DIU de levonorgestrel (5 a 8 anos) e DIU de cobre (10 anos).</dd>
<dt>Taxa de falha de uso típico</dt>
<dd>Gestações em um ano de uso real: abaixo de 1% para LARC, 7 a 9% para pílula, adesivo e anel, 13% para preservativo.</dd>
<dt>Dupla proteção</dt>
<dd>Associação de um método eficaz contra gravidez com o preservativo para prevenir infecções sexualmente transmissíveis.</dd>
<dt>Confidencialidade</dt>
<dd>Direito da adolescente ao atendimento e à prescrição contraceptiva sem a presença ou autorização dos pais, garantido pelo Estatuto da Criança e do Adolescente e pelo Código de Ética Médica.</dd>
</dl>
<h4>O essencial</h4>
<p>A adolescência concentra a gravidez não planejada, e a principal razão é a falha de uso dos métodos que dependem de adesão diária: a pílula tem falha de 7 a 9% ao ano em uso típico, e nas adolescentes a descontinuação em um ano passa de 50%.</p>
<p>Os mitos caem diante da evidência. O DIU não aumenta a infertilidade nem a doença inflamatória pélvica fora das três primeiras semanas após a inserção; o rastreio de clamídia e gonorreia é feito no dia da inserção sem adiá-la. A nuliparidade não contraindica: a expulsão é apenas um pouco mais frequente (até 5 a 10%) e a inserção é possível com analgesia adequada.</p>
<p>A escolha entre eles considera o perfil de sangramento: o implante causa sangramento irregular em metade das usuárias, a principal causa de retirada; o DIU hormonal reduz o fluxo e trata dismenorreia; o DIU de cobre aumenta o fluxo e a cólica, mas não tem hormônio. O aconselhamento antecipa esses efeitos para melhorar a continuidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Adolescente pedindo contracepção segura além da camisinha: a resposta certa é oferecer LARC, implante ou DIU, como primeira linha, e reforçar a dupla proteção. Desconfie de qualquer afirmação de que DIU é contraindicado em nulíparas, de que LARC tem estrogênio ou de que o injetável trimestral é o mais indicado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>LARC: implante de etonogestrel, DIU de levonorgestrel e DIU de cobre; falha abaixo de 1%, continuidade alta.</li>
<li>Primeira linha para adolescentes, inclusive nulíparas, pelo ACOG, OMS e FEBRASGO; oferecer ativamente.</li>
<li>Não aumentam DIP após as três primeiras semanas nem infertilidade; não contêm estrogênio.</li>
<li>Injetável trimestral não é LARC e reduz a densidade óssea na adolescente; dupla proteção com preservativo sempre.</li>
<li>Aconselhar sobre sangramento: implante irregular, DIU hormonal reduz fluxo, DIU de cobre aumenta; atendimento confidencial é direito.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que os LARC são recomendados como primeira linha para adolescentes? <details><summary>Resposta</summary>Porque não dependem de adesão diária, têm falha abaixo de 1% e continuidade muito maior que os métodos de curta duração.</details></li>
<li>A nuliparidade contraindica o DIU na adolescente? <details><summary>Resposta</summary>Não; a expulsão é apenas um pouco mais frequente e não há aumento de infertilidade nem de DIP fora do período pós-inserção.</details></li>
<li>Por que o injetável trimestral fica atrás do implante e do DIU na adolescente? <details><summary>Resposta</summary>Porque exige retorno a cada três meses, não é LARC e reduz a densidade óssea durante o crescimento.</details></li>
</ol>
`,

"famema2026#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o abscesso tubo-ovariano e seus critérios de internação.</li>
<li>Descrever a escalada terapêutica: antibiótico, drenagem e cirurgia.</li>
<li>Identificar a rotura do abscesso como indicação cirúrgica absoluta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Abscesso tubo-ovariano</dt>
<dd>Coleção purulenta que envolve tuba e ovário, complicação de 15 a 30% das internações por doença inflamatória pélvica; polimicrobiano com anaeróbios.</dd>
<dt>Drenagem guiada por imagem</dt>
<dd>Punção percutânea, transvaginal ou transglútea, por ultrassom ou tomografia, com ou sem cateter; opção no lugar da cirurgia em abscessos acessíveis.</dd>
<dt>Rotura do abscesso</dt>
<dd>Extravasamento de pus na cavidade peritoneal, com peritonite difusa, íleo e choque séptico; emergência cirúrgica.</dd>
<dt>Síndrome de Fitz-Hugh-Curtis</dt>
<dd>Peri-hepatite por disseminação da DIP, com dor no hipocôndrio direito e aderências em corda de violino.</dd>
</dl>
<h4>O essencial</h4>
<p>O abscesso tubo-ovariano é o estágio mais avançado da doença inflamatória pélvica: a infecção ascendente destrói o epitélio tubário, a tuba se fecha e enche de pus, e o processo envolve o ovário e as estruturas vizinhas. A paciente tem dor pélvica, febre, massa anexial dolorosa e leucocitose, e o ultrassom transvaginal mostra massa complexa, multiloculada, com paredes espessas e debris; a tomografia ajuda quando há dúvida com apendicite ou diverticulite.</p>
<p>A resposta ao antibiótico isolado chega a 70% nos abscessos menores que 7 a 8 cm, e é avaliada em <strong>48 a 72 horas</strong> por febre, dor, leucograma e tamanho da coleção. Sem melhora nesse prazo, ou de início em abscessos grandes, acrescenta-se a <strong>drenagem guiada por imagem</strong>, que resolve a maioria dos casos restantes e poupa a cirurgia e a fertilidade.</p>
<p>Uma situação dispensa qualquer escalada: a <strong>rotura</strong>. Quando o abscesso se rompe, o pus se espalha pela cavidade, e a paciente desenvolve dor abdominal difusa de início abrupto, defesa e descompressão positivas, íleo, taquicardia, hipotensão e sinais de sepse.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Abscesso tubo-ovariano: internar, antibiótico venoso com anaeróbios cobertos, reavaliar em 48 a 72 horas, drenar se não melhorar ou se grande, operar se falhar. A única indicação de cirurgia obrigatória e imediata é a rotura, com peritonite e choque. Tamanho de 5 cm, agente isolado e doze horas de antibiótico não decidem cirurgia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Abscesso tubo-ovariano: dor, febre, massa anexial complexa ao ultrassom; sempre internar.</li>
<li>Antibiótico venoso cobrindo anaeróbios: ceftriaxona com doxiciclina e metronidazol, ou clindamicina com gentamicina.</li>
<li>Reavaliar em 48 a 72 horas; 70% respondem se menores que 7 a 8 cm.</li>
<li>Sem melhora ou abscesso grande: drenagem guiada por imagem; cirurgia na falha ou na dúvida.</li>
<li>Rotura (peritonite difusa, choque): cirurgia imediata obrigatória; depois, parceiro, rastreio de IST e aconselhamento sobre fertilidade.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a única indicação absoluta e imediata de cirurgia no abscesso tubo-ovariano? <details><summary>Resposta</summary>A rotura do abscesso, com peritonite generalizada e sinais de sepse.</details></li>
<li>Em quanto tempo se avalia a resposta ao antibiótico e qual é o próximo passo na falha? <details><summary>Resposta</summary>Em 48 a 72 horas; sem melhora, drenagem guiada por imagem antes de considerar cirurgia.</details></li>
<li>Quais esquemas antibióticos venosos são adequados ao abscesso tubo-ovariano? <details><summary>Resposta</summary>Ceftriaxona com doxiciclina e metronidazol, ou clindamicina com gentamicina, ambos cobrindo anaeróbios.</details></li>
</ol>
`,

"famema2026#56": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar os descritores de suspeição do nódulo mamário ao ultrassom e à mamografia.</li>
<li>Aplicar as categorias BI-RADS e a conduta de cada uma.</li>
<li>Escolher o método de biópsia do nódulo suspeito.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>BI-RADS</dt>
<dd>Sistema do Colégio Americano de Radiologia que padroniza o laudo e a conduta: 0 incompleto, 1 negativo, 2 benigno, 3 provavelmente benigno, 4 suspeito, 5 altamente suspeito, 6 câncer confirmado.</dd>
<dt>Orientação não paralela</dt>
<dd>Nódulo mais alto que largo, com eixo maior perpendicular à pele; sinal de crescimento através dos planos teciduais, suspeito de malignidade.</dd>
<dt>Margens</dt>
<dd>Circunscritas sugerem benignidade; indistintas, angulares, microlobuladas ou espiculadas sugerem malignidade.</dd>
<dt>Biópsia por agulha grossa</dt>
<dd>Core biopsy guiada por ultrassom, método de escolha para nódulo sólido; fornece histologia e imuno-histoquímica.</dd>
</dl>
<h4>O essencial</h4>
<p>O ultrassom caracteriza o nódulo mamário por forma, orientação, margens, ecogenicidade, padrão acústico posterior e calcificações. Os achados <strong>benignos</strong> são forma oval, orientação paralela à pele (mais largo que alto), margens circunscritas, ecotextura homogênea e, nos cistos, conteúdo anecoico com reforço acústico posterior.</p>
<p>O <strong>BI-RADS</strong> traduz a imagem em conduta. <strong>1</strong> e <strong>2</strong>: rastreamento habitual. <strong>3</strong>, provavelmente benigno (risco abaixo de 2%): controle em seis meses, depois anual até dois anos de estabilidade; vale para nódulo oval, circunscrito e paralelo, e para fibroadenoma típico na jovem.</p>
<p>A biópsia do nódulo sólido é feita por <strong>agulha grossa guiada por ultrassom</strong>, que retira fragmentos para histologia e imuno-histoquímica (receptores hormonais, HER2, Ki-67), definindo diagnóstico e subtipo antes de qualquer cirurgia. A punção por agulha fina serve para cistos e para linfonodos, mas não distingue carcinoma in situ de invasivo nem fornece marcadores.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dois descritores suspeitos bastam para fechar BI-RADS 4 e pedir biópsia: nódulo mais alto que largo e margens irregulares. Nem o controle em seis meses (que é do BI-RADS 3, só para o nódulo oval e circunscrito) nem a calcificação grosseira ao lado tranquilizam. O método é a core biopsy guiada por ultrassom.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Benigno ao ultrassom: oval, paralelo, circunscrito, homogêneo, reforço posterior; suspeito: irregular, não paralelo, margens indistintas ou espiculadas, sombra, microcalcificações.</li>
<li>Mamografia: espículas, distorção e microcalcificações pleomórficas são alarme; calcificações grosseiras isoladas são benignas.</li>
<li>BI-RADS 1 e 2: rotina; 3: controle em seis meses; 4 e 5: biópsia; 0: completar o exame.</li>
<li>Nódulo sólido com descritor suspeito é no mínimo 4; calcificação grosseira dentro dele não rebaixa a categoria.</li>
<li>Biópsia por agulha grossa guiada por ultrassom para nódulo; a vácuo por estereotaxia para microcalcificações; agulha fina para cistos e linfonodos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que descritores ultrassonográficos indicam suspeição em um nódulo mamário? <details><summary>Resposta</summary>Forma irregular, orientação não paralela (mais alto que largo), margens indistintas, angulares, microlobuladas ou espiculadas, sombra acústica posterior e microcalcificações.</details></li>
<li>Qual é a conduta para BI-RADS 3 e para BI-RADS 4? <details><summary>Resposta</summary>BI-RADS 3: controle em seis meses; BI-RADS 4: biópsia.</details></li>
<li>Por que a biópsia por agulha grossa é preferida à agulha fina no nódulo sólido? <details><summary>Resposta</summary>Porque fornece histologia, distingue in situ de invasivo e permite imuno-histoquímica para receptores hormonais, HER2 e Ki-67.</details></li>
</ol>
`,

"famema2026#57": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar o corte de 2 cm que define inserção normal, placenta baixa e prévia.</li>
<li>Entender a migração placentária e o momento de repetir o ultrassom.</li>
<li>Decidir a via de parto pela distância do bordo ao orifício interno.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Inserção normal</dt>
<dd>Bordo placentário a 2 cm ou mais do orifício interno do colo ao ultrassom transvaginal; sem restrição à via vaginal.</dd>
<dt>Segmento inferior</dt>
<dd>Porção do útero entre o corpo e o colo, que se forma e se alonga no terceiro trimestre, afastando o bordo placentário do colo.</dd>
<dt>Migração placentária</dt>
<dd>Afastamento aparente do bordo da placenta em relação ao colo com o avanço da gestação; 90% das placentas baixas do segundo trimestre normalizam.</dd>
<dt>Ultrassom transvaginal</dt>
<dd>Método de escolha para medir a distância do bordo placentário ao orifício interno; seguro mesmo com sangramento.</dd>
</dl>
<h4>O essencial</h4>
<p>A placenta se implanta onde o blastocisto aderiu, e no segundo trimestre cerca de 5% das gestações têm a placenta próxima ou sobre o colo. Com o crescimento do útero e a formação do <strong>segmento inferior</strong>, a porção baixa do útero se alonga e a placenta "sobe" em relação ao colo, fenômeno chamado <strong>migração</strong>, embora a placenta não se mova; é o útero que cresce sob ela, e a porção sobre o colo, menos vascularizada, tende a atrofiar.</p>
<p>A classificação atual é medida no <strong>ultrassom transvaginal</strong>: <strong>prévia</strong> quando o tecido placentário cobre o orifício interno; <strong>baixa</strong> quando o bordo fica a menos de <strong>2 cm</strong> sem cobrir; <strong>normal</strong> quando a distância é de <strong>2 cm ou mais</strong>.</p>
<p>A via de parto segue a distância final. Prévia: cesárea eletiva entre 36 e 37 semanas. Baixa com bordo entre 1 e 2 cm: parto vaginal pode ser tentado em serviço com banco de sangue e cesárea disponível, com taxa de sucesso de 60 a 75%; abaixo de 1 cm, a maioria dos protocolos indica cesárea pelo risco de hemorragia. Normal, com 2 cm ou mais: via obstétrica habitual. Qualquer sangramento ativo com instabilidade indica cesárea imediata, independentemente da classificação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte sempre pela distância em centímetros. Três centímetros ou mais é normal, dois a três é normal, abaixo de dois é baixa, cobrindo é prévia. Marginal e lateral são nomes antigos e distratores. E o achado do segundo trimestre não é definitivo: repete-se às 32 e 36 semanas antes de rotular.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Formação do segmento inferior afasta o bordo placentário do colo; 90% das placentas baixas do segundo trimestre normalizam.</li>
<li>Classificação pelo ultrassom transvaginal: prévia cobre o orifício; baixa fica a menos de 2 cm; normal a 2 cm ou mais.</li>
<li>Inserção normal não exige repetição nem cuidados; baixa ou prévia reavalia às 32 e 36 semanas.</li>
<li>Via de parto: prévia é cesárea 36 a 37 semanas; baixa entre 1 e 2 cm pode tentar vaginal; abaixo de 1 cm, cesárea; sangramento instável, cesárea imediata.</li>
<li>Cesárea anterior com placenta baixa ou prévia anterior: pesquisar acretismo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>A que distância do orifício interno a inserção placentária é considerada normal? <details><summary>Resposta</summary>A 2 cm ou mais, medida pelo ultrassom transvaginal.</details></li>
<li>Por que a placenta parece "subir" ao longo da gestação? <details><summary>Resposta</summary>Porque o segmento inferior se forma e se alonga sob a placenta, afastando o bordo do colo, e a porção sobre o colo atrofia.</details></li>
<li>Quando se repete o ultrassom numa placenta baixa diagnosticada às 20 semanas? <details><summary>Resposta</summary>Às 32 semanas e, se persistir, às 36 semanas, para planejar a via de parto.</details></li>
</ol>
`,

"famema2026#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Confirmar a pré-eclâmpsia na gestante com hipertensão nova após 20 semanas.</li>
<li>Interpretar a relação proteína/creatinina e os demais exames de gravidade.</li>
<li>Reconhecer fatores de risco e sinais de alerta da pré-eclâmpsia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Relação proteína/creatinina</dt>
<dd>Razão entre proteína e creatinina em amostra isolada de urina; 0,3 ou mais equivale a 300 mg em 24 horas e define proteinúria significativa.</dd>
<dt>Proteinúria de 24 horas</dt>
<dd>Padrão histórico, 300 mg ou mais; demorada e sujeita a erro de coleta, substituída pela relação na urgência.</dd>
<dt>Pré-eclâmpsia sem proteinúria</dt>
<dd>Hipertensão nova com plaquetopenia, creatinina acima de 1,1, transaminases duplicadas, edema pulmonar ou sintomas neurológicos ou visuais.</dd>
<dt>Fatores de risco</dt>
<dd>Pré-eclâmpsia anterior, hipertensão crônica, diabetes, doença renal, autoimunidade, gemelaridade (alto risco); nuliparidade, obesidade, idade acima de 35, história familiar, troca de parceiro, reprodução assistida (moderado).</dd>
</dl>
<h4>O essencial</h4>
<p>A pré-eclâmpsia é a doença da placenta que adoece a mãe: a invasão trofoblástica deficiente das artérias espiraladas gera isquemia placentária, liberação de fatores antiangiogênicos (sFlt-1, endoglina solúvel) e disfunção endotelial sistêmica, com vasoconstrição, aumento da permeabilidade, ativação da coagulação e lesão glomerular.</p>
<p>Diante da hipertensão nova, o exame que confirma o diagnóstico é a pesquisa de <strong>proteinúria</strong>, e o método recomendado é a <strong>relação proteína/creatinina em amostra isolada</strong>, com corte de <strong>0,3</strong> (mg/mg), que tem boa correlação com a proteinúria de 24 horas, resultado em horas e sem erro de coleta.</p>
<p>Os <strong>fatores de risco</strong> importam na prevenção e na suspeita. A troca de parceiro aponta para a hipótese imunológica: a exposição a novos antígenos paternos aumenta o risco, assim como a nuliparidade e o intervalo interpartal longo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipertensão que surge após 20 semanas pede um exame para fechar pré-eclâmpsia: a relação proteína/creatinina em amostra isolada, com corte de 0,3. Ácido úrico ajuda a graduar, proteínas totais e gasometria não ajudam em nada. Troca de parceiro, ganho de peso rápido e nuliparidade são as pistas que o enunciado planta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pré-eclâmpsia: hipertensão após 20 semanas com proteinúria ou disfunção de órgão; mecanismo placentário e endotelial.</li>
<li>Confirmação: relação proteína/creatinina em amostra isolada, 0,3 ou mais; fita é só triagem; 24 horas é padrão antigo.</li>
<li>Exames de gravidade: plaquetas, creatinina, transaminases, LDH, bilirrubinas; ácido úrico gradua, não diagnostica.</li>
<li>Fatores de risco: pré-eclâmpsia anterior, hipertensão, diabetes, renal, autoimune, gemelar (alto); nuliparidade, obesidade, idade, troca de parceiro (moderado).</li>
<li>Prevenção: aspirina 100 a 150 mg desde 12 semanas e cálcio em dieta pobre; sinais de alerta orientados a toda gestante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual exame confirma a proteinúria da pré-eclâmpsia na urgência e qual é o corte? <details><summary>Resposta</summary>A relação proteína/creatinina em amostra isolada de urina, com corte de 0,3, equivalente a 300 mg em 24 horas.</details></li>
<li>O ácido úrico é critério diagnóstico de pré-eclâmpsia? <details><summary>Resposta</summary>Não; eleva-se e correlaciona-se com a gravidade, mas não define o diagnóstico.</details></li>
<li>Por que a troca de parceiro é fator de risco para pré-eclâmpsia? <details><summary>Resposta</summary>Pela hipótese imunológica: a exposição a novos antígenos paternos aumenta a resposta materna anormal à placentação.</details></li>
</ol>
`,

"famema2026#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as contraindicações absolutas e relativas à amamentação no Brasil.</li>
<li>Diferenciar as infecções que impedem o aleitamento das que não impedem.</li>
<li>Orientar a mulher que não pode amamentar: inibição da lactação e fórmula.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Contraindicação absoluta</dt>
<dd>Situação em que o leite materno não pode ser oferecido em nenhuma circunstância: HIV, HTLV 1 e 2, antineoplásicos e radiofármacos (materna); galactosemia clássica (do lactente).</dd>
<dt>Contraindicação temporária</dt>
<dd>Interrupção enquanto dura a condição: varicela com lesões cinco dias antes a dois dias após o parto, herpes com lesão na mama, abscesso mamário na mama afetada, drogas de abuso.</dd>
<dt>Inibição da lactação</dt>
<dd>Cabergolina 1 mg em dose única no primeiro dia pós-parto, ou 0,25 mg a cada 12 horas por dois dias, quando a amamentação é contraindicada.</dd>
<dt>Fórmula infantil</dt>
<dd>Fornecida pelo SUS às crianças expostas ao HIV até os 6 meses, com orientação de preparo e acompanhamento.</dd>
</dl>
<h4>O essencial</h4>
<p>O aleitamento materno exclusivo até os seis meses e complementado até os dois anos é a recomendação universal, e as situações que o impedem são poucas e precisas.</p>
<p>A maioria das infecções <strong>não contraindica</strong>. <strong>Hepatite B</strong>: amamenta, desde que o recém-nascido receba vacina e imunoglobulina nas primeiras 12 horas. <strong>Hepatite C</strong>: amamenta, com cautela apenas se há fissuras sangrantes. <strong>Tuberculose</strong>: amamenta com máscara, após início do tratamento, com o lactente em quimioprofilaxia. <strong>Citomegalovírus</strong>: amamenta a termo. <strong>Herpes</strong>: só impede na mama com lesão, cobrindo as outras.</p>
<p>Quanto a <strong>medicamentos</strong>, quase todos são compatíveis, e a referência é a classificação do Ministério da Saúde e da Sociedade Brasileira de Pediatria: contraindicados são antineoplásicos, amiodarona, lítio em algumas situações, iodo radioativo, drogas de abuso e, por risco de sedação neonatal, doses altas de opioides e fenobarbital.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quatro situações proíbem a amamentação: HIV, HTLV, antineoplásicos e galactosemia. Hepatites B e C não proíbem, e a prova testa exatamente esse mito. A opção "só HIV" está incompleta porque esquece os antineoplásicos, e a que inclui hepatite C ou B está errada porque inclui uma infecção que permite o aleitamento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Absolutas maternas: HIV, HTLV 1 e 2, antineoplásicos, imunossupressores potentes e radiofármacos; do lactente: galactosemia clássica.</li>
<li>Não contraindicam: hepatite B (vacina e imunoglobulina ao recém-nascido), hepatite C, tuberculose tratada, CMV, mastite, COVID-19 e influenza.</li>
<li>Temporárias: herpes na mama, abscesso na mama drenada, varicela perto do parto, drogas de abuso, radioisótopos de meia-vida curta.</li>
<li>Medicamentos quase sempre compatíveis; exceções: antineoplásicos, amiodarona, iodo radioativo, drogas de abuso.</li>
<li>Amamentação contraindicada: cabergolina para inibir a lactação, fórmula pelo SUS na exposição ao HIV, apoio emocional.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as contraindicações absolutas maternas à amamentação no Brasil? <details><summary>Resposta</summary>Infecção pelo HIV, pelo HTLV 1 e 2, e uso de antineoplásicos, imunossupressores potentes ou radiofármacos.</details></li>
<li>A mãe com hepatite B pode amamentar? <details><summary>Resposta</summary>Sim, desde que o recém-nascido receba a vacina e a imunoglobulina contra hepatite B nas primeiras 12 horas de vida.</details></li>
<li>Como se inibe a lactação quando a amamentação é contraindicada? <details><summary>Resposta</summary>Com cabergolina 1 mg em dose única no primeiro dia pós-parto, associada a enfaixamento das mamas e analgesia.</details></li>
</ol>
`,

"famema2026#63": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a rotura prematura de membranas pela clínica e pelos testes complementares.</li>
<li>Comparar a acurácia da nitrazina, da cristalização e dos testes imunocromatográficos.</li>
<li>Conduzir a rotura prematura de membranas conforme a idade gestacional.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Rotura prematura de membranas</dt>
<dd>Rotura antes do início do trabalho de parto, em qualquer idade gestacional; pré-termo quando antes de 37 semanas.</dd>
<dt>Teste da nitrazina</dt>
<dd>Papel que vira azul com pH acima de 6 a 6,5; falsos positivos com sangue, sêmen, vaginose e antissépticos; sensibilidade de 90%, especificidade de 80%.</dd>
<dt>Cristalização</dt>
<dd>Padrão em folha de samambaia do líquido amniótico seco na lâmina; falsos positivos com muco cervical e sêmen.</dd>
<dt>PAMG-1</dt>
<dd>Alfa-microglobulina placentária 1, proteína do líquido amniótico detectada por teste imunocromatográfico com sensibilidade e especificidade acima de 96%.</dd>
</dl>
<h4>O essencial</h4>
<p>A rotura prematura de membranas complica 8% das gestações a termo e um terço dos partos prematuros.</p>
<p>Quando a história é sugestiva e o exame não mostra líquido, entram os testes. O <strong>papel de nitrazina</strong> detecta o pH alcalino do líquido amniótico (7,0 a 7,5) contra o vaginal (4,5 a 5,5), mas erra com sangue, sêmen, urina alcalina, vaginose e antissépticos, e perde roturas antigas com pouco líquido residual.</p>
<p>Confirmada a rotura, a conduta segue a idade gestacional. A termo (37 semanas ou mais): indução do parto em até 24 horas, com ocitocina ou misoprostol, e profilaxia do estreptococo B se indicada. De 34 a 36 semanas e 6 dias: a resolução é a conduta mais aceita, embora a expectante até 37 semanas seja opção com vigilância rigorosa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a gestante relata perda de líquido e o especular não mostra nada, o teste de maior acurácia para confirmar ou excluir a rotura é a PAMG-1. A nitrazina erra com sangue e vaginose, a cristalização erra com muco, e a fibronectina responde a outra pergunta. Confirmada a rotura antes de 34 semanas, o pacote é antibiótico de latência, corticoide e vigilância, nunca tocólise de rotina.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diagnóstico clínico em 90%: história e líquido ao especular; evitar o toque.</li>
<li>Nitrazina (pH) e cristalização têm falsos positivos com sangue, sêmen, vaginose e muco.</li>
<li>PAMG-1 (AmniSure): sensibilidade e especificidade acima de 96%, sem interferência de sangue ou sêmen; o teste de maior acurácia.</li>
<li>Fibronectina fetal mede risco de parto prematuro, não rotura; prova do fenol está em desuso.</li>
<li>Conduta: a termo, indução em 24 h; 34 a 36 semanas, resolução; 24 a 33 semanas, expectante com antibiótico de latência, corticoide e vigilância, resolvendo às 34 semanas ou na infecção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o teste de maior sensibilidade e especificidade para a rotura de membranas quando o exame especular é inconclusivo? <details><summary>Resposta</summary>A detecção da alfa-microglobulina placentária 1 (PAMG-1) por teste imunocromatográfico.</details></li>
<li>Por que o papel de nitrazina pode dar falso positivo? <details><summary>Resposta</summary>Porque sangue, sêmen, urina alcalina, vaginose e antissépticos também elevam o pH vaginal.</details></li>
<li>Qual é a conduta na rotura prematura de membranas com 30 semanas sem infecção? <details><summary>Resposta</summary>Expectante hospitalar: antibiótico de latência por sete dias, corticoide, vigilância de infecção e vitalidade, e resolução às 34 semanas ou diante de complicação.</details></li>
</ol>
`,
};
