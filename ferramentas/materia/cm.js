/* "Sobre a matéria" — a página de livro-texto de cada questão de cm.
   Chave "fonte#numero" (a mesma da entrada); HTML em linhas, uma tag de
   bloco por linha (montar.js tira as quebras). Seis partes na ordem:
   Objetivos de aprendizagem · Termos-chave · O essencial · Ponto clínico
   (div.ponto) · Resumo · Verifique o que aprendeu. As regras estão em
   verificar.js. Escrito à mão. */
module.exports = {
"susp2026#1": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Graduar o sangramento de quem usa varfarina e decidir quando reverter.</li>
<li>Diferenciar a vitamina K do concentrado de complexo protrombínico pelo tempo de ação.</li>
<li>Reconhecer as interações que descontrolam o INR, como o anti-inflamatório.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>INR</dt>
<dd>Razão normalizada do tempo de protrombina; mede o efeito da varfarina, com alvo de 2 a 3 na fibrilação atrial.</dd>
<dt>Sangramento maior</dt>
<dd>Sangramento com instabilidade, queda de 2 g/dL de hemoglobina, transfusão ou sítio crítico (cérebro, retroperitônio).</dd>
<dt>Vitamina K</dt>
<dd>Permite ao fígado produzir novos fatores II, VII, IX e X; o efeito começa em 6 a 12 horas por via intravenosa.</dd>
<dt>Concentrado de complexo protrombínico</dt>
<dd>Fatores II, VII, IX e X já prontos; corrige o INR em minutos, em volume pequeno.</dd>
</dl>
<h4>O essencial</h4>
<p>A varfarina bloqueia a reciclagem da vitamina K e, com isso, a síntese dos fatores II, VII, IX e X e das proteínas C e S. O efeito é lento para começar e lento para acabar, e sofre com a dieta, com o álcool e com dezenas de fármacos. Os <strong>anti-inflamatórios</strong> são dos piores parceiros: deslocam a varfarina da albumina, inibem as plaquetas e lesam a mucosa gástrica, de modo que o sangramento digestivo vem com INR alto e plaqueta inoperante.</p>
<p>A conduta se gradua pela gravidade. Com <strong>INR acima da faixa sem sangramento</strong>, basta suspender doses e, acima de 10, dar vitamina K oral em dose baixa. Com <strong>sangramento menor</strong>, suspende-se a varfarina e usa-se vitamina K em dose baixa. Com <strong>sangramento maior</strong>, como a hematêmese com hipotensão, a reversão precisa ser completa e imediata: <strong>vitamina K intravenosa</strong> (5 a 10 mg, infusão lenta) e <strong>concentrado de complexo protrombínico</strong> (dose por peso e INR), além de cristaloide, hemácias e endoscopia quando estável. A vitamina K sozinha leva horas; o concentrado sozinho dura só algumas horas, porque os fatores infundidos se consomem e a varfarina continua ativa. Por isso os dois entram juntos.</p>
<p>O plasma fresco é a segunda escolha: exige 15 mL/kg, demora a descongelar e sobrecarrega o volume de quem tem coração ou rim doentes. Depois do episódio, discute-se a volta da anticoagulação pelo escore CHA2DS2-VASc contra o risco de ressangrar, e a troca por um anticoagulante direto quando a função renal permite.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sempre que um anticoagulado chega sangrando, pergunte o que ele tomou nos últimos dias. Um analgésico comprado sem receita costuma ser o gatilho. Na hematêmese com pressão caindo, não espere o INR: peça o concentrado, a vitamina K intravenosa e o sangue ao mesmo tempo que chama a endoscopia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Varfarina bloqueia os fatores dependentes de vitamina K; anti-inflamatório potencializa e lesa a mucosa.</li>
<li>Sem sangramento: suspender e, se INR acima de 10, vitamina K oral baixa.</li>
<li>Sangramento maior: vitamina K intravenosa e concentrado de complexo protrombínico, juntos.</li>
<li>Plasma fresco só se não houver concentrado; volume grande e efeito lento.</li>
<li>Depois: reavaliar a anticoagulação e as interações.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a vitamina K sozinha não basta no sangramento grave? <details><summary>Resposta</summary>Porque ela só permite a síntese de novos fatores pelo fígado, o que leva de 6 a 12 horas; o sangramento precisa de fatores prontos, que vêm do concentrado.</details></li>
<li>Por que o concentrado sozinho não basta? <details><summary>Resposta</summary>Porque os fatores infundidos se consomem em poucas horas e a varfarina continua bloqueando a síntese; a vitamina K sustenta a reversão.</details></li>
<li>Qual é o problema do plasma fresco no cardiopata renal? <details><summary>Resposta</summary>O volume grande, de cerca de 15 mL/kg, que congestiona, além da demora para descongelar.</details></li>
</ol>
`,
"susp2026#2": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Escolher a classe seguinte no diabetes tipo 2 pelo risco cardiovascular, pelo rim e pelo peso.</li>
<li>Conhecer os benefícios comprovados dos agonistas do GLP-1 e dos inibidores de SGLT2.</li>
<li>Saber o que não se faz: insistir em sulfonilureia, esperar ou pular para insulina sem necessidade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Agonista do receptor de GLP-1</dt>
<dd>Liraglutida, semaglutida, dulaglutida; estimulam insulina de forma dependente da glicose, reduzem apetite e peso e protegem contra eventos ateroscleróticos.</dd>
<dt>Inibidor de SGLT2</dt>
<dd>Empagliflozina, dapagliflozina; eliminam glicose pela urina e reduzem internação por insuficiência cardíaca e progressão renal.</dd>
<dt>Sulfonilureia</dt>
<dd>Glimepirida, gliclazida; secretagogos baratos, com ganho de peso e hipoglicemia, sem benefício cardiovascular.</dd>
<dt>Inércia terapêutica</dt>
<dd>Manter o esquema apesar da hemoglobina glicada fora da meta por mais de 3 meses.</dd>
</dl>
<h4>O essencial</h4>
<p>O tratamento do diabetes tipo 2 deixou de ser uma escada que só olha a glicada. A pergunta inicial é <strong>quem é o paciente</strong>: tem doença cardiovascular ou risco alto, tem insuficiência cardíaca, tem doença renal, tem obesidade? Para cada resposta há uma classe com benefício provado em desfechos, independentemente da glicemia. Doença aterosclerótica ou risco alto pede <strong>agonista do GLP-1</strong> ou inibidor de SGLT2; insuficiência cardíaca e doença renal pedem <strong>inibidor de SGLT2</strong>; obesidade pede o agonista do GLP-1, que faz perder 5 a 15% do peso.</p>
<p>A metformina continua como base pela eficácia, pelo custo e pela segurança, mas não precisa vir antes das classes com benefício cardiovascular. Quando a glicada segue acima da meta após <strong>3 meses</strong>, soma-se outra classe sem demora. No obeso de risco alto que já usa metformina e inibidor de SGLT2, a peça que falta é o agonista do GLP-1, de aplicação semanal ou diária, que baixa a glicada em 1 a 1,5 ponto, reduz o peso e a pressão, e reduz infarto, acidente vascular e morte cardiovascular. Os efeitos adversos são digestivos, transitórios, e se evitam com dose crescente.</p>
<p>A sulfonilureia é o elo fraco do esquema: causa hipoglicemia e ganho de peso e não protege o coração; é a primeira a sair quando entra uma classe melhor. A insulina basal fica para a glicada muito alta com sintomas, para a perda de peso involuntária ou para a falha das demais classes; não é o passo seguinte de um obeso com glicada moderadamente fora da meta. Esperar mais tempo sem mudar nada é a inércia que as diretrizes condenam.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante de um diabético obeso com risco cardiovascular alto, pense primeiro no coração e na balança, e só depois na glicada. A classe que trata os três ao mesmo tempo é o agonista do GLP-1, e ela entra assim que a meta não é atingida, não anos depois.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Escolha pela condição: aterosclerose e obesidade pedem agonista do GLP-1; coração e rim pedem inibidor de SGLT2.</li>
<li>Glicada fora da meta por 3 meses: somar classe, não esperar.</li>
<li>Agonista do GLP-1 baixa glicada, peso, pressão e eventos cardiovasculares.</li>
<li>Sulfonilureia é a primeira a sair; insulina fica para glicada muito alta ou falha.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais classes têm benefício cardiovascular comprovado? <details><summary>Resposta</summary>Os agonistas do GLP-1 e os inibidores de SGLT2, estes com benefício maior na insuficiência cardíaca e no rim.</details></li>
<li>Qual é o prazo para intensificar o tratamento? <details><summary>Resposta</summary>Cerca de 3 meses com a glicada fora da meta.</details></li>
<li>Por que a sulfonilureia perde espaço? <details><summary>Resposta</summary>Porque causa hipoglicemia e ganho de peso e não reduz eventos cardiovasculares.</details></li>
</ol>
`,
"susp2026#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Confirmar a DPOC pela espirometria e classificá-la pelo GOLD atual.</li>
<li>Escolher o esquema inalatório inicial de acordo com sintomas e exacerbações.</li>
<li>Saber quando o corticoide inalatório entra e quando ele prejudica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Obstrução fixa</dt>
<dd>Relação VEF1/CVF abaixo de 0,70 após broncodilatador; define a DPOC.</dd>
<dt>Grupos A, B e E</dt>
<dd>Classificação GOLD 2023: A pouco sintomático, B sintomático, E exacerbador (2 ou mais exacerbações ou 1 com internação).</dd>
<dt>LABA e LAMA</dt>
<dd>Beta-agonista e antimuscarínico de longa ação; a dupla broncodilatadora é a base do tratamento do sintomático e do exacerbador.</dd>
<dt>Eosinófilos</dt>
<dd>Contagem no sangue acima de 300 por microlitro indica resposta ao corticoide inalatório; abaixo de 100, ele não ajuda e aumenta pneumonia.</dd>
</dl>
<h4>O essencial</h4>
<p>A DPOC se diagnostica pela <strong>espirometria com obstrução fixa</strong> em quem tem exposição, em geral tabagismo acima de 10 anos-maço, e sintomas. O VEF1 gradua a gravidade, mas não decide o tratamento: quem decide são os <strong>sintomas</strong> (escala mMRC ou CAT) e a <strong>história de exacerbações</strong> no último ano. O GOLD 2023 reduziu os grupos a três: A, com pouco sintoma e sem exacerbação, começa com um broncodilatador; B, sintomático, começa com <strong>LABA e LAMA</strong> combinados; E, exacerbador, também começa com LABA e LAMA, acrescentando corticoide inalatório quando os eosinófilos passam de 300.</p>
<p>A dupla broncodilatadora em um só dispositivo, como umeclidínio com vilanterol ou tiotrópio com olodaterol, melhora função, dispneia e qualidade de vida e reduz exacerbações mais que cada um sozinho. O <strong>corticoide inalatório</strong> nunca é usado isolado na DPOC e não é a resposta automática à exacerbação: ele beneficia o exacerbador com eosinofilia ou com asma associada, e prejudica quem tem eosinófilos baixos ou pneumonia prévia. A tríplice (LABA, LAMA e corticoide) fica para quem exacerba apesar da dupla.</p>
<p>Fora dos inaladores, parar de fumar é a única medida que freia a queda do VEF1; vacinas contra influenza, pneumococo, coqueluche e vírus sincicial reduzem exacerbações; a reabilitação pulmonar melhora a tolerância ao esforço; e o oxigênio domiciliar é indicado na hipoxemia de repouso. Teofilina e corticoide oral de manutenção ficaram no passado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Tabagista com dispneia e espirometria obstrutiva que exacerbou no último ano: confira os eosinófilos antes de pensar em corticoide. Com eosinófilos baixos, a resposta é a dupla LABA e LAMA diária, com técnica inalatória revisada e vacinas em dia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diagnóstico: VEF1/CVF abaixo de 0,70 após broncodilatador em quem tem exposição.</li>
<li>Tratamento guiado por sintomas e exacerbações, não pelo VEF1.</li>
<li>Grupo B e grupo E começam com LABA e LAMA.</li>
<li>Corticoide inalatório só com eosinófilos acima de 300 ou asma associada; nunca isolado.</li>
<li>Cessação do tabagismo, vacinas e reabilitação completam o cuidado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que define o grupo E do GOLD? <details><summary>Resposta</summary>Duas ou mais exacerbações moderadas no ano, ou uma com internação, qualquer que seja o sintoma.</details></li>
<li>Quando o corticoide inalatório ajuda na DPOC? <details><summary>Resposta</summary>No exacerbador com eosinófilos acima de 300 por microlitro ou com asma associada, sempre combinado a broncodilatadores.</details></li>
<li>Qual medida muda a história natural da doença? <details><summary>Resposta</summary>Parar de fumar, que reduz a velocidade de queda do VEF1.</details></li>
</ol>
`,
"susp2026#5": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a dor lombar inflamatória e separá-la da mecânica.</li>
<li>Ligar a espondiloartrite axial ao HLA-B27 e às manifestações extra-articulares.</li>
<li>Saber o papel da ressonância das sacroilíacas e do tratamento com anti-inflamatório e biológico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Dor lombar inflamatória</dt>
<dd>Início antes dos 40 anos, insidioso, piora com repouso e à noite, melhora com exercício, rigidez matinal acima de 30 minutos.</dd>
<dt>HLA-B27</dt>
<dd>Antígeno de histocompatibilidade presente em 80 a 90% dos pacientes com espondilite anquilosante; apoia o diagnóstico, não o fecha.</dd>
<dt>Sacroiliíte</dt>
<dd>Inflamação das articulações sacroilíacas; edema ósseo na ressonância antes de aparecer na radiografia.</dd>
<dt>Entesite</dt>
<dd>Inflamação da inserção de tendões, como o calcâneo; marca das espondiloartrites.</dd>
</dl>
<h4>O essencial</h4>
<p>A maioria das lombalgias é mecânica: piora com esforço, melhora com repouso, acomete qualquer idade. A <strong>dor lombar inflamatória</strong> é o oposto e aparece em adulto jovem: começa devagar, acorda o paciente na segunda metade da noite, vem com <strong>rigidez matinal prolongada</strong>, melhora com atividade e responde bem a anti-inflamatório. A dor alternante nas nádegas vem das sacroilíacas. Quando quatro desses traços estão presentes, a probabilidade de espondiloartrite axial é alta e a investigação segue com o HLA-B27, a proteína C reativa e a imagem das sacroilíacas.</p>
<p>A <strong>espondiloartrite axial</strong> inclui a espondilite anquilosante, com sacroiliíte visível na radiografia, e a forma não radiográfica, em que só a ressonância mostra o edema ósseo. O <strong>HLA-B27</strong> é positivo na maioria, mas também em 8% da população geral; por isso é um apoio, interpretado junto com a clínica e a imagem. Entesite, dactilite, uveíte anterior, psoríase e doença inflamatória intestinal completam o quadro e ajudam a reconhecer a família das espondiloartrites. O fator reumatoide e o anti-CCP são negativos, o que a separa da artrite reumatoide, poliartrite simétrica de mãos; e não há indicação de pesquisar ANCA ou anticorpos antinucleares sem sinais de vasculite ou lúpus.</p>
<p>O tratamento começa com exercício regular e <strong>anti-inflamatório não esteroidal</strong> contínuo, que controla a dor na maioria. Na falha de dois anti-inflamatórios, entram os biológicos, inibidores do TNF ou da interleucina-17, ou os inibidores de JAK. Corticoide sistêmico e metotrexato não funcionam na doença axial.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Homem jovem com lombalgia que o acorda de madrugada, uma hora de rigidez ao levantar e alívio ao se mexer: não é hérnia de disco. Peça o HLA-B27, a proteína C reativa e a ressonância das sacroilíacas, e pergunte sobre olho vermelho, psoríase e diarreia com sangue.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dor lombar inflamatória: jovem, insidiosa, noturna, melhora com exercício, rigidez matinal longa.</li>
<li>HLA-B27 positivo em 80 a 90% da espondilite; apoia o diagnóstico.</li>
<li>Ressonância das sacroilíacas mostra a inflamação antes da radiografia.</li>
<li>Extra-articulares: uveíte anterior, entesite, psoríase, doença inflamatória intestinal.</li>
<li>Tratamento: exercício e anti-inflamatório; biológico anti-TNF ou anti-IL-17 na falha.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os traços da dor lombar inflamatória? <details><summary>Resposta</summary>Início antes dos 40 anos, insidioso, dor noturna, rigidez matinal prolongada, melhora com exercício e não com repouso.</details></li>
<li>Por que o HLA-B27 positivo não fecha o diagnóstico? <details><summary>Resposta</summary>Porque está presente em cerca de 8% da população geral sem doença; precisa de clínica e imagem compatíveis.</details></li>
<li>Qual é o tratamento inicial e o de resgate? <details><summary>Resposta</summary>Exercício e anti-inflamatório não esteroidal; na falha, biológico inibidor do TNF ou da interleucina-17.</details></li>
</ol>
`,
"susp2026#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a hiponatremia pela osmolaridade sérica e pelo volume extracelular.</li>
<li>Usar a osmolaridade urinária e o sódio urinário para achar a causa.</li>
<li>Reconhecer a hiponatremia da insuficiência cardíaca e tratá-la com restrição de água e diurético.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hiponatremia hipotônica</dt>
<dd>Sódio abaixo de 135 mEq/L com osmolaridade sérica abaixo de 275 mOsm/kg; é a hiponatremia verdadeira.</dd>
<dt>Volume circulante efetivo</dt>
<dd>A parte do volume que o rim e os barorreceptores percebem; cai na insuficiência cardíaca mesmo com edema.</dd>
<dt>Sódio urinário</dt>
<dd>Abaixo de 20 a 30 mEq/L indica que o rim retém sódio por hipoperfusão; acima disso, perda renal ou SIADH.</dd>
<dt>SIADH</dt>
<dd>Secreção inapropriada de hormônio antidiurético: hiponatremia euvolêmica com urina concentrada e sódio urinário alto.</dd>
</dl>
<h4>O essencial</h4>
<p>O sódio baixo quase sempre significa <strong>excesso de água</strong> em relação ao sódio, e não falta de sódio. O primeiro passo é a osmolaridade sérica: se está baixa, a hiponatremia é verdadeira; se normal ou alta, é pseudo-hiponatremia ou hiperglicemia. O segundo passo é a <strong>osmolaridade urinária</strong>: abaixo de 100 mOsm/kg, o rim está diluindo e o problema é ingestão excessiva de água; acima disso, o hormônio antidiurético está agindo. O terceiro passo é o <strong>estado volêmico</strong> ao exame e o <strong>sódio urinário</strong>.</p>
<p>Na <strong>hiponatremia hipervolêmica</strong>, há edema, estase jugular, ascite ou congestão pulmonar: insuficiência cardíaca, cirrose e síndrome nefrótica. O coração que bombeia mal reduz o volume circulante efetivo; os barorreceptores disparam o hormônio antidiurético e o sistema renina-angiotensina, o rim retém água e sódio, e o <strong>sódio urinário fica baixo</strong>, abaixo de 20, apesar do corpo inchado. A urina é concentrada. É o padrão do cardiopata descompensado, e o rebaixamento da consciência reflete o edema cerebral da hiponatremia que se instalou devagar.</p>
<p>O tratamento da forma hipervolêmica é tratar a congestão: <strong>restrição de água</strong>, diurético de alça e otimização da insuficiência cardíaca; nunca soro fisiológico, que piora o edema. Na SIADH, euvolêmica, o sódio urinário é alto e a osmolaridade urinária é maior que a sérica; a correção é restrição hídrica, ureia ou antagonista da vasopressina. Na hipovolêmica, repõe-se soro isotônico. Com sintomas graves (convulsão, coma), qualquer tipo recebe solução salina a 3% em bolus, com correção limitada a 8 a 10 mEq/L em 24 horas para evitar a desmielinização osmótica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso cardiopata confuso com sódio baixo: olhe o pescoço e as pernas. Com estase jugular e edema, o sódio urinário baixo confirma que o rim está retendo tudo porque o coração não entrega. O remédio é tirar água e tratar o coração, não dar sal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Osmolaridade sérica baixa confirma a hiponatremia verdadeira.</li>
<li>Osmolaridade urinária acima de 100 indica hormônio antidiurético em ação.</li>
<li>Hipervolêmica com sódio urinário baixo: insuficiência cardíaca, cirrose, nefrose.</li>
<li>Euvolêmica com sódio urinário alto: SIADH.</li>
<li>Tratar a causa; restrição de água e diurético no cardiopata; salina a 3% só nos sintomas graves, com limite de correção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o sódio urinário fica baixo na insuficiência cardíaca, se o paciente está inchado? <details><summary>Resposta</summary>Porque o volume circulante efetivo está reduzido e o rim, hipoperfundido, retém sódio e água.</details></li>
<li>O que diferencia a SIADH da hiponatremia hipervolêmica? <details><summary>Resposta</summary>A SIADH é euvolêmica e tem sódio urinário alto; a hipervolêmica tem edema e sódio urinário baixo.</details></li>
<li>Qual é o limite de correção do sódio em 24 horas? <details><summary>Resposta</summary>Cerca de 8 a 10 mEq/L, para evitar a desmielinização osmótica.</details></li>
</ol>
`,
"susp2026#9": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a lesão renal aguda no cirrótico e seus critérios.</li>
<li>Seguir a sequência obrigatória: suspender diuréticos, afastar causas, expandir com albumina.</li>
<li>Saber quando a síndrome hepatorrenal se diagnostica e como se trata.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Lesão renal aguda no cirrótico</dt>
<dd>Aumento da creatinina de 0,3 mg/dL em 48 horas ou de 50% em 7 dias; comum na ascite volumosa e com diurético.</dd>
<dt>Síndrome hepatorrenal</dt>
<dd>Lesão renal funcional por vasoconstrição renal intensa; diagnóstico de exclusão, sem resposta à albumina por 2 dias.</dd>
<dt>Albumina humana</dt>
<dd>Expansor de escolha no cirrótico; 1 g/kg por dia por 2 dias no teste de expansão.</dd>
<dt>Terlipressina</dt>
<dd>Análogo da vasopressina que contrai o leito esplâncnico e devolve fluxo ao rim; usada com albumina na síndrome hepatorrenal.</dd>
</dl>
<h4>O essencial</h4>
<p>O cirrótico com ascite vive com <strong>vasodilatação esplâncnica</strong>, pressão arterial baixa e um rim que depende da ativação máxima da renina e do sistema nervoso simpático para manter a filtração. Qualquer agressão, como diurético em dose alta, paracentese sem albumina, infecção, sangramento ou anti-inflamatório, derruba a perfusão renal. A creatinina que sobe de 1 para 2 nesse contexto é uma emergência, porque a mortalidade da lesão renal aguda na cirrose é alta e o tempo de resposta é curto.</p>
<p>A sequência é fixa. Primeiro, <strong>suspender diuréticos</strong>, betabloqueador, nefrotóxicos e lactulose em excesso. Segundo, <strong>procurar e tratar a causa</strong>: paracentese diagnóstica para afastar peritonite bacteriana espontânea, culturas, exame de urina. Terceiro, <strong>expandir com albumina</strong> a 1 g/kg por dia por 2 dias, até 100 g por dia. Se a creatinina cai, a lesão era pré-renal e está resolvida. Se não responde, sem choque, sem nefrotóxico, sem proteinúria ou hematúria e com ultrassonografia normal, o diagnóstico é <strong>síndrome hepatorrenal</strong>.</p>
<p>Só então entra a <strong>terlipressina</strong>, sempre com albumina, em bolus ou infusão contínua, por até 14 dias, vigiando isquemia e sobrecarga pulmonar. A noradrenalina é a opção em terapia intensiva. A resposta ocorre em cerca de metade; quem não responde é candidato a diálise como ponte, e a única cura definitiva é o transplante hepático. O TIPS pode ajudar em casos selecionados. Soro fisiológico não substitui a albumina e piora a ascite.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cirrótico com ascite e creatinina dobrada em uso de diurético: pare o diurético e expanda com albumina antes de rotular como hepatorrenal. A terlipressina sem a prova da albumina é pular uma etapa que define o diagnóstico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Lesão renal aguda no cirrótico: creatinina sobe 0,3 em 48 horas ou 50% em 7 dias.</li>
<li>Passo 1: suspender diuréticos e nefrotóxicos; passo 2: afastar infecção; passo 3: albumina 1 g/kg por 2 dias.</li>
<li>Sem resposta e sem outra causa: síndrome hepatorrenal.</li>
<li>Terlipressina com albumina; noradrenalina como opção; transplante é a cura.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a dose do teste de expansão com albumina? <details><summary>Resposta</summary>1 g/kg por dia, até 100 g, por 2 dias consecutivos.</details></li>
<li>O que precisa ser afastado antes de diagnosticar síndrome hepatorrenal? <details><summary>Resposta</summary>Choque, nefrotóxicos, doença renal estrutural (proteinúria, hematúria, alteração à ultrassonografia) e hipovolemia que responde à albumina.</details></li>
<li>Como age a terlipressina? <details><summary>Resposta</summary>Contrai o leito esplâncnico dilatado, elevando a pressão arterial e redistribuindo fluxo para o rim.</details></li>
</ol>
`,
"susp2026#10": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar como a pressão positiva e a PEEP alteram a pré-carga e o débito cardíaco.</li>
<li>Reconhecer a hipotensão após o aumento da PEEP e distingui-la de outras causas.</li>
<li>Aplicar a ventilação protetora da síndrome do desconforto respiratório agudo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>PEEP</dt>
<dd>Pressão positiva ao fim da expiração; mantém alvéolos abertos e melhora a oxigenação, mas eleva a pressão intratorácica.</dd>
<dt>Retorno venoso</dt>
<dd>Depende do gradiente entre a pressão venosa sistêmica e a pressão do átrio direito; a pressão intratorácica alta reduz esse gradiente.</dd>
<dt>Ventilação protetora</dt>
<dd>Volume corrente de 6 mL/kg de peso predito, pressão de platô abaixo de 30 cmH2O e pressão de distensão abaixo de 15.</dd>
<dt>Síndrome do desconforto respiratório agudo</dt>
<dd>Hipoxemia aguda com infiltrados bilaterais não explicados por insuficiência cardíaca, em até uma semana de um insulto como a influenza.</dd>
</dl>
<h4>O essencial</h4>
<p>Na respiração espontânea, a inspiração gera pressão negativa no tórax e puxa sangue para o átrio direito. A <strong>ventilação com pressão positiva</strong> inverte o sinal: cada ciclo e, sobretudo, a <strong>PEEP</strong> elevam a pressão intratorácica, que se transmite ao átrio direito e reduz o gradiente de retorno venoso. Menos sangue chega ao ventrículo direito, a pré-carga cai e, pela lei de Frank-Starling, o <strong>débito cardíaco diminui</strong>. A PEEP alta ainda comprime os capilares alveolares, aumenta a resistência vascular pulmonar e sobrecarrega o ventrículo direito, que empurra o septo e atrapalha o enchimento do esquerdo.</p>
<p>O efeito é maior em quem está <strong>hipovolêmico</strong>, sedado e com vasoplegia, como a maioria dos pacientes no início da ventilação. A pressão arterial cai minutos após subir a PEEP, a frequência sobe e a saturação pode até melhorar, porque a oxigenação não depende do débito no momento. A resposta é repor volume se houver indícios de responsividade, reduzir a PEEP ao mínimo que mantém a oxigenação e, se necessário, iniciar vasopressor.</p>
<p>Na síndrome do desconforto respiratório agudo, a estratégia é <strong>ventilação protetora</strong>: volume corrente de 6 mL/kg de peso predito, pressão de platô abaixo de 30 cmH2O, pressão de distensão abaixo de 15 e PEEP titulada por tabela ou pela melhor complacência. Na forma grave (relação PaO2/FiO2 abaixo de 150), a posição prona por 16 horas ao dia reduz a mortalidade, e o bloqueio neuromuscular breve ajuda na assincronia. Hipercapnia permissiva é aceita desde que o pH fique acima de 7,20.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pressão que cai logo depois de subir a PEEP não é sepse nova nem falha do coração: é a física do tórax. Reduza a PEEP, veja se o paciente responde a volume e só então pense em vasopressor. A oxigenação boa no monitor não garante que o sangue esteja circulando.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pressão positiva reduz o retorno venoso e a pré-carga; o débito cardíaco cai.</li>
<li>PEEP alta ainda aumenta a pós-carga do ventrículo direito.</li>
<li>Hipotensão após ajuste da PEEP: volume se responsivo, PEEP menor, vasopressor se preciso.</li>
<li>Ventilação protetora: 6 mL/kg, platô abaixo de 30, distensão abaixo de 15, PEEP titulada.</li>
<li>Prona na forma grave; hipercapnia permissiva com pH acima de 7,20.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a PEEP reduz o débito cardíaco? <details><summary>Resposta</summary>Porque eleva a pressão intratorácica e a do átrio direito, diminuindo o gradiente de retorno venoso e a pré-carga do ventrículo.</details></li>
<li>Quem sente mais esse efeito? <details><summary>Resposta</summary>O paciente hipovolêmico, sedado e com vasoplegia, em que o retorno venoso já está no limite.</details></li>
<li>Quais são os alvos da ventilação protetora? <details><summary>Resposta</summary>Volume corrente de 6 mL/kg de peso predito, platô abaixo de 30 cmH2O e pressão de distensão abaixo de 15.</details></li>
</ol>
`,
"susp2026#11": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Saber quando investigar hipertensão secundária e quais pistas apontam cada causa.</li>
<li>Interpretar renina, aldosterona e a relação entre elas no rastreio do hiperaldosteronismo.</li>
<li>Entender os testes de supressão que afastam Cushing e feocromocitoma.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipertensão resistente</dt>
<dd>Pressão fora da meta com três fármacos em dose plena, incluindo um diurético; pede pesquisa de causa secundária.</dd>
<dt>Hiperaldosteronismo primário</dt>
<dd>Produção autônoma de aldosterona por adenoma ou hiperplasia adrenal; causa secundária mais comum, em 5 a 10% dos hipertensos.</dd>
<dt>Relação aldosterona/renina</dt>
<dd>Aldosterona alta com renina suprimida; relação acima de 30 (ng/dL por ng/mL/h) é rastreio positivo.</dd>
<dt>Teste de supressão com dexametasona</dt>
<dd>1 mg à meia-noite; cortisol matinal abaixo de 1,8 µg/dL afasta a síndrome de Cushing.</dd>
</dl>
<h4>O essencial</h4>
<p>Investiga-se causa secundária quando a hipertensão começa antes dos 30 ou depois dos 55 anos, quando é <strong>resistente</strong>, quando há hipocalemia espontânea ou induzida por diurético, lesão de órgão desproporcional, ou achados que sugerem uma doença: ronco e sonolência (apneia do sono), sopro abdominal e creatinina que sobe com inibidor da ECA (estenose de artéria renal), crises de cefaleia, sudorese e palpitação (feocromocitoma), fácies de lua cheia e estrias (Cushing).</p>
<p>O <strong>hiperaldosteronismo primário</strong> é a mais frequente e a mais subdiagnosticada. A aldosterona em excesso retém sódio, expande o volume, suprime a renina e elimina potássio e hidrogênio: hipertensão resistente, <strong>sódio no limite alto</strong>, <strong>potássio baixo</strong> (em apenas um terço dos casos) e alcalose metabólica. O rastreio é a relação aldosterona/renina com a aldosterona acima de 15 ng/dL, colhida pela manhã e, idealmente, sem espironolactona e com o potássio corrigido. A confirmação é um teste de supressão: infusão salina, sobrecarga oral de sódio ou captopril; a aldosterona que não cai confirma a autonomia. A tomografia de adrenais e, para quem é candidato à cirurgia, o cateterismo de veias adrenais localizam a fonte. Adenoma unilateral é operado; hiperplasia bilateral recebe espironolactona ou eplerenona.</p>
<p>Os distratores têm seus testes. A <strong>síndrome de Cushing</strong> se afasta pelo cortisol suprimido após dexametasona, pelo cortisol salivar noturno normal ou pelo cortisol urinário normal. O <strong>feocromocitoma</strong> se afasta por metanefrinas normais.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipertenso jovem com três ou quatro fármacos e potássio baixo: peça aldosterona e renina antes de aumentar a dose. Renina suprimida com aldosterona alta e que não cai após salina fecha o diagnóstico, e a tomografia decide entre operar e dar espironolactona.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rastrear secundária: início precoce ou tardio, resistência, hipocalemia, pistas clínicas.</li>
<li>Hiperaldosteronismo: aldosterona alta, renina baixa, relação acima de 30; confirmação por supressão.</li>
<li>Potássio baixo está presente em só um terço; a normalidade não afasta.</li>
<li>Cushing afastado pela dexametasona; feocromocitoma pelas metanefrinas; estenose renal tem renina alta.</li>
<li>Adenoma: adrenalectomia; hiperplasia: espironolactona.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o padrão hormonal do hiperaldosteronismo primário? <details><summary>Resposta</summary>Aldosterona elevada com renina suprimida, e aldosterona que não cai após sobrecarga de sódio.</details></li>
<li>Como se afasta a síndrome de Cushing no hipertenso? <details><summary>Resposta</summary>Pelo cortisol matinal suprimido abaixo de 1,8 µg/dL após 1 mg de dexametasona, ou pelo cortisol salivar noturno ou urinário normais.</details></li>
<li>Que exame distingue adenoma de hiperplasia antes da cirurgia? <details><summary>Resposta</summary>O cateterismo de veias adrenais, que mostra a lateralização da secreção.</details></li>
</ol>
`,
"susp2026#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a cetoacidose diabética pelos três critérios.</li>
<li>Conduzir a reposição de volume, a insulina e o potássio na ordem certa.</li>
<li>Saber os limiares de bicarbonato e fosfato e os critérios de resolução.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cetoacidose diabética</dt>
<dd>Glicemia acima de 200 a 250 mg/dL, pH abaixo de 7,30 ou bicarbonato abaixo de 18, e cetonemia ou cetonúria.</dd>
<dt>Ânion gap</dt>
<dd>Sódio menos cloro menos bicarbonato; acima de 12 pelos cetoácidos, e sua normalização marca a resolução.</dd>
<dt>Déficit de potássio</dt>
<dd>Total de 3 a 5 mEq/kg, apesar do potássio sérico normal ou alto, porque a acidose e a falta de insulina tiram o potássio da célula.</dd>
<dt>Edema cerebral</dt>
<dd>Complicação rara e grave, sobretudo em jovens, ligada à correção rápida da osmolaridade.</dd>
</dl>
<h4>O essencial</h4>
<p>Sem insulina, a célula não capta glicose, o fígado produz glicose e cetoácidos, e a glicosúria arrasta água e eletrólitos. O paciente chega <strong>desidratado</strong> (déficit de 5 a 7 litros), com respiração de Kussmaul, dor abdominal, vômitos e sonolência. O tratamento tem três pilares que começam juntos: <strong>soro fisiológico a 0,9%</strong>, 15 a 20 mL/kg na primeira hora e depois 250 a 500 mL/h, trocando para dextrose a 5% quando a glicemia chega a 200 a 250; <strong>insulina regular intravenosa</strong> em infusão de 0,1 U/kg/h (com ou sem bolus), para reduzir a glicemia 50 a 75 mg/dL por hora; e <strong>potássio</strong>, 20 a 30 mEq por litro de soro quando o potássio sérico está entre 3,3 e 5,2.</p>
<p>O potássio tem duas regras de segurança. Abaixo de 3,3, a insulina espera: repõe-se potássio primeiro, porque a insulina o empurra para dentro da célula e pode causar arritmia. Acima de 5,2, não se repõe até que caia. O <strong>bicarbonato</strong> só entra com pH abaixo de 6,9, porque fora disso não melhora desfechos e piora a hipocalemia e o edema cerebral. O <strong>fosfato</strong> só é reposto abaixo de 1,0 mg/dL ou com disfunção cardíaca, respiratória ou hemólise. Soro hipotônico não é a solução inicial.</p>
<p>A resolução é definida por glicemia abaixo de 200 com dois de três: bicarbonato acima de 15, pH acima de 7,30 e ânion gap de 12 ou menos. Então se aplica insulina subcutânea basal e, só 1 a 2 horas depois, suspende-se a infusão, para não deixar o paciente sem insulina. A causa precipitante, infecção ou abandono do tratamento, é tratada em paralelo. Monitoram-se glicemia a cada hora e eletrólitos e gasometria a cada 2 a 4 horas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem diabético com vômitos, pH 7,0 e potássio normal: soro, insulina em bomba e potássio no soro, tudo ao mesmo tempo. Com pH 7,0 o bicarbonato fica na gaveta, e o fosfato também, enquanto estiver acima de 1. O que mata é o potássio que despenca com a insulina, não o pH.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Três critérios: hiperglicemia, acidose metabólica e cetose.</li>
<li>Soro a 0,9%, insulina intravenosa 0,1 U/kg/h e potássio juntos.</li>
<li>Potássio abaixo de 3,3: repor antes da insulina; acima de 5,2: não repor.</li>
<li>Bicarbonato só com pH abaixo de 6,9; fosfato só abaixo de 1,0 mg/dL ou com disfunção.</li>
<li>Resolução pelo ânion gap e bicarbonato; insulina subcutânea antes de desligar a bomba.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando se adia a insulina na cetoacidose? <details><summary>Resposta</summary>Com potássio sérico abaixo de 3,3 mEq/L, até repô-lo, pelo risco de arritmia.</details></li>
<li>Qual é o único cenário para bicarbonato? <details><summary>Resposta</summary>pH abaixo de 6,9; fora disso não há benefício e há mais hipocalemia e edema cerebral.</details></li>
<li>O que define a resolução da cetoacidose? <details><summary>Resposta</summary>Glicemia abaixo de 200 com bicarbonato acima de 15, pH acima de 7,30 ou ânion gap de 12 ou menos (dois de três).</details></li>
</ol>
`,
"susp2026#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender por que o nitroprussiato libera cianeto e quem está em maior risco.</li>
<li>Reconhecer a intoxicação pelo cianeto pela acidose láctica inexplicada.</li>
<li>Tratar a intoxicação e escolher outros agentes na emergência hipertensiva.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nitroprussiato de sódio</dt>
<dd>Vasodilatador arterial e venoso de ação imediata; cada molécula libera cinco íons cianeto ao se decompor no sangue.</dd>
<dt>Cianeto</dt>
<dd>Bloqueia a citocromo-oxidase mitocondrial; a célula não usa oxigênio e passa ao metabolismo anaeróbio.</dd>
<dt>Tiocianato</dt>
<dd>Produto da detoxificação do cianeto pelo fígado; acumula-se na insuficiência renal e causa confusão e convulsões.</dd>
<dt>Hidroxocobalamina</dt>
<dd>Antídoto que se liga ao cianeto formando cianocobalamina, eliminada na urina; 5 g intravenosos.</dd>
</dl>
<h4>O essencial</h4>
<p>O nitroprussiato é o vasodilatador mais potente e mais titulável da emergência hipertensiva, mas tem um preço: a molécula se decompõe em óxido nítrico e <strong>cianeto</strong>. O fígado converte o cianeto em tiocianato com o enxofre dos estoques de tiossulfato, que se esgotam quando a infusão passa de 2 µg/kg/min ou de 48 a 72 horas, e o rim elimina o tiocianato, que se acumula na doença renal. Desnutrição e hepatopatia também reduzem a capacidade de detoxificar.</p>
<p>O cianeto bloqueia a cadeia respiratória: as células recebem oxigênio, mas não conseguem usá-lo. O resultado é <strong>acidose láctica progressiva</strong> sem hipoxemia e sem choque que a explique, saturação venosa mista alta (o sangue volta cheio de oxigênio não consumido), taquifilaxia ao nitroprussiato (a pressão sobe apesar de doses crescentes), confusão, convulsões e arritmias. Um lactato que sobe em quem está em nitroprussiato é intoxicação até prova em contrário. O tiocianato dá um quadro mais lento, com delírio, zumbido e psicose.</p>
<p>O tratamento é suspender a infusão e dar <strong>hidroxocobalamina</strong>, ou tiossulfato de sódio, que repõe o doador de enxofre; nitritos são opção com cautela, pois formam metemoglobina. Para prevenir, limita-se a dose e a duração, evita-se o fármaco na insuficiência renal e hepática e prefere-se outro agente quando a infusão vai ser longa: nitroglicerina na congestão coronariana, clevidipina ou nicardipina na maioria das emergências, labetalol quando não há insuficiência cardíaca descompensada. Na congestão pulmonar hipertensiva, nitroglicerina em dose alta com diurético e ventilação não invasiva resolvem a maioria dos casos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente em nitroprussiato por mais de dois dias, com lactato subindo e pressão que não obedece: não aumente a dose. Suspenda, peça gasometria venosa (saturação alta é a pista) e administre hidroxocobalamina. Rim doente e dose alta são os dois sinais de alerta antes de a intoxicação aparecer.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Nitroprussiato libera cianeto; o fígado o converte em tiocianato, que o rim elimina.</li>
<li>Risco: dose acima de 2 µg/kg/min, mais de 48 horas, insuficiência renal ou hepática.</li>
<li>Pista: acidose láctica sem hipoxemia, saturação venosa alta, taquifilaxia, confusão.</li>
<li>Tratamento: suspender e dar hidroxocobalamina ou tiossulfato.</li>
<li>Prefira nitroglicerina, clevidipina ou nicardipina quando a infusão vai ser longa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o cianeto causa acidose láctica com oxigênio normal? <details><summary>Resposta</summary>Porque bloqueia a citocromo-oxidase; a célula não usa o oxigênio que recebe e produz lactato.</details></li>
<li>Quais fatores aumentam o risco de intoxicação pelo nitroprussiato? <details><summary>Resposta</summary>Dose alta, infusão prolongada, insuficiência renal (acúmulo de tiocianato), hepatopatia e desnutrição.</details></li>
<li>Qual é o antídoto de escolha? <details><summary>Resposta</summary>Hidroxocobalamina, 5 g intravenosos, com tiossulfato de sódio como opção ou complemento.</details></li>
</ol>
`,
"susp2026#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome de Guillain-Barré e sua evolução.</li>
<li>Identificar a falência respiratória neuromuscular antes da parada.</li>
<li>Saber os parâmetros que indicam a intubação e o tratamento específico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome de Guillain-Barré</dt>
<dd>Polirradiculoneuropatia autoimune pós-infecciosa com fraqueza ascendente simétrica, arreflexia e dissociação proteíno-citológica no liquor.</dd>
<dt>Hipoventilação</dt>
<dd>Ventilação alveolar insuficiente; o CO2 sobe e o O2 cai na mesma proporção, com gradiente alvéolo-arterial normal.</dd>
<dt>Capacidade vital</dt>
<dd>Volume máximo exalado após inspiração máxima; abaixo de 20 mL/kg indica suporte ventilatório.</dd>
<dt>Regra 20-30-40</dt>
<dd>Capacidade vital abaixo de 20 mL/kg, pressão inspiratória máxima menor que 30 cmH2O ou expiratória menor que 40 indicam intubação.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome de Guillain-Barré aparece 1 a 4 semanas após uma infecção (Campylobacter, vírus respiratórios, Zika, citomegalovírus) como <strong>fraqueza ascendente simétrica</strong> com arreflexia, parestesias distais e dor lombar, que progride por até 4 semanas. O liquor mostra proteína alta com poucas células depois da primeira semana, e a eletroneuromiografia confirma a desmielinização. Até 30% dos pacientes precisam de ventilação mecânica, e a disautonomia (arritmias, pressão oscilante, íleo) mata tanto quanto a paralisia respiratória.</p>
<p>A <strong>insuficiência respiratória neuromuscular</strong> é silenciosa. O centro respiratório funciona, mas o diafragma e os intercostais não obedecem: a respiração fica <strong>rasa</strong>, a frequência pode ser normal, a fala é entrecortada, a tosse é fraca e o paciente usa a musculatura acessória. Como a ventilação alveolar cai, o <strong>CO2 sobe</strong> e o O2 cai juntos, com gradiente alvéolo-arterial normal, o padrão de hipoventilação; a saturação cai por último, e esperar por ela é esperar demais.</p>
<p>A vigilância é à beira do leito, a cada 4 a 6 horas: <strong>capacidade vital</strong> (abaixo de 20 mL/kg ou queda de 30%), pressões inspiratória e expiratória máximas, capacidade de contar até 20 em uma expiração, deglutição e tosse. A intubação é eletiva, antes da exaustão, e a ventilação não invasiva não é indicada, porque a fraqueza bulbar impede proteger a via aérea. O tratamento específico é <strong>imunoglobulina intravenosa</strong> (0,4 g/kg por dia por 5 dias) ou plasmaférese, equivalentes; corticoide não funciona.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente com Guillain-Barré que respira "normal" aos 18 por minuto, mas não consegue contar até 15 sem parar: meça a capacidade vital agora. Uma gasometria com CO2 de 55 em quem está com saturação de 85% é a prova de que os músculos falharam, e a intubação não espera a próxima medida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fraqueza ascendente simétrica com arreflexia após infecção; progressão de até 4 semanas.</li>
<li>Falência ventilatória neuromuscular: respiração rasa, frequência normal, CO2 alto, O2 baixo.</li>
<li>Capacidade vital abaixo de 20 mL/kg ou regra 20-30-40: intubar eletivamente.</li>
<li>Ventilação não invasiva não serve; disautonomia exige monitorização.</li>
<li>Imunoglobulina ou plasmaférese; corticoide não ajuda.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a saturação é um sinal tardio na fraqueza neuromuscular? <details><summary>Resposta</summary>Porque a hipoventilação eleva o CO2 antes de derrubar o O2, e a oximetria só cai quando a hipercapnia já é importante.</details></li>
<li>Quais medidas à beira do leito indicam a intubação? <details><summary>Resposta</summary>Capacidade vital abaixo de 20 mL/kg, pressão inspiratória máxima abaixo de 30 cmH2O ou expiratória abaixo de 40, e sinais bulbares.</details></li>
<li>Qual é o tratamento específico? <details><summary>Resposta</summary>Imunoglobulina intravenosa 0,4 g/kg por dia por 5 dias, ou plasmaférese; o corticoide não tem benefício.</details></li>
</ol>
`,
"susp2026#15": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a fibrose pulmonar idiopática pela clínica, pela espirometria e pela tomografia.</li>
<li>Diferenciar o padrão de pneumonia intersticial usual de outras doenças intersticiais.</li>
<li>Saber que o tratamento é antifibrótico e que o corticoide faz mal.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fibrose pulmonar idiopática</dt>
<dd>Doença intersticial fibrosante crônica de causa desconhecida, em adultos acima de 60 anos, de curso progressivo e sobrevida mediana de 3 a 5 anos.</dd>
<dt>Padrão de pneumonia intersticial usual</dt>
<dd>Reticulado subpleural e basal com faveolamento e bronquiectasias de tração, sem vidro fosco predominante.</dd>
<dt>Distúrbio restritivo</dt>
<dd>Capacidade vital forçada reduzida com relação VEF1/CVF normal ou alta; difusão de monóxido de carbono reduzida.</dd>
<dt>Antifibróticos</dt>
<dd>Nintedanibe e pirfenidona; reduzem pela metade a queda anual da capacidade vital.</dd>
</dl>
<h4>O essencial</h4>
<p>A fibrose pulmonar idiopática se apresenta como <strong>dispneia progressiva e tosse seca</strong> por mais de 6 meses em pessoas acima de 60 anos, muitas vezes ex-fumantes, com <strong>estertores em velcro</strong> nas bases e baqueteamento digital. A espirometria mostra <strong>restrição</strong> (CVF baixa, relação normal ou alta) e a difusão está reduzida. O diagnóstico se firma quando a tomografia de alta resolução mostra o <strong>padrão de pneumonia intersticial usual</strong>: reticulado periférico com gradiente apicobasal, bronquiectasias de tração e faveolamento, sem causa conhecida, após excluir exposição ocupacional, pneumonite de hipersensibilidade, doenças do tecido conjuntivo e fármacos. Com o padrão típico, a biópsia é dispensada.</p>
<p>O erro histórico foi tratá-la como inflamação. O estudo PANTHER-IPF mostrou que prednisona com azatioprina e N-acetilcisteína <strong>aumentou mortalidade e internações</strong>. A fibrose pulmonar idiopática não responde a corticoide nem a imunossupressor, e ambos são contraindicados fora da exacerbação aguda. Os <strong>antifibróticos</strong> mudaram o curso: o nintedanibe, inibidor de tirosina-quinases, e a pirfenidona reduzem a perda de função e as exacerbações; a escolha depende dos efeitos adversos (diarreia com o nintedanibe, fotossensibilidade e náusea com a pirfenidona).</p>
<p>Completam o cuidado a oxigenoterapia na hipoxemia, a reabilitação pulmonar, as vacinas, o tratamento do refluxo e da apneia quando presentes, e o encaminhamento precoce ao transplante, que é a única medida com ganho de sobrevida nos candidatos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher de 66 anos com dispneia de um ano, estertores em velcro, restrição na espirometria e tomografia com faveolamento basal: é fibrose pulmonar idiopática, e a prescrição é um antifibrótico. Começar prednisona nesse cenário é o erro que a literatura já provou que encurta a vida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Idoso com dispneia progressiva, tosse seca, estertores em velcro e restrição.</li>
<li>Tomografia com reticulado basal, bronquiectasias de tração e faveolamento: padrão usual.</li>
<li>Excluir causas conhecidas; o padrão típico dispensa biópsia.</li>
<li>Corticoide e imunossupressor pioram o desfecho.</li>
<li>Nintedanibe ou pirfenidona; oxigênio, reabilitação e transplante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais achados tomográficos definem o padrão de pneumonia intersticial usual? <details><summary>Resposta</summary>Reticulado subpleural de predomínio basal, bronquiectasias de tração e faveolamento, sem vidro fosco predominante.</details></li>
<li>Por que o corticoide é contraindicado na fibrose pulmonar idiopática? <details><summary>Resposta</summary>Porque a doença é fibrótica, não inflamatória, e o estudo PANTHER-IPF mostrou mais mortes com prednisona e azatioprina.</details></li>
<li>O que os antifibróticos conseguem? <details><summary>Resposta</summary>Reduzir pela metade a queda anual da capacidade vital e as exacerbações; não revertem a fibrose.</details></li>
</ol>
`,
"susp2026#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a cardiomiopatia hipertrófica no jovem com sopro e dispneia.</li>
<li>Entender a obstrução dinâmica da via de saída e o que a agrava.</li>
<li>Saber o tratamento sintomático e a prevenção da morte súbita.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cardiomiopatia hipertrófica</dt>
<dd>Hipertrofia do ventrículo esquerdo de 15 mm ou mais sem causa de sobrecarga; doença genética dos sarcômeros, autossômica dominante.</dd>
<dt>Obstrução dinâmica</dt>
<dd>Gradiente na via de saída que varia com a contratilidade e o volume; o septo espesso e a valva mitral se encontram na sístole.</dd>
<dt>Cardiodesfibrilador implantável</dt>
<dd>Indicado quando o risco de morte súbita em 5 anos é alto, por escore que pesa espessura, síncope, história familiar e fibrose.</dd>
</dl>
<h4>O essencial</h4>
<p>A cardiomiopatia hipertrófica é a doença cardíaca genética mais comum e a principal causa de morte súbita em jovens atletas. O septo espesso reduz a cavidade e, em dois terços dos pacientes, cria uma <strong>obstrução dinâmica</strong> da via de saída: na sístole, o fluxo acelerado puxa a valva mitral contra o septo. O sopro é sistólico, em foco aórtico e borda esternal, e <strong>aumenta com a manobra de Valsalva</strong> e ao ficar de pé, porque menos volume no ventrículo aproxima as estruturas; diminui ao agachar, que enche o ventrículo. É o oposto da estenose aórtica.</p>
<p>Tudo o que esvazia ou acelera o ventrículo piora a obstrução: desidratação, diuréticos, vasodilatadores (nitratos, inibidores da ECA, bloqueadores di-hidropiridínicos), inotrópicos (digoxina, dobutamina), esforço intenso e taquicardia. Por isso o tratamento sintomático começa com o <strong>betabloqueador</strong> sem efeito vasodilatador, que reduz a frequência, prolonga a diástole e diminui a contratilidade; verapamil ou diltiazem são a segunda escolha, e a disopiramida se soma quando persiste o gradiente. O mavacamteno, inibidor da miosina cardíaca, é a novidade para a forma obstrutiva sintomática. Miectomia septal ou ablação alcoólica ficam para os refratários com gradiente acima de 50 mmHg.</p>
<p>O ecocardiograma confirma a hipertrofia e mede o gradiente em repouso e com provocação; a ressonância quantifica a fibrose. A avaliação do <strong>risco de morte súbita</strong> é obrigatória: espessura acima de 30 mm, síncope inexplicada, história familiar de morte súbita, taquicardia ventricular no Holter e realce tardio extenso indicam o cardiodesfibrilador.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sopro sistólico em jovem que fica mais alto quando ele faz força ou se levanta é obstrução dinâmica até o ecocardiograma dizer o contrário. Não dê nitrato, nem diurético, nem digoxina; dê betabloqueador, peça o ecocardiograma e pergunte se alguém na família morreu de repente antes dos 50 anos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipertrofia sem causa; sopro que aumenta com Valsalva e ao ficar de pé.</li>
<li>Obstrução piora com menos volume, vasodilatação e mais contratilidade.</li>
<li>Betabloqueador é a base; verapamil e disopiramida são as seguintes; mavacamteno é nova opção.</li>
<li>Evitar nitrato, diurético, digoxina e inibidor da ECA na forma obstrutiva.</li>
<li>Risco de morte súbita define o cardiodesfibrilador; rastrear a família.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o sopro aumenta com a manobra de Valsalva? <details><summary>Resposta</summary>Porque a manobra reduz o retorno venoso e o volume ventricular, aproximando a valva mitral do septo e aumentando a obstrução.</details></li>
<li>Quais fármacos pioram a obstrução? <details><summary>Resposta</summary>Vasodilatadores, diuréticos e inotrópicos, como nitratos, inibidores da ECA, furosemida, digoxina e dobutamina.</details></li>
<li>O que indica o cardiodesfibrilador? <details><summary>Resposta</summary>Risco alto de morte súbita: septo acima de 30 mm, síncope inexplicada, história familiar, taquicardia ventricular ou fibrose extensa.</details></li>
</ol>
`,
"susp2026#17": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir as reações transfusionais agudas pelo tempo e pelo quadro.</li>
<li>Separar a sobrecarga circulatória da lesão pulmonar aguda pela hemodinâmica.</li>
<li>Prevenir a sobrecarga em cardiopatas, renais e idosos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sobrecarga circulatória (TACO)</dt>
<dd>Edema pulmonar hidrostático por volume transfundido; hipertensão, estase jugular, BNP alto, em até 12 horas.</dd>
<dt>Lesão pulmonar aguda (TRALI)</dt>
<dd>Edema pulmonar não cardiogênico por anticorpos do doador contra leucócitos do receptor; hipotensão e febre em até 6 horas.</dd>
<dt>Reação febril não hemolítica</dt>
<dd>Febre e calafrios por citocinas do produto; benigna, tratada com antitérmico.</dd>
<dt>Reação hemolítica aguda</dt>
<dd>Incompatibilidade ABO; febre, dor lombar, hemoglobinúria e choque minutos após o início.</dd>
</dl>
<h4>O essencial</h4>
<p>Toda transfusão pode causar reação, e as duas que levam o paciente à insuficiência respiratória são a <strong>sobrecarga circulatória</strong> e a <strong>lesão pulmonar aguda</strong>. Ambas produzem dispneia, hipoxemia e infiltrados bilaterais nas primeiras horas, e a diferença está na hemodinâmica. Na sobrecarga, a bolsa foi volume demais para um coração ou rim que não dá conta: <strong>pressão arterial sobe</strong>, estase jugular, terceira bulha, estertores, BNP elevado, e a radiografia mostra congestão com cardiomegalia. Na lesão pulmonar, a inflamação do endotélio pulmonar faz o alvéolo vazar: <strong>hipotensão</strong>, febre, BNP normal, pulmões "brancos" com coração de tamanho normal, sem resposta a diurético.</p>
<p>O tratamento da sobrecarga é parar a transfusão, sentar o paciente, oxigênio, <strong>diurético de alça</strong> e, se preciso, ventilação não invasiva, e a resposta é rápida. A lesão pulmonar aguda é suporte: oxigênio, ventilação protetora se necessário, sem diurético (pode piorar a hipotensão); o banco de sangue precisa ser notificado para investigar o doador. A prevenção da sobrecarga é a regra para quem tem insuficiência cardíaca, doença renal, idade avançada ou anemia crônica: transfundir <strong>uma bolsa de cada vez</strong>, em 3 a 4 horas, com diurético entre as bolsas e reavaliação antes da seguinte.</p>
<p>As outras reações têm assinatura própria. A febril não hemolítica é só febre e calafrios, sem hipotensão nem hemólise. A hemolítica aguda por erro ABO começa em minutos com dor lombar, febre, hemoglobinúria e coagulação intravascular, e a conduta é parar, hidratar, manter a diurese e checar a identificação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idosa cardiopata que fica dispneica na segunda hora de uma bolsa de hemácias: meça a pressão. Pressão alta, jugular cheia e estertores são sobrecarga, e a furosemida resolve. Pressão baixa com febre e pulmão branco é lesão pulmonar aguda, e aí o diurético atrapalha.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sobrecarga: hipertensão, congestão, BNP alto; diurético resolve.</li>
<li>Lesão pulmonar aguda: hipotensão, febre, BNP normal; só suporte, notificar o banco de sangue.</li>
<li>Cardiopata, renal e idoso: uma bolsa lenta por vez, diurético entre bolsas.</li>
<li>Hemolítica aguda: minutos, dor lombar, hemoglobinúria; parar e hidratar.</li>
<li>Febril não hemolítica e alérgica leve são benignas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual sinal separa com mais segurança a sobrecarga da lesão pulmonar aguda? <details><summary>Resposta</summary>A pressão arterial: alta na sobrecarga, baixa na lesão pulmonar aguda; o BNP e a resposta ao diurético confirmam.</details></li>
<li>Como prevenir a sobrecarga no cardiopata? <details><summary>Resposta</summary>Transfundir uma bolsa de cada vez, lentamente, com diurético entre as bolsas e reavaliação clínica.</details></li>
<li>O que fazer diante de suspeita de reação hemolítica aguda? <details><summary>Resposta</summary>Parar a transfusão, conferir a identificação, hidratar e manter a diurese, e enviar amostras ao banco de sangue.</details></li>
</ol>
`,
"susp2026#18": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender a síndrome inflamatória de reconstituição imune e quando ela ocorre.</li>
<li>Distinguir a forma leve da grave e conduzir cada uma.</li>
<li>Saber quando iniciar a terapia antirretroviral e o que não fazer na reconstituição.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Reconstituição imune</dt>
<dd>Piora paradoxal ou aparecimento de infecção oportunista nas primeiras semanas de terapia antirretroviral, pela recuperação da resposta inflamatória.</dd>
<dt>Forma paradoxal</dt>
<dd>Infecção já tratada que volta a inflamar quando o CD4 sobe.</dd>
<dt>Forma desmascarada</dt>
<dd>Infecção oculta que se manifesta pela primeira vez após o início da terapia.</dd>
<dt>Terapia antirretroviral</dt>
<dd>Iniciada em todo diagnóstico, de preferência em até 7 dias; tenofovir, lamivudina e dolutegravir no Brasil.</dd>
</dl>
<h4>O essencial</h4>
<p>Quando a terapia antirretroviral derruba a carga viral, o sistema imune volta a reconhecer antígenos que ignorava. Em 10 a 25% dos pacientes, sobretudo com CD4 abaixo de 50 e carga viral alta no início, essa recuperação produz a <strong>síndrome inflamatória de reconstituição imune</strong>: nas primeiras 4 a 8 semanas, uma infecção oportunista tratada piora (forma paradoxal) ou uma infecção silenciosa aparece (forma desmascarada). Tuberculose, criptococose, citomegalovírus, herpes-zóster, herpes simples e dermatoses são os quadros habituais.</p>
<p>O diagnóstico exige carga viral em queda e CD4 em ascensão, relação temporal com o início da terapia e exclusão de falha de tratamento, resistência, nova infecção e toxicidade de fármaco. A conduta na <strong>forma leve</strong>, como lesões cutâneas por herpes ou zóster, é <strong>manter a terapia antirretroviral</strong> e tratar o patógeno (aciclovir ou valaciclovir); anti-inflamatórios ajudam nos sintomas. Suspender a terapia é o erro: a carga viral volta e a imunodeficiência avança. Trocar o esquema não tem sentido, porque a reação é prova de que ele funciona.</p>
<p>O <strong>corticoide</strong> fica para as formas graves, com risco de vida ou de sequela: reconstituição por tuberculose com comprometimento do sistema nervoso ou respiratório, criptococose meníngea com hipertensão intracraniana, pneumocistose. Nesses casos, prednisona por 2 a 4 semanas com retirada gradual, sem interromper os antirretrovirais. A prevenção é iniciar a terapia logo após o diagnóstico, mas respeitar o intervalo nas meningites: 2 semanas após o início do tratamento da tuberculose (8 semanas se houver meningite tuberculosa) e 4 a 6 semanas na criptococose.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente que começou os antirretrovirais há um mês, com carga viral caindo, e aparece com herpes labial ou zóster: é a imunidade acordando. Trate o herpes, mantenha a terapia e explique que o remédio está funcionando. Corticoide e suspensão são para outro cenário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reconstituição imune: piora inflamatória nas primeiras semanas da terapia, com CD4 subindo.</li>
<li>Risco maior com CD4 abaixo de 50 e carga viral alta no início.</li>
<li>Forma leve: manter antirretrovirais e tratar o patógeno.</li>
<li>Forma grave (neurológica, respiratória): corticoide, sem suspender a terapia.</li>
<li>Prevenção: terapia precoce, com intervalo nas meningites por tuberculose e criptococo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os fatores de risco para a reconstituição imune? <details><summary>Resposta</summary>CD4 muito baixo e carga viral alta no início da terapia, com infecção oportunista presente ou recente.</details></li>
<li>O que define a forma paradoxal? <details><summary>Resposta</summary>Uma infecção já em tratamento que piora com a recuperação imune, em contraste com a forma desmascarada, em que a infecção aparece pela primeira vez.</details></li>
<li>Quando se usa corticoide? <details><summary>Resposta</summary>Nas formas graves com risco de vida, como tuberculose do sistema nervoso ou pneumocistose, mantendo a terapia antirretroviral.</details></li>
</ol>
`,
"susp2026#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer a sequência do tratamento da insuficiência cardíaca de fração reduzida.</li>
<li>Reconhecer a indicação da ressincronização pelo QRS e pela morfologia do bloqueio.</li>
<li>Diferenciar ressincronização, cardiodesfibrilador e os fármacos adicionais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Os quatro pilares</dt>
<dd>Inibidor da neprilisina ou da ECA, betabloqueador, antagonista mineralocorticoide e inibidor de SGLT2; todos reduzem mortalidade.</dd>
<dt>Terapia otimizada</dt>
<dd>Os quatro pilares em dose máxima tolerada por pelo menos 3 meses antes de indicar dispositivos.</dd>
<dt>Bloqueio de ramo esquerdo</dt>
<dd>QRS largo que atrasa a contração da parede lateral; o ventrículo bate de forma dessincronizada e perde eficiência.</dd>
<dt>Ressincronização cardíaca</dt>
<dd>Marca-passo biventricular que estimula as duas paredes ao mesmo tempo; reduz sintomas, internação e morte.</dd>
</dl>
<h4>O essencial</h4>
<p>A insuficiência cardíaca com fração de ejeção de 40% ou menos se trata com <strong>quatro classes</strong> iniciadas o mais cedo possível, em paralelo, e tituladas até a dose-alvo: sacubitril-valsartana (ou inibidor da ECA), betabloqueador, espironolactona e inibidor de SGLT2. Depois de 3 meses de terapia otimizada, reavalia-se a fração de ejeção e os sintomas, e é nesse ponto que entram os dispositivos e os fármacos adicionais.</p>
<p>O <strong>bloqueio de ramo esquerdo</strong> faz a parede lateral contrair atrasada em relação ao septo; o ventrículo gasta energia e bombeia menos. A <strong>ressincronização</strong> corrige isso com um eletrodo no ventrículo direito e outro na veia coronária lateral. A indicação de classe I é fração de ejeção de 35% ou menos, ritmo sinusal, bloqueio de ramo esquerdo com QRS de 150 ms ou mais e classe funcional II a IV apesar da terapia otimizada; com QRS de 130 a 149 ou morfologia diferente, o benefício é menor.</p>
<p>O <strong>cardiodesfibrilador</strong> previne a morte súbita e se indica com fração de ejeção de 35% ou menos após terapia otimizada, sobretudo na etiologia isquêmica; em geral combina-se com a ressincronização no mesmo aparelho. Os fármacos adicionais têm indicação específica: ivabradina para frequência sinusal de 70 ou mais com betabloqueador em dose máxima; hidralazina com nitrato para intolerância ao bloqueio do sistema renina-angiotensina ou pacientes negros sintomáticos; digoxina para sintomas persistentes ou fibrilação atrial. Nenhum deles substitui a ressincronização em quem tem QRS largo de bloqueio de ramo esquerdo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cardiopata com fração de 25% que continua em classe III apesar dos quatro pilares em dose plena, com QRS de 150 ms em bloqueio de ramo esquerdo: o próximo passo não é mais um comprimido, é o marca-passo biventricular. Ivabradina, hidralazina e digoxina são para outros cenários.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fração reduzida: quatro pilares juntos e titulados; diurético para congestão.</li>
<li>Reavaliar após 3 meses de terapia otimizada.</li>
<li>Ressincronização: fração de 35% ou menos, bloqueio de ramo esquerdo com QRS de 150 ms ou mais, sintomas persistentes.</li>
<li>Cardiodesfibrilador para prevenir morte súbita; em geral combinado.</li>
<li>Ivabradina, hidralazina-nitrato e digoxina têm indicações específicas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as quatro classes com benefício em mortalidade? <details><summary>Resposta</summary>Sacubitril-valsartana ou inibidor da ECA, betabloqueador, antagonista mineralocorticoide e inibidor de SGLT2.</details></li>
<li>Qual é a indicação de classe I da ressincronização? <details><summary>Resposta</summary>Fração de ejeção de 35% ou menos, ritmo sinusal, bloqueio de ramo esquerdo com QRS de 150 ms ou mais e sintomas apesar da terapia otimizada.</details></li>
<li>Quando a ivabradina é indicada? <details><summary>Resposta</summary>Em ritmo sinusal com frequência de 70 ou mais apesar do betabloqueador em dose máxima tolerada.</details></li>
</ol>
`,
"susp2021#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a esclerose múltipla pelos surtos separados no tempo e no espaço.</li>
<li>Conhecer os critérios de McDonald e o papel da ressonância e do liquor.</li>
<li>Saber o tratamento do surto e os princípios da terapia modificadora.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Surto</dt>
<dd>Déficit neurológico novo que dura mais de 24 horas, sem febre nem infecção, separado do anterior por 30 dias ou mais.</dd>
<dt>Disseminação no espaço e no tempo</dt>
<dd>Lesões em diferentes regiões do sistema nervoso central e em diferentes momentos; a base dos critérios de McDonald.</dd>
<dt>Bandas oligoclonais</dt>
<dd>Imunoglobulinas produzidas dentro do sistema nervoso, no liquor e não no soro; substituem a disseminação no tempo.</dd>
<dt>Neurite óptica</dt>
<dd>Perda visual unilateral com dor ao mover o olho; apresentação inicial comum.</dd>
</dl>
<h4>O essencial</h4>
<p>A esclerose múltipla é uma doença inflamatória desmielinizante do sistema nervoso central que acomete adultos jovens, em especial mulheres, e evolui em <strong>surtos e remissões</strong> em 85% dos casos. Os episódios típicos são a neurite óptica, a mielite com fraqueza ou dormência nos membros e sinal de Lhermitte, a oftalmoplegia internuclear com diplopia, a ataxia e a paresia facial. A história de dois episódios distintos, em territórios diferentes, com recuperação parcial ou total entre eles, já desenha o diagnóstico antes de qualquer exame.</p>
<p>Os <strong>critérios de McDonald</strong> exigem disseminação no espaço (lesões em duas ou mais das regiões periventricular, cortical ou justacortical, infratentorial e medular) e no tempo (lesões que captam e não captam contraste no mesmo exame, lesão nova em ressonância de controle ou segundo surto). As <strong>bandas oligoclonais</strong> no liquor podem substituir a disseminação no tempo. A ressonância mostra lesões ovoides periventriculares perpendiculares aos ventrículos, os dedos de Dawson. É preciso afastar neuromielite óptica (anticorpo anti-aquaporina-4), lúpus, sífilis, HIV, deficiência de B12 e doença cerebrovascular.</p>
<p>O surto se trata com <strong>metilprednisolona</strong> em pulso de 1 g por dia por 3 a 5 dias, que encurta o episódio sem mudar a evolução; plasmaférese na falha. A terapia modificadora, iniciada cedo, reduz surtos e progressão: interferona, glatirâmer, teriflunomida e fumarato nas formas leves; natalizumabe, ocrelizumabe, fingolimode e cladribina nas mais ativas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher de 30 anos que teve visão turva em um olho no ano passado, melhorou, e agora chega com dormência nas pernas e desequilíbrio: dois surtos, dois lugares. Peça ressonância de encéfalo e medula com contraste e o liquor com bandas oligoclonais, e trate o surto com pulso de corticoide.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Adulto jovem com déficits neurológicos em surtos, em territórios diferentes, com remissão.</li>
<li>Neurite óptica, mielite, oftalmoplegia internuclear e ataxia são os surtos típicos.</li>
<li>McDonald: disseminação no espaço e no tempo; bandas oligoclonais substituem o tempo.</li>
<li>Afastar neuromielite óptica, lúpus, infecções e deficiência de B12.</li>
<li>Surto: metilprednisolona em pulso; terapia modificadora precoce.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que define um surto? <details><summary>Resposta</summary>Déficit neurológico novo com mais de 24 horas de duração, sem febre ou infecção, separado do anterior por pelo menos 30 dias.</details></li>
<li>Como a ressonância demonstra disseminação no tempo em um único exame? <details><summary>Resposta</summary>Pela presença simultânea de lesões que captam contraste (recentes) e que não captam (antigas).</details></li>
<li>O que o pulso de corticoide faz e não faz? <details><summary>Resposta</summary>Encurta o surto e acelera a recuperação, mas não altera a evolução da doença a longo prazo.</details></li>
</ol>
`,
"susp2021#31": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o LDL muito alto como indicação direta de estatina.</li>
<li>Estratificar o risco cardiovascular e definir a meta de LDL.</li>
<li>Aplicar o escore CHA2DS2-VASc antes de anticoagular a fibrilação atrial.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipercolesterolemia grave</dt>
<dd>LDL de 190 mg/dL ou mais; sugere forma familiar e indica estatina independentemente do escore de risco.</dd>
<dt>Estatina de alta intensidade</dt>
<dd>Atorvastatina 40 a 80 mg ou rosuvastatina 20 a 40 mg; reduz o LDL em 50% ou mais.</dd>
<dt>Meta de LDL</dt>
<dd>Abaixo de 70 no risco alto e abaixo de 50 no risco muito alto; abaixo de 100 no intermediário.</dd>
<dt>CHA2DS2-VASc</dt>
<dd>Escore de risco de acidente vascular na fibrilação atrial; 0 em homens dispensa anticoagulação, 1 permite considerá-la, 2 ou mais a indica.</dd>
</dl>
<h4>O essencial</h4>
<p>A prevenção primária começa por estimar o risco cardiovascular em 10 anos, e há quatro situações em que a estatina está indicada sem calcular nada: doença aterosclerótica estabelecida, diabetes com fatores de risco, doença renal crônica e <strong>LDL de 190 mg/dL ou mais</strong>. Esse último valor, sobretudo com história familiar, sugere <strong>hipercolesterolemia familiar</strong>, em que o receptor de LDL é defeituoso e o risco de infarto precoce é alto. A conduta é começar a estatina na consulta, de preferência de intensidade moderada a alta, e titular até a meta, somando ezetimiba e, se necessário, inibidor de PCSK9.</p>
<p>No restante dos pacientes, o risco é calculado por escore (o da diretriz brasileira ou o escore de risco global) e a meta de LDL cai conforme ele sobe: abaixo de 130 no risco baixo, 100 no intermediário, 70 no alto e 50 no muito alto. Tabagismo, hipertensão, obesidade e sedentarismo entram no escore e são tratados em paralelo; o tabagismo é o fator que mais muda o prognóstico ao ser removido.</p>
<p>A <strong>fibrilação atrial</strong>, mesmo paroxística, tem o mesmo risco embólico que a permanente, e a decisão de anticoagular depende do <strong>CHA2DS2-VASc</strong>: insuficiência cardíaca, hipertensão, idade de 65 a 74 anos, diabetes e doença vascular valem 1 ponto; idade de 75 ou mais e acidente vascular prévio valem 2; sexo feminino acrescenta 1 só na presença de outro fator. Homem com apenas hipertensão soma 1 ponto: a anticoagulação pode ser considerada, mas não é obrigatória, e o ácido acetilsalicílico não é substituto. Com 2 ou mais pontos, anticoagula-se com um anticoagulante direto, a menos que haja estenose mitral ou prótese mecânica, que exigem varfarina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Homem de 56 anos, fumante, hipertenso, com LDL de 260: a estatina sai da consulta de hoje, sem esperar escore nem dieta. A fibrilação atrial dele soma 1 ponto no CHA2DS2-VASc, então a anticoagulação é uma conversa, não uma ordem. O cigarro é a outra prescrição.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>LDL de 190 ou mais: estatina sem calcular risco; pensar em hipercolesterolemia familiar.</li>
<li>Nos demais, escore de risco define a meta: 130, 100, 70 ou 50 mg/dL.</li>
<li>Ezetimiba e inibidor de PCSK9 se a estatina não alcança a meta.</li>
<li>Ácido acetilsalicílico em prevenção primária: não de rotina.</li>
<li>Fibrilação atrial: CHA2DS2-VASc de 2 ou mais indica anticoagulante; 1 em homem permite considerar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais situações indicam estatina sem escore de risco? <details><summary>Resposta</summary>Doença aterosclerótica, diabetes com fatores de risco, doença renal crônica e LDL de 190 mg/dL ou mais.</details></li>
<li>Qual é a meta de LDL no risco alto e no muito alto? <details><summary>Resposta</summary>Abaixo de 70 mg/dL no alto e abaixo de 50 mg/dL no muito alto.</details></li>
<li>Quanto vale a hipertensão no CHA2DS2-VASc e o que isso implica em um homem? <details><summary>Resposta</summary>Um ponto; com escore 1, a anticoagulação pode ser considerada, mas não é obrigatória.</details></li>
</ol>
`,
"susp2021#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a peritonite bacteriana espontânea pelo líquido ascítico.</li>
<li>Tratar com cefalosporina de terceira geração e albumina nos casos indicados.</li>
<li>Distinguir a peritonite espontânea da secundária e saber a profilaxia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Peritonite bacteriana espontânea</dt>
<dd>Infecção do líquido ascítico sem foco cirúrgico, por translocação de bactérias intestinais; polimorfonucleares de 250 ou mais por mm3.</dd>
<dt>Paracentese diagnóstica</dt>
<dd>Obrigatória em todo cirrótico com ascite que interna, piora ou tem febre, dor, encefalopatia ou disfunção renal.</dd>
<dt>Peritonite secundária</dt>
<dd>Infecção por perfuração ou abscesso; líquido polimicrobiano, com proteína acima de 1 g/dL, glicose baixa e LDH alta.</dd>
</dl>
<h4>O essencial</h4>
<p>O cirrótico com ascite tem intestino permeável, defesa deficiente e um líquido pobre em proteínas e em complemento: terreno para a <strong>peritonite bacteriana espontânea</strong>, quase sempre por uma só bactéria, em geral <em>Escherichia coli</em>, <em>Klebsiella</em> ou pneumococo. Metade dos casos não tem dor abdominal; a apresentação pode ser só febre baixa, encefalopatia nova, piora da função renal ou íleo. Por isso a <strong>paracentese diagnóstica</strong> é rotina na admissão e a cada mudança clínica, e o resultado que decide é a <strong>contagem de polimorfonucleares</strong>: 250 ou mais por mm3 fecha o diagnóstico e começa o antibiótico, sem esperar a cultura, que é negativa em até 40%.</p>
<p>O tratamento é a <strong>cefalosporina de terceira geração</strong>, ceftriaxona ou cefotaxima, por 5 a 7 dias; amoxicilina-clavulanato ou quinolona são opções na forma leve adquirida na comunidade, e carbapenêmico é reservado à infecção hospitalar ou ao uso recente de antibiótico. Aminoglicosídeos são evitados pela nefrotoxicidade. A <strong>albumina</strong>, 1,5 g/kg no primeiro dia e 1 g/kg no terceiro, reduz a síndrome hepatorrenal e a mortalidade, indicada quando a creatinina passa de 1 mg/dL, a ureia de 60 ou a bilirrubina de 4.</p>
<p>A <strong>peritonite secundária</strong> tem que ser lembrada quando o líquido é polimicrobiano, a proteína passa de 1 g/dL, a glicose fica abaixo de 50, a LDH é alta ou não há resposta em 48 horas: pede tomografia e cirurgia. Após o primeiro episódio, inicia-se <strong>profilaxia secundária</strong> com norfloxacino 400 mg ao dia, e o paciente é encaminhado ao transplante, porque a sobrevida em um ano cai para cerca de 40%.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cirrótico que chega confuso e com a barriga maior: puncione a ascite antes de atribuir tudo à encefalopatia. Polimorfonucleares acima de 250 é peritonite, e a ceftriaxona começa na hora; a albumina entra se o rim ou a bilirrubina já estiverem sofrendo. A cultura vem depois, e muitas vezes não vem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Paracentese em todo cirrótico com ascite que interna ou piora; metade não tem dor.</li>
<li>Polimorfonucleares de 250 ou mais por mm3 fecham o diagnóstico.</li>
<li>Ceftriaxona ou cefotaxima por 5 a 7 dias; albumina se creatinina, ureia ou bilirrubina elevadas.</li>
<li>Polimicrobiano, proteína alta, glicose baixa: pensar em peritonite secundária.</li>
<li>Norfloxacino diário após o primeiro episódio; encaminhar ao transplante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o critério diagnóstico no líquido ascítico? <details><summary>Resposta</summary>Contagem de polimorfonucleares igual ou superior a 250 por mm3, independentemente da cultura.</details></li>
<li>Quando a albumina é indicada no tratamento? <details><summary>Resposta</summary>Com creatinina acima de 1 mg/dL, ureia acima de 60 ou bilirrubina acima de 4; 1,5 g/kg no dia 1 e 1 g/kg no dia 3.</details></li>
<li>Que achados sugerem peritonite secundária? <details><summary>Resposta</summary>Cultura polimicrobiana, proteína acima de 1 g/dL, glicose abaixo de 50, LDH elevada e ausência de resposta em 48 horas.</details></li>
</ol>
`,
"susp2021#34": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar o par TSH e T4 livre nas formas de hipotireoidismo.</li>
<li>Reconhecer as manifestações do hipotireoidismo em mulheres jovens.</li>
<li>Prescrever e ajustar a levotiroxina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipotireoidismo primário</dt>
<dd>Falência da tireoide: TSH alto e T4 livre baixo; a tireoidite de Hashimoto é a causa mais comum.</dd>
<dt>Hipotireoidismo subclínico</dt>
<dd>TSH alto com T4 livre normal; tratar se TSH acima de 10, gestação, sintomas ou anti-TPO positivo.</dd>
<dt>Hipotireoidismo central</dt>
<dd>Falência hipofisária ou hipotalâmica: T4 livre baixo com TSH baixo ou inapropriadamente normal.</dd>
<dt>Anti-TPO</dt>
<dd>Anticorpo contra a peroxidase tireoidiana; marca a autoimunidade e prevê a progressão do subclínico.</dd>
</dl>
<h4>O essencial</h4>
<p>A hipófise responde à queda do hormônio tireoidiano elevando o TSH, e por isso o <strong>TSH é o exame mais sensível</strong> para o hipotireoidismo primário: sobe antes de o T4 livre cair. TSH alto com <strong>T4 livre baixo</strong> é hipotireoidismo clínico; TSH alto com T4 livre normal é subclínico. No hipotireoidismo central, raro, o TSH não serve, porque a hipófise doente não o eleva, e o diagnóstico se faz pelo T4 livre baixo. A causa habitual em mulheres jovens é a <strong>tireoidite de Hashimoto</strong>, autoimune, confirmada pelo anti-TPO; outras causas são iodo radioativo, tireoidectomia, amiodarona, lítio e tireoidite pós-parto.</p>
<p>As manifestações são lentas e inespecíficas: cansaço, ganho de peso modesto, intolerância ao frio, constipação, pele seca, <strong>queda de cabelo difusa</strong>, unhas quebradiças, rouquidão, bradicardia, edema periorbitário, reflexos lentificados, irregularidade menstrual com menorragia, infertilidade e hiperprolactinemia. O colesterol LDL sobe e a creatinoquinase pode subir. Em mulheres jovens com queixas de pele, cabelo ou ciclo, o TSH está entre os primeiros exames, porque a correção resolve o conjunto.</p>
<p>O tratamento é a <strong>levotiroxina</strong>, em jejum, 30 a 60 minutos antes do café, longe de ferro, cálcio e inibidores de bomba de prótons, que reduzem a absorção. Em adultos jovens sem cardiopatia, a dose plena de 1,6 µg/kg por dia; em idosos e coronariopatas, 25 a 50 µg com aumentos graduais, para não precipitar angina. O <strong>TSH</strong> é reavaliado em 6 a 8 semanas, com meta na faixa normal, e depois anualmente. Na gestação, a dose sobe 25 a 30% assim que o teste é positivo, e o TSH-alvo é abaixo de 2,5 no primeiro trimestre. O subclínico com TSH abaixo de 10, sem sintomas e sem anticorpos, pode ser só observado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher jovem com queda de cabelo e TSH de 12 com T4 livre baixo não precisa de mais exames para começar: é hipotireoidismo primário, e a levotiroxina em dose plena resolve o cabelo, o ciclo e o cansaço. Marque o TSH em 6 a 8 semanas e ensine a tomar em jejum, longe do ferro e do cálcio.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>TSH alto e T4 livre baixo: hipotireoidismo primário; TSH alto e T4 livre normal: subclínico.</li>
<li>Hashimoto é a causa mais comum; anti-TPO confirma a autoimunidade.</li>
<li>Cansaço, pele seca, queda de cabelo, constipação, irregularidade menstrual, bradicardia.</li>
<li>Levotiroxina 1,6 µg/kg em jejum; idoso e cardiopata começam com 25 a 50 µg.</li>
<li>TSH em 6 a 8 semanas; na gestação, aumentar a dose em 25 a 30%.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o TSH não serve para diagnosticar o hipotireoidismo central? <details><summary>Resposta</summary>Porque a hipófise doente não eleva o TSH apesar do T4 livre baixo; o diagnóstico se faz pelo T4 livre.</details></li>
<li>Como se inicia a levotiroxina em um coronariopata idoso? <details><summary>Resposta</summary>Com 25 a 50 µg por dia e aumentos graduais, para não precipitar angina ou arritmia.</details></li>
<li>Quando tratar o hipotireoidismo subclínico? <details><summary>Resposta</summary>Com TSH acima de 10, gestação ou tentativa de engravidar, sintomas ou anti-TPO positivo.</details></li>
</ol>
`,
"susp2021#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender o que cada marcador da hepatite B significa.</li>
<li>Montar os perfis sorológicos: aguda, crônica, curada, vacinada e janela.</li>
<li>Saber quem precisa de tratamento e de vigilância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>HBsAg</dt>
<dd>Antígeno de superfície; positivo significa vírus presente, aguda ou crônica. Persistência por mais de 6 meses define a forma crônica.</dd>
<dt>Anti-HBc</dt>
<dd>Anticorpo contra o core; IgM na infecção aguda, IgG para sempre em quem teve contato com o vírus. Não aparece com a vacina.</dd>
<dt>Anti-HBs</dt>
<dd>Anticorpo protetor contra a superfície; marca imunidade, por cura ou por vacina.</dd>
<dt>HBeAg e anti-HBe</dt>
<dd>Antígeno de replicação e seu anticorpo; HBeAg positivo indica alta replicação e maior contagiosidade.</dd>
</dl>
<h4>O essencial</h4>
<p>A leitura da sorologia da hepatite B responde três perguntas. <strong>O vírus está presente?</strong> Sim, se o HBsAg é positivo. <strong>Houve contato com o vírus?</strong> Sim, se o anti-HBc é positivo, e a classe IgM indica que foi recente. <strong>Há imunidade?</strong> Sim, se o anti-HBs é positivo. A combinação monta o perfil: <strong>hepatite aguda</strong> é HBsAg positivo com anti-HBc IgM; <strong>hepatite crônica</strong> é HBsAg positivo por mais de 6 meses com anti-HBc IgG e anti-HBs negativo; <strong>infecção curada</strong> é HBsAg negativo com anti-HBc e anti-HBs positivos; <strong>vacinado</strong> é anti-HBs isolado, sem anti-HBc, porque a vacina só contém o antígeno de superfície.</p>
<p>Dois perfis confundem. A <strong>janela imunológica</strong> da infecção aguda, quando o HBsAg já desapareceu e o anti-HBs ainda não surgiu, mostra só o anti-HBc IgM. O <strong>anti-HBc isolado</strong> (IgG, sem HBsAg nem anti-HBs) pode ser infecção antiga com anti-HBs que caiu, falso-positivo ou infecção oculta com DNA detectável, e pede o HBV-DNA; esse paciente pode reativar sob imunossupressão. O HBeAg positivo e o HBV-DNA alto marcam replicação e orientam o tratamento; a soroconversão para anti-HBe é meta terapêutica na forma crônica.</p>
<p>A hepatite aguda em adulto cura em mais de 95% e só recebe suporte; a crônica se estabelece em 90% dos infectados ao nascer. O tratamento da forma crônica, com tenofovir ou entecavir, é indicado quando há replicação (HBV-DNA alto) com transaminases elevadas ou fibrose, cirrose em qualquer nível de viremia, manifestações extra-hepáticas, coinfecção com HIV ou imunossupressão planejada. Todo portador crônico faz rastreio de carcinoma hepatocelular com ultrassonografia semestral se tiver cirrose, história familiar ou idade avançada. A vacina é universal, em três doses, e a imunoglobulina protege o recém-nascido de mãe HBsAg positiva e o exposto não vacinado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante de uma sorologia, pergunte na ordem: HBsAg, anti-HBc, anti-HBs. Vírus presente, contato prévio, imunidade. Anti-HBc com anti-HBs e sem HBsAg é alguém que teve a doença e curou; anti-HBs sozinho é alguém que tomou a vacina. Confundir os dois muda a vigilância do fígado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>HBsAg: vírus presente; anti-HBc: contato com o vírus; anti-HBs: imunidade.</li>
<li>Curado: anti-HBc e anti-HBs positivos, HBsAg negativo; vacinado: só anti-HBs.</li>
<li>Crônica: HBsAg por mais de 6 meses; janela: só anti-HBc IgM.</li>
<li>Anti-HBc isolado: pedir HBV-DNA; risco de reativação na imunossupressão.</li>
<li>Tratar com tenofovir ou entecavir quando há replicação com lesão hepática ou cirrose.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual marcador separa o curado do vacinado? <details><summary>Resposta</summary>O anti-HBc: positivo em quem teve a infecção e negativo em quem só recebeu a vacina.</details></li>
<li>O que significa HBsAg positivo com anti-HBc IgM? <details><summary>Resposta</summary>Hepatite B aguda, infecção recente.</details></li>
<li>Qual é a conduta diante do anti-HBc isolado? <details><summary>Resposta</summary>Dosar o HBV-DNA para afastar infecção oculta e lembrar o risco de reativação se houver imunossupressão.</details></li>
</ol>
`,
"susp2021#36": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a nefrite intersticial aguda induzida por fármacos.</li>
<li>Ler o sedimento urinário e separar a nefrite intersticial da necrose tubular e da glomerulonefrite.</li>
<li>Conduzir com retirada do fármaco e corticoide quando indicado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nefrite intersticial aguda</dt>
<dd>Inflamação do interstício renal por hipersensibilidade a fármaco, infecção ou doença autoimune; 15% das lesões renais agudas intrínsecas.</dd>
<dt>Tríade clássica</dt>
<dd>Febre, exantema e eosinofilia; completa em só 10% dos casos, mais comum com betalactâmicos.</dd>
<dt>Cilindros leucocitários</dt>
<dd>Leucócitos moldados no túbulo; indicam inflamação do parênquima, na nefrite intersticial ou na pielonefrite.</dd>
</dl>
<h4>O essencial</h4>
<p>A nefrite intersticial aguda é uma <strong>reação de hipersensibilidade</strong> ao fármaco, não dependente da dose, que começa dias a semanas após a exposição e, com anti-inflamatórios, pode demorar meses. Os principais culpados são os <strong>anti-inflamatórios não esteroidais</strong>, os betalactâmicos, os inibidores de bomba de prótons, as sulfas, a rifampicina, o alopurinol e, hoje, os inibidores de checkpoint imunológico. A creatinina sobe sem oligúria importante, e os sinais sistêmicos de alergia, <strong>febre, exantema, artralgia e eosinofilia</strong>, quando presentes, apontam o diagnóstico; com os anti-inflamatórios eles costumam faltar.</p>
<p>O <strong>sedimento urinário</strong> é a chave: leucocitúria com cultura negativa, <strong>cilindros leucocitários</strong>, hematúria discreta, eosinofilúria (pouco sensível) e proteinúria leve, abaixo de 1 g por dia, de padrão tubular. A necrose tubular aguda tem cilindros granulosos pigmentados e contexto de isquemia ou toxina; a glomerulonefrite tem hematúria dismórfica, cilindros hemáticos e proteinúria maior; a lesão pré-renal tem sedimento limpo e sódio urinário baixo. A biópsia renal confirma o infiltrado intersticial e é indicada quando o diagnóstico é incerto ou a lesão não melhora com a suspensão do fármaco.</p>
<p>O tratamento é <strong>suspender o agente</strong>, o que recupera a função na maioria em dias a semanas. Quando a creatinina não cai em 5 a 7 dias, ou a lesão é grave, usa-se <strong>prednisona</strong> 0,5 a 1 mg/kg por 4 a 6 semanas com retirada gradual, de preferência cedo, porque a fibrose se instala rápido. A nefrite por anti-inflamatório responde pior ao corticoide. Evitam-se reexposições, e o fármaco é anotado como alergia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Creatinina subindo em quem começou um anti-inflamatório ou um antibiótico há duas semanas, com febre, manchas na pele e eosinófilos altos: olhe a urina. Leucócitos e cilindros leucocitários sem bactéria é nefrite intersticial. Pare o remédio hoje; o corticoide entra se o rim não responder em uma semana.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipersensibilidade a fármaco: anti-inflamatórios, betalactâmicos, inibidores de bomba, sulfas, alopurinol.</li>
<li>Febre, exantema, artralgia e eosinofilia apontam o diagnóstico, mas faltam na maioria.</li>
<li>Urina: leucocitúria estéril, cilindros leucocitários, eosinofilúria, proteinúria leve.</li>
<li>Necrose tubular tem cilindros granulosos; glomerulonefrite tem cilindros hemáticos.</li>
<li>Suspender o fármaco; prednisona se não recuperar em 5 a 7 dias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual achado urinário mais sugere nefrite intersticial? <details><summary>Resposta</summary>Cilindros leucocitários com piúria estéril, acompanhados de eosinofilúria e proteinúria leve.</details></li>
<li>Por que a tríade clássica é pouco útil? <details><summary>Resposta</summary>Porque está completa em apenas 10% dos casos, e falta com frequência nas formas por anti-inflamatório.</details></li>
<li>Quando o corticoide é indicado? <details><summary>Resposta</summary>Quando a função renal não melhora em 5 a 7 dias após a suspensão do fármaco, ou na lesão grave, iniciado cedo.</details></li>
</ol>
`,
"susp2021#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a ferida pelo risco de tétano.</li>
<li>Cruzar a história vacinal com o tipo de ferida para decidir vacina e imunoglobulina.</li>
<li>Conhecer o calendário da vacina antitetânica em crianças e adultos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ferida de alto risco</dt>
<dd>Profunda, perfurante, com terra, fezes ou corpo estranho, com tecido desvitalizado, queimadura, mordedura ou atendida depois de 6 horas.</dd>
<dt>Esquema completo</dt>
<dd>Três ou mais doses de vacina com componente tetânico documentadas.</dd>
<dt>Imunoglobulina antitetânica</dt>
<dd>Anticorpos prontos, 250 UI por via intramuscular; protege de imediato quem não tem imunidade própria.</dd>
<dt>Reforço</dt>
<dd>Dose de dT ou dTpa a cada 10 anos, ou a cada 5 na ferida de risco.</dd>
</dl>
<h4>O essencial</h4>
<p>O tétano é causado pela toxina do <em>Clostridium tetani</em>, cujos esporos vivem na terra e nas fezes e germinam em feridas com pouco oxigênio. A prevenção no atendimento tem dois pilares: o <strong>cuidado da ferida</strong>, com lavagem abundante, retirada de corpos estranhos e desbridamento do tecido morto, e a <strong>imunização</strong>, que depende de duas perguntas: a ferida é limpa ou de risco, e quantas doses de vacina o paciente tem?</p>
<p>A tabela do Ministério da Saúde é simples. Com <strong>menos de três doses ou história desconhecida</strong>, toda ferida recebe vacina (e o esquema é completado depois); se a ferida é de risco, soma-se a <strong>imunoglobulina</strong>, ou o soro antitetânico quando ela não está disponível. Com <strong>três ou mais doses</strong>, a imunoglobulina não é necessária em nenhuma ferida; a vacina de reforço é indicada na ferida limpa se a última dose foi há <strong>mais de 10 anos</strong> e na ferida de risco se foi há <strong>mais de 5 anos</strong>. Imunodeprimidos, desnutridos graves e idosos com ferida de risco recebem imunoglobulina mesmo com esquema completo. A imunoglobulina e a vacina vão em sítios diferentes.</p>
<p>O calendário infantil tem a pentavalente aos 2, 4 e 6 meses e os reforços com DTP aos 15 meses e aos 4 anos; uma criança de 9 anos com as cinco doses ou com quatro delas está com o esquema completo. Adultos recebem dT a cada 10 anos e a gestante recebe dTpa a cada gestação a partir da 20ª semana, para proteger o recém-nascido. Quem nunca foi vacinado faz três doses de dT com intervalo de 60 dias. O tétano acidental ainda ocorre no Brasil, sobretudo em homens adultos sem reforço, e o diagnóstico é clínico: trismo, riso sardônico, opistótono e espasmos com consciência preservada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Criança com corte profundo e sujo de terra e caderneta com quatro doses, a última há 8 anos: lave bem, desbride e dê um reforço da vacina, sem imunoglobulina. O soro é para quem não tem três doses; recomeçar o esquema é para quem nunca o completou.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ferida de risco: profunda, suja, perfurante, desvitalizada, tardia.</li>
<li>Menos de três doses: vacina sempre; imunoglobulina se ferida de risco.</li>
<li>Três doses ou mais: sem imunoglobulina; reforço se mais de 10 anos (limpa) ou mais de 5 anos (risco).</li>
<li>Imunoglobulina 250 UI intramuscular, em sítio diferente da vacina.</li>
<li>Adultos: dT a cada 10 anos; gestante: dTpa a cada gestação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quem recebe imunoglobulina antitetânica? <details><summary>Resposta</summary>Quem tem menos de três doses ou história desconhecida e ferida de risco, além de imunodeprimidos e desnutridos graves com ferida de risco.</details></li>
<li>Com esquema completo, quando se dá o reforço? <details><summary>Resposta</summary>Se a última dose foi há mais de 10 anos na ferida limpa, ou há mais de 5 anos na ferida de risco.</details></li>
<li>O que torna uma ferida de alto risco? <details><summary>Resposta</summary>Profundidade, contaminação com terra ou fezes, corpo estranho, tecido desvitalizado, queimadura, mordedura ou atendimento após 6 horas.</details></li>
</ol>
`,
"susp2021#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Separar a hipocalemia por perda renal da perda digestiva e da redistribuição.</li>
<li>Usar o estado ácido-base para apontar a causa da perda.</li>
<li>Reconhecer as manifestações e repor potássio com segurança.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipocalemia</dt>
<dd>Potássio sérico abaixo de 3,5 mEq/L; grave abaixo de 2,5 ou com arritmia e fraqueza.</dd>
<dt>Potássio urinário</dt>
<dd>Acima de 20 mEq/L em amostra isolada (ou acima de 15 mEq em 24 horas) durante a hipocalemia indica perda renal.</dd>
<dt>Redistribuição</dt>
<dd>Entrada de potássio na célula sem perda real: insulina, beta-agonistas, alcalose, paralisia periódica.</dd>
<dt>Hipomagnesemia</dt>
<dd>Impede a correção da hipocalemia; o magnésio é reposto primeiro.</dd>
</dl>
<h4>O essencial</h4>
<p>O potássio é quase todo intracelular, e o nível sérico cai por três mecanismos: <strong>redistribuição</strong> para dentro da célula, <strong>perda digestiva</strong> ou <strong>perda renal</strong>. O primeiro passo é afastar a redistribuição (insulina, salbutamol, alcalose aguda, hipotermia, paralisia periódica, tireotoxicose). O segundo é medir o <strong>potássio urinário</strong>: baixo indica que o rim está poupando e a perda é digestiva ou cutânea; alto indica perda renal. O terceiro é o <strong>estado ácido-base</strong>, que aponta a causa dentro de cada via.</p>
<p>Perda renal com <strong>alcalose metabólica</strong> é o padrão dos <strong>diuréticos</strong> de alça e tiazídicos, do <strong>excesso de mineralocorticoide</strong> (hiperaldosteronismo primário, Cushing, estenose de artéria renal, alcaçuz) e dos vômitos, em que a perda de ácido gera bicarbonatúria que arrasta potássio pelo rim; as síndromes de Bartter e Gitelman imitam a furosemida e o tiazídico. A pressão alta separa o mineralocorticoide (hipertenso) dos diuréticos, dos vômitos e de Bartter e Gitelman (normotensos). Perda renal com <strong>acidose metabólica</strong> é acidose tubular renal ou cetoacidose; perda digestiva com acidose é diarreia, fístula ou abuso de laxante.</p>
<p>A hipocalemia dá fraqueza, cãibras, íleo, poliúria por resistência ao hormônio antidiurético e, no eletrocardiograma, achatamento da onda T, <strong>onda U</strong>, depressão de ST e, no extremo, arritmias ventriculares, mais perigosas em quem usa digoxina. A reposição oral com cloreto de potássio é preferida; a intravenosa, em até 10 a 20 mEq por hora em veia periférica com monitorização, fica para a forma grave ou sintomática. Repor magnésio quando baixo e tratar a causa, trocando o diurético ou somando espironolactona, evita a recorrência.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Potássio de 2,8 com bicarbonato alto e potássio urinário elevado: o rim está jogando potássio fora e o sangue está alcalino. Pergunte sobre diurético e vômitos e meça a pressão; se ela estiver alta, procure aldosterona. Reponha magnésio junto, ou o potássio não sobe.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Três mecanismos: redistribuição, perda digestiva, perda renal; o potássio urinário separa as perdas.</li>
<li>Perda renal com alcalose: diuréticos, mineralocorticoide, vômitos, Bartter e Gitelman.</li>
<li>Perda renal com acidose: acidose tubular, cetoacidose; perda digestiva com acidose: diarreia.</li>
<li>Pressão alta aponta o excesso de mineralocorticoide.</li>
<li>Onda U e arritmias; reposição oral de preferência; magnésio primeiro.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se distingue perda renal de perda digestiva? <details><summary>Resposta</summary>Pelo potássio urinário: alto na perda renal, baixo na digestiva, em que o rim está poupando.</details></li>
<li>Quais causas de hipocalemia com alcalose cursam com hipertensão? <details><summary>Resposta</summary>O excesso de mineralocorticoide: hiperaldosteronismo primário, Cushing, estenose de artéria renal e alcaçuz.</details></li>
<li>Por que repor magnésio? <details><summary>Resposta</summary>Porque a hipomagnesemia aumenta a perda renal de potássio e impede a correção da hipocalemia.</details></li>
</ol>
`,
"susp2021#39": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a cefaleia em salvas pelos sinais autonômicos e pelo padrão temporal.</li>
<li>Tratar a crise com oxigênio em alto fluxo ou sumatriptano subcutâneo.</li>
<li>Conhecer a transição e a profilaxia, e as outras cefaleias trigêmino-autonômicas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cefaleia em salvas</dt>
<dd>Dor unilateral orbitária ou temporal excruciante de 15 a 180 minutos, com sinais autonômicos ipsilaterais e inquietação, em crises agrupadas.</dd>
<dt>Sinais autonômicos</dt>
<dd>Lacrimejamento, hiperemia conjuntival, congestão nasal, rinorreia, sudorese frontal, miose e ptose do mesmo lado da dor.</dd>
<dt>Salva</dt>
<dd>Período de semanas a meses com uma a oito crises por dia, muitas vezes no mesmo horário, seguido de remissão.</dd>
</dl>
<h4>O essencial</h4>
<p>A cefaleia em salvas é a mais dolorosa das cefaleias primárias e a mais frequente das trigêmino-autonômicas. Acomete sobretudo homens jovens, fumantes, e a dor é <strong>unilateral, orbitária ou temporal</strong>, lancinante, de 15 minutos a 3 horas, acompanhada no mesmo lado de <strong>lacrimejamento, olho vermelho, nariz entupido ou escorrendo, sudorese, miose e ptose</strong>. O paciente não fica quieto: anda, balança, bate a cabeça, o contrário do enxaquecoso que procura o escuro. As crises vêm em <strong>salvas</strong> de semanas, com um ritmo quase de relógio, muitas vezes de madrugada, e o álcool as desencadeia durante o período ativo.</p>
<p>O tratamento da crise precisa ser rápido, porque ela é curta e intensa: <strong>oxigênio a 100% com máscara não reinalante, 12 a 15 L/min por 15 a 20 minutos</strong>, abole a dor em 70 a 80% dos pacientes sem efeitos adversos, e o <strong>sumatriptano subcutâneo</strong> 6 mg é igualmente eficaz; o zolmitriptano nasal é a segunda linha. Analgésicos comuns, opioides e triptanos orais são lentos demais. Como as crises se repetem por semanas, a <strong>transição</strong> com prednisona por 1 a 2 semanas ou bloqueio do nervo occipital maior ganha tempo até a profilaxia agir.</p>
<p>A <strong>profilaxia</strong> de escolha é o <strong>verapamil</strong>, em doses crescentes a partir de 240 mg, com eletrocardiograma a cada aumento pelo risco de bloqueio; lítio, topiramato e melatonina são opções, e o galcanezumabe é a primeira terapia dirigida. A hemicrania paroxística e a hemicrania contínua respondem de forma absoluta à indometacina, que serve como teste diagnóstico; a síndrome SUNCT tem crises de segundos e responde à lamotrigina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Homem que chega inquieto, com um olho vermelho lacrimejando e o nariz escorrendo do mesmo lado de uma dor insuportável na têmpora, que começou há meia hora e já teve ontem na mesma hora: coloque a máscara de oxigênio a 12 litros por minuto. Dipirona e opioide não chegam a tempo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dor unilateral excruciante de 15 a 180 minutos com sinais autonômicos ipsilaterais e inquietação.</li>
<li>Crises em salvas, no mesmo horário, desencadeadas por álcool; homens jovens fumantes.</li>
<li>Crise: oxigênio 100% a 12 a 15 L/min por 15 a 20 minutos, ou sumatriptano subcutâneo 6 mg.</li>
<li>Transição: prednisona ou bloqueio occipital; profilaxia: verapamil com eletrocardiograma.</li>
<li>Hemicrania paroxística e contínua respondem à indometacina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que diferencia o comportamento do paciente com cefaleia em salvas do enxaquecoso? <details><summary>Resposta</summary>A inquietação: ele anda e se agita durante a crise, enquanto o enxaquecoso procura repouso no escuro.</details></li>
<li>Como se administra o oxigênio na crise? <details><summary>Resposta</summary>A 100%, por máscara não reinalante, 12 a 15 L/min, por 15 a 20 minutos.</details></li>
<li>Qual é a profilaxia de escolha e seu cuidado? <details><summary>Resposta</summary>Verapamil em doses crescentes, com eletrocardiograma a cada aumento pelo risco de bloqueio atrioventricular.</details></li>
</ol>
`,
"unesp2026#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Graduar a crise de asma pela fala, pela saturação e pelo esforço respiratório.</li>
<li>Tratar a crise leve a moderada e reconhecer quando os recursos da crise grave entram.</li>
<li>Planejar a alta com corticoide inalatório e pesquisa dos gatilhos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Crise leve a moderada</dt>
<dd>Fala frases completas, saturação acima de 90 a 92%, frequência abaixo de 30, sem uso de musculatura acessória.</dd>
<dt>Crise grave</dt>
<dd>Fala palavras isoladas, agitação, frequência acima de 30, saturação abaixo de 90%, pico de fluxo abaixo de 50%.</dd>
<dt>Broncodilatador de ação curta</dt>
<dd>Salbutamol por aerossol dosimetrado com espaçador, 4 a 10 jatos a cada 20 minutos na primeira hora; equivale à nebulização.</dd>
<dt>Sulfato de magnésio</dt>
<dd>2 g intravenosos em dose única, só na crise grave sem resposta à primeira hora de tratamento.</dd>
</dl>
<h4>O essencial</h4>
<p>A primeira tarefa diante da crise de asma é <strong>graduar</strong> em 30 segundos: quem fala frases inteiras, está calmo, satura acima de 92% e respira menos de 30 vezes por minuto tem uma crise <strong>leve a moderada</strong>; quem fala só palavras, está agitado, usa a musculatura acessória e satura abaixo de 90% tem uma crise <strong>grave</strong>; sonolência, tórax silencioso e bradicardia anunciam a parada.</p>
<p>Na crise leve a moderada, o tratamento é <strong>salbutamol</strong> por aerossol dosimetrado com espaçador, 4 a 10 jatos repetidos a cada 20 minutos na primeira hora, tão eficaz quanto a nebulização e mais rápido; <strong>prednisona oral</strong> 40 a 50 mg na primeira hora, por 5 a 7 dias, que reduz recaídas e internação; e oxigênio só se a saturação cair abaixo de 93 a 95%. Reavalia-se em 1 hora: quem melhora recebe alta com plano de ação; quem não melhora passa a ser tratado como crise grave. Na <strong>crise grave</strong>, somam-se o brometo de ipratrópio aos broncodilatadores, o oxigênio titulado, e o <strong>sulfato de magnésio</strong> intravenoso em dose única quando a primeira hora falha; corticoide intravenoso só se o paciente não consegue engolir.</p>
<p>A crise é a oportunidade de corrigir a doença: a maioria das exacerbações vem de infecção viral, exposição a alérgenos ou fumaça, e, sobretudo, de <strong>falta de medicação de controle</strong>. Quem teve uma crise que exigiu atendimento sai com corticoide inalatório, de preferência combinado com formoterol, com a técnica revisada, com orientação sobre os gatilhos e com retorno marcado em uma semana. Antibiótico fica para pneumonia ou sinusite bacteriana documentadas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Homem com chiado que conversa normalmente e satura 96%: bombinha com espaçador, prednisona pela boca e uma pergunta antes da alta: por que ele teve a crise? Magnésio, antibiótico e corticoide na veia são para outro doente, o que não consegue falar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Graduar pela fala, pela saturação, pela frequência e pelo esforço.</li>
<li>Leve a moderada: salbutamol com espaçador na primeira hora e prednisona oral.</li>
<li>Grave: ipratrópio, oxigênio e magnésio intravenoso se a primeira hora falhar.</li>
<li>Reavaliar em 1 hora; alta com plano de ação.</li>
<li>Sair da crise com corticoide inalatório e gatilhos identificados; antibiótico só com infecção bacteriana.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais sinais classificam a crise como grave? <details><summary>Resposta</summary>Fala em palavras isoladas, agitação, uso de musculatura acessória, frequência acima de 30, saturação abaixo de 90% e pico de fluxo abaixo de 50%.</details></li>
<li>Quando o sulfato de magnésio é indicado? <details><summary>Resposta</summary>Na crise grave que não responde à primeira hora de broncodilatador e corticoide; dose única intravenosa.</details></li>
<li>O que o paciente leva da emergência além da prednisona? <details><summary>Resposta</summary>Corticoide inalatório de manutenção, técnica revisada, plano de ação e orientação sobre os gatilhos.</details></li>
</ol>
`,
"unesp2026#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a indicação de via aérea definitiva no choque séptico.</li>
<li>Escolher indutor e bloqueador que não pioram a hemodinâmica.</li>
<li>Preparar a intubação para evitar o colapso pós-indução.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sequência rápida de intubação</dt>
<dd>Pré-oxigenação, indutor e bloqueador neuromuscular em dose plena quase simultâneos, laringoscopia sem ventilação com máscara.</dd>
<dt>Etomidato</dt>
<dd>Indutor que preserva a pressão arterial; 0,3 mg/kg; suprime o cortisol por horas, sem impacto na mortalidade em dose única.</dd>
<dt>Cetamina</dt>
<dd>Indutor simpaticomimético, 1 a 2 mg/kg; opção no choque, com broncodilatação.</dd>
<dt>Rocurônio</dt>
<dd>Bloqueador não despolarizante, 1,2 mg/kg na sequência rápida; não eleva o potássio e é revertido por sugamadex.</dd>
</dl>
<h4>O essencial</h4>
<p>No choque séptico, a decisão de intubar vem de três fontes: <strong>falha de oxigenação</strong>, <strong>falha de ventilação</strong> com fadiga e <strong>incapacidade de proteger a via aérea</strong> pelo rebaixamento. Quando a consciência cai abaixo de 9 ou 10 na escala de Glasgow e o paciente respira rápido e superficial, a parada respiratória está próxima, e a intubação é indicada agora, mesmo com vasopressor em dose alta. Esperar "estabilizar" é esperar a hipóxia e a acidose que levam à parada, porque a musculatura respiratória consome parte do débito cardíaco já insuficiente.</p>
<p>O risco da intubação no choque é o <strong>colapso pós-indução</strong>: os sedativos tiram o tônus simpático que mantinha a pressão, a pressão positiva reduz o retorno venoso, e a hipotensão vira parada. A preparação reduz esse risco: volume ou vasopressor em bolus à mão, pré-oxigenação com máscara não reinalante ou ventilação não invasiva por 3 a 5 minutos, oxigênio nasal de apneia, e escolha de fármacos. O <strong>etomidato</strong> e a <strong>cetamina</strong> são os indutores do choque, por quase não derrubarem a pressão; o propofol e o <strong>midazolam</strong> são vasodilatadores e cardiodepressores, com a dose reduzida à metade quando usados. O <strong>rocurônio</strong> em dose plena oferece condições de intubação equivalentes à succinilcolina, sem elevar o potássio, o que importa no renal crônico, no queimado, na lesão neurológica e na rabdomiólise.</p>
<p>A <strong>ventilação não invasiva</strong> exige paciente lúcido, cooperativo, com tosse eficaz e sem instabilidade; no choque com rebaixamento ela só atrasa a intubação e expõe à aspiração.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Séptico em noradrenalina alta, Glasgow 10, respirando 32 vezes e cansando: intube agora, com etomidato ou cetamina e rocurônio, com o vasopressor preparado para o bolus. Midazolam com succinilcolina num renal anúrico é a combinação que derruba a pressão e sobe o potássio ao mesmo tempo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Intubar no choque quando há rebaixamento, fadiga ou hipoxemia refratária; não esperar.</li>
<li>Colapso pós-indução: prevenir com volume, vasopressor pronto e pré-oxigenação.</li>
<li>Etomidato ou cetamina como indutores; midazolam e propofol derrubam a pressão.</li>
<li>Rocurônio em dose plena; succinilcolina contraindicada com risco de hipercalemia.</li>
<li>Ventilação não invasiva não serve no rebaixamento nem no choque.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a intubação não espera a estabilização do choque? <details><summary>Resposta</summary>Porque a fadiga e o rebaixamento levam à parada respiratória, e o trabalho respiratório consome o débito já insuficiente.</details></li>
<li>Quais fármacos são preferidos na indução do paciente em choque? <details><summary>Resposta</summary>Etomidato ou cetamina como indutores e rocurônio como bloqueador, por preservarem a pressão e não elevarem o potássio.</details></li>
<li>Quando a succinilcolina é contraindicada? <details><summary>Resposta</summary>Com risco de hipercalemia: insuficiência renal, queimaduras, lesão neurológica com desnervação, rabdomiólise e imobilização prolongada.</details></li>
</ol>
`,
"unesp2026#45": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Confirmar a tireotoxicose pelo TSH suprimido e pelo T4 livre alto.</li>
<li>Usar o exame da tireoide e dos olhos para apontar a causa.</li>
<li>Conhecer os tratamentos da doença de Graves.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença de Graves</dt>
<dd>Autoimune, por anticorpos que estimulam o receptor de TSH (TRAb); causa mais comum de hipertireoidismo em jovens.</dd>
<dt>Oftalmopatia de Graves</dt>
<dd>Proptose, retração palpebral, edema periorbitário e diplopia por inflamação dos tecidos orbitários; exclusiva da doença de Graves.</dd>
<dt>Bócio difuso com sopro</dt>
<dd>Tireoide aumentada por inteiro, lisa, com frêmito e sopro pela hipervascularização.</dd>
<dt>Tireoidite subaguda</dt>
<dd>Pós-viral, dolorosa, com VHS alta e captação de iodo baixa; tireotoxicose transitória por destruição.</dd>
</dl>
<h4>O essencial</h4>
<p>A tireotoxicose se reconhece pelos sintomas de excesso de hormônio, <strong>perda de peso com apetite preservado, palpitação, tremor, sudorese, intolerância ao calor, ansiedade e insônia</strong>, e se confirma pelo <strong>TSH suprimido com T4 livre alto</strong>. A pergunta seguinte é a causa, e o exame físico responde a maior parte. Bócio <strong>difuso</strong>, indolor, com <strong>frêmito e sopro</strong>, mais <strong>proptose</strong>, retração palpebral ou edema periorbitário, é <strong>doença de Graves</strong>: os anticorpos TRAb estimulam o receptor de TSH na tireoide e os fibroblastos da órbita.</p>
<p>Outros padrões apontam outras causas. Nódulos palpáveis em pessoa mais velha indicam bócio multinodular tóxico ou adenoma tóxico, sem oftalmopatia. Tireoide <strong>dolorosa</strong> após infecção viral, com VHS alta, é tireoidite subaguda de De Quervain, em que a tireotoxicose dura semanas e dá lugar a hipotireoidismo transitório. Ausência de bócio com tireoglobulina baixa é tireotoxicose factícia por ingestão de hormônio. Quando o exame deixa dúvida, o TRAb e a cintilografia (captação difusa e alta no Graves, nodular no adenoma, ausente na tireoidite e na factícia) decidem.</p>
<p>O tratamento da doença de Graves começa com <strong>betabloqueador</strong> para os sintomas e <strong>metimazol</strong>, que bloqueia a síntese hormonal, por 12 a 18 meses, com vigilância de agranulocitose e hepatotoxicidade; o propiltiouracil fica para o primeiro trimestre da gestação. Metade recidiva, e as opções definitivas são o <strong>iodo radioativo</strong>, que pode piorar a oftalmopatia (prevenida com corticoide), e a <strong>tireoidectomia</strong>, preferida com bócio grande, oftalmopatia ativa ou gestação planejada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher jovem tremendo, com olhos saltados e um pescoço que sopra ao estetoscópio: é Graves, e não precisa de cintilografia para começar o propranolol e o metimazol. Pergunte se ela fuma e se pretende engravidar, porque as duas respostas mudam o tratamento definitivo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tireotoxicose: TSH suprimido com T4 livre alto; sintomas de hipermetabolismo.</li>
<li>Bócio difuso com sopro e oftalmopatia: doença de Graves (TRAb).</li>
<li>Nódulos em idoso: bócio multinodular ou adenoma tóxico; dor e VHS alta: tireoidite subaguda; sem bócio: factícia.</li>
<li>Betabloqueador e metimazol; propiltiouracil no primeiro trimestre.</li>
<li>Definitivo: iodo radioativo ou tireoidectomia; parar de fumar protege os olhos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual achado é exclusivo da doença de Graves? <details><summary>Resposta</summary>A oftalmopatia, com proptose e edema periorbitário, causada pelos mesmos anticorpos que estimulam a tireoide.</details></li>
<li>Como a cintilografia separa as causas de tireotoxicose? <details><summary>Resposta</summary>Captação difusa e aumentada no Graves, focal no adenoma tóxico, e ausente na tireoidite e na tireotoxicose factícia.</details></li>
<li>Qual é o risco do iodo radioativo em quem tem oftalmopatia? <details><summary>Resposta</summary>Piorar a doença ocular, o que se previne com corticoide ou se evita preferindo a cirurgia.</details></li>
</ol>
`,
"unesp2026#46": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a neutropenia febril e saber quando esperá-la após a quimioterapia.</li>
<li>Executar a conduta da primeira hora: culturas e antibiótico empírico.</li>
<li>Estratificar o risco e escolher o esquema antimicrobiano.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Neutropenia febril</dt>
<dd>Temperatura de 38,3 ºC ou de 38 ºC sustentada por 1 hora, com neutrófilos abaixo de 500 ou com queda prevista para menos de 500.</dd>
<dt>Nadir</dt>
<dd>Ponto mais baixo dos neutrófilos, 7 a 14 dias após a quimioterapia mielotóxica.</dd>
<dt>Escore MASCC</dt>
<dd>Pontuação que identifica o baixo risco (21 ou mais), candidato a tratamento oral ambulatorial.</dd>
<dt>Antibiótico antipseudomonas</dt>
<dd>Cefepima, piperacilina-tazobactam ou meropeném; base do esquema empírico.</dd>
</dl>
<h4>O essencial</h4>
<p>A quimioterapia citotóxica derruba os neutrófilos com um <strong>nadir previsível</strong> entre o sétimo e o décimo quarto dia. Sem neutrófilos, a infecção não forma pus, não localiza e não dá sinais além da febre; bactérias do próprio intestino e da pele, como <em>Escherichia coli</em>, <em>Pseudomonas</em> e estafilococos do cateter, invadem a corrente sanguínea e evoluem para sepse em horas. Por isso a febre no período do nadir é <strong>emergência oncológica</strong>, tratada como neutropenia febril antes de o hemograma confirmar, e a mortalidade sobe a cada hora de atraso do antibiótico.</p>
<p>A conduta da <strong>primeira hora</strong>: avaliação rápida de foco (mucosite, cateter, pele, períneo, pulmão), duas <strong>hemoculturas</strong> (uma delas do cateter), urocultura, radiografia se houver sintomas respiratórios, e o <strong>antibiótico empírico de amplo espectro com ação antipseudomonas</strong>: cefepima, piperacilina-tazobactam ou meropeném. A vancomicina é acrescentada só com suspeita de infecção de cateter, mucosite grave, instabilidade, pneumonia ou colonização conhecida por MRSA. Antifúngico entra na febre persistente após 4 a 7 dias. Os antibióticos continuam até a recuperação dos neutrófilos, e ajustam-se às culturas, positivas em apenas 20 a 30%.</p>
<p>O <strong>escore MASCC</strong> separa o baixo risco (21 pontos ou mais: sem hipotensão, sem DPOC, tumor sólido, ambulatorial, jovem, sem desidratação), que pode ser tratado em casa com amoxicilina-clavulanato e ciprofloxacino após observação, do alto risco, internado. Dengue, influenza e outras viroses são hipóteses legítimas em qualquer febre, mas no neutropênico são investigadas em paralelo, nunca no lugar do antibiótico, porque a coinfecção bacteriana é frequente e fatal. Os fatores estimuladores de colônias são profiláticos, não terapêuticos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher com febre de 38,8 ºC uma semana depois da quimioterapia: conte os dias, não as hipóteses. Colha as hemoculturas e prescreva cefepima antes de o hemograma voltar; a sorologia de dengue pode ser colhida ao mesmo tempo, mas não adia nada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre entre 7 e 14 dias da quimioterapia é neutropenia febril até prova em contrário.</li>
<li>Hemoculturas e antibiótico antipseudomonas em até 1 hora.</li>
<li>Vancomicina só com indicação específica; antifúngico na febre persistente.</li>
<li>MASCC 21 ou mais: baixo risco, tratamento oral ambulatorial possível.</li>
<li>Vírus e dengue se investigam em paralelo, sem atrasar o antibiótico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando ocorre o nadir dos neutrófilos? <details><summary>Resposta</summary>Entre 7 e 14 dias após a quimioterapia mielotóxica.</details></li>
<li>Qual é o esquema empírico inicial? <details><summary>Resposta</summary>Betalactâmico antipseudomonas em monoterapia: cefepima, piperacilina-tazobactam ou meropeném, dentro de 1 hora.</details></li>
<li>Quando acrescentar vancomicina? <details><summary>Resposta</summary>Com suspeita de infecção de cateter, instabilidade hemodinâmica, mucosite grave, pneumonia ou colonização por MRSA.</details></li>
</ol>
`,
"unesp2026#48": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a fratura por fragilidade como diagnóstico de osteoporose grave.</li>
<li>Escolher o antirreabsortivo conforme as contraindicações do paciente.</li>
<li>Saber as medidas associadas e o tempo de tratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fratura por fragilidade</dt>
<dd>Fratura por queda da própria altura ou menos, em quadril, vértebra, punho ou úmero; define osteoporose e tratamento.</dd>
<dt>Bisfosfonatos orais</dt>
<dd>Alendronato semanal e risedronato; exigem esôfago normal, jejum, água e 30 minutos em pé; contraindicados na estenose e na acalasia.</dd>
<dt>Ácido zoledrônico</dt>
<dd>Bisfosfonato intravenoso, 5 mg uma vez ao ano; reduz fraturas e mortalidade após fratura de quadril.</dd>
</dl>
<h4>O essencial</h4>
<p>Uma <strong>fratura de quadril ou de vértebra por queda da própria altura</strong> diagnostica osteoporose, qualquer que seja a densitometria, e coloca a paciente na categoria de risco muito alto: a chance de nova fratura dobra nos dois anos seguintes, e a mortalidade após a fratura de quadril chega a 20 a 30% em um ano. O tratamento farmacológico começa antes da alta ou logo após, precedido da correção da vitamina D (acima de 20 a 30 ng/mL) e do cálcio, de preferência pela dieta, porque hipocalcemia é contraindicação a qualquer antirreabsortivo.</p>
<p>Os <strong>bisfosfonatos orais</strong> são a primeira linha pela eficácia e pelo custo, mas têm regras: tomados em jejum com água, 30 minutos em pé antes de comer, e esôfago íntegro, porque causam esofagite e ulceração. <strong>Estenose, acalasia, varizes de esôfago e incapacidade de ficar em pé</strong> os contraindicam, assim como a filtração abaixo de 30 a 35 mL/min. A saída é o <strong>ácido zoledrônico</strong> intravenoso anual, com reação febril na primeira infusão e a mesma restrição renal, ou o <strong>denosumabe</strong> semestral, que não depende da função renal, mas não pode ser interrompido sem transição para bisfosfonato.</p>
<p>Nos casos de risco muito alto, os <strong>anabólicos</strong> (teriparatida, romosozumabe) por 1 a 2 anos, seguidos de antirreabsortivo, ganham mais massa óssea. Terapia hormonal e tibolona tratam sintomas climatéricos, não a osteoporose com fratura. O tratamento com bisfosfonato é reavaliado em 3 a 5 anos, com "férias" para quem está em risco moderado, e a prevenção de quedas, a atividade física e a revisão de sedativos completam o cuidado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idosa que quebrou o fêmur caindo da própria altura não precisa de densitometria para ser tratada; precisa de um remédio que o esôfago dela aguente. Com estenose esofágica, o comprimido está fora, e o ácido zoledrônico anual, com a vitamina D corrigida antes, é a escolha.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fratura por fragilidade define osteoporose e tratamento imediato.</li>
<li>Corrigir vitamina D e cálcio antes de qualquer antirreabsortivo.</li>
<li>Bisfosfonato oral exige esôfago íntegro e 30 minutos em pé; estenose contraindica.</li>
<li>Ácido zoledrônico anual ou denosumabe semestral como opções parenterais.</li>
<li>Anabólicos no risco muito alto; hormônios e tibolona não tratam osteoporose com fratura.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a fratura de quadril por queda simples dispensa a densitometria para tratar? <details><summary>Resposta</summary>Porque a fratura por fragilidade, por si, define osteoporose e risco muito alto de nova fratura.</details></li>
<li>Quais condições contraindicam os bisfosfonatos orais? <details><summary>Resposta</summary>Estenose, acalasia ou varizes de esôfago, incapacidade de ficar em pé por 30 minutos, hipocalcemia e filtração abaixo de 30 a 35 mL/min.</details></li>
<li>Qual é o cuidado ao suspender o denosumabe? <details><summary>Resposta</summary>Fazer transição para um bisfosfonato, porque a interrupção causa perda óssea rápida e fraturas vertebrais de rebote.</details></li>
</ol>
`,
"unesp2026#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar o estado hiperglicêmico hiperosmolar da cetoacidose diabética.</li>
<li>Conhecer as complicações, com a trombose à frente.</li>
<li>Conduzir a reposição de volume, a insulina e o potássio no idoso.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Estado hiperglicêmico hiperosmolar</dt>
<dd>Glicemia acima de 600 mg/dL, osmolaridade efetiva acima de 320 mOsm/kg, pH acima de 7,30 e cetose ausente ou leve.</dd>
<dt>Osmolaridade efetiva</dt>
<dd>2 × sódio + glicose/18; acima de 320 explica a confusão e o coma.</dd>
<dt>Sódio corrigido</dt>
<dd>Sódio medido + 1,6 mEq/L para cada 100 mg/dL de glicose acima de 100; revela a hipernatremia verdadeira.</dd>
</dl>
<h4>O essencial</h4>
<p>O estado hiperglicêmico hiperosmolar é a crise do <strong>diabético tipo 2 idoso</strong>, em que ainda há insulina suficiente para impedir a cetogênese, mas não para controlar a glicose. Um fator precipitante, em geral <strong>infecção</strong>, acidente vascular, infarto ou fármacos (corticoide, diurético, antipsicótico), inicia a hiperglicemia; a glicosúria provoca diurese osmótica por dias ou semanas, e o idoso com sede reduzida ou sem acesso à água acumula um <strong>déficit de 8 a 10 litros</strong>. A glicemia passa de 600, a osmolaridade de 320, o sódio corrigido sobe, e a consciência cai de forma proporcional à osmolaridade. Não há acidose nem cetose relevantes, o que separa o quadro da cetoacidose, que se instala em horas, em jovens, com pH baixo.</p>
<p>A <strong>mortalidade</strong> é de 10 a 20%, várias vezes a da cetoacidose, pela idade, pelas comorbidades e pelo precipitante. As complicações são a <strong>trombose</strong> venosa profunda, embolia pulmonar, infarto e trombose mesentérica, favorecidas pela hiperviscosidade e pela imobilidade, o que justifica a heparina profilática; a lesão renal aguda; a rabdomiólise; e, na correção rápida, o edema cerebral.</p>
<p>O tratamento começa pelo <strong>volume</strong>: soro fisiológico a 0,9%, 1 litro na primeira hora e depois 250 a 500 mL/h, mudando para 0,45% se o sódio corrigido estiver alto, e para dextrose a 5% quando a glicemia chegar a 250 a 300. A <strong>insulina</strong> em infusão vem depois da primeira hora de volume, em dose menor que na cetoacidose, para baixar a glicemia 50 a 75 mg/dL por hora, e a osmolaridade não mais que 3 mOsm/kg por hora. O <strong>potássio</strong> segue as mesmas regras da cetoacidose. A resolução se define por osmolaridade abaixo de 320 e consciência recuperada, e a transição é para insulina subcutânea.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso confuso com glicemia de 1.000, sódio alto e nenhuma cetona: ele perdeu quase 10 litros de água ao longo de semanas. O que o mata é a infecção que começou tudo e o coágulo que o sangue espesso vai formar. Soro primeiro, insulina devagar, heparina profilática e procure o foco.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Idoso tipo 2, instalação lenta, glicemia acima de 600, osmolaridade acima de 320, sem cetose ou acidose.</li>
<li>Déficit de 8 a 10 litros; desidratação grave e sódio corrigido alto.</li>
<li>Mortalidade de 10 a 20%; trombose, lesão renal e rabdomiólise são as complicações.</li>
<li>Volume na primeira hora, insulina depois e em dose menor, potássio pelas regras da cetoacidose.</li>
<li>Heparina profilática e tratamento do precipitante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se calcula a osmolaridade efetiva e qual é o corte? <details><summary>Resposta</summary>2 × sódio + glicose/18; acima de 320 mOsm/kg define o estado hiperosmolar e explica o rebaixamento.</details></li>
<li>Por que a heparina profilática faz parte do tratamento? <details><summary>Resposta</summary>Porque a hiperviscosidade pela desidratação e a imobilidade do idoso elevam muito o risco de trombose venosa e arterial.</details></li>
<li>Qual é a ordem entre volume e insulina? <details><summary>Resposta</summary>Volume na primeira hora, e só depois a insulina em infusão, para evitar queda abrupta da osmolaridade e colapso.</details></li>
</ol>
`,
"unesp2026#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer os quatro pilares da insuficiência cardíaca de fração reduzida e por que entram juntos.</li>
<li>Saber o que o inibidor de SGLT2 acrescenta e quando iniciá-lo.</li>
<li>Reservar ivabradina, hidralazina com nitrato e digoxina às suas indicações.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fração de ejeção reduzida</dt>
<dd>Fração de 40% ou menos; é o grupo em que os fármacos têm benefício comprovado em mortalidade.</dd>
<dt>Inibidor de SGLT2</dt>
<dd>Dapagliflozina ou empagliflozina 10 mg; reduz morte cardiovascular e internação em 25%, com ou sem diabetes.</dd>
<dt>Ivabradina</dt>
<dd>Reduz a frequência sinusal sem baixar a pressão; indicada com frequência de 70 ou mais apesar do betabloqueador otimizado.</dd>
</dl>
<h4>O essencial</h4>
<p>A diretriz europeia de 2021, mantida na atualização de 2023, abandonou a escada sequencial: na fração de ejeção reduzida, as <strong>quatro classes</strong> que reduzem mortalidade começam <strong>o mais cedo possível, em doses baixas e em paralelo</strong>, e são tituladas nas semanas seguintes. São o bloqueio do sistema renina-angiotensina (sacubitril-valsartana ou inibidor da ECA), o betabloqueador (carvedilol, bisoprolol, succinato de metoprolol), o antagonista mineralocorticoide (espironolactona) e o <strong>inibidor de SGLT2</strong>.</p>
<p>O inibidor de SGLT2 foi o último a chegar e o mais fácil de usar: uma dose fixa, sem titulação, com efeito em semanas, pouca hipotensão, melhora da função renal a longo prazo e benefício igual em diabéticos e não diabéticos. Pode ser iniciado <strong>durante a internação</strong>, mesmo com pressão de 100 por 70, desde que não haja cetoacidose ou infecção genital ativa. Por isso, no paciente que já usa as três classes clássicas, ele é o que falta antes de qualquer fármaco adicional, e a alta hospitalar sem ele é uma oportunidade perdida.</p>
<p>Os <strong>adicionais</strong> entram depois dos quatro pilares, em situações específicas. A ivabradina para quem permanece em ritmo sinusal com frequência de 70 ou mais apesar do betabloqueador na dose máxima tolerada. A hidralazina com dinitrato de isossorbida para quem não tolera o bloqueio do sistema renina-angiotensina ou para pacientes negros sintomáticos. A digoxina para sintomas persistentes ou controle de frequência na fibrilação atrial, sem ganho de sobrevida. O diurético de alça trata a congestão e é ajustado pelo peso e pelos sintomas, sem efeito na mortalidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente internado por insuficiência cardíaca nova com fração de 34%, já em enalapril, carvedilol e espironolactona: antes de falar em ivabradina, digoxina ou vasodilatadores, acrescente a dapagliflozina. A pressão de 100 por 70 não impede; cetoacidose e infecção genital impediriam.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Quatro pilares iniciados juntos e cedo: bloqueio renina-angiotensina, betabloqueador, espironolactona, inibidor de SGLT2.</li>
<li>Inibidor de SGLT2: dose fixa, sem diabetes necessário, pode começar na internação.</li>
<li>Diurético para congestão; não muda a mortalidade.</li>
<li>Ivabradina com frequência de 70 ou mais em ritmo sinusal; hidralazina-nitrato na intolerância; digoxina para sintomas ou fibrilação atrial.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que as quatro classes começam em paralelo e não em sequência? <details><summary>Resposta</summary>Porque cada uma reduz mortalidade de forma independente e aditiva, e a escada sequencial atrasava em meses o benefício.</details></li>
<li>O inibidor de SGLT2 exige diabetes para ser indicado na insuficiência cardíaca? <details><summary>Resposta</summary>Não; o benefício em morte cardiovascular e internação é o mesmo em diabéticos e não diabéticos.</details></li>
<li>Quando a ivabradina é indicada? <details><summary>Resposta</summary>Em ritmo sinusal com frequência de 70 ou mais apesar do betabloqueador em dose máxima tolerada, após os quatro pilares.</details></li>
</ol>
`,
"unesp2026#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estadiar a lesão renal aguda pelos critérios de creatinina e de diurese do KDIGO.</li>
<li>Distinguir a necrose tubular aguda da lesão pré-renal pelo sedimento e pelos índices urinários.</li>
<li>Corrigir o ânion gap pela albumina e reconhecer a acidose mista do séptico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Estágios do KDIGO</dt>
<dd>1: creatinina 1,5 a 1,9 vezes a basal; 2: 2 a 2,9 vezes; 3: 3 vezes ou mais, diálise, diurese abaixo de 0,3 mL/kg/h por 24 horas ou anúria por 12 horas.</dd>
<dt>Necrose tubular aguda</dt>
<dd>Lesão das células tubulares por isquemia, sepse ou toxina; cilindros granulosos pigmentados e células tubulares no sedimento.</dd>
<dt>Fração de excreção de sódio</dt>
<dd>Abaixo de 1% na lesão pré-renal (túbulo íntegro retém sódio); acima de 2% na necrose tubular. Não vale com diurético.</dd>
<dt>Ânion gap corrigido</dt>
<dd>Ânion gap medido + 2,5 × (4 − albumina em g/dL); a hipoalbuminemia esconde o aumento do gap.</dd>
</dl>
<h4>O essencial</h4>
<p>A lesão renal aguda se define e se estadia pelo <strong>KDIGO</strong>, com dois critérios independentes, creatinina e diurese, e vale o pior deles. Uma creatinina que triplica é estágio 3, mas uma que "só" dobra com diurese abaixo de 0,3 mL/kg/h por 24 horas também é estágio 3, porque a oligúria prolongada marca a gravidade.</p>
<p>Na <strong>sepse</strong>, a hipoperfusão e a inflamação lesam o túbulo: é a <strong>necrose tubular aguda</strong> isquêmica e séptica, a causa mais comum de lesão intrínseca no hospital. O sedimento mostra <strong>cilindros granulosos pigmentados</strong> ("lama marrom") e células epiteliais tubulares; a fração de excreção de sódio passa de 2%, o sódio urinário de 40 e a osmolaridade urinária fica próxima da plasmática, porque o túbulo lesado não concentra nem retém. Na lesão pré-renal, o sedimento é limpo, a fração de excreção fica abaixo de 1% e a urina é concentrada. Vancomicina por um dia raramente explica uma necrose estabelecida.</p>
<p>O <strong>ácido-base</strong> do séptico ressuscitado costuma ser misto. A acidose láctica eleva o ânion gap, mas a hipoalbuminemia o mascara: cada grama de albumina abaixo de 4 reduz o gap em 2,5. Ao mesmo tempo, litros de soro fisiológico (154 mEq/L de cloro) produzem <strong>acidose hiperclorêmica</strong> de ânion gap normal. O cloro alto com lactato alto denuncia os dois componentes. A compensação respiratória esperada é pCO<sub>2</sub> = 1,5 × bicarbonato + 8 (± 2); um valor dentro da faixa afasta distúrbio respiratório associado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Séptico com creatinina que dobrou, mas urinando 0,2 mL/kg/h há 24 horas: é estágio 3, não 2. Cilindros granulosos e fração de excreção de 3% dizem que o túbulo morreu de isquemia, não de um dia de vancomicina. E o cloro de 112 conta que a acidose não é só lactato: o soro fisiológico tem culpa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>KDIGO: creatinina ou diurese, vale o pior; diurese abaixo de 0,3 mL/kg/h por 24 horas é estágio 3.</li>
<li>Necrose tubular: cilindros granulosos, células tubulares, fração de excreção de sódio acima de 2%.</li>
<li>Pré-renal: sedimento limpo, fração abaixo de 1%, urina concentrada.</li>
<li>Corrigir o ânion gap pela albumina; lactato alto com cloro alto é acidose mista.</li>
<li>pCO<sub>2</sub> esperado = 1,5 × bicarbonato + 8; cristaloide balanceado reduz a hipercloremia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual critério de diurese define o estágio 3? <details><summary>Resposta</summary>Diurese abaixo de 0,3 mL/kg/h por 24 horas ou anúria por 12 horas, independentemente da creatinina.</details></li>
<li>Como a albumina baixa altera a leitura do ânion gap? <details><summary>Resposta</summary>Reduz o gap medido em 2,5 para cada grama abaixo de 4 g/dL, escondendo a acidose de ânion gap aumentado.</details></li>
<li>O que distingue necrose tubular de lesão pré-renal na urina? <details><summary>Resposta</summary>Cilindros granulosos e fração de excreção de sódio acima de 2% na necrose; sedimento limpo e fração abaixo de 1% na pré-renal.</details></li>
</ol>
`,
"unesp2026#56": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a síndrome da fragilidade pelo fenótipo de Fried.</li>
<li>Separar os critérios de fragilidade das outras dimensões da avaliação geriátrica ampla.</li>
<li>Conhecer as intervenções que revertem ou freiam a fragilidade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fragilidade</dt>
<dd>Estado de reserva fisiológica reduzida e vulnerabilidade a estressores; prediz quedas, internação, dependência e morte.</dd>
<dt>Fenótipo de Fried</dt>
<dd>Cinco critérios: perda de peso, exaustão, baixa atividade física, lentidão da marcha e fraqueza de preensão; 3 ou mais definem fragilidade, 1 ou 2 pré-fragilidade.</dd>
<dt>Avaliação geriátrica ampla</dt>
<dd>Avaliação multidimensional de cognição, humor, funcionalidade, mobilidade, nutrição, medicamentos e suporte social.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>fragilidade</strong> é a perda de reserva em vários sistemas que faz o idoso descompensar com estressores pequenos, e o modelo mais usado para reconhecê-la é o <strong>fenótipo de Fried</strong>, de 2001, puramente físico, com cinco critérios: <strong>perda de peso</strong> não intencional de mais de 4,5 kg ou 5% em um ano; <strong>exaustão</strong> autorreferida (sentir que tudo exige esforço); <strong>baixa atividade física</strong> pelo gasto calórico semanal; <strong>lentidão da marcha</strong>, com tempo acima do corte para percorrer 4,6 metros, ajustado por sexo e altura; e <strong>fraqueza</strong>, pela força de preensão manual abaixo do corte por sexo e índice de massa corporal. Três ou mais critérios definem fragilidade; um ou dois, pré-fragilidade, estágio em que a intervenção rende mais.</p>
<p>A <strong>avaliação geriátrica ampla</strong> tem outras dimensões, com seus instrumentos: cognição (mini-exame do estado mental, teste do relógio), humor (escala de depressão geriátrica), atividades básicas de vida diária (índice de Katz) e instrumentais (escala de Lawton), mobilidade e equilíbrio (teste "levante e ande"), nutrição (mini-avaliação nutricional), polifarmácia e critérios de Beers, suporte social. Elas descrevem o idoso e orientam o plano, mas <strong>não são critérios de Fried</strong>: alguém pode ser frágil com cognição perfeita e independente com memória falha.</p>
<p>A fragilidade é parcialmente reversível. O <strong>exercício resistido</strong> com componente aeróbico e de equilíbrio é a intervenção mais eficaz, seguida da <strong>suplementação proteica</strong> (1 a 1,2 g/kg por dia) e da correção da vitamina D, da revisão de medicamentos (sedativos, anticolinérgicos), do tratamento da depressão e das doenças crônicas, e do suporte social.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso que emagreceu 6 kg, está sempre cansado, demora meio minuto para andar 4,6 metros e já não sobe um lance de escada tem quatro critérios de Fried: é frágil. O mini-exame e o Katz entram na avaliação, mas não na contagem. A prescrição começa por musculação adaptada e proteína, não por mais um remédio.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fried: perda de peso, exaustão, inatividade, marcha lenta, preensão fraca; 3 ou mais é fragilidade.</li>
<li>Pré-fragilidade (1 ou 2 critérios) é o melhor momento para intervir.</li>
<li>Cognição, humor, Katz, Lawton, nutrição e polifarmácia pertencem à avaliação geriátrica ampla, não ao fenótipo.</li>
<li>Exercício resistido, proteína, vitamina D, revisão de fármacos e suporte social.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os cinco critérios de Fried? <details><summary>Resposta</summary>Perda de peso não intencional, exaustão, baixa atividade física, lentidão da marcha e fraqueza de preensão manual.</details></li>
<li>O mini-exame do estado mental entra no diagnóstico de fragilidade? <details><summary>Resposta</summary>Não; avalia cognição dentro da avaliação geriátrica ampla, mas o fenótipo de Fried é exclusivamente físico.</details></li>
<li>Qual é a intervenção mais eficaz contra a fragilidade? <details><summary>Resposta</summary>Exercício resistido com componentes aeróbico e de equilíbrio, associado à suplementação proteica.</details></li>
</ol>
`,
"unesp2026#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a superinfecção bacteriana da influenza pelo padrão bifásico.</li>
<li>Identificar a pneumonia necrosante por <em>Staphylococcus aureus</em> e indicar a cobertura para MRSA.</li>
<li>Tratar a pneumonia grave com o esquema combinado e o antiviral.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pneumonia pós-influenza</dt>
<dd>Infecção bacteriana secundária que surge quando a gripe melhorava; pneumococo e estafilococo são os agentes principais.</dd>
<dt>Pneumonia necrosante</dt>
<dd>Consolidações multilobares com cavitação, hemoptise e choque, em jovens; típica do <em>Staphylococcus aureus</em> produtor da leucocidina de Panton-Valentine.</dd>
<dt>MRSA comunitário</dt>
<dd>Estafilococo resistente à meticilina adquirido fora do hospital; não é coberto por cefalosporinas.</dd>
<dt>Pneumonia grave</dt>
<dd>Choque com vasopressor ou ventilação mecânica, ou três critérios menores (confusão, ureia alta, taquipneia, hipoxemia, multilobar, hipotensão).</dd>
</dl>
<h4>O essencial</h4>
<p>A influenza destrói o epitélio respiratório e deprime a defesa local, abrindo caminho para bactérias que colonizam a nasofaringe. A história típica é <strong>bifásica</strong>: a gripe melhora por alguns dias e então volta febre alta com tosse produtiva, dispneia e piora rápida. O <strong>pneumococo</strong> é o agente mais frequente, mas o <strong>Staphylococcus aureus</strong>, incluindo o resistente à meticilina de origem comunitária, é o que produz o quadro mais grave: pneumonia <strong>necrosante</strong>, com consolidações multilobares, <strong>cavitação</strong>, escarro hemoptoico, derrame pleural, leucopenia e choque, em pessoas jovens e previamente sadias.</p>
<p>A pneumonia comunitária grave, com choque ou insuficiência respiratória, recebe <strong>betalactâmico com macrolídeo</strong> (ceftriaxona com azitromicina) ou com quinolona respiratória. A <strong>cobertura para MRSA</strong>, com <strong>vancomicina ou linezolida</strong>, é acrescentada quando há fatores de risco: pneumonia pós-influenza com padrão necrosante, cavitação, hemoptise, isolamento prévio de MRSA, uso recente de antibiótico intravenoso ou internação, e usuários de drogas injetáveis. Colhem-se hemoculturas, cultura de escarro, antígenos urinários e PCR de MRSA no swab nasal, cujo resultado negativo permite retirar a cobertura.</p>
<p>O <strong>oseltamivir</strong> é mantido ou iniciado em qualquer pneumonia grave com influenza confirmada ou suspeita, mesmo após 48 horas de sintomas, porque reduz mortalidade em internados.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem que estava se recuperando da gripe e em dois dias chega com febre de 40, escarro com sangue, pressão baixa e radiografia cheia de consolidações com buracos: o pneumococo não costuma cavitar assim. Ceftriaxona com azitromicina, e vancomicina ou linezolida por cima, porque o estafilococo resistente mata em horas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Gripe que melhora e piora: superinfecção bacteriana; pneumococo e estafilococo.</li>
<li>Cavitação, hemoptise, multilobar e choque em jovem: pneumonia necrosante por <em>S. aureus</em>.</li>
<li>Grave: betalactâmico com macrolídeo; somar vancomicina ou linezolida com fatores de risco para MRSA.</li>
<li>Oseltamivir em toda pneumonia grave com influenza, mesmo tardio.</li>
<li>PCR nasal negativo para MRSA permite descalonar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados sugerem pneumonia por <em>Staphylococcus aureus</em> após a influenza? <details><summary>Resposta</summary>Padrão necrosante com cavitação, consolidações multilobares, hemoptise, leucopenia e choque em pessoa jovem.</details></li>
<li>Quando acrescentar cobertura para MRSA na pneumonia comunitária? <details><summary>Resposta</summary>Com pneumonia pós-influenza necrosante, isolamento prévio de MRSA, antibiótico intravenoso ou internação recentes, ou uso de drogas injetáveis.</details></li>
<li>Qual é o papel do oseltamivir na pneumonia grave? <details><summary>Resposta</summary>Reduz mortalidade em internados com influenza e é indicado mesmo após 48 horas de sintomas.</details></li>
</ol>
`,
"einstein2026#1": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar o controle da asma e reconhecer a asma não controlada.</li>
<li>Entender por que o beta-agonista de curta ação isolado foi abandonado.</li>
<li>Aplicar os degraus do GINA com o corticoide inalatório com formoterol.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Asma controlada</dt>
<dd>Nas últimas 4 semanas: sintomas diurnos no máximo 2 vezes por semana, sem despertar noturno, sem limitação, alívio no máximo 2 vezes por semana.</dd>
<dt>Corticoide inalatório com formoterol</dt>
<dd>Budesonida-formoterol em um só dispositivo; o formoterol tem início rápido e permite usar a combinação como alívio e como manutenção.</dd>
<dt>Terapia de manutenção e alívio (MART)</dt>
<dd>A mesma combinação usada diariamente e nas crises, dos degraus 3 a 5.</dd>
</dl>
<h4>O essencial</h4>
<p>A asma é uma doença <strong>inflamatória</strong> crônica das vias aéreas; o broncoespasmo é a consequência. Tratar só o broncoespasmo com <strong>salbutamol</strong> alivia o sintoma e deixa a inflamação crescer: quem usa três ou mais frascos de beta-agonista de curta ação por ano tem mais exacerbações graves e mais mortes. Por isso o GINA, desde 2019, <strong>não recomenda o salbutamol isolado em nenhum degrau</strong>, e todo asmático a partir dos 12 anos recebe corticoide inalatório, no mínimo junto com cada alívio.</p>
<p>A estratégia preferencial é o <strong>corticoide inalatório com formoterol</strong>: nos degraus 1 e 2, usado <strong>só quando necessário</strong>, o que reduz exacerbações graves em 60% em relação ao salbutamol com corticoide diário; no degrau 3, dose baixa diária mais o uso de alívio; no degrau 4, dose média diária mais alívio; no degrau 5, dose alta, com tiotrópio e encaminhamento para fenotipagem e biológicos (anti-IgE para a alérgica, anti-interleucina-5 ou 4/13 para a eosinofílica). A escolha do degrau se faz pela frequência dos sintomas: sintomas menos de duas vezes por mês ficam no degrau 1; duas ou mais vezes por mês, no 2; na maioria dos dias ou com despertares semanais, no 3 ou 4.</p>
<p>A avaliação do controle é feita a cada consulta pelas quatro perguntas das últimas 4 semanas e pelo risco futuro (exacerbações, uso excessivo de alívio, função pulmonar baixa, tabagismo). Antes de subir o degrau, verificam-se <strong>técnica inalatória, adesão, gatilhos e comorbidades</strong> (rinite, refluxo, obesidade, apneia), que explicam a maioria das asmas "difíceis".</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Rapaz com sintomas quase diários, dois cursos de prednisona em 6 meses e só salbutamol na mochila: troque o salbutamol por budesonida-formoterol, para usar nos sintomas e, nesse caso, diariamente também. Antes de pensar em biológico, veja a técnica, a adesão e o cigarro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Asma é inflamação; salbutamol isolado alivia e aumenta crises e mortes.</li>
<li>Corticoide inalatório com formoterol: sob demanda nos degraus 1 e 2, diário mais alívio nos degraus 3 a 5.</li>
<li>Degrau pela frequência dos sintomas; controle pelas quatro perguntas das 4 semanas.</li>
<li>Antes de subir o degrau: técnica, adesão, gatilhos, comorbidades.</li>
<li>Biológicos só na asma grave fenotipada, no degrau 5.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o salbutamol isolado deixou de ser recomendado? <details><summary>Resposta</summary>Porque trata só o broncoespasmo, deixa a inflamação progredir e se associa a mais exacerbações graves e mortes.</details></li>
<li>Como se usa a budesonida-formoterol nos degraus 1 e 2? <details><summary>Resposta</summary>Apenas quando necessário, como alívio, o que reduz exacerbações graves em comparação com o salbutamol.</details></li>
<li>O que verificar antes de aumentar o degrau de tratamento? <details><summary>Resposta</summary>Técnica inalatória, adesão, exposição a gatilhos e comorbidades como rinite, refluxo, obesidade e apneia do sono.</details></li>
</ol>
`,
"einstein2026#2": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a gota pela identificação do cristal e saber quando a clínica não basta.</li>
<li>Reconhecer as outras artropatias por cristais e seus cenários típicos.</li>
<li>Tratar a crise e reduzir o urato a longo prazo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Urato monossódico</dt>
<dd>Cristal da gota: em agulha, com birrefringência negativa à luz polarizada; padrão-ouro no líquido sinovial ou no tofo.</dd>
<dt>Pirofosfato de cálcio</dt>
<dd>Cristal romboide de birrefringência positiva fraca; causa pseudogota, condrocalcinose e a síndrome do dente coroado.</dd>
<dt>Hidroxiapatita</dt>
<dd>Cristal não visível à polarização; causa tendinite calcária e a artropatia destrutiva do ombro de Milwaukee.</dd>
</dl>
<h4>O essencial</h4>
<p>A gota é a artrite inflamatória mais comum em homens adultos: a hiperuricemia deposita urato nas articulações e a crise vem de madrugada, com dor intensa, rubor e edema, em geral no hálux (<strong>podagra</strong>), no tornozelo ou no joelho, após excesso alimentar, álcool, diurético ou cirurgia. A clínica é sugestiva, mas a podagra também ocorre na pseudogota, na artrite séptica, na artrite psoriásica, na celulite e no trauma, e o ácido úrico sérico pode estar normal durante a crise. Por isso o <strong>padrão-ouro</strong> é a <strong>artrocentese</strong> com identificação do cristal em agulha de birrefringência negativa, que ao mesmo tempo afasta infecção pela cultura.</p>
<p>As outras artropatias por cristais têm seus cenários. A <strong>doença por pirofosfato de cálcio</strong> acomete idosos, imita gota (pseudogota) nos joelhos e punhos, mostra condrocalcinose na radiografia e, na coluna cervical, calcifica o ligamento transverso do atlas: é a <strong>síndrome do dente coroado</strong>, com cervicalgia, rigidez e febre, diagnosticada pela tomografia. A <strong>hidroxiapatita</strong> causa periartrite calcária do ombro e, em idosas com rotura do manguito, o <strong>ombro de Milwaukee</strong>, artropatia destrutiva com derrame hemorrágico e cristais que só aparecem com coloração especial. A <strong>artropatia por oxalato</strong> é rara e acontece em renais crônicos em diálise ou com hiperoxalúria primária.</p>
<p>A crise de gota se trata com <strong>colchicina</strong> em dose baixa, anti-inflamatório ou corticoide (oral ou intra-articular), nas primeiras 24 horas. A terapia redutora de urato com <strong>alopurinol</strong> (ou febuxostate) é indicada após a segunda crise, com tofos, erosões ou nefrolitíase, iniciada em dose baixa e titulada até urato abaixo de 6 mg/dL, com profilaxia de crises por 3 a 6 meses.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dedão vermelho e insuportável às 4 da manhã é gota na maioria das vezes, mas "na maioria das vezes" não serve para quem pode ter uma articulação séptica. Puncione quando puder; o cristal em agulha com birrefringência negativa fecha o diagnóstico e a cultura afasta a infecção.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Gota: cristal de urato em agulha, birrefringência negativa; a clínica sugere, o cristal confirma.</li>
<li>Pseudogota e dente coroado: pirofosfato, idosos, condrocalcinose e tomografia cervical.</li>
<li>Ombro de Milwaukee: hidroxiapatita em idosas com rotura do manguito.</li>
<li>Oxalato: renais crônicos em diálise.</li>
<li>Crise: colchicina, anti-inflamatório ou corticoide; depois alopurinol com urato-alvo abaixo de 6.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a podagra não dispensa a artrocentese? <details><summary>Resposta</summary>Porque pseudogota, artrite séptica, artrite psoriásica e celulite imitam o quadro, e só o cristal e a cultura distinguem.</details></li>
<li>O que é a síndrome do dente coroado? <details><summary>Resposta</summary>Calcificação por pirofosfato de cálcio do ligamento transverso do atlas, com cervicalgia e rigidez, vista na tomografia.</details></li>
<li>Qual é o alvo da terapia redutora de urato? <details><summary>Resposta</summary>Urato sérico abaixo de 6 mg/dL, com alopurinol titulado e profilaxia de crises nos primeiros meses.</details></li>
</ol>
`,
"einstein2026#6": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Confirmar a hipertensão pela monitorização ambulatorial e classificar o risco.</li>
<li>Começar o tratamento com dois fármacos combinados na maioria dos hipertensos.</li>
<li>Escolher as classes certas para o diabético com albuminúria.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Monitorização ambulatorial de 24 horas</dt>
<dd>Hipertensão confirmada com média de 24 horas de 130 por 80 ou mais; afasta o avental branco e detecta a mascarada.</dd>
<dt>Albuminúria</dt>
<dd>Relação albumina/creatinina urinária de 30 mg/g ou mais; marca lesão renal e eleva o risco cardiovascular.</dd>
<dt>Bloqueio do sistema renina-angiotensina</dt>
<dd>Inibidor da ECA ou bloqueador do receptor de angiotensina; reduz a pressão intraglomerular e a albuminúria.</dd>
</dl>
<h4>O essencial</h4>
<p>A hipertensão se confirma com medidas fora do consultório sempre que possível: a <strong>monitorização ambulatorial de 24 horas</strong> ou a residencial separam o avental branco (alta só no consultório) da mascarada (normal no consultório, alta fora), e a média de 24 horas de 130 por 80 ou mais fecha o diagnóstico. Diabetes com albuminúria coloca o paciente no risco alto, com <strong>meta abaixo de 130 por 80</strong>.</p>
<p>A monoterapia leva à meta menos de um terço dos pacientes, e cada troca ou adição adia o controle por meses. Por isso as diretrizes brasileira, europeia e americana recomendam <strong>iniciar com dois fármacos</strong> de classes diferentes, de preferência em comprimido único e em doses baixas, em quase todos os hipertensos. As combinações preferidas unem um bloqueador do sistema renina-angiotensina a um <strong>bloqueador de canal de cálcio</strong> ou a um <strong>diurético tiazídico</strong>; o terceiro passo é a tríplice, e a espironolactona é o quarto fármaco. Betabloqueador fica para indicações específicas: coronariopatia, insuficiência cardíaca, arritmia, gestação.</p>
<p>No <strong>diabético com albuminúria</strong>, um dos dois fármacos precisa ser o inibidor da ECA ou o bloqueador do receptor de angiotensina, que dilata a arteríola eferente, reduz a pressão no glomérulo e freia a progressão da nefropatia; os dois nunca se combinam entre si. O parceiro é o bloqueador de cálcio, neutro no metabolismo, ou o tiazídico, com atenção à glicemia e ao potássio. Mudanças no estilo de vida acompanham o fármaco desde o início, mas não o substituem quando a hipertensão está confirmada em paciente de alto risco.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabético com média de 150 por 92 nas 24 horas e albumina na urina: dois remédios no primeiro dia, e um deles é o inibidor da ECA. Anlodipino é o parceiro mais simples. Betabloqueador sozinho ou tiazídico sozinho não protegem o rim, e esperar a dieta funcionar deixa o glomérulo sob pressão por mais meses.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Confirmar com monitorização ambulatorial ou residencial; 130 por 80 nas 24 horas.</li>
<li>Diabetes com albuminúria: risco alto, meta abaixo de 130 por 80.</li>
<li>Iniciar com dois fármacos combinados, de preferência em um só comprimido.</li>
<li>Diabético com albuminúria: inibidor da ECA ou bloqueador de angiotensina mais bloqueador de cálcio ou tiazídico.</li>
<li>Betabloqueador só com indicação específica; estilo de vida acompanha, não substitui.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que começar com dois fármacos? <details><summary>Resposta</summary>Porque a monoterapia raramente alcança a meta, e a combinação inicial controla mais rápido e com melhor adesão.</details></li>
<li>Qual classe é obrigatória no diabético com albuminúria? <details><summary>Resposta</summary>O bloqueio do sistema renina-angiotensina, inibidor da ECA ou bloqueador do receptor de angiotensina, pela proteção renal.</details></li>
<li>Quando o betabloqueador é escolha inicial na hipertensão? <details><summary>Resposta</summary>Com indicação específica: coronariopatia, insuficiência cardíaca, controle de arritmia ou gestação.</details></li>
</ol>
`,
"einstein2026#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer no eletrocardiograma os bloqueios atrioventriculares de 2º grau Mobitz I e Mobitz II.</li>
<li>Entender a diferença de local, de prognóstico e de conduta entre eles.</li>
<li>Saber o que fazer diante do bloqueio 2:1 e do bloqueio total.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Mobitz I (Wenckebach)</dt>
<dd>Prolongamento progressivo do PR até uma P bloqueada; o PR após a pausa é o mais curto. Bloqueio no nó atrioventricular.</dd>
<dt>Mobitz II</dt>
<dd>PR constante com ondas P bloqueadas de forma súbita; bloqueio infranodal, no feixe de His ou nos ramos.</dd>
<dt>Bloqueio 2:1</dt>
<dd>Uma de cada duas ondas P conduz; não permite ver o comportamento do PR e não se classifica só pelo ECG.</dd>
<dt>Bloqueio atrioventricular total</dt>
<dd>Nenhuma P conduz; ritmo de escape juncional (QRS estreito, 40 a 60) ou ventricular (QRS largo, abaixo de 40).</dd>
</dl>
<h4>O essencial</h4>
<p>O bloqueio de 1º grau é só o PR prolongado acima de 200 ms, com todas as P conduzindo. No <strong>2º grau</strong>, algumas P não conduzem, e há dois padrões com significados opostos. No <strong>Mobitz I</strong>, o nó atrioventricular se cansa a cada batimento: o <strong>PR se alonga progressivamente</strong>, até que uma P fica sem QRS; depois da pausa, o nó descansou e o PR volta a ser o mais curto do ciclo. A consequência prática é que o PR do batimento <strong>antes</strong> da P bloqueada é sempre maior que o PR do batimento <strong>depois</strong> dela, a regra que permite reconhecer o Wenckebach mesmo quando a variação é sutil. É benigno e quase nunca exige marca-passo.</p>
<p>No <strong>Mobitz II</strong>, o problema está abaixo do nó, no sistema His-Purkinje: o <strong>PR é fixo</strong> e, de repente, uma P não conduz, sem aviso. O QRS costuma ser largo, porque os ramos estão doentes. É um bloqueio instável, que não responde à atropina, pode piorar com exercício e evolui sem aviso para bloqueio total com escape lento ou assistolia; por isso indica <strong>marca-passo definitivo</strong> mesmo sem sintomas.</p>
<p>No <strong>bloqueio 2:1</strong> só há um PR por ciclo, e o eletrocardiograma de repouso não diz se é nodal ou infranodal. Pistas: QRS estreito e PR longo apontam para o nó; QRS largo e PR normal apontam para o His-Purkinje. A resposta à atropina, ao exercício ou à massagem do seio carotídeo e, se preciso, o estudo eletrofisiológico resolvem. No bloqueio total e no Mobitz II sintomáticos ou instáveis, a conduta aguda é atropina (pouco útil no infranodal), marca-passo transcutâneo ou transvenoso, e dopamina ou adrenalina como ponte.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante de uma P que não conduz, meça o PR de antes e o de depois: se o de antes é maior, é Wenckebach e o paciente vai para casa. Se os PR são idênticos e o QRS é largo, é Mobitz II, e ele fica monitorizado com o marca-passo transcutâneo colado até o definitivo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mobitz I: PR cresce até a P bloqueada; PR antes da pausa maior que o PR depois; nodal e benigno.</li>
<li>Mobitz II: PR fixo, P bloqueada súbita, QRS largo; infranodal, risco de bloqueio total, marca-passo.</li>
<li>Bloqueio 2:1 não se classifica só pelo ECG; QRS e resposta à atropina ajudam.</li>
<li>Bloqueio total: escape juncional ou ventricular; marca-passo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a regra prática para reconhecer o Wenckebach? <details><summary>Resposta</summary>O PR do batimento anterior à P bloqueada é maior que o PR do primeiro batimento conduzido após a pausa.</details></li>
<li>Por que o Mobitz II indica marca-passo mesmo sem sintomas? <details><summary>Resposta</summary>Porque o bloqueio é infranodal e instável, com risco de evoluir sem aviso para bloqueio total com escape lento ou assistolia.</details></li>
<li>Como se investiga o bloqueio 2:1? <details><summary>Resposta</summary>Pela largura do QRS, pela duração do PR e pela resposta à atropina, ao exercício ou ao estudo eletrofisiológico.</details></li>
</ol>
`,
"einstein2026#8": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estimar a probabilidade pré-teste de embolia pulmonar com Wells ou Genebra.</li>
<li>Escolher dímero-D ou angiotomografia conforme a probabilidade.</li>
<li>Decidir quando a anticoagulação começa antes da confirmação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Escore de Wells</dt>
<dd>Sinais de trombose venosa, embolia como hipótese principal, frequência acima de 100, imobilização ou cirurgia, trombose prévia, hemoptise e câncer; abaixo de 2 baixa, 2 a 6 intermediária, acima de 6 alta.</dd>
<dt>PERC</dt>
<dd>Oito critérios que, todos ausentes em paciente de baixa probabilidade, dispensam o dímero-D.</dd>
<dt>Dímero-D</dt>
<dd>Produto da fibrinólise; sensível, pouco específico; negativo afasta embolia só nas probabilidades baixa e intermediária.</dd>
<dt>Angiotomografia de artérias pulmonares</dt>
<dd>Exame confirmatório; falha de enchimento nas artérias pulmonares.</dd>
</dl>
<h4>O essencial</h4>
<p>Dispneia súbita, dor pleurítica, taquicardia e hipoxemia sem outra explicação levantam a hipótese de embolia pulmonar, mas o caminho diagnóstico começa pela <strong>probabilidade pré-teste</strong>, porque ela decide o valor de cada exame. Com o escore de Wells ou de Genebra, o paciente cai em baixa, intermediária ou alta probabilidade. Na <strong>baixa</strong>, aplica-se o <strong>PERC</strong>: se nenhum dos oito critérios está presente (idade abaixo de 50, frequência abaixo de 100, saturação de 95% ou mais, sem hemoptise, sem estrogênio, sem cirurgia recente, sem trombose prévia, sem edema unilateral), a embolia está afastada sem exame; se algum está presente, pede-se o <strong>dímero-D</strong>, e o valor negativo encerra a investigação.</p>
<p>Na <strong>intermediária</strong>, pede-se o dímero-D; negativo afasta, positivo leva à angiotomografia. Na <strong>alta</strong>, o dímero-D não é pedido, porque um resultado negativo não teria força para afastar; vai-se direto à <strong>angiotomografia</strong>. A anticoagulação empírica segue a mesma lógica de risco: na probabilidade baixa, espera-se o resultado; na <strong>intermediária e na alta</strong>, inicia-se <strong>enoxaparina 1 mg/kg a cada 12 horas</strong> enquanto o exame não sai, porque a mortalidade da embolia não tratada em poucas horas supera o risco de sangrar com uma ou duas doses.</p>
<p>Confirmada, estratifica-se a gravidade: instabilidade hemodinâmica define a embolia de alto risco, que recebe trombólise; disfunção do ventrículo direito e troponina elevada marcam o risco intermediário, monitorizado; o restante é de baixo risco e pode ser tratado em casa com anticoagulante direto (rivaroxabana ou apixabana) por pelo menos 3 meses, ou indefinidamente quando a causa não foi transitória.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de pedir dímero-D ou tomografia, some o Wells. Pontuação intermediária: dímero-D e já a enoxaparina no braço enquanto ele não sai. Pontuação alta: tomografia direto, e a heparina também. Pontuação baixa com PERC limpo: nem dímero-D.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Probabilidade pré-teste primeiro: Wells ou Genebra.</li>
<li>Baixa: PERC e, se preciso, dímero-D; sem anticoagular antes do resultado.</li>
<li>Intermediária: dímero-D e anticoagulação empírica enquanto se aguarda.</li>
<li>Alta: angiotomografia direta, sem dímero-D, já anticoagulando.</li>
<li>Enoxaparina 1 mg/kg a cada 12 horas; trombólise só no alto risco com instabilidade.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o dímero-D não é pedido na alta probabilidade? <details><summary>Resposta</summary>Porque um resultado negativo não reduz a probabilidade o suficiente para afastar a embolia; a angiotomografia é feita diretamente.</details></li>
<li>Em que probabilidade começa a anticoagulação empírica? <details><summary>Resposta</summary>Na intermediária e na alta, antes do resultado do exame confirmatório.</details></li>
<li>A quem se aplica o PERC? <details><summary>Resposta</summary>Apenas ao paciente de baixa probabilidade pré-teste; com os oito critérios ausentes, dispensa o dímero-D.</details></li>
</ol>
`,
"einstein2026#10": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Separar cistite de pielonefrite e definir a pielonefrite não complicada.</li>
<li>Decidir entre tratamento ambulatorial e internação.</li>
<li>Escolher o antibiótico certo para cada nível do trato urinário.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pielonefrite não complicada</dt>
<dd>Infecção renal em mulher não gestante, sem anormalidade urológica, sem imunossupressão, hemodinamicamente estável e que tolera via oral.</dd>
<dt>Pielonefrite complicada</dt>
<dd>Gestação, homem, obstrução, cateter, diabetes descompensado, imunossupressão, sepse ou falha após 72 horas; exige internação e imagem.</dd>
<dt>Nitrofurantoína e fosfomicina</dt>
<dd>Antibióticos de cistite: concentram-se na urina, não no parênquima renal nem no sangue.</dd>
<dt>Dose parenteral inicial</dt>
<dd>Ceftriaxona 1 g intravenosa ou intramuscular antes da alta, para cobrir a janela até a cultura.</dd>
</dl>
<h4>O essencial</h4>
<p>A cistite fica na bexiga: disúria, polaciúria, urgência e dor suprapúbica, sem febre. A <strong>pielonefrite</strong> acrescenta <strong>febre, calafrios, náuseas, dor lombar e punho-percussão positiva</strong>, com leucocitose e, muitas vezes, cilindros leucocitários. O exame de urina com leucocitúria e nitrito positivo apoia, e a <strong>urocultura</strong> é obrigatória na pielonefrite, colhida antes do antibiótico, porque a resistência da <em>Escherichia coli</em> às quinolonas e ao sulfametoxazol-trimetoprima já passa de 20% em muitas regiões do Brasil.</p>
<p>A mulher jovem, estável, sem vômitos, sem gestação e sem alteração urológica tem pielonefrite <strong>não complicada</strong> e pode ser tratada <strong>em casa</strong>. O esquema recomendado é uma <strong>dose parenteral inicial</strong> de antibiótico de longa ação, em geral <strong>ceftriaxona 1 g</strong>, seguida de <strong>fluoroquinolona oral</strong> (ciprofloxacino 500 mg a cada 12 horas por 7 dias ou levofloxacino 750 mg por 5 dias), com reavaliação em 48 a 72 horas e ajuste pela cultura. <strong>Nitrofurantoína e fosfomicina não tratam pielonefrite</strong>, porque não atingem concentração no rim, e o sulfametoxazol-trimetoprima só vale com cultura sensível.</p>
<p>A <strong>internação</strong> é para a pielonefrite complicada: instabilidade, vômitos que impedem a via oral, gestação, obstrução, homem, imunossupressão, diabetes descompensado e falha em 72 horas. Nesses casos, ceftriaxona ou piperacilina-tazobactam intravenosos, e a <strong>ultrassonografia ou tomografia</strong> para procurar obstrução, abscesso ou cálculo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Moça com febre, dor lombar e urina com nitrito, mas pressão boa e sem vômito: colha a cultura, aplique a ceftriaxona e mande para casa com ciprofloxacino e retorno em 48 horas. Nitrofurantoína seria tratar o rim com um remédio que só chega à bexiga; internar e fazer ultrassom é para quem vomita, está grávida ou não melhora.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre, dor lombar e punho-percussão separam pielonefrite de cistite; urocultura antes do antibiótico.</li>
<li>Jovem estável, sem vômitos e sem gestação: tratamento ambulatorial.</li>
<li>Ceftriaxona 1 g inicial e alta com ciprofloxacino 7 dias ou levofloxacino 5 dias.</li>
<li>Nitrofurantoína e fosfomicina são de cistite; sulfametoxazol só com cultura sensível.</li>
<li>Internar e fazer imagem na complicada: instabilidade, vômitos, gestação, obstrução, falha em 72 horas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a nitrofurantoína não serve para pielonefrite? <details><summary>Resposta</summary>Porque se concentra apenas na urina e não atinge níveis terapêuticos no parênquima renal nem no sangue.</details></li>
<li>Qual é o papel da dose parenteral inicial? <details><summary>Resposta</summary>Garantir cobertura eficaz nas primeiras 24 horas, até a cultura, em cenários de resistência às quinolonas.</details></li>
<li>O que define a pielonefrite complicada? <details><summary>Resposta</summary>Gestação, homem, obstrução ou cateter, imunossupressão, diabetes descompensado, sepse ou falha após 72 horas.</details></li>
</ol>
`,
"einstein2026#11": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o diabetes insípido central no pós-operatório de hipófise.</li>
<li>Diferenciar o diabetes insípido central do nefrogênico e da polidipsia primária.</li>
<li>Tratar com desmopressina e vigiar a resposta trifásica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Diabetes insípido central</dt>
<dd>Deficiência de hormônio antidiurético por lesão da neuro-hipófise ou da haste; poliúria diluída e hipernatremia.</dd>
<dt>Diabetes insípido nefrogênico</dt>
<dd>Rim que não responde ao hormônio: lítio, hipercalemia, hipercalcemia, doença tubular; não responde à desmopressina.</dd>
<dt>Desmopressina</dt>
<dd>Análogo do hormônio antidiurético, nasal, oral ou subcutâneo; corrige a poliúria do central.</dd>
<dt>Resposta trifásica</dt>
<dd>Após cirurgia hipofisária: poliúria nos primeiros dias, fase de secreção inapropriada com hiponatremia, e diabetes insípido definitivo ou recuperação.</dd>
</dl>
<h4>O essencial</h4>
<p>A neuro-hipófise armazena o hormônio antidiurético produzido no hipotálamo; a manipulação da haste na <strong>cirurgia transesfenoidal</strong> interrompe a secreção em até 20% dos pacientes, em geral de forma transitória. Sem o hormônio, o túbulo coletor não reabsorve água: <strong>poliúria</strong> acima de 3 litros por dia, <strong>urina diluída</strong> (densidade abaixo de 1.005, osmolaridade abaixo de 300 mOsm/kg) e <strong>sede intensa</strong>. Sem acesso à água, o <strong>sódio sobe</strong>. O diagnóstico no pós-operatório é clínico e laboratorial: poliúria com urina hipotônica e sódio ou osmolaridade sérica em elevação.</p>
<p>Fora do pós-operatório, a investigação da poliúria começa por afastar diurese osmótica (glicosúria) e separar as três causas de poliúria hipotônica: o <strong>central</strong>, o <strong>nefrogênico</strong> e a <strong>polidipsia primária</strong>. O teste de restrição hídrica mostra urina que não concentra nos dois diabetes insípidos e que concentra na polidipsia; a <strong>desmopressina</strong> depois do teste concentra a urina no central (mais de 50%) e não no nefrogênico.</p>
<p>O tratamento do central é a <strong>desmopressina</strong>, com água livre para corrigir a hipernatremia devagar (até 10 mEq/L por dia na forma crônica) e balanço hídrico rigoroso. No pós-operatório, a dose é dada conforme a diurese, porque a fase 2 da <strong>resposta trifásica</strong>, entre o quinto e o décimo dia, libera o hormônio armazenado nos axônios lesados e produz hiponatremia por secreção inapropriada; a desmopressina mantida nessa fase a agrava.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Segundo dia após a retirada de um adenoma hipofisário, 400 mL de urina por hora, clara como água, e sódio de 153: é o diabetes insípido central. Desmopressina e água, com sódio a cada 6 horas. Na semana seguinte, se o sódio despencar, não é a desmopressina que falta, é a fase 2 que chegou.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pós-operatório de hipófise: poliúria diluída com sódio subindo é diabetes insípido central.</li>
<li>Osmolaridade urinária abaixo de 300 e densidade abaixo de 1.005 confirmam a urina hipotônica.</li>
<li>Central responde à desmopressina; nefrogênico não; polidipsia concentra com restrição.</li>
<li>Desmopressina e água livre; corrigir o sódio devagar na forma crônica.</li>
<li>Resposta trifásica: vigiar hiponatremia entre o 5º e o 10º dia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais dados confirmam o diabetes insípido no pós-operatório? <details><summary>Resposta</summary>Poliúria acima de 200 a 250 mL por hora, urina com osmolaridade abaixo de 300 ou densidade abaixo de 1.005, e sódio ou osmolaridade sérica em elevação.</details></li>
<li>Como se distingue o central do nefrogênico? <details><summary>Resposta</summary>Pela resposta à desmopressina: a urina concentra no central e não no nefrogênico.</details></li>
<li>Por que o tiazídico trata o diabetes insípido nefrogênico? <details><summary>Resposta</summary>Porque a depleção leve de volume aumenta a reabsorção proximal de sódio e água, reduzindo o volume que chega ao coletor e a poliúria.</details></li>
</ol>
`,
"einstein2026#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender a cetoacidose euglicêmica associada aos inibidores de SGLT2.</li>
<li>Saber quando suspender e quando retomar cada antidiabético no perioperatório.</li>
<li>Conduzir a glicemia do diabético internado para cirurgia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cetoacidose euglicêmica</dt>
<dd>Cetoacidose com glicemia abaixo de 250 mg/dL; a glicosúria do inibidor de SGLT2 mantém a glicemia baixa enquanto os cetoácidos sobem.</dd>
<dt>Inibidores de SGLT2</dt>
<dd>Dapagliflozina, empagliflozina, canagliflozina; suspensos 3 dias antes de cirurgia eletiva (4 dias a ertugliflozina).</dd>
<dt>Metformina</dt>
<dd>Suspensa no dia da cirurgia ou 48 horas antes se houver contraste ou risco de hipoperfusão, pela acidose láctica.</dd>
<dt>Meta glicêmica hospitalar</dt>
<dd>140 a 180 mg/dL, com insulina basal e correções; evitar hipoglicemia abaixo de 70.</dd>
</dl>
<h4>O essencial</h4>
<p>Os inibidores de SGLT2 eliminam glicose pela urina e reduzem a secreção de insulina, elevando o glucagon e a produção de cetoácidos. Em condições normais isso é inofensivo, mas quando se somam <strong>jejum prolongado, cirurgia, infecção, desidratação ou redução da insulina</strong>, a cetogênese dispara e surge a <strong>cetoacidose euglicêmica</strong>: pH baixo, bicarbonato baixo, cetonas altas e uma glicemia enganosamente normal ou pouco elevada, que atrasa o diagnóstico porque ninguém pensa em cetoacidose com glicemia de 180.</p>
<p>Por isso as sociedades de diabetes e as agências reguladoras recomendam <strong>suspender o inibidor de SGLT2 pelo menos 3 dias antes</strong> de uma cirurgia eletiva (4 dias para a ertugliflozina), e só retomá-lo quando o paciente estiver se alimentando normalmente, hidratado e sem sinais de cetose. Parar apenas no dia da cirurgia não basta, porque o efeito glicosúrico persiste por dias.</p>
<p>Os demais fármacos têm regras próprias: a <strong>metformina</strong> para no dia da cirurgia (antes, se houver contraste ou instabilidade), as sulfonilureias param no dia pela hipoglicemia em jejum, os agonistas do GLP-1 semanais são suspensos uma semana antes pelo retardo do esvaziamento gástrico e risco de aspiração, e os inibidores de DPP-4 podem ser mantidos. A <strong>insulina</strong> não é contraindicada: a basal é mantida com redução de 20 a 25% na noite anterior, e o controle no hospital se faz com basal e correções, com meta de 140 a 180 mg/dL. A insulina não causa cetoacidose; ela a previne e a trata.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabético em dapagliflozina com cirurgia de quadril marcada para a próxima semana: a dapagliflozina para hoje, 3 dias antes, e a metformina na manhã da cirurgia. Se ele chegar ao pós-operatório enjoado e respirando rápido com glicemia de 170, peça cetonas antes de atribuir tudo à anestesia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Inibidor de SGLT2 mais jejum ou estresse cirúrgico: cetoacidose com glicemia quase normal.</li>
<li>Suspender 3 dias antes da cirurgia eletiva (4 dias a ertugliflozina); retomar com alimentação normal.</li>
<li>Metformina no dia; sulfonilureia no dia; agonista do GLP-1 semanal uma semana antes.</li>
<li>Insulina basal mantida com redução; meta hospitalar de 140 a 180 mg/dL.</li>
<li>Cetonemia no pós-operatório de quem não suspendeu a tempo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a cetoacidose do inibidor de SGLT2 é euglicêmica? <details><summary>Resposta</summary>Porque a glicosúria mantém a glicemia baixa enquanto a falta relativa de insulina e o glucagon elevado produzem cetoácidos.</details></li>
<li>Qual é o prazo de suspensão antes da cirurgia eletiva? <details><summary>Resposta</summary>Pelo menos 3 dias para dapagliflozina, empagliflozina e canagliflozina, e 4 dias para a ertugliflozina.</details></li>
<li>A insulina aumenta o risco de cetoacidose no perioperatório? <details><summary>Resposta</summary>Não; a insulina previne e trata a cetoacidose, e a basal é mantida com redução de dose.</details></li>
</ol>
`,
"einstein2025#1": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o perfil de efeitos dos agonistas do receptor de GLP-1 além da glicemia.</li>
<li>Saber quem se beneficia e quais são as contraindicações.</li>
<li>Posicionar a classe no diabético com doença aterosclerótica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Agonistas do receptor de GLP-1</dt>
<dd>Liraglutida diária, semaglutida e dulaglutida semanais; imitam a incretina intestinal.</dd>
<dt>Secreção dependente da glicose</dt>
<dd>Estimulam insulina só quando a glicemia está alta; por isso quase não causam hipoglicemia.</dd>
<dt>Benefício cardiovascular</dt>
<dd>Redução de 12 a 26% de infarto, acidente vascular e morte cardiovascular nos estudos LEADER, SUSTAIN-6 e REWIND.</dd>
<dt>Efeitos gastrointestinais</dt>
<dd>Náusea, vômito e diarreia no início, reduzidos pela titulação lenta.</dd>
</dl>
<h4>O essencial</h4>
<p>O GLP-1 é um hormônio intestinal liberado após a refeição que estimula a insulina, inibe o glucagon, retarda o esvaziamento gástrico e reduz o apetite no hipotálamo. Os agonistas do receptor reproduzem esses efeitos em dose farmacológica: baixam a hemoglobina glicada em 1 a 1,5 ponto, reduzem o peso em 5 a 15%, e, nos estudos de desfecho, diminuem os eventos ateroscleróticos no diabético de alto risco, com proteção renal pela redução da albuminúria. A <strong>pressão arterial sistólica cai de 2 a 4 mmHg</strong>, por natriurese, perda de peso e efeito vascular, enquanto a <strong>frequência cardíaca sobe</strong> de 2 a 4 batimentos; o HDL quase não muda.</p>
<p>Como a secreção de insulina é dependente da glicose, a <strong>hipoglicemia é rara</strong> em monoterapia ou com metformina e inibidor de SGLT2; ela só aparece quando há sulfonilureia ou insulina, cujas doses devem ser reduzidas. Os efeitos adversos são sobretudo gastrointestinais e transitórios; pancreatite e doença biliar são raras. A classe é contraindicada na história pessoal ou familiar de carcinoma medular de tireoide e na neoplasia endócrina múltipla tipo 2, e é suspensa uma semana antes de cirurgia pelo risco de aspiração. Não há ajuste pela função renal, mas o uso não é recomendado com filtração abaixo de 15 mL/min, faixa sem evidência.</p>
<p>No diabético com doença aterosclerótica já em metformina, inibidor de SGLT2, estatina e antiagregante, o agonista do GLP-1 é o fármaco que ainda reduz eventos, independentemente da glicada, e deve ser preferido à sulfonilureia e à insulina quando o controle não está na meta. A tirzepatida, agonista duplo de GIP e GLP-1, tem efeito ainda maior sobre a glicemia e o peso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Senhor com infarto prévio, em metformina e empagliflozina, com glicada acima da meta: a caneta de semaglutida semanal é a próxima prescrição. Avise que a pressão vai cair um pouco e o pulso subir um pouco, que o enjoo passa, e que o risco de açúcar baixo é mínimo enquanto não houver sulfonilureia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Glicada −1 a −1,5; peso −5 a −15%; pressão sistólica −2 a −4 mmHg; frequência +2 a +4.</li>
<li>Reduzem infarto, acidente vascular e morte cardiovascular; protegem o rim.</li>
<li>Hipoglicemia rara; só com sulfonilureia ou insulina.</li>
<li>Contraindicados no carcinoma medular de tireoide e na neoplasia endócrina múltipla 2.</li>
<li>Sem evidência com filtração abaixo de 15 mL/min.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que os agonistas do GLP-1 quase não causam hipoglicemia? <details><summary>Resposta</summary>Porque estimulam a insulina de forma dependente da glicose, só quando a glicemia está elevada.</details></li>
<li>Qual é o efeito esperado sobre a pressão e a frequência? <details><summary>Resposta</summary>Queda discreta da pressão sistólica, de 2 a 4 mmHg, e aumento discreto da frequência cardíaca.</details></li>
<li>Quais são as contraindicações principais? <details><summary>Resposta</summary>História pessoal ou familiar de carcinoma medular de tireoide e neoplasia endócrina múltipla tipo 2.</details></li>
</ol>
`,
"einstein2025#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Decidir entre controle de frequência e de ritmo na fibrilação atrial estável.</li>
<li>Escolher o fármaco de controle de frequência pelas comorbidades.</li>
<li>Aplicar a regra das 48 horas antes de qualquer reversão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Controle de frequência</dt>
<dd>Reduzir a resposta ventricular abaixo de 110 em repouso; primeira estratégia no paciente estável.</dd>
<dt>Bloqueadores de cálcio não di-hidropiridínicos</dt>
<dd>Verapamil e diltiazem; reduzem a condução no nó atrioventricular sem broncoespasmo; evitados na fração de ejeção reduzida.</dd>
<dt>Regra das 48 horas</dt>
<dd>Fibrilação com mais de 48 horas ou duração desconhecida só é revertida após 3 semanas de anticoagulação ou ecocardiograma transesofágico sem trombo.</dd>
<dt>CHA2DS2-VASc</dt>
<dd>Escore que define a anticoagulação de longo prazo; 2 ou mais em homens, 3 ou mais em mulheres.</dd>
</dl>
<h4>O essencial</h4>
<p>Na fibrilação atrial, a primeira pergunta é <strong>estável ou instável</strong>. Hipotensão, dor torácica isquêmica, congestão aguda ou rebaixamento indicam cardioversão elétrica imediata. No paciente <strong>estável</strong>, mesmo com frequência de 140, a prioridade é <strong>controlar a frequência</strong>, aliviar os sintomas e decidir a anticoagulação; a reversão ao ritmo sinusal é uma escolha posterior, sobretudo em jovens sintomáticos, e segue a regra das 48 horas.</p>
<p>O <strong>betabloqueador</strong> é a primeira escolha de controle de frequência na maioria, mas é contraindicado no <strong>broncoespasmo</strong> e mal tolerado na hipotensão. O <strong>verapamil</strong> ou o <strong>diltiazem</strong> são a escolha no asmático e no portador de DPOC com função ventricular preservada; na fração de ejeção reduzida, eles são evitados pelo efeito inotrópico negativo, e a opção é a digoxina ou a amiodarona. O esmolol, apesar de curto e cardiosseletivo, continua sendo um betabloqueador e repete o broncoespasmo. A meta inicial é uma frequência abaixo de 110 em repouso.</p>
<p>A <strong>reversão</strong>, elétrica ou com propafenona, flecainida ou amiodarona, só é segura nas primeiras 48 horas; depois disso, o átrio pode ter formado trombo, e cardioverter sem anticoagulação prévia de 3 semanas ou sem ecocardiograma transesofágico arrisca embolia. Após qualquer reversão, anticoagula-se por pelo menos 4 semanas. A anticoagulação definitiva depende do CHA2DS2-VASc, com anticoagulante direto, e a ablação por cateter é a opção para quem permanece sintomático.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem asmático com fibrilação há 3 dias, estável, que broncoespasmou com metoprolol: verapamil intravenoso, não esmolol. Choque e antiarrítmico ficam para depois das 3 semanas de anticoagulação ou do ecocardiograma transesofágico, porque 3 dias já passaram da janela segura.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Estável: controle de frequência primeiro; instável: cardioversão.</li>
<li>Betabloqueador é a primeira escolha; no asmático, verapamil ou diltiazem.</li>
<li>Fração reduzida: evitar verapamil e diltiazem; usar digoxina ou amiodarona.</li>
<li>Mais de 48 horas: anticoagular 3 semanas ou ecocardiograma transesofágico antes de reverter.</li>
<li>Anticoagulação definitiva pelo CHA2DS2-VASc.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o esmolol não resolve o problema do asmático? <details><summary>Resposta</summary>Porque é um betabloqueador, ainda que curto e cardiosseletivo, e reproduz o broncoespasmo.</details></li>
<li>Quando o verapamil é evitado? <details><summary>Resposta</summary>Na fração de ejeção reduzida e na hipotensão, pelo efeito inotrópico negativo.</details></li>
<li>O que precede a reversão de uma fibrilação de 3 dias? <details><summary>Resposta</summary>Três semanas de anticoagulação ou um ecocardiograma transesofágico sem trombo no apêndice atrial.</details></li>
</ol>
`,
"einstein2025#6": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o infarto com supra de ST e a urgência da reperfusão.</li>
<li>Escolher entre angioplastia primária e fibrinólise pelo tempo e pela disponibilidade.</li>
<li>Saber o que se faz com a lesão culpada e com as demais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Infarto com supra de ST</dt>
<dd>Oclusão total de uma coronária; supradesnivelamento de ST em duas derivações contíguas (1 mm, ou 2 mm em V2-V3 no homem).</dd>
<dt>Angioplastia primária</dt>
<dd>Reperfusão por cateter com balão e stent, em até 90 minutos do primeiro contato (120 se houver transferência).</dd>
<dt>Fibrinólise</dt>
<dd>Tenecteplase ou alteplase em até 30 minutos, quando a angioplastia não é possível em 120 minutos; seguida de cateterismo em 2 a 24 horas.</dd>
<dt>Lesão culpada</dt>
<dd>A estenose ou oclusão responsável pelo infarto; é a que recebe o stent no mesmo procedimento.</dd>
</dl>
<h4>O essencial</h4>
<p>Dor torácica típica com <strong>supra de ST</strong> no eletrocardiograma é oclusão coronariana até prova em contrário, e a troponina só confirma o que já se sabe; não se espera a curva para agir. O eletrocardiograma deve ser feito em 10 minutos e a reperfusão começa no momento do diagnóstico, porque o músculo morre de forma progressiva e cada 30 minutos de atraso aumenta a mortalidade.</p>
<p>A <strong>angioplastia primária</strong> é a reperfusão de escolha quando pode ser feita em até 90 a 120 minutos do primeiro contato médico: abre a artéria em mais de 90% dos casos, com menos reinfarto e menos sangramento cerebral que a fibrinólise. Quando o laboratório de hemodinâmica não está ao alcance nesse prazo, a <strong>fibrinólise</strong> em até 30 minutos é a escolha, seguida de transferência e cateterismo em 2 a 24 horas (estratégia farmacoinvasiva), ou imediato se falhar. No cateterismo, a <strong>lesão culpada</strong> recebe balão e <strong>stent farmacológico</strong> no mesmo ato; lesões significativas em outras artérias são tratadas antes da alta ou em semanas, salvo choque, em que se trata só a culpada.</p>
<p>A cirurgia de revascularização no infarto agudo é exceção: tronco de coronária esquerda, doença multiarterial não tratável por cateter, falha da angioplastia ou complicação mecânica (rotura de septo ou de músculo papilar). O tratamento clínico é complemento obrigatório, nunca substituto: dupla antiagregação (ácido acetilsalicílico com ticagrelor ou prasugrel), anticoagulação durante o procedimento, estatina de alta intensidade, betabloqueador e inibidor da ECA nas primeiras 24 horas se não houver contraindicação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Uma hora de dor e supra em V2 a V4: o paciente vai para a hemodinâmica, não para a observação. Se o cateterismo mostra uma única lesão de 99% na descendente anterior, o stent entra ali, naquele momento. Ponte de safena é para anatomia que o cateter não resolve.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Supra de ST é oclusão total; reperfusão imediata, sem esperar troponina.</li>
<li>Angioplastia primária em até 90 a 120 minutos; fibrinólise em 30 minutos se não for possível.</li>
<li>Lesão culpada recebe stent no mesmo procedimento; as demais, depois.</li>
<li>Cirurgia só para tronco, multiarterial complexa, falha ou complicação mecânica.</li>
<li>Dupla antiagregação, estatina, betabloqueador e inibidor da ECA completam.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o prazo para a angioplastia primária? <details><summary>Resposta</summary>Até 90 minutos do primeiro contato médico, ou 120 minutos quando há transferência entre hospitais.</details></li>
<li>O que fazer quando a angioplastia não é possível nesse prazo? <details><summary>Resposta</summary>Fibrinólise em até 30 minutos, seguida de cateterismo em 2 a 24 horas ou imediato se falhar.</details></li>
<li>Quando a cirurgia é preferida no infarto agudo? <details><summary>Resposta</summary>Lesão de tronco, doença multiarterial não tratável por cateter, falha da angioplastia ou complicação mecânica.</details></li>
</ol>
`,
"einstein2025#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir hipertensão resistente e excluir a pseudorresistência.</li>
<li>Investigar as causas secundárias que a explicam.</li>
<li>Conhecer a sequência farmacológica depois do terceiro fármaco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipertensão resistente</dt>
<dd>Pressão fora da meta com três fármacos de classes diferentes em dose otimizada, um deles diurético, ou controlada com quatro ou mais.</dd>
<dt>Pseudorresistência</dt>
<dd>Má adesão, técnica de medida errada, efeito do avental branco; afastada antes de rotular como resistente.</dd>
<dt>Hipertensão refratária</dt>
<dd>Não controlada com cinco ou mais fármacos, incluindo clortalidona e espironolactona.</dd>
<dt>Clortalidona</dt>
<dd>Tiazídico de meia-vida longa, mais potente que a hidroclorotiazida; o diurético preferido na resistente.</dd>
</dl>
<h4>O essencial</h4>
<p>Antes de chamar uma hipertensão de resistente, afasta-se a <strong>pseudorresistência</strong>: adesão confirmada (contagem, farmácia, dosagem urinária), medida correta com manguito adequado, e monitorização ambulatorial ou residencial para excluir o avental branco, responsável por um terço dos casos. Confirmada, a resistente atinge 10 a 15% dos hipertensos e tem risco cardiovascular muito maior.</p>
<p>A investigação de <strong>causas secundárias</strong> é obrigatória, porque elas são frequentes nesse grupo: <strong>apneia obstrutiva do sono</strong> (ronco, sonolência, obesidade; polissonografia), <strong>hiperaldosteronismo primário</strong> (presente em até 20% dos resistentes, mesmo com potássio normal; relação aldosterona/renina), <strong>doença renal crônica</strong> e <strong>estenose de artéria renal</strong> (creatinina, albuminúria, Doppler), feocromocitoma (metanefrinas), Cushing e coarctação. Tratar a causa, com CPAP, adrenalectomia ou angioplastia renal, é o que controla a pressão.</p>
<p>No tratamento, o diurético é trocado para <strong>clortalidona</strong> (ou indapamida), mais potente e de ação mais longa que a hidroclorotiazida; diurético de alça só com filtração abaixo de 30 mL/min. O <strong>quarto fármaco</strong> é a <strong>espironolactona</strong>, que no estudo PATHWAY-2 superou bisoprolol e doxazosina, com vigilância do potássio. Se ainda falha, somam-se, em ordem, o betabloqueador (bisoprolol) ou alfabloqueador, e o simpatolítico central (<strong>clonidina</strong>); hidralazina e minoxidil vêm por último. Suspender a espironolactona ou voltar à hidroclorotiazida é andar para trás.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cinco remédios tomados direito e a pressão em 150 por 95: pergunte sobre ronco, meça aldosterona e renina, olhe o rim. Enquanto isso, mantenha a clortalidona e a espironolactona e acrescente a clonidina. Trocar a clortalidona por hidroclorotiazida enfraquece o esquema que já não basta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Resistente: três fármacos otimizados com diurético e pressão fora da meta; afastar pseudorresistência.</li>
<li>Causas secundárias: apneia do sono, hiperaldosteronismo, doença renal, estenose renal, feocromocitoma.</li>
<li>Clortalidona no lugar da hidroclorotiazida; alça só com filtração abaixo de 30.</li>
<li>Quarto fármaco: espironolactona; depois betabloqueador ou alfabloqueador e clonidina.</li>
<li>Não retirar o que funciona; investigar antes de somar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que precisa ser afastado antes do diagnóstico de hipertensão resistente? <details><summary>Resposta</summary>Má adesão, técnica de medida inadequada e efeito do avental branco, com monitorização ambulatorial ou residencial.</details></li>
<li>Qual é o quarto fármaco com melhor evidência? <details><summary>Resposta</summary>A espironolactona, que no estudo PATHWAY-2 superou bisoprolol e doxazosina.</details></li>
<li>Por que a clortalidona é preferida à hidroclorotiazida? <details><summary>Resposta</summary>Por ser mais potente e ter meia-vida mais longa, com melhor controle nas 24 horas.</details></li>
</ol>
`,
"einstein2025#9": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estratificar a pneumonia comunitária e decidir o local de tratamento.</li>
<li>Escolher o esquema antibiótico da enfermaria e da terapia intensiva.</li>
<li>Saber como a suspeita de aspiração muda, ou não, o tratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>CURB-65</dt>
<dd>Confusão, ureia acima de 50 mg/dL, frequência respiratória de 30 ou mais, pressão abaixo de 90 por 60, idade de 65 ou mais; 2 pontos indicam internação.</dd>
<dt>Pneumonia aspirativa</dt>
<dd>Pneumonia em quem tem disfagia, rebaixamento ou refluxo, em geral nos segmentos posteriores e nas bases; flora oral mista.</dd>
<dt>Cobertura anaeróbia</dt>
<dd>Clindamicina ou amoxicilina-clavulanato; a diretriz de 2019 só a recomenda com abscesso ou empiema.</dd>
<dt>Pneumonia grave</dt>
<dd>Choque com vasopressor ou ventilação mecânica, ou três critérios menores; vai para a terapia intensiva.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante da pneumonia comunitária, a primeira decisão é <strong>onde tratar</strong>. O CURB-65 e a oxigenação respondem: 0 a 1 ponto com saturação acima de 92% permite o tratamento em casa; 2 pontos ou hipoxemia indicam enfermaria; choque, necessidade de ventilação ou três critérios menores (confusão, ureia alta, frequência de 30 ou mais, PaO2/FiO2 abaixo de 250, infiltrado multilobar, hipotensão, hipotermia, leucopenia, plaquetopenia) definem a pneumonia grave e a terapia intensiva.</p>
<p>O esquema da <strong>enfermaria</strong> é <strong>betalactâmico com macrolídeo</strong> (ceftriaxona ou ampicilina-sulbactam com azitromicina) ou quinolona respiratória isolada; na <strong>terapia intensiva</strong>, betalactâmico com macrolídeo ou com quinolona, e cobertura para MRSA ou <em>Pseudomonas</em> apenas com fatores de risco. O internado colhe hemoculturas, cultura de escarro, antígenos urinários de pneumococo e <em>Legionella</em> e painel viral, inclusive influenza, e recebe oseltamivir se positivo. Corticoide fica para a pneumonia grave com choque séptico; cateter de alto fluxo e ventilação não invasiva, para a insuficiência respiratória que o cateter nasal não resolve.</p>
<p>A <strong>aspiração</strong> é suspeitada pela disfagia, pela tosse ao comer e pela localização, e mudou de tratamento: a flora aspirada é a mesma da pneumonia comum, os anaeróbios têm papel menor que se pensava, e a diretriz ATS/IDSA de 2019 <strong>não recomenda cobertura anaeróbia de rotina</strong>, reservando-a ao abscesso e ao empiema. O que a aspiração acrescenta é a avaliação da deglutição pela fonoaudiologia, a dieta com consistência adaptada e a prevenção de novos episódios.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idosa que engasga ao comer e chega com pneumonia na base direita, ureia de 60 e saturação de 91%: enfermaria, oxigênio por cateter, ceftriaxona com azitromicina, culturas e antígenos urinários. A clindamicina não precisa entrar só por ser aspiração; a fonoaudiologia, sim.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>CURB-65 e saturação decidem o local; 2 pontos ou hipoxemia internam.</li>
<li>Enfermaria: betalactâmico com macrolídeo; terapia intensiva: o mesmo, com cobertura extra só com fatores de risco.</li>
<li>Internado: hemoculturas, escarro, antígenos urinários, painel viral.</li>
<li>Aspiração sem abscesso ou empiema: sem cobertura anaeróbia de rotina.</li>
<li>Corticoide e alto fluxo só na pneumonia grave.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais itens compõem o CURB-65? <details><summary>Resposta</summary>Confusão, ureia acima de 50 mg/dL, frequência respiratória de 30 ou mais, pressão abaixo de 90 por 60 e idade de 65 anos ou mais.</details></li>
<li>Quando a cobertura anaeróbia é indicada na pneumonia aspirativa? <details><summary>Resposta</summary>Apenas com abscesso pulmonar ou empiema, segundo a diretriz ATS/IDSA de 2019.</details></li>
<li>Que exames o paciente internado por pneumonia colhe? <details><summary>Resposta</summary>Hemoculturas, cultura de escarro, antígenos urinários de pneumococo e Legionella e painel viral com influenza.</details></li>
</ol>
`,
"einstein2025#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer as indicações e os cuidados da trombólise no acidente vascular isquêmico.</li>
<li>Reconhecer a transformação hemorrágica sintomática e conduzi-la.</li>
<li>Distinguir a hemorragia das outras causas de piora após o AVC.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Alteplase</dt>
<dd>0,9 mg/kg (máximo 90 mg) em até 4,5 horas do início dos sintomas, após tomografia sem sangue; a tenecteplase é a opção em bolus.</dd>
<dt>Transformação hemorrágica sintomática</dt>
<dd>Sangramento no parênquima infartado com piora de 4 pontos ou mais no NIHSS; ocorre em cerca de 6% dos trombolisados, nas primeiras 24 a 36 horas.</dd>
<dt>Controle pressórico</dt>
<dd>Abaixo de 185 por 110 antes da infusão e abaixo de 180 por 105 nas 24 horas seguintes.</dd>
</dl>
<h4>O essencial</h4>
<p>No acidente vascular isquêmico, a <strong>trombólise</strong> com alteplase em até 4,5 horas reduz a incapacidade, e a <strong>trombectomia</strong> se soma na oclusão de grande artéria. As contraindicações incluem hemorragia na tomografia, cirurgia ou sangramento recentes, anticoagulação plena, plaquetas abaixo de 100 mil, glicemia abaixo de 50 e pressão acima de 185 por 110 não controlada. Após a infusão, o paciente fica em unidade de AVC, sem antitrombóticos por 24 horas, com exame neurológico a cada 15 minutos na primeira hora e pressão mantida abaixo de 180 por 105, porque a hipertensão é o principal fator de risco de sangramento.</p>
<p>A <strong>transformação hemorrágica sintomática</strong> é a complicação mais temida e ocorre quase sempre nas primeiras 24 a 36 horas. O quadro é <strong>deterioração súbita da consciência</strong>, <strong>piora do déficit</strong> no território já afetado, cefaleia, vômitos e <strong>hipertensão com bradicardia</strong>, os sinais de hipertensão intracraniana. A conduta é interromper a alteplase se ainda estiver correndo, tomografia imediata, controle da pressão, <strong>crioprecipitado</strong> para repor o fibrinogênio consumido, plaquetas se abaixo de 100 mil, e avaliação neurocirúrgica.</p>
<p>Outras causas de piora têm ritmo diferente. A <strong>progressão do infarto</strong> ou a perda da penumbra é gradual, ao longo de horas, sem sinais de hipertensão intracraniana nas primeiras horas; o <strong>edema maligno</strong> do infarto extenso da artéria cerebral média piora entre o segundo e o quinto dia, com rebaixamento progressivo, e pode exigir craniectomia; a hemorragia subaracnóidea não é complicação esperada da trombólise.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Trombolisado ontem que hoje acorda sonolento, com o braço mais fraco e a pressão disparada: é sangue no infarto até a tomografia dizer que não. Suspenda qualquer antitrombótico, controle a pressão, peça crioprecipitado e chame a neurocirurgia; não atribua a piora à evolução natural do AVC.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Alteplase em até 4,5 horas após tomografia sem sangue; pressão abaixo de 185 por 110 antes e 180 por 105 depois.</li>
<li>Sem antitrombóticos por 24 horas; vigilância neurológica frequente.</li>
<li>Transformação hemorrágica: piora súbita com hipertensão intracraniana em 24 a 36 horas, em cerca de 6%.</li>
<li>Conduta: tomografia, pressão, crioprecipitado, plaquetas, neurocirurgia.</li>
<li>Progressão do infarto é gradual; edema maligno é do segundo ao quinto dia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a meta de pressão após a trombólise e por quê? <details><summary>Resposta</summary>Abaixo de 180 por 105 por 24 horas, porque a hipertensão é o principal fator de risco de transformação hemorrágica.</details></li>
<li>Quais sinais anunciam a transformação hemorrágica? <details><summary>Resposta</summary>Rebaixamento súbito, piora do déficit no mesmo território, cefaleia, vômitos e hipertensão com bradicardia nas primeiras 36 horas.</details></li>
<li>Por que o crioprecipitado faz parte do tratamento? <details><summary>Resposta</summary>Porque repõe o fibrinogênio consumido pela alteplase, que persiste baixo por horas após a infusão.</details></li>
</ol>
`,
"einstein2025#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Identificar a taquicardia pelo QRS e pela regularidade.</li>
<li>Aplicar o algoritmo de taquicardia com pulso: instável recebe choque sincronizado.</li>
<li>Conhecer as energias e os fármacos de cada arritmia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Instabilidade</dt>
<dd>Hipotensão, alteração aguda do estado mental, sinais de choque, dor torácica isquêmica ou insuficiência cardíaca aguda causadas pela taquicardia.</dd>
<dt>Cardioversão sincronizada</dt>
<dd>Choque disparado sobre o QRS, para não cair na onda T e induzir fibrilação ventricular; precedida de sedação breve.</dd>
<dt>Fibrilação atrial no ECG</dt>
<dd>Ritmo irregularmente irregular, sem ondas P, com linha de base fibrilatória; o flutter tem ondas F em serra.</dd>
<dt>Adenosina</dt>
<dd>6 mg e depois 12 mg em bolus rápido; interrompe a reentrada nodal, mas não a fibrilação atrial.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante de uma taquicardia com pulso, duas perguntas organizam tudo. A primeira é <strong>há instabilidade causada pela arritmia?</strong> Hipotensão, pulsos finos, sudorese, tontura, dor isquêmica ou congestão aguda com frequência de 150 ou mais respondem que sim, e a conduta é a <strong>cardioversão elétrica sincronizada</strong> imediata, após sedação rápida, sem esperar exames ou fármacos: a fibrilação atrial recebe 120 a 200 J bifásicos, a taquicardia supraventricular regular e o flutter 50 a 100 J, a taquicardia ventricular monomórfica 100 J, com aumento progressivo.</p>
<p>A segunda pergunta, no paciente <strong>estável</strong>, é <strong>QRS estreito ou largo, regular ou irregular?</strong> Estreito e regular é taquicardia supraventricular por reentrada: manobra vagal e adenosina. Estreito e irregular é fibrilação atrial (ou flutter com condução variável): controle de frequência com betabloqueador ou diltiazem. Largo e regular é taquicardia ventricular até prova em contrário: amiodarona ou procainamida, ou adenosina se for claramente supraventricular com aberrância.</p>
<p>A fibrilação atrial se reconhece pela <strong>irregularidade</strong> e pela <strong>ausência de ondas P</strong>; o flutter tem o serrilhado em DII, DIII e aVF. No instável com fibrilação, adenosina não reverte nada e atrasa o choque; amiodarona demora e baixa a pressão; verapamil e diltiazem, inotrópicos negativos e vasodilatadores, precipitam o colapso. Depois da cardioversão de urgência, inicia-se anticoagulação e investigam-se a causa e a duração da arritmia para decidir a estratégia de longo prazo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Coronariopata com palpitação, pressão de 90 por 60, pulsos finos e um traçado irregular sem onda P: pás no tórax, botão de sincronia ligado, 150 J, com midazolam ou propofol em dose pequena. O remédio na veia é o passo errado para quem está instável.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Instável pela taquicardia: cardioversão sincronizada imediata, com sedação.</li>
<li>Fibrilação atrial 120 a 200 J; supraventricular e flutter 50 a 100 J; ventricular monomórfica 100 J.</li>
<li>Estável: estreito regular, adenosina; estreito irregular, controle de frequência; largo, amiodarona ou procainamida.</li>
<li>Fibrilação atrial: irregular, sem P; flutter: ondas F em serra.</li>
<li>Após a cardioversão de urgência: anticoagular e investigar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que define a instabilidade que indica cardioversão? <details><summary>Resposta</summary>Hipotensão, alteração aguda do estado mental, sinais de choque, dor torácica isquêmica ou insuficiência cardíaca aguda causadas pela arritmia.</details></li>
<li>Por que o choque é sincronizado? <details><summary>Resposta</summary>Para disparar sobre o QRS e não sobre a onda T, evitando induzir fibrilação ventricular.</details></li>
<li>Por que a adenosina não serve na fibrilação atrial? <details><summary>Resposta</summary>Porque interrompe apenas as taquicardias por reentrada no nó atrioventricular; a fibrilação não depende do nó para se manter.</details></li>
</ol>
`,

/* --- Volume 2 · Clínica Médica · Sírio-Libanês 2026 (cm51–cm65) ------------------------ */
"sirio2026#2": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome neuroléptica maligna e seus fármacos desencadeantes.</li>
<li>Diferenciá-la da síndrome serotoninérgica, da hipertermia maligna e da catatonia.</li>
<li>Descrever o tratamento de suporte e os agentes específicos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome neuroléptica maligna</dt>
<dd>Reação idiossincrásica ao bloqueio dopaminérgico, com hipertermia, rigidez, alteração da consciência e disautonomia, em horas a dias após início ou aumento de dose.</dd>
<dt>Rigidez em cano de chumbo</dt>
<dd>Hipertonia uniforme em toda a amplitude do movimento, sem clônus, com reflexos normais ou reduzidos.</dd>
<dt>Síndrome serotoninérgica</dt>
<dd>Excesso de serotonina por antidepressivos, tramadol, linezolida ou triptanos: início em horas, hiperreflexia, clônus, midríase e diarreia.</dd>
<dt>Dantroleno</dt>
<dd>Relaxante muscular que bloqueia a liberação de cálcio do retículo sarcoplasmático; usado nos casos graves com rigidez intensa e CPK muito alta.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome neuroléptica maligna ocorre em até 0,2% dos usuários de antipsicóticos, mais com os de primeira geração em dose alta e via parenteral, mas também com os atípicos e com os antieméticos antidopaminérgicos (metoclopramida, prometazina) e na retirada abrupta de levodopa no parkinsoniano.</p>
<p>O diagnóstico diferencial é clínico e depende dos reflexos e do tempo. A <strong>síndrome serotoninérgica</strong> se instala em horas após a droga serotoninérgica, com hiperreflexia, clônus (sobretudo nos tornozelos), midríase, tremor e diarreia. A <strong>hipertermia maligna</strong> segue anestésicos inalatórios e succinilcolina em minutos a horas, no centro cirúrgico.</p>
<p>O tratamento começa pela <strong>suspensão</strong> do bloqueador dopaminérgico e pelo suporte intensivo: resfriamento externo, hidratação vigorosa para proteger o rim da mioglobina, correção de eletrólitos, profilaxia de trombose e vigilância de insuficiência respiratória por rigidez torácica. Os <strong>benzodiazepínicos</strong> controlam agitação e rigidez e são a primeira medida farmacológica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Febre alta, rigidez e confusão em quem usa haloperidol ou metoclopramida é síndrome neuroléptica maligna até prova em contrário, e a CPK alta confirma. O reflexo decide o diferencial: hiporreflexia e rigidez é neuroléptica; hiperreflexia e clônus é serotoninérgica. Suspender a droga, hidratar, resfriar e dar benzodiazepínico vem antes de qualquer agente específico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Causa: bloqueio D2 por antipsicóticos ou antieméticos, ou retirada de levodopa; início em um a três dias.</li>
<li>Clínica: hipertermia, rigidez em cano de chumbo, alteração da consciência, disautonomia; CPK e leucócitos altos.</li>
<li>Diferencial: serotoninérgica (hiperreflexia, clônus, horas), hipertermia maligna (anestesia), catatonia maligna, infecção do SNC.</li>
<li>Tratamento: suspender a droga, resfriar, hidratar, benzodiazepínico; bromocriptina ou dantroleno nos graves.</li>
<li>Reintroduzir antipsicótico só após duas semanas, de outra classe e em dose baixa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o mecanismo central da síndrome neuroléptica maligna? <details><summary>Resposta</summary>O bloqueio dos receptores dopaminérgicos D2 no estriado, no hipotálamo e no sistema autônomo.</details></li>
<li>Que achado do exame neurológico separa a síndrome neuroléptica maligna da serotoninérgica? <details><summary>Resposta</summary>Os reflexos: hiporreflexia com rigidez na neuroléptica; hiperreflexia com clônus na serotoninérgica.</details></li>
<li>Quais são as primeiras medidas de tratamento? <details><summary>Resposta</summary>Suspender o bloqueador dopaminérgico, resfriar, hidratar vigorosamente e administrar benzodiazepínico; dantroleno ou bromocriptina nos casos graves.</details></li>
</ol>
`,

"sirio2026#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as causas de hipomagnesemia, com o etilismo à frente.</li>
<li>Explicar como a depleção de magnésio produz hipocalemia e hipocalcemia refratárias.</li>
<li>Reconhecer as manifestações e tratar a hipomagnesemia grave.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipomagnesemia</dt>
<dd>Magnésio sérico abaixo de 1,7 mg/dL; grave abaixo de 1,0 mg/dL, com risco de convulsão e arritmia.</dd>
<dt>Canal ROMK</dt>
<dd>Canal de potássio do néfron distal que o magnésio intracelular inibe; sem magnésio, o potássio escapa para a urina.</dd>
<dt>Hipocalemia refratária</dt>
<dd>Potássio que não sobe apesar da reposição, até que o magnésio seja corrigido.</dd>
<dt>Hipoparatireoidismo funcional</dt>
<dd>Secreção e ação do paratormônio deprimidas pela depleção de magnésio, com hipocalcemia que não responde ao cálcio.</dd>
</dl>
<h4>O essencial</h4>
<p>O magnésio é o segundo cátion intracelular mais abundante e cofator de centenas de enzimas, incluindo a bomba de sódio e potássio.</p>
<p>A depleção de magnésio arrasta outros dois íons. No rim, o magnésio intracelular bloqueia os canais <strong>ROMK</strong>; quando falta, o potássio vaza para a luz tubular, e a <strong>hipocalemia</strong> se torna refratária à reposição até que o magnésio seja corrigido. Na paratireoide, o magnésio é necessário para a secreção do paratormônio e para a resposta dos tecidos a ele; a depleção causa <strong>hipocalcemia</strong> que também não responde ao cálcio isolado.</p>
<p>O tratamento depende da gravidade. Na hipomagnesemia grave ou sintomática (convulsão, arritmia, tetania), <strong>sulfato de magnésio venoso</strong>, 1 a 2 g em 15 minutos no caso agudo, seguidos de 4 a 8 g em 12 a 24 horas, lembrando que metade da dose infundida se perde na urina e que a reposição precisa continuar por dias para repor o estoque intracelular. Nos casos leves, sais orais, limitados pela diarreia. Repor junto o potássio e, se necessário, o cálcio, e tratar a causa: suspender o inibidor de bomba de prótons, trocar o diurético, controlar a glicemia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando o enunciado traz potássio e cálcio baixos que "não sobem", procure o magnésio: ele é o distúrbio-mãe, sobretudo no etilista e no usuário crônico de diurético ou de omeprazol. Convulsão com magnésio de 0,5 tem o magnésio como causa, e a reposição venosa vem antes de qualquer anticonvulsivante de manutenção.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Causas: ingestão pobre, perda digestiva e perda renal; o etilismo soma todas.</li>
<li>Depleção de magnésio abre os canais ROMK (hipocalemia refratária) e deprime o paratormônio (hipocalcemia refratária).</li>
<li>Clínica: tremor, tetania, convulsão, QT longo, torsades, fraqueza, confusão.</li>
<li>Grave ou sintomática: sulfato de magnésio venoso, 1 a 2 g rápido e 4 a 8 g em 12 a 24 h, mantido por dias.</li>
<li>Corrigir potássio e cálcio em paralelo e tratar a causa; tiamina no etilista.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a hipocalemia do etilista não corrige até que o magnésio seja reposto? <details><summary>Resposta</summary>Porque a depleção de magnésio abre os canais ROMK do néfron distal e o potássio reposto é perdido na urina.</details></li>
<li>Como a hipomagnesemia causa hipocalcemia? <details><summary>Resposta</summary>Reduz a secreção de paratormônio e a resposta dos tecidos a ele, um hipoparatireoidismo funcional.</details></li>
<li>Qual é a dose inicial de sulfato de magnésio na hipomagnesemia com convulsão? <details><summary>Resposta</summary>1 a 2 g por via venosa em 15 minutos, seguidos de 4 a 8 g em 12 a 24 horas e reposição continuada por dias.</details></li>
</ol>
`,

"sirio2026#5": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar as janelas de trombólise e trombectomia no AVC isquêmico.</li>
<li>Descrever o uso da ressonância com difusão e FLAIR no AVC de início desconhecido.</li>
<li>Diferenciar os exames que indicam trombólise dos que indicam trombectomia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Último momento assintomático</dt>
<dd>Referência temporal para a trombólise quando o início não foi presenciado; no AVC ao despertar, é a hora em que o paciente foi dormir.</dd>
<dt>Mismatch DWI-FLAIR</dt>
<dd>Lesão visível na difusão e ausente no FLAIR, indicando infarto com menos de 4,5 horas; critério do estudo WAKE-UP.</dd>
<dt>Trombectomia mecânica</dt>
<dd>Retirada endovascular do trombo em oclusão de grande vaso, até 6 horas pela clínica e até 24 horas com seleção por perfusão (DAWN, DEFUSE-3).</dd>
<dt>Alteplase e tenecteplase</dt>
<dd>Trombolíticos venosos; a tenecteplase em bolus único é equivalente e mais prática, sobretudo antes da trombectomia.</dd>
</dl>
<h4>O essencial</h4>
<p>A trombólise venosa no AVC isquêmico é indicada até <strong>4,5 horas</strong> do início dos sintomas, após tomografia sem contraste que exclua hemorragia, com pressão abaixo de 185 × 110 e sem contraindicações hemorrágicas. Quando o início não foi presenciado, vale o <strong>último momento em que o paciente estava bem</strong>, e cerca de um quarto dos AVCs acontece durante o sono, ficando formalmente fora da janela. Esse grupo era excluído até que a imagem passou a estimar a idade do infarto.</p>
<p>Na ressonância, a sequência de <strong>difusão</strong> (DWI) mostra o infarto em minutos, pela restrição à difusão da água no edema citotóxico; o <strong>FLAIR</strong> só se altera depois de algumas horas, quando o edema vasogênico se instala. Um infarto visível na difusão e <strong>ainda invisível no FLAIR</strong> tem, com boa probabilidade, menos de 4,5 horas.</p>
<p>A <strong>trombectomia</strong> segue outra lógica: exige demonstrar <strong>oclusão de grande vaso</strong> (carótida interna, cerebral média proximal, basilar) por angiotomografia ou angiorressonância, com pequeno núcleo de infarto (ASPECTS 6 ou mais) e déficit relevante (NIHSS 6 ou mais).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Separe os exames pelo que decidem: tomografia sem contraste exclui sangue e libera a trombólise dentro da janela; ressonância com difusão e FLAIR estima o tempo quando a janela é desconhecida; angiotomografia mostra a oclusão e decide a trombectomia. Paciente que acordou com o déficit e dormiu há dez horas vai à ressonância, não à angiotomografia, se a pergunta é trombólise.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Trombólise venosa até 4,5 h do início ou do último momento assintomático, após tomografia sem hemorragia.</li>
<li>AVC ao despertar ou de início desconhecido: ressonância com DWI positivo e FLAIR negativo permite trombolisar (WAKE-UP); perfusão até 9 h é opção.</li>
<li>Trombectomia exige oclusão de grande vaso na angiotomografia; até 6 h pela clínica, até 24 h com perfusão.</li>
<li>Elegível para ambas recebe trombólise e segue para trombectomia sem esperar.</li>
<li>Tenecteplase em bolus é equivalente à alteplase e mais prática.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que horário se usa como início do AVC em quem acordou com o déficit? <details><summary>Resposta</summary>O último momento em que o paciente estava comprovadamente assintomático, em geral a hora em que foi dormir.</details></li>
<li>O que significa o mismatch DWI-FLAIR e para que serve? <details><summary>Resposta</summary>Infarto visível na difusão e ausente no FLAIR, que indica menos de 4,5 horas de evolução e permite a trombólise no AVC de início desconhecido.</details></li>
<li>Qual exame decide a trombectomia mecânica? <details><summary>Resposta</summary>A angiotomografia (ou angiorressonância), que demonstra a oclusão de grande vaso; fora de 6 horas, a perfusão seleciona pelo mismatch núcleo-penumbra.</details></li>
</ol>
`,

"sirio2026#6": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a hemorragia subaracnóidea aneurismática e graduá-la pelas escalas WFNS e Hunt-Hess.</li>
<li>Definir as metas pressóricas e as medidas antes da exclusão do aneurisma.</li>
<li>Prevenir e reconhecer o ressangramento, o vasoespasmo e a hidrocefalia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Escala WFNS</dt>
<dd>Grau I: Glasgow 15; II: 13 a 14 sem déficit motor; III: 13 a 14 com déficit; IV: 7 a 12; V: 3 a 6.</dd>
<dt>Escala de Fisher modificada</dt>
<dd>Quantidade de sangue na tomografia; prediz o risco de vasoespasmo e isquemia tardia.</dd>
<dt>Vasoespasmo</dt>
<dd>Estreitamento arterial entre o 3º e o 14º dia, com isquemia cerebral tardia; prevenido com nimodipina e euvolemia.</dd>
<dt>Nimodipina</dt>
<dd>Bloqueador de cálcio oral, 60 mg a cada 4 horas por 21 dias, que reduz a isquemia tardia e melhora o desfecho.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia subaracnóidea espontânea é aneurismática em 85% dos casos e se anuncia pela <strong>cefaleia em trovoada</strong>, máxima em segundos, muitas vezes com vômitos, rigidez de nuca, perda transitória de consciência ou crise convulsiva. A tomografia sem contraste é quase sempre positiva nas primeiras seis horas; se negativa com suspeita forte, a punção lombar com pesquisa de xantocromia fecha o diagnóstico, e a angiotomografia localiza o aneurisma.</p>
<p>Até a exclusão do aneurisma, o inimigo é o <strong>ressangramento</strong>, mais frequente nas primeiras 24 horas e com mortalidade acima de 50%.</p>
<p>Depois vêm as complicações tardias. O <strong>vasoespasmo</strong> e a isquemia cerebral tardia ocorrem do 3º ao 14º dia, prevenidos com <strong>nimodipina</strong> por 21 dias e euvolemia (a hipovolemia e a hiponatremia por perda de sal aumentam o risco), monitorados com Doppler transcraniano e tratados com hipertensão induzida e, se necessário, angioplastia. A <strong>hidrocefalia</strong> aguda exige derivação ventricular externa. Hiponatremia, febre, hiperglicemia e disfunção cardíaca neurogênica são frequentes e pioram o desfecho se não corrigidas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Memorize os números: WFNS II é Glasgow 13 a 14 sem déficit; a meta pressórica antes de tratar o aneurisma é sistólica abaixo de 160 (na hemorragia intraparenquimatosa, abaixo de 140); nimodipina por 21 dias para o vasoespasmo; nada de fenitoína profilática. A pior dor de cabeça da vida com tomografia normal ainda precisa de punção lombar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cefaleia em trovoada; tomografia sem contraste, e punção lombar se negativa; angiotomografia para o aneurisma.</li>
<li>Gravidade pela WFNS (Glasgow e déficit) e Hunt-Hess; sangue pela Fisher modificada.</li>
<li>Antes da exclusão do aneurisma: sistólica abaixo de 160 com droga titulável, repouso, reverter antitrombóticos; sem anticonvulsivante de rotina.</li>
<li>Embolização ou clipagem o mais cedo possível, idealmente em 24 horas.</li>
<li>Vasoespasmo do 3º ao 14º dia: nimodipina 21 dias, euvolemia, Doppler; hidrocefalia pede derivação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se define o grau II da escala WFNS? <details><summary>Resposta</summary>Escala de coma de Glasgow de 13 ou 14 sem déficit motor focal.</details></li>
<li>Qual é a meta de pressão sistólica antes da exclusão do aneurisma e por que não baixar demais? <details><summary>Resposta</summary>Abaixo de 160 mmHg; reduções excessivas comprometem a perfusão cerebral num encéfalo com pressão intracraniana elevada.</details></li>
<li>Qual droga previne a isquemia cerebral tardia e por quanto tempo? <details><summary>Resposta</summary>Nimodipina oral, 60 mg a cada 4 horas, por 21 dias.</details></li>
</ol>
`,

"sirio2026#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a glomerulonefrite rapidamente progressiva e suas causas por faixa etária.</li>
<li>Identificar o lúpus como causa de nefrite com citopenias na mulher jovem.</li>
<li>Diferenciar as microangiopatias trombóticas da nefrite lúpica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Glomerulonefrite rapidamente progressiva</dt>
<dd>Perda de função renal em dias a semanas com sedimento ativo (hematúria dismórfica, cilindros hemáticos) e proteinúria; crescentes na biópsia.</dd>
<dt>Nefrite lúpica proliferativa</dt>
<dd>Classes III (focal) e IV (difusa) da ISN/RPS, com depósitos de imunocomplexos, hipertensão, proteinúria e queda de filtração; a forma mais grave.</dd>
<dt>Microangiopatia trombótica</dt>
<dd>Anemia hemolítica com esquizócitos, plaquetopenia e lesão de órgão por trombos de microcirculação: SHU, PTT, crise renal esclerodérmica.</dd>
<dt>Anti-DNA de dupla hélice</dt>
<dd>Autoanticorpo específico do lúpus, que acompanha a atividade renal junto com a queda de C3 e C4.</dd>
</dl>
<h4>O essencial</h4>
<p>Uma mulher jovem com creatinina de 5, potássio de 7, proteinúria nefrótica, hematúria e hipertensão tem uma <strong>glomerulonefrite rapidamente progressiva</strong>, emergência nefrológica em que semanas de atraso custam o rim. As causas se dividem em três padrões imunológicos: anticorpo antimembrana basal (Goodpasture), imunocomplexos (lúpus, pós-infecciosa, IgA, crioglobulinemia, endocardite) e pauci-imune (vasculites ANCA).</p>
<p>A nefrite lúpica acomete metade dos pacientes e é a principal causa de morbidade. As classes <strong>proliferativas</strong> (III e IV) produzem sedimento ativo, proteinúria e insuficiência renal, com anti-DNA alto e complemento consumido; a classe V (membranosa) produz síndrome nefrótica com função preservada. A confirmação exige FAN, anti-DNA, anti-Sm, C3 e C4, pesquisa de antifosfolípides e <strong>biópsia renal</strong>, que classifica e gradua atividade e cronicidade.</p>
<p>O diferencial com as <strong>microangiopatias trombóticas</strong> é essencial porque o tratamento é diferente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher jovem, rim falindo rápido com proteinúria e hematúria, mais anemia e plaquetopenia, sem diarreia e sem contexto: pense em lúpus, peça FAN, anti-DNA e complemento e agende a biópsia. Para marcar microangiopatia, a prova precisa dar esquizócitos, DHL alta e, no caso da SHU, a diarreia prévia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Glomerulonefrite rapidamente progressiva: perda de função em dias a semanas com sedimento ativo; emergência.</li>
<li>Na mulher jovem com citopenias, o lúpus é a causa principal; classes III e IV são as proliferativas graves.</li>
<li>Diagnóstico: FAN, anti-DNA, C3 e C4 baixos, antifosfolípides e biópsia renal.</li>
<li>Indução com corticoide mais micofenolato ou ciclofosfamida (com belimumabe ou voclosporina); manutenção prolongada; hidroxicloroquina para todos.</li>
<li>Microangiopatias (SHU, PTT, crise esclerodérmica) têm esquizócitos e hemólise, sem síndrome nefrítica com proteinúria nefrótica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados hematológicos apontam para o lúpus numa glomerulonefrite rapidamente progressiva? <details><summary>Resposta</summary>Anemia, leucopenia e plaquetopenia, critérios hematológicos do lúpus que raramente acompanham as outras causas.</details></li>
<li>Quais classes de nefrite lúpica cursam com sedimento ativo e perda de função? <details><summary>Resposta</summary>As classes proliferativas III e IV.</details></li>
<li>Que exame do sangue periférico ajuda a separar nefrite lúpica de microangiopatia trombótica? <details><summary>Resposta</summary>O esfregaço com pesquisa de esquizócitos, junto com DHL e haptoglobina, que indicam hemólise microangiopática.</details></li>
</ol>
`,

"sirio2026#8": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a investigação da hiponatremia pela osmolalidade e pela volemia.</li>
<li>Aplicar os critérios diagnósticos da SIADH e suas causas.</li>
<li>Tratar a hiponatremia sintomática grave sem ultrapassar o limite de correção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hiponatremia hipotônica</dt>
<dd>Sódio abaixo de 135 mEq/L com osmolalidade plasmática baixa; classificada em hipo, eu e hipervolêmica.</dd>
<dt>SIADH</dt>
<dd>Secreção de ADH inadequada à osmolalidade: euvolemia, osmolalidade urinária acima de 100, sódio urinário acima de 30, urato baixo, tireoide e adrenal normais.</dd>
<dt>Síndrome de desmielinização osmótica</dt>
<dd>Lesão pontina e extrapontina por correção rápida do sódio; prevenida limitando a 8 mEq/L em 24 horas.</dd>
<dt>Salina hipertônica a 3%</dt>
<dd>Tratamento da hiponatremia com sintomas graves: bolus de 100 a 150 mL em 10 a 20 minutos, repetido até duas vezes.</dd>
</dl>
<h4>O essencial</h4>
<p>A hiponatremia é o distúrbio eletrolítico mais comum e quase sempre significa <strong>excesso de água</strong> em relação ao sódio, por ação do hormônio antidiurético. A investigação segue três perguntas. A osmolalidade plasmática é baixa? (exclui pseudo-hiponatremia e hiperglicemia).</p>
<p>A <strong>SIADH</strong> é diagnóstico de exclusão com critérios definidos: hiponatremia hipotônica, osmolalidade urinária acima de 100, sódio urinário acima de 30 com ingestão normal de sal, <strong>euvolemia clínica</strong>, função tireoidiana e adrenal normais e ausência de diurético recente; o <strong>ácido úrico baixo</strong> (abaixo de 4 mg/dL) reforça, pela expansão de volume e maior excreção.</p>
<p>O tratamento depende dos sintomas, não do número. Com <strong>sintomas graves</strong> (convulsão, rebaixamento, vômitos), salina a 3% em bolus de 100 a 150 mL, repetidos até elevar o sódio em 4 a 6 mEq/L, o suficiente para cessar os sintomas; depois, a correção total não deve passar de <strong>8 mEq/L em 24 horas</strong> (alguns aceitam 10 em baixo risco), com sódio dosado a cada 2 a 4 horas; se passar, reduz-se com água livre ou desmopressina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sódio baixo, urina concentrada (osmolalidade acima de 100), sódio urinário alto, paciente sem edema e sem desidratação, TSH e cortisol normais: SIADH, e procure a droga (fluoxetina, carbamazepina) ou o tumor. Convulsão ou confusão exigem salina a 3% em bolus; o limite de 8 mEq/L em 24 horas protege a ponte.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Investigar pela osmolalidade plasmática, osmolalidade urinária (100 é o corte) e volemia com sódio urinário (30 é o corte).</li>
<li>SIADH: euvolemia, urina concentrada e rica em sódio, urato baixo, tireoide e adrenal normais, sem diurético.</li>
<li>Causas: neoplasias, pulmão, SNC, dor e pós-operatório, fármacos (ISRS, carbamazepina, antipsicóticos).</li>
<li>Sintomas graves: salina a 3% em bolus até subir 4 a 6 mEq/L; limite de 8 mEq/L em 24 h.</li>
<li>Sem sintomas graves: restrição hídrica, suspender a droga, ureia ou tolvaptana se preciso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que valor de osmolalidade urinária separa a hiponatremia por excesso de ADH da hiponatremia por excesso de água ingerida? <details><summary>Resposta</summary>100 mOsm/kg: acima dele há ação do ADH; abaixo, o rim dilui ao máximo (polidipsia, baixo soluto).</details></li>
<li>Quais condições precisam ser excluídas antes de diagnosticar SIADH? <details><summary>Resposta</summary>Hipotireoidismo, insuficiência adrenal, uso recente de diurético e hipovolemia ou hipervolemia clínicas.</details></li>
<li>Qual é o limite de correção do sódio em 24 horas e por quê? <details><summary>Resposta</summary>8 mEq/L (até 10 em baixo risco), para evitar a síndrome de desmielinização osmótica.</details></li>
</ol>
`,

"sirio2026#10": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Suspeitar de dissecção aguda de aorta pela dor e pelos sinais associados.</li>
<li>Estimar a probabilidade pelo escore ADD-RS e escolher o exame confirmatório.</li>
<li>Classificar em Stanford A e B e iniciar o tratamento clínico correto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Dissecção aguda de aorta</dt>
<dd>Rotura da íntima com formação de falsa luz entre as camadas da parede; mortalidade de 1 a 2% por hora nas primeiras 48 horas do tipo A não tratado.</dd>
<dt>Classificação de Stanford</dt>
<dd>Tipo A envolve a aorta ascendente e é cirúrgico; tipo B começa após a subclávia esquerda e é clínico ou endovascular.</dd>
<dt>Escore ADD-RS</dt>
<dd>Três categorias (condição de risco, característica da dor, achados do exame), um ponto cada; 0 a 1 com D-dímero negativo exclui; 2 a 3 vai direto à imagem.</dd>
<dt>Terapia anti-impulso</dt>
<dd>Betabloqueador venoso para frequência de 60 e sistólica de 100 a 120, antes de vasodilatador, para reduzir a força de ejeção sobre a parede.</dd>
</dl>
<h4>O essencial</h4>
<p>A dissecção de aorta é a grande impostora da dor torácica: imita infarto, embolia, AVC e abdome agudo, e o tratamento das impostoras (antitrombóticos, trombolítico) a mata. A suspeita vem de três grupos de dados do escore <strong>ADD-RS</strong>. <strong>Condições de risco</strong>: síndrome de Marfan e outras doenças do tecido conjuntivo, história familiar, valva aórtica bicúspide, cirurgia aórtica recente, aneurisma conhecido. <strong>Características da dor</strong>: início abrupto, intensidade máxima desde o começo, caráter rasgante ou lancinante.</p>
<p>O escore orienta o caminho. Com <strong>0 ou 1 ponto</strong>, o D-dímero abaixo de 500 ng/mL exclui a dissecção com segurança; se positivo, imagem. Com <strong>2 ou 3 pontos</strong>, ou com qualquer sinal de instabilidade, a <strong>angiotomografia de aorta</strong> é imediata, sem passar pelo D-dímero: tem sensibilidade e especificidade acima de 95%, mostra a extensão, os ramos comprometidos e as complicações (tamponamento, hemotórax, má perfusão).</p>
<p>O tratamento começa antes da imagem quando a suspeita é alta: analgesia com opioide, <strong>betabloqueador venoso</strong> (esmolol, metoprolol) para frequência em torno de 60, depois vasodilatador (nitroprussiato, nicardipina) para sistólica de 100 a 120, nessa ordem, para não provocar taquicardia reflexa; e nenhum antiagregante ou anticoagulante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor súbita, rasgante, máxima no início, com sopro aórtico novo ou assimetria de pulsos, em hipertenso ou portador de Marfan, é dissecção: angiotomografia agora, betabloqueador antes do vasodilatador e nada de aspirina, heparina ou trombolítico. D-dímero só serve para quem tem probabilidade baixa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>ADD-RS: condição de risco, dor típica, achados de exame; 2 ou 3 pontos vão direto à angiotomografia.</li>
<li>D-dímero negativo exclui apenas com 0 ou 1 ponto.</li>
<li>Sopro diastólico novo, assimetria de pulsos e déficit neurológico são achados de exame que somam ponto.</li>
<li>Tratamento inicial: opioide, betabloqueador venoso, depois vasodilatador; sem antitrombóticos.</li>
<li>Stanford A: cirurgia de emergência; B não complicada: clínico; B complicada: endoprótese.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as três categorias do escore ADD-RS? <details><summary>Resposta</summary>Condições de alto risco, características da dor de alto risco e achados de exame de alto risco, um ponto cada.</details></li>
<li>Por que o betabloqueador vem antes do vasodilatador na dissecção? <details><summary>Resposta</summary>Para reduzir a frequência e a força de ejeção antes de vasodilatar, evitando a taquicardia reflexa que aumentaria o estresse na parede.</details></li>
<li>Qual é a conduta na dissecção Stanford tipo A? <details><summary>Resposta</summary>Cirurgia de emergência com substituição da aorta ascendente.</details></li>
</ol>
`,

"sirio2026#11": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a encefalopatia hepática, seus graus e seus fatores precipitantes.</li>
<li>Prescrever a nutrição do cirrótico com encefalopatia sem restringir proteína.</li>
<li>Tratar o episódio agudo e prevenir a recorrência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Encefalopatia hepática</dt>
<dd>Disfunção cerebral por insuficiência hepática e shunt portossistêmico, de alterações sutis (grau mínimo) ao coma (grau IV de West Haven).</dd>
<dt>Asterixe (flapping)</dt>
<dd>Perda transitória do tônus postural com queda das mãos em extensão; sinal dos graus II e III.</dd>
<dt>Sarcopenia do cirrótico</dt>
<dd>Perda de massa muscular presente em até 60% dos cirróticos; o músculo é sítio alternativo de depuração de amônia.</dd>
<dt>Lactulose</dt>
<dd>Dissacarídeo não absorvível que acidifica o cólon, retém a amônia como amônio e acelera o trânsito; titulada para duas a três evacuações pastosas por dia.</dd>
</dl>
<h4>O essencial</h4>
<p>A encefalopatia hepática resulta do acúmulo de <strong>amônia</strong> e de outras toxinas que o fígado doente não depura e que o shunt portossistêmico desvia da circulação hepática; no cérebro, a amônia é convertida em glutamina nos astrócitos, causando edema celular e disfunção. Quase todo episódio tem um <strong>fator precipitante</strong>: constipação, hemorragia digestiva, infecção (sobretudo peritonite bacteriana espontânea), hipocalemia e alcalose por diurético, desidratação, sedativos, excesso de proteína aguda, TIPS. Encontrá-lo e corrigi-lo é metade do tratamento.</p>
<p>A <strong>nutrição</strong> mudou de paradigma. A restrição proteica, adotada por décadas, piora a sarcopenia, e o músculo é o órgão que converte amônia em glutamina quando o fígado falha; a desnutrição está associada a mais encefalopatia, mais infecção e mais mortalidade.</p>
<p>O tratamento do episódio é <strong>lactulose</strong> oral ou por sonda (ou enema nos graus III e IV), titulada para duas a três evacuações pastosas, junto com a correção do precipitante, hidratação e suspensão de sedativos; a via aérea é protegida no grau IV. A <strong>rifaximina</strong>, 550 mg duas vezes ao dia, é associada à lactulose para prevenir recorrência após o segundo episódio e reduz internações. L-ornitina L-aspartato é adjuvante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cirrótico confuso com flapping: procure o gatilho (constipação, sangramento, infecção, diurético), dê lactulose e não corte a proteína. A prova testa justamente o número: 35 a 40 kcal/kg e 1,2 a 1,5 g/kg de proteína, com lanche à noite. Qualquer opção com 0,6 a 0,8 g/kg é a conduta antiga e errada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Amônia e shunt portossistêmico causam edema astrocitário; quase sempre há precipitante a corrigir.</li>
<li>Graus de West Haven e asterixe fazem o diagnóstico; amônia sérica ajuda pouco.</li>
<li>Nutrição: 35 a 40 kcal/kg/dia e 1,2 a 1,5 g/kg/dia de proteína, em pequenas refeições com lanche noturno; nunca restringir.</li>
<li>Episódio: lactulose até duas a três evacuações, correção do gatilho, proteção de via aérea no grau IV.</li>
<li>Prevenção: rifaximina associada após recorrência; encefalopatia refratária indica transplante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a restrição proteica é contraindicada na encefalopatia hepática? <details><summary>Resposta</summary>Porque agrava a sarcopenia, e o músculo é sítio alternativo de depuração de amônia; a desnutrição aumenta encefalopatia e mortalidade.</details></li>
<li>Qual é a meta de energia e proteína para o cirrótico com encefalopatia? <details><summary>Resposta</summary>35 a 40 kcal/kg/dia e 1,2 a 1,5 g/kg/dia de proteína, fracionadas e com lanche noturno.</details></li>
<li>Como se titula a lactulose? <details><summary>Resposta</summary>Até obter duas a três evacuações pastosas por dia.</details></li>
</ol>
`,

"sirio2026#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a estratégia "testar e tratar" na dispepsia do adulto jovem sem alarme.</li>
<li>Conhecer os esquemas de erradicação do H. pylori do consenso brasileiro e suas durações.</li>
<li>Confirmar a cura e manejar a falha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinais de alarme</dt>
<dd>Perda de peso, disfagia, odinofagia, vômitos persistentes, sangramento, anemia, massa palpável, história familiar de câncer gástrico; indicam endoscopia.</dd>
<dt>Testar e tratar</dt>
<dd>Teste não invasivo para H. pylori (respiratório com ureia ou antígeno fecal) no dispéptico jovem sem alarme, com tratamento se positivo.</dd>
<dt>Terapia tripla</dt>
<dd>Inibidor de bomba de prótons em dose dobrada, amoxicilina 1 g e claritromicina 500 mg, duas vezes ao dia, por 14 dias.</dd>
<dt>Quádrupla com bismuto</dt>
<dd>Inibidor de bomba, subcitrato de bismuto, tetraciclina e metronidazol por 10 a 14 dias; primeira linha em alta resistência e resgate no Brasil.</dd>
</dl>
<h4>O essencial</h4>
<p>O H. pylori infecta metade da população brasileira e é a causa da maioria das úlceras pépticas, do linfoma MALT e do adenocarcinoma gástrico, além de contribuir para parte das dispepsias funcionais.</p>
<p>O esquema de <strong>primeira linha</strong> no Brasil, onde a resistência à claritromicina ainda é baixa (abaixo de 15%), é a <strong>terapia tripla</strong>: inibidor de bomba de prótons em dose plena duas vezes ao dia, amoxicilina 1 g duas vezes ao dia e claritromicina 500 mg duas vezes ao dia, por <strong>14 dias</strong>, com taxas de erradicação acima de 85%.</p>
<p>O <strong>controle de cura</strong> é obrigatório, quatro semanas após o fim do antibiótico, com teste respiratório ou antígeno fecal (a sorologia não serve, pois permanece positiva). Na <strong>falha</strong>, não se repete a claritromicina: a segunda linha é a quádrupla com bismuto ou a tripla com <strong>levofloxacino</strong> (inibidor de bomba, amoxicilina e levofloxacino 500 mg por 10 a 14 dias); na terceira falha, cultura com antibiograma ou esquema com rifabutina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dispepsia em jovem sem alarme: teste não invasivo e, se positivo, tripla com claritromicina por 14 dias, confirmando a cura quatro semanas depois. Endoscopia só acima de 40 anos ou com alarme. Levofloxacino é resgate; repetir claritromicina após falha é erro. Sorologia nunca confirma cura.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Indicações: úlcera, MALT, dispepsia, parentes de câncer gástrico, AINE crônico, ferropenia, PTI, B12.</li>
<li>Menos de 40 anos sem alarme: testar e tratar com teste respiratório ou antígeno fecal; sem endoscopia.</li>
<li>Primeira linha no Brasil: IBP + amoxicilina + claritromicina por 14 dias.</li>
<li>Cura confirmada quatro semanas após o antibiótico, sem IBP por duas semanas, com teste não sorológico.</li>
<li>Falha: quádrupla com bismuto ou tripla com levofloxacino; nunca repetir claritromicina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em quem se aplica a estratégia "testar e tratar" para H. pylori? <details><summary>Resposta</summary>No dispéptico com menos de 40 anos e sem sinais de alarme, com teste não invasivo e tratamento se positivo.</details></li>
<li>Qual é o esquema de primeira linha do consenso brasileiro e sua duração? <details><summary>Resposta</summary>Inibidor de bomba de prótons, amoxicilina e claritromicina, duas vezes ao dia, por 14 dias.</details></li>
<li>Como e quando se confirma a erradicação? <details><summary>Resposta</summary>Com teste respiratório ou antígeno fecal, quatro semanas após o fim do antibiótico e duas semanas sem inibidor de bomba; a sorologia não serve.</details></li>
</ol>
`,

"sirio2026#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar o delirium na UTI com o CAM-ICU e reconhecer seus subtipos.</li>
<li>Identificar os fatores de risco modificáveis, com os benzodiazepínicos à frente.</li>
<li>Aplicar a prevenção e o tratamento recomendados pelas diretrizes PADIS.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Delirium</dt>
<dd>Disfunção cerebral aguda e flutuante com desatenção e pensamento desorganizado ou alteração da consciência; acomete até 80% dos ventilados.</dd>
<dt>CAM-ICU</dt>
<dd>Versão do Confusion Assessment Method para pacientes que não falam; avalia início agudo, desatenção, pensamento desorganizado e nível de consciência.</dd>
<dt>Sedação leve</dt>
<dd>Alvo de RASS de 0 a −2, com despertar diário e avaliação de prontidão para extubação.</dd>
<dt>Pacote ABCDEF</dt>
<dd>Avaliar e tratar a dor, despertar e respiração espontâneos, escolha de sedação, monitorar delirium, mobilização precoce, família.</dd>
</dl>
<h4>O essencial</h4>
<p>O delirium na UTI é frequente, subdiagnosticado e grave: associa-se a mais tempo de ventilação, mais mortalidade e declínio cognitivo persistente após a alta. Em dois terços dos casos é <strong>hipoativo</strong> (sonolento, apático, desatento) e passa despercebido; o hiperativo, agitado, chama a atenção mas é minoria; o misto alterna os dois. Por isso a triagem com o <strong>CAM-ICU</strong> ou o ICDSC deve ser feita a cada turno em todo paciente despertável.</p>
<p>Entre os sedativos, os <strong>benzodiazepínicos</strong> são o fator de risco mais consistente: o midazolam e o lorazepam aumentam a transição para delirium de forma dose-dependente, e seus metabólitos se acumulam em idosos e na disfunção renal e hepática.</p>
<p>A prevenção e o tratamento são sobretudo <strong>não farmacológicos</strong>, organizados no pacote ABCDEF: controle da dor, despertar e teste de respiração espontânea diários, escolha de sedativo, monitorização do delirium, mobilização precoce e presença da família, além de reorientação, relógio e janela, ciclo claro-escuro, redução de ruído à noite, óculos e aparelhos auditivos, retirada de sondas e contenções.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente de UTI que fica desatento e com pensamento desorganizado ao sair da sedação tem delirium, e o sedativo culpado é o benzodiazepínico (midazolam). A resposta terapêutica não é outro remédio, e sim retirar o gatilho, tratar a dor, mobilizar, devolver o dia e a noite e trazer a família; antipsicótico só para agitação perigosa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Delirium: agudo, flutuante, com desatenção; hipoativo é o mais comum e o mais perdido; triar com CAM-ICU a cada turno.</li>
<li>Fatores modificáveis: benzodiazepínicos, opioides em excesso, sono, imobilidade, contenção, déficits sensoriais, dor.</li>
<li>Sedação leve com propofol ou dexmedetomidina; evitar midazolam; analgesia antes de sedar; despertar diário.</li>
<li>Pacote ABCDEF e medidas ambientais previnem e tratam; família à beira do leito.</li>
<li>Antipsicóticos não encurtam o delirium; usar só para agitação perigosa; dexmedetomidina para o agitado que impede extubação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual subtipo de delirium é o mais frequente na UTI e por que é perigoso? <details><summary>Resposta</summary>O hipoativo, porque o paciente sonolento e apático não chama atenção e o diagnóstico é perdido sem triagem sistemática.</details></li>
<li>Qual classe de sedativos mais se associa ao delirium e quais são as preferidas? <details><summary>Resposta</summary>Os benzodiazepínicos (midazolam, lorazepam); preferem-se propofol e dexmedetomidina, com sedação leve e despertar diário.</details></li>
<li>Os antipsicóticos previnem ou encurtam o delirium? <details><summary>Resposta</summary>Não; ficam reservados à agitação que ameaça a segurança, em dose baixa e por curto tempo.</details></li>
</ol>
`,

"sirio2026#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar as vasculites pelo calibre do vaso segundo Chapel Hill.</li>
<li>Reconhecer a poliarterite nodosa e sua ligação com a hepatite B.</li>
<li>Diferenciá-la das vasculites ANCA-associadas e tratar as duas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Poliarterite nodosa</dt>
<dd>Vasculite necrosante de artérias de médio e pequeno calibre, sem glomerulonefrite, sem capilarite e sem ANCA; associada ao HBV em parte dos casos.</dd>
<dt>Mononeurite múltipla</dt>
<dd>Lesão assimétrica e sucessiva de nervos periféricos isolados, por isquemia dos vasa nervorum; marca das vasculites.</dd>
<dt>Vasculites ANCA-associadas</dt>
<dd>Granulomatose com poliangeíte (PR3), poliangeíte microscópica (MPO) e granulomatose eosinofílica; pequenos vasos, com glomerulonefrite e capilarite pulmonar.</dd>
<dt>Microaneurismas</dt>
<dd>Dilatações saculares em artérias renais, mesentéricas e hepáticas à angiografia, típicas da poliarterite nodosa.</dd>
</dl>
<h4>O essencial</h4>
<p>A classificação de Chapel Hill organiza as vasculites pelo <strong>calibre predominante</strong>. Grandes vasos: arterite de células gigantes e Takayasu. <strong>Médios vasos</strong>: poliarterite nodosa e doença de Kawasaki. Pequenos vasos: as ANCA-associadas (pauci-imunes) e as por imunocomplexos (IgA, crioglobulinemia, anti-membrana basal, urticariforme hipocomplementêmica).</p>
<p>A <strong>poliarterite nodosa</strong> acomete homens de meia-idade com sintomas constitucionais, <strong>mononeurite múltipla</strong> (70%), dor abdominal pós-prandial, hipertensão de início recente por isquemia renal, creatinina elevada com <strong>sedimento urinário inativo</strong> (não há glomerulonefrite), nódulos subcutâneos, livedo e úlceras. O pulmão é poupado. O <strong>ANCA é negativo</strong>.</p>
<p>O tratamento depende da causa e da gravidade. Na forma <strong>associada ao HBV</strong>, corticoide por curto período para controlar a inflamação, seguido de antiviral (entecavir ou tenofovir) e plasmaférese, evitando imunossupressão prolongada que aumenta a replicação viral.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mononeurite múltipla mais dor abdominal mais hipertensão nova, sem glomerulonefrite, sem pulmão e com ANCA negativo, é poliarterite nodosa, e a hepatite B no antecedente fecha. Se a prova trouxer sedimento ativo, hemorragia alveolar ou ANCA positivo, mude para vasculite de pequenos vasos. A biópsia que mostra artéria média com necrose fibrinoide é a confirmação clássica.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Chapel Hill: grandes (células gigantes, Takayasu), médios (PAN, Kawasaki), pequenos (ANCA e imunocomplexos).</li>
<li>PAN: mononeurite múltipla, dor abdominal, hipertensão, infartos renais sem glomerulonefrite, nódulos e livedo; pulmão poupado; ANCA negativo.</li>
<li>Associação com HBV em 5 a 30%; diagnóstico por biópsia (necrose fibrinoide transmural) ou angiografia (microaneurismas).</li>
<li>PAN-HBV: corticoide breve, antiviral e plasmaférese; PAN idiopática: corticoide e ciclofosfamida nas graves.</li>
<li>Vasculites ANCA: pequenos vasos, glomerulonefrite e capilarite; rituximabe ou ciclofosfamida.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o sedimento urinário é inativo na poliarterite nodosa apesar da creatinina elevada? <details><summary>Resposta</summary>Porque o rim sofre por isquemia e infartos de artérias médias, não por glomerulonefrite, que é lesão de pequenos vasos.</details></li>
<li>Qual infecção se associa à poliarterite nodosa e como isso muda o tratamento? <details><summary>Resposta</summary>A hepatite B; o tratamento usa corticoide breve, antiviral e plasmaférese, evitando imunossupressão prolongada.</details></li>
<li>Que achado histológico define a poliarterite nodosa na biópsia? <details><summary>Resposta</summary>Inflamação transmural com necrose fibrinoide em artéria de médio calibre, sem granulomas.</details></li>
</ol>
`,

"sirio2026#15": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o lúpus eritematoso sistêmico pelos critérios clínicos e imunológicos.</li>
<li>Justificar a hidroxicloroquina para todos e o corticoide como ponte.</li>
<li>Indicar a biópsia renal e escolher o imunossupressor pela classe.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios EULAR/ACR 2019</dt>
<dd>FAN de 1:80 ou mais como porta de entrada, mais pontos ponderados em domínios clínicos e imunológicos; 10 pontos classificam.</dd>
<dt>Hidroxicloroquina</dt>
<dd>Antimalárico de uso universal no lúpus, até 5 mg/kg/dia, que reduz atividade, surtos, trombose, dano acumulado e mortalidade; exige exame de retina.</dd>
<dt>Limiar de biópsia renal</dt>
<dd>Proteinúria de 0,5 g/24 h ou relação proteína/creatinina de 500 mg/g, com ou sem hematúria ou queda de filtração.</dd>
<dt>Micofenolato de mofetila</dt>
<dd>Imunossupressor de indução e manutenção das nefrites III, IV e V, opção à ciclofosfamida com menor toxicidade gonadal.</dd>
</dl>
<h4>O essencial</h4>
<p>O lúpus eritematoso sistêmico é a doença autoimune sistêmica prototípica, dez vezes mais frequente em mulheres, com pico entre 20 e 40 anos.</p>
<p>O tratamento tem uma base e degraus. A base é a <strong>hidroxicloroquina</strong> para todo paciente, independentemente da gravidade, porque reduz surtos, dano, trombose e morte; a dose respeita 5 mg/kg de peso real e exige exame de fundo de olho e OCT anual a partir do quinto ano.</p>
<p>A <strong>nefrite</strong> é a manifestação que mais define prognóstico e exige <strong>biópsia</strong> sempre que a proteinúria atinge <strong>0,5 g/24 h</strong>, porque a classe histológica (ISN/RPS) determina o tratamento: classes I e II não exigem imunossupressão específica; <strong>III e IV</strong> (proliferativas) recebem indução com corticoide e <strong>micofenolato</strong> ou ciclofosfamida em dose baixa (Euro-Lupus), com belimumabe ou voclosporina associados nas diretrizes recentes, e manutenção com micofenolato ou azatioprina por pelo menos três anos; a <strong>classe V</strong> (membranosa) com proteinúria nefrótica recebe micofenolato ou inibidor de calcineurina; a classe VI é esclerose avançada, sem benefício de imunossupressão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante do lúpus recém-diagnosticado com proteinúria acima de 0,5 g, a conduta tem três partes inseparáveis: hidroxicloroquina para todos, corticoide para a atividade e biópsia renal para escolher o imunossupressor. Opções que dispensam a biópsia, que usam só hidroxicloroquina ou que começam por rituximabe estão erradas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Lúpus: mulher jovem, artrite, rash malar, citopenias, FAN positivo, anti-DNA e anti-Sm específicos, complemento baixo na atividade.</li>
<li>Hidroxicloroquina para todos (até 5 mg/kg, com exame de retina); corticoide como ponte, reduzido a 5 mg/dia ou menos.</li>
<li>Proteinúria de 0,5 g/24 h indica biópsia renal; a classe define o tratamento.</li>
<li>Classes III e IV: corticoide com micofenolato ou ciclofosfamida (mais belimumabe ou voclosporina); classe V: micofenolato ou calcineurínico.</li>
<li>Manutenção por anos, bloqueio do SRAA, proteção óssea; rituximabe na refratariedade.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a hidroxicloroquina é indicada para todo paciente com lúpus? <details><summary>Resposta</summary>Porque reduz atividade, surtos, trombose, dano acumulado e mortalidade, com perfil de segurança favorável.</details></li>
<li>Qual nível de proteinúria indica biópsia renal no lúpus? <details><summary>Resposta</summary>0,5 g em 24 horas ou relação proteína/creatinina de 500 mg/g.</details></li>
<li>Qual é a indução das nefrites lúpicas proliferativas? <details><summary>Resposta</summary>Corticoide associado a micofenolato ou ciclofosfamida em dose baixa, com belimumabe ou voclosporina nas diretrizes recentes.</details></li>
</ol>
`,

"sirio2026#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a leucemia mieloide crônica pelo hemograma, pelo exame físico e pelo BCR-ABL.</li>
<li>Diferenciá-la da reação leucemoide e das outras neoplasias mieloproliferativas.</li>
<li>Descrever o tratamento com inibidores de tirosina-quinase e a monitorização da resposta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cromossomo Filadélfia</dt>
<dd>Translocação t(9;22) que funde os genes BCR e ABL1, gerando uma tirosina-quinase constitutivamente ativa.</dd>
<dt>Fases da LMC</dt>
<dd>Crônica (blastos abaixo de 10%), acelerada (10 a 19%, basofilia acima de 20%, plaquetopenia, novas alterações citogenéticas) e blástica (20% ou mais).</dd>
<dt>Fosfatase alcalina leucocitária</dt>
<dd>Baixa na LMC e alta na reação leucemoide e na policitemia vera; teste clássico, hoje substituído pelo BCR-ABL.</dd>
<dt>Resposta molecular maior</dt>
<dd>BCR-ABL abaixo de 0,1% na escala internacional por PCR quantitativo; meta aos 12 meses de tratamento.</dd>
</dl>
<h4>O essencial</h4>
<p>A leucemia mieloide crônica é uma neoplasia mieloproliferativa da célula-tronco em que a fusão <strong>BCR-ABL1</strong> produz uma quinase sempre ligada, que impulsiona a proliferação granulocítica. O paciente típico tem 50 a 60 anos, mas adultos jovens são comuns; metade é assintomática ao diagnóstico, e os demais têm fadiga, sudorese, perda de peso, saciedade precoce e <strong>esplenomegalia</strong>, às vezes volumosa.</p>
<p>O diferencial inclui a <strong>reação leucemoide</strong> (infecção grave, corticoide, neoplasia sólida), com granulações tóxicas, sem basofilia e com fosfatase alcalina leucocitária alta; a leucemia mielomonocítica crônica, com monocitose; a mielofibrose, com dacriócitos e leucoeritroblastose; e as leucemias agudas, com blastos acima de 20%.</p>
<p>O tratamento transformou a doença. Os <strong>inibidores de tirosina-quinase</strong>, imatinibe (primeira geração), dasatinibe, nilotinibe e bosutinibe (segunda) e ponatinibe ou asciminibe (para a mutação T315I e resistência), são orais e induzem resposta hematológica, citogenética e molecular na grande maioria; a sobrevida em dez anos passa de 85%.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Leucocitose com todas as formas granulocíticas, basofilia, esplenomegalia e BCR-ABL positivo é LMC em fase crônica, e a resposta é inibidor de tirosina-quinase, em geral imatinibe. Transplante, quimioterapia intensiva e anticorpos anti-CD20 são distratores de outras doenças. Guarde as metas do PCR: 10% aos três meses, 1% aos seis, 0,1% aos doze.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>LMC: BCR-ABL1 (t(9;22)) ativa uma tirosina-quinase; esplenomegalia, leucocitose com desvio completo, basofilia, blastos abaixo de 10% na fase crônica.</li>
<li>Diferencial: reação leucemoide (sem basofilia, FAL alta), LMMC, mielofibrose, leucemia aguda.</li>
<li>Diagnóstico por PCR ou FISH para BCR-ABL no sangue; cariótipo medular para alterações adicionais.</li>
<li>Tratamento: inibidores de tirosina-quinase orais (imatinibe e sucessores); sobrevida em dez anos acima de 85%.</li>
<li>Monitorar PCR trimestral (metas 10%, 1%, 0,1%); transplante só na falha de múltiplos inibidores ou nas fases avançadas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado do hemograma, além da leucocitose, mais sugere leucemia mieloide crônica? <details><summary>Resposta</summary>A basofilia, acompanhada de eosinofilia e de todas as formas de maturação granulocítica em circulação.</details></li>
<li>Qual é o tratamento de primeira linha da LMC em fase crônica? <details><summary>Resposta</summary>Um inibidor de tirosina-quinase oral, classicamente o imatinibe.</details></li>
<li>Quando o transplante de células-tronco é indicado na LMC? <details><summary>Resposta</summary>Na falha ou intolerância a múltiplos inibidores de tirosina-quinase e nas fases acelerada e blástica.</details></li>
</ol>
`,

"sirio2026#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a investigação do nódulo tireoidiano a partir do TSH.</li>
<li>Indicar a cintilografia e interpretar o nódulo quente e o frio.</li>
<li>Aplicar o TI-RADS e os critérios de punção para o nódulo não funcionante.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nódulo hiperfuncionante (quente)</dt>
<dd>Adenoma autônomo que capta o radiofármaco e suprime o tecido circundante; produz TSH baixo e quase nunca é maligno.</dd>
<dt>Cintilografia de tireoide</dt>
<dd>Imagem funcional com iodo-123, iodo-131 ou tecnécio-99m; indicada quando o TSH está suprimido.</dd>
<dt>TI-RADS</dt>
<dd>Classificação ultrassonográfica de risco (ACR TI-RADS 1 a 5) que, junto com o tamanho, define a indicação de punção.</dd>
<dt>Classificação de Bethesda</dt>
<dd>Seis categorias citológicas da punção aspirativa, de não diagnóstica a maligna, cada uma com risco e conduta.</dd>
</dl>
<h4>O essencial</h4>
<p>Nódulos tireoidianos são achados em até dois terços dos adultos ao ultrassom, e menos de 10% são malignos. A investigação começa com história (irradiação cervical, história familiar, crescimento rápido, rouquidão), exame físico e <strong>TSH</strong>, cujo resultado abre dois caminhos.</p>
<p>O nódulo <strong>quente</strong>, que concentra o radiofármaco e apaga o restante da glândula, é um <strong>adenoma tóxico</strong>, autônomo por mutação ativadora do receptor de TSH ou da proteína Gs, com risco de malignidade inferior a 1%. Ele <strong>não é puncionado</strong>, porque a citologia de adenoma folicular hiperfuncionante é indistinguível da de neoplasia folicular e geraria cirurgias desnecessárias; mesmo um aspecto TI-RADS 4 não muda essa regra.</p>
<p>No nódulo não funcionante, a conduta depende da citologia: Bethesda II (benigno) é seguido com ultrassom; III e IV (atipia e neoplasia folicular) podem ser esclarecidos por teste molecular ou lobectomia diagnóstica; V e VI (suspeito e maligno) vão à cirurgia, com extensão definida pelo tamanho e pela presença de linfonodos. Calcitonina é dosada quando há história familiar de carcinoma medular ou neoplasia endócrina múltipla, e tireoglobulina só serve ao seguimento após tireoidectomia por câncer diferenciado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O TSH decide o primeiro passo depois do ultrassom: suprimido, cintilografia; normal ou alto, punção conforme TI-RADS e tamanho. O nódulo quente não se punciona e vai para iodo ou cirurgia. Puncionar antes da cintilografia num paciente com TSH de 0,01 é o erro que a prova espera flagrar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Nódulos são comuns e menos de 10% são malignos; história, exame, TSH e ultrassom iniciam a investigação.</li>
<li>TSH suprimido: cintilografia; nódulo quente é adenoma tóxico, não se punciona, trata-se com iodo radioativo ou lobectomia.</li>
<li>TSH normal ou alto: TI-RADS e tamanho definem a punção (TR3 de 2,5 cm, TR4 de 1,5 cm, TR5 de 1 cm).</li>
<li>Bethesda orienta a conduta após a punção: benigno segue, indeterminado esclarece, suspeito ou maligno opera.</li>
<li>Calcitonina só com suspeita de medular; tireoglobulina só no seguimento pós-tireoidectomia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o próximo exame diante de um nódulo tireoidiano com TSH suprimido? <details><summary>Resposta</summary>A cintilografia de tireoide, para verificar se o nódulo é hiperfuncionante.</details></li>
<li>Por que o nódulo quente não é puncionado? <details><summary>Resposta</summary>Porque o risco de malignidade é inferior a 1% e a citologia do adenoma hiperfuncionante é indistinguível da neoplasia folicular, gerando cirurgias desnecessárias.</details></li>
<li>Qual é o tratamento definitivo do adenoma tóxico? <details><summary>Resposta</summary>Iodo radioativo ou lobectomia; os antitireoidianos apenas preparam o paciente.</details></li>
</ol>
`,

"sirio2026#20": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Escolher o antibiótico empírico da meningite bacteriana por idade e fator de risco.</li>
<li>Justificar a dexametasona e o momento de administrá-la.</li>
<li>Saber quando a tomografia precede a punção lombar e quando o antibiótico não pode esperar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Listeria monocytogenes</dt>
<dd>Bacilo gram-positivo intracelular, resistente às cefalosporinas; causa meningite em maiores de 50 anos, imunossuprimidos, etilistas, gestantes e neonatos.</dd>
<dt>Dexametasona adjuvante</dt>
<dd>0,15 mg/kg (10 mg) a cada 6 horas por 4 dias, iniciada antes ou com a primeira dose do antibiótico; reduz mortalidade e sequelas na meningite pneumocócica.</dd>
<dt>Vancomicina empírica</dt>
<dd>Cobre o pneumococo com sensibilidade reduzida às cefalosporinas até o antibiograma; suspensa se o germe for sensível.</dd>
<dt>Indicações de tomografia antes da punção</dt>
<dd>Imunossupressão, doença do SNC prévia, crise convulsiva recente, papiledema, rebaixamento importante ou déficit focal.</dd>
</dl>
<h4>O essencial</h4>
<p>A meningite bacteriana aguda mata um em cada cinco adultos e deixa sequelas em um terço dos sobreviventes; cada hora de atraso no antibiótico aumenta a mortalidade. A tríade de febre, rigidez de nuca e alteração do estado mental está completa em menos da metade dos casos, mas quase todos têm pelo menos dois de quatro sinais (os três mais cefaleia).</p>
<p>O esquema empírico segue os agentes prováveis. Entre 1 mês e 50 anos, pneumococo e meningococo: <strong>ceftriaxona</strong> (2 g a cada 12 horas) mais <strong>vancomicina</strong>, pela possibilidade de pneumococo com sensibilidade reduzida às cefalosporinas.</p>
<p>A <strong>dexametasona</strong>, 10 mg a cada 6 horas por 4 dias, iniciada 15 a 20 minutos antes ou junto com a primeira dose de antibiótico, reduz a mortalidade e a perda auditiva na meningite por <strong>pneumococo</strong> em adultos de países de alta renda, ao atenuar a inflamação subaracnóidea desencadeada pela lise bacteriana; é recomendada empiricamente e mantida se o pneumococo se confirmar, suspensa se o agente for outro.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Monte o esquema pela idade: ceftriaxona e vancomicina para todos os adultos; ampicilina a mais depois dos 50 anos ou com imunossupressão, álcool e gestação; dexametasona antes da primeira dose. Nunca atrase o antibiótico pela tomografia ou pela punção; colha hemoculturas e trate.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Antibiótico em menos de uma hora; se a tomografia precede a punção, hemoculturas e antibiótico antes da imagem.</li>
<li>1 mês a 50 anos: ceftriaxona e vancomicina; acima de 50, imunossuprimidos, etilistas, gestantes: mais ampicilina para Listeria.</li>
<li>Pós-neurocirurgia ou derivação: cefepima ou meropenem com vancomicina.</li>
<li>Dexametasona 10 mg 6/6 h por 4 dias, antes ou com a primeira dose; manter se pneumococo.</li>
<li>Isolamento 24 h, profilaxia dos contatos (meningococo e Haemophilus), notificação compulsória.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a ampicilina entra no esquema empírico da meningite após os 50 anos? <details><summary>Resposta</summary>Para cobrir Listeria monocytogenes, mais frequente nessa faixa e resistente às cefalosporinas.</details></li>
<li>Quando a dexametasona deve ser administrada e por quê? <details><summary>Resposta</summary>Antes ou junto com a primeira dose de antibiótico, para atenuar a inflamação desencadeada pela lise bacteriana; reduz mortalidade e sequelas na meningite pneumocócica.</details></li>
<li>O que fazer quando há indicação de tomografia antes da punção lombar? <details><summary>Resposta</summary>Colher hemoculturas e iniciar antibiótico com dexametasona antes da tomografia, sem esperar o líquor.</details></li>
</ol>
`,

/* --- Volume 2 · Clínica Médica · Sírio-Libanês 2027 (cm66–cm80) ------------------------ */
"sirio2027#1": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estadiar a doença renal do diabético pela filtração e pela albuminúria.</li>
<li>Listar os pilares da nefroproteção no diabético segundo o KDIGO.</li>
<li>Explicar o benefício renal e cardiovascular dos inibidores de SGLT2.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença renal do diabetes</dt>
<dd>Albuminúria persistente (relação albumina/creatinina de 30 mg/g ou mais) ou TFG abaixo de 60 por mais de três meses em diabético, sem outra causa.</dd>
<dt>Inibidores de SGLT2</dt>
<dd>Empagliflozina, dapagliflozina, canagliflozina: bloqueiam a reabsorção de glicose e sódio no túbulo proximal, restauram o feedback tubuloglomerular e reduzem a pressão intraglomerular.</dd>
<dt>Finerenona</dt>
<dd>Antagonista não esteroidal do receptor mineralocorticoide, que reduz progressão renal e eventos cardiovasculares no diabético com albuminúria residual.</dd>
<dt>Agonistas de GLP-1</dt>
<dd>Semaglutida, liraglutida, dulaglutida: reduzem eventos cardiovasculares e, com a semaglutida (FLOW), a progressão renal; segunda camada após o SGLT2.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença renal do diabetes acomete 40% dos diabéticos e é a principal causa de diálise no mundo. O estadiamento usa dois eixos, a <strong>TFG</strong> (G1 a G5) e a <strong>albuminúria</strong> (A1 abaixo de 30, A2 de 30 a 300, A3 acima de 300 mg/g), e a albuminúria é o fator que mais prediz progressão e eventos cardiovasculares; um paciente com TFG de 41 e albuminúria de 1.361 mg/g está em G3b A3, risco muito alto.</p>
<p>O KDIGO de 2022 organiza o tratamento em camadas. A base para todos: controle glicêmico (glicada em torno de 7%), pressórico (abaixo de 130 × 80), lipídico, dieta com restrição de sódio e proteína moderada, exercício e cessação do tabagismo.</p>
<p>Os inibidores de SGLT2 merecem destaque porque seu benefício é <strong>independente da glicose</strong>. Ao bloquear a reabsorção de sódio e glicose no túbulo proximal, mais sódio chega à mácula densa, a arteríola aferente se contrai e a <strong>hiperfiltração</strong> glomerular diminui; a queda inicial da TFG (até 30%) é esperada e benigna, seguida de uma curva de declínio muito mais lenta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabético com albuminúria e TFG acima de 20, já em inibidor da ECA ou BRA, recebe inibidor de SGLT2 a seguir, mesmo com glicada na meta, porque a indicação é renal e cardiovascular. Não espere o açúcar subir para indicar a gliflozina, e não a troque por glitazona, sulfonilureia ou gliptina, que não protegem o rim.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Estadiar por TFG e albuminúria; a albuminúria é o maior preditor de progressão e de eventos cardiovasculares.</li>
<li>Primeira camada: bloqueio do SRAA em dose máxima, inibidor de SGLT2 (TFG de 20 ou mais) e estatina.</li>
<li>Segunda camada: finerenona para albuminúria residual; agonista de GLP-1 para meta glicêmica ou aterosclerose.</li>
<li>SGLT2 reduz hiperfiltração e progressão renal em 30 a 40%, independentemente da glicada; queda inicial da TFG é esperada.</li>
<li>Suspender SGLT2 em jejum, cirurgia e doença aguda; vigiar volume e infecção genital.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as três drogas da primeira camada de nefroproteção no diabético com albuminúria? <details><summary>Resposta</summary>Bloqueador do sistema renina-angiotensina em dose máxima, inibidor de SGLT2 e estatina.</details></li>
<li>Por que a queda inicial da TFG após o inibidor de SGLT2 não deve levar à suspensão? <details><summary>Resposta</summary>Porque reflete a redução da hiperfiltração glomerular, é hemodinâmica e benigna, e é seguida de declínio muito mais lento da função renal.</details></li>
<li>Até que TFG o inibidor de SGLT2 pode ser iniciado? <details><summary>Resposta</summary>Até 20 mL/min/1,73 m², podendo ser mantido abaixo disso até a diálise.</details></li>
</ol>
`,

"sirio2027#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a estratificação da Surviving Sepsis Campaign em choque, sepse provável e sepse possível.</li>
<li>Definir o tempo para o antibiótico em cada cenário e o papel da avaliação rápida.</li>
<li>Reconhecer as particularidades do cirrótico descompensado com suspeita de infecção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sepse</dt>
<dd>Disfunção orgânica com risco de vida causada por resposta desregulada à infecção; aumento de 2 pontos no SOFA.</dd>
<dt>Choque séptico</dt>
<dd>Sepse com necessidade de vasopressor para manter PAM de 65 e lactato acima de 2 mmol/L após reposição volêmica.</dd>
<dt>Sepse possível</dt>
<dd>Disfunção orgânica em que a infecção não está confirmada e há diferenciais não infecciosos plausíveis; avaliação rápida de até três horas antes do antibiótico, sem choque.</dd>
<dt>Peritonite bacteriana espontânea</dt>
<dd>Infecção da ascite sem foco cirúrgico, com 250 ou mais polimorfonucleares por mm³; principal infecção do cirrótico.</dd>
</dl>
<h4>O essencial</h4>
<p>A Surviving Sepsis Campaign de 2021 refinou o momento do antibiótico de acordo com a probabilidade de infecção e a gravidade. No <strong>choque séptico</strong> e na <strong>sepse provável</strong> (infecção evidente com disfunção), o antibiótico entra na <strong>primeira hora</strong>, porque cada hora de atraso aumenta a mortalidade.</p>
<p>A ressuscitação também foi matizada. Os <strong>30 mL/kg</strong> de cristaloide nas primeiras três horas valem para hipotensão ou lactato acima de 4 mmol/L, hoje como sugestão, com reavaliação dinâmica da resposta a volume; não são regra para quem não está hipotenso, e em cardiopatas e cirróticos com ascite a infusão às cegas congestiona.</p>
<p>O <strong>cirrótico</strong> descompensado é o exemplo da sepse possível: a encefalopatia, a taquicardia e a taquipneia podem vir de infecção (peritonite bacteriana espontânea, urinária, pneumonia, celulite), mas também de sangramento oculto, constipação, distúrbio eletrolítico, sedativos ou insuficiência hepática progressiva; a febre pode faltar, e a leucocitose é mascarada pelo hiperesplenismo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte duas coisas: há choque ou a infecção é evidente? Se sim, antibiótico em uma hora. Se a infecção é apenas possível e não há choque, investigue rápido (até três horas) e trate assim que confirmar. No cirrótico confuso com ascite, o exame que decide é a paracentese, e o soro de 30 mL/kg só se houver hipotensão ou lactato acima de 4.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Choque séptico ou sepse provável: antibiótico na primeira hora.</li>
<li>Sepse possível sem choque: avaliação rápida de até três horas para confirmar infecção e excluir diferenciais; antibiótico ao confirmar.</li>
<li>30 mL/kg para hipotensão ou lactato acima de 4, com reavaliação dinâmica; cautela em cardiopatas e cirróticos.</li>
<li>Lactato orienta, mas sua normalização rápida não é meta isolada; noradrenalina para PAM de 65.</li>
<li>Cirrótico com ascite e encefalopatia: paracentese imediata; 250 PMN ou mais indica ceftriaxona e albumina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que situação a Surviving Sepsis Campaign admite até três horas para iniciar o antibiótico? <details><summary>Resposta</summary>Na sepse possível sem choque, quando a infecção não está confirmada e há causas não infecciosas plausíveis, após avaliação rápida.</details></li>
<li>Para quem valem os 30 mL/kg de cristaloide nas primeiras três horas? <details><summary>Resposta</summary>Para pacientes com hipotensão ou lactato acima de 4 mmol/L, com reavaliação dinâmica da resposta a volume.</details></li>
<li>Qual exame é obrigatório no cirrótico com ascite admitido com encefalopatia e qual resultado define infecção? <details><summary>Resposta</summary>A paracentese diagnóstica; 250 ou mais polimorfonucleares por mm³ definem peritonite bacteriana espontânea.</details></li>
</ol>
`,

"sirio2027#4": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o edema agudo de pulmão hipertensivo como emergência hipertensiva com meta própria.</li>
<li>Prescrever vasodilatador venoso, diurético e ventilação não invasiva.</li>
<li>Diferenciar as metas pressóricas das principais emergências hipertensivas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Emergência hipertensiva</dt>
<dd>Pressão muito elevada com lesão aguda de órgão-alvo (encefalopatia, AVC, síndrome coronariana, edema agudo, dissecção, eclâmpsia, hipertensão maligna); exige droga venosa.</dd>
<dt>Edema agudo de pulmão hipertensivo</dt>
<dd>Insuficiência cardíaca aguda desencadeada por pico pressórico, com redistribuição de volume para o pulmão e fração de ejeção muitas vezes preservada.</dd>
<dt>Nitroglicerina venosa</dt>
<dd>Venodilatador em dose baixa e arteriodilatador em dose alta; droga de escolha no edema agudo, titulada de 10 a 200 mcg/min.</dd>
<dt>Ventilação não invasiva</dt>
<dd>CPAP ou BiPAP por máscara, que reduz pré e pós-carga, recruta alvéolos e diminui a necessidade de intubação.</dd>
</dl>
<h4>O essencial</h4>
<p>O edema agudo de pulmão hipertensivo é a forma mais dramática de insuficiência cardíaca aguda: um pico de pressão eleva a pós-carga de forma súbita, o ventrículo esquerdo, muitas vezes hipertrofiado e rígido, não consegue ejetar, a pressão de enchimento dispara e o líquido invade os alvéolos em minutos.</p>
<p>Por isso a meta pressórica difere das demais emergências. Na maioria delas (encefalopatia hipertensiva, hipertensão maligna) reduz-se a pressão média em 20 a 25% na primeira hora e gradualmente depois, para não causar isquemia; no AVC isquêmico tolera-se até 220 × 120 sem trombólise.</p>
<p>Completam o tratamento o <strong>diurético de alça</strong> venoso (furosemida 40 a 80 mg), que venodilata antes de diuresar, a posição sentada com as pernas pendentes, o oxigênio para saturação de 90 a 94% e a <strong>ventilação não invasiva</strong>, que reduz o trabalho respiratório, a pré-carga e a pós-carga e evita intubação; a morfina perdeu espaço por aumentar mortalidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Edema agudo com pressão de 230 × 130 é a exceção da regra dos 25%: a sistólica deve cair para menos de 140 na primeira hora, com nitroglicerina ou nitroprussiato, furosemida e máscara de ventilação não invasiva. Betabloqueador, hidralazina e morfina são os distratores; o benefício da ventilação não invasiva é hemodinâmico e respiratório, não anti-isquêmico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pico pressórico eleva a pós-carga, o ventrículo rígido falha e o pulmão inunda por redistribuição, não por excesso de volume.</li>
<li>Meta: sistólica abaixo de 140 mmHg na primeira hora (exceção à regra dos 20 a 25%).</li>
<li>Nitroglicerina venosa titulada, ou nitroprussiato; furosemida venosa; sentado com pernas pendentes; oxigênio para 90 a 94%.</li>
<li>Ventilação não invasiva reduz pré e pós-carga e intubação; morfina não é recomendada.</li>
<li>Betabloqueador contraindicado na fase aguda; hidralazina evitada; investigar a causa do pico após a estabilização.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a meta de pressão sistólica na primeira hora do edema agudo de pulmão hipertensivo? <details><summary>Resposta</summary>Abaixo de 140 mmHg, redução rápida que difere da regra dos 20 a 25% das outras emergências.</details></li>
<li>Qual é o vasodilatador de escolha e por que a hidralazina não serve? <details><summary>Resposta</summary>Nitroglicerina venosa titulada (ou nitroprussiato); a hidralazina causa taquicardia reflexa e tem efeito imprevisível e difícil de titular.</details></li>
<li>Qual é o benefício da ventilação não invasiva nesse cenário? <details><summary>Resposta</summary>Reduz pré-carga, pós-carga e trabalho respiratório, melhora a oxigenação e diminui a necessidade de intubação.</details></li>
</ol>
`,

"sirio2027#5": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Escolher o antibiótico empírico da sepse pelo foco, pelo Gram e pela história de resistência.</li>
<li>Entender o que são as ESBL e por que o carbapenêmico é a droga para infecções graves.</li>
<li>Conduzir a infecção de cateter de hemodiálise, incluindo a retirada do dispositivo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>ESBL</dt>
<dd>Beta-lactamases de espectro estendido, produzidas por E. coli e Klebsiella, que hidrolisam penicilinas, cefalosporinas de terceira e quarta geração e aztreonam, poupando carbapenêmicos.</dd>
<dt>Estudo MERINO</dt>
<dd>Ensaio que mostrou maior mortalidade em 30 dias com piperacilina-tazobactam do que com meropenem na bacteremia por E. coli e Klebsiella resistentes à ceftriaxona.</dd>
<dt>Infecção de corrente sanguínea relacionada a cateter</dt>
<dd>Bacteremia com o mesmo germe no cateter e no sangue periférico, com tempo de positividade do cateter pelo menos duas horas menor.</dd>
<dt>Descalonamento</dt>
<dd>Estreitar o antibiótico assim que a cultura e o antibiograma definem o agente, para reduzir pressão seletiva e toxicidade.</dd>
</dl>
<h4>O essencial</h4>
<p>O antibiótico empírico da sepse é escolhido em minutos com as informações disponíveis: o <strong>foco</strong> provável, o <strong>Gram</strong> de material acessível, a <strong>história de colonização ou infecção prévia</strong> por germes resistentes, as internações e antibióticos recentes, os dispositivos (cateteres, próteses) e a epidemiologia local.</p>
<p>As <strong>ESBL</strong> são enzimas plasmidiais, sobretudo CTX-M, cada vez mais comuns em E. coli e Klebsiella comunitárias e hospitalares, que inativam cefalosporinas de terceira e quarta geração; os inibidores clássicos de beta-lactamase (clavulanato, tazobactam) as inibem in vitro, mas na infecção grave, com inóculo alto e expressão variável, essa proteção falha.</p>
<p>A <strong>infecção de cateter de hemodiálise</strong> tem conduta própria.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente séptico com bastonetes gram-negativos e ESBL no histórico recebe meropenem, não piperacilina-tazobactam, cefepima ou ceftriaxona. Dialítico com pus no cateter e choque tem o cateter retirado. Se o Gram não mostrou cocos gram-positivos, a vancomicina pode ser suspensa cedo. Descalone quando a cultura chegar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Empírico pelo foco, Gram, colonização prévia, antibióticos recentes, dispositivos e epidemiologia local; acertar na primeira hora.</li>
<li>ESBL hidrolisam cefalosporinas de terceira e quarta geração; em infecção grave, carbapenêmico (MERINO: meropenem venceu piperacilina-tazobactam).</li>
<li>Fosfomicina e nitrofurantoína só para cistite por ESBL; carbapenemases exigem novos beta-lactâmicos.</li>
<li>Cateter de diálise infectado: hemoculturas pareadas, vancomicina mais cobertura gram-negativa; retirar em sepse grave, túnel, S. aureus, Pseudomonas, fungos, bacteremia persistente.</li>
<li>Tratar 7 a 14 dias após a retirada; 4 a 6 semanas se endocardite; ecocardiograma na bacteremia por S. aureus.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a piperacilina-tazobactam não é adequada à sepse por enterobactéria produtora de ESBL? <details><summary>Resposta</summary>Porque, apesar da sensibilidade in vitro, o estudo MERINO mostrou mortalidade três vezes maior do que com meropenem na bacteremia por esses germes.</details></li>
<li>Em quais situações o cateter de hemodiálise infectado deve ser retirado? <details><summary>Resposta</summary>Sepse grave, infecção de túnel, endocardite, tromboflebite séptica, bacteremia persistente após 72 horas e infecção por S. aureus, Pseudomonas, fungos ou micobactérias.</details></li>
<li>Que informação da história muda a escolha empírica para um carbapenêmico? <details><summary>Resposta</summary>Colonização ou infecção prévia por enterobactéria produtora de ESBL em paciente com infecção grave.</details></li>
</ol>
`,

"sirio2027#8": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome cardiopulmonar por hantavírus pela exposição e pela tríade laboratorial.</li>
<li>Explicar o extravasamento capilar e suas consequências hemodinâmicas.</li>
<li>Conduzir o suporte com restrição de volume, inotrópico precoce e ventilação protetora.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hantavírus</dt>
<dd>Vírus de RNA transmitido por aerossóis de urina, fezes e saliva de roedores silvestres; no Brasil, as variantes Araraquara e Juquitiba, com letalidade de 40 a 50%.</dd>
<dt>Fase prodrômica</dt>
<dd>Três a seis dias de febre, mialgia lombar, cefaleia, dor abdominal e vômitos, indistinguíveis de dengue ou leptospirose.</dd>
<dt>Fase cardiopulmonar</dt>
<dd>Edema pulmonar não cardiogênico de instalação rápida, com choque misto e depressão miocárdica; dura dois a quatro dias.</dd>
<dt>Tríade laboratorial</dt>
<dd>Plaquetopenia, hemoconcentração e imunoblastos acima de 10% dos linfócitos; mais leucocitose com desvio, hipoalbuminemia e DHL elevada.</dd>
</dl>
<h4>O essencial</h4>
<p>A hantavirose é zoonose rural: o vírus é eliminado por roedores silvestres e inalado em locais fechados com acúmulo de excretas, como <strong>silos, paióis, galpões e casas fechadas</strong>, o que torna agricultores, trabalhadores de limpeza rural e acampantes o grupo de risco.</p>
<p>A fisiopatologia é uma <strong>lesão endotelial funcional</strong>. O vírus infecta células endoteliais pela integrina β3 sem destruí-las; a resposta imune, com linfócitos T citotóxicos e citocinas (TNF, interleucinas), aumenta a permeabilidade capilar de forma difusa e intensa, sobretudo no pulmão.</p>
<p>Não há antiviral eficaz, e o tratamento é <strong>suporte intensivo precoce</strong>, de preferência em UTI antes do colapso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Trabalhador rural que limpou silo, com pródromo febril e insuficiência respiratória rápida, hematócrito alto, plaquetas baixas e imunoblastos: hantavirose. A pegadinha terapêutica é o volume: pouco soro, inotrópico e vasopressor cedo, ventilação protetora. Grandes expansões afogam o pulmão de um paciente cujo problema é vazamento, não falta de água.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Exposição a excretas de roedores em locais fechados; pródromo febril com mialgia lombar; fase cardiopulmonar em horas.</li>
<li>Tríade: plaquetopenia, hemoconcentração, imunoblastos acima de 10%; infiltrado bilateral com coração normal.</li>
<li>Extravasamento capilar por lesão endotelial imune, mais depressão miocárdica: choque misto com resistência alta.</li>
<li>Suporte: volume restritivo, inotrópico e vasopressor precoces, ventilação protetora, ECMO nos refratários; sem antiviral.</li>
<li>Notificação imediata; prevenção na limpeza de ambientes fechados; diferencial com leptospirose, dengue, influenza e febre maculosa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados laboratoriais compõem a tríade da síndrome cardiopulmonar por hantavírus? <details><summary>Resposta</summary>Plaquetopenia, hemoconcentração (hematócrito elevado) e imunoblastos acima de 10% dos linfócitos.</details></li>
<li>Por que a reposição volêmica deve ser restritiva na hantavirose? <details><summary>Resposta</summary>Porque o extravasamento capilar difuso leva o líquido infundido para o pulmão, agravando o edema; o choque tem componente cardiogênico que pede inotrópico.</details></li>
<li>Qual é o mecanismo da lesão endotelial na hantavirose? <details><summary>Resposta</summary>Alteração funcional da permeabilidade por citocinas e resposta imune após infecção do endotélio pela integrina β3, sem destruição celular.</details></li>
</ol>
`,

"sirio2027#9": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os sinais cardinais que definem caso de hanseníase.</li>
<li>Reconhecer a forma neural pura e a sequência de perda sensitiva.</li>
<li>Classificar em paucibacilar e multibacilar e conduzir os contatos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinais cardinais</dt>
<dd>Lesão de pele com alteração de sensibilidade; espessamento de nervo periférico com alteração sensitiva, motora ou autonômica; baciloscopia positiva. Um basta.</dd>
<dt>Hanseníase neural pura</dt>
<dd>Acometimento de um ou mais troncos nervosos sem lesão cutânea, com baciloscopia negativa; diagnóstico clínico, apoiado por ultrassom de nervo ou biópsia.</dd>
<dt>Classificação operacional</dt>
<dd>Paucibacilar: até cinco lesões e um tronco nervoso, baciloscopia negativa; multibacilar: mais de cinco lesões, mais de um nervo ou baciloscopia positiva.</dd>
<dt>Poliquimioterapia única</dt>
<dd>Rifampicina, dapsona e clofazimina para todos desde 2020: seis meses no paucibacilar, doze no multibacilar.</dd>
</dl>
<h4>O essencial</h4>
<p>O Brasil é o segundo país em casos novos de hanseníase, e o diagnóstico é <strong>clínico</strong>, feito na atenção primária pelo exame dermatoneurológico.</p>
<p>A <strong>forma neural pura</strong> representa 5 a 10% dos casos e é a que mais escapa: não há lesão cutânea, e o paciente chega com parestesias, dor neuropática, perda de sensibilidade em território de nervo e, mais tarde, fraqueza e garras. O exame procura o nervo espessado e doloroso à palpação e mapeia a sensibilidade com os monofilamentos de Semmes-Weinstein, que graduam da sensação leve (0,05 g) à perda da sensibilidade protetora (2 g, monofilamento lilás) e à anestesia.</p>
<p>Definido o caso, a classificação operacional separa paucibacilar e multibacilar, e o tratamento é a <strong>poliquimioterapia única</strong> com rifampicina mensal supervisionada, dapsona e clofazimina diárias, por seis ou doze meses.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Contato de hanseníase com nervo ulnar grosso e dolorido e perda de sensibilidade no quinto dedo tem hanseníase, mesmo sem mancha e com baciloscopia zero: é a forma neural pura, e o espessamento de nervo com déficit sensitivo é sinal cardinal suficiente. A sensibilidade tátil é a última a ir; a térmica é a primeira. Sorologia e PCR não entram na triagem de contatos do SUS.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Caso de hanseníase: um de três sinais cardinais (lesão com hipoestesia, nervo espessado com déficit, baciloscopia positiva); baciloscopia negativa não exclui.</li>
<li>Neural pura: nervo espessado e déficit sensitivo sem lesão de pele; monofilamentos mapeiam; térmica perde-se antes da dolorosa e da tátil.</li>
<li>Classificação: paucibacilar (até cinco lesões, um nervo) e multibacilar; poliquimioterapia única por seis ou doze meses.</li>
<li>Vigiar reações (tipo 1 com prednisona, tipo 2 com talidomida) e graduar incapacidade no diagnóstico e na alta.</li>
<li>Contatos: exame anual por cinco anos, BCG, rifampicina em dose única; notificação compulsória.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os três sinais cardinais da hanseníase e quantos são necessários? <details><summary>Resposta</summary>Lesão de pele com alteração de sensibilidade, espessamento de nervo com alteração sensitiva, motora ou autonômica, e baciloscopia positiva; um deles basta.</details></li>
<li>Qual é a ordem de perda das sensibilidades na hanseníase? <details><summary>Resposta</summary>Térmica, depois dolorosa e por último tátil.</details></li>
<li>Que medidas se aplicam aos contatos domiciliares de um caso novo? <details><summary>Resposta</summary>Exame dermatoneurológico anual por cinco anos, vacina BCG e rifampicina em dose única como quimioprofilaxia.</details></li>
</ol>
`,

"sirio2027#10": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a doença hepática esteatótica associada à disfunção metabólica e sua nova nomenclatura.</li>
<li>Estratificar o risco de fibrose em dois passos com FIB-4 e elastografia.</li>
<li>Tratar pelo peso, pelo diabetes e, na fibrose, com as drogas específicas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>MASLD</dt>
<dd>Esteatose hepática com pelo menos um critério cardiometabólico (obesidade, diabetes ou pré-diabetes, hipertensão, triglicerídeos altos, HDL baixo), sem álcool significativo; antiga NAFLD.</dd>
<dt>FIB-4</dt>
<dd>Idade × AST dividido por plaquetas × raiz de ALT; abaixo de 1,3 risco baixo, acima de 2,67 risco alto, entre eles indeterminado (cortes de 2,0 e 2,67 acima de 65 anos).</dd>
<dt>Elastografia transitória</dt>
<dd>Mede a rigidez hepática em kPa: abaixo de 8 afasta fibrose avançada; acima de 12 a 15 sugere fibrose avançada ou cirrose; e quantifica gordura pelo CAP.</dd>
<dt>Esteato-hepatite (MASH)</dt>
<dd>Esteatose com inflamação e balonização hepatocitária, forma progressiva que leva à fibrose, cirrose e carcinoma hepatocelular.</dd>
</dl>
<h4>O essencial</h4>
<p>A esteatose hepática metabólica atinge um terço dos adultos e dois terços dos diabéticos tipo 2, e é hoje a causa que mais cresce de cirrose e de transplante. A nomenclatura de 2023 trocou "não alcoólica" por <strong>"associada à disfunção metabólica"</strong> (MASLD), exigindo um critério cardiometabólico e abandonando o rótulo pela negativa; o consumo de 20 a 50 g de álcool por dia em quem tem critérios metabólicos define a forma combinada (MetALD).</p>
<p>Por isso as diretrizes propõem o rastreio de fibrose em <strong>dois passos</strong> para todo diabético tipo 2, obeso com comorbidade metabólica ou paciente com esteatose ou enzimas alteradas.</p>
<p>O tratamento tem uma base e camadas. A base é a <strong>perda de peso</strong>: 5% reduz a esteatose, 7 a 10% resolve a esteato-hepatite e acima de 10% regride a fibrose, com dieta mediterrânea, exercício e, quando indicada, cirurgia bariátrica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Obeso diabético com transaminases discretamente altas e FIB-4 entre 1,3 e 2,67 vai para a elastografia, não para tomografia, ultrassom nem biópsia direta. Guarde o que entra no FIB-4 (idade, AST, ALT, plaquetas) e o que não entra (GGT, fosfatase, albumina, protrombina). O que mata é a fibrose e o coração, não a gordura.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>MASLD: esteatose com critério cardiometabólico; a fibrose, não a gordura ou as transaminases, define o prognóstico.</li>
<li>Rastreio de fibrose em diabéticos, obesos com comorbidade e esteatose ou enzimas alteradas: FIB-4 primeiro.</li>
<li>FIB-4 abaixo de 1,3 segue na atenção primária; acima de 2,67 vai ao hepatologista; entre eles, elastografia.</li>
<li>Elastografia abaixo de 8 kPa tranquiliza; acima de 12 indica fibrose avançada; discordância pede biópsia.</li>
<li>Tratamento: perda de peso (7 a 10% resolve a esteato-hepatite), GLP-1, pioglitazona, SGLT2, resmetirom na fibrose F2 e F3; estatina para o coração.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que variáveis compõem o FIB-4? <details><summary>Resposta</summary>Idade, AST, ALT e contagem de plaquetas.</details></li>
<li>Qual é a conduta diante de FIB-4 entre 1,3 e 2,67? <details><summary>Resposta</summary>Segundo passo com elastografia (ou teste sérico patenteado) para confirmar ou afastar fibrose significativa; biópsia se discordante.</details></li>
<li>Quanto de perda de peso é necessário para resolver a esteato-hepatite e para regredir a fibrose? <details><summary>Resposta</summary>7 a 10% para a esteato-hepatite e acima de 10% para a fibrose.</details></li>
</ol>
`,

"sirio2027#11": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar a ferritina elevada com a saturação de transferrina e os marcadores inflamatórios.</li>
<li>Reconhecer a hiperferritinemia dismetabólica e suas causas não hemocromatóticas.</li>
<li>Investigar e tratar a hemocromatose hereditária quando a saturação está alta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ferritina</dt>
<dd>Proteína de armazenamento do ferro e reagente de fase aguda; sobe na inflamação, na esteatose, no álcool, na citólise e nas neoplasias, mesmo sem excesso de ferro.</dd>
<dt>Saturação de transferrina</dt>
<dd>Ferro sérico dividido pela capacidade total de ligação; acima de 45% é o gatilho para investigar sobrecarga; abaixo disso, sobrecarga é improvável.</dd>
<dt>Hemocromatose hereditária</dt>
<dd>Doença autossômica recessiva, em geral homozigose C282Y do gene HFE, com absorção intestinal de ferro aumentada por deficiência de hepcidina.</dd>
<dt>Ressonância hepática (R2* ou T2*)</dt>
<dd>Quantifica a concentração hepática de ferro sem biópsia; normal até cerca de 1,8 mg/g de peso seco.</dd>
</dl>
<h4>O essencial</h4>
<p>A ferritina elevada é um dos achados laboratoriais mais frequentes e, na maior parte das vezes, <strong>não significa sobrecarga de ferro</strong>. Como proteína de fase aguda, ela sobe na inflamação crônica de baixo grau da <strong>síndrome metabólica</strong> (obesidade central, resistência à insulina, esteatose hepática), no consumo de álcool, nas hepatopatias com citólise, nas infecções, nas neoplasias, nas doenças autoimunes e nas hemopatias.</p>
<p>O exame que separa os caminhos é a <strong>saturação de transferrina</strong>, de preferência em jejum.</p>
<p>Na <strong>hemocromatose confirmada</strong>, o tratamento é a <strong>flebotomia</strong> semanal de 450 a 500 mL até ferritina de 50 a 100 ng/mL, depois manutenção a cada dois a quatro meses, com rastreio de cirrose (elastografia, biópsia se ferritina acima de 1.000 ou transaminases altas), de carcinoma hepatocelular nos cirróticos, de diabetes, cardiomiopatia, hipogonadismo e artropatia, e aconselhamento dos parentes de primeiro grau com saturação, ferritina e genotipagem.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ferritina alta com saturação de transferrina abaixo de 45% em obeso diabético é inflamação metabólica, não hemocromatose: não peça o teste genético, não faça biópsia, não prescreva dieta sem ferro nem flebotomia. Saturação acima de 45% é o que abre a investigação do HFE. A ressonância normal sela a ausência de depósito.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ferritina é reagente de fase aguda; sobe na síndrome metabólica, álcool, citólise, infecção, neoplasia e autoimunidade sem excesso de ferro.</li>
<li>Saturação de transferrina abaixo de 45%: sobrecarga improvável; investigar causas inflamatórias e metabólicas; ressonância se dúvida.</li>
<li>Saturação acima de 45%: genotipagem HFE; homozigose C282Y confirma hemocromatose hereditária.</li>
<li>Hemocromatose: flebotomias até ferritina de 50 a 100, rastreio de cirrose e carcinoma, triagem familiar; evitar suplementos, vitamina C e álcool.</li>
<li>Hiperferritinemia dismetabólica: tratar a síndrome metabólica; flebotomia não indicada.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual exame distingue a hiperferritinemia inflamatória da sobrecarga de ferro? <details><summary>Resposta</summary>A saturação de transferrina: abaixo de 45% torna a sobrecarga improvável; acima de 45% indica investigar hemocromatose.</details></li>
<li>Quando se pede a pesquisa das mutações do gene HFE? <details><summary>Resposta</summary>Com saturação de transferrina acima de 45%, sobretudo se a ferritina também estiver elevada.</details></li>
<li>Qual é o tratamento da hemocromatose hereditária e sua meta? <details><summary>Resposta</summary>Flebotomias seriadas até ferritina de 50 a 100 ng/mL, seguidas de manutenção periódica.</details></li>
</ol>
`,

"sirio2027#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender os determinantes da oxigenação e da ventilação em pressão controlada.</li>
<li>Usar PEEP, tempo inspiratório e pressão média de vias aéreas para corrigir hipoxemia refratária.</li>
<li>Reconhecer e medir a auto-PEEP e aplicar a posição prona e a ECMO na SDRA grave.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pressão controlada (PCV)</dt>
<dd>Modo em que se fixa a pressão inspiratória e o tempo inspiratório; o volume corrente resulta da complacência e da resistência, com fluxo desacelerado.</dd>
<dt>Pressão média de vias aéreas</dt>
<dd>Média da pressão ao longo do ciclo; principal determinante da oxigenação; sobe com PEEP, pressão inspiratória e tempo inspiratório.</dd>
<dt>Auto-PEEP</dt>
<dd>Pressão alveolar residual ao fim da expiração por tempo expiratório insuficiente; medida pela pausa expiratória; causa hiperinsuflação, hipotensão e barotrauma.</dd>
<dt>Relação I:E invertida</dt>
<dd>Tempo inspiratório maior que o expiratório (1:1 a 2:1), estratégia de resgate que eleva a pressão média à custa de auto-PEEP.</dd>
</dl>
<h4>O essencial</h4>
<p>Na ventilação mecânica, dois objetivos se separam: a <strong>ventilação</strong> (remoção de CO2) depende do volume-minuto, isto é, de volume corrente e frequência; a <strong>oxigenação</strong> depende da FiO2 e da <strong>pressão média de vias aéreas</strong>, que mantém os alvéolos abertos e disponíveis para a troca.</p>
<p>No modo <strong>pressão controlada</strong>, o ventilador entrega uma pressão fixa durante um tempo inspiratório fixo, com fluxo desacelerado que distribui melhor o gás e costuma ser bem tolerado; o volume corrente é consequência: se a complacência cai, o volume cai, e a ventilação alveolar precisa ser vigiada pelo volume exalado e pela capnografia.</p>
<p>A <strong>posição prona</strong> por pelo menos 16 horas por dia, na SDRA com relação PaO2/FiO2 abaixo de 150 após 12 a 24 horas de ventilação otimizada, reduz a mortalidade e deve vir antes das manobras heroicas; o bloqueio neuromuscular por 48 horas ajuda nas assincronias graves.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipoxemia refratária em PCV: suba a pressão média (PEEP, tempo inspiratório), prone o paciente e lembre que o tempo inspiratório longo cobra em auto-PEEP, que se mede na pausa expiratória. Em PCV o que é fixo é a pressão; o volume muda com a complacência. Heliox é para asma e estenose, não para SDRA.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ventilação depende de volume-minuto; oxigenação depende de FiO2 e de pressão média de vias aéreas.</li>
<li>Protetora: 6 mL/kg predito, platô abaixo de 30, driving pressure abaixo de 15, PEEP titulada, hipercapnia permissiva.</li>
<li>Em PCV a pressão é fixa e o volume varia com a complacência; o fluxo desacelerado é bem tolerado.</li>
<li>Para oxigenar: mais PEEP, mais pressão inspiratória dentro do platô, tempo inspiratório maior (vigiar auto-PEEP pela pausa expiratória).</li>
<li>Prona 16 h/dia se PaO2/FiO2 abaixo de 150; bloqueio neuromuscular nas assincronias; ECMO na refratariedade; heliox não se aplica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o principal determinante da oxigenação na ventilação mecânica e como ele se eleva em PCV? <details><summary>Resposta</summary>A pressão média de vias aéreas, elevada por PEEP, pressão inspiratória e prolongamento do tempo inspiratório.</details></li>
<li>Qual é o risco de prolongar o tempo inspiratório e como se detecta? <details><summary>Resposta</summary>Auto-PEEP por tempo expiratório insuficiente, detectada pela pausa expiratória e pela curva de fluxo que não retorna a zero, com hipotensão e risco de barotrauma.</details></li>
<li>Quando a posição prona está indicada na SDRA? <details><summary>Resposta</summary>Com PaO2/FiO2 abaixo de 150 após 12 a 24 horas de ventilação protetora otimizada, por pelo menos 16 horas por dia.</details></li>
</ol>
`,

"sirio2027#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estratificar o risco cardiovascular perioperatório pelo tipo de cirurgia, pela clínica e pela capacidade funcional.</li>
<li>Usar o DASI e os biomarcadores em vez da impressão subjetiva.</li>
<li>Decidir sobre aspirina, betabloqueador, estatina e exames pré-operatórios de rotina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Risco cirúrgico</dt>
<dd>Baixo (abaixo de 1% de eventos cardíacos em 30 dias: catarata, mama, hérnia), intermediário (1 a 5%: abdominal, ortopédica maior, carótida) e alto (acima de 5%: aórtica, vascular periférica, pancreática).</dd>
<dt>DASI</dt>
<dd>Duke Activity Status Index, questionário de 12 atividades ponderadas; escore abaixo de 34 (cerca de 4 MET) identifica capacidade funcional reduzida e maior risco.</dd>
<dt>Índice de risco cardíaco revisado</dt>
<dd>Seis fatores (cirurgia de alto risco, coronariopatia, insuficiência cardíaca, AVC, insulina, creatinina acima de 2); dois ou mais indicam risco elevado.</dd>
<dt>Biomarcadores perioperatórios</dt>
<dd>NT-proBNP ou BNP antes da cirurgia e troponina de alta sensibilidade depois, em pacientes de risco, para detectar lesão miocárdica perioperatória.</dd>
</dl>
<h4>O essencial</h4>
<p>A avaliação perioperatória não busca "liberar" o paciente, e sim estimar e reduzir o risco.</p>
<p>Durante décadas a capacidade funcional foi estimada pela pergunta sobre escadas e MET, mas o estudo <strong>METS</strong>, com mais de 1.400 pacientes, mostrou que a <strong>avaliação subjetiva do médico</strong> não prediz complicações, enquanto o <strong>DASI</strong>, questionário estruturado que pontua atividades como subir escadas, correr distância curta, fazer trabalho pesado em casa e praticar esportes, previu morte e infarto em 30 dias; o <strong>NT-proBNP</strong> previu ainda melhor.</p>
<p>Quanto às medicações, as regras são claras. O <strong>betabloqueador</strong> em uso crônico é mantido (a suspensão provoca rebote e isquemia), mas não se inicia na véspera, pois a introdução aguda aumentou AVC e morte no POISE.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Coronariopata estável com boa capacidade funcional indo a cirurgia de risco intermediário: mantenha betabloqueador, aspirina e estatina, meça a capacidade com o DASI e não peça radiografia de rotina. Suspender betabloqueador ou aspirina de prevenção secundária e iniciar betabloqueador na véspera são os erros que as diretrizes condenam.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Três eixos: risco da cirurgia, condição clínica ativa e capacidade funcional; testes só se mudarem conduta.</li>
<li>DASI (corte 34) substitui a estimativa subjetiva; NT-proBNP pré e troponina pós-operatória em pacientes de risco.</li>
<li>Betabloqueador crônico mantido, nunca iniciado na véspera; estatina mantida; aspirina de prevenção secundária mantida salvo neurocirurgia e próstata.</li>
<li>IECA/BRA podem pausar 24 h antes; SGLT2 três dias antes; metformina no dia.</li>
<li>Sem radiografia, ECG, coagulograma ou laboratório de rotina sem indicação clínica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o DASI é preferido à estimativa clínica da capacidade funcional? <details><summary>Resposta</summary>Porque o estudo METS mostrou que a impressão subjetiva não prediz complicações, enquanto o DASI previu morte e infarto em 30 dias.</details></li>
<li>O que fazer com o betabloqueador e a aspirina de um coronariopata estável antes de uma colectomia? <details><summary>Resposta</summary>Manter ambos; suspender o betabloqueador causa rebote e isquemia, e a aspirina de prevenção secundária só é suspensa em cirurgias de risco hemorrágico crítico.</details></li>
<li>Em quem se recomenda o NT-proBNP pré-operatório? <details><summary>Resposta</summary>Em pacientes com 65 anos ou mais, ou com doença cardiovascular ou fatores de risco, antes de cirurgias de risco intermediário ou alto.</details></li>
</ol>
`,

"sirio2027#15": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a rinossinusite crônica e distinguir a forma com pólipos.</li>
<li>Aplicar os degraus de tratamento do EPOS 2020.</li>
<li>Reconhecer as associações com asma e intolerância a anti-inflamatórios e as indicações de imagem e cirurgia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Rinossinusite crônica</dt>
<dd>Dois ou mais sintomas (obstrução, rinorreia anterior ou posterior, dor ou pressão facial, hiposmia) por mais de 12 semanas, com um deles sendo obstrução ou rinorreia, e sinais endoscópicos ou tomográficos.</dd>
<dt>Pólipos nasais</dt>
<dd>Massas edematosas pálidas e translúcidas do meato médio, bilaterais, de inflamação tipo 2 com eosinófilos; causam hiposmia precoce.</dd>
<dt>Doença respiratória exacerbada por aspirina</dt>
<dd>Tríade de asma, polipose nasal e reações respiratórias a anti-inflamatórios inibidores de COX-1; forma grave e recidivante.</dd>
<dt>Biológicos anti-tipo 2</dt>
<dd>Dupilumabe (anti-IL-4Rα), mepolizumabe (anti-IL-5) e omalizumabe (anti-IgE), para polipose grave não controlada após cirurgia e corticoide.</dd>
</dl>
<h4>O essencial</h4>
<p>A rinossinusite crônica afeta 5 a 12% dos adultos e se divide em <strong>com</strong> e <strong>sem pólipos</strong>, hoje reclassificadas pelo endótipo: a forma com pólipos é, na maioria, inflamação <strong>tipo 2</strong>, com eosinófilos, IL-4, IL-5 e IL-13, e por isso se associa à <strong>asma</strong> (em 40 a 60%), à intolerância a anti-inflamatórios e à boa resposta a corticoide.</p>
<p>O tratamento segue degraus.</p>
<p>A <strong>tomografia</strong> de seios da face é indicada para planejar cirurgia, quando há falha do tratamento clínico por três meses ou quando surgem sinais de alarme (dor intensa, edema periorbitário, diplopia, sinais neurológicos, epistaxe); não é pré-requisito para começar o tratamento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Asmático com nariz entupido dos dois lados há meses, sem cheiro e com massas pálidas no meato médio: polipose nasal, e o primeiro passo é soro em alto volume e corticoide tópico contínuo. Tomografia é para planejar cirurgia ou com alarme; antibiótico e anti-histamínico não tratam pólipo; biológico é o último degrau. Pólipo de um lado só é outra história.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rinossinusite crônica: sintomas por mais de 12 semanas; a forma com pólipos é inflamação tipo 2, com hiposmia e associação com asma.</li>
<li>Primeiro degrau: lavagem salina de alto volume e corticoide intranasal contínuo.</li>
<li>Segundo: curso curto de corticoide oral; anti-histamínico só com rinite alérgica; antibiótico não trata.</li>
<li>Tomografia para planejar cirurgia, falha de três meses ou sinais de alarme; cirurgia endoscópica seguida de tópico.</li>
<li>Biológicos (dupilumabe) na doença grave recidivante com asma ou intolerância à aspirina; pólipo unilateral exige biópsia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o tratamento de primeira linha da rinossinusite crônica com pólipos? <details><summary>Resposta</summary>Lavagem nasal de alto volume com solução salina e corticoide intranasal em uso contínuo.</details></li>
<li>Quando a tomografia de seios da face está indicada? <details><summary>Resposta</summary>Para planejar cirurgia, após falha do tratamento clínico por cerca de três meses, ou diante de sinais de alarme como edema periorbitário, diplopia ou sinais neurológicos.</details></li>
<li>Que condições se associam à polipose nasal e indicam inflamação tipo 2? <details><summary>Resposta</summary>Asma, eosinofilia e a doença respiratória exacerbada por aspirina.</details></li>
</ol>
`,

"sirio2027#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a endocardite infecciosa subaguda e aplicar os critérios de Duke-ISCVID.</li>
<li>Separar os fenômenos vasculares dos imunológicos e entender sua fisiopatologia.</li>
<li>Investigar a endocardite com hemoculturas negativas e iniciar o tratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios de Duke-ISCVID 2023</dt>
<dd>Maiores: microbiológico e de imagem (ecocardiograma, PET-CT, tomografia cardíaca); menores: predisposição, febre, fenômenos vasculares e imunológicos.</dd>
<dt>Fenômenos vasculares</dt>
<dd>Êmbolos arteriais, aneurismas micóticos, hemorragias conjuntivais e lesões de Janeway (máculas indolores palmoplantares).</dd>
<dt>Fenômenos imunológicos</dt>
<dd>Glomerulonefrite, nódulos de Osler (dolorosos, nas polpas digitais), manchas de Roth (exsudato retiniano com centro pálido e halo hemorrágico), fator reumatoide positivo.</dd>
<dt>Endocardite com cultura negativa</dt>
<dd>5 a 10% dos casos: antibiótico prévio, HACEK, Coxiella, Bartonella, Brucella e fungos.</dd>
</dl>
<h4>O essencial</h4>
<p>A endocardite infecciosa subaguda, em geral por estreptococos do grupo viridans ou enterococos sobre valva previamente lesada, se arrasta por semanas com febre baixa, sudorese, emagrecimento, mialgia e artralgia, anemia de doença crônica, esplenomegalia e um <strong>sopro novo ou modificado</strong>, muitas vezes de regurgitação; o paciente passa por várias consultas e recebe antibióticos curtos que negativam as culturas sem curar.</p>
<p>Os sinais periféricos se dividem por mecanismo.</p>
<p>Quando as hemoculturas permanecem negativas, a investigação segue com culturas prolongadas, sorologias para <strong>Coxiella burnetii</strong> (febre Q, com fase I acima de 1:800), <strong>Bartonella</strong> e <strong>Brucella</strong>, PCR de sangue e, após cirurgia, PCR da valva, lembrando de fungos em usuários de drogas e próteses.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Febre prolongada, sopro novo, baço palpável, nódulos dolorosos nos dedos, manchas de Roth, hematúria dismórfica e fator reumatoide alto é endocardite subaguda, mesmo com culturas negativas. Separe: Janeway é indolor e embólica; Osler e Roth são dolorosos ou retinianos e imunológicos. Peça três pares de hemoculturas, ecocardiograma e sorologias de Coxiella, Bartonella e Brucella antes de pensar em lúpus.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Subaguda: febre arrastada, anemia, esplenomegalia e sopro novo; três pares de hemoculturas e ecocardiograma.</li>
<li>Vasculares (embólicos): infartos, aneurismas micóticos, hemorragias em estilha e conjuntivais, lesões de Janeway indolores.</li>
<li>Imunológicos (imunocomplexos): nódulos de Osler dolorosos, manchas de Roth, glomerulonefrite, fator reumatoide positivo.</li>
<li>Cultura negativa: antibiótico prévio, HACEK, Coxiella, Bartonella, Brucella, fungos; sorologias e PCR.</li>
<li>Tratamento de quatro a seis semanas; cirurgia na insuficiência cardíaca, infecção não controlada e embolia recorrente; profilaxia só no alto risco.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a diferença de mecanismo entre as lesões de Janeway e os nódulos de Osler? <details><summary>Resposta</summary>Janeway são microabscessos embólicos indolores nas palmas e plantas; Osler são nódulos dolorosos nas polpas digitais por vasculite de imunocomplexos.</details></li>
<li>Que exames se pedem quando as hemoculturas da endocardite permanecem negativas? <details><summary>Resposta</summary>Culturas prolongadas, sorologias para Coxiella, Bartonella e Brucella, PCR de sangue e, se operado, PCR da valva.</details></li>
<li>Quais são as indicações de cirurgia na endocardite? <details><summary>Resposta</summary>Insuficiência cardíaca por disfunção valvar, infecção não controlada (abscesso, fístula, bacteremia persistente, fungos) e prevenção de embolia em vegetação grande com evento embólico.</details></li>
</ol>
`,

"sirio2027#17": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer os efeitos adversos e as precauções dos agonistas de GLP-1 e do duplo agonista GIP/GLP-1.</li>
<li>Explicar a piora precoce da retinopatia com a queda rápida da glicada.</li>
<li>Manejar retitulação após doses perdidas, hipoglicemia por sulfonilureia, litíase biliar e perioperatório.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tirzepatida</dt>
<dd>Agonista duplo de GIP e GLP-1, semanal, titulado de 2,5 a 15 mg; perda de peso de 15 a 20% e glicada −2 pontos.</dd>
<dt>Piora precoce da retinopatia</dt>
<dd>Progressão transitória da retinopatia nos primeiros meses de queda rápida da glicada em quem já tem retinopatia.</dd>
<dt>Retitulação</dt>
<dd>Após três ou mais doses semanais perdidas, reiniciar em dose menor e subir de novo.</dd>
<dt>Suspensão perioperatória</dt>
<dd>Interromper a dose semanal uma semana antes de anestesia ou sedação, pelo risco de aspiração.</dd>
</dl>
<h4>O essencial</h4>
<p>Os agonistas de GLP-1 (liraglutida, dulaglutida, semaglutida) e a tirzepatida mudaram o tratamento do diabetes tipo 2 e da obesidade: reduzem a glicada em 1,5 a 2,5 pontos sem hipoglicemia intrínseca, promovem perda de peso expressiva e, vários deles, reduzem eventos cardiovasculares e renais.</p>
<p>A <strong>retina</strong> merece atenção.</p>
<p>Outros cuidados práticos: a <strong>hipoglicemia</strong> surge quando o agonista é combinado com sulfonilureia ou insulina, e a conduta é reduzir ou suspender essas drogas, não o agonista; a perda de peso rápida aumenta a <strong>litíase biliar</strong> e a colecistite, e cólica em hipocôndrio direito pede ultrassom; a <strong>pancreatite</strong> é rara, e a elevação assintomática de lipase ou amilase não indica suspender; a droga é contraindicada na história pessoal ou familiar de carcinoma medular de tireoide e na neoplasia endócrina múltipla tipo 2; na gestação é suspensa; reações no local da injeção são benignas; e a perda de massa magra pede proteína e exercício resistido.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabético que derrubou a glicada de 9 para 6,5 em poucos meses e perdeu a visão de um olho: pense em piora precoce da retinopatia e mande ao oftalmologista. Tremores antes das refeições são a sulfonilureia, que deve cair; dor biliar pede ultrassom; a cirurgia marcada exige suspender a injeção uma semana antes; e após três semanas sem dose, recomece baixo e titule.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Agonistas de GLP-1 e tirzepatida: glicada −1,5 a −2,5, perda de peso de 10 a 20%, benefício cardiovascular e renal, sem hipoglicemia intrínseca.</li>
<li>Náuseas dose-dependentes: titular devagar; após três doses semanais perdidas, reiniciar em dose menor.</li>
<li>Queda rápida da glicada pode piorar retinopatia prévia nos primeiros meses: fundo de olho antes e durante; reduzir gradualmente.</li>
<li>Hipoglicemia vem da sulfonilureia ou insulina associadas: reduzi-las; litíase biliar com perda de peso rápida; lipase alta assintomática não suspende.</li>
<li>Suspender uma semana antes de anestesia; contraindicado no carcinoma medular de tireoide e na gestação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a redução rápida da glicada pode piorar a retinopatia diabética? <details><summary>Resposta</summary>Porque a normalização abrupta da glicose altera o fluxo retiniano e agrava transitoriamente o edema macular e a retinopatia proliferativa em quem já tem retinopatia, com benefício a longo prazo.</details></li>
<li>Como retomar a tirzepatida após três ou mais doses semanais perdidas? <details><summary>Resposta</summary>Reiniciando em dose menor e titulando de novo, para evitar náuseas, vômitos e desidratação.</details></li>
<li>Qual é a conduta diante de hipoglicemias em paciente que usa tirzepatida com gliclazida? <details><summary>Resposta</summary>Reduzir ou suspender a sulfonilureia, mantendo o agonista, que não causa hipoglicemia por si.</details></li>
</ol>
`,

"sirio2027#18": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a apresentação do linfoma de Hodgkin e definir os sintomas B.</li>
<li>Descrever a histologia, os subtipos e a associação com o vírus Epstein-Barr.</li>
<li>Conduzir o diagnóstico por biópsia excisional, o estadiamento e as linhas gerais do tratamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Células de Reed-Sternberg</dt>
<dd>Células B grandes e binucleadas, CD30 e CD15 positivas; minoria da celularidade do tumor.</dd>
<dt>Sintomas B</dt>
<dd>Febre acima de 38 ºC, sudorese noturna profusa e perda de mais de 10% do peso em seis meses; prurido não entra.</dd>
<dt>Estadiamento de Ann Arbor / Lugano</dt>
<dd>I: uma região; II: duas ou mais do mesmo lado do diafragma; III: ambos os lados; IV: extralinfático difuso.</dd>
<dt>Subtipos clássicos</dt>
<dd>Esclerose nodular (mais comum, jovens), celularidade mista (EBV, HIV), rico em linfócitos e depleção linfocitária.</dd>
</dl>
<h4>O essencial</h4>
<p>O linfoma de Hodgkin tem distribuição bimodal (20 a 30 anos e após 55) e apresentação característica: <strong>linfonodomegalia indolor</strong>, fibroelástica, de crescimento progressivo, em cadeias <strong>cervicais, supraclaviculares e mediastinais</strong>, com disseminação <strong>contígua</strong> de uma cadeia à vizinha, ao contrário dos linfomas não Hodgkin, que saltam regiões.</p>
<p>A <strong>histologia</strong> é peculiar: as células malignas, de <strong>Reed-Sternberg</strong> e suas variantes (lacunares na esclerose nodular, mononucleares), são derivadas de células B do centro germinativo que perderam o programa B, e correspondem a <strong>menos de 1 a 5%</strong> do tecido; o restante é um <strong>infiltrado reativo</strong> de linfócitos T, eosinófilos, histiócitos, plasmócitos e fibrose, atraído por citocinas (IL-5, IL-13, CCL17) secretadas pelo tumor.</p>
<p>O estadiamento por PET-CT (Lugano) e a presença de fatores de risco (massa volumosa, VHS alta, mais de três cadeias, sintomas B, extralinfático) definem o tratamento: nos estágios iniciais, ABVD por dois a quatro ciclos com ou sem radioterapia de campo envolvido; nos avançados, ABVD por seis ciclos ou BEACOPP escalonado, hoje com a opção de brentuximabe-vedotina (anti-CD30) associado, e o PET interino após dois ciclos guia a desescalada ou a intensificação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem com gânglio cervical e massa mediastinal, suor noturno e perda de mais de 10% do peso é Hodgkin até a biópsia dizer o contrário, e a biópsia é excisional, nunca por agulha fina. Lembre que as células de Reed-Sternberg são poucas num mar reativo, que a celularidade mista é o subtipo do EBV e que os sintomas B são três, sem prurido.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Linfonodomegalia indolor cervical e mediastinal, contígua; sintomas B estritos.</li>
<li>Reed-Sternberg é minoria num infiltrado reativo; biópsia excisional obrigatória.</li>
<li>Esclerose nodular é o mais comum e tem pouco EBV; celularidade mista é o do EBV e do HIV.</li>
<li>PET-CT estadia; ABVD com ou sem radioterapia nos iniciais, ABVD ou BEACOPP nos avançados; PET interino guia.</li>
<li>Cura acima de 80%; vigiar toxicidades tardias; resgate com transplante autólogo e anti-PD-1.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os sintomas B e qual é o corte de perda de peso? <details><summary>Resposta</summary>Febre acima de 38 ºC sem causa, sudorese noturna profusa e perda não intencional de mais de 10% do peso em seis meses.</details></li>
<li>Por que a punção aspirativa não serve para diagnosticar o linfoma de Hodgkin? <details><summary>Resposta</summary>Porque as células de Reed-Sternberg são menos de 5% do tecido e o diagnóstico depende da arquitetura e do infiltrado reativo, exigindo biópsia excisional.</details></li>
<li>Qual subtipo do Hodgkin clássico tem maior associação com o vírus Epstein-Barr? <details><summary>Resposta</summary>A celularidade mista, sobretudo em crianças, idosos, países em desenvolvimento e portadores de HIV.</details></li>
</ol>
`,

"sirio2027#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer as síndromes tóxicas pelo exame físico e identificar a intoxicação por barbitúricos.</li>
<li>Aplicar as medidas de descontaminação e de eliminação aumentada, incluindo o carvão em doses múltiplas.</li>
<li>Saber quando usar e quando evitar os antídotos flumazenil e naloxona.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome sedativo-hipnótica</dt>
<dd>Rebaixamento, bradipneia, hipotensão, hipotermia e hiporreflexia, com pupilas em geral normais ou pouco reativas; benzodiazepínicos, barbitúricos, álcool.</dd>
<dt>Bolhas de coma</dt>
<dd>Bolhas tensas e estéreis em áreas de pressão, por isquemia cutânea e toxicidade direta, clássicas dos barbitúricos, mas vistas também em outros comas prolongados.</dd>
<dt>Carvão ativado em doses múltiplas</dt>
<dd>0,5 g/kg a cada 4 horas após a dose inicial de 1 g/kg, com via aérea protegida; indicado para fenobarbital, carbamazepina, teofilina, dapsona e quinina.</dd>
<dt>Alcalinização urinária</dt>
<dd>Bicarbonato venoso para pH urinário de 7,5 a 8, que ioniza ácidos fracos (fenobarbital, salicilato) e impede sua reabsorção tubular.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante do paciente intoxicado inconsciente, o exame físico organiza a suspeita em <strong>síndromes tóxicas</strong>.</p>
<p>O tratamento é, antes de tudo, <strong>suporte</strong>: via aérea e ventilação (intubação no coma com hipoventilação), volume e vasopressor para a hipotensão, aquecimento, correção metabólica. A <strong>descontaminação</strong> com carvão ativado em dose única (1 g/kg) vale na primeira hora, com via aérea protegida; a lavagem gástrica tem indicação rara. A <strong>eliminação aumentada</strong> depende da farmacocinética.</p>
<p>Os <strong>antídotos</strong> têm indicações específicas. A <strong>naloxona</strong> reverte opioides e é segura; o <strong>flumazenil</strong> reverte benzodiazepínicos, mas é raramente indicado na intoxicação intencional, porque precipita convulsões em usuários crônicos e em coingestão com tricíclicos, cocaína ou pró-convulsivantes; nenhum dos dois age nos barbitúricos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Coma com bradipneia, hipotensão, hipotermia, pupilas reativas, ECG normal e bolhas nos calcanhares é fenobarbital: suporte, intubação, carvão ativado em doses múltiplas e alcalinização da urina. Flumazenil e naloxona não funcionam aqui, acidificar a urina é erro, e o painel urinário não guia dose de nada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Síndromes tóxicas pelo exame: simpaticomimética, anticolinérgica, colinérgica, opioide, sedativo-hipnótica; barbitúrico é sedativo com hipotermia e bolhas.</li>
<li>Suporte primeiro: via aérea, ventilação, volume, aquecimento; glicemia, ECG, paracetamol e salicilato em todos.</li>
<li>Carvão em dose única na primeira hora; em doses múltiplas para fenobarbital, carbamazepina, teofilina, dapsona e quinina, com via aérea protegida.</li>
<li>Alcalinização urinária para fenobarbital e salicilato; hemodiálise nos casos graves.</li>
<li>Naloxona para opioides; flumazenil raramente, nunca com pró-convulsivantes; nenhum age em barbitúricos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado cutâneo sugere intoxicação por barbitúricos? <details><summary>Resposta</summary>Bolhas tensas e estéreis nas áreas de pressão, como calcanhares e joelhos, as "bolhas de coma".</details></li>
<li>Para quais tóxicos o carvão ativado em doses múltiplas está indicado? <details><summary>Resposta</summary>Fenobarbital, carbamazepina, teofilina, dapsona e quinina, desde que a via aérea esteja protegida.</details></li>
<li>Por que o flumazenil é evitado na maioria das intoxicações intencionais? <details><summary>Resposta</summary>Porque pode precipitar convulsões em usuários crônicos de benzodiazepínicos e em coingestões com drogas pró-convulsivantes, como os tricíclicos.</details></li>
</ol>
`,

/* --- Volume 2 · Clínica Médica · UNESP 2025 (cm81–cm90) ------------------------------- */
"unesp2025#41": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a hemorragia varicosa aguda em suas três frentes: vasoativo, endoscopia e antibiótico.</li>
<li>Definir a duração do vasoconstritor e o momento da transição para a profilaxia secundária.</li>
<li>Reconhecer as indicações de TIPS precoce e de resgate.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Terlipressina e octreotida</dt>
<dd>Vasoconstritores esplâncnicos que reduzem o fluxo portal; iniciados à suspeita e mantidos por 2 a 5 dias.</dd>
<dt>Profilaxia antibiótica</dt>
<dd>Ceftriaxona 1 g/dia por até 7 dias em todo cirrótico com hemorragia digestiva; reduz infecção, ressangramento e morte.</dd>
<dt>Profilaxia secundária</dt>
<dd>Betabloqueador não seletivo (carvedilol preferido) associado a ligadura elástica seriada até a erradicação das varizes.</dd>
<dt>TIPS precoce</dt>
<dd>Derivação portossistêmica em até 72 horas para Child C até 13 pontos ou Child B com sangramento ativo; reduz falha e mortalidade.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia varicosa é a complicação mais letal da hipertensão portal, com mortalidade de 15 a 20% em seis semanas, e o atendimento precisa correr em paralelo.</p>
<p>A <strong>endoscopia</strong> em até 12 horas confirma a fonte e trata: ligadura elástica das varizes esofágicas, cianoacrilato nas gástricas. Depois dela, o vasoconstritor é <strong>mantido por 2 a 5 dias</strong>, janela de maior risco de ressangramento precoce, e o antibiótico completa até 7 dias.</p>
<p>Controlado o episódio, começa a <strong>profilaxia secundária</strong>, porque dois terços ressangram em um ano sem ela: <strong>betabloqueador não seletivo</strong> (carvedilol até 12,5 mg/dia, ou propranolol titulado para frequência de 55 a 60), iniciado assim que o vasoconstritor é suspenso e a hemodinâmica permite, associado a <strong>sessões de ligadura</strong> a cada duas a quatro semanas até a erradicação, com endoscopias de controle. O betabloqueador reduz a pressão portal e previne também a ascite e a peritonite bacteriana espontânea; é suspenso temporariamente na hipotensão, na lesão renal aguda e na peritonite com instabilidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cirrótico que sangrou por varizes: vasoconstritor e antibiótico antes da endoscopia, ligadura na endoscopia, vasoconstritor por 2 a 5 dias e antibiótico por até 7, e betabloqueador não seletivo com ligaduras seriadas depois. Antibiótico é para todos, com ou sem ascite; betabloqueador não substitui o vasoconstritor na fase aguda; Child C sangrando pensa em TIPS precoce.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Chegada: acessos, hemoglobina alvo de 7 a 8, via aérea, vasoconstritor e ceftriaxona antes da endoscopia; lactulose.</li>
<li>Endoscopia em 12 h: ligadura das esofágicas, cianoacrilato nas gástricas.</li>
<li>Vasoconstritor por 2 a 5 dias; antibiótico por até 7 dias, em todo cirrótico que sangra.</li>
<li>TIPS precoce (72 h) em Child C 10 a 13 ou Child B com sangramento ativo; resgate na falha.</li>
<li>Profilaxia secundária: carvedilol ou propranolol mais ligaduras seriadas até erradicar; só então alta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por quanto tempo o vasoconstritor esplâncnico é mantido após a hemorragia varicosa? <details><summary>Resposta</summary>De 2 a 5 dias, período de maior risco de ressangramento precoce.</details></li>
<li>O antibiótico profilático na hemorragia varicosa depende da presença de ascite? <details><summary>Resposta</summary>Não; é indicado para todo cirrótico com hemorragia digestiva, porque reduz infecção, ressangramento e mortalidade.</details></li>
<li>Em que consiste a profilaxia secundária após o primeiro sangramento varicoso? <details><summary>Resposta</summary>Betabloqueador não seletivo (carvedilol ou propranolol) associado a sessões de ligadura elástica até a erradicação das varizes.</details></li>
</ol>
`,

"unesp2025#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios de Light e reconhecer suas limitações.</li>
<li>Usar o gradiente de albumina e de proteínas e o NT-proBNP do líquido no cardiopata em diurético.</li>
<li>Organizar a análise do líquido pleural conforme a hipótese clínica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios de Light</dt>
<dd>Exsudato se proteína pleural/sérica acima de 0,5, DHL pleural/sérica acima de 0,6 ou DHL pleural acima de dois terços do limite superior sérico; sensibilidade de 98% para exsudato.</dd>
<dt>Gradiente de albumina soro-líquido</dt>
<dd>Albumina sérica menos albumina pleural; acima de 1,2 g/dL indica transudato, mesmo quando Light aponta exsudato.</dd>
<dt>Gradiente de proteínas</dt>
<dd>Proteína sérica menos pleural acima de 3,1 g/dL também indica transudato no paciente em diurético.</dd>
<dt>NT-proBNP pleural</dt>
<dd>Acima de 1.500 pg/mL aponta para derrame de origem cardíaca; correlaciona-se com o sérico.</dd>
</dl>
<h4>O essencial</h4>
<p>O primeiro passo na análise do derrame pleural é separar <strong>transudato</strong> (desequilíbrio de pressões: insuficiência cardíaca, cirrose, síndrome nefrótica, diálise peritoneal, hipoalbuminemia) de <strong>exsudato</strong> (doença da pleura: infecção, neoplasia, embolia, colagenoses, pancreatite). Os <strong>critérios de Light</strong> fazem isso com três relações, e basta uma positiva para rotular exsudato.</p>
<p>Quando a clínica sugere insuficiência cardíaca e os critérios dizem exsudato, aplicam-se testes de segunda linha.</p>
<p>Confirmado o exsudato, a análise segue pela hipótese: celularidade (neutrófilos nas infecções agudas, linfócitos em tuberculose e neoplasia, eosinófilos em sangue e ar), glicose (abaixo de 60 em empiema, artrite reumatoide, tuberculose e neoplasia), pH (abaixo de 7,2 indica drenagem no parapneumônico), adenosina desaminase (acima de 40 U/L em linfocitário sugere tuberculose), citologia oncótica, cultura, triglicerídeos (acima de 110 no quilotórax) e amilase (pancreatite, rotura de esôfago).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cardiopata em furosemida com derrame que Light chama de exsudato: antes de sair caçando câncer, calcule o gradiente de albumina; acima de 1,2 é transudato e o problema é o coração. A indicação do gradiente é o diurético, não a idade, o diabetes ou a suspeita de neoplasia, que pedem citologia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Light separa transudato de exsudato com três relações; sensível para exsudato, mas erra 25% dos transudatos cardíacos em diurético.</li>
<li>Gradiente de albumina acima de 1,2 g/dL ou de proteínas acima de 3,1 g/dL reclassifica como transudato.</li>
<li>NT-proBNP pleural acima de 1.500 pg/mL confirma origem cardíaca.</li>
<li>Transudatos: insuficiência cardíaca, cirrose, nefrótica, diálise; exsudatos: infecção, neoplasia, embolia, colagenoses.</li>
<li>No exsudato, celularidade, glicose, pH, ADA, citologia e cultura orientam; toracoscopia nos linfocitários sem diagnóstico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que os critérios de Light erram no cardiopata em uso de diurético? <details><summary>Resposta</summary>Porque a diurese retira água do líquido pleural mais rápido que proteína e DHL, concentrando-as e elevando as relações para a faixa de exsudato.</details></li>
<li>Qual gradiente de albumina indica transudato? <details><summary>Resposta</summary>Albumina sérica menos pleural acima de 1,2 g/dL.</details></li>
<li>Que marcador do líquido pleural confirma a origem cardíaca do derrame? <details><summary>Resposta</summary>NT-proBNP pleural acima de 1.500 pg/mL.</details></li>
</ol>
`,

"unesp2025#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar eletroforese de proteínas, imunofixação e cadeias leves livres.</li>
<li>Diferenciar gamopatia monoclonal de significado indeterminado, mieloma indolente e mieloma múltiplo.</li>
<li>Reconhecer a imunodeficiência secundária às discrasias plasmocitárias.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Gamopatia monoclonal</dt>
<dd>Produção de imunoglobulina ou cadeia leve única por um clone de plasmócitos; abrange GMSI, mieloma indolente, mieloma múltiplo, amiloidose AL e Waldenström.</dd>
<dt>Relação kappa/lambda</dt>
<dd>Normal entre 0,26 e 1,65; alterada indica clonalidade, mesmo sem pico na eletroforese (mieloma de cadeia leve, não secretor).</dd>
<dt>Critérios CRAB</dt>
<dd>Hipercalcemia, insuficiência renal, anemia e lesões ósseas líticas: lesão de órgão que define mieloma múltiplo sintomático.</dd>
<dt>Critérios SLiM</dt>
<dd>Plasmócitos medulares de 60% ou mais, relação de cadeias leves envolvida/não envolvida de 100 ou mais, mais de uma lesão focal na ressonância; definem mieloma mesmo sem CRAB.</dd>
</dl>
<h4>O essencial</h4>
<p>Na produção normal de anticorpos, milhares de clones secretam imunoglobulinas com cadeias leves kappa e lambda em proporção estável, e a eletroforese mostra uma banda gama larga e policlonal.</p>
<p>A gamopatia monoclonal é um espectro.</p>
<p>O tratamento do mieloma múltiplo combina um inibidor de proteassoma (bortezomibe), um imunomodulador (lenalidomida), dexametasona e, hoje, um anticorpo anti-CD38 (daratumumabe), com transplante autólogo nos elegíveis, além de bisfosfonato ou denosumabe para o osso, profilaxia de trombose com o imunomodulador, hidratação e correção da hipercalcemia e vacinação (pneumococo, influenza, COVID-19, herpes-zóster recombinante) e imunoglobulina de reposição nas infecções recorrentes com hipogamaglobulinemia grave.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso com pneumonias repetidas, anemia e hipogamaglobulinemia, com uma cadeia leve alta e a outra baixa, tem clone: gamopatia monoclonal, provavelmente mieloma de cadeia leve, e não imunodeficiência primária. O que denuncia o clone é a relação kappa/lambda alterada, não o nível de imunoglobulinas. O passo seguinte é imunofixação, mielograma, cálcio, creatinina e imagem óssea.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Clone de plasmócitos produz imunoglobulina ou cadeia leve única e desloca a relação kappa/lambda; pode não haver pico na eletroforese.</li>
<li>O componente M suprime as imunoglobulinas normais: hipogamaglobulinemia e infecções por encapsulados.</li>
<li>GMSI: M abaixo de 3 g/dL, plasmócitos abaixo de 10%, sem lesão; indolente: M de 3 ou mais ou plasmócitos 10 a 59%; mieloma: 10% ou mais com CRAB ou SLiM.</li>
<li>Investigar com eletroforese, imunofixação, cadeias livres, cálcio, creatinina, beta-2-microglobulina, mielograma e imagem de corpo inteiro.</li>
<li>Tratamento com bortezomibe, lenalidomida, dexametasona e daratumumabe; transplante autólogo; proteção óssea, vacinas e imunoglobulina se infecções graves.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que resultado das cadeias leves livres indica clonalidade? <details><summary>Resposta</summary>Uma cadeia elevada com a outra reduzida e relação kappa/lambda fora de 0,26 a 1,65.</details></li>
<li>Por que o paciente com gamopatia monoclonal tem infecções de repetição? <details><summary>Resposta</summary>Porque o componente M suprime a produção das imunoglobulinas normais, causando hipogamaglobulinemia funcional e infecções por germes encapsulados.</details></li>
<li>O que diferencia gamopatia de significado indeterminado de mieloma múltiplo? <details><summary>Resposta</summary>Na GMSI o componente M é inferior a 3 g/dL, os plasmócitos são menos de 10% e não há lesão de órgão; o mieloma exige 10% ou mais de plasmócitos com critérios CRAB ou SLiM.</details></li>
</ol>
`,

"unesp2025#45": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar o delirium pelo CAM e distingui-lo da demência e da depressão.</li>
<li>Identificar as causas e os fatores precipitantes no idoso.</li>
<li>Aplicar a prevenção multicomponente e o tratamento da agitação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Confusion Assessment Method</dt>
<dd>Algoritmo com quatro itens: (1) início agudo e curso flutuante, (2) desatenção, (3) pensamento desorganizado, (4) alteração do nível de consciência; diagnóstico com 1 + 2 + (3 ou 4).</dd>
<dt>Subtipos motores</dt>
<dd>Hiperativo (agitação, alucinações), hipoativo (sonolência, apatia, o mais comum e o mais perdido) e misto (alternância).</dd>
<dt>Fatores predisponentes</dt>
<dd>Idade avançada, demência, déficit sensorial, fragilidade, polifarmácia, dependência funcional, depressão, alcoolismo.</dd>
<dt>Fatores precipitantes</dt>
<dd>Infecção, fármacos (anticolinérgicos, benzodiazepínicos, opioides), distúrbios metabólicos, desidratação, dor, retenção urinária, fecaloma, cirurgia, mudança de ambiente, privação de sono.</dd>
</dl>
<h4>O essencial</h4>
<p>O delirium é a síndrome de disfunção cerebral aguda mais frequente no idoso hospitalizado, presente em 15 a 50% das internações e em até 80% dos pacientes de UTI, e é um marcador de gravidade: aumenta mortalidade, tempo de internação, institucionalização e declínio cognitivo persistente.</p>
<p>O diagnóstico é clínico e o <strong>CAM</strong> é a ferramenta padrão, com sensibilidade e especificidade acima de 90% quando aplicado por avaliador treinado.</p>
<p>A conduta tem três partes. Primeiro, <strong>procurar e tratar a causa</strong>: anamnese medicamentosa, exame físico com toque retal e bexiga, glicemia, eletrólitos, função renal e hepática, hemograma, urina, saturação, eletrocardiograma e, se houver sinal focal, trauma ou nada encontrado, imagem do encéfalo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso que de repente ficou confuso, com alucinações e depois sonolento e desatento, tem delirium, e o CAM exige início agudo flutuante e desatenção, mais pensamento desorganizado ou alteração da consciência. Apatia e dependência funcional não são critérios. Depois do rótulo, a pergunta é sempre "por quê": infecção, remédio, desidratação, retenção, dor.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Delirium: disfunção cerebral aguda e flutuante; marcador de gravidade e de pior prognóstico no idoso.</li>
<li>CAM: início agudo flutuante e desatenção são obrigatórios; mais pensamento desorganizado ou alteração do nível de consciência.</li>
<li>Hipoativo é o subtipo mais comum e o mais perdido; demência prévia é o maior fator de risco.</li>
<li>Investigar causa: medicamentos, infecção, metabólico, desidratação, dor, retenção urinária, fecaloma; imagem se sinal focal ou sem causa.</li>
<li>Prevenção e tratamento não farmacológicos; antipsicótico em dose baixa só para agitação perigosa; evitar benzodiazepínico salvo abstinência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais itens do CAM são obrigatórios para o diagnóstico de delirium? <details><summary>Resposta</summary>Início agudo com curso flutuante e desatenção; a eles se soma pensamento desorganizado ou alteração do nível de consciência.</details></li>
<li>Qual característica clínica separa o delirium da demência? <details><summary>Resposta</summary>A desatenção de início agudo e flutuante; na demência o início é insidioso, o curso estável e a atenção preservada até fases avançadas.</details></li>
<li>Quando o tratamento farmacológico do delirium está indicado e com o quê? <details><summary>Resposta</summary>Apenas na agitação que ameaça o paciente ou impede o tratamento, com haloperidol em dose baixa ou antipsicótico atípico por poucos dias; benzodiazepínicos só na abstinência alcoólica.</details></li>
</ol>
`,

"unesp2025#47": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar urgência, emergência hipertensiva e hipertensão acelerada/maligna.</li>
<li>Reconhecer a retinopatia hipertensiva e a lesão de órgão-alvo em progressão.</li>
<li>Tratar a hipertensão maligna com droga venosa e metas graduais, e investigar a causa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Urgência hipertensiva</dt>
<dd>Pressão muito elevada sem lesão aguda de órgão-alvo; tratamento oral e redução em 24 a 48 horas.</dd>
<dt>Emergência hipertensiva</dt>
<dd>Pressão elevada com lesão aguda de órgão-alvo (encefalopatia, AVC, coronária, edema agudo, dissecção, eclâmpsia, maligna); droga venosa titulável.</dd>
<dt>Hipertensão acelerada/maligna</dt>
<dd>Pressão muito elevada com retinopatia grau III ou IV, expressão de necrose fibrinoide arteriolar sistêmica.</dd>
<dt>Classificação de Keith-Wagener-Barker</dt>
<dd>Grau I estreitamento arteriolar; II cruzamentos arteriovenosos; III hemorragias e exsudatos; IV papiledema.</dd>
</dl>
<h4>O essencial</h4>
<p>A crise hipertensiva se define menos pelo número e mais pela presença de <strong>lesão aguda de órgão-alvo</strong>.</p>
<p>A <strong>hipertensão acelerada/maligna</strong> é uma emergência com fisiopatologia própria: a pressão muito alta e sustentada supera a autorregulação, lesa o endotélio e causa <strong>necrose fibrinoide</strong> das arteríolas, com microangiopatia trombótica, isquemia renal com ativação do sistema renina-angiotensina (que perpetua a hipertensão), encefalopatia por edema cerebral e o sinal diagnóstico no <strong>fundo de olho</strong>: <strong>hemorragias em chama, exsudatos algodonosos</strong> (grau III) e <strong>papiledema</strong> (grau IV).</p>
<p>O tratamento é hospitalar, com <strong>nitroprussiato</strong> (atenção à toxicidade por cianeto após 48 horas e na insuficiência renal), <strong>nicardipina</strong>, <strong>labetalol</strong> ou clevidipina, reduzindo a pressão média em 20 a 25% nas primeiras horas, nunca abaixo de 160 × 100 no primeiro dia, para não provocar isquemia cerebral, coronariana e renal num leito vascular adaptado a pressões altas; a transição para drogas orais começa em 24 horas, e a pressão alvo é atingida em semanas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pressão de 270 × 135 com fundo de olho mostrando hemorragias, exsudatos e papila borrada é hipertensão maligna, uma emergência, e o tratamento é hospitalar com vasodilatador venoso e redução de 20 a 25% na primeira hora. Não confunda com hipertensão resistente, que é um diagnóstico de consultório. E lembre que a causa secundária é a regra, não a exceção, nessa apresentação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Urgência: sem lesão aguda, tratamento oral; emergência: lesão em curso, droga venosa e monitorização.</li>
<li>Maligna: retinopatia grau III ou IV; necrose fibrinoide, microangiopatia, lesão renal e encefalopatia.</li>
<li>Meta: reduzir 20 a 25% da pressão média na primeira hora, 160 × 100 em 2 a 6 horas; nunca normalizar no primeiro dia.</li>
<li>Drogas: nitroprussiato, nicardipina, labetalol, clevidipina; nifedipina sublingual é proscrita.</li>
<li>Investigar causa secundária depois: renovascular, glomerulopatia, feocromocitoma, drogas, esclerodermia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que define a hipertensão acelerada/maligna? <details><summary>Resposta</summary>Pressão muito elevada com retinopatia hipertensiva grau III (hemorragias e exsudatos) ou IV (papiledema), expressão de lesão endotelial sistêmica.</details></li>
<li>Qual é a meta de redução pressórica na primeira hora de uma emergência hipertensiva, na regra geral? <details><summary>Resposta</summary>Reduzir a pressão arterial média em 20 a 25%, sem normalizar, para preservar a perfusão cerebral, coronariana e renal.</details></li>
<li>Por que a hipertensão resistente não é o diagnóstico nesse cenário? <details><summary>Resposta</summary>Porque hipertensão resistente é definição ambulatorial (pressão não controlada com três drogas, incluindo diurético) e não descreve uma emergência com lesão aguda de órgão-alvo.</details></li>
</ol>
`,

"unesp2025#51": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Abordar a monoartrite aguda como artrite séptica até prova em contrário.</li>
<li>Interpretar o líquido sinovial e reconhecer os fatores de risco da infecção articular.</li>
<li>Tratar a artrite séptica e saber quando as outras causas entram no diferencial.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Artrite séptica</dt>
<dd>Infecção bacteriana do espaço articular, em geral hematogênica, por Staphylococcus aureus em 50 a 60%; destrói a cartilagem em dias.</dd>
<dt>Artrocentese</dt>
<dd>Punção articular para celularidade, Gram, cultura e pesquisa de cristais; exame obrigatório em toda monoartrite aguda.</dd>
<dt>Líquido inflamatório vs. séptico</dt>
<dd>2.000 a 50.000 leucócitos é inflamatório (gota, pseudogota, artrite reumatoide); acima de 50.000 com mais de 90% de neutrófilos é séptico até a cultura dizer o contrário.</dd>
<dt>Fatores de risco</dt>
<dd>Artrite reumatoide, prótese articular, imunossupressão, diabetes, idade avançada, injeção intra-articular recente, uso de drogas injetáveis, infecção cutânea.</dd>
</dl>
<h4>O essencial</h4>
<p>A monoartrite aguda é uma emergência até que a infecção seja afastada, porque a artrite séptica destrói a cartilagem em poucos dias e tem mortalidade de 10%.</p>
<p>A <strong>artrocentese</strong> deve ser feita antes do antibiótico e enviada para contagem de células com diferencial, Gram, cultura (em frasco de hemocultura aumenta o rendimento) e <strong>pesquisa de cristais</strong> em luz polarizada, porque gota e pseudogota imitam a infecção e, pior, podem coexistir com ela.</p>
<p>O tratamento é <strong>antibiótico venoso empírico</strong> logo após a coleta, orientado pelo Gram: oxacilina ou cefazolina para cocos gram-positivos, com vancomicina se risco de MRSA; ceftriaxona para gram-negativos ou gonococo; na ausência de Gram, cobertura de estafilococo e, no imunossuprimido, de gram-negativos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Joelho único quente e inchado em paciente com artrite reumatoide em imunossupressor: puncione antes de qualquer coisa e trate como séptica. Pesquise cristais na mesma amostra, mas não inicie alopurinol na crise, e jamais injete corticoide ou aumente o imunossupressor antes de a cultura voltar. Monoartrite nunca é "a doença de sempre" até prova em contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Monoartrite aguda é séptica até prova em contrário; punção obrigatória antes do antibiótico.</li>
<li>Artrite reumatoide, prótese, imunossupressão, diabetes, infiltração recente e drogas injetáveis são os fatores de risco; S. aureus lidera.</li>
<li>Líquido: celularidade, Gram, cultura em frasco de hemocultura, cristais; acima de 50.000 neutrófilos sugere infecção; cristais não excluem.</li>
<li>Antibiótico venoso empírico pelo Gram (oxacilina ou cefazolina, vancomicina se MRSA, ceftriaxona para gonococo ou gram-negativos) e drenagem.</li>
<li>Duas semanas venosas e duas a quatro orais; suspender imunossupressor; corticoide intra-articular só após excluir infecção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro passo diante de uma monoartrite aguda? <details><summary>Resposta</summary>A artrocentese, com celularidade, Gram, cultura e pesquisa de cristais, antes de iniciar antibiótico.</details></li>
<li>Por que a artrite reumatoide é o maior fator de risco para artrite séptica? <details><summary>Resposta</summary>Pela articulação cronicamente lesada, pela imunossupressão medicamentosa e pelas bacteremias frequentes, que elevam o risco em cerca de dez vezes.</details></li>
<li>A presença de cristais no líquido sinovial exclui a infecção? <details><summary>Resposta</summary>Não; gota e artrite séptica podem coexistir, e a cultura decide; o tratamento empírico segue até o resultado.</details></li>
</ol>
`,

"unesp2025#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer os sinais básicos do ultrassom pulmonar: deslizamento, linhas A, linhas B e pulso pulmonar.</li>
<li>Diagnosticar pneumotórax pelo ultrassom e reconhecer o ponto pulmonar.</li>
<li>Aplicar o protocolo BLUE na dispneia aguda.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Deslizamento pleural</dt>
<dd>Movimento de vaivém da linha pleural a cada respiração, que no modo M gera o "sinal da praia"; indica pleuras em contato e pulmão ventilado.</dd>
<dt>Linhas A</dt>
<dd>Reverberações horizontais da pleura, equidistantes, que indicam ar abaixo da pleura (pulmão normal, DPOC ou pneumotórax).</dd>
<dt>Linhas B</dt>
<dd>Artefatos verticais em cauda de cometa que partem da pleura e apagam as linhas A; três ou mais por campo indicam síndrome intersticial (edema, pneumonia, fibrose).</dd>
<dt>Ponto pulmonar</dt>
<dd>Local onde o deslizamento aparece e desaparece com a respiração, marcando a borda do pneumotórax; especificidade próxima de 100%.</dd>
</dl>
<h4>O essencial</h4>
<p>O ultrassom pulmonar à beira do leito lê artefatos, porque o ar não transmite o som. No pulmão <strong>normal</strong>, a linha pleural hiperecogênica <strong>desliza</strong> com a respiração, e abaixo dela aparecem <strong>linhas A</strong>, repetições horizontais da pleura; no modo M, o deslizamento desenha o "sinal da praia" (linhas retas acima, grãos de areia abaixo).</p>
<p>No <strong>pneumotórax</strong>, o ar interposto bloqueia a visão da pleura visceral: o <strong>deslizamento desaparece</strong> (modo M com o "sinal da estratosfera" ou código de barras), as linhas A persistem, <strong>não há linhas B</strong> nem pulso pulmonar.</p>
<p>O <strong>protocolo BLUE</strong> organiza a dispneia aguda em perfis: deslizamento com linhas A (perfil A) sugere DPOC, asma ou embolia, e pede pesquisa de trombose venosa; deslizamento com linhas B difusas (perfil B) é edema pulmonar; linhas B unilaterais ou assimétricas com consolidação apontam para pneumonia; ausência de deslizamento com linhas A e ponto pulmonar é pneumotórax; derrame pleural aparece como coleção anecoica com o pulmão flutuando ("sinal da água-viva") e o "sinal do sinusoide" no modo M.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lado normal: desliza e tem linhas A. Lado do pneumotórax: não desliza, só linhas A, sem linhas B, e o ponto pulmonar confirma. Se a prova descreve linhas B ou pulso pulmonar num hemitórax, ali não há pneumotórax. A água-viva é derrame, o código de barras é pneumotórax, a praia é normal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Normal: deslizamento pleural (sinal da praia) e linhas A; pulso pulmonar confirma contato pleural.</li>
<li>Linhas B: síndrome intersticial; difusas e bilaterais no edema, focais na pneumonia; excluem pneumotórax no ponto examinado.</li>
<li>Pneumotórax: sem deslizamento (código de barras), linhas A, sem linhas B nem pulso; ponto pulmonar é específico.</li>
<li>Ausência de deslizamento isolada não é específica (aderência, apneia, intubação seletiva, DPOC grave).</li>
<li>Protocolo BLUE: perfil A (DPOC, asma, embolia), perfil B (edema), consolidação (pneumonia), água-viva (derrame).</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os achados ultrassonográficos do pneumotórax? <details><summary>Resposta</summary>Ausência de deslizamento pleural, linhas A sem linhas B, ausência de pulso pulmonar e, de forma específica, o ponto pulmonar.</details></li>
<li>Por que a ausência de deslizamento pleural isolada não confirma pneumotórax? <details><summary>Resposta</summary>Porque também ocorre em aderências pleurais, apneia, intubação seletiva, fibrose e DPOC grave; a confirmação vem do ponto pulmonar.</details></li>
<li>O que é o sinal da água-viva? <details><summary>Resposta</summary>O pulmão flutuando dentro de um derrame pleural anecoico, movimentando-se com a respiração.</details></li>
</ol>
`,

"unesp2025#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios GLIM para diagnosticar e graduar a desnutrição.</li>
<li>Reconhecer a desnutrição no paciente obeso e no paciente com câncer.</li>
<li>Indicar a terapia nutricional e prevenir a síndrome de realimentação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios GLIM</dt>
<dd>Diagnóstico de desnutrição com pelo menos um critério fenotípico (perda de peso, IMC baixo, massa muscular reduzida) e um etiológico (ingestão ou absorção reduzida, inflamação por doença).</dd>
<dt>Gravidade pelo GLIM</dt>
<dd>Moderada: perda de 5 a 10% em seis meses ou 10 a 20% além; IMC abaixo de 20 (ou 22 acima de 70 anos). Grave: perda acima de 10% em seis meses ou 20% além; IMC abaixo de 18,5 (ou 20 acima de 70).</dd>
<dt>Caquexia do câncer</dt>
<dd>Perda de massa muscular por inflamação e anorexia tumorais, que não reverte só com nutrição; perda acima de 5% ou acima de 2% com IMC baixo ou sarcopenia.</dd>
<dt>Triagem nutricional</dt>
<dd>Primeiro passo do GLIM, com ferramentas validadas (NRS-2002, MUST, MNA-SF) em até 24 a 48 horas da internação.</dd>
</dl>
<h4>O essencial</h4>
<p>A desnutrição hospitalar atinge 30 a 50% dos internados e piora infecções, cicatrização, tempo de internação e mortalidade, mas durante décadas faltou um critério universal. O consenso <strong>GLIM</strong>, de 2019, criou um diagnóstico em dois passos. Primeiro, a <strong>triagem</strong> de risco com um instrumento validado.</p>
<p>O desenho do GLIM tem uma consequência deliberada: o <strong>obeso pode estar desnutrido</strong>.</p>
<p>Diagnosticada a desnutrição, a <strong>terapia nutricional</strong> começa cedo: aconselhamento e suplementos orais hipercalóricos e hiperproteicos quando a via oral permite; nutrição enteral por sonda quando a ingestão fica abaixo de 60% das necessidades por mais de uma semana ou há disfagia, como no câncer de esôfago; parenteral quando o trato digestivo não funciona.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Não deixe o IMC enganar: 25% de perda de peso em dois meses é desnutrição grave pelo GLIM, mesmo em quem ainda está acima do peso. A prova monta exatamente esse paciente, obeso com câncer de esôfago e disfagia. Um fenótipo mais uma etiologia fazem o diagnóstico; a perda acima de 10% em seis meses dá a gravidade.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>GLIM: triagem e depois um critério fenotípico (perda de peso, IMC baixo, massa muscular reduzida) mais um etiológico (ingestão reduzida ou inflamação).</li>
<li>Gravidade: moderada com perda de 5 a 10% em seis meses; grave com perda acima de 10% em seis meses ou 20% em mais tempo.</li>
<li>O obeso pode estar gravemente desnutrido; obesidade sarcopênica tem pior prognóstico.</li>
<li>Terapia: suplementos orais, enteral se ingestão abaixo de 60% ou disfagia, parenteral se o intestino falha; 25 a 30 kcal/kg e 1,2 a 1,5 g/kg de proteína.</li>
<li>Realimentação gradual com fósforo, potássio, magnésio e tiamina no desnutrido grave; nutrição pré-operatória no câncer.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que combinação de critérios o GLIM exige para diagnosticar desnutrição? <details><summary>Resposta</summary>Pelo menos um critério fenotípico (perda de peso, IMC baixo ou massa muscular reduzida) e um etiológico (ingestão ou absorção reduzida, ou inflamação por doença).</details></li>
<li>Qual perda de peso define desnutrição grave pelo GLIM? <details><summary>Resposta</summary>Perda não intencional acima de 10% em seis meses ou acima de 20% além de seis meses.</details></li>
<li>Por que um paciente com IMC de 29 pode ser classificado como gravemente desnutrido? <details><summary>Resposta</summary>Porque o IMC é só um dos fenótipos; a perda maciça de peso e de massa muscular, somada à etiologia (câncer e disfagia), define a desnutrição independentemente do IMC.</details></li>
</ol>
`,

"unesp2025#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir hipotireoidismo subclínico e confirmar o diagnóstico antes de tratar.</li>
<li>Decidir o tratamento pelo nível de TSH, pela idade, pelos sintomas e pelos anticorpos.</li>
<li>Prescrever e monitorar a levotiroxina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipotireoidismo subclínico</dt>
<dd>TSH acima do limite com T4 livre normal, confirmado em nova dosagem após dois a três meses; prevalência de 4 a 10%, maior em mulheres e idosos.</dd>
<dt>Anti-TPO</dt>
<dd>Anticorpo antiperoxidase, marcador de tireoidite de Hashimoto; sua positividade dobra a taxa de progressão para hipotireoidismo franco.</dd>
<dt>Corte de 10 mUI/L</dt>
<dd>Nível de TSH acima do qual as diretrizes recomendam tratar a maioria dos adultos, pelo risco de progressão e cardiovascular.</dd>
<dt>Levotiroxina</dt>
<dd>Dose inicial de 25 a 50 mcg/dia no subclínico (menor no idoso e cardiopata), em jejum, ajustada pelo TSH a cada 6 a 8 semanas.</dd>
</dl>
<h4>O essencial</h4>
<p>O hipotireoidismo subclínico é laboratorial: <strong>TSH elevado com T4 livre normal</strong>, e o primeiro cuidado é <strong>confirmar</strong> em nova dosagem após dois a três meses, porque metade dos TSH discretamente elevados normaliza, sobretudo após doenças agudas, no idoso (cujo limite superior sobe para 6 a 7) e na obesidade. Excluem-se também o uso de amiodarona, lítio e inibidores de checkpoint e a fase de recuperação de tireoidites.</p>
<p>A decisão de tratar segue o <strong>nível do TSH</strong>.</p>
<p>A <strong>levotiroxina</strong> começa em dose baixa no subclínico, 25 a 50 mcg/dia (12,5 a 25 no idoso e no coronariopata), tomada em jejum, 30 a 60 minutos antes do café, separada de cálcio, ferro, inibidores de bomba de prótons e soja, e ajustada pelo TSH a cada 6 a 8 semanas até a faixa alvo (0,5 a 4,5 no adulto; até 6 a 7 no idoso); depois, TSH anual. O excesso causa fibrilação atrial e osteoporose, e por isso a meta no idoso é o limite superior da normalidade, não o inferior.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Confirme o TSH, depois aplique o corte: 10 ou mais trata; entre 4,5 e 10, trata se sintomas, anti-TPO positivo, bócio, dislipidemia ou gestação, e observa o idoso assintomático. Mulher de 63 anos com TSH de 10,7 e sintomas recebe levotiroxina em dose baixa. Ultrassom e risco cardiovascular não decidem acima de 10.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Subclínico: TSH alto com T4 livre normal, confirmado após dois a três meses; dosar anti-TPO.</li>
<li>TSH de 10 ou mais: tratar a maioria dos adultos; individualizar acima de 70 anos.</li>
<li>TSH entre 4,5 e 10: tratar com sintomas, anti-TPO positivo, bócio, dislipidemia, infertilidade ou gestação; observar os demais.</li>
<li>Levotiroxina 25 a 50 mcg em jejum, menor no idoso e no cardiopata; ajustar pelo TSH a cada 6 a 8 semanas.</li>
<li>Evitar excesso (fibrilação atrial, osteoporose); meta no idoso é o limite superior da normalidade.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro passo diante de um TSH elevado com T4 livre normal? <details><summary>Resposta</summary>Confirmar em nova dosagem após dois a três meses, excluindo doença aguda e fármacos, e dosar o anti-TPO.</details></li>
<li>A partir de que valor de TSH o tratamento do hipotireoidismo subclínico é recomendado para a maioria dos adultos? <details><summary>Resposta</summary>TSH de 10 mUI/L ou mais, confirmado.</details></li>
<li>Como se inicia e se monitora a levotiroxina no subclínico? <details><summary>Resposta</summary>25 a 50 mcg/dia em jejum (menos no idoso e no coronariopata), com TSH a cada 6 a 8 semanas até a meta e depois anualmente.</details></li>
</ol>
`,

"unesp2025#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a leishmaniose tegumentar e confirmar o diagnóstico.</li>
<li>Conhecer os esquemas terapêuticos do Ministério da Saúde e suas contraindicações.</li>
<li>Escolher a anfotericina B lipossomal nos pacientes com cardiopatia, nefropatia, hepatopatia, gestação ou idade avançada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Leishmaniose tegumentar</dt>
<dd>Infecção por Leishmania (braziliensis, guyanensis, amazonensis) transmitida por flebotomíneos, com úlcera cutânea de bordas elevadas e fundo granuloso e risco de forma mucosa.</dd>
<dt>Antimoniato de meglumina</dt>
<dd>Primeira linha (10 a 20 mg Sb/kg/dia IM ou IV por 20 dias); cardiotóxico (QT, arritmias), nefrotóxico, hepatotóxico e pancreatotóxico.</dd>
<dt>Anfotericina B lipossomal</dt>
<dd>3 a 5 mg/kg/dia IV até 20 a 40 mg/kg; indicada quando o antimoniato é contraindicado ou falha; menos tóxica que a desoxicolato.</dd>
<dt>Miltefosina</dt>
<dd>Única droga oral, 2,5 mg/kg/dia por 28 dias; teratogênica, exige contracepção; disponibilidade restrita no SUS.</dd>
</dl>
<h4>O essencial</h4>
<p>A leishmaniose tegumentar é endêmica em todo o Brasil, com 15 a 20 mil casos por ano, sobretudo em trabalhadores rurais e moradores de áreas de mata.</p>
<p>O tratamento sistêmico é a regra, pela forma mucosa que a doença pode gerar, e a <strong>primeira linha</strong> no Brasil é o <strong>antimoniato de meglumina</strong> por 20 dias, com eletrocardiograma, função renal, hepática e amilase antes e durante, porque a droga prolonga o QT, causa arritmias e morte súbita, lesa rim, fígado e pâncreas e provoca artralgia e mialgia.</p>
<p>O tratamento <strong>intralesional</strong> com antimoniato é aceito para lesão única, pequena, sem risco mucoso e em paciente que não pode receber droga sistêmica, assim como a termoterapia. A cura é clínica (reepitelização completa em até três meses) e o seguimento dura dois anos, com exame das mucosas; a forma mucosa exige esquemas mais longos e, na falha, anfotericina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Úlcera de borda em moldura e fundo granuloso em agricultor com amastigotas no exame direto é leishmaniose; a pergunta é a droga. Antimoniato é o padrão, mas cardiopatia com bloqueio, doença renal, hepatopatia, gestação e idade avançada o proíbem, e a resposta vira anfotericina B lipossomal. Pentamidina no diabético é outro erro clássico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Úlcera indolor de bordas elevadas e fundo granuloso em área endêmica; exame direto, cultura, histologia ou PCR; vigiar mucosa.</li>
<li>Primeira linha: antimoniato de meglumina por 20 dias com monitorização de ECG, rim, fígado e pâncreas.</li>
<li>Contraindicações do antimoniato: cardiopatia, nefropatia, hepatopatia, gestação, idade avançada com comorbidade, drogas que prolongam o QT.</li>
<li>Nesses casos e na falha: anfotericina B lipossomal; desoxicolato se a lipossomal faltar; pentamidina só em L. guyanensis sem diabetes.</li>
<li>Intralesional para lesão única pequena; cura clínica em três meses; seguimento de dois anos; notificação compulsória.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as contraindicações ao antimoniato de meglumina? <details><summary>Resposta</summary>Cardiopatia (sobretudo arritmias e bloqueios), nefropatia, hepatopatia, gestação, idade avançada com comorbidades e uso de drogas que prolongam o QT.</details></li>
<li>Qual é a droga de escolha para a leishmaniose tegumentar no cardiopata com doença renal crônica? <details><summary>Resposta</summary>A anfotericina B lipossomal, mais eficaz e menos tóxica que a desoxicolato e sem a cardiotoxicidade do antimoniato.</details></li>
<li>Por que a pentamidina é especialmente perigosa no diabético? <details><summary>Resposta</summary>Porque causa hipoglicemia e pode precipitar diabetes, além de arritmias e nefrotoxicidade.</details></li>
</ol>
`,

/* --- Volume 2 · Clínica Médica · FAMEMA 2026 (cm91–cm100) ----------------------------- */
"famema2026#4": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar os choques em hipovolêmico, cardiogênico, obstrutivo e distributivo.</li>
<li>Descrever o perfil hemodinâmico de cada tipo: pré-carga, débito e resistência.</li>
<li>Usar o exame físico e o ultrassom à beira do leito para identificar o tipo e guiar o tratamento inicial.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Choque</dt>
<dd>Falência circulatória com perfusão tecidual inadequada e hipóxia celular; hipotensão, oligúria, pele fria ou quente, alteração mental e lactato acima de 2 mmol/L.</dd>
<dt>Pressão venosa central e pressão de oclusão da artéria pulmonar</dt>
<dd>Estimativas da pré-carga direita e esquerda; altas no cardiogênico e no obstrutivo, baixas no hipovolêmico e no distributivo inicial.</dd>
<dt>Resistência vascular sistêmica</dt>
<dd>Tônus arteriolar; alta nos choques de baixo débito (hipovolêmico, cardiogênico, obstrutivo) e baixa no distributivo.</dd>
<dt>Perfil hiperdinâmico</dt>
<dd>Débito cardíaco alto com resistência baixa, pele quente e pressão de pulso alargada; sepse inicial, anafilaxia, insuficiência hepática.</dd>
</dl>
<h4>O essencial</h4>
<p>O choque é um estado de perfusão insuficiente, e sua classificação por mecanismo orienta o tratamento.</p>
<p>À beira do leito, três perguntas organizam: o paciente está <strong>frio ou quente</strong> (resistência alta ou baixa)? As <strong>jugulares</strong> estão colabadas ou ingurgitadas (pré-carga baixa ou alta)? O <strong>pulmão</strong> está úmido ou seco (congestão ou não)?</p>
<p>O tratamento começa pelo mecanismo: volume e sangue no hipovolêmico, com controle da hemorragia; inotrópico (dobutamina), vasopressor com cautela, revascularização e suporte mecânico no cardiogênico, evitando volume; alívio da obstrução (pericardiocentese, drenagem torácica, trombólise ou embolectomia) no obstrutivo, com volume cauteloso na embolia; cristaloide e <strong>noradrenalina</strong> precoces, antibiótico e controle de foco na sepse; adrenalina na anafilaxia; vasopressor e atropina no neurogênico; hidrocortisona na insuficiência adrenal.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Grave o quadro mental: pré-carga alta é cardiogênico ou obstrutivo; pré-carga baixa é hipovolêmico ou distributivo; resistência baixa e pele quente é distributivo (sepse inicial com débito alto); pós-carga do ventrículo direito alta é embolia. Com isso você desmonta qualquer afirmação invertida, como PVC alta no hipovolêmico ou débito alto na embolia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipovolêmico: pré-carga baixa, débito baixo, resistência alta; frio, jugulares vazias, pulmão seco.</li>
<li>Cardiogênico: pré-carga alta (PVC e oclusão altas), débito baixo, resistência alta; frio, jugulares cheias, pulmão úmido.</li>
<li>Obstrutivo: PVC alta, débito baixo; embolia com pós-carga do VD elevada; tamponamento e pneumotórax impedem o enchimento.</li>
<li>Distributivo: resistência baixa, débito alto na sepse inicial, pele quente, pressão de pulso ampla; pode virar frio tardiamente.</li>
<li>Ultrassom à beira do leito identifica o tipo; tratamento pelo mecanismo, com reavaliação dinâmica e atenção aos choques mistos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como estão PVC e pressão de oclusão da artéria pulmonar no choque cardiogênico e por quê? <details><summary>Resposta</summary>Elevadas, porque a falência da bomba represa o sangue atrás dos ventrículos, aumentando as pressões de enchimento.</details></li>
<li>Qual é o perfil hemodinâmico do choque séptico inicial? <details><summary>Resposta</summary>Hiperdinâmico: débito cardíaco alto, resistência vascular baixa, pele quente e pressão de pulso ampla, com PVC baixa ou normal.</details></li>
<li>O que acontece com a pós-carga do ventrículo direito na embolia pulmonar maciça? <details><summary>Resposta</summary>Sobe abruptamente, dilatando o ventrículo direito e reduzindo o débito cardíaco.</details></li>
</ol>
`,

"famema2026#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a SDRA pelos critérios de Berlim e pela atualização global de 2023.</li>
<li>Prescrever a ventilação protetora: volume, platô, driving pressure, PEEP e FiO2.</li>
<li>Indicar prona, bloqueio neuromuscular e ECMO conforme a gravidade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>SDRA</dt>
<dd>Insuficiência respiratória aguda em até uma semana de um insulto, com opacidades bilaterais não explicadas por derrame, colapso ou nódulos, e hipoxemia não cardiogênica; leve, moderada ou grave pela PaO2/FiO2 (300, 200, 100) com PEEP de 5.</dd>
<dt>Peso predito</dt>
<dd>Calculado pela altura e pelo sexo (homens: 50 + 0,91 × [altura em cm − 152,4]; mulheres: 45,5 + 0,91 × [...]); base do volume corrente, porque o pulmão não cresce com a gordura.</dd>
<dt>Driving pressure</dt>
<dd>Pressão de platô menos PEEP; reflete a tensão sobre o pulmão aerado ("baby lung"); abaixo de 15 cmH2O associa-se a menor mortalidade.</dd>
<dt>Posição prona</dt>
<dd>Decúbito ventral por 16 horas ou mais por dia, na PaO2/FiO2 abaixo de 150; homogeneíza a ventilação e reduz a mortalidade (PROSEVA).</dd>
</dl>
<h4>O essencial</h4>
<p>A SDRA é a resposta inflamatória difusa do pulmão a um insulto direto (pneumonia, aspiração, contusão, afogamento) ou indireto (sepse, pancreatite, transfusão, trauma), com lesão da barreira alvéolo-capilar, edema rico em proteína, colapso e perda de complacência; o pulmão funcional fica pequeno e heterogêneo.</p>
<p>Os componentes são precisos.</p>
<p>Na SDRA com PaO2/FiO2 abaixo de 150 após 12 a 24 horas de ventilação otimizada, a <strong>posição prona</strong> por pelo menos 16 horas diárias reduz a mortalidade em cerca de 15 pontos percentuais e deve ser aplicada precocemente, com equipe treinada para evitar extubação acidental e úlceras de pressão. As manobras de recrutamento de rotina e a PEEP muito alta não melhoraram desfechos e aumentaram mortalidade num grande ensaio; o óxido nítrico inalado melhora a oxigenação sem mudar sobrevida; corticoide (dexametasona) tem benefício na SDRA moderada a grave precoce e na COVID-19.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A resposta certa na SDRA é sempre a tríade protetora: 6 mL/kg de peso predito, platô até 30 e PEEP ajustada (com FiO2 mínima). Volumes de 10 mL/kg, FiO2 de 100% fixa e PEEP mínima são os distratores que lesam o pulmão. Abaixo de 150 de relação, prone; abaixo de 80, pense em ECMO.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>SDRA: início em uma semana, opacidades bilaterais, hipoxemia não cardiogênica; leve, moderada e grave por PaO2/FiO2 de 300, 200 e 100.</li>
<li>Protetora: 6 mL/kg de peso predito, platô até 30, driving pressure abaixo de 15, PEEP titulada, FiO2 abaixo de 60%, hipercapnia permissiva com pH acima de 7,20.</li>
<li>Sedação e bloqueio neuromuscular nas assincronias graves das primeiras 48 horas; balanço hídrico conservador.</li>
<li>Prona 16 h/dia se PaO2/FiO2 abaixo de 150 após otimização; corticoide na moderada a grave precoce; recrutamento de rotina não.</li>
<li>ECMO venovenosa na hipoxemia ou hipercapnia refratária; tratar a causa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o volume corrente é calculado pelo peso predito e não pelo peso real? <details><summary>Resposta</summary>Porque o tamanho do pulmão depende da altura e do sexo, não da massa corporal; usar o peso real hiperdistende o pulmão do obeso.</details></li>
<li>Quais são os limites de pressão de platô e de driving pressure na SDRA? <details><summary>Resposta</summary>Platô até 30 cmH2O e driving pressure (platô menos PEEP) abaixo de 15 cmH2O.</details></li>
<li>Quando a posição prona está indicada e por quanto tempo? <details><summary>Resposta</summary>Com PaO2/FiO2 abaixo de 150 após 12 a 24 horas de ventilação protetora otimizada, por pelo menos 16 horas por dia.</details></li>
</ol>
`,

"famema2026#10": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a cefaleia em trovoada e suas causas graves.</li>
<li>Aplicar a regra das seis horas da tomografia e indicar a punção lombar.</li>
<li>Interpretar o líquor (hemácias, xantocromia) e seguir para a angiotomografia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cefaleia em trovoada</dt>
<dd>Dor que atinge intensidade máxima em menos de um minuto; hemorragia subaracnóidea até prova em contrário, além de dissecção arterial, trombose venosa, apoplexia hipofisária e vasoconstrição reversível.</dd>
<dt>Regra das seis horas</dt>
<dd>Tomografia sem contraste feita em até seis horas do início, em aparelho moderno e laudada por radiologista experiente, tem sensibilidade próxima de 100% para hemorragia subaracnóidea.</dd>
<dt>Xantocromia</dt>
<dd>Cor amarelada do sobrenadante do líquor por bilirrubina derivada da degradação das hemácias; surge após 12 horas e persiste por duas semanas; distingue hemorragia de acidente de punção.</dd>
<dt>Regra de Ottawa</dt>
<dd>Idade de 40 ou mais, dor ou rigidez cervical, perda de consciência, início no esforço, trovoada e flexão cervical limitada; qualquer um presente exige investigação.</dd>
</dl>
<h4>O essencial</h4>
<p>A cefaleia em trovoada é um sinal de alarme absoluto: um quarto dos pacientes tem hemorragia subaracnóidea, cuja mortalidade chega a 50% e cujo ressangramento precoce é frequentemente fatal, e os demais diagnósticos possíveis também são graves.</p>
<p>O primeiro exame é a <strong>tomografia de crânio sem contraste</strong>.</p>
<p>Confirmada a hemorragia, a <strong>angiotomografia</strong> procura o aneurisma (presente em 85%), e a arteriografia digital é o padrão quando a angiotomografia é negativa ou para o planejamento do tratamento; a hemorragia perimesencefálica não aneurismática tem bom prognóstico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pior cefaleia da vida com rigidez de nuca e tomografia normal: punção lombar, procurando hemácias persistentes e xantocromia. A tomografia só exclui quando feita em até seis horas e sem sinais meníngeos. Angiotomografia é para achar o aneurisma depois, não para excluir o sangramento antes. Analgésico e observação é a resposta errada que mata.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Trovoada: pico em menos de um minuto; hemorragia subaracnóidea em 25%; regra de Ottawa seleciona quem investigar.</li>
<li>Tomografia sem contraste até seis horas quase exclui; depois disso, a sensibilidade cai e a punção lombar é obrigatória.</li>
<li>Punção após 12 horas: hemácias estáveis nos quatro tubos e xantocromia confirmam; queda de hemácias e sobrenadante claro indicam acidente de punção.</li>
<li>Confirmada a hemorragia, angiotomografia e, se negativa, arteriografia para o aneurisma.</li>
<li>Investigação negativa: vasoconstrição reversível, dissecção, trombose venosa, apoplexia hipofisária; angiografia arterial e venosa e ressonância.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que condições a tomografia normal exclui a hemorragia subaracnóidea sem punção lombar? <details><summary>Resposta</summary>Quando feita até seis horas do início, em aparelho moderno, laudada por radiologista experiente, em paciente sem rigidez de nuca e com exame neurológico normal.</details></li>
<li>Como a punção lombar distingue hemorragia subaracnóidea de acidente de punção? <details><summary>Resposta</summary>Pela persistência das hemácias do primeiro ao quarto tubo e pela xantocromia do sobrenadante na hemorragia; no acidente, as hemácias caem e o sobrenadante é claro.</details></li>
<li>Por que a angiotomografia não substitui a punção na investigação inicial? <details><summary>Resposta</summary>Porque aneurismas incidentais ocorrem em 2 a 3% das pessoas e sua presença não prova sangramento, nem sua ausência o exclui; ela serve para localizar o aneurisma após a confirmação.</details></li>
</ol>
`,

"famema2026#11": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a lesão renal aguda em pré-renal, intrínseca e pós-renal.</li>
<li>Interpretar os índices urinários e conhecer suas limitações com diuréticos.</li>
<li>Conduzir a lesão pré-renal no cardiopata com perdas digestivas e polifarmácia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Lesão renal aguda pré-renal</dt>
<dd>Queda da filtração por hipoperfusão, com túbulos íntegros que reabsorvem sódio e água ao máximo; reversível com a correção da causa.</dd>
<dt>Fração de excreção de sódio (FeNa)</dt>
<dd>Sódio excretado em relação ao filtrado; abaixo de 1% sugere pré-renal, acima de 2% necrose tubular; inválida sob diuréticos, na doença renal crônica e em algumas intrínsecas.</dd>
<dt>Fração de excreção de ureia (FeUreia)</dt>
<dd>Ureia excretada em relação à filtrada, reabsorvida no túbulo proximal e não afetada pelo diurético de alça; abaixo de 35% indica pré-renal, acima de 50% necrose tubular.</dd>
<dt>Densidade e osmolalidade urinárias</dt>
<dd>Urina concentrada (densidade acima de 1.020, osmolalidade acima de 500) indica túbulos funcionantes e causa pré-renal; isostenúria (1.010, 300) sugere lesão tubular.</dd>
</dl>
<h4>O essencial</h4>
<p>A lesão renal aguda, definida pelo KDIGO por elevação da creatinina ou queda da diurese, é classificada pelo local do problema.</p>
<p>Os <strong>índices urinários</strong> perguntam ao túbulo se ele está funcionando.</p>
<p>O tratamento da pré-renal é corrigir a causa: <strong>reposição volêmica</strong> guiada por resposta na hipovolemia, otimização do débito na insuficiência cardíaca (que pode exigir diurético, não volume, na síndrome cardiorrenal congestiva), e <strong>suspensão temporária</strong> das drogas que agravam a hemodinâmica renal: diuréticos, inibidores da ECA, BRA, sacubitril-valsartana, antagonistas mineralocorticoides e inibidores de SGLT2 ("regras do dia de doença"), além de anti-inflamatórios e metformina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cardiopata em furosemida com vômitos e diarreia, oligúria e creatinina dobrada: pré-renal, e o exame que confirma é a FeUreia abaixo de 35% (ou a densidade alta), porque a FeNa está falsamente elevada pelo diurético. Soro, pausar diurético, bloqueador do SRAA e gliflozina por uns dias, e reintroduzir ao recuperar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pré-renal: hipoperfusão com túbulos íntegros; intrínseca: necrose tubular, intersticial, glomerular, vascular; pós-renal: obstrução.</li>
<li>Pré-renal: sódio urinário abaixo de 20, FeNa abaixo de 1%, densidade acima de 1.020, ureia/creatinina acima de 40, sedimento limpo.</li>
<li>FeNa falha com diuréticos, doença renal crônica, glomerulonefrite, contraste, pigmento e obstrução precoce.</li>
<li>FeUreia abaixo de 35% indica pré-renal mesmo sob diurético; acima de 50%, necrose tubular.</li>
<li>Tratar a causa: volume, pausar diurético, IECA/BRA, sacubitril, espironolactona, SGLT2, AINE e metformina; reintroduzir na recuperação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a fração de excreção de sódio não serve para quem usa diurético de alça? <details><summary>Resposta</summary>Porque o diurético força a excreção de sódio e eleva a FeNa mesmo quando o rim está hipoperfundido e os túbulos íntegros.</details></li>
<li>Qual índice urinário substitui a FeNa nesse caso e qual é o corte para pré-renal? <details><summary>Resposta</summary>A fração de excreção de ureia, com valor abaixo de 35% indicando lesão pré-renal.</details></li>
<li>Que medicamentos devem ser pausados durante a lesão renal aguda pré-renal do cardiopata? <details><summary>Resposta</summary>Diuréticos, inibidores da ECA ou BRA, sacubitril-valsartana, antagonistas mineralocorticoides, inibidores de SGLT2, anti-inflamatórios e metformina, com reintrodução na recuperação.</details></li>
</ol>
`,

"famema2026#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar os cuidados pós-parada cardíaca: hemodinâmica, ventilação, coronariografia e neuroproteção.</li>
<li>Aplicar o controle direcionado de temperatura e a prevenção da febre.</li>
<li>Conduzir o prognóstico neurológico de forma multimodal e no tempo certo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome pós-parada cardíaca</dt>
<dd>Lesão cerebral anóxica, disfunção miocárdica, resposta sistêmica de isquemia-reperfusão e a patologia que causou a parada.</dd>
<dt>Controle direcionado de temperatura</dt>
<dd>Manutenção ativa da temperatura central numa faixa definida (32 a 36 ºC nas diretrizes de 2020; 32 a 37,5 ºC com prevenção de febre nas atualizações pós-TTM2) por pelo menos 24 horas, com reaquecimento lento.</dd>
<dt>Estudos TTM e TTM2</dt>
<dd>TTM (2013): 33 ºC igual a 36 ºC; TTM2 (2021): 33 ºC igual à normotermia com tratamento de febre; ambos sem diferença de mortalidade ou desfecho neurológico.</dd>
<dt>Prognóstico multimodal</dt>
<dd>Após 72 horas sem sedação: exame neurológico (pupilas, córneo, motor), potenciais evocados somatossensitivos, enolase neurônio-específica, eletroencefalograma e imagem; nunca um sinal isolado.</dd>
</dl>
<h4>O essencial</h4>
<p>O retorno da circulação espontânea é o começo de uma segunda fase crítica.</p>
<p>A febre após a parada piora o desfecho neurológico, e a hipotermia induzida foi, por duas décadas, o pilar da neuroproteção, com base em ensaios de 2002 que mostraram benefício a 32 a 34 ºC.</p>
<p>O <strong>prognóstico neurológico</strong> é a decisão mais delicada e não pode ser antecipada: a sedação, a hipotermia e a disfunção de órgãos mascaram o exame, e por isso a avaliação formal só começa <strong>72 horas após o retorno à normotermia</strong>, livre de sedativos, e deve ser <strong>multimodal</strong>: ausência bilateral de reflexos pupilar e córneo, resposta motora ausente ou em extensão, ausência bilateral da onda N20 nos potenciais evocados, enolase muito elevada, eletroencefalograma com padrão altamente maligno (supressão, surto-supressão) e edema difuso ou perda da diferenciação na imagem.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Comatoso após parada em fibrilação ventricular: cateterismo se o infarto é provável, pressão média de 65 ou mais, normoxemia e normocapnia, glicemia controlada e controle direcionado de temperatura (32 a 36 ºC por 24 horas ou mais, depois sem febre). Não resfrie abaixo de 32, não dê corticoide e não dê prognóstico antes de 72 horas sem sedação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Síndrome pós-parada: lesão cerebral, disfunção miocárdica, isquemia-reperfusão sistêmica e causa persistente; coronariografia se infarto provável.</li>
<li>Hemodinâmica com PAM de 65 ou mais; saturação de 92 a 98% sem hiperóxia; normocapnia; glicemia de 140 a 180; tratar convulsões.</li>
<li>Controle direcionado de temperatura em todo comatoso: 32 a 36 ºC (ou até 37,5 com prevenção ativa de febre) por pelo menos 24 horas, reaquecimento lento, sem febre por 72 horas.</li>
<li>Não resfriar abaixo de 32 ºC; corticoide em alta dose não protege o cérebro.</li>
<li>Prognóstico multimodal após 72 horas sem sedação: pupilas, córneo, motor, potenciais evocados, enolase, EEG e imagem.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a faixa de temperatura e a duração mínima do controle direcionado de temperatura pós-parada? <details><summary>Resposta</summary>Entre 32 e 36 ºC (as atualizações aceitam até 37,5 com prevenção ativa de febre), mantida por pelo menos 24 horas, com reaquecimento lento.</details></li>
<li>Por que não se resfria o paciente abaixo de 32 ºC? <details><summary>Resposta</summary>Porque aumenta arritmias, coagulopatia e infecções sem benefício neurológico adicional.</details></li>
<li>Quando e como se define o prognóstico neurológico após a parada? <details><summary>Resposta</summary>Pelo menos 72 horas após o retorno à normotermia e sem sedação, de forma multimodal, exigindo dois ou mais achados concordantes.</details></li>
</ol>
`,

"famema2026#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Calcular o CURB-65 e o CRB-65 e traduzi-los em local de tratamento.</li>
<li>Conhecer os critérios de gravidade da ATS/IDSA para a internação em UTI.</li>
<li>Escolher o antibiótico empírico da pneumonia adquirida na comunidade conforme o cenário.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>CURB-65</dt>
<dd>Confusão, ureia acima de 50 mg/dL (ou 43 nas versões com 7 mmol/L), frequência respiratória de 30 ou mais, pressão sistólica abaixo de 90 ou diastólica de 60 ou menos, idade de 65 ou mais; um ponto cada.</dd>
<dt>CRB-65</dt>
<dd>Versão sem a ureia, para a atenção primária: 0 trata em casa, 1 a 2 considera internar, 3 a 4 interna com urgência.</dd>
<dt>Critérios ATS/IDSA de pneumonia grave</dt>
<dd>Um maior (ventilação mecânica invasiva ou choque com vasopressor) ou três menores (FR de 30 ou mais, PaO2/FiO2 de 250 ou menos, infiltrado multilobar, confusão, ureia de 43 ou mais, leucopenia, plaquetopenia, hipotermia, hipotensão que exige volume).</dd>
<dt>Pneumonia Severity Index</dt>
<dd>Escore de 20 variáveis em cinco classes; mais acurado para identificar baixo risco, porém trabalhoso.</dd>
</dl>
<h4>O essencial</h4>
<p>A decisão mais importante na pneumonia adquirida na comunidade é onde tratar, porque ela define o antibiótico, a via e o custo, e a estimativa subjetiva erra para os dois lados. O <strong>CURB-65</strong> é o escore mais simples: cinco critérios de <strong>igual peso</strong>, um ponto cada.</p>
<p>A necessidade de <strong>UTI</strong> é definida pelos critérios da <strong>ATS/IDSA</strong>: um critério maior (ventilação mecânica ou choque séptico) ou três menores.</p>
<p>O <strong>antibiótico</strong> segue o cenário. Ambulatorial sem comorbidades: amoxicilina em dose alta ou macrolídeo (claritromicina, azitromicina), por 5 a 7 dias, ou doxiciclina. Ambulatorial com comorbidades (DPOC, diabetes, insuficiência cardíaca, renal, hepática, alcoolismo, neoplasia): amoxicilina-clavulanato ou cefuroxima associados a macrolídeo, ou quinolona respiratória (levofloxacino, moxifloxacino) isolada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>CURB-65 é um ponto por letra, sem pesos: 0 a 1 em casa, 2 na enfermaria, 3 ou mais pensa em UTI, e quem define a UTI de verdade são os critérios da ATS/IDSA. Idade de 65 sozinha não interna ninguém. Confira sempre a saturação, porque o CURB-65 não a inclui e ela interna por si só.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>CURB-65: confusão, ureia acima de 50, FR de 30 ou mais, PA abaixo de 90/60, idade de 65 ou mais; um ponto cada.</li>
<li>0 a 1: ambulatorial; 2: internação; 3 ou mais: alto risco, avaliar UTI; CRB-65 na atenção primária.</li>
<li>Complementar com saturação, comorbidades, via oral e suporte social; UTI pelos critérios ATS/IDSA (1 maior ou 3 menores).</li>
<li>Antibiótico: amoxicilina ou macrolídeo em casa; betalactâmico mais macrolídeo ou quinolona nos internados; MRSA e Pseudomonas só com fatores de risco.</li>
<li>Duração de 5 a 7 dias com estabilidade clínica; corticoide na pneumonia grave com insuficiência respiratória.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os cinco critérios do CURB-65 e qual é o peso de cada um? <details><summary>Resposta</summary>Confusão, ureia acima de 50 mg/dL, frequência respiratória de 30 ou mais, pressão sistólica abaixo de 90 ou diastólica de 60 ou menos, e idade de 65 anos ou mais; um ponto cada.</details></li>
<li>Que conduta corresponde a cada faixa do CURB-65? <details><summary>Resposta</summary>0 a 1: tratamento ambulatorial; 2: internação hospitalar; 3 ou mais: alto risco de morte, internação com avaliação de UTI.</details></li>
<li>O que define pneumonia grave com indicação de UTI pelos critérios ATS/IDSA? <details><summary>Resposta</summary>Um critério maior (ventilação mecânica invasiva ou choque séptico) ou três critérios menores.</details></li>
</ol>
`,

"famema2026#94": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a definição e o estadiamento KDIGO da lesão renal aguda.</li>
<li>Diferenciar lesão renal aguda, doença renal aguda e doença renal crônica.</li>
<li>Reconhecer as indicações de terapia de substituição renal.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Definição KDIGO de lesão renal aguda</dt>
<dd>Creatinina com aumento de 0,3 mg/dL em 48 horas, ou 1,5 vez o basal em sete dias, ou diurese abaixo de 0,5 mL/kg/h por seis horas.</dd>
<dt>Estágios KDIGO</dt>
<dd>1: creatinina 1,5 a 1,9 × ou +0,3, diurese abaixo de 0,5 por 6 a 12 h; 2: 2 a 2,9 ×, diurese abaixo de 0,5 por 12 h ou mais; 3: 3 × ou mais, ou 4 mg/dL ou mais, ou diálise, ou diurese abaixo de 0,3 por 24 h ou anúria por 12 h.</dd>
<dt>Doença renal aguda</dt>
<dd>Alteração de função ou estrutura renal com duração de 7 a 90 dias, ponte entre a lesão aguda e a doença crônica.</dd>
<dt>Doença renal crônica</dt>
<dd>TFG abaixo de 60 ou marcador de dano renal por mais de 90 dias.</dd>
</dl>
<h4>O essencial</h4>
<p>Até 2012 conviviam várias definições de lesão renal aguda (RIFLE, AKIN), e o <strong>KDIGO</strong> as unificou com dois parâmetros simples: a <strong>creatinina sérica</strong> e o <strong>débito urinário</strong>. Há lesão renal aguda quando a creatinina sobe <strong>0,3 mg/dL ou mais em 48 horas</strong>, ou <strong>1,5 vez o valor basal</strong> conhecido ou presumido nos últimos sete dias, ou quando a diurese fica <strong>abaixo de 0,5 mL/kg/hora por seis horas</strong>.</p>
<p>O <strong>estadiamento</strong> em três estágios usa o pior dos dois critérios e orienta prognóstico e conduta: o estágio 1 pede revisão de medicamentos, volemia e nefrotóxicos; o 2, monitorização intensiva e ajuste de doses; o 3, avaliação de diálise.</p>
<p>O manejo é de suporte e de proteção: tratar a causa, otimizar a volemia com reavaliação dinâmica (nem hipovolemia nem sobrecarga), manter pressão de perfusão, suspender nefrotóxicos (anti-inflamatórios, aminoglicosídeos, contraste, vancomicina quando possível) e ajustar doses, controlar potássio, acidose e fósforo, e oferecer nutrição adequada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>KDIGO é creatinina e diurese, nada mais: 0,3 em 48 horas, 1,5 vez em sete dias, 0,5 mL/kg/h por seis horas. Relação ureia/creatinina e FeNa são ferramentas de causa, não de definição, e 1 mL/kg/h é um corte inventado. Estágio 3 é creatinina três vezes o basal, acima de 4 ou diálise.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Definição KDIGO: creatinina +0,3 mg/dL em 48 h, ou 1,5 × o basal em 7 dias, ou diurese abaixo de 0,5 mL/kg/h por 6 h.</li>
<li>Estágios 1 a 3 pelo pior critério; estágio 3 inclui creatinina 3 ×, acima de 4 mg/dL, diálise, diurese abaixo de 0,3 por 24 h ou anúria por 12 h.</li>
<li>Lesão aguda até 7 dias; doença renal aguda de 7 a 90; doença crônica acima de 90; podem se sobrepor.</li>
<li>FeNa, ureia/creatinina e densidade classificam a causa, não definem a lesão.</li>
<li>Suporte: volemia, perfusão, retirar nefrotóxicos, ajustar doses; diálise por complicações refratárias; seguimento em 90 dias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os três critérios que definem lesão renal aguda pelo KDIGO? <details><summary>Resposta</summary>Aumento da creatinina de 0,3 mg/dL ou mais em 48 horas, aumento de 1,5 vez o basal em sete dias, ou diurese abaixo de 0,5 mL/kg/h por seis horas.</details></li>
<li>O que define o estágio 3 da lesão renal aguda? <details><summary>Resposta</summary>Creatinina três vezes o basal ou acima de 4 mg/dL, início de diálise, diurese abaixo de 0,3 mL/kg/h por 24 horas ou anúria por 12 horas.</details></li>
<li>Como se diferenciam lesão renal aguda, doença renal aguda e doença renal crônica? <details><summary>Resposta</summary>Pelo tempo: até 7 dias, de 7 a 90 dias e acima de 90 dias, respectivamente.</details></li>
</ol>
`,

"famema2026#96": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Correlacionar os territórios das artérias cerebrais com as síndromes clínicas do AVC.</li>
<li>Reconhecer a síndrome da artéria cerebral posterior e suas variantes talâmicas.</li>
<li>Distinguir as síndromes de circulação anterior e posterior para o diagnóstico e a conduta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Artéria cerebral média</dt>
<dd>Irriga a convexidade frontoparietotemporal, a cápsula interna e os gânglios da base; hemiparesia e hemi-hipoestesia braquiofaciais, afasia (esquerda) ou negligência (direita), desvio do olhar.</dd>
<dt>Artéria cerebral anterior</dt>
<dd>Irriga a face medial dos lobos frontal e parietal; paresia e hipoestesia crurais, abulia, incontinência, reflexo de preensão.</dd>
<dt>Artéria cerebral posterior</dt>
<dd>Irriga o lobo occipital, a face inferomedial do temporal e, por perfurantes, o tálamo e o mesencéfalo; hemianopsia homônima, déficit sensitivo talâmico, alexia sem agrafia, amnésia.</dd>
<dt>Hemianopsia homônima</dt>
<dd>Perda do mesmo hemicampo visual nos dois olhos, por lesão retroquiasmática contralateral; com preservação macular na lesão occipital por dupla irrigação do polo.</dd>
</dl>
<h4>O essencial</h4>
<p>O AVC isquêmico produz síndromes previsíveis porque cada artéria tem território fixo, e reconhecer o território orienta a imagem, a busca da fonte embólica e as decisões de trombólise e trombectomia.</p>
<p>A <strong>circulação posterior</strong> (vertebrobasilar) nutre tronco, cerebelo e as cerebrais posteriores.</p>
<p>Clinicamente, a distinção importa. Síndromes da circulação posterior podem apresentar-se com vertigem, diplopia, disartria, ataxia e rebaixamento, confundem-se com causas benignas e exigem atenção à artéria basilar, cuja oclusão é devastadora e beneficia-se de trombectomia em janela ampliada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hemianopsia homônima com hemi-hipoestesia e força preservada é cerebral posterior (occipital mais tálamo). Se houvesse hemiparesia braquiofacial com afasia ou negligência, seria cerebral média; se o déficit fosse da perna, cerebral anterior. Déficits "só de visão e sensibilidade" pontuam pouco no NIHSS, mas são AVC e merecem a mesma pressa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cerebral média: hemiparesia e hipoestesia braquiofaciais, desvio do olhar, afasia (esquerda) ou negligência (direita), hemianopsia possível.</li>
<li>Cerebral anterior: déficit crural, abulia, incontinência, reflexos frontais.</li>
<li>Cerebral posterior: hemianopsia homônima com preservação macular (occipital) e hemi-hipoestesia global (tálamo), sem fraqueza; alexia sem agrafia, amnésia.</li>
<li>Circulação posterior: vertigem, diplopia, ataxia, rebaixamento; NIHSS subestima; ressonância com difusão é mais sensível; atenção à basilar.</li>
<li>Conduta aguda igual: tomografia, trombólise até 4,5 h, angiotomografia e trombectomia; prevenção secundária pela fonte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que estruturas a artéria cerebral posterior irriga e que déficits sua oclusão produz? <details><summary>Resposta</summary>O lobo occipital e o tálamo, produzindo hemianopsia homônima contralateral com preservação macular e hemi-hipoestesia de todas as modalidades, sem fraqueza.</details></li>
<li>Como se distingue a síndrome da cerebral média da síndrome da cerebral posterior? <details><summary>Resposta</summary>A cerebral média causa hemiparesia braquiofacial com afasia ou negligência; a posterior causa déficit visual e sensitivo sem fraqueza nem afasia.</details></li>
<li>Por que a tomografia inicial pode falhar no AVC de circulação posterior? <details><summary>Resposta</summary>Porque a fossa posterior sofre artefatos ósseos e os infartos pequenos de tronco e tálamo não aparecem; a ressonância com difusão é mais sensível.</details></li>
</ol>
`,

"famema2026#98": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Entender o que a capnografia mede durante a reanimação cardiopulmonar.</li>
<li>Usar o ETCO2 para confirmar a via aérea, avaliar as compressões e detectar o retorno da circulação.</li>
<li>Interpretar o valor de 10 mmHg no prognóstico e na decisão de interromper a reanimação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Capnografia com forma de onda</dt>
<dd>Registro contínuo do CO2 exalado ao longo do ciclo respiratório; o valor ao fim da expiração (ETCO2) reflete a ventilação alveolar e o fluxo sanguíneo pulmonar.</dd>
<dt>ETCO2 na parada</dt>
<dd>Com ventilação constante, o CO2 exalado depende do débito cardíaco gerado pelas compressões; valores de 10 a 20 mmHg indicam compressões eficazes.</dd>
<dt>Elevação abrupta do ETCO2</dt>
<dd>Salto para 35 a 40 mmHg ou mais durante a RCP, sinal mais precoce de retorno da circulação espontânea, antes do pulso palpável.</dd>
<dt>Critérios para interromper a RCP</dt>
<dd>Decisão multifatorial: ritmo não chocável persistente, parada não presenciada, sem retorno após 20 minutos de suporte avançado e ETCO2 persistentemente abaixo de 10 mmHg.</dd>
</dl>
<h4>O essencial</h4>
<p>O CO2 que chega ao pulmão depende de três coisas: produção tecidual, transporte pelo sangue e ventilação alveolar. Durante a parada cardíaca, com o paciente intubado e ventilado de forma constante (10 ventilações por minuto), a produção é estável e a ventilação é fixa; o que varia é o <strong>fluxo sanguíneo pulmonar</strong>, isto é, o débito cardíaco gerado pelas compressões.</p>
<p>Os números orientam.</p>
<p>No <strong>prognóstico</strong>, o ETCO2 <strong>persistentemente abaixo de 10 mmHg após 20 minutos</strong> de suporte avançado em paciente intubado associa-se a probabilidade muito baixa de retorno da circulação e de sobrevida, e é um dos elementos, junto com ritmo não chocável, parada não presenciada e ausência de causa reversível, que apoiam a decisão de interromper a reanimação; nunca deve ser usado isoladamente, nem nos primeiros minutos, nem em paradas por hipotermia, afogamento ou intoxicação, nem com ventilação por máscara, em que a medida é imprecisa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Durante a RCP, ETCO2 abaixo de 10 é mau sinal: ou as compressões estão ruins ou o prognóstico é sombrio; acima de 20 é o alvo; salto para 40 é o coração voltando. Nenhum valor de ETCO2 diagnostica tamponamento ou obstrução de via aérea por si só, e a decisão de parar a reanimação é sempre multifatorial.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Na parada, com ventilação fixa, o ETCO2 reflete o débito cardíaco das compressões.</li>
<li>Confirma e monitora a posição do tubo traqueal melhor que a ausculta.</li>
<li>Meta durante a RCP: acima de 10, idealmente acima de 20 mmHg; abaixo de 10 pede corrigir técnica ou trocar socorrista.</li>
<li>Elevação abrupta para 35 a 40 mmHg ou mais é o sinal mais precoce de retorno da circulação.</li>
<li>Abaixo de 10 mmHg após 20 minutos de suporte avançado: prognóstico muito ruim; apoia, mas não decide sozinho, a interrupção; após o retorno, manter 35 a 40.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que determina o valor do ETCO2 durante a reanimação cardiopulmonar? <details><summary>Resposta</summary>Com ventilação constante, o fluxo sanguíneo pulmonar gerado pelas compressões, ou seja, a qualidade da RCP.</details></li>
<li>Que valor de ETCO2 indica compressões inadequadas e o que fazer? <details><summary>Resposta</summary>Abaixo de 10 mmHg; corrigir profundidade, frequência e apoio, trocar o socorrista e evitar hiperventilação.</details></li>
<li>Como o ETCO2 anuncia o retorno da circulação espontânea? <details><summary>Resposta</summary>Por uma elevação abrupta para 35 a 40 mmHg ou mais, antes mesmo do pulso palpável.</details></li>
</ol>
`,

"famema2026#99": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir sepse e choque séptico pelo Sepsis-3 e entender o papel do SOFA.</li>
<li>Comparar SIRS, qSOFA, NEWS e MEWS como ferramentas de triagem.</li>
<li>Aplicar a recomendação da Surviving Sepsis Campaign sobre triagem no departamento de emergência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sepsis-3</dt>
<dd>Sepse é disfunção orgânica ameaçadora à vida causada por resposta desregulada à infecção, operacionalizada como aumento de 2 pontos no SOFA; choque séptico é sepse com vasopressor para PAM de 65 e lactato acima de 2 após volume.</dd>
<dt>qSOFA</dt>
<dd>Frequência respiratória de 22 ou mais, pressão sistólica de 100 ou menos, alteração do estado mental; dois ou mais pontos indicam alto risco de morte, com baixa sensibilidade.</dd>
<dt>SIRS</dt>
<dd>Temperatura acima de 38 ou abaixo de 36, frequência cardíaca acima de 90, respiratória acima de 20 ou PaCO2 abaixo de 32, leucócitos acima de 12.000 ou abaixo de 4.000 ou mais de 10% de bastões; dois ou mais; sensível e inespecífico.</dd>
<dt>NEWS</dt>
<dd>National Early Warning Score: frequência respiratória, saturação, oxigênio suplementar, temperatura, pressão sistólica, frequência cardíaca e consciência; 5 ou mais indica alto risco; melhor acurácia global.</dd>
</dl>
<h4>O essencial</h4>
<p>O Sepsis-3 mudou o conceito: sepse deixou de ser infecção com SIRS e passou a ser infecção com <strong>disfunção orgânica</strong>, medida pelo <strong>SOFA</strong> (respiração, coagulação, fígado, cardiovascular, sistema nervoso e rim), com aumento de 2 pontos sobre o basal.</p>
<p>Os estudos de validação mostraram as limitações.</p>
<p>Na prática, a triagem é um sistema, não um número: aferição completa de sinais vitais na chegada, escore de alerta precoce, pergunta ativa sobre infecção, lactato nos suspeitos e avaliação médica em minutos; a confirmação da disfunção vem do SOFA e do lactato.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Decore os perfis: SIRS sensível e inespecífico; qSOFA específico e pouco sensível, por isso não deve ser usado sozinho na emergência; SOFA define disfunção, mas não tria; NEWS tem a melhor acurácia. A questão que inverte sensibilidade e especificidade do SIRS ou chama o NEWS de pior está errada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sepsis-3: sepse é infecção com disfunção orgânica (SOFA +2); choque séptico exige vasopressor e lactato acima de 2.</li>
<li>SOFA define e gradua, mas depende de exames e não serve à triagem.</li>
<li>qSOFA: alta especificidade, baixa sensibilidade; não usar isoladamente na triagem (SSC 2021).</li>
<li>SIRS: alta sensibilidade, baixa especificidade; NEWS e MEWS têm acurácia igual ou melhor e se aplicam a todos.</li>
<li>Triagem é sistema: sinais vitais, escore de alerta, suspeita de infecção, lactato, avaliação médica rápida e antibiótico no tempo certo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o perfil de sensibilidade e especificidade do qSOFA e qual é a consequência prática? <details><summary>Resposta</summary>Alta especificidade e baixa sensibilidade; por isso não deve ser usado como ferramenta única de triagem, pois deixa passar metade dos sépticos na chegada.</details></li>
<li>Por que o SOFA não é um instrumento de triagem? <details><summary>Resposta</summary>Porque depende de exames laboratoriais e gasometria e serve para definir e graduar a disfunção orgânica, não para o reconhecimento rápido na porta de entrada.</details></li>
<li>Que escores a Surviving Sepsis Campaign prefere ao qSOFA para a triagem? <details><summary>Resposta</summary>SIRS, NEWS ou MEWS, que têm maior sensibilidade e, no caso do NEWS, melhor acurácia global.</details></li>
</ol>
`,
};
