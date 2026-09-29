/* "Sobre a matéria" — a página de livro-texto de cada questão de ped.
   Chave "fonte#numero" (a mesma da entrada); HTML em linhas, uma tag de
   bloco por linha (montar.js tira as quebras). Seis partes na ordem:
   Objetivos de aprendizagem · Termos-chave · O essencial · Ponto clínico
   (div.ponto) · Resumo · Verifique o que aprendeu. As regras estão em
   verificar.js. Escrito à mão. */
module.exports = {
"susp2026#41": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Dizer o que cada índice antropométrico da Caderneta mede.</li>
<li>Separar déficit crônico (baixa estatura) de déficit agudo (magreza).</li>
<li>Aplicar os pontos de corte do SISVAN em escore z.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Escore z</dt>
<dd>Quantos desvios-padrão a medida está acima ou abaixo da mediana da OMS.</dd>
<dt>Estatura-para-idade</dt>
<dd>Crescimento linear acumulado; a altura não se perde.</dd>
<dt>Peso-para-estatura</dt>
<dd>Proporção corporal no momento; cai em dias quando a criança adoece.</dd>
<dt>Stunting</dt>
<dd>Baixa estatura de causa nutricional, o retardo do crescimento linear.</dd>
</dl>
<h4>O essencial</h4>
<p>A avaliação nutricional compara peso, estatura e perímetro cefálico com as curvas da OMS, em <strong>escore z</strong>, com cortes do SISVAN em −3, −2, +1, +2 e +3. Cada índice responde a uma pergunta. O <strong>peso-para-idade</strong> é global e não distingue a criança baixa e proporcional da criança magra. A <strong>estatura-para-idade</strong> pergunta se a criança cresceu o que devia: um déficit aqui é o somatório de agressões prolongadas (desnutrição, infecções de repetição, pobreza), porque a altura não se perde. O <strong>peso-para-estatura</strong> e o <strong>IMC-para-idade</strong> perguntam se a massa está adequada à altura atual: são os índices da desnutrição aguda e do excesso de peso.</p>
<p>Daí a leitura clássica: <strong>baixa estatura é déficit crônico; magreza é déficit agudo</strong>. A criança pode estar baixa com peso proporcional (crônico compensado), baixa e magra (crônico agudizado) ou alta e magra (agudo puro). Nas populações, a prevalência de baixa estatura é o indicador que melhor espelha as condições de vida, e por isso é o escolhido para vigilância.</p>
<p>Cortes para menores de 5 anos: estatura-para-idade abaixo de −2 é baixa estatura (abaixo de −3, muito baixa); peso-para-estatura ou IMC abaixo de −2 é magreza; acima de +2, sobrepeso; acima de +3, obesidade; entre +1 e +2, risco de sobrepeso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Uma medida diz pouco; a <strong>velocidade</strong> diz muito. A criança que cruza linhas de percentil para baixo em duas consultas seguidas merece investigação antes de chegar a −2. Meça, plote e mostre a curva à família.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Escore z contra a mediana da OMS; cortes em −3, −2, +1, +2 e +3.</li>
<li>Estatura-para-idade: déficit crônico. Peso-para-estatura e IMC: déficit agudo ou excesso.</li>
<li>Peso-para-idade não separa baixo de magro.</li>
<li>Baixa estatura é o indicador populacional das condições de vida.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 3 anos com estatura-para-idade em −2,5 e peso-para-estatura em 0. Como classificar? <details><summary>Resposta</summary>Baixa estatura com peso adequado para a estatura: déficit crônico sem desnutrição aguda.</details></li>
<li>Que índice cai primeiro quando a criança fica duas semanas doente e comendo pouco? <details><summary>Resposta</summary>O peso-para-estatura: o peso responde em dias e a altura não se perde.</details></li>
</ol>
`,
"susp2026#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o molusco contagioso pela morfologia da lesão.</li>
<li>Explicar por que a conduta padrão na criança saudável é não tratar.</li>
<li>Saber quando o tratamento ativo é indicado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Poxvírus</dt>
<dd>Vírus de DNA do molusco; infecta só o epitélio.</dd>
<dt>Umbilicação central</dt>
<dd>Depressão no centro da pápula, por onde sai o material caseoso rico em vírus.</dd>
<dt>Autoinoculação</dt>
<dd>Disseminação das lesões pelo próprio paciente, por coçadura.</dd>
<dt>Eczema do molusco</dt>
<dd>Placa eczematosa ao redor das lesões no atópico; não é infecção secundária.</dd>
</dl>
<h4>O essencial</h4>
<p>O molusco contagioso é uma infecção viral <strong>benigna e autolimitada</strong> da pele, comum entre 2 e 10 anos, transmitida por contato direto, objetos compartilhados e autoinoculação. O diagnóstico é <strong>clínico</strong>: pápulas de 2 a 5 mm, firmes, lisas, rosadas ou da cor da pele, em cúpula, com <strong>umbilicação central</strong>, agrupadas no tronco, nas axilas e nas dobras. Não há sintomas sistêmicos; no atópico as lesões são numerosas e cercadas de eczema.</p>
<p>Cada lesão dura 2 a 6 meses e o conjunto desaparece em <strong>6 a 18 meses</strong>, sem cicatriz. Por isso a conduta padrão é <strong>acompanhar sem tratar</strong>, explicando que a doença é benigna e contagiosa por contato. Curetagem, crioterapia e cáusticos doem, podem deixar cicatriz e não encurtam a evolução de forma convincente. O tratamento ativo fica para lesões muito numerosas ou em áreas expostas com prejuízo psicossocial, para a atopia grave e para o imunossuprimido, em quem as lesões são gigantes e persistentes.</p>
<p>Diferenciais: a verruga vulgar é áspera e sem umbilicação; no paciente com HIV avançado, criptococose e histoplasmose imitam molusco e pedem biópsia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Molusco que fica vermelho e dolorido em criança bem é a <strong>resposta imune que anuncia a cura</strong>, não infecção bacteriana; antibiótico só com pus, celulite ou febre. Cubra as lesões em esportes de contato e não compartilhe toalha.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pápula lisa, firme, em cúpula, com umbilicação central: diagnóstico clínico.</li>
<li>Regride sozinha em 6 a 18 meses, sem cicatriz.</li>
<li>Conduta padrão: acompanhar e orientar.</li>
<li>Tratar se muitas lesões, atopia grave, prejuízo social ou imunossupressão.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que característica da pápula fecha o diagnóstico? <details><summary>Resposta</summary>A umbilicação central na pápula lisa e firme.</details></li>
<li>Lesão de molusco avermelhada e dolorida, sem pus e sem febre: o que fazer? <details><summary>Resposta</summary>Nada além de observar; é a inflamação que precede a regressão espontânea.</details></li>
</ol>
`,
"susp2026#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar IgM, IgG e avidez na triagem da toxoplasmose gestacional.</li>
<li>Descrever a investigação do recém-nascido exposto, mesmo assintomático.</li>
<li>Saber os esquemas de tratamento da gestante e do recém-nascido.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Avidez de IgG</dt>
<dd>Alta avidez indica infecção com mais de 12 a 16 semanas.</dd>
<dt>Tríade de Sabin</dt>
<dd>Coriorretinite, hidrocefalia e calcificações intracranianas.</dd>
<dt>Espiramicina</dt>
<dd>Reduz a transmissão placentária; não trata o feto já infectado.</dd>
<dt>Esquema tríplice</dt>
<dd>Sulfadiazina, pirimetamina e ácido folínico, no feto infectado e no recém-nascido.</dd>
</dl>
<h4>O essencial</h4>
<p>O <em>Toxoplasma gondii</em> chega pela carne malcozida e por água ou alimentos com oocistos. Na gestante a infecção é quase sempre assintomática; a <strong>transmissão ao feto sobe com a idade gestacional</strong>, mas a gravidade cai. IgG e IgM negativas definem a suscetível, que repete a sorologia a cada trimestre. IgG positiva com IgM negativa é infecção antiga. <strong>IgM e IgG positivas</strong> exigem datar: até 16 semanas, a <strong>avidez alta</strong> afasta infecção na gestação; avidez baixa, IgA positiva ou soroconversão indicam infecção aguda, que inicia <strong>espiramicina</strong> e investiga o feto com PCR do líquido amniótico a partir de 18 semanas; feto infectado troca para o esquema tríplice.</p>
<p>O <strong>recém-nascido exposto</strong> é investigado sempre, ainda que a mãe tenha sido tratada e ele pareça normal, porque a maioria dos infectados nasce assintomática e desenvolve coriorretinite ou déficit neurológico depois. Faz-se <strong>sorologia do bebê</strong> (IgM e IgA, que não atravessam a placenta; IgG comparada com a materna e seguida até negativar), <strong>fundo de olho</strong>, <strong>ultrassonografia transfontanelar</strong>, hemograma, líquor quando indicado e avaliação auditiva. Uma IgM negativa não afasta a infecção: a sensibilidade é limitada, e por isso imagem e fundo de olho completam a sorologia.</p>
<p>O infectado recebe sulfadiazina, pirimetamina e ácido folínico por <strong>12 meses</strong>, com corticoide se houver coriorretinite ativa, e é seguido com hemograma pela toxicidade medular da pirimetamina.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Registre na alta da maternidade as sorologias com datas, o tratamento materno, os exames feitos e os que faltam. Sem esse registro a criança se perde entre a atenção básica e o ambulatório de infecção congênita.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Transmissão fetal aumenta com a idade gestacional; gravidade diminui.</li>
<li>IgM e IgG positivas: datar com avidez, IgA e soroconversão.</li>
<li>Gestante aguda: espiramicina; feto infectado: tríplice.</li>
<li>Recém-nascido exposto: sorologia, fundo de olho, imagem do crânio e seguimento, mesmo assintomático.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>IgG de alta avidez em gestante de 12 semanas com IgM positiva: o que significa? <details><summary>Resposta</summary>Infecção com mais de 12 a 16 semanas, anterior à gestação; sem risco fetal.</details></li>
<li>Recém-nascido exposto com IgM negativa: a investigação acabou? <details><summary>Resposta</summary>Não; faz-se fundo de olho, imagem do crânio e seguimento da IgG até negativar.</details></li>
</ol>
`,
"susp2026#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Tratar a crise epiléptica aguda com o benzodiazepínico certo pela via disponível.</li>
<li>Distinguir convulsão febril de crise epiléptica pela idade e pela história.</li>
<li>Decidir quando iniciar o anticonvulsivante de manutenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Estado de mal epiléptico</dt>
<dd>Crise com mais de 5 minutos, ou crises repetidas sem recuperar a consciência.</dd>
<dt>Convulsão febril</dt>
<dd>Crise com febre entre 6 meses e 5 anos, sem infecção do sistema nervoso.</dd>
<dt>Epilepsia</dt>
<dd>Duas crises não provocadas com mais de 24 horas de intervalo.</dd>
<dt>Período pós-ictal</dt>
<dd>Sonolência ou confusão após a crise, que regride em minutos a horas.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante da criança convulsionando: <strong>proteger, oxigenar, medir a glicemia e cronometrar</strong>. Crise que passa de 5 minutos dificilmente cessa sozinha e é tratada como estado de mal. O primeiro fármaco é um <strong>benzodiazepínico</strong> pela via disponível no instante: <strong>midazolam</strong> intramuscular, intranasal ou bucal sem acesso venoso; <strong>diazepam</strong> intravenoso ou retal. O diazepam não serve por via intramuscular nem nasal. Persistindo após 5 minutos, repete-se uma vez; depois vêm fenitoína, fenobarbital, valproato ou levetiracetam intravenosos e, se preciso, sedação em terapia intensiva.</p>
<p>Passada a crise, pergunta-se <strong>por quê</strong>. A convulsão febril é a causa mais comum entre 6 meses e 5 anos: generalizada, breve, única no episódio, com recuperação completa e exame normal. Fora dessa faixa, ou com crise focal, prolongada ou repetida, o rótulo não cabe mesmo com febre; a febre pode ter apenas baixado o limiar de uma epilepsia que já existia.</p>
<p>A decisão de <strong>iniciar anticonvulsivante</strong> depende do risco de recorrência. Primeira crise não provocada, breve, com exame normal: observar sem remédio. Duas ou mais crises não provocadas, crise prolongada ou sinais de lesão estrutural: iniciar na alta (valproato ou levetiracetam nas generalizadas; carbamazepina ou oxcarbazepina nas focais), com eletroencefalograma e neurologista.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O midazolam bucal ou nasal pode ser prescrito à família da criança com crises recorrentes, para usar se a crise passar de 5 minutos. Posição lateral, nada na boca e marcar o tempo evitam a maior parte dos danos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mais de 5 minutos: benzodiazepínico já, pela via disponível.</li>
<li>Midazolam: IM, nasal ou bucal; diazepam: IV ou retal.</li>
<li>Convulsão febril: 6 meses a 5 anos, breve, generalizada, exame normal.</li>
<li>Crises repetidas não provocadas: manutenção e neurologista.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Crise há 6 minutos e sem acesso venoso: qual fármaco e qual via? <details><summary>Resposta</summary>Midazolam intramuscular, intranasal ou bucal.</details></li>
<li>Crise com febre aos 8 anos pode ser chamada de convulsão febril? <details><summary>Resposta</summary>Não; a definição vai de 6 meses a 5 anos. Investiga-se epilepsia ou infecção do sistema nervoso.</details></li>
</ol>
`,
"susp2026#45": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o escorpionismo em leve, moderado e grave pelos sinais sistêmicos.</li>
<li>Indicar o soro antiescorpiônico na dose de cada classe.</li>
<li>Reconhecer a complicação cardíaca e os exames que a detectam.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tityus serrulatus</dt>
<dd>Escorpião amarelo, responsável pela maioria dos acidentes graves no Brasil.</dd>
<dt>Tempestade adrenérgica</dt>
<dd>Liberação maciça de catecolaminas pela toxina: taquicardia, hipertensão, sudorese.</dd>
<dt>Soro antiescorpiônico</dt>
<dd>Antiveneno intravenoso para os casos moderados e graves.</dd>
<dt>Miocardite tóxica</dt>
<dd>Lesão do miocárdio pela toxina e pelas catecolaminas; leva à insuficiência cardíaca.</dd>
</dl>
<h4>O essencial</h4>
<p>O veneno age nos <strong>canais de sódio</strong> das terminações nervosas e provoca descarga autonômica intensa. Começa com <strong>dor local imediata</strong>, em queimação, com parestesia e pouco edema, sem necrose. Na criança pequena a dose por quilo é maior e as manifestações sistêmicas aparecem nas primeiras horas.</p>
<p>O acidente <strong>leve</strong> tem só dor e parestesia. O <strong>moderado</strong> soma náuseas, um ou dois vômitos, sudorese, taquicardia, hipertensão leve, agitação. O <strong>grave</strong> traz vômitos incoercíveis, sudorese profusa, sialorreia, prostração, bradicardia ou taquicardia importante, hipotensão, arritmias, <strong>edema agudo de pulmão</strong> e <strong>choque</strong>. A dor é tratada com analgésicos e bloqueio local com lidocaína sem vasoconstritor. As manifestações sistêmicas exigem <strong>soro antiescorpiônico</strong> intravenoso o mais cedo possível: 2 a 3 ampolas no moderado, 4 a 6 no grave; o leve não recebe soro. Moderado e grave ficam internados e monitorados.</p>
<p>A complicação que mata é a <strong>cardíaca</strong>: miocardite tóxica com disfunção ventricular, arritmias e edema pulmonar, que pode surgir horas após a picada. O caso grave faz <strong>eletrocardiograma</strong>, <strong>ecocardiograma</strong> e troponina, além de radiografia de tórax se há dispneia. A função cardíaca costuma se recuperar em dias.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Não espere o edema pulmonar para classificar como grave: vômitos repetidos, sudorese e prostração já bastam, e soro nas primeiras horas muda o desfecho. O acidente é de notificação compulsória.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Leve: só dor. Moderado: sinais sistêmicos discretos. Grave: vômitos incoercíveis, sudorese profusa, choque, edema pulmonar.</li>
<li>Soro IV: 2 a 3 ampolas no moderado, 4 a 6 no grave.</li>
<li>Dor: analgesia e lidocaína sem vasoconstritor.</li>
<li>Complicação letal: miocardite; ECG, ecocardiograma e troponina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais elevam o escorpionismo à classe grave? <details><summary>Resposta</summary>Vômitos incoercíveis, sudorese profusa, sialorreia, prostração, instabilidade hemodinâmica, arritmia, edema pulmonar ou choque.</details></li>
<li>Qual exame avalia a complicação mais temida? <details><summary>Resposta</summary>O ecocardiograma, com ECG e troponina, para a disfunção miocárdica.</details></li>
</ol>
`,
"susp2026#46": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Separar a síncope vasovagal da síncope cardíaca pelos sinais de alarme.</li>
<li>Reconhecer o sopro da estenose aórtica e sua irradiação.</li>
<li>Explicar por que o vasodilatador é perigoso na obstrução fixa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síncope de esforço</dt>
<dd>Perda de consciência durante o exercício; alarme para causa cardíaca.</dd>
<dt>Obstrução fixa</dt>
<dd>Estreitamento que não se abre com a demanda; o débito não sobe no esforço.</dd>
<dt>Clique de ejeção</dt>
<dd>Som protossistólico da abertura da valva aórtica bicúspide ou estenótica.</dd>
<dt>Valvuloplastia por balão</dt>
<dd>Dilatação percutânea, tratamento inicial da estenose aórtica valvar na criança.</dd>
</dl>
<h4>O essencial</h4>
<p>A síncope da criança é quase sempre <strong>vasovagal</strong>: em pé, com calor ou emoção, com pródromo e recuperação rápida. A síncope <strong>cardíaca</strong> se anuncia por alarmes: ocorre <strong>durante o esforço</strong>, sem pródromo, com dor torácica ou palpitação, ou há sopro, cardiopatia conhecida ou morte súbita na família. Esses casos fazem eletrocardiograma e ecocardiograma antes de voltar ao esporte.</p>
<p>A <strong>estenose aórtica</strong>, em geral por valva bicúspide, é a obstrução fixa mais frequente na infância. O ventrículo hipertrofia para vencer o gradiente; no exercício a valva não deixa o fluxo aumentar, a pressão cai, o miocárdio sofre isquemia e a criança tem <strong>dor torácica, tontura e síncope</strong>. O exame mostra sopro <strong>sistólico ejetivo</strong>, rude, no foco aórtico, com <strong>irradiação para as carótidas</strong>, clique e frêmito na fúrcula.</p>
<p>Enquanto a estenose grave não é corrigida, restringe-se o esforço e <strong>evitam-se vasodilatadores</strong>: eles baixam a resistência periférica, mas a obstrução impede que o débito acompanhe, a pressão despenca e a perfusão coronariana e cerebral cai. Betabloqueadores são tolerados. O tratamento é a <strong>valvuloplastia por balão</strong>; cirurgia para valvas displásicas ou com insuficiência. O seguimento é vitalício.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Criança que desmaia jogando bola não recebe alta como vasovagal. Ausculte a base e as carótidas, peça ECG e ecocardiograma e proíba o esporte até o resultado. Vale o mesmo para a cardiomiopatia hipertrófica.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Síncope de esforço, sem pródromo, com sopro: investigar o coração.</li>
<li>Estenose aórtica: sopro ejetivo no foco aórtico irradiado às carótidas.</li>
<li>Vasodilatador contraindicado; betabloqueador tolerado.</li>
<li>Tratamento: valvuloplastia por balão.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que um nitrato pode matar na estenose aórtica grave? <details><summary>Resposta</summary>Reduz a resistência periférica sem que a obstrução fixa deixe o débito subir: a pressão cai e cérebro e coronárias deixam de ser perfundidos.</details></li>
<li>Para onde irradia o sopro da estenose aórtica? <details><summary>Resposta</summary>Para as carótidas e a fúrcula.</details></li>
</ol>
`,
"susp2026#47": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Ler o exame de urina simples com critério.</li>
<li>Saber o que a urocultura confirma conforme o método de coleta.</li>
<li>Reconhecer a vulvovaginite como imitadora de infecção urinária na menina pequena.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nitrito</dt>
<dd>Produto da redução do nitrato por enterobactérias; muito específico, pouco sensível.</dd>
<dt>Esterase leucocitária</dt>
<dd>Enzima dos neutrófilos na fita; sensível, mas inespecífica.</dd>
<dt>Vulvovaginite inespecífica</dt>
<dd>Inflamação da vulva da menina pré-púbere por irritação e higiene, sem germe específico.</dd>
<dt>Saco coletor</dt>
<dd>Serve para afastar, nunca para confirmar infecção.</dd>
</dl>
<h4>O essencial</h4>
<p>Disúria, polaciúria e dor abdominal baixa na pré-escolar não são sinônimo de infecção urinária. A <strong>vulvovaginite inespecífica</strong> é frequente: a mucosa sem estrogênio é fina, a vulva fica perto do ânus e a higiene é imperfeita. A menina tem ardor, urina pouco e muitas vezes, hiperemia vulvar e corrimento leve, sem febre alta nem toxemia.</p>
<p>O <strong>exame de urina</strong> precisa de leitura criteriosa: <strong>nitrito positivo</strong> é muito específico; <strong>esterase</strong> e leucocitúria são sensíveis, mas aparecem na vulvovaginite pela contaminação com secreção vaginal. Bactérias sem leucócitos sugerem contaminação. A confirmação é a <strong>urocultura</strong>, cujo valor depende da coleta: jato médio na criança continente, cateterismo ou punção no lactente; o saco coletor só afasta. Cortes: 100.000 UFC/mL no jato médio, 50.000 no cateterismo, um único germe.</p>
<p>Com <strong>febre alta ou toxemia</strong>, colhe-se e trata-se empiricamente. Com sintomas leves e exame duvidoso, trata-se a vulvovaginite (higiene, banho de assento, roupa de algodão) e <strong>aguarda-se a urocultura</strong>, com retorno em 24 horas ou antes se surgir febre.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Infecção urinária febril na criança pequena leva a ultrassonografia depois do episódio, e a recorrência, à uretrocistografia. Rotular vulvovaginite como infecção urinária inflaciona o histórico e gera investigações desnecessárias.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Vulvovaginite imita infecção urinária na pré-púbere.</li>
<li>Nitrito é específico; esterase e leucocitúria, sensíveis e inespecíficas.</li>
<li>Urocultura confirma; saco coletor só afasta.</li>
<li>Sintomas leves e exame duvidoso: cuidados locais, aguardar a cultura, retorno em 24 horas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Urocultura de saco coletor positiva: o que fazer? <details><summary>Resposta</summary>Recolher por cateterismo ou punção; o saco coletor não confirma infecção.</details></li>
<li>Qual achado da fita é o mais específico para infecção? <details><summary>Resposta</summary>O nitrito positivo.</details></li>
</ol>
`,
"susp2026#48": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar o contato de tuberculose bacilífera na criança, passo a passo.</li>
<li>Interpretar a prova tuberculínica com o corte de 5 mm no contato.</li>
<li>Prescrever os esquemas da infecção latente, contados em doses.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Infecção latente</dt>
<dd>Bacilo presente sem doença: sem sintomas, radiografia normal, prova ou IGRA positivos.</dd>
<dt>Prova tuberculínica</dt>
<dd>Reação ao PPD lida em 48 a 72 horas; positiva no contato a partir de 5 mm.</dd>
<dt>IGRA</dt>
<dd>Teste de liberação de interferon-gama, opção a partir dos 2 anos, não afetado pela BCG.</dd>
<dt>Escore de pontos</dt>
<dd>Sistema do Ministério da Saúde para diagnosticar tuberculose na criança sem bacteriologia.</dd>
</dl>
<h4>O essencial</h4>
<p>A criança que convive com um bacilífero infecta-se com facilidade e, infectada, adoece rápido, com formas graves como a meningite. Todo contato é avaliado <strong>de imediato</strong>, com duas perguntas em ordem: <strong>está doente?</strong> e, se não, <strong>está infectada?</strong> A primeira se responde com anamnese, exame físico e <strong>radiografia de tórax</strong>; sintomas ou radiografia alterada levam ao escore de pontos. Com criança assintomática e radiografia normal, faz-se a <strong>prova tuberculínica</strong> (ou IGRA a partir de 2 anos). No contato o corte é <strong>5 mm</strong>, e a BCG prévia não muda a interpretação. Prova negativa se repete em 8 semanas; menores de 5 anos com prova negativa começam o tratamento e o mantêm se a segunda prova virar.</p>
<p>Confirmada a infecção latente, o tratamento evita a doença e é contado em <strong>doses</strong>, para tolerar falhas de adesão: <strong>isoniazida</strong> 5 a 10 mg/kg/dia, <strong>270 doses em 9 a 12 meses</strong>; ou <strong>rifampicina</strong> 10 mg/kg/dia, <strong>120 doses em 4 a 6 meses</strong>, que o protocolo de 2022 prefere nos menores de 10 anos e maiores de 50; ou isoniazida com rifapentina, 12 doses semanais, a partir dos 2 anos. Consulta mensal para adesão e sintomas hepáticos; notificação obrigatória.</p>
<p>Na criança a tuberculose é paucibacilar e a baciloscopia costuma ser negativa: quem fecha o diagnóstico é a soma de clínica, radiografia, prova tuberculínica e contato.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pneumonias de repetição na história de um contato de tuberculose podem ter sido a doença. Antes de tratar a infecção latente, a radiografia precisa estar normal: tratar doença ativa com um só fármaco seleciona resistência.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Contato: primeiro afastar doença (radiografia), depois procurar infecção (prova).</li>
<li>Corte de 5 mm no contato, com ou sem BCG; repetir em 8 semanas se negativa.</li>
<li>Isoniazida 270 doses (9 a 12 meses) ou rifampicina 120 doses (4 a 6 meses).</li>
<li>Menor de 5 anos com prova negativa começa e decide pela segunda prova.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Prova tuberculínica de 6 mm em contato de 8 anos vacinado com BCG: como interpretar? <details><summary>Resposta</summary>Positiva; no contato o corte é 5 mm, mesmo com BCG.</details></li>
<li>Por que os esquemas são contados em doses? <details><summary>Resposta</summary>Para garantir o total de medicamento mesmo com falhas de adesão, dentro de um prazo máximo.</details></li>
</ol>
`,
"susp2026#49": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reproduzir o calendário do PNI do nascimento aos 15 meses.</li>
<li>Saber as mudanças recentes: VIP em todas as doses, covid-19 na rotina, influenza a partir dos 6 meses.</li>
<li>Reconhecer os erros clássicos de idade e de intervalo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pentavalente</dt>
<dd>Difteria, tétano, coqueluche, hepatite B e Haemophilus b, aos 2, 4 e 6 meses.</dd>
<dt>VIP</dt>
<dd>Poliomielite inativada, injetável, hoje em todas as doses.</dd>
<dt>Vacina de vírus vivo</dt>
<dd>Tríplice viral, varicela, febre amarela, rotavírus, BCG: idades mínimas e contraindicações próprias.</dd>
<dt>CRIE</dt>
<dd>Centro de imunobiológicos especiais para crianças com condições clínicas específicas.</dd>
</dl>
<h4>O essencial</h4>
<p>O calendário tem lógica: <strong>inativadas em três doses</strong> no primeiro semestre, <strong>vírus vivos</strong> quando os anticorpos maternos já não interferem (9 e 12 meses) e <strong>reforços</strong> no segundo ano e aos 4 anos. <strong>Ao nascer</strong>: BCG e hepatite B. <strong>2 meses</strong>: pentavalente, VIP, pneumocócica 10 e rotavírus (primeira dose até 3 meses e 15 dias). <strong>3 meses</strong>: meningocócica C. <strong>4 meses</strong>: pentavalente, VIP, pneumocócica 10 e rotavírus (até 7 meses e 29 dias). <strong>5 meses</strong>: meningocócica C. <strong>6 meses</strong>: pentavalente, VIP e a primeira dose de <strong>covid-19</strong>, na rotina de 6 meses a 4 anos; a <strong>influenza</strong> entra a partir dos 6 meses, anualmente. A pneumocócica 10 não tem dose aos 6 meses: duas doses e reforço aos 12.</p>
<p><strong>9 meses</strong>: febre amarela. <strong>12 meses</strong>: tríplice viral, reforços da pneumocócica 10 e da meningocócica C. <strong>15 meses</strong>: DTP, <strong>VIP</strong> (que substituiu a gotinha nos reforços em 2024), hepatite A e tetraviral. <strong>4 anos</strong>: DTP, febre amarela e varicela. Na adolescência, meningocócica ACWY e HPV.</p>
<p>Erros cobrados: sarampo antes dos 12 meses na rotina, rotavírus fora do prazo, febre amarela antes dos 9 meses, VOP que deixou o calendário. Imunodeficientes, prematuros e crônicos têm esquemas adicionais no CRIE.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Confira a Caderneta em toda consulta e vacine na mesma visita; dose atrasada não recomeça o esquema. Febre baixa, resfriado e antibiótico não contraindicam; alergia grave a dose anterior e imunossupressão para vacinas vivas, sim.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>2, 4 e 6 meses: pentavalente e VIP; pneumocócica 10 e rotavírus só aos 2 e 4.</li>
<li>3 e 5 meses: meningocócica C; reforços de pneumo 10 e meningo C aos 12 meses.</li>
<li>6 meses: covid-19 na rotina e influenza anual.</li>
<li>9 meses febre amarela; 12 tríplice viral; 15 DTP, VIP, hepatite A, tetraviral.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais vacinas aos 6 meses? <details><summary>Resposta</summary>Pentavalente, VIP, covid-19 e influenza na sazonalidade; não há pneumocócica 10 aos 6 meses.</details></li>
<li>O que mudou nos reforços contra a poliomielite em 2024? <details><summary>Resposta</summary>A VOP foi substituída pela VIP injetável aos 15 meses e 4 anos.</details></li>
</ol>
`,
"susp2026#50": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a ação das toxinas esfoliativas do estafilococo.</li>
<li>Distinguir impetigo bolhoso, pele escaldada e necrólise epidérmica tóxica.</li>
<li>Tratar a pele escaldada com antibiótico antiestafilocócico e suporte.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Toxinas esfoliativas</dt>
<dd>Proteases do S. aureus que clivam a desmogleína 1 e descolam a epiderme na camada granulosa.</dd>
<dt>Sinal de Nikolsky</dt>
<dd>Descolamento da epiderme à pressão lateral em pele de aparência normal.</dd>
<dt>Ragádias</dt>
<dd>Fissuras radiadas ao redor da boca, típicas da pele escaldada.</dd>
<dt>Necrólise epidérmica tóxica</dt>
<dd>Reação a fármaco com clivagem subepidérmica e mucosas acometidas.</dd>
</dl>
<h4>O essencial</h4>
<p>Alguns <em>Staphylococcus aureus</em> produzem toxinas que cortam a desmogleína 1, a proteína que une os queratinócitos na parte alta da epiderme. Toxina agindo só no local dá o <strong>impetigo bolhoso</strong>: bolhas flácidas em poucas áreas, sem toxemia. Toxina na circulação, a partir de um foco discreto (nasofaringe, conjuntiva, umbigo), descola a epiderme em todo o corpo: é a <strong>síndrome da pele escaldada</strong>, sobretudo em <strong>menores de 5 anos</strong>, que depuram mal a toxina e não têm anticorpos contra ela.</p>
<p>Começa com febre, irritabilidade e eritema doloroso nas dobras e ao redor dos orifícios; em um ou dois dias surgem <strong>bolhas flácidas</strong>, descolamento extenso e <strong>Nikolsky positivo</strong>, com <strong>ragádias periorais</strong> e edema facial. As <strong>mucosas são poupadas</strong>, porque nelas a adesão depende da desmogleína 3. As bolhas são estéreis; a cultura do foco pode isolar o germe. A biópsia mostra clivagem intraepidérmica alta, ao contrário da <strong>necrólise epidérmica tóxica</strong>, subepidérmica, com mucosas acometidas e história de fármaco.</p>
<p>Tratamento: <strong>internação</strong>, <strong>oxacilina</strong> intravenosa (vancomicina se risco de resistência), <strong>hidratação</strong> pelas perdas cutâneas, analgesia e cuidado da pele como em queimadura, sem corticoide. Recupera em uma a duas semanas, sem cicatriz.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O que separa a pele escaldada do impetigo bolhoso não é a bolha, é a criança: toxemia, febre, eritema difuso e dor ao toque indicam toxina circulante e internação. Descolamento com mucosas acometidas é necrólise por fármaco: suspenda todo medicamento suspeito.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Toxina esfoliativa cliva a desmogleína 1: bolha intraepidérmica alta.</li>
<li>Impetigo bolhoso: local, sem toxemia. Pele escaldada: generalizada, toxêmica, ragádias, Nikolsky.</li>
<li>Mucosas poupadas; bolhas estéreis.</li>
<li>Oxacilina IV, hidratação, cuidado da pele, sem corticoide.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que as mucosas são poupadas na pele escaldada? <details><summary>Resposta</summary>A toxina cliva a desmogleína 1, e nas mucosas a adesão depende da desmogleína 3.</details></li>
<li>A cultura do líquido da bolha ajuda? <details><summary>Resposta</summary>Não; a bolha é estéril. Cultura do foco (nariz, conjuntiva, umbigo) pode isolar o estafilococo.</details></li>
</ol>
`,
"susp2026#51": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os transtornos de ansiedade da infância pelo medo desproporcional, pela evitação e pelos sintomas físicos.</li>
<li>Diferenciá-los dos transtornos externalizantes e dos medos normais.</li>
<li>Indicar o tratamento de primeira linha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Evitação</dt>
<dd>Fuga das situações temidas; alivia no curto prazo e mantém o transtorno.</dd>
<dt>Ansiedade de separação</dt>
<dd>Medo excessivo de se afastar das figuras de apego, por mais de 4 semanas.</dd>
<dt>Fobia específica</dt>
<dd>Medo intenso de um objeto ou situação, com evitação, por 6 meses ou mais.</dd>
<dt>Transtornos externalizantes</dt>
<dd>TDAH, opositor-desafiador e conduta: o sofrimento se expressa para fora.</dd>
</dl>
<h4>O essencial</h4>
<p>Medos fazem parte do desenvolvimento. Viram <strong>transtorno</strong> quando são <strong>desproporcionais</strong>, <strong>persistentes</strong> e causam <strong>prejuízo</strong>: a criança deixa de ir a lugares, perde o sono, cai na escola, tem dores de cabeça e de barriga sem causa. A ansiedade é o transtorno psiquiátrico mais comum da infância e é <strong>internalizante</strong>: a criança sofre para dentro e passa despercebida, ao contrário da agitada ou opositora.</p>
<p>Os quadros mais frequentes: <strong>ansiedade de separação</strong> (recusa de dormir fora ou ir à escola, por 4 semanas ou mais), <strong>fobia específica</strong> (medo de animal, sangue, vômito ou outro gatilho, com evitação, por 6 meses), <strong>ansiedade generalizada</strong> (preocupação difícil de controlar, inquietação, irritabilidade, sono ruim, por 6 meses) e ansiedade social. Um medo focado em gatilho concreto, com evitação de tudo o que possa expor a ele e sintomas físicos que cedem quando a situação é evitada, é a assinatura de uma fobia. O diagnóstico é clínico, com escalas de rastreio e exclusão de causas orgânicas; comorbidade com outros transtornos de ansiedade, depressão e TDAH é a regra.</p>
<p>A primeira linha é a <strong>terapia cognitivo-comportamental</strong>, com exposição gradual e treino dos pais para não reforçar a evitação. Nos casos moderados a graves associa-se um <strong>inibidor seletivo de recaptação de serotonina</strong>, com monitorização nas primeiras semanas. Benzodiazepínico não é tratamento de manutenção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor abdominal recorrente, cefaleia, insônia e recusa escolar são as portas de entrada da ansiedade no pediatra. Pergunte do que a criança tem medo, o que ela evita e o que a família faz para acalmá-la: a resposta mostra o ciclo de evitação que a terapia precisa quebrar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Medo desproporcional, persistente e com prejuízo define o transtorno.</li>
<li>Evitação e sintomas físicos são as pistas.</li>
<li>Separação: 4 semanas; fobia e generalizada: 6 meses.</li>
<li>Terapia cognitivo-comportamental primeiro; ISRS nos casos moderados a graves.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que três características transformam um medo em transtorno? <details><summary>Resposta</summary>Ser desproporcional, persistir no tempo e causar prejuízo funcional.</details></li>
<li>Por que a ansiedade infantil é subdiagnosticada? <details><summary>Resposta</summary>Porque é internalizante: a criança sofre em silêncio e não incomoda.</details></li>
</ol>
`,
"susp2026#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que a taquipneia transitória acontece e quem tem mais risco.</li>
<li>Reconhecer a radiografia da taquipneia transitória e a da membrana hialina.</li>
<li>Conduzir o recém-nascido sem excesso de intervenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Taquipneia transitória</dt>
<dd>Atraso na reabsorção do líquido pulmonar fetal; melhora em 24 a 72 horas.</dd>
<dt>Doença da membrana hialina</dt>
<dd>Deficiência de surfactante do prematuro, com atelectasia difusa e piora progressiva.</dd>
<dt>Cisurite</dt>
<dd>Líquido na cissura interlobar, visível na radiografia da taquipneia transitória.</dd>
<dt>Boletim de Silverman-Andersen</dt>
<dd>Escore de 0 a 10 que gradua o desconforto respiratório neonatal.</dd>
</dl>
<h4>O essencial</h4>
<p>O pulmão fetal está cheio de líquido, reabsorvido no fim da gestação e no trabalho de parto. Quando o bebê nasce por <strong>cesárea sem trabalho de parto</strong>, é <strong>prematuro tardio</strong> ou filho de <strong>mãe diabética</strong>, a reabsorção atrasa e o líquido reduz a complacência: é a <strong>taquipneia transitória</strong>, a causa mais comum de desconforto respiratório no termo e no prematuro tardio. Começa nas primeiras horas com taquipneia acima de 60, gemido, batimento de asa de nariz e retrações, com pouca necessidade de oxigênio. A <strong>radiografia</strong> mostra <strong>hiperinsuflação</strong>, trama vascular proeminente e <strong>líquido na cissura</strong>; melhora em <strong>24 a 72 horas</strong>.</p>
<p>A <strong>membrana hialina</strong> é o diferencial no prematuro: falta surfactante, os alvéolos colapsam e o desconforto <strong>piora</strong> nas primeiras horas, com oxigênio crescente; a radiografia tem <strong>volume reduzido</strong>, padrão <strong>reticulogranular</strong> e <strong>broncogramas aéreos</strong>. Trata-se com CPAP e surfactante. A <strong>aspiração meconial</strong> acomete o termo com líquido meconial: atelectasias com hiperinsuflação, infiltrados grosseiros, risco de pneumotórax. Pneumonia e sepse imitam qualquer uma e pedem triagem se há fatores de risco.</p>
<p>Na taquipneia transitória a conduta é <strong>suporte</strong>: oxigênio na menor concentração que mantenha a saturação alvo, CPAP se o esforço for importante, dieta suspensa enquanto a frequência está alta, hidratação venosa e observação. Sem surfactante, sem diurético; antibiótico só com risco ou sinais de infecção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Taquipneia transitória que não melhora em 72 horas, que precisa de mais de 40% de oxigênio ou tem radiografia atípica deixou de ser transitória: reconsidere pneumonia, cardiopatia, hipertensão pulmonar e membrana hialina.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Líquido pulmonar retido: cesárea sem trabalho de parto, prematuro tardio, mãe diabética.</li>
<li>Radiografia: hiperinsuflação, trama vascular, cisurite; melhora em 24 a 72 horas.</li>
<li>Membrana hialina: prematuro, piora progressiva, vidro fosco com broncogramas, surfactante.</li>
<li>Conduta: oxigênio mínimo, CPAP se preciso, dieta suspensa, observar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados radiológicos apontam para membrana hialina? <details><summary>Resposta</summary>Volume reduzido, padrão reticulogranular difuso e broncogramas aéreos.</details></li>
<li>Quais fatores de risco explicam a taquipneia transitória? <details><summary>Resposta</summary>Cesárea sem trabalho de parto, prematuridade tardia e diabetes materno.</details></li>
</ol>
`,
"susp2026#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o sequestro esplênico agudo pela tríade clínica e laboratorial.</li>
<li>Diferenciá-lo da crise aplásica e da crise vaso-oclusiva.</li>
<li>Tratar a emergência e prevenir a recorrência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sequestro esplênico</dt>
<dd>Sangue aprisionado no baço: hemoglobina cai 2 g/dL ou mais e o baço cresce.</dd>
<dt>Crise aplásica</dt>
<dd>Parada da eritropoese por parvovírus B19; reticulócitos baixos, baço sem aumento.</dd>
<dt>Reticulocitose</dt>
<dd>Medula respondendo; presente no sequestro, ausente na aplasia.</dd>
<dt>Hemoglobina basal</dt>
<dd>Valor habitual da criança falciforme, referência para medir a queda.</dd>
</dl>
<h4>O essencial</h4>
<p>Na doença falciforme o baço da criança pequena ainda funciona e é o palco do <strong>sequestro esplênico agudo</strong>: em horas, grande parte do volume sanguíneo fica presa no baço. Acontece sobretudo entre <strong>5 meses e 2 anos</strong> na anemia falciforme, e mais tarde nas formas SC e S-beta-talassemia. A <strong>tríade</strong>: <strong>queda brusca da hemoglobina</strong> (2 g/dL ou mais abaixo do basal), <strong>esplenomegalia aguda</strong> dolorosa e <strong>hipovolemia</strong> (palidez, taquicardia, letargia, hipotensão, choque). Plaquetas caem e <strong>reticulócitos sobem</strong>, porque a medula está íntegra.</p>
<p>É <strong>emergência</strong>: acesso venoso, expansão se há choque e <strong>transfusão de hemácias</strong> em alíquotas pequenas (5 mL/kg) com reavaliação, porque o baço devolve o sangue sequestrado e a hemoglobina sobe além do transfundido, com risco de hiperviscosidade. A meta é a hemoglobina basal.</p>
<p>A <strong>recorrência é comum</strong>. A família aprende a <strong>palpar o baço</strong> e a reconhecer palidez e apatia; após episódio grave ou dois episódios indica-se <strong>esplenectomia</strong> (ou transfusão crônica até a idade da cirurgia), com vacinas contra encapsulados e penicilina profilática desde a triagem neonatal.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Palidez súbita e baço que cresce é sequestro até prova em contrário. O reticulócito responde: alto no sequestro e na hemólise, baixo na crise aplásica, cujo baço não aumenta. Dor óssea sem queda da hemoglobina é vaso-oclusão e não se transfunde.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hemoglobina cai 2 g/dL ou mais, baço cresce, hipovolemia; reticulócitos altos.</li>
<li>Pico entre 5 meses e 2 anos na anemia falciforme.</li>
<li>Transfusão cautelosa em alíquotas, até a hemoglobina basal.</li>
<li>Ensinar a palpar o baço; esplenectomia após episódio grave.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que exame separa o sequestro da crise aplásica? <details><summary>Resposta</summary>Os reticulócitos: altos no sequestro, baixos na aplasia por parvovírus.</details></li>
<li>Por que a transfusão é feita em alíquotas pequenas? <details><summary>Resposta</summary>O baço devolve o sangue sequestrado e a hemoglobina sobe além do transfundido, com risco de hiperviscosidade.</details></li>
</ol>
`,
"susp2026#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar otite média aguda pela otoscopia.</li>
<li>Definir falha terapêutica e distingui-la da otorreia por perfuração espontânea.</li>
<li>Escolher o antibiótico de primeira e de segunda linha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Abaulamento</dt>
<dd>Membrana timpânica convexa e opaca: o sinal mais específico de otite média aguda.</dd>
<dt>Otorreia</dt>
<dd>Secreção pelo conduto após perfuração; alivia a dor e drena a coleção.</dd>
<dt>Falha terapêutica</dt>
<dd>Febre, dor ou abaulamento persistentes após 48 a 72 horas de antibiótico.</dd>
<dt>Mastoidite</dt>
<dd>Edema e hiperemia retroauriculares com o pavilhão deslocado.</dd>
</dl>
<h4>O essencial</h4>
<p>A otite média aguda é a complicação bacteriana mais comum do resfriado: a tuba obstrui, o líquido se acumula e pneumococo, <em>Haemophilus</em> não tipável e <em>Moraxella</em> proliferam. O lactente com dias de coriza acorda chorando com <strong>otalgia e febre</strong>. O diagnóstico exige otoscopia: <strong>abaulamento</strong> moderado ou intenso, ou leve com otalgia recente, ou <strong>otorreia</strong> nova. Hiperemia isolada, comum no choro, não fecha o diagnóstico.</p>
<p>Antibiótico desde o início para menores de 6 meses, bilateral em menores de 2 anos, otorreia e casos graves (dor intensa, febre de 39 ºC ou mais, toxemia); nos demais, observação por 48 a 72 horas com analgesia é aceitável. Primeira escolha: <strong>amoxicilina</strong> em dose alta, por 10 dias nos menores de 2 anos e nos graves. <strong>Amoxicilina com clavulanato</strong> se houve amoxicilina nos últimos 30 dias, conjuntivite purulenta associada (sugere <em>Haemophilus</em>) ou falha; ceftriaxona intramuscular sem via oral.</p>
<p><strong>Falha</strong> é ausência de melhora após 48 a 72 horas. Não é falha a <strong>otorreia que surge durante o tratamento</strong>: é a perfuração espontânea da membrana sob pressão, que vem com alívio da dor e da febre, fecha em dias a semanas e não exige trocar o antibiótico; mantém-se o esquema, evita-se água no conduto e reavalia-se ao fim. A efusão residual pode durar semanas sem infecção ativa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O que muda a conduta não é a secreção no conduto, é a criança que segue com febre e dor depois de 72 horas, ou que tem dor e edema atrás da orelha com o pavilhão deslocado: mastoidite, com imagem, antibiótico venoso e otorrinolaringologista.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diagnóstico: abaulamento ou otorreia nova; hiperemia isolada não basta.</li>
<li>Amoxicilina em dose alta; clavulanato se uso recente, conjuntivite ou falha.</li>
<li>Falha só se define após 48 a 72 horas.</li>
<li>Otorreia por perfuração espontânea é evolução esperada: manter e reavaliar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança em amoxicilina há 3 dias, sem febre e sem dor, com otorreia: o que fazer? <details><summary>Resposta</summary>Manter o tratamento e reavaliar ao fim: é perfuração espontânea com drenagem, não falha.</details></li>
<li>Quando trocar para amoxicilina com clavulanato? <details><summary>Resposta</summary>Falha após 48 a 72 horas, amoxicilina nos últimos 30 dias ou conjuntivite purulenta associada.</details></li>
</ol>
`,
"susp2026#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a cetoacidose diabética pelos critérios laboratoriais.</li>
<li>Reproduzir a sequência: volume, insulina, potássio, glicose.</li>
<li>Reconhecer e tratar o edema cerebral.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cetoacidose diabética</dt>
<dd>Glicemia acima de 200 com pH abaixo de 7,3 ou bicarbonato abaixo de 15 e cetonas positivas.</dd>
<dt>Ânion gap</dt>
<dd>Sódio menos cloro menos bicarbonato; elevado pelos cetoácidos, acompanha a resolução.</dd>
<dt>Edema cerebral</dt>
<dd>Complicação do tratamento, mais comum na criança pequena e no primeiro episódio.</dd>
<dt>Potássio corporal total</dt>
<dd>Sempre baixo na cetoacidose, ainda que o sérico esteja normal ou alto.</dd>
</dl>
<h4>O essencial</h4>
<p>Sem insulina, a glicose não entra na célula, o fígado produz cetoácidos e a glicosúria arrasta água e eletrólitos: a criança chega <strong>desidratada, com respiração de Kussmaul, hálito cetônico, dor abdominal e vômitos</strong>. Critérios: glicemia acima de 200 mg/dL, pH abaixo de 7,3 ou bicarbonato abaixo de 15 e cetonas; a gravidade é dada pelo pH.</p>
<p>A sequência não se inverte. <strong>Primeiro o volume</strong>: soro fisiológico ou Ringer lactato, 10 a 20 mL/kg na primeira hora, e depois o déficit ao longo de 24 a 48 horas. <strong>A insulina entra após uma hora</strong>, em infusão contínua de 0,05 a 0,1 U/kg/h, <strong>sem bolus</strong>, que derruba glicemia e osmolaridade de forma abrupta e aumenta o risco de edema cerebral e hipocalemia. O <strong>potássio</strong> é reposto desde o início da insulina, com diurese presente e valor sérico não elevado. Quando a glicemia chega a 250 a 300 mg/dL, adiciona-se <strong>glicose ao soro</strong> e mantém-se a insulina até fechar o ânion gap: o objetivo é corrigir a cetose. Bicarbonato não, salvo acidose extrema com instabilidade.</p>
<p>O <strong>edema cerebral</strong> surge nas primeiras 4 a 12 horas: cefaleia, bradicardia, hipertensão, rebaixamento, incontinência. Trata-se de imediato com manitol ou salina hipertônica, cabeceira elevada e redução da infusão, antes de qualquer imagem.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cefaleia durante o tratamento da cetoacidose é edema cerebral até prova em contrário. Monitore a consciência de hora em hora, evite quedas rápidas de glicemia e osmolaridade e deixe o manitol à mão; o menor de 5 anos com pH muito baixo e ureia alta é o de maior risco.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Glicemia acima de 200, pH abaixo de 7,3 ou bicarbonato abaixo de 15, cetonas.</li>
<li>Volume primeiro; insulina contínua após 1 hora, sem bolus.</li>
<li>Potássio desde o início da insulina; glicose no soro quando a glicemia cai a 250 a 300.</li>
<li>Edema cerebral: manitol ou salina hipertônica de imediato.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a insulina espera uma hora de hidratação? <details><summary>Resposta</summary>Para evitar queda abrupta de glicemia e osmolaridade e hipocalemia, que favorecem o edema cerebral.</details></li>
<li>Quais são os sinais precoces de edema cerebral? <details><summary>Resposta</summary>Cefaleia, bradicardia, hipertensão, alteração da consciência e incontinência nas primeiras 4 a 12 horas.</details></li>
</ol>
`,
"susp2026#56": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a obstrução congênita do ducto nasolacrimal pelo olho molhado com conjuntiva clara.</li>
<li>Conhecer a história natural e a conduta conservadora no primeiro ano.</li>
<li>Identificar os sinais de alarme do glaucoma congênito.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Epífora</dt>
<dd>Lacrimejamento por falha na drenagem, não por excesso de produção.</dd>
<dt>Válvula de Hasner</dt>
<dd>Membrana na saída do ducto para o nariz, cuja persistência causa a obstrução.</dd>
<dt>Massagem de Crigler</dt>
<dd>Pressão firme sobre o saco lacrimal em direção ao nariz, para romper a membrana.</dd>
<dt>Buftalmo</dt>
<dd>Globo aumentado pela pressão intraocular alta no glaucoma congênito.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>obstrução congênita do ducto nasolacrimal</strong> é a causa mais comum de lacrimejamento no lactente: a válvula de Hasner não se abre ao nascer, a lágrima não drena e reflui. O bebê tem <strong>epífora</strong> e <strong>secreção mucoide</strong> nos cílios, quase sempre em um só olho, com <strong>conjuntiva clara</strong>, córnea transparente e bom estado geral: um olho molhado e limpo. A pressão sobre o saco lacrimal que faz refluir secreção confirma.</p>
<p>A grande maioria resolve <strong>espontaneamente até os 12 meses</strong>. Conduta: <strong>limpeza das secreções</strong> com algodão e água filtrada ou soro e <strong>massagem de Crigler</strong> algumas vezes ao dia; antibiótico tópico só se a secreção é purulenta com hiperemia, por curto período. Se persiste <strong>após os 12 meses</strong>, o oftalmologista faz a <strong>sondagem</strong>; depois dos 2 anos o sucesso cai e pode ser preciso intubação com silicone. A complicação aguda é a <strong>dacriocistite</strong>: massa dolorosa e hiperemiada abaixo do canto medial, com febre, que exige antibiótico sistêmico.</p>
<p>O diferencial que não pode escapar é o <strong>glaucoma congênito</strong>: lacrimejamento com <strong>fotofobia</strong>, blefaroespasmo e <strong>córnea aumentada e opaca</strong>. É urgência cirúrgica. A conjuntivite tem hiperemia; a dacriocistocele é uma massa azulada no canto medial presente ao nascer.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Três perguntas decidem: a conjuntiva está clara? A córnea é transparente e de tamanho normal? Há fotofobia? Respostas tranquilizadoras apontam para massagem em casa; qualquer resposta preocupante manda ao oftalmologista na mesma semana.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Epífora e secreção com conjuntiva clara, unilateral: obstrução do ducto nasolacrimal.</li>
<li>Resolve sozinha na maioria até os 12 meses; limpeza e massagem de Crigler.</li>
<li>Persistência após 12 meses: sondagem.</li>
<li>Fotofobia, córnea grande ou opaca: glaucoma congênito, urgência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando a sondagem é indicada? <details><summary>Resposta</summary>Quando a obstrução persiste após os 12 meses apesar da massagem.</details></li>
<li>Que sinal transforma o lacrimejamento em urgência? <details><summary>Resposta</summary>Fotofobia com córnea aumentada ou opaca, que indica glaucoma congênito.</details></li>
</ol>
`,
"susp2026#57": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o abscesso hepático amebiano pela febre com hepatomegalia dolorosa.</li>
<li>Diferenciá-lo do abscesso piogênico.</li>
<li>Tratar com amebicida tissular e luminal e saber quando drenar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Entamoeba histolytica</dt>
<dd>Protozoário invasivo, por cistos na água e nos alimentos; o trofozoíto invade o cólon.</dd>
<dt>Amebicida tissular</dt>
<dd>Metronidazol ou tinidazol; não erradicam os cistos do intestino.</dd>
<dt>Amebicida luminal</dt>
<dd>Teclozan, etofamida ou paromomicina, para eliminar os cistos e evitar recidiva.</dd>
<dt>Sinal de Torres-Homem</dt>
<dd>Dor à percussão do gradil costal sobre o fígado.</dd>
</dl>
<h4>O essencial</h4>
<p>A amebíase começa no cólon com <strong>diarreia com muco e sangue</strong>, muitas vezes arrastada. Por via porta o parasita chega ao fígado e forma o <strong>abscesso amebiano</strong>, semanas a meses após a diarreia, mesmo quando ela passou despercebida. O quadro: <strong>febre alta, dor no hipocôndrio direito</strong> que piora à inspiração e irradia ao ombro, e <strong>hepatomegalia dolorosa</strong>; pode haver tosse e derrame pleural à direita; icterícia é incomum. Leucocitose sem eosinofilia e fosfatase alcalina elevada; o exame de fezes é positivo em menos da metade.</p>
<p>A <strong>ultrassonografia</strong> mostra lesão hipoecoica, arredondada, única na maioria, no <strong>lobo direito</strong>. A <strong>sorologia</strong> é positiva em mais de 90% e separa do abscesso <strong>piogênico</strong>, que acomete pacientes com doença biliar, cirurgia ou imunossupressão, é mais vezes múltiplo e cresce bactérias na hemocultura. A punção, se feita, mostra conteúdo achocolatado estéril.</p>
<p>Tratamento: <strong>metronidazol</strong> por 7 a 10 dias, com resposta em 3 a 4 dias, seguido de <strong>amebicida luminal</strong>. <strong>Drenagem</strong> para abscesso grande (acima de 5 a 10 cm), do lobo esquerdo (risco de rotura para o pericárdio), com rotura iminente, sem resposta em 72 horas ou com infecção bacteriana secundária.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Febre prolongada com fígado grande e doloroso pede ultrassonografia no mesmo dia; pergunte sobre diarreia com sangue nos meses anteriores e sobre a água da casa. E complete sempre com o amebicida luminal, senão a criança volta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diarreia com muco e sangue antes; febre, dor no hipocôndrio direito e hepatomegalia dolorosa depois.</li>
<li>Abscesso único no lobo direito; sorologia positiva em mais de 90%.</li>
<li>Piogênico: doença biliar, múltiplos, hemocultura positiva.</li>
<li>Metronidazol 7 a 10 dias e amebicida luminal; drenar se grande, à esquerda ou sem resposta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o tratamento não termina com o metronidazol? <details><summary>Resposta</summary>Ele não erradica os cistos do cólon; o amebicida luminal evita recidiva e transmissão.</details></li>
<li>Quando o abscesso amebiano é drenado? <details><summary>Resposta</summary>Se grande, do lobo esquerdo, com risco de rotura, sem resposta em 72 horas ou com infecção bacteriana.</details></li>
</ol>
`,
"susp2026#58": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome hemolítico-urêmica típica após diarreia sanguinolenta.</li>
<li>Descrever a tríade laboratorial e o mecanismo da toxina Shiga.</li>
<li>Saber o que não fazer e conduzir o suporte.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>STEC</dt>
<dd>E. coli produtora de toxina Shiga, O157:H7 à frente; reservatório no gado.</dd>
<dt>Microangiopatia trombótica</dt>
<dd>Lesão endotelial com trombos nos pequenos vasos: fragmenta hemácias e consome plaquetas.</dd>
<dt>Esquizócitos</dt>
<dd>Hemácias fragmentadas no esfregaço, marca da hemólise mecânica.</dd>
<dt>SHU atípica</dt>
<dd>Forma sem diarreia, por desregulação do complemento.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome hemolítico-urêmica é a principal causa de lesão renal aguda na criança pequena. A forma típica segue a <strong>gastroenterite por STEC</strong> (carne malpassada, leite cru, água, contato com animais de fazenda): diarreia aquosa que vira <strong>sanguinolenta</strong>, com cólicas e pouca febre; <strong>5 a 10 dias depois</strong>, quando o intestino melhora, a toxina lesa o endotélio glomerular. A <strong>tríade</strong>: <strong>anemia hemolítica microangiopática</strong> (palidez súbita, esquizócitos, LDH alta, Coombs negativo), <strong>trombocitopenia</strong> e <strong>lesão renal aguda</strong> (oligúria, edema, hipertensão, creatinina em ascensão). Pode haver convulsões e acometimento de pâncreas.</p>
<p>Duas condutas <strong>pioram</strong> o prognóstico na diarreia sanguinolenta: o <strong>antibiótico</strong>, que lisa a bactéria e libera toxina, e os <strong>antimotilidade</strong>, que a retêm no lúmen. Anti-inflamatórios são evitados pelo rim.</p>
<p>Não há tratamento específico. <strong>Hidratação isotônica precoce</strong>, ainda na diarreia, reduz a lesão renal grave; depois, controle rigoroso de volume, eletrólitos e pressão, transfusão de hemácias se a anemia é sintomática (plaquetas só com sangramento) e <strong>diálise</strong> na oligoanúria com sobrecarga, hipercalemia ou uremia. A maioria recupera a função renal, mas parte fica com proteinúria ou hipertensão e precisa de seguimento por anos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diarreia com sangue e sem febre alta em criança pequena: hemograma, creatinina e eletrólitos, hidratar bem, sem antibiótico e sem loperamida, e reavaliar em 48 horas com a família orientada a voltar se a criança ficar pálida, urinar pouco ou inchar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>STEC: diarreia sanguinolenta com pouca febre; síndrome 5 a 10 dias depois.</li>
<li>Tríade: anemia hemolítica microangiopática, trombocitopenia, lesão renal aguda.</li>
<li>Antibiótico e antimotilidade contraindicados.</li>
<li>Hidratação precoce, controle de volume e pressão, diálise se preciso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o antibiótico é contraindicado na gastroenterite por STEC? <details><summary>Resposta</summary>A lise bacteriana libera mais toxina Shiga e aumenta o risco da síndrome.</details></li>
<li>Quais são as indicações de diálise? <details><summary>Resposta</summary>Oligoanúria com sobrecarga de volume, hipercalemia refratária ou uremia sintomática.</details></li>
</ol>
`,
"susp2026#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a distonia aguda e ligá-la aos antagonistas dopaminérgicos.</li>
<li>Tratar a distonia aguda e orientar a família.</li>
<li>Escolher o antiemético seguro na gastroenterite infantil.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Distonia aguda</dt>
<dd>Contração involuntária sustentada com posturas anormais, horas a dias após um antagonista D2.</dd>
<dt>Crise oculógira</dt>
<dd>Desvio conjugado e forçado dos olhos para cima.</dd>
<dt>Biperideno</dt>
<dd>Anticolinérgico que reverte a distonia em minutos.</dd>
<dt>Ondansetrona</dt>
<dd>Antagonista 5-HT3, sem efeito extrapiramidal, antiemético da gastroenterite infantil.</dd>
</dl>
<h4>O essencial</h4>
<p><strong>Metoclopramida</strong> e <strong>bromoprida</strong> bloqueiam os receptores D2 no centro do vômito e nos núcleos da base. Na criança, com barreira hematoencefálica mais permeável e metabolismo variável, doses habituais produzem <strong>reações extrapiramidais</strong> com frequência muito maior que no adulto. A mais comum é a <strong>distonia aguda</strong>: torcicolo, trismo, protrusão da língua, opistótono, crise oculógira, com a criança consciente e assustada, <strong>horas a 3 dias</strong> após a dose. Outros culpados: haloperidol, clorpromazina, prometazina, cinarizina e flunarizina.</p>
<p>Confunde-se com convulsão, meningite e tétano. Três pistas resolvem: a criança <strong>está consciente</strong>, os movimentos são <strong>posturais e sustentados</strong>, e há <strong>um antagonista D2</strong> nas últimas 72 horas, muitas vezes prescrito na urgência para vômitos. Tratamento: <strong>suspender o fármaco</strong> e dar <strong>biperideno</strong> intramuscular ou intravenoso (ou difenidramina), com resposta em minutos, seguido de dose oral por 2 a 3 dias, porque a metoclopramida dura mais que o antídoto. Registra-se a reação no prontuário.</p>
<p>A Anvisa restringiu a metoclopramida: <strong>contraindicada abaixo de 1 ano</strong> e, nas crianças maiores, só em indicações específicas e dose reduzida, nunca de rotina para vômitos de gastroenterite. O antiemético de escolha é a <strong>ondansetrona</strong> em dose única oral, que facilita a hidratação oral e reduz internações.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Criança que volta do pronto-socorro "estranha", com o pescoço torcido, os olhos virados e a fala travada, horas depois de um remédio para vômito: pergunte o nome do remédio antes de pedir qualquer exame. Biperideno resolve na sala; a punção lombar não.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Metoclopramida e bromoprida bloqueiam D2 e causam distonia aguda na criança.</li>
<li>Consciente, posturas sustentadas, história do fármaco: é distonia, não convulsão.</li>
<li>Suspender e dar biperideno; manter por 2 a 3 dias.</li>
<li>Metoclopramida contraindicada abaixo de 1 ano; na gastroenterite, ondansetrona.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais separam a distonia aguda de uma crise convulsiva? <details><summary>Resposta</summary>Consciência preservada e movimentos posturais sustentados, sem fase clônica nem pós-ictal.</details></li>
<li>Qual antiemético usar na gastroenterite de um lactente de 8 meses? <details><summary>Resposta</summary>Ondansetrona; a metoclopramida é contraindicada abaixo de 1 ano.</details></li>
</ol>
`,
"susp2026#60": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a escala de Glasgow e classificar o traumatismo cranioencefálico.</li>
<li>Sequenciar o atendimento: ABCDE antes da imagem.</li>
<li>Evitar a lesão secundária: hipotensão, hipóxia, hipertermia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Escala de Glasgow</dt>
<dd>Abertura ocular (1 a 4), resposta verbal (1 a 5) e motora (1 a 6); versão pediátrica para o pré-verbal.</dd>
<dt>TCE leve, moderado e grave</dt>
<dd>Glasgow 13 a 15, 9 a 12 e 3 a 8.</dd>
<dt>Lesão secundária</dt>
<dd>Dano após o impacto por hipóxia, hipotensão, hipertensão intracraniana, febre ou convulsão.</dd>
<dt>PECARN</dt>
<dd>Regra de decisão para tomografia no TCE leve da criança.</dd>
</dl>
<h4>O essencial</h4>
<p>O traumatismo cranioencefálico é a principal causa de morte por trauma na infância, e o desfecho depende do que o cérebro sofre nas horas seguintes. O atendimento segue o <strong>ABCDE</strong>: via aérea com <strong>coluna cervical protegida</strong>, ventilação, circulação com volume, avaliação com <strong>Glasgow e pupilas</strong>, exposição sem hipotermia. Imagem só depois de estabilizar.</p>
<p>O Glasgow classifica: <strong>leve</strong> 13 a 15, <strong>moderado</strong> 9 a 12, <strong>grave</strong> 8 ou menos. Glasgow 8 ou menos intuba; 9 a 12 é monitorado com exame seriado e faz <strong>tomografia de crânio</strong> assim que o ABC está resolvido, com a coluna cervical por imagem quando há queda de altura, dor cervical, déficit ou rebaixamento. No leve, a tomografia depende de sinais de alarme (perda de consciência, vômitos repetidos, cefaleia intensa, fratura palpável, mecanismo grave) segundo regras como a PECARN.</p>
<p>Prevenir a <strong>lesão secundária</strong> vale mais que qualquer procedimento: <strong>um só episódio de hipotensão ou de hipóxia</strong> dobra a mortalidade no TCE grave. Repõe-se volume para pressão normal para a idade (sem restringir líquido por medo de edema), mantém-se saturação acima de 90% e PaCO2 normal (hiperventilação só como resgate na herniação), evita-se febre e trata-se convulsão. Cabeceira a 30 graus, sedação e analgesia. Hipotermia profilática não é recomendada; osmoterapia e neurocirurgia entram com sinais de hipertensão intracraniana ou lesão com efeito de massa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Calcule o Glasgow em voz alta, componente por componente, e anote a hora: a tendência vale mais que o número. Queda de dois pontos ou pupila que dilata muda a conduta para tomografia imediata e neurocirurgia. E no meio de tudo, mantenha a pressão e a saturação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>ABCDE com coluna protegida; imagem após estabilizar.</li>
<li>Leve 13 a 15, moderado 9 a 12, grave 8 ou menos (intubar).</li>
<li>Moderado: tomografia de crânio após o ABC.</li>
<li>Hipotensão e hipóxia matam: volume e oxigênio; sem hipotermia, sem hiperventilação de rotina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Abre os olhos ao chamado, fala palavras desconexas e localiza a dor: Glasgow e classe? <details><summary>Resposta</summary>3 + 3 + 5 = 11: TCE moderado.</details></li>
<li>Por que não se restringe volume no TCE da criança? <details><summary>Resposta</summary>A hipotensão reduz a perfusão cerebral e dobra a mortalidade; a pressão deve ficar normal para a idade.</details></li>
</ol>
`,
"susp2021#85": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reproduzir as regras práticas de peso, comprimento e perímetro cefálico no primeiro ano.</li>
<li>Calcular o esperado aos 6 e aos 12 meses a partir das medidas de nascimento.</li>
<li>Reconhecer desvios que exigem investigação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Velocidade de crescimento</dt>
<dd>Quanto cresce por unidade de tempo; mais sensível que a medida isolada.</dd>
<dt>Perda de peso fisiológica</dt>
<dd>Até 10% na primeira semana, recuperada até o 10º a 14º dia.</dd>
<dt>Perímetro cefálico</dt>
<dd>Circunferência occipitofrontal; espelha o crescimento do encéfalo.</dd>
<dt>Curvas da OMS</dt>
<dd>Referência de crianças saudáveis amamentadas, usada na Caderneta.</dd>
</dl>
<h4>O essencial</h4>
<p><strong>Peso.</strong> O recém-nascido perde até 10% na primeira semana e recupera em duas. Depois ganha <strong>25 a 30 g por dia</strong> no primeiro trimestre, 20 no segundo, 15 no terceiro e 10 no quarto: <strong>dobra entre 4 e 5 meses</strong>, <strong>triplica aos 12</strong> e quadruplica aos 2 anos. Um bebê de 3.300 g pesa cerca de 7 kg aos 6 meses e 10 kg no primeiro aniversário.</p>
<p><strong>Comprimento.</strong> O termo nasce com cerca de 50 cm e cresce <strong>15 cm no primeiro semestre</strong> e <strong>10 no segundo</strong>: 25 cm no primeiro ano, chegando a 75 cm; 12 cm no segundo ano e 5 a 7 por ano até a puberdade. O bebê de 50 cm mede cerca de 65 cm aos 6 meses. <strong>Perímetro cefálico.</strong> Nasce em torno de 34 a 35 cm e cresce <strong>2 cm por mês no primeiro trimestre</strong>, <strong>1 no segundo</strong> e 0,5 no segundo semestre: dos 34 cm chega a <strong>43 aos 6 meses</strong> e a 46 a 47 aos 12. A fontanela anterior fecha entre 9 e 18 meses.</p>
<p>Preocupam a queda de linhas de percentil em duas medidas seguidas, o peso que não dobra até 5 ou 6 meses, o perímetro cefálico que cruza curvas para cima (hidrocefalia, coleção) ou para baixo (microcefalia) e a estatura que desacelera. A regra: <strong>medir, plotar e comparar com a consulta anterior</strong>.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ganho lento em bebê amamentado nas primeiras semanas pede observação da mamada antes de qualquer fórmula: pega, frequência, fraldas molhadas e evacuações contam a história. Perímetro cefálico que dispara é urgência de imagem, mesmo em bebê que parece bem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Peso: dobra aos 4 a 5 meses, triplica aos 12.</li>
<li>Comprimento: 15 cm no primeiro semestre, 10 no segundo (50, 65, 75 cm).</li>
<li>Perímetro cefálico: 2 cm/mês, depois 1, depois 0,5 (34, 43, 47 cm).</li>
<li>Vale mais a velocidade que a medida isolada.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Bebê nasceu com 50 cm e 34 cm de perímetro cefálico: quanto se espera aos 6 meses? <details><summary>Resposta</summary>Cerca de 65 cm de comprimento e 43 cm de perímetro cefálico.</details></li>
<li>Com que idade o peso de nascimento dobra e triplica? <details><summary>Resposta</summary>Dobra entre 4 e 5 meses e triplica aos 12 meses.</details></li>
</ol>
`,
"susp2021#87": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os marcos motores, de linguagem e sociais dos 9 aos 10 meses.</li>
<li>Reconhecer a ansiedade do estranho como fenômeno normal.</li>
<li>Identificar sinais de alerta que exigem avaliação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ansiedade do estranho</dt>
<dd>Choro ou retraimento diante de desconhecidos, dos 6 aos 9 meses em diante; mostra apego seletivo.</dd>
<dt>Permanência do objeto</dt>
<dd>Saber que o objeto existe quando some da vista; o bebê procura o brinquedo escondido.</dd>
<dt>Pinça</dt>
<dd>Inferior (polpa) por volta dos 9 meses; superior (pontas dos dedos) aos 12.</dd>
<dt>Balbucio</dt>
<dd>Sílabas repetidas sem significado específico, dos 6 aos 10 meses.</dd>
</dl>
<h4>O essencial</h4>
<p>Aos <strong>9 a 10 meses</strong> a criança <strong>senta sem apoio</strong> com as mãos livres, passa de deitada para sentada, <strong>fica em pé com apoio</strong> e pode se deslocar engatinhando, arrastando-se sentada ou rolando. Transfere objetos entre as mãos, bate um no outro e usa a <strong>pinça inferior</strong>. <strong>Balbucia sílabas</strong>, responde ao nome, entende "não". Brinca de esconder, dá tchau e demonstra <strong>estranhamento</strong> diante de desconhecidos.</p>
<p>A <strong>ansiedade do estranho</strong> assusta os pais, mas é marco saudável: mostra que a criança distingue as figuras de apego e que o vínculo está formado. Surge entre 6 e 9 meses, atinge o pico por volta de um ano e se atenua no segundo ano. <strong>Engatinhar não é obrigatório</strong>: parte das crianças saudáveis nunca engatinha, arrasta-se sentada ou passa direto ao andar com apoio; a Caderneta não o lista entre os marcos que definem atraso, porque o que importa é a progressão da mobilidade com tônus normal.</p>
<p><strong>Sinais de alerta</strong> aos 9 a 10 meses: não sentar sem apoio, não transferir objetos, não balbuciar, não responder ao nome ou ao som, não fazer contato visual, assimetria de movimentos ou preferência persistente por uma mão, tônus muito aumentado ou diminuído. Qualquer um pede avaliação e intervenção precoce.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte à mãe o que a criança faz e peça para ela mostrar: um brinquedo escondido sob o pano, uma bolinha de papel para a pinça, um chamado pelo nome pelas costas. Em cinco minutos o exame do desenvolvimento está feito.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>9 a 10 meses: senta sem apoio, em pé com apoio, transfere objetos, pinça inferior, balbucio, responde ao nome.</li>
<li>Ansiedade do estranho é normal e indica apego seletivo.</li>
<li>Engatinhar é dispensável; conta a progressão da mobilidade.</li>
<li>Alerta: não senta, não balbucia, não responde ao nome, assimetria, tônus anormal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Bebê de 10 meses chora quando um desconhecido se aproxima: é problema? <details><summary>Resposta</summary>Não; é a ansiedade do estranho, marco normal do vínculo seletivo.</details></li>
<li>Criança de 10 meses não engatinha, mas senta sem apoio e se arrasta sentada: como interpretar? <details><summary>Resposta</summary>Desenvolvimento normal; engatinhar não é obrigatório.</details></li>
</ol>
`,
"susp2021#89": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a coqueluche pela tosse paroxística com guincho e vômito pós-tosse.</li>
<li>Interpretar a linfocitose e conhecer os exames confirmatórios.</li>
<li>Tratar com macrolídeo e conduzir a profilaxia dos contatos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bordetella pertussis</dt>
<dd>Cocobacilo gram-negativo que adere ao epitélio ciliado; transmissão por gotículas.</dd>
<dt>Fase catarral</dt>
<dd>1 a 2 semanas de resfriado comum; período de maior contagiosidade.</dd>
<dt>Fase paroxística</dt>
<dd>2 a 6 semanas de tosse em salvas, guincho, cianose e vômito ao fim.</dd>
<dt>dTpa da gestante</dt>
<dd>Vacina acelular a partir de 20 semanas em toda gestação, que protege o recém-nascido.</dd>
</dl>
<h4>O essencial</h4>
<p>A coqueluche tem três fases: <strong>catarral</strong> (coriza, tosse leve, febre baixa por 1 a 2 semanas), <strong>paroxística</strong> (a febre cede e a tosse piora em <strong>acessos súbitos em salvas</strong>, com <strong>guincho inspiratório</strong> e <strong>vômito</strong>, criança bem entre os acessos) e <strong>convalescença</strong>. No <strong>lactente menor de 6 meses</strong> pode não haver guincho, e os acessos cursam com <strong>apneia, cianose e bradicardia</strong>; as complicações são pneumonia, convulsões e hipertensão pulmonar com leucocitose extrema. Todo lactente pequeno suspeito é internado.</p>
<p>O <strong>hemograma</strong> mostra leucocitose de 20.000 ou mais com <strong>predomínio de linfócitos</strong>; acima de 50.000 indica gravidade. Confirmação por <strong>PCR ou cultura</strong> de nasofaringe. Caso suspeito para notificação: tosse por 14 dias ou mais com paroxismos, guincho ou vômito pós-tosse, ou qualquer tosse em contato de caso confirmado.</p>
<p>Tratamento com <strong>macrolídeo</strong>: <strong>azitromicina</strong> por 5 dias (preferida no menor de 1 mês, pelo risco de estenose do piloro com a eritromicina), <strong>claritromicina</strong> por 7 dias ou eritromicina por 14. O antibiótico encurta pouco a doença paroxística, mas <strong>interrompe a transmissão</strong> em 5 dias. Os <strong>contatos domiciliares</strong> recebem o mesmo esquema como profilaxia, independentemente da vacinação. Prevenção: pentavalente aos 2, 4 e 6 meses, DTP aos 15 meses e 4 anos, <strong>dTpa na gestante</strong> a partir de 20 semanas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Tosse em salvas que termina em vômito, em lactente bem entre os acessos, com hemograma cheio de linfócitos: trate como coqueluche antes do PCR, notifique e dê macrolídeo a todos da casa. Pergunte se a mãe tomou dTpa na gestação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Catarral, paroxística, convalescença; a febre cede e a tosse piora.</li>
<li>Tosse em salvas, guincho, vômito; no lactente pequeno, apneia e cianose.</li>
<li>Leucocitose com linfocitose; PCR ou cultura confirmam.</li>
<li>Azitromicina 5 dias, claritromicina 7, eritromicina 14; profilaxia dos contatos; dTpa na gestante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado do hemograma reforça a suspeita? <details><summary>Resposta</summary>Leucocitose com predomínio de linfócitos; acima de 50.000 indica gravidade.</details></li>
<li>Por que a azitromicina é preferida no recém-nascido? <details><summary>Resposta</summary>A eritromicina se associa à estenose hipertrófica do piloro no menor de 1 mês.</details></li>
</ol>
`,
"susp2021#96": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar celularidade, tipo de célula, proteína e glicose do líquor.</li>
<li>Separar meningite bacteriana, viral e tuberculosa pelo padrão liquórico.</li>
<li>Decidir quando tratar como bacteriana até as culturas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pleocitose</dt>
<dd>Aumento de células no líquor; o normal é até 5 por mm³ na criança maior.</dd>
<dt>Predomínio linfomononuclear</dt>
<dd>Maioria de linfócitos e monócitos, típico das meningites viral e tuberculosa.</dd>
<dt>Glicorraquia</dt>
<dd>Normal acima de 40 mg/dL ou de dois terços da glicemia.</dd>
<dt>Meningite asséptica</dt>
<dd>Cultura bacteriana negativa; na maioria, enterovírus.</dd>
</dl>
<h4>O essencial</h4>
<p>Febre, cefaleia, vômitos e rigidez de nuca definem a síndrome meníngea, e o líquor é lido em quatro colunas: <strong>células</strong>, <strong>tipo predominante</strong>, <strong>proteína</strong> e <strong>glicose</strong>, com bacterioscopia, culturas, látex e PCR. A <strong>bacteriana</strong> mostra em geral <strong>acima de 1.000 células</strong>, <strong>neutrófilos</strong>, <strong>proteína acima de 100 mg/dL</strong> e <strong>glicose baixa</strong> (abaixo de 40 mg/dL ou de 40% da glicemia), líquor turvo. A <strong>viral</strong> tem <strong>dezenas a poucas centenas</strong> de células, <strong>linfomononucleares</strong>, <strong>proteína normal ou pouco elevada</strong> e <strong>glicose normal</strong>, líquor claro. A <strong>tuberculosa</strong> combina pleocitose moderada linfomononuclear com <strong>proteína alta e glicose baixa</strong>, em semanas.</p>
<p>Armadilhas: nas <strong>primeiras 24 a 48 horas</strong> a viral pode ter neutrófilos, que viram linfócitos numa segunda punção; a bacteriana <strong>parcialmente tratada</strong> tem menos células e cultura negativa, mas mantém glicose baixa e proteína alta. Com criança toxêmica ou líquor duvidoso, trata-se como bacteriana até as culturas.</p>
<p>Os <strong>enterovírus</strong> respondem pela maioria das virais, no verão e no outono, autolimitadas em dias; herpes, caxumba e arbovírus vêm depois. Tratamento de <strong>suporte</strong>, prognóstico excelente; aciclovir só na suspeita de encefalite herpética (rebaixamento, convulsão, sinais focais).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Poucas centenas de células, linfócitos, proteína quase normal e glicose normal em criança lúcida: é viral, e a família pode ser tranquilizada. Glicose baixa afasta o rótulo de viral: é bacteriana ou tuberculosa até prova em contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Bacteriana: acima de 1.000 células, neutrófilos, proteína alta, glicose baixa.</li>
<li>Viral: dezenas a centenas, linfomononucleares, proteína normal, glicose normal.</li>
<li>Tuberculosa: linfomononuclear com proteína alta e glicose baixa.</li>
<li>Enterovírus é o agente mais comum; suporte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que parâmetro do líquor mais afasta a meningite viral? <details><summary>Resposta</summary>A glicose baixa; na viral a glicorraquia é normal.</details></li>
<li>Líquor com 150 células, 70% de neutrófilos, proteína 50 e glicose 60 em criança lúcida: conduta? <details><summary>Resposta</summary>Possível viral nas primeiras horas; observar, cobrir com antibiótico até as culturas se houver dúvida e repetir a punção se necessário.</details></li>
</ol>
`,
"susp2021#100": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar o hiperinsulinismo fetal do filho de mãe diabética.</li>
<li>Listar as complicações neonatais e a hora em que cada uma aparece.</li>
<li>Conduzir o rastreio e o tratamento da hipoglicemia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hiperinsulinismo fetal</dt>
<dd>Resposta do pâncreas fetal à hiperglicemia materna; a insulina é o hormônio de crescimento do feto.</dd>
<dt>Macrossomia</dt>
<dd>Peso acima de 4.000 g, com gordura no tronco e risco de distocia de ombro.</dd>
<dt>Hipoglicemia neonatal</dt>
<dd>Glicemia abaixo de 40 a 45 mg/dL nas primeiras horas, sintomática ou não.</dd>
<dt>Hipocalcemia neonatal</dt>
<dd>Cálcio baixo entre 24 e 72 horas, por hipoparatireoidismo transitório.</dd>
</dl>
<h4>O essencial</h4>
<p>A glicose materna atravessa a placenta; a insulina, não. No diabetes mal controlado o feto responde com <strong>hiperplasia das células beta e hiperinsulinismo</strong>: cresce grande, deposita gordura, tem órgãos aumentados e pulmão imaturo. Ao nascer, a glicose materna cessa e a insulina continua alta: a glicemia despenca nas <strong>primeiras 1 a 3 horas</strong>. A cronologia das complicações: <strong>hipoglicemia</strong> e <strong>desconforto respiratório</strong> nas primeiras horas; <strong>hipocalcemia e hipomagnesemia</strong> entre 24 e 72 horas; <strong>policitemia</strong> e <strong>icterícia</strong> nos primeiros dias; cardiomiopatia hipertrófica septal e malformações (cardíacas, tubo neural, regressão caudal) quando o descontrole vem do primeiro trimestre; tocotraumatismo do bebê grande.</p>
<p>A hipoglicemia costuma ser assintomática, e por isso se rastreia: glicemia na primeira hora e antes das mamadas nas primeiras 24 horas, com alimentação precoce. Quando dá sintomas, eles são <strong>neurológicos e inespecíficos</strong>: tremores, irritabilidade, choro agudo, hipotonia, sucção débil, apneia, cianose e <strong>convulsões</strong>. Diante de qualquer um deles nas primeiras horas, a glicemia é o primeiro exame, antes de pensar em sepse, hemorragia ou hipocalcemia, cuja hora ainda não chegou.</p>
<p>Sintomática: <strong>glicose intravenosa</strong>, bolus de 2 mL/kg de soro glicosado a 10% e infusão de 4 a 8 mg/kg/min, com aumento progressivo se preciso; assintomática com valor pouco baixo: mamada ou gel de glicose e recontrole. Persistência além de 48 a 72 horas ou necessidade acima de 10 a 12 mg/kg/min leva à investigação de hiperinsulinismo persistente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Filho de mãe diabética que treme ou convulsiona com 12 horas de vida tem hipoglicemia até que a fita diga o contrário; a hipocalcemia é a segunda suspeita se a glicemia estiver normal ou o sintoma persistir após corrigi-la. Não espere o laboratório para dar a glicose.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hiperinsulinismo fetal: macrossomia, órgãos grandes, pulmão imaturo.</li>
<li>Hipoglicemia nas primeiras 1 a 3 horas; hipocalcemia entre 24 e 72 horas.</li>
<li>Sintoma neurológico precoce: glicemia primeiro.</li>
<li>Sintomática: 2 mL/kg de glicose a 10% e infusão de 4 a 8 mg/kg/min.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a glicemia cai logo após o nascimento? <details><summary>Resposta</summary>A oferta materna de glicose cessa, mas o hiperinsulinismo fetal persiste por horas.</details></li>
<li>Qual complicação aparece entre 24 e 72 horas? <details><summary>Resposta</summary>A hipocalcemia, com hipomagnesemia, por hipoparatireoidismo transitório.</details></li>
</ol>
`,
"unesp2026#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reproduzir a sequência do fluxograma de reanimação do recém-nascido de 34 semanas ou mais.</li>
<li>Saber quando iniciar a ventilação com pressão positiva e com que concentração de oxigênio.</li>
<li>Reconhecer o momento da massagem cardíaca e da adrenalina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Passos iniciais</dt>
<dd>Calor, posicionar a cabeça, aspirar se necessário, secar e estimular: 30 segundos.</dd>
<dt>Ventilação com pressão positiva (VPP)</dt>
<dd>O procedimento mais importante da reanimação; balão autoinflável e máscara, 40 a 60 por minuto.</dd>
<dt>Minuto de ouro</dt>
<dd>O primeiro minuto de vida, dentro do qual a VPP deve começar se houver apneia ou bradicardia.</dd>
<dt>Oximetria pré-ductal</dt>
<dd>Sensor no punho direito, que guia a oferta de oxigênio pelos alvos de saturação por minuto de vida.</dd>
</dl>
<h4>O essencial</h4>
<p>Ao nascer, três perguntas: <strong>termo? respirando ou chorando? tônus bom?</strong> Três sins levam ao colo da mãe com clampeamento tardio. Qualquer não leva ao berço aquecido para os <strong>passos iniciais</strong> em 30 segundos: prover calor, posicionar a cabeça em leve extensão, aspirar boca e narinas só se houver secreção obstruindo, secar e desprezar os campos úmidos. Depois, avalia-se <strong>respiração e frequência cardíaca</strong>: apneia, respiração irregular ou frequência abaixo de 100 indicam <strong>VPP</strong> de imediato, ainda dentro do minuto de ouro.</p>
<p>No recém-nascido de <strong>34 semanas ou mais</strong>, a VPP começa com balão autoinflável e máscara, <strong>com ar ambiente (21%)</strong>, 40 a 60 movimentos por minuto, com oxímetro no punho direito e monitor cardíaco. Após 30 segundos de ventilação eficaz, reavalia-se: frequência acima de 100 e respiração regular permitem suspender; frequência abaixo de 100 pede checar a técnica (ajuste da máscara, posição, aspiração, abertura da boca, pressão) e, se não melhora, oxigênio suplementar em incrementos guiados pela saturação e intubação. A <strong>massagem cardíaca</strong> só entra com frequência <strong>abaixo de 60 após 30 segundos de VPP eficaz</strong>, de preferência com o recém-nascido intubado e oxigênio a 100%, na proporção de 3 compressões para 1 ventilação; a <strong>adrenalina</strong> intravenosa vem se a frequência segue abaixo de 60 após 60 segundos de massagem com ventilação.</p>
<p>O erro mais comum é pular etapas: iniciar oxigênio a 100% ou massagem antes de garantir ventilação eficaz. A frequência cardíaca é o indicador que decide cada passo, e a maior parte dos recém-nascidos responde à ventilação bem feita.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a VPP não funciona, o problema quase sempre é técnico: máscara mal vedada, cabeça fletida, secreção, boca fechada ou pressão insuficiente. Corrija a técnica antes de escalar. E conte em voz alta os 30 segundos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Passos iniciais em 30 segundos; apneia ou frequência abaixo de 100: VPP no minuto de ouro.</li>
<li>Termo e pré-termo tardio: VPP com ar ambiente, 40 a 60 por minuto, oxímetro pré-ductal.</li>
<li>Reavaliar a cada 30 segundos; corrigir a técnica antes de subir o oxigênio.</li>
<li>Massagem só com frequência abaixo de 60 após VPP eficaz; 3:1; adrenalina após 60 segundos de massagem.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Recém-nascido de 37 semanas em apneia após os passos iniciais: qual é o próximo passo? <details><summary>Resposta</summary>Ventilação com pressão positiva com balão e máscara, com ar ambiente, por 30 segundos, com oxímetro e monitor.</details></li>
<li>Quando começa a massagem cardíaca? <details><summary>Resposta</summary>Quando a frequência cardíaca fica abaixo de 60 após 30 segundos de ventilação eficaz.</details></li>
</ol>
`,
"unesp2026#4": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Indicar o clampeamento tardio do cordão no recém-nascido vigoroso.</li>
<li>Explicar os benefícios hematológicos no termo e no prematuro.</li>
<li>Reconhecer as situações em que o clampeamento é imediato.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Clampeamento tardio</dt>
<dd>Pinçar o cordão após ao menos 60 segundos (1 a 3 minutos) no recém-nascido que respira e tem tônus.</dd>
<dt>Transfusão placentária</dt>
<dd>Volume de sangue que passa da placenta ao bebê nos primeiros minutos, cerca de 30% da volemia.</dd>
<dt>Ferritina</dt>
<dd>Reserva de ferro; mais alta até 3 a 6 meses de vida com o clampeamento tardio.</dd>
<dt>Recém-nascido vigoroso</dt>
<dd>Respirando ou chorando, com bom tônus, na avaliação do nascimento.</dd>
</dl>
<h4>O essencial</h4>
<p>Nos primeiros minutos após o parto, a placenta ainda bombeia sangue para o recém-nascido. Esperar <strong>ao menos 60 segundos</strong> antes de pinçar o cordão, com o bebê no colo ou no nível da mãe, permite essa <strong>transfusão placentária</strong>: maior volemia, mais hemoglobina nas primeiras 24 horas e mais reserva de <strong>ferro</strong>, com ferritina mais alta até 3 a 6 meses e menos anemia no primeiro semestre, o que favorece o desenvolvimento. O Programa de Reanimação Neonatal e a OMS recomendam o clampeamento tardio para <strong>todo recém-nascido vigoroso</strong>, a termo ou prematuro, em parto vaginal ou cesárea.</p>
<p>No <strong>prematuro</strong>, os benefícios são ainda maiores: menos hemorragia intraventricular, menos enterocolite, menos transfusões e menor mortalidade. Por isso se espera de 30 a 60 segundos mesmo no menor de 34 semanas que respira e tem tônus, com aquecimento durante a espera.</p>
<p>O clampeamento é <strong>imediato</strong> quando a circulação placentária não está íntegra (descolamento prematuro de placenta, placenta prévia com sangramento, rotura de cordão) ou quando o bebê <strong>não respira, não chora ou está hipotônico</strong> e precisa dos passos iniciais e da ventilação sem demora. O clampeamento tardio aumenta um pouco a bilirrubina, sem elevar de forma relevante a necessidade de fototerapia, e não é motivo para deixar de fazê-lo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cordão longo e bebê sobre o abdome materno não impedem a avaliação inicial: respiração, choro e tônus se avaliam ali mesmo. Só o recém-nascido que precisa de ventilação vai ao berço antes do minuto, e aí o cordão é cortado na hora.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Clampeamento tardio: 60 segundos ou mais, em todo recém-nascido vigoroso, termo ou prematuro.</li>
<li>Mais hemoglobina nas primeiras 24 horas e ferritina mais alta até 3 a 6 meses.</li>
<li>No prematuro: menos hemorragia intraventricular, enterocolite e transfusão.</li>
<li>Imediato se circulação placentária comprometida ou bebê que precisa de reanimação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que parâmetros hematológicos melhoram com o clampeamento tardio no termo? <details><summary>Resposta</summary>A hemoglobina nas primeiras 24 horas e a ferritina até 3 a 6 meses, com menos anemia no primeiro semestre.</details></li>
<li>Quando o cordão é pinçado de imediato? <details><summary>Resposta</summary>Se a circulação placentária está comprometida ou se o bebê não respira, não chora ou está hipotônico.</details></li>
</ol>
`,
"unesp2026#5": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o calendário de vigilância clínica da síndrome de Down na infância e na adolescência.</li>
<li>Reconhecer a instabilidade atlantoaxial e seus sinais de alarme.</li>
<li>Integrar as orientações universais do adolescente ao seguimento da síndrome.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Trissomia do 21</dt>
<dd>Causa mais comum de deficiência intelectual de origem genética; hipotonia, fenótipo típico, comorbidades.</dd>
<dt>Instabilidade atlantoaxial</dt>
<dd>Frouxidão do ligamento transverso entre C1 e C2, presente em 10 a 20%, sintomática em poucos.</dd>
<dt>Hipotireoidismo</dt>
<dd>Comorbidade frequente e silenciosa; TSH ao nascer, aos 6 e 12 meses e depois anualmente.</dd>
<dt>Vigilância de saúde</dt>
<dd>Exames e avaliações programados por idade para detectar as comorbidades da síndrome antes dos sintomas.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome de Down traz um conjunto previsível de comorbidades, e o seguimento se organiza como um <strong>calendário</strong>. Ao nascer: ecocardiograma (cardiopatia em cerca de metade), triagem auditiva, avaliação oftalmológica, hemograma (policitemia, reação leucemoide, mielopoiese anormal transitória) e TSH. No primeiro ano: TSH aos 6 e 12 meses, audição a cada 6 meses, olhos aos 6 meses. Depois, <strong>anualmente</strong>: <strong>TSH</strong>, <strong>hemograma</strong>, <strong>avaliação auditiva</strong> e <strong>oftalmológica</strong>, triagem de doença celíaca se houver sintomas, e atenção a apneia obstrutiva do sono (polissonografia até os 4 anos), obesidade, constipação e saúde mental. Na adolescência somam-se as orientações de todo adolescente: alimentação, atividade física, sono e telas, imunização (incluindo HPV e meningocócica), sexualidade e contracepção, escolaridade e orientação vocacional.</p>
<p>A <strong>coluna cervical</strong> merece atenção especial. A instabilidade atlantoaxial é comum e em geral assintomática; a radiografia de rotina não prevê quem vai ter sintomas, e por isso a recomendação atual é <strong>vigilância clínica</strong>: perguntar e examinar, em toda consulta, dor cervical, torcicolo, mudança na marcha, fraqueza, alteração de esfíncteres, hiperreflexia ou clônus. Qualquer sinal leva à radiografia em flexão e extensão e ao especialista. Antes de esportes de contato ou anestesia, avalia-se a coluna.</p>
<p>Uma adolescente com Down que perdeu o seguimento precisa de tudo isso recolocado em ordem: exames anuais em atraso, calendário vacinal, avaliação da coluna se há queixa cervical, e as orientações de estilo de vida que valem para qualquer adolescente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor cervical em adolescente com Down não se atribui ao celular sem antes examinar a marcha, os reflexos e a força: é a apresentação típica da instabilidade atlantoaxial sintomática. Peça a radiografia dinâmica e encaminhe.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Anualmente: TSH, hemograma, audição, olhos; sono, peso, celíaca se sintomas.</li>
<li>Instabilidade atlantoaxial: vigilância clínica em toda consulta; radiografia se sinais.</li>
<li>Adolescente: alimentação, exercício, sono, telas, vacinas, sexualidade, escola e vocação.</li>
<li>Seguimento perdido: recolocar o calendário inteiro em dia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais indicam instabilidade atlantoaxial sintomática? <details><summary>Resposta</summary>Dor cervical, torcicolo, mudança da marcha, fraqueza, alteração de esfíncteres, hiperreflexia ou clônus.</details></li>
<li>Quais exames são anuais na síndrome de Down? <details><summary>Resposta</summary>TSH, hemograma, avaliação auditiva e oftalmológica.</details></li>
</ol>
`,
"unesp2026#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios pediátricos de síndrome metabólica.</li>
<li>Reconhecer a obesidade como a raiz do conjunto de alterações.</li>
<li>Indicar a conduta inicial: estilo de vida e equipe multiprofissional.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome metabólica</dt>
<dd>Obesidade abdominal com ao menos dois de: triglicerídeos altos, HDL baixo, pressão alta, glicemia alterada.</dd>
<dt>Circunferência abdominal</dt>
<dd>Medida da gordura visceral; critério obrigatório da definição da IDF (percentil 90 ou mais).</dd>
<dt>Resistência à insulina</dt>
<dd>Menor resposta dos tecidos à insulina, elo entre a gordura visceral e as alterações metabólicas.</dd>
<dt>Acantose nigricans</dt>
<dd>Espessamento escuro e aveludado nas dobras, sinal cutâneo de hiperinsulinemia.</dd>
</dl>
<h4>O essencial</h4>
<p>A obesidade infantil deixou de ser só um problema de peso: a gordura visceral gera resistência à insulina, e dela derivam a dislipidemia, a hipertensão e a disglicemia que, reunidas, formam a <strong>síndrome metabólica</strong>. A definição da IDF para <strong>10 a 16 anos</strong> exige <strong>circunferência abdominal no percentil 90 ou mais</strong> e ao menos dois de: <strong>triglicerídeos</strong> de 150 mg/dL ou mais, <strong>HDL</strong> abaixo de 40 mg/dL, <strong>pressão arterial</strong> de 130/85 mmHg ou mais e <strong>glicemia de jejum</strong> de 100 mg/dL ou mais (ou diabetes). Abaixo de 10 anos a síndrome não é diagnosticada, apenas rastreada; acima de 16 valem os critérios do adulto.</p>
<p>A criança típica tem IMC acima do percentil 97, história familiar de diabetes tipo 2, alimentação com ultraprocessados, sedentarismo e, ao exame, acantose nigricans e pressão elevada. A investigação inicial inclui perfil lipídico, glicemia de jejum (e hemoglobina glicada ou teste de tolerância se indicado), transaminases (esteatose hepática) e, na menina, atenção à síndrome dos ovários policísticos.</p>
<p>A conduta de saída é <strong>mudança de estilo de vida</strong> com <strong>equipe multiprofissional</strong>: nutrição, atividade física diária, redução de telas, sono adequado e envolvimento da família, com metas realistas e seguimento próximo. Medicação não é o primeiro passo: metformina fica para disglicemia ou obesidade grave sem resposta; anti-hipertensivo, para hipertensão confirmada e persistente; estatina, para LDL muito alto após meses de dieta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Meça a circunferência abdominal e a pressão com manguito adequado em toda consulta da criança com sobrepeso. Uma pressão alta em uma medida não é hipertensão: confirme em três ocasiões ou com monitorização ambulatorial antes de rotular.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>10 a 16 anos: circunferência abdominal no percentil 90 ou mais e dois de triglicerídeos, HDL, pressão, glicemia.</li>
<li>Resistência à insulina é o elo; acantose é o sinal na pele.</li>
<li>Conduta: estilo de vida com equipe e família; sem medicação de saída.</li>
<li>Metformina, anti-hipertensivo e estatina só em situações definidas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o critério obrigatório da síndrome metabólica pediátrica pela IDF? <details><summary>Resposta</summary>A circunferência abdominal no percentil 90 ou mais.</details></li>
<li>Qual é a conduta inicial diante dos critérios preenchidos? <details><summary>Resposta</summary>Mudança de estilo de vida com equipe multiprofissional e família; sem medicação de saída.</details></li>
</ol>
`,
"unesp2026#9": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a parada cardiorrespiratória pediátrica em ritmo não chocável.</li>
<li>Dosar e temporizar a adrenalina.</li>
<li>Buscar as causas reversíveis, com as particularidades do asmático.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>AESP</dt>
<dd>Atividade elétrica sem pulso: ritmo organizado no monitor sem pulso palpável.</dd>
<dt>Ritmos não chocáveis</dt>
<dd>Assistolia e AESP; recebem compressões e adrenalina, nunca desfibrilação.</dd>
<dt>Hs e Ts</dt>
<dd>Causas reversíveis: hipóxia, hipovolemia, hidrogênio (acidose), hipo/hipercalemia, hipotermia; tensão (pneumotórax), tamponamento, toxinas, trombose.</dd>
<dt>Auto-PEEP</dt>
<dd>Aprisionamento de ar no asmático ventilado, que reduz o retorno venoso e pode causar a parada.</dd>
</dl>
<h4>O essencial</h4>
<p>Na parada pediátrica, compressões de alta qualidade começam de imediato: 100 a 120 por minuto, um terço do diâmetro do tórax, relação 15:2 com dois socorristas até a via aérea avançada, e depois compressões contínuas com uma ventilação a cada 2 a 3 segundos. O monitor define o ramo: <strong>fibrilação e taquicardia ventricular sem pulso</strong> recebem choque (2 J/kg, depois 4, até 10); <strong>assistolia e AESP</strong> recebem <strong>adrenalina o quanto antes</strong>, 0,01 mg/kg (0,1 mL/kg da solução 1:10.000) intravenosa ou intraóssea, <strong>repetida a cada 3 a 5 minutos</strong>, com ritmo e pulso reavaliados a cada 2 minutos.</p>
<p>Na AESP a pergunta é sempre <strong>por quê</strong>, porque o coração tem atividade elétrica e a causa é tratável: os <strong>Hs e Ts</strong>. Na criança, a hipóxia e a hipovolemia lideram. No <strong>asmático grave</strong>, três causas se destacam: <strong>hipóxia</strong> por obstrução, <strong>pneumotórax hipertensivo</strong> pela hiperinsuflação e <strong>aprisionamento de ar</strong> (auto-PEEP), que impede o retorno venoso. Por isso, no asmático em parada, ventila-se com frequência baixa e tempo expiratório longo, desconecta-se o circuito por alguns segundos para o tórax esvaziar, comprime-se o tórax na expiração se preciso e procura-se pneumotórax para descompressão.</p>
<p>Os erros que custam vidas: desfibrilar ritmo não chocável, interromper compressões para checar pulso fora dos ciclos, atrasar a adrenalina, hiperventilar (o que piora o auto-PEEP e reduz o retorno venoso) e esquecer de tratar a causa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Asmático que rebaixa e cianosa depois de beta-agonista e corticoide está a caminho da parada: prepare a intubação, ventile devagar e com expiração longa, e tenha adrenalina e agulha de descompressão à mão. Se ele para em AESP, a causa está no tórax.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Compressões de qualidade; 15:2 com dois socorristas; monitor define o ramo.</li>
<li>Assistolia e AESP: adrenalina 0,01 mg/kg IV/IO a cada 3 a 5 minutos, sem choque.</li>
<li>AESP: procurar Hs e Ts; na criança, hipóxia e hipovolemia lideram.</li>
<li>Asmático: hipóxia, pneumotórax hipertensivo e auto-PEEP; ventilar devagar, desconectar, descomprimir.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a dose e o intervalo da adrenalina na parada pediátrica? <details><summary>Resposta</summary>0,01 mg/kg (0,1 mL/kg de 1:10.000) IV ou IO, a cada 3 a 5 minutos.</details></li>
<li>Que causas reversíveis pensar na AESP do asmático? <details><summary>Resposta</summary>Hipóxia, pneumotórax hipertensivo e aprisionamento de ar com auto-PEEP.</details></li>
</ol>
`,
"unesp2026#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar o que é a doença celíaca e como se diagnostica.</li>
<li>Listar os cereais com glúten e os alimentos permitidos.</li>
<li>Reconhecer o glúten escondido em produtos industrializados e na aveia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Glúten</dt>
<dd>Proteínas do trigo, da cevada e do centeio (gliadinas e prolaminas afins).</dd>
<dt>Anti-transglutaminase IgA</dt>
<dd>Anticorpo de triagem e diagnóstico; dosar com a IgA total.</dd>
<dt>Atrofia vilositária</dt>
<dd>Lesão da mucosa duodenal que caracteriza a doença na biópsia.</dd>
<dt>Contaminação cruzada</dt>
<dd>Traços de glúten em alimentos sem glúten por contato na produção ou na cozinha.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença celíaca é uma enteropatia <strong>autoimune</strong> desencadeada pelo glúten em pessoas com HLA-DQ2 ou DQ8. Na criança pode se apresentar com diarreia crônica, distensão, baixo ganho de peso e irritabilidade, ou de forma atípica: baixa estatura, anemia ferropriva refratária, constipação, elevação de transaminases, atraso puberal. A triagem é a <strong>anti-transglutaminase IgA</strong> com IgA total; títulos acima de 10 vezes o limite com antiendomísio positivo em segunda amostra permitem o diagnóstico sem biópsia pelos critérios da ESPGHAN; nos demais, a biópsia duodenal mostra atrofia vilositária. Os exames são feitos <strong>com a criança comendo glúten</strong>.</p>
<p>O tratamento é a <strong>dieta sem glúten para toda a vida</strong>. Contêm glúten o <strong>trigo</strong> (farinha, semolina, trigo para quibe, triguilho, cuscuz marroquino, farinha de rosca, pão, macarrão, bolachas), a <strong>cevada</strong> (malte, cerveja, alguns achocolatados) e o <strong>centeio</strong>. São livres o <strong>arroz</strong> e a farinha de arroz, o <strong>milho</strong> (fubá, polenta, canjica, pipoca), a <strong>mandioca</strong> (tapioca, polvilho, farinha de mandioca), a batata, o inhame, a quinoa, o trigo sarraceno (apesar do nome), as leguminosas, carnes, ovos, leite, frutas e vegetais in natura.</p>
<p>O glúten se esconde em nomes: Panko é farinha de rosca japonesa; quibe e tabule levam trigo; molhos, embutidos, salgadinhos e temperos prontos podem conter. A <strong>aveia</strong> é naturalmente sem glúten, mas quase sempre contaminada pelo trigo no cultivo e no processamento: só a aveia certificada sem glúten é permitida, e mesmo assim com introdução supervisionada. A leitura de rótulos é obrigatória no Brasil ("contém glúten" ou "não contém glúten").</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A resposta clínica à dieta em semanas e a queda da anti-transglutaminase em meses confirmam a adesão. Sintomas persistentes quase sempre são contaminação cruzada em casa ou na escola, não refratariedade; envolva a família inteira e a nutricionista.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Autoimune, HLA-DQ2/DQ8; anti-transglutaminase IgA e biópsia, com glúten na dieta.</li>
<li>Glúten: trigo, cevada, centeio; malte e Panko são glúten disfarçado.</li>
<li>Livres: arroz, milho, mandioca, batata, quinoa, trigo sarraceno, in natura.</li>
<li>Aveia só certificada sem glúten; rótulos sempre.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais cereais contêm glúten? <details><summary>Resposta</summary>Trigo, cevada e centeio, incluindo malte, semolina, triguilho e farinha de rosca.</details></li>
<li>Por que a aveia comum não é liberada? <details><summary>Resposta</summary>Pela contaminação cruzada com trigo no cultivo e no processamento; só a certificada sem glúten.</details></li>
</ol>
`,
"unesp2026#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a ingestão ou aspiração de corpo estranho pelo início súbito na criança pequena.</li>
<li>Indicar a radiografia de pescoço, tórax e abdome como primeiro exame.</li>
<li>Saber quais corpos estranhos exigem remoção urgente.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Corpo estranho esofágico</dt>
<dd>Objeto retido no esôfago, em geral no cricofaríngeo, no arco aórtico ou na junção esofagogástrica.</dd>
<dt>Bateria em botão</dt>
<dd>Pilha de lítio que lesa a mucosa em 2 horas por corrente e hidróxido; emergência absoluta.</dd>
<dt>Sinal do duplo halo</dt>
<dd>Anel duplo na radiografia que distingue a bateria em botão de uma moeda.</dd>
<dt>Objeto radiotransparente</dt>
<dd>Plástico, madeira, alimento, que não aparece na radiografia e pede endoscopia se a suspeita persiste.</dd>
</dl>
<h4>O essencial</h4>
<p>Entre 6 meses e 3 anos a criança explora o mundo com a boca, e o quadro de <strong>início súbito</strong>, em criança até então bem, brincando sozinha, com tosse, engasgo, sialorreia, recusa alimentar ou dispneia, é corpo estranho até prova em contrário. A história pode não existir, e o exame físico pode ser normal. Sialorreia, disfagia e dor cervical apontam para o <strong>esôfago</strong>; tosse, sibilância localizada e murmúrio assimétrico, para a <strong>via aérea</strong>.</p>
<p>O primeiro exame, após o exame físico completo com atenção à via aérea, é a <strong>radiografia de pescoço, tórax e abdome</strong>, em duas incidências, para localizar o objeto, dizer se é único e caracterizá-lo. Moedas aparecem de frente na incidência anteroposterior quando estão no esôfago e de perfil quando estão na traqueia. A <strong>bateria em botão</strong> tem o duplo halo e a borda em degrau, e a diferença importa: <strong>bateria no esôfago é emergência</strong>, com remoção endoscópica em até 2 horas, porque a corrente lesa a mucosa e pode perfurar a aorta. Também exigem remoção urgente os <strong>ímãs múltiplos</strong> (aderem entre alças e perfuram), objetos pontiagudos, objetos longos e qualquer corpo estranho esofágico com sintomas ou retido por mais de 24 horas.</p>
<p>Objetos rombos pequenos que já passaram ao estômago costumam ser eliminados em dias, com observação e radiografia de controle. Objeto na via aérea vai para broncoscopia rígida. Não se provoca vômito nem se tenta remover às cegas; a criança fica em jejum até a decisão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Baterias em botão vivem em controles remotos, brinquedos e balanças. Diante de uma moeda na radiografia, olhe a borda: o duplo halo transforma uma observação tranquila em uma corrida para a endoscopia. Se houver dúvida, trate como bateria.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Início súbito em criança pequena bem até então: corpo estranho.</li>
<li>Primeiro exame: radiografia de pescoço, tórax e abdome em duas incidências.</li>
<li>Bateria no esôfago: endoscopia em até 2 horas; ímãs múltiplos e pontiagudos: urgência.</li>
<li>Rombos no estômago: observar; via aérea: broncoscopia; nada às cegas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinal radiológico distingue bateria de moeda? <details><summary>Resposta</summary>O duplo halo e a borda em degrau da bateria em botão.</details></li>
<li>Quais corpos estranhos exigem remoção urgente? <details><summary>Resposta</summary>Bateria no esôfago, ímãs múltiplos, objetos pontiagudos ou longos e qualquer objeto esofágico sintomático ou retido por mais de 24 horas.</details></li>
</ol>
`,
"unesp2026#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a proctocolite alérgica do lactente em aleitamento exclusivo.</li>
<li>Explicar por que a proteína do leite de vaca chega ao bebê pelo leite materno.</li>
<li>Conduzir com dieta de exclusão da mãe, sem desmame.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Proctocolite alérgica</dt>
<dd>Forma não mediada por IgE da alergia ao leite de vaca: sangue e muco nas fezes em lactente bem.</dd>
<dt>Alergia não IgE-mediada</dt>
<dd>Reação tardia, celular, sem urticária nem anafilaxia; testes de IgE são negativos.</dd>
<dt>Dieta de exclusão materna</dt>
<dd>Retirada de leite de vaca e derivados da dieta da nutriz, com suplemento de cálcio.</dd>
<dt>Teste de provocação</dt>
<dd>Reintrodução programada para confirmar o diagnóstico e verificar a tolerância.</dd>
</dl>
<h4>O essencial</h4>
<p>A alergia à proteína do leite de vaca existe também no bebê que só mama: as proteínas ingeridas pela mãe passam ao leite materno em quantidade suficiente para sensibilizar e provocar sintomas. A forma típica no <strong>lactente em aleitamento exclusivo</strong> é a <strong>proctocolite alérgica</strong>: rajas de sangue e muco nas fezes, às vezes com evacuações mais frequentes, em um bebê que <strong>ganha peso e está bem</strong>, entre 2 semanas e 6 meses. É uma reação <strong>não mediada por IgE</strong>, e por isso IgE específica e teste cutâneo são negativos e não ajudam.</p>
<p>O diagnóstico é <strong>clínico e por exclusão-provocação</strong>: afastam-se fissura anal, infecção e outras causas, e a mãe retira <strong>leite de vaca e derivados</strong> da dieta (também soja, se não houver resposta) por 2 a 4 semanas, com suplementação de cálcio. A melhora confirma a suspeita; a <strong>reintrodução</strong> programada, com recorrência dos sintomas, fecha o diagnóstico. A dieta da mãe se mantém enquanto amamenta; a <strong>tolerância</strong> chega na maioria até 1 a 3 anos, e a provocação é repetida periodicamente.</p>
<p>O erro a evitar é <strong>desmamar</strong> e trocar por fórmula: o leite materno protege, e a alergia se trata modificando a dieta materna. Fórmulas extensamente hidrolisadas ou de aminoácidos entram só quando o aleitamento não é possível. Sintomas de alarme (perda de peso, vômitos, diarreia com desidratação, anemia) apontam para as formas mais graves, como enterocolite induzida por proteína alimentar, e mudam a conduta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sangue nas fezes de um bebê que mama e está bem não pede nem antibiótico nem fórmula: pede dieta para a mãe, cálcio para ela e um retorno em 2 a 4 semanas. Explique que a mãe não precisa parar de amamentar; é a pergunta que ela vai fazer primeiro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Proteínas da dieta materna passam ao leite; a alergia existe no aleitamento exclusivo.</li>
<li>Proctocolite: sangue e muco nas fezes em bebê bem; não IgE-mediada, testes negativos.</li>
<li>Diagnóstico por exclusão materna de leite e derivados e reintrodução.</li>
<li>Não desmamar; fórmula hidrolisada só sem aleitamento.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a IgE específica não ajuda na proctocolite alérgica? <details><summary>Resposta</summary>Porque a reação é não mediada por IgE, celular e tardia; os testes são negativos.</details></li>
<li>Qual é a conduta no lactente em aleitamento exclusivo com suspeita? <details><summary>Resposta</summary>Manter o aleitamento e retirar leite de vaca e derivados da dieta da mãe, com cálcio, e reintroduzir depois para confirmar.</details></li>
</ol>
`,
"unesp2026#15": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Saber quando a infecção urinária do lactente exige investigação por imagem.</li>
<li>Escolher entre ultrassonografia, uretrocistografia e cintilografia.</li>
<li>Reconhecer os gatilhos: alteração antenatal, infecção febril precoce, germe atípico, recorrência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Refluxo vesicoureteral</dt>
<dd>Retorno de urina da bexiga aos ureteres e rins, graduado de I a V na uretrocistografia.</dd>
<dt>Hidronefrose antenatal</dt>
<dd>Dilatação da pelve renal no ultrassom fetal, que pede reavaliação após o nascimento.</dd>
<dt>Cintilografia com DMSA</dt>
<dd>Mostra cicatrizes renais e pielonefrite aguda; feita 4 a 6 meses após a infecção.</dd>
<dt>Germe atípico</dt>
<dd>Bactéria diferente de E. coli (Proteus, Pseudomonas, Klebsiella, enterococo), que sugere anomalia.</dd>
</dl>
<h4>O essencial</h4>
<p>A infecção urinária febril no lactente pode ser a primeira manifestação de uma <strong>malformação do trato urinário</strong>: refluxo vesicoureteral, obstrução da junção ureteropélvica, válvula de uretra posterior, duplicidade. A investigação por imagem existe para achá-las antes que causem cicatriz renal, hipertensão e perda de função. Como a maioria das infecções acontece em rins normais, as diretrizes selecionam quem investigar por <strong>gatilhos de risco</strong>.</p>
<p>A <strong>ultrassonografia</strong> de rins e vias urinárias é feita após <strong>toda infecção febril</strong> no lactente. A <strong>uretrocistografia miccional</strong>, que procura refluxo, não é rotina após a primeira infecção: entra quando a ultrassonografia é anormal, na <strong>infecção recorrente</strong>, na infecção febril em <strong>menores de 6 meses</strong> ou com apresentação atípica (sepse, germe que não é <em>E. coli</em>, má resposta em 48 horas, massa abdominal, creatinina alta, jato urinário fraco). A <strong>cintilografia com DMSA</strong> avalia cicatriz meses depois nos casos com refluxo de alto grau ou recorrência. Uma <strong>dilatação no ultrassom antenatal</strong> é, por si só, motivo para investigar após o nascimento, mesmo sem infecção.</p>
<p>A soma de fatores define a urgência: dilatação renal fetal mais infecção febril aos 2 meses, com germe atípico, é a combinação que mais prevê anomalia, e pede ultrassonografia pós-natal e uretrocistografia sem esperar a segunda infecção. Enquanto a investigação corre, discute-se profilaxia antibiótica nos casos de refluxo de alto grau ou dilatação importante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte sempre pelo ultrassom morfológico da gestação: a dilatação renal fetal costuma ser esquecida na alta da maternidade e reaparece como pielonefrite aos 2 meses. Registre o germe da cultura; Proteus e Pseudomonas contam pontos para anomalia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ultrassonografia após toda infecção febril do lactente.</li>
<li>Uretrocistografia: ultrassom anormal, recorrência, menor de 6 meses, germe atípico, apresentação atípica.</li>
<li>Dilatação antenatal já indica investigação pós-natal.</li>
<li>DMSA para cicatriz nos casos de refluxo alto ou recorrência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados justificam a uretrocistografia após uma primeira infecção febril? <details><summary>Resposta</summary>Ultrassonografia anormal, idade abaixo de 6 meses, germe diferente de E. coli, sepse ou má resposta, e dilatação antenatal conhecida.</details></li>
<li>Para que serve a cintilografia com DMSA? <details><summary>Resposta</summary>Para mostrar cicatrizes renais, meses após a infecção, nos casos de refluxo de alto grau ou recorrência.</details></li>
</ol>
`,
"unesp2026#18": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome de hipertensão intracraniana na criança.</li>
<li>Usar os sinais cerebelares para localizar a lesão na fossa posterior.</li>
<li>Diferenciar o tumor de outras causas de cefaleia com vômitos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipertensão intracraniana</dt>
<dd>Cefaleia progressiva, pior ao acordar, com vômitos, às vezes em jato, e papiledema.</dd>
<dt>Fossa posterior</dt>
<dd>Compartimento do cerebelo e do tronco; sede da maioria dos tumores cerebrais da infância.</dd>
<dt>Ataxia apendicular</dt>
<dd>Dismetria e decomposição dos movimentos do membro, por lesão do hemisfério cerebelar do mesmo lado.</dd>
<dt>Hidrocefalia obstrutiva</dt>
<dd>Bloqueio do quarto ventrículo pelo tumor, que eleva a pressão intracraniana.</dd>
</dl>
<h4>O essencial</h4>
<p>Os tumores do sistema nervoso central são os tumores sólidos mais comuns da infância, e a maioria fica na <strong>fossa posterior</strong>: meduloblastoma, astrocitoma pilocítico e ependimoma. Por comprimirem o quarto ventrículo, apresentam-se com <strong>hipertensão intracraniana</strong>: cefaleia de semanas, progressiva, pior de manhã e ao deitar, <strong>vômitos</strong> muitas vezes sem náusea, que aliviam a dor, sonolência, queda do rendimento e, no lactente, macrocrania e fontanela tensa. O fundo de olho mostra papiledema; a paralisia do sexto nervo dá diplopia.</p>
<p>O <strong>exame neurológico localiza</strong>. Lesão do <strong>verme cerebelar</strong> (típica do meduloblastoma) causa ataxia de tronco e marcha de base alargada; lesão do <strong>hemisfério cerebelar</strong> (típica do astrocitoma) causa <strong>dismetria, decomposição do movimento e tremor de intenção do mesmo lado</strong>, com nistagmo. Ataxia lateralizada em criança com cefaleia e vômitos aponta para um tumor de fossa posterior até que a imagem diga o contrário.</p>
<p>A confirmação é a <strong>ressonância magnética</strong> com contraste (tomografia na urgência, para hidrocefalia e sangramento). A punção lombar é contraindicada antes da imagem, pelo risco de herniação. O tratamento envolve neurocirurgia, com derivação ou ventriculostomia se há hidrocefalia sintomática, e, conforme a histologia, radioterapia e quimioterapia. Os diferenciais da cefaleia com vômitos sem sinais localizatórios são enxaqueca, hipertensão intracraniana idiopática e gastroenterite, mas nenhum deles dá dismetria.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cefaleia que acorda a criança, vômitos matinais sem diarreia e piora do rendimento escolar são sinais de alarme mesmo sem déficit ao exame. Faça o fundo de olho, teste índex-nariz e marcha em toda cefaleia recente da criança: leva um minuto e muda a história.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cefaleia progressiva, matinal, com vômitos e papiledema: hipertensão intracraniana.</li>
<li>Fossa posterior é a sede da maioria dos tumores da infância.</li>
<li>Dismetria e decomposição do movimento lateralizadas: hemisfério cerebelar do mesmo lado.</li>
<li>Ressonância com contraste; sem punção lombar antes da imagem.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que diferencia lesão do verme da lesão do hemisfério cerebelar? <details><summary>Resposta</summary>Verme: ataxia de tronco e marcha; hemisfério: dismetria, decomposição e tremor de intenção do mesmo lado.</details></li>
<li>Por que a punção lombar é contraindicada antes da imagem? <details><summary>Resposta</summary>Pelo risco de herniação com a hipertensão intracraniana.</details></li>
</ol>
`,
"unesp2026#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios de Jones revisados para a febre reumática.</li>
<li>Reconhecer a cardite como a manifestação que deixa sequela.</li>
<li>Descrever o nódulo de Aschoff e a profilaxia secundária.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios de Jones</dt>
<dd>Dois maiores, ou um maior e dois menores, com evidência de infecção estreptocócica recente.</dd>
<dt>Nódulo de Aschoff</dt>
<dd>Granuloma miocárdico com necrose fibrinoide, células de Anitschkow e células gigantes: marca da cardite.</dd>
<dt>Coreia de Sydenham</dt>
<dd>Movimentos involuntários tardios, meses após a infecção; sozinha, fecha o diagnóstico.</dd>
<dt>Penicilina benzatina</dt>
<dd>Profilaxia secundária a cada 21 dias, por anos, para evitar novos surtos e a valvopatia.</dd>
</dl>
<h4>O essencial</h4>
<p>A febre reumática é uma reação autoimune tardia à faringite por estreptococo do grupo A, por mimetismo entre a proteína M e os tecidos do coração, das articulações, do cérebro e da pele, 2 a 4 semanas após a infecção. Os <strong>critérios de Jones</strong> (revisão de 2015, para populações de risco moderado a alto como a brasileira) exigem <strong>evidência de infecção recente</strong> (ASLO ou anti-DNase B elevados, cultura ou teste rápido positivos) e <strong>dois critérios maiores</strong> ou <strong>um maior e dois menores</strong>. Maiores: <strong>cardite</strong> (clínica ou só ecocardiográfica), <strong>artrite</strong> (poliartrite migratória de grandes articulações; em população de risco, monoartrite ou poliartralgia contam), <strong>coreia</strong>, <strong>eritema marginado</strong> e <strong>nódulos subcutâneos</strong>. Menores: febre, artralgia (se a artrite não foi usada), VHS ou PCR elevadas e <strong>intervalo PR prolongado</strong>.</p>
<p>A <strong>cardite</strong> é o que importa: pancardite com predomínio de valvulite, sopro de regurgitação mitral ou aórtica novo, taquicardia desproporcional, cardiomegalia, insuficiência cardíaca. Na histologia, o <strong>nódulo de Aschoff</strong> no miocárdio é patognomônico. A sequela é a valvopatia reumática, ainda a principal cardiopatia adquirida do jovem no Brasil.</p>
<p>Tratamento: <strong>penicilina benzatina</strong> para erradicar o estreptococo, ácido acetilsalicílico ou naproxeno para a artrite, corticoide para a cardite moderada a grave, repouso, e haloperidol ou valproato para a coreia. A <strong>profilaxia secundária</strong> com penicilina benzatina a cada 21 dias dura ao menos 5 anos ou até os 21 anos (sem cardite), até os 25 (cardite sem sequela) ou por toda a vida (valvopatia).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Artrite que muda de articulação em dias e responde de forma dramática ao anti-inflamatório é reumática até prova em contrário; peça ASLO, anti-DNase B, VHS, ECG e ecocardiograma antes de dar o anti-inflamatório, porque ele apaga a artrite e atrapalha o diagnóstico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Jones: infecção recente mais dois maiores ou um maior e dois menores.</li>
<li>Maiores: cardite, artrite, coreia, eritema marginado, nódulos; menores: febre, artralgia, VHS/PCR, PR longo.</li>
<li>Nódulo de Aschoff: granuloma miocárdico patognomônico da cardite.</li>
<li>Penicilina benzatina para erradicar e a cada 21 dias como profilaxia por anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Adolescente com poliartrite migratória, sopro novo, PR longo e ASLO alto: critérios preenchidos? <details><summary>Resposta</summary>Sim: dois maiores (artrite e cardite), mais um menor (PR longo), com evidência de infecção.</details></li>
<li>Por quanto tempo vai a profilaxia secundária em quem teve cardite sem sequela? <details><summary>Resposta</summary>Ao menos 10 anos ou até os 25 anos, o que for mais longo; com valvopatia, por toda a vida.</details></li>
</ol>
`,
"einstein2026#31": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir a síndrome torácica aguda e reconhecer sua gravidade.</li>
<li>Conduzir o tratamento inicial: oxigênio, antibióticos, analgesia, hidratação cautelosa.</li>
<li>Indicar a transfusão simples ou de troca.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome torácica aguda</dt>
<dd>Infiltrado pulmonar novo com febre, dor torácica, tosse ou hipoxemia, na doença falciforme.</dd>
<dt>Transfusão simples</dt>
<dd>Concentrado de hemácias para elevar a hemoglobina em 1 a 2 g/dL, até no máximo 10 a 11.</dd>
<dt>Exsanguineotransfusão parcial</dt>
<dd>Troca de sangue para reduzir a hemoglobina S abaixo de 30% sem elevar a viscosidade.</dd>
<dt>Espirometria de incentivo</dt>
<dd>Exercício respiratório que previne atelectasia e síndrome torácica na crise dolorosa.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome torácica aguda é a principal causa de morte na doença falciforme. Nasce de infecção (<em>Mycoplasma</em>, <em>Chlamydia</em>, vírus, pneumococo), embolia gordurosa a partir de infarto ósseo e hipoventilação por dor ou opioide; a hipóxia local falciza mais hemácias e o quadro se retroalimenta. Define-se por <strong>infiltrado novo</strong> na radiografia com <strong>febre, dor torácica, tosse ou hipoxemia</strong>. A gravidade é marcada por <strong>infiltrado multilobar</strong>, <strong>PaO2 abaixo de 60</strong> ou saturação caindo apesar do oxigênio, queda da hemoglobina, trombocitopenia e necessidade de suporte ventilatório.</p>
<p>O tratamento inicial é <strong>oxigênio</strong> para saturação acima de 94%, <strong>antibiótico</strong> com cefalosporina de terceira geração mais macrolídeo, <strong>analgesia</strong> eficaz que não deprima a respiração, <strong>hidratação</strong> sem excesso (o edema pulmonar piora tudo), espirometria de incentivo e broncodilatador se há sibilância. A criança é monitorada de perto porque a piora acontece em horas.</p>
<p>A <strong>transfusão</strong> é o tratamento que muda o curso: melhora a oxigenação ao diluir a hemoglobina S. A <strong>transfusão simples</strong> serve para os casos moderados com hemoglobina abaixo do basal; a <strong>exsanguineotransfusão parcial</strong> está indicada nos casos graves ou em piora (hipoxemia progressiva, multilobar, hemoglobina já alta), porque reduz a hemoglobina S sem elevar a viscosidade. Nunca se eleva a hemoglobina acima de 10 a 11 g/dL. A hidroxiureia reduz a recorrência no longo prazo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Toda crise dolorosa internada faz radiografia de tórax na admissão e espirometria de incentivo de hora em hora enquanto acordada: a síndrome torácica costuma aparecer 2 a 3 dias depois da dor, e prevenir é mais barato que trocar sangue.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Infiltrado novo com febre, dor torácica, tosse ou hipoxemia na doença falciforme.</li>
<li>Oxigênio, cefalosporina mais macrolídeo, analgesia, hidratação cautelosa, espirometria de incentivo.</li>
<li>Transfusão simples nos moderados; troca nos graves ou em piora.</li>
<li>Hemoglobina nunca acima de 10 a 11 g/dL.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais indicam síndrome torácica grave? <details><summary>Resposta</summary>Infiltrado multilobar, PaO2 abaixo de 60 ou hipoxemia progressiva, queda da hemoglobina, trombocitopenia, necessidade de ventilação.</details></li>
<li>Quando preferir a exsanguineotransfusão à transfusão simples? <details><summary>Resposta</summary>Nos casos graves ou em piora, ou quando a hemoglobina já está alta e a simples elevaria a viscosidade.</details></li>
</ol>
`,
"einstein2026#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir sibilância ocasional de sibilância recorrente que merece tratamento controlador.</li>
<li>Aplicar as recomendações do GINA para crianças de 5 anos ou menos.</li>
<li>Escolher o corticoide inalatório como controlador de primeira linha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sibilância recorrente</dt>
<dd>Três ou mais episódios de sibilância, em geral desencadeados por vírus, no lactente e no pré-escolar.</dd>
<dt>Índice preditivo de asma</dt>
<dd>Combinação de sibilância recorrente com atopia pessoal ou familiar que prevê asma persistente.</dd>
<dt>Tratamento controlador</dt>
<dd>Medicação diária que reduz crises e sintomas; na criança pequena, o corticoide inalatório.</dd>
<dt>Espaçador com máscara</dt>
<dd>Dispositivo que permite o uso do inalador dosimetrado no menor de 5 anos.</dd>
</dl>
<h4>O essencial</h4>
<p>Um terço das crianças sibila antes dos 3 anos, a maioria só com resfriados e sem asma depois. O problema clínico é decidir quem precisa de <strong>controlador</strong>. O GINA para <strong>5 anos ou menos</strong> indica iniciar tratamento diário quando o padrão de sintomas sugere asma e não está controlado: <strong>três ou mais episódios</strong> de sibilância no ano, um deles grave (hospitalização ou necessidade de corticoide oral), ou <strong>sintomas entre as crises</strong> (tosse noturna, sibilos aos esforços, uso frequente de broncodilatador), ou quando o diagnóstico é incerto mas os episódios são frequentes.</p>
<p>O controlador de primeira linha é o <strong>corticoide inalatório em dose baixa, diário</strong>, por espaçador com máscara, com <strong>salbutamol sob demanda</strong> para os sintomas. A resposta é avaliada em 2 a 3 meses; se boa, mantém-se por ao menos 3 meses e depois se tenta reduzir; se ausente, revisam-se técnica, adesão e diagnóstico antes de dobrar a dose ou associar antileucotrieno. O montelucaste é opção quando o corticoide não é possível, com menor eficácia. Broncodilatador de longa ação não se usa nessa idade, e corticoide oral fica só para as crises.</p>
<p>Os diferenciais da sibilância persistente sem resposta: bronquiolite obliterante, fibrose cística, aspiração de corpo estranho, refluxo com aspiração, malformações e cardiopatia. Sinais de alarme são sintomas desde o nascimento, baqueteamento, déficit de crescimento, sibilância fixa e infecções graves.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de chamar de asma de difícil controle, veja a criança usar o espaçador: máscara mal vedada, jato disparado antes de posicionar e respiração pela boca aberta explicam a maioria das falhas. Ensine, peça para repetir e anote a dose recebida de verdade.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Três ou mais episódios no ano, um grave, ou sintomas entre crises: iniciar controlador.</li>
<li>Primeira linha: corticoide inalatório em dose baixa, diário, com salbutamol sob demanda.</li>
<li>Reavaliar em 2 a 3 meses; checar técnica e adesão antes de subir a dose.</li>
<li>Montelucaste é segunda opção; sem broncodilatador de longa ação abaixo de 5 anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 12 meses com quatro episódios de sibilância, um internado, e tosse noturna entre eles: qual é a conduta? <details><summary>Resposta</summary>Iniciar corticoide inalatório diário em dose baixa, com salbutamol sob demanda, e reavaliar em 2 a 3 meses.</details></li>
<li>O que verificar antes de aumentar a dose do controlador? <details><summary>Resposta</summary>Técnica inalatória, adesão, exposição ambiental e o próprio diagnóstico.</details></li>
</ol>
`,
"einstein2026#34": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer as recomendações atuais de introdução alimentar para prevenir alergia.</li>
<li>Explicar por que a introdução precoce dos alergênicos protege.</li>
<li>Saber que o risco familiar não muda a orientação nem justifica testes prévios.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Janela de oportunidade</dt>
<dd>Período entre 4 e 6 meses em que a exposição oral aos alergênicos induz tolerância.</dd>
<dt>Tolerância oral</dt>
<dd>Resposta imune que aprende a não reagir a proteínas ingeridas com regularidade.</dd>
<dt>Alergênicos principais</dt>
<dd>Leite, ovo, amendoim, castanhas, trigo, soja, peixe e frutos do mar.</dd>
<dt>Sensibilização cutânea</dt>
<dd>Contato do alergênico com pele inflamada, que favorece alergia quando falta a exposição oral.</dd>
</dl>
<h4>O essencial</h4>
<p>Durante décadas se recomendou adiar ovo, amendoim e peixe para o segundo ano nas crianças de risco. Os estudos do início dos anos 2010 mostraram o contrário: a exposição oral <strong>precoce e regular</strong> aos alergênicos, dentro da janela dos 4 a 6 meses, <strong>reduz</strong> a alergia, sobretudo ao amendoim e ao ovo, enquanto o adiamento e o contato pela pele inflamada (dermatite atópica) a favorecem. A hipótese da dupla exposição resume: alergênico pela boca induz tolerância; pela pele, sensibilização.</p>
<p>As diretrizes atuais (SBP, ASBAI, EAACI) recomendam <strong>introduzir todos os alimentos a partir dos 6 meses</strong>, mantendo o aleitamento, sem adiar os alergênicos e <strong>sem ordem especial</strong>: ovo bem cozido, amendoim em pasta diluída (nunca inteiro, pelo risco de engasgo), peixe, trigo e os demais, em pequenas quantidades e depois com regularidade, ao menos uma ou duas vezes por semana, para sustentar a tolerância. O <strong>histórico familiar</strong>, inclusive irmão com alergia grave, <strong>não muda a orientação</strong> e não justifica testes de IgE antes da introdução: um teste positivo em quem nunca comeu o alimento leva a restrições desnecessárias e, paradoxalmente, a mais alergia. Só a criança com dermatite atópica grave ou alergia já diagnosticada a outro alimento pode ser avaliada pelo alergista antes.</p>
<p>A introdução respeita a cultura alimentar e o valor nutricional: alimentos in natura, amassados, com ferro e zinco (carnes, feijão), sem açúcar e sem ultraprocessados até os 2 anos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a família pergunta se pode dar ovo ao bebê de 6 meses cujo irmão tem alergia a castanha, a resposta é sim, em casa, bem cozido, e de novo na semana seguinte. Adiar por medo é a orientação que mais produz alergia hoje.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Exposição oral precoce e regular induz tolerância; adiar favorece alergia.</li>
<li>Introduzir todos os alimentos a partir dos 6 meses, sem ordem especial, com aleitamento.</li>
<li>Risco familiar não muda a orientação nem pede testes prévios.</li>
<li>Amendoim em pasta diluída; alimentos in natura, com ferro, sem açúcar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que não pedir IgE específica antes de introduzir alimentos em criança de risco familiar? <details><summary>Resposta</summary>Um resultado positivo em quem nunca comeu leva a restrições desnecessárias e favorece a alergia; a orientação é introduzir.</details></li>
<li>Qual é a janela de oportunidade para a tolerância? <details><summary>Resposta</summary>Entre 4 e 6 meses, com introdução a partir dos 6 meses no lactente amamentado, e manutenção regular.</details></li>
</ol>
`,
"einstein2026#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a hepatite A pelo quadro clínico e pelo contexto epidemiológico.</li>
<li>Saber que o tratamento é suporte e que a evolução é benigna na criança.</li>
<li>Conduzir a vigilância: notificação, contatos e vacina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Transmissão fecal-oral</dt>
<dd>Água, alimentos e mãos contaminados; surtos em escolas e creches.</dd>
<dt>Anti-HAV IgM</dt>
<dd>Marcador da infecção aguda, positivo desde o início dos sintomas por 3 a 6 meses.</dd>
<dt>Colúria e acolia</dt>
<dd>Urina escura e fezes claras da fase ictérica, por colestase intra-hepática.</dd>
<dt>Hepatite fulminante</dt>
<dd>Insuficiência hepática aguda com coagulopatia e encefalopatia; rara na hepatite A.</dd>
</dl>
<h4>O essencial</h4>
<p>A hepatite A é uma infecção viral aguda, autolimitada, transmitida por via <strong>fecal-oral</strong>, com incubação de 15 a 50 dias. Na criança pequena costuma ser assintomática; no escolar segue o curso clássico: fase <strong>prodrômica</strong> com febre baixa, náuseas, vômitos, anorexia, dor abdominal e prostração por dias, e fase <strong>ictérica</strong> com icterícia, <strong>colúria e acolia</strong>, hepatomegalia dolorosa, quando os sintomas gerais já melhoram. O laboratório mostra transaminases muito elevadas (centenas a milhares), bilirrubina direta aumentada e, no diagnóstico, <strong>anti-HAV IgM positivo</strong>. O contexto de <strong>surto na escola</strong> ou em contatos praticamente fecha a etiologia.</p>
<p>Não há antiviral: o tratamento é <strong>suporte</strong>, com hidratação, alimentação leve conforme a aceitação, repouso relativo e observação. Evitam-se paracetamol em excesso e outros hepatotóxicos; não há dieta especial nem restrição de gordura obrigatória. A criança pode ser tratada em casa, e a recuperação é completa em semanas a poucos meses, sem cronificação. Os sinais que exigem internação são vômitos incoercíveis, desidratação, sangramento, sonolência ou confusão e alargamento do tempo de protrombina: a <strong>hepatite fulminante</strong>, rara mas grave.</p>
<p>A doença é de <strong>notificação compulsória</strong>. A criança fica afastada da escola por 7 dias após o início da icterícia. Os contatos suscetíveis recebem <strong>vacina</strong> em até 2 semanas (ou imunoglobulina nos menores de 1 ano e imunodeprimidos). A vacina do PNI é dada aos 15 meses, e a melhoria do saneamento é a prevenção definitiva.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Icterícia com colúria em escolar de uma escola com outros casos não precisa de ultrassonografia nem de antibiótico: precisa de anti-HAV IgM, tempo de protrombina, orientação de suporte e notificação, com retorno marcado e sinais de alarme explicados à família.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Fecal-oral, incubação de 15 a 50 dias; surtos escolares.</li>
<li>Pródromo digestivo, depois icterícia com colúria e acolia; anti-HAV IgM.</li>
<li>Suporte: hidratação, alimentação leve, observação; sem antiviral.</li>
<li>Notificar, afastar 7 dias, vacinar contatos em até 2 semanas; tempo de protrombina vigia a fulminante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual marcador confirma a hepatite A aguda? <details><summary>Resposta</summary>O anti-HAV IgM, positivo desde o início dos sintomas.</details></li>
<li>Que exame vigia a evolução para hepatite fulminante? <details><summary>Resposta</summary>O tempo de protrombina, junto do nível de consciência.</details></li>
</ol>
`,
"einstein2026#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a doença de Kawasaki pelos critérios clínicos.</li>
<li>Reconhecer os fatores de alto risco para aneurisma coronariano.</li>
<li>Indicar a intensificação do tratamento inicial nos casos de alto risco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença de Kawasaki</dt>
<dd>Vasculite de médios vasos da infância; febre de 5 dias ou mais com quatro de cinco critérios.</dd>
<dt>Aneurisma coronariano</dt>
<dd>Dilatação da coronária, medida em escore z; a complicação que define o prognóstico.</dd>
<dt>Imunoglobulina intravenosa</dt>
<dd>2 g/kg em dose única, até o 10º dia de febre, que reduz os aneurismas de 25% para menos de 5%.</dd>
<dt>Kawasaki incompleta</dt>
<dd>Febre com menos de quatro critérios, mais comum no lactente; diagnosticada com laboratório e ecocardiograma.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença de Kawasaki é diagnosticada por <strong>febre de 5 dias ou mais</strong> e quatro de cinco critérios: <strong>conjuntivite bilateral não purulenta</strong>, alterações de <strong>lábios e boca</strong> (língua em framboesa, lábios fissurados), <strong>exantema polimorfo</strong>, alterações de <strong>extremidades</strong> (edema e eritema de mãos e pés, depois descamação) e <strong>adenopatia cervical</strong> de 1,5 cm ou mais. O laboratório apoia: PCR e VHS altas, leucocitose, anemia, plaquetas que sobem na segunda semana, albumina baixa, transaminases elevadas, piúria estéril. No <strong>lactente menor de 6 meses</strong>, a forma incompleta é frequente e o risco coronariano é maior.</p>
<p>O tratamento padrão é <strong>imunoglobulina intravenosa 2 g/kg</strong> em infusão única, com <strong>ácido acetilsalicílico</strong> em dose anti-inflamatória até a defervescência e depois em dose antiagregante por 6 a 8 semanas. O ecocardiograma é feito ao diagnóstico, em 1 a 2 semanas e em 4 a 6 semanas.</p>
<p>A revisão da AHA de 2024 recomenda <strong>intensificar o tratamento inicial</strong> em quem tem <strong>alto risco</strong> de aneurisma: <strong>idade abaixo de 6 meses</strong>, <strong>coronárias já alteradas</strong> ao diagnóstico (escore z de 2,5 ou mais), choque, síndrome de ativação macrofágica e marcadores muito elevados. Nesses casos, à imunoglobulina se associa <strong>corticoide</strong> (metilprednisolona em pulso ou prednisolona por semanas) ou um <strong>biológico</strong> (infliximabe), porque a imunoglobulina isolada falha mais. A resistência à imunoglobulina (febre persistente 36 horas após o fim da infusão) recebe segunda dose, corticoide ou infliximabe.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lactente de poucos meses com febre prolongada, irritabilidade e PCR muito alta, sem foco, merece ecocardiograma mesmo sem os critérios completos. Nele, aneurisma ao diagnóstico ou idade abaixo de 6 meses transforma o tratamento em imunoglobulina mais corticoide desde o primeiro dia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre de 5 dias ou mais e quatro de cinco critérios; incompleta no lactente.</li>
<li>Imunoglobulina 2 g/kg até o 10º dia e ácido acetilsalicílico.</li>
<li>Alto risco: menor de 6 meses, coronária alterada, choque, marcadores muito altos.</li>
<li>Alto risco: imunoglobulina mais corticoide ou biológico desde o início.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que fatores definem alto risco de aneurisma na Kawasaki? <details><summary>Resposta</summary>Idade abaixo de 6 meses, coronárias já alteradas ao diagnóstico, choque, ativação macrofágica e marcadores inflamatórios muito elevados.</details></li>
<li>O que muda no tratamento inicial do caso de alto risco? <details><summary>Resposta</summary>Associa-se corticoide ou infliximabe à imunoglobulina e ao ácido acetilsalicílico desde o início.</details></li>
</ol>
`,
"einstein2026#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome de Turner na menina com baixa estatura.</li>
<li>Listar as comorbidades cardíacas, gonadais, renais e endócrinas.</li>
<li>Conhecer o seguimento e o tratamento com hormônio de crescimento e estrogênio.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome de Turner</dt>
<dd>Monossomia do X (45,X) ou mosaico, em 1 a cada 2.500 meninas.</dd>
<dt>Disgenesia gonadal</dt>
<dd>Ovários em fita, com falência ovariana, ausência de puberdade e infertilidade.</dd>
<dt>Valva aórtica bicúspide</dt>
<dd>Cardiopatia mais comum da síndrome; também coarctação da aorta e dilatação da aorta.</dd>
<dt>Cariótipo</dt>
<dd>Exame que confirma o diagnóstico; indicado em toda menina com baixa estatura sem explicação.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome de Turner deve ser pensada em <strong>toda menina com baixa estatura</strong> sem causa evidente, com ou sem o fenótipo clássico: pescoço alado, implantação baixa dos cabelos e das orelhas, tórax largo com mamilos afastados, cúbito valgo, quarto metacarpo curto, linfedema de mãos e pés ao nascer, nevos múltiplos. A velocidade de crescimento é baixa desde a infância, e a estatura final sem tratamento fica em torno de 143 cm. O diagnóstico é o <strong>cariótipo</strong>.</p>
<p>As comorbidades formam um conjunto previsível. <strong>Coração</strong>: valva aórtica bicúspide, coarctação da aorta e dilatação da raiz aórtica, com risco de dissecção; ecocardiograma ou ressonância ao diagnóstico e periódicos. <strong>Gônadas</strong>: <strong>disgenesia com falência ovariana</strong>, que causa ausência de puberdade, amenorreia primária e infertilidade na maioria; FSH alto e hormônio antimülleriano baixo. <strong>Rins</strong>: rim em ferradura e anomalias do sistema coletor. <strong>Endócrino</strong>: hipotireoidismo autoimune, diabetes, doença celíaca. <strong>Ouvido</strong>: otites de repetição e perda auditiva. Hipertensão, escoliose e dificuldades visuoespaciais completam o quadro; a inteligência é em geral normal.</p>
<p>O tratamento da estatura é o <strong>hormônio de crescimento</strong>, iniciado cedo, que acrescenta vários centímetros à altura final. A <strong>indução puberal</strong> com estrogênio em doses crescentes começa por volta dos 11 a 12 anos, seguida de progesterona, e a reposição se mantém até a idade da menopausa, para os ossos, o coração e o útero. O seguimento inclui TSH, glicemia, celíaca, pressão arterial, audição, imagem da aorta e avaliação do risco cardiovascular na gestação por ovodoação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Menina com estatura abaixo do percentil 3 e velocidade de crescimento de 3 cm por ano faz cariótipo na primeira consulta, antes de qualquer outra investigação. Se for Turner, o ecocardiograma vem no mesmo pedido: a coarctação silenciosa e a valva bicúspide não esperam.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cariótipo em toda menina com baixa estatura sem explicação.</li>
<li>Coração: valva aórtica bicúspide, coarctação, dilatação da aorta.</li>
<li>Gônadas: disgenesia com falência ovariana; rins, tireoide, celíaca, audição.</li>
<li>Hormônio de crescimento cedo; estrogênio a partir dos 11 a 12 anos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as duas comorbidades mais características do Turner? <details><summary>Resposta</summary>A valva aórtica bicúspide (com coarctação e dilatação da aorta) e a falência ovariana por disgenesia gonadal.</details></li>
<li>Como se trata a baixa estatura? <details><summary>Resposta</summary>Com hormônio de crescimento iniciado precocemente, seguido de indução puberal com estrogênio.</details></li>
</ol>
`,
"einstein2026#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar criptorquidia, testículo retrátil e testículo ectópico.</li>
<li>Explicar as consequências: infertilidade, malignidade, torção, hérnia.</li>
<li>Indicar a orquidopexia na janela entre 6 e 12 meses.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Criptorquidia</dt>
<dd>Testículo que não completou a descida ao escroto; palpável no canal inguinal ou não palpável.</dd>
<dt>Testículo retrátil</dt>
<dd>Testículo que sobe pelo reflexo cremastérico, mas pode ser trazido ao escroto e ali fica; variante normal.</dd>
<dt>Orquidopexia</dt>
<dd>Fixação cirúrgica do testículo no escroto, indicada entre 6 e 12 meses (até 18).</dd>
<dt>Descida espontânea</dt>
<dd>Ocorre em boa parte dos casos até os 6 meses; depois disso não acontece mais.</dd>
</dl>
<h4>O essencial</h4>
<p>O testículo desce ao escroto no último trimestre; ao nascer, 3% dos meninos a termo (e até 30% dos prematuros) têm <strong>criptorquidia</strong>, e metade desce sozinha até os <strong>6 meses</strong>. Depois disso não desce mais, e a espera só acumula dano. O exame é feito com a criança relaxada, em posição supina ou de cócoras, com as mãos aquecidas: o <strong>testículo retrátil</strong> pode ser trazido ao escroto e ali permanece após soltar; o criptorquídico não chega ou volta de imediato. A <strong>hipotrofia do hemiescroto</strong> sugere que o testículo nunca esteve lá.</p>
<p>As consequências dependem da <strong>posição</strong> e do <strong>tempo</strong>: quanto mais alto o testículo e mais tarde a correção, maior o dano. O calor abdominal lesa o epitélio germinativo a partir do primeiro ano, com <strong>infertilidade</strong> (sobretudo se bilateral); o risco de <strong>câncer</strong> de testículo é maior, e a orquidopexia antes da puberdade o reduz e permite o autoexame; somam-se <strong>torção</strong>, <strong>hérnia inguinal</strong> associada e trauma. Por isso a <strong>orquidopexia</strong> é indicada <strong>entre 6 e 12 meses</strong>, e no máximo até 18 meses. Ultrassonografia não é necessária para o testículo palpável; o não palpável vai para laparoscopia, que localiza e trata. Tratamento hormonal com gonadotrofina não é recomendado.</p>
<p>Bilateral não palpável no recém-nascido, sobretudo com hipospádia, exige investigação de diferença do desenvolvimento sexual e de hiperplasia adrenal congênita antes de qualquer rótulo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Menino de 18 meses com testículo não palpável e bolsa hipotrófica já passou da janela: encaminhe ao cirurgião agora, sem ultrassonografia e sem "vamos esperar". Explique à família que a cirurgia protege a fertilidade e facilita a vigilância do câncer, e que o risco depende de onde o testículo está.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Descida espontânea só até 6 meses; retrátil é variante normal.</li>
<li>Infertilidade e câncer: risco maior quanto mais alto e mais tardio; torção e hérnia associadas.</li>
<li>Orquidopexia entre 6 e 12 meses, até 18; palpável sem ultrassom; não palpável: laparoscopia.</li>
<li>Bilateral não palpável no recém-nascido: investigar diferença do desenvolvimento sexual.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a janela ideal da orquidopexia e por quê? <details><summary>Resposta</summary>Entre 6 e 12 meses: a descida espontânea não ocorre depois dos 6 meses e o dano germinativo começa no primeiro ano.</details></li>
<li>O que diferencia o testículo retrátil do criptorquídico? <details><summary>Resposta</summary>O retrátil pode ser trazido ao escroto e permanece ali após soltar; o criptorquídico não chega ou volta de imediato.</details></li>
</ol>
`,
"einstein2026#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir tosse eficaz de tosse ineficaz na obstrução de via aérea por corpo estranho.</li>
<li>Saber quando não intervir e quando aplicar as manobras de desobstrução.</li>
<li>Aplicar as manobras corretas no lactente e na criança maior.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tosse eficaz</dt>
<dd>Tosse forte e sonora, com choro ou fala, consciência e respiração entre os acessos.</dd>
<dt>Tosse ineficaz</dt>
<dd>Tosse fraca ou silenciosa, cianose, incapacidade de vocalizar, rebaixamento: obstrução grave.</dd>
<dt>Golpes nas costas e compressões torácicas</dt>
<dd>Manobras do lactente consciente com tosse ineficaz: 5 e 5, alternadas.</dd>
<dt>Manobra de Heimlich</dt>
<dd>Compressões abdominais para a criança maior de 1 ano consciente com tosse ineficaz.</dd>
</dl>
<h4>O essencial</h4>
<p>O engasgo do lactente durante a mamada é comum e quase sempre <strong>obstrução parcial</strong>: o bebê tosse, chora, fica momentaneamente cianótico ao redor da boca e recupera. A primeira decisão do socorrista é classificar a tosse. <strong>Tosse eficaz</strong> (forte, sonora, com choro, bebê consciente e respirando entre os acessos) significa que a própria tosse é o melhor mecanismo de desobstrução: a conduta é <strong>não intervir</strong> com manobras, apenas posicionar o bebê ereto ou levemente inclinado, remover o excesso de leite visível na boca, estimular e observar até a resolução ou a piora. Golpes e compressões numa obstrução parcial podem deslocar o objeto ou o leite para uma obstrução total.</p>
<p><strong>Tosse ineficaz</strong> (silenciosa, cianose progressiva, incapacidade de chorar, rebaixamento) é obstrução grave e exige manobras imediatas. No <strong>lactente consciente</strong>: 5 <strong>golpes nas costas</strong> com o bebê em decúbito ventral sobre o antebraço, cabeça mais baixa que o tronco, alternados com 5 <strong>compressões torácicas</strong> em decúbito dorsal, com dois dedos no esterno, repetidos até desobstruir ou até o bebê ficar inconsciente. Compressões abdominais são contraindicadas no lactente pelo risco de lesão hepática. Na <strong>criança maior de 1 ano</strong> consciente: golpes nas costas alternados com a manobra de Heimlich.</p>
<p>Se a vítima fica <strong>inconsciente</strong>, chama-se ajuda e inicia-se a reanimação cardiopulmonar com compressões, olhando a boca antes de cada ventilação para remover um objeto visível, sem varredura às cegas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ensine aos pais o critério, não só a manobra: bebê que tosse com força e chora não precisa de tapa nas costas, precisa de calma e colo ereto; bebê que fica mudo e roxo precisa dos 5 golpes e das 5 compressões na hora, com alguém chamando o socorro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tosse eficaz: não intervir; posicionar, remover o leite visível, estimular, observar.</li>
<li>Tosse ineficaz no lactente: 5 golpes nas costas e 5 compressões torácicas, alternados.</li>
<li>Sem compressões abdominais no lactente; Heimlich só acima de 1 ano.</li>
<li>Inconsciente: reanimação cardiopulmonar, olhar a boca antes de ventilar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Bebê de 1 mês engasga mamando, tosse com força e chora: qual é a conduta? <details><summary>Resposta</summary>Não fazer manobras: levantá-lo, remover o excesso de leite visível, estimular e observar.</details></li>
<li>Quando começam os golpes nas costas e as compressões torácicas? <details><summary>Resposta</summary>Quando a tosse se torna ineficaz: silenciosa, com cianose progressiva e sem vocalização.</details></li>
</ol>
`,
"einstein2025#32": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a glomerulonefrite pós-estreptocócica pela síndrome nefrítica após infecção.</li>
<li>Escolher o marcador sorológico conforme o foco: faringe ou pele.</li>
<li>Tratar a hipervolemia com restrição hidrossalina e diurético de alça.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome nefrítica</dt>
<dd>Hematúria, edema, hipertensão e oligúria, com proteinúria leve a moderada.</dd>
<dt>Anti-DNase B</dt>
<dd>Anticorpo que sobe após infecção estreptocócica de pele; o ASLO responde mal ao impetigo.</dd>
<dt>Complemento C3 baixo</dt>
<dd>Consumo do complemento na fase aguda, que normaliza em 6 a 8 semanas.</dd>
<dt>Período de latência</dt>
<dd>1 a 2 semanas após faringite, 3 a 6 semanas após impetigo.</dd>
</dl>
<h4>O essencial</h4>
<p>A glomerulonefrite pós-estreptocócica é a causa mais comum de síndrome nefrítica na criança: imunocomplexos com antígenos do estreptococo se depositam no glomérulo e ativam o complemento, <strong>1 a 2 semanas após uma faringite</strong> ou <strong>3 a 6 semanas após um impetigo</strong>. O quadro é <strong>edema</strong> (face pela manhã, membros inferiores), <strong>hematúria</strong> macroscópica cor de coca-cola, <strong>hipertensão</strong> e <strong>oligúria</strong>, entre 5 e 12 anos. O sedimento mostra hemácias dismórficas e cilindros hemáticos; a proteinúria é leve a moderada; a creatinina pode subir um pouco; o <strong>C3 está baixo</strong> e normaliza em 6 a 8 semanas.</p>
<p>A prova da infecção recente é sorológica, e o marcador depende do foco. Após <strong>faringite</strong>, o <strong>ASLO</strong> sobe; após <strong>impetigo</strong>, o ASLO costuma ficar normal (os lipídios da pele inibem a estreptolisina O) e quem sobe é o <strong>anti-DNase B</strong>. Cultura da pele ou da garganta raramente ainda é positiva.</p>
<p>O tratamento é o da <strong>hipervolemia</strong>: <strong>restrição de água e sal</strong> e <strong>furosemida</strong>, que resolvem edema e hipertensão na maioria; anti-hipertensivo (bloqueador de canal de cálcio) se a pressão persiste; diálise nos raros casos de insuficiência renal grave ou hipercalemia. Penicilina erradica o estreptococo residual, mas não altera o curso renal. Corticoide não tem indicação. O prognóstico na criança é excelente: diurese e pressão normalizam em 1 a 2 semanas, a hematúria microscópica pode durar até 1 a 2 anos. C3 que não normaliza em 8 semanas ou proteinúria nefrótica pedem biópsia para afastar nefrite lúpica, glomerulonefrite membranoproliferativa e outras.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Edema e urina escura três semanas depois de um impetigo curado: peça anti-DNase B, C3, creatinina e urina, meça a pressão e pese a criança todo dia. Água e sal restritos e furosemida fazem mais do que qualquer outra prescrição nos primeiros dias.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Síndrome nefrítica 1 a 2 semanas após faringite ou 3 a 6 após impetigo; C3 baixo.</li>
<li>Faringite: ASLO; impetigo: anti-DNase B.</li>
<li>Restrição hidrossalina e furosemida; anti-hipertensivo se preciso; sem corticoide.</li>
<li>C3 normaliza em 6 a 8 semanas; se não, biópsia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o ASLO pode ser normal após impetigo? <details><summary>Resposta</summary>Os lipídios da pele inibem a estreptolisina O; o marcador confiável é o anti-DNase B.</details></li>
<li>Qual é o tratamento de base da glomerulonefrite pós-estreptocócica? <details><summary>Resposta</summary>Restrição de água e sal com furosemida, para a hipervolemia; anti-hipertensivo se a pressão persiste.</details></li>
</ol>
`,
"einstein2025#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a desidratação da diarreia aguda nos planos A, B e C.</li>
<li>Conduzir a reidratação oral na unidade de saúde.</li>
<li>Saber quando a via venosa passa a ser necessária.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Plano A</dt>
<dd>Sem desidratação: soro de reidratação oral em casa após cada evacuação, alimentação mantida, zinco.</dd>
<dt>Plano B</dt>
<dd>Desidratação sem choque: 50 a 100 mL/kg de soro oral em 4 horas na unidade, sob observação.</dd>
<dt>Plano C</dt>
<dd>Desidratação grave ou choque: expansão venosa rápida e depois reidratação.</dd>
<dt>Soro de reidratação oral</dt>
<dd>Solução de osmolaridade reduzida da OMS, que aproveita o cotransporte sódio-glicose intacto na diarreia.</dd>
</dl>
<h4>O essencial</h4>
<p>A diarreia aguda mata por desidratação, e o manejo se organiza em três planos a partir do exame: estado geral, olhos, sede, lágrimas, mucosas, turgor e pulso. <strong>Sem sinais</strong> de desidratação, <strong>plano A</strong>: manter alimentação e aleitamento, oferecer soro oral após cada evacuação, zinco por 10 a 14 dias e orientar os sinais de alarme. Com <strong>dois ou mais sinais</strong> (irritada ou inquieta, olhos fundos, sede com avidez, mucosas secas, turgor lento), é <strong>desidratação sem gravidade</strong>: <strong>plano B</strong>, com <strong>terapia de reidratação oral</strong> na unidade, 50 a 100 mL/kg de soro em 4 horas, em pequenos volumes frequentes, com colher, copo ou seringa, e reavaliação a cada hora. Com <strong>letargia, incapacidade de beber, pulso fraco, enchimento capilar lento</strong> ou choque, é <strong>desidratação grave</strong>: <strong>plano C</strong>, com expansão venosa de soro fisiológico ou Ringer lactato em bolus repetidos até a perfusão voltar, e depois reidratação oral ou venosa.</p>
<p>A reidratação oral funciona porque o cotransporte de sódio e glicose no enterócito permanece intacto na maioria das diarreias. Vômitos pontuais não contraindicam: ofereça volumes menores e mais frequentes; a <strong>ondansetrona</strong> em dose única reduz os vômitos e as falhas. A sonda nasogástrica é opção quando a criança não aceita a via oral e a veia é difícil. A via venosa no plano B só se justifica na falha da via oral (vômitos incoercíveis, distensão com íleo, perda maior que o ganho) ou na piora para o plano C.</p>
<p>Antibiótico só na disenteria com toxemia, na suspeita de cólera e no imunossuprimido; antidiarreicos são contraindicados. A alimentação é mantida ou retomada logo, com o aleitamento sempre.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O lactente que está irritado, com olhos fundos e mucosas secas, mas bebe com avidez, é um caso de plano B: uma colher de soro a cada minuto na sala de reidratação, com a mãe, por 4 horas. Puncionar uma veia aqui é tratar a ansiedade da equipe, não a criança.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Plano A: sem desidratação, soro em casa, alimentação, zinco.</li>
<li>Plano B: dois ou mais sinais, sem choque; soro oral 50 a 100 mL/kg em 4 horas na unidade.</li>
<li>Plano C: letargia, não bebe, pulso fraco, choque; expansão venosa.</li>
<li>Vômitos: volumes pequenos, ondansetrona; veia só na falha da via oral.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais definem a desidratação grave (plano C)? <details><summary>Resposta</summary>Letargia ou inconsciência, incapacidade de beber, pulso fraco ou ausente e enchimento capilar lento.</details></li>
<li>Como se faz o plano B? <details><summary>Resposta</summary>Soro de reidratação oral, 50 a 100 mL/kg em 4 horas, em pequenos volumes frequentes, na unidade, com reavaliação horária.</details></li>
</ol>
`,
"einstein2025#36": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a anafilaxia alimentar no lactente e tratá-la com adrenalina.</li>
<li>Orientar a alta: exclusão do alimento, aleitamento mantido, vacinas.</li>
<li>Saber o que não muda na dieta da mãe e no calendário vacinal.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Anafilaxia</dt>
<dd>Reação sistêmica aguda com pele e mucosas mais outro sistema (respiratório, digestivo, cardiovascular), minutos após a exposição.</dd>
<dt>Adrenalina intramuscular</dt>
<dd>0,01 mg/kg (máximo 0,3 mg na criança) na face lateral da coxa; primeira e única droga que salva.</dd>
<dt>IgE específica</dt>
<dd>Anticorpo contra o alimento; confirma a sensibilização em quem já reagiu.</dd>
<dt>Ovo assado</dt>
<dd>Ovo em preparações muito cozidas, tolerado por parte dos alérgicos e usado para acelerar a tolerância.</dd>
</dl>
<h4>O essencial</h4>
<p>Vômitos, urticária e angioedema minutos após o primeiro contato com um alimento são <strong>anafilaxia</strong>, ainda que sem sintomas respiratórios; a IgE já existia por sensibilização prévia (pela pele ou pelo leite materno). O tratamento é <strong>adrenalina intramuscular</strong> na coxa, repetida em 5 a 15 minutos se preciso, com decúbito, oxigênio e volume; anti-histamínico e corticoide são adjuvantes que não substituem a adrenalina. Observação por 4 a 6 horas pela reação bifásica.</p>
<p>Na alta, o que <strong>muda</strong>: o alimento causador (e seus derivados) sai da dieta do bebê, com plano de ação escrito e, quando disponível, adrenalina autoinjetável; a família aprende a ler rótulos; o alergista confirma com IgE específica ou teste cutâneo e programa a provocação futura, porque a alergia a ovo e leite tende à tolerância até a idade escolar, muitas vezes acelerada pelo consumo de formas assadas. Os demais alimentos seguem sendo introduzidos normalmente.</p>
<p>O que <strong>não muda</strong>: a <strong>mãe não precisa excluir o ovo</strong> da própria dieta, porque a quantidade que passa ao leite não causa anafilaxia e a restrição materna não é recomendada nas alergias IgE-mediadas sem sintomas com o aleitamento; o <strong>aleitamento se mantém</strong>. As <strong>vacinas</strong> também: a tríplice viral e a febre amarela cultivadas em ovo são seguras para o alérgico a ovo (a tríplice viral sem restrição; a febre amarela em ambiente com supervisão nos casos de anafilaxia), e a influenza também é liberada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Depois da adrenalina, a alta se escreve em três linhas: bebê sem ovo e derivados, mãe comendo de tudo e amamentando, vacinas em dia (febre amarela com supervisão). Marque o alergista e ensine a família a reconhecer e tratar a próxima reação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Anafilaxia: pele mais outro sistema, minutos após o alimento; adrenalina IM na coxa.</li>
<li>Bebê: excluir o alimento, plano de ação, alergista, provocação futura.</li>
<li>Mãe: dieta livre, aleitamento mantido.</li>
<li>Vacinas de ovo liberadas; febre amarela com supervisão após anafilaxia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>A mãe que amamenta precisa parar de comer ovo após a anafilaxia do bebê? <details><summary>Resposta</summary>Não; a restrição materna não é indicada nas alergias IgE-mediadas sem sintomas com o aleitamento, que se mantém.</details></li>
<li>Qual é a primeira medida na anafilaxia? <details><summary>Resposta</summary>Adrenalina intramuscular 0,01 mg/kg na face lateral da coxa, repetida em 5 a 15 minutos se necessário.</details></li>
</ol>
`,
"einstein2025#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Identificar o primeiro sinal da puberdade masculina e a sequência dos eventos.</li>
<li>Estadiar genitais e pelos pubianos pelos critérios de Tanner.</li>
<li>Conhecer os limites de idade do normal, do precoce e do atrasado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Volume testicular de 4 mL</dt>
<dd>Primeiro sinal da puberdade no menino, medido com o orquidômetro de Prader; ocorre entre 9 e 14 anos.</dd>
<dt>Estádios de Tanner</dt>
<dd>Escala de 1 (pré-púbere) a 5 (adulto) para genitais (G) e pelos pubianos (P) no menino.</dd>
<dt>Estirão de crescimento</dt>
<dd>Aceleração do crescimento, que no menino acontece tarde, em G4, por volta dos 14 anos.</dd>
<dt>Puberdade atrasada</dt>
<dd>Ausência de aumento testicular aos 14 anos no menino.</dd>
</dl>
<h4>O essencial</h4>
<p>A puberdade masculina começa com o <strong>aumento do volume testicular a 4 mL</strong>, entre <strong>9 e 14 anos</strong>, em média aos 11 a 12. Segue-se, em 6 a 12 meses, o crescimento do pênis e o aparecimento dos pelos pubianos; depois vêm pelos axilares, mudança da voz, acne, pelos faciais, e o <strong>estirão</strong> tardio, em G4, por volta dos 14 anos, com ganho de 8 a 12 cm no ano de pico. A sequência inteira dura 3 a 4 anos, e a ginecomastia puberal transitória é comum em G3.</p>
<p><strong>Tanner genital</strong>: G1, testículos abaixo de 4 mL, pênis infantil; <strong>G2</strong>, testículos de 4 a 6 mL, escroto que se afina e escurece, pênis ainda infantil; G3, testículos de 8 a 12 mL, pênis que cresce em comprimento; G4, testículos de 15 a 20 mL, pênis que cresce em diâmetro, glande desenvolvida, escroto pigmentado; G5, adulto, testículos de 20 a 25 mL. <strong>Pelos pubianos</strong>: P1, ausentes; P2, poucos pelos finos e claros na base do pênis; P3, mais escuros e encaracolados na sínfise; P4, tipo adulto sem atingir as coxas; P5, adulto, com extensão às coxas.</p>
<p>Testículos de 4 mL com escroto começando a pigmentar e pelos finos e esparsos em um menino de 12 anos são <strong>G2 P2</strong>: puberdade recém-iniciada, dentro do esperado. <strong>Puberdade precoce</strong> é o aumento testicular antes dos 9 anos, sempre investigado no menino (causa central ou tumor); <strong>atraso</strong> é a ausência de aumento testicular aos 14 anos, cuja causa mais comum é o atraso constitucional, mas que pede investigação de hipogonadismo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pelos pubianos sem aumento testicular não são puberdade: são adrenarca ou fonte periférica de andrógenos. Meça o testículo com o orquidômetro em toda consulta do escolar e do adolescente; a bolsa e o pelo enganam, o volume não.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Primeiro sinal: testículo de 4 mL, entre 9 e 14 anos.</li>
<li>Sequência: testículo, pênis e pelos, voz e acne, estirão tardio em G4.</li>
<li>G2 P2 aos 12 anos é normal.</li>
<li>Precoce: antes de 9 anos, sempre investigar; atrasada: sem aumento testicular aos 14.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro sinal da puberdade masculina? <details><summary>Resposta</summary>O aumento do volume testicular a 4 mL, entre 9 e 14 anos.</details></li>
<li>Quando o estirão acontece no menino? <details><summary>Resposta</summary>Tarde, em G4, por volta dos 14 anos, com pico de 8 a 12 cm por ano.</details></li>
</ol>
`,
"einstein2025#40": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a PFAPA pela periodicidade e pela tríade clínica.</li>
<li>Diferenciá-la das infecções recorrentes e das outras febres periódicas.</li>
<li>Tratar a crise com dose única de corticoide e conhecer as opções de prevenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>PFAPA</dt>
<dd>Febre periódica com estomatite aftosa, faringite e adenite cervical; a febre periódica mais comum da infância.</dd>
<dt>Doença autoinflamatória</dt>
<dd>Ativação da imunidade inata sem infecção nem autoanticorpos, com surtos de febre e inflamação.</dd>
<dt>Periodicidade</dt>
<dd>Episódios regulares, a cada 3 a 6 semanas, previsíveis pela família.</dd>
<dt>Corticoide em dose única</dt>
<dd>Prednisona ou betametasona no início da crise, que aborta a febre em horas.</dd>
</dl>
<h4>O essencial</h4>
<p>A PFAPA aparece antes dos 5 anos como <strong>episódios de febre alta</strong>, de 3 a 6 dias, que se repetem <strong>com regularidade quase de relógio</strong>, a cada 3 a 6 semanas, acompanhados de <strong>estomatite aftosa</strong>, <strong>faringite</strong> (com exsudato, cultura negativa) e <strong>adenite cervical</strong>. Entre as crises a criança está perfeitamente bem, cresce e se desenvolve normalmente. Durante a crise há leucocitose e PCR alta, que normalizam no intervalo. É uma doença <strong>autoinflamatória</strong>, sem infecção e sem autoimunidade; a causa é desconhecida e o curso é benigno, com resolução espontânea até a adolescência.</p>
<p>O diagnóstico é <strong>clínico</strong> e exige excluir neutropenia cíclica (neutrófilos a cada 21 dias, com hemogramas seriados), infecções de repetição (que não são periódicas nem tão estereotipadas) e as febres periódicas monogênicas (febre familiar do Mediterrâneo, síndrome de hiper-IgD, TRAPS), que têm dor abdominal, serosite, exantema ou história familiar e são confirmadas por genética. A resposta dramática ao corticoide reforça a hipótese.</p>
<p>O tratamento da crise é uma <strong>dose única de prednisona</strong> (1 a 2 mg/kg) ou de <strong>betametasona</strong> (0,1 a 0,2 mg/kg) no primeiro dia de febre, que a aborta em poucas horas, sem tratar as aftas; o preço é encurtar o intervalo até a próxima crise em parte das crianças. Antibiótico não tem efeito. Para reduzir a frequência, opções são a colchicina e, nos casos que impactam muito a vida, a amigdalectomia, que induz remissão na maioria.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Peça à família um calendário das febres: a regularidade que ela já percebeu é o dado mais valioso do diagnóstico. Uma criança que responde a antibiótico "em 24 horas" toda vez provavelmente estava respondendo ao tempo, não ao remédio.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre alta de 3 a 6 dias a cada 3 a 6 semanas, com aftas, faringite e adenite; bem entre as crises.</li>
<li>Autoinflamatória, benigna, resolve até a adolescência.</li>
<li>Excluir neutropenia cíclica e febres periódicas monogênicas.</li>
<li>Crise: prednisona 1 a 2 mg/kg ou betametasona dose única; prevenção: colchicina, amigdalectomia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a tríade da PFAPA? <details><summary>Resposta</summary>Estomatite aftosa, faringite e adenite cervical, com febre periódica.</details></li>
<li>Como se trata a crise? <details><summary>Resposta</summary>Com dose única de prednisona (1 a 2 mg/kg) ou betametasona (0,1 a 0,2 mg/kg) no início da febre.</details></li>
</ol>
`,
"einstein2025#41": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a sinovite transitória do quadril como a causa mais comum de claudicação no pré-escolar.</li>
<li>Separá-la da artrite séptica pelos critérios de Kocher.</li>
<li>Lembrar as causas de claudicação típicas de cada idade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinovite transitória</dt>
<dd>Inflamação autolimitada da sinóvia do quadril, pós-viral, em 3 a 8 anos, com bom estado geral.</dd>
<dt>Critérios de Kocher</dt>
<dd>Febre acima de 38,5 ºC, não deambulação, VHS acima de 40 e leucócitos acima de 12.000: probabilidade de artrite séptica.</dd>
<dt>Doença de Legg-Calvé-Perthes</dt>
<dd>Necrose avascular da cabeça femoral, em 4 a 8 anos, com claudicação crônica indolor ou pouco dolorosa.</dd>
<dt>Epifisiólise</dt>
<dd>Escorregamento da epífise femoral proximal no adolescente obeso, com dor no quadril ou no joelho.</dd>
</dl>
<h4>O essencial</h4>
<p>O pré-escolar que amanhece mancando, com dor no quadril ou irradiada ao joelho, uma semana depois de um resfriado, em <strong>bom estado geral e sem febre</strong>, tem quase sempre <strong>sinovite transitória</strong>. O quadril fica com rotação interna e abdução limitadas e dolorosas, mas a criança apoia o pé. A ultrassonografia mostra derrame articular pequeno; os exames inflamatórios são normais ou pouco alterados. O tratamento é <strong>sintomático</strong>: repouso relativo e anti-inflamatório por alguns dias, com resolução em 1 a 2 semanas e retorno se piorar.</p>
<p>O diagnóstico que não pode escapar é a <strong>artrite séptica</strong>, que destrói a articulação em dias. Os <strong>critérios de Kocher</strong> estimam o risco: <strong>febre acima de 38,5 ºC</strong>, <strong>recusa em apoiar o pé</strong>, <strong>VHS acima de 40 mm/h</strong> e <strong>leucócitos acima de 12.000</strong> (a PCR acima de 20 mg/L é o quinto critério de Caird). Nenhum critério: risco menor que 2%; três: acima de 90%; quatro: perto de 100%. Com dois ou mais, ou com toxemia, faz-se a punção articular guiada por ultrassom e, se purulenta, drenagem cirúrgica e antibiótico venoso.</p>
<p>As causas de claudicação seguem a idade: no lactente, displasia do quadril e artrite séptica; no pré-escolar, sinovite transitória, artrite séptica, fratura do "toddler" e Perthes a partir dos 4 anos; no escolar, Perthes; no adolescente, epifisiólise (obeso, dor no joelho, rotação externa do membro) e lesões esportivas. Em qualquer idade, dor noturna, febre persistente e perda de peso apontam para leucemia ou tumor ósseo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Criança que manca, mas apoia o pé, está afebril e brinca na sala de espera pode voltar para casa com anti-inflamatório e retorno em 48 horas. Criança que se recusa a pisar e tem febre faz hemograma, VHS, PCR e ultrassonografia antes de qualquer alta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sinovite transitória: pré-escolar, pós-viral, bom estado geral, apoia o pé; sintomáticos.</li>
<li>Kocher: febre acima de 38,5, não deambula, VHS acima de 40, leucócitos acima de 12.000.</li>
<li>Dois ou mais critérios ou toxemia: punção articular.</li>
<li>Por idade: displasia e séptica no lactente; Perthes no escolar; epifisiólise no adolescente.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os critérios de Kocher? <details><summary>Resposta</summary>Febre acima de 38,5 ºC, não deambulação, VHS acima de 40 mm/h e leucócitos acima de 12.000/mm³.</details></li>
<li>Que causa de claudicação pensar no adolescente obeso com dor no joelho? <details><summary>Resposta</summary>Epifisiólise da cabeça femoral, com rotação externa do membro e limitação da rotação interna.</details></li>
</ol>
`,
};
