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

/* --- Volume 2 · Sírio-Libanês 2026 → ped51–ped65 ----------------------------------------- */
"sirio2026#41": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os marcos esperados entre 9 e 12 meses nos quatro domínios.</li>
<li>Saber até quando a marcha independente pode esperar sem investigação.</li>
<li>Reconhecer os sinais de alerta que mudam a conduta na puericultura.</li>
<li>Explicar à família por que o andador é contraindicado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pinça fina</dt>
<dd>Preensão do objeto pequeno entre polegar e indicador, esperada por volta dos 9 a 12 meses.</dd>
<dt>Permanência do objeto</dt>
<dd>Procurar o brinquedo escondido: a criança sabe que ele existe mesmo sem vê-lo, marco cognitivo dos 8 a 12 meses.</dd>
<dt>Marco com janela</dt>
<dd>Idade em que a maioria adquire a habilidade e idade-limite depois da qual a ausência vira alerta.</dd>
<dt>Sinal de alerta</dt>
<dd>Regressão, assimetria, hipertonia ou hipotonia persistente, ausência de marco além do limite.</dd>
</dl>
<h4>O essencial</h4>
<p>A vigilância do desenvolvimento acompanha quatro domínios — <strong>motor grosso, motor fino, linguagem e social-cognitivo</strong> — e usa a Caderneta da Criança como instrumento. Aos 12 meses espera-se: ficar em pé com apoio e dar passos apoiado, engatinhar, sentar sem apoio; pinça fina, transferir objetos entre as mãos e entre recipientes, colocar e tirar de uma caixa; duas ou três palavras com sentido ("mama", "papa"), imitar sons, compreender ordens simples; dar tchau, bater palmas, estranhar, procurar o objeto escondido e brincar de esconde-esconde.</p>
<p>Cada marco tem uma <strong>janela</strong>. A marcha independente aparece em média aos 12 meses, mas o limite para considerar atraso é <strong>18 meses</strong>; sentar sem apoio tem limite aos 9 meses; a pinça, aos 12; as primeiras palavras, aos 18. A conduta diante do marco ainda não alcançado dentro da janela é orientar e reavaliar na consulta seguinte — e não encaminhar nem pedir exame. Comparações com outras crianças da creche são a maior fonte de ansiedade das famílias e a melhor oportunidade de ensinar que variação normal não é atraso.</p>
<p>O que muda a conduta são os <strong>sinais de alerta</strong>: perda de habilidade adquirida, assimetria de movimento, persistência de reflexos primitivos além dos 6 meses, hipertonia ou hipotonia, ausência de contato visual ou de resposta ao nome, marco ausente além do limite. Diante deles, a avaliação é imediata — exame neurológico completo, audição, visão e encaminhamento à estimulação precoce enquanto se investiga.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O <strong>andador</strong> não antecipa a marcha e atrasa o engatinhar; é causa frequente de traumatismo craniano por queda de escada e de queimaduras ao alcançar fogão e mesa. A SBP e a AAP o contraindicam. A orientação prática é piso seguro, móveis estáveis para a criança se apoiar e tempo no chão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Aos 12 meses: passos com apoio, pinça fina, duas ou três palavras, tchau, procura do objeto escondido.</li>
<li>Marcha independente: média aos 12 meses, alerta só aos 18.</li>
<li>Variação dentro da janela = orientar e reavaliar; sinal de alerta = investigar já.</li>
<li>Andador é contraindicado: não acelera a marcha e causa acidentes graves.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 15 meses dá passos com apoio e ainda não anda sozinho; tudo o mais está normal. Qual é a conduta? <details><summary>Resposta</summary>Orientar e reavaliar: a marcha independente só é atraso aos 18 meses.</details></li>
<li>Qual achado em um lactente de 12 meses obriga avaliação imediata, mesmo com marcos presentes? <details><summary>Resposta</summary>Regressão de habilidade adquirida ou assimetria de movimentos — sinais de alerta em qualquer idade.</details></li>
</ol>
`,

"sirio2026#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Fazer o diagnóstico clínico de bronquiolite viral aguda.</li>
<li>Graduar a gravidade pelo exame e decidir quem interna.</li>
<li>Prescrever só o que tem evidência: suporte, oxigênio quando indicado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bronquiolite</dt>
<dd>Primeiro episódio de sibilância em lactente menor de 2 anos durante infecção viral das vias aéreas, quase sempre por VSR.</dd>
<dt>Vírus sincicial respiratório</dt>
<dd>Causa de 60 a 80% das bronquiolites; circula no outono e inverno e reinfecta ao longo da vida.</dd>
<dt>Tratamento de suporte</dt>
<dd>Higiene nasal, hidratação, fracionamento das mamadas, oxigênio se a saturação cai de 90 a 92%.</dd>
<dt>Sinais de gravidade</dt>
<dd>Tiragem intensa, gemência, apneia, saturação baixa, recusa alimentar, letargia.</dd>
</dl>
<h4>O essencial</h4>
<p>A bronquiolite é a infecção das pequenas vias aéreas do lactente: o vírus provoca edema, necrose epitelial e tampões de muco nos bronquíolos, e o resultado é obstrução com <strong>sibilos, crepitações e expiração prolongada</strong>, precedidos por dois ou três dias de coriza e tosse. O pico é entre 2 e 6 meses, a doença piora até o terceiro ou quinto dia e depois melhora, com tosse residual por semanas. O diagnóstico é <strong>clínico</strong>; a pesquisa viral só muda a conduta em coorte hospitalar, e a radiografia é dispensável no caso típico — ela mostra hiperinsuflação e atelectasias que levam a antibióticos desnecessários.</p>
<p>Gradua-se a gravidade pelo <strong>trabalho respiratório</strong> (frequência, tiragem, gemência, batimento de asa do nariz), pela <strong>saturação</strong>, pela <strong>aceitação alimentar</strong> e pelo estado geral. Interna-se o lactente com saturação persistentemente abaixo de 90 a 92%, com desconforto importante, apneia, que não consegue mamar ou com fatores de risco: menos de 3 meses, prematuridade, cardiopatia, pneumopatia crônica, imunodeficiência.</p>
<p>O tratamento é <strong>suporte</strong>: higiene nasal com soro fisiológico e aspiração suave, mamadas menores e mais frequentes ou hidratação por sonda ou veia quando a oral falha, e oxigênio quando a saturação indica. Broncodilatadores, corticoides, adrenalina inalatória, salina hipertônica de rotina, antibióticos e fisioterapia respiratória não têm benefício consistente e não entram na prescrição. O cateter nasal de alto fluxo é opção de resgate para quem não melhora com oxigênio em baixo fluxo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A família precisa ouvir que a doença piora antes de melhorar e quais são os sinais de retorno: respiração muito rápida, afundamento do peito, pausas na respiração, lábios roxos, recusa de metade das mamadas, sonolência. Com isso dito, a maior parte dos lactentes se trata em casa com segurança.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Primeira sibilância em lactente com quadro viral = bronquiolite; diagnóstico clínico.</li>
<li>Gravidade pelo trabalho respiratório, saturação e alimentação; piora até o 3º–5º dia.</li>
<li>Suporte: higiene nasal, hidratação, oxigênio se saturação baixa.</li>
<li>Sem salbutamol, corticoide ou antibiótico de rotina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 3 meses com bronquiolite, saturação de 95% e mamando bem. Interna? <details><summary>Resposta</summary>Não: trata-se em casa com higiene nasal e orientação dos sinais de alarme; a idade pede retorno precoce, não internação.</details></li>
<li>Que exame confirma bronquiolite? <details><summary>Resposta</summary>Nenhum: o diagnóstico é clínico; radiografia e painel viral não mudam a conduta no caso típico.</details></li>
</ol>
`,

"sirio2026#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar pneumonia na criança pela taquipneia e pela ausculta.</li>
<li>Separar pneumonia não grave, grave e muito grave pelos critérios da OMS.</li>
<li>Escolher o antibiótico por idade e gravidade.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Taquipneia</dt>
<dd>Mais de 60 irpm até 2 meses, mais de 50 de 2 a 12 meses, mais de 40 de 1 a 5 anos, mais de 30 acima de 5 anos.</dd>
<dt>Pneumonia grave</dt>
<dd>Taquipneia com tiragem subcostal, gemência ou saturação abaixo de 92%: indica internação.</dd>
<dt>Pneumonia atípica</dt>
<dd>Quadro arrastado, tosse seca, sibilos, por <em>Mycoplasma</em> ou <em>Chlamydophila</em>, sobretudo em escolares.</dd>
<dt>Amoxicilina em dose alta</dt>
<dd>50 mg/kg/dia, ou 80 a 90 mg/kg/dia onde há pneumococo de sensibilidade reduzida.</dd>
</dl>
<h4>O essencial</h4>
<p>Na criança, a pneumonia adquirida na comunidade é diagnóstico <strong>clínico</strong>: febre com tosse e <strong>taquipneia</strong> — o sinal mais sensível —, com ou sem estertores localizados, redução do murmúrio ou sopro tubário. A radiografia é indicada quando há dúvida, suspeita de complicação (derrame, abscesso), falha do tratamento ou internação; no caso ambulatorial típico, ela não é obrigatória. Exames de sangue não distinguem com segurança vírus de bactéria.</p>
<p>A gravidade decide o local de tratamento. <strong>Não grave</strong>: taquipneia sem tiragem, saturação normal, aceitando líquidos — trata-se em casa. <strong>Grave</strong>: tiragem subcostal, gemência, saturação abaixo de 92%, incapacidade de beber, vômitos, letargia ou convulsão — interna-se; menores de 2 meses internam sempre. Sinais de perigo geral (cianose central, desconforto grave) definem a pneumonia muito grave.</p>
<p>O agente orienta o antibiótico: até os 5 anos predominam vírus e <strong>pneumococo</strong>, e a primeira escolha ambulatorial é a <strong>amoxicilina oral</strong> por 7 dias (5 em casos leves), com reavaliação em 48 a 72 horas; o macrolídeo é acrescentado ou substitui quando o quadro sugere atípicos, mais comuns depois dos 5 anos. Na criança internada usa-se penicilina cristalina ou ampicilina; ceftriaxona fica para a falha, a gravidade extrema ou a impossibilidade de via oral; oxacilina ou vancomicina entram na suspeita de estafilococo (pneumonia necrosante, pneumatoceles, pós-influenza).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A reavaliação em 48 horas é parte do tratamento: febre persistente além desse prazo pede radiografia para procurar <strong>derrame pleural</strong>, a complicação mais comum, antes de simplesmente trocar o antibiótico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre, tosse e taquipneia por idade = pneumonia; ausculta localiza.</li>
<li>Sem tiragem, com saturação normal e bebendo: não grave, tratamento em casa.</li>
<li>Amoxicilina oral é a primeira escolha até os 5 anos; macrolídeo para atípicos.</li>
<li>Reavaliar em 48–72 h; febre persistente pede radiografia para derrame.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 3 anos com pneumonia, tiragem subcostal e saturação de 89%. Onde tratar e com o quê? <details><summary>Resposta</summary>Internada, com oxigênio e penicilina cristalina ou ampicilina venosa: é pneumonia grave.</details></li>
<li>Escolar de 8 anos com tosse seca há 10 dias, febre baixa e sibilos difusos. Qual antibiótico? <details><summary>Resposta</summary>Macrolídeo (azitromicina ou claritromicina): quadro de pneumonia atípica.</details></li>
</ol>
`,

"sirio2026#46": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a desidratação da criança com diarreia em três colunas.</li>
<li>Descrever os quatro pilares do Plano A.</li>
<li>Prescrever zinco e saber quando usar antiemético e antibiótico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Plano A</dt>
<dd>Diarreia sem desidratação: tratamento em casa com líquidos, alimentação, zinco e sinais de alarme.</dd>
<dt>Soro de reidratação oral</dt>
<dd>Solução de osmolaridade reduzida da OMS, oferecida após cada evacuação e vômito.</dd>
<dt>Zinco</dt>
<dd>10 mg/dia abaixo de 6 meses e 20 mg/dia acima, por 10 a 14 dias, em todo episódio de diarreia aguda.</dd>
<dt>Disenteria</dt>
<dd>Diarreia com sangue; única situação em que o antibiótico empírico se justifica na criança sem toxemia.</dd>
</dl>
<h4>O essencial</h4>
<p>A diarreia aguda mata por <strong>desidratação</strong>, e por isso o primeiro passo é classificar: a criança <strong>sem desidratação</strong> está alerta, com olhos e mucosas normais, bebe normalmente e tem turgor e perfusão preservados; a <strong>desidratada</strong> está irritada, com olhos fundos, bebe avidamente e a prega desaparece lentamente; a <strong>gravemente desidratada</strong> está letárgica, não consegue beber, tem pulsos fracos e prega que desaparece muito lentamente. Dois sinais da coluna definem a categoria, e cada categoria tem um plano: A em casa, B na unidade com soro oral, C na veia.</p>
<p>O <strong>Plano A</strong> tem quatro pilares. Primeiro, <strong>mais líquidos</strong>: água, chás, sopas, água de coco e o soro de reidratação oral depois de cada evacuação (50 a 100 mL até 1 ano, 100 a 200 mL de 1 a 10 anos), além — nunca em lugar — do leite materno e dos líquidos habituais. Segundo, <strong>alimentação mantida</strong>: a dieta normal, sem restrições, com mais uma refeição por dia na recuperação; jejum e dietas "leves" prolongam o episódio. Terceiro, <strong>zinco</strong> por 10 a 14 dias, que encurta a diarreia, reduz o volume fecal e previne episódios nos três meses seguintes. Quarto, <strong>sinais de alarme</strong> para retorno: piora, sangue, febre alta, recusa de líquidos, sede intensa, poucas micções.</p>
<p>Medicamentos têm papel restrito. A <strong>ondansetrona</strong>, em dose única, ajuda a criança que vomita e não consegue iniciar o soro oral; antidiarreicos e adsorventes não são indicados; probióticos têm benefício modesto e não são rotina do SUS; antibiótico só na disenteria (sangue nas fezes), na suspeita de cólera, no imunodeprimido ou na criança toxemiada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A intolerância transitória à lactose existe na diarreia por rotavírus, mas não justifica suspender o leite materno nem a fórmula de rotina. Troca-se para fórmula sem lactose só quando a diarreia piora de forma evidente após o leite e persiste além de 7 a 10 dias.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Classificar em sem desidratação, desidratação e desidratação grave: planos A, B e C.</li>
<li>Plano A: mais líquidos e soro oral após cada evacuação, dieta mantida, zinco, sinais de alarme.</li>
<li>Zinco: 10 mg (menores de 6 meses) ou 20 mg/dia por 10 a 14 dias.</li>
<li>Ondansetrona em dose única se os vômitos impedem o soro; antibiótico só na disenteria.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 8 meses com diarreia sem desidratação. Qual a dose de zinco? <details><summary>Resposta</summary>20 mg por dia, por 10 a 14 dias — a partir dos 6 meses a dose é de 20 mg.</details></li>
<li>Criança de 3 anos com diarreia e sangue nas fezes, sem toxemia. O que muda no Plano A? <details><summary>Resposta</summary>Acrescenta-se antibiótico empírico para disenteria (Shigella), mantendo os quatro pilares.</details></li>
</ol>
`,

"sirio2026#48": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o esquema de rotina das vacinas contra sarampo no PNI.</li>
<li>Explicar a dose zero: para quem, quando e por quê.</li>
<li>Saber que a dose zero não substitui as doses do calendário.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tríplice viral</dt>
<dd>Vacina atenuada contra sarampo, caxumba e rubéola; aos 12 meses, primeira dose do esquema.</dd>
<dt>Tetraviral</dt>
<dd>Tríplice viral mais varicela, aos 15 meses: segunda dose de sarampo e primeira de varicela.</dd>
<dt>Dose zero</dt>
<dd>Dose extra de tríplice viral entre 6 e 11 meses em área de risco ou surto; não conta para o esquema.</dd>
<dt>Bloqueio vacinal</dt>
<dd>Vacinação dos contatos de um caso em até 72 horas, de 6 meses a 59 anos, para interromper a transmissão.</dd>
</dl>
<h4>O essencial</h4>
<p>O sarampo é uma das doenças mais contagiosas que existem — cada caso infecta 12 a 18 suscetíveis — e a proteção coletiva exige cobertura acima de 95% com <strong>duas doses</strong>. O calendário brasileiro dá a primeira dose aos <strong>12 meses</strong> (tríplice viral) e a segunda aos <strong>15 meses</strong> (tetraviral), e as duas conferem imunidade duradoura em mais de 97% das crianças. Antes dos 12 meses a vacina não faz parte da rotina porque os anticorpos maternos, quando presentes, neutralizam parte do vírus vacinal e a resposta é menor.</p>
<p>Mas os anticorpos maternos caem rápido — a maioria dos lactentes está suscetível a partir dos 6 meses —, e é por isso que, em <strong>situação de risco epidemiológico</strong> (surto, município com casos, viagem para área de transmissão), o Ministério da Saúde recomenda a <strong>dose zero</strong> para crianças de 6 a 11 meses. Ela protege nos meses de maior vulnerabilidade, mas, pela resposta imperfeita nessa idade, <strong>não é contabilizada</strong>: o esquema de rotina continua íntegro, com a dose dos 12 meses (respeitado intervalo mínimo de 30 dias) e a dos 15 meses.</p>
<p>Quem perdeu o calendário recebe duas doses com intervalo mínimo de 30 dias até os 29 anos, e uma dose dos 30 aos 59. Profissionais de saúde recebem duas doses em qualquer idade. Grávidas e imunodeprimidos graves não recebem vacinas atenuadas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diante de um caso suspeito de sarampo, notifica-se em 24 horas e faz-se o <strong>bloqueio</strong> dos contatos em até 72 horas; para quem não pode receber a vacina (menores de 6 meses, gestantes, imunodeprimidos), a opção é a imunoglobulina em até 6 dias.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rotina: tríplice viral aos 12 meses e tetraviral aos 15.</li>
<li>Dose zero: 6 a 11 meses, em área de risco; protege já, mas não conta.</li>
<li>Após a dose zero, as doses de 12 e 15 meses seguem normalmente.</li>
<li>Bloqueio dos contatos em 72 horas; imunoglobulina para quem não pode vacinar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 8 meses recebeu dose zero em maio. Quando toma a próxima dose contra sarampo? <details><summary>Resposta</summary>Aos 12 meses, como de rotina — a dose zero não altera o calendário.</details></li>
<li>Por que a vacina do sarampo não é dada de rotina antes dos 12 meses? <details><summary>Resposta</summary>Porque anticorpos maternos residuais reduzem a resposta à vacina atenuada nessa idade.</details></li>
</ol>
`,

"sirio2026#49": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar a urina tipo 1 do lactente febril e saber colher a urocultura.</li>
<li>Decidir entre tratamento oral e parenteral da infecção urinária febril.</li>
<li>Escolher o antibiótico e programar a investigação por imagem.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Piúria</dt>
<dd>Mais de 10.000 leucócitos/mL (ou mais de 5 por campo) na urina; sem piúria, a bacteriúria costuma ser contaminação.</dd>
<dt>Nitrito</dt>
<dd>Produto da redução do nitrato por enterobactérias; muito específico, pouco sensível no lactente que esvazia a bexiga com frequência.</dd>
<dt>Urocultura</dt>
<dd>Padrão-ouro; no lactente sem controle esfincteriano, colhida por cateterismo vesical ou punção suprapúbica.</dd>
<dt>Cicatriz renal</dt>
<dd>Dano permanente após pielonefrite; o risco cresce com o atraso do tratamento e com a recorrência.</dd>
</dl>
<h4>O essencial</h4>
<p>Febre sem foco no lactente tem na <strong>infecção urinária</strong> sua causa bacteriana mais comum — 5 a 7% dos casos —, e febre com infecção urinária nessa idade significa <strong>pielonefrite</strong>. O exame de urina orienta: piúria e nitrito positivos tornam a infecção muito provável, mas a urocultura é obrigatória antes do antibiótico, colhida por método confiável (cateterismo ou punção); o saco coletor serve apenas para afastar quando é negativo. A urina de jato médio só é possível na criança que controla a micção.</p>
<p>A via de tratamento depende do estado da criança. O lactente a partir de <strong>2 a 3 meses</strong>, em <strong>bom estado geral</strong>, hidratado, sem vômitos e com boa aceitação oral, pode ser tratado por via oral desde o início, com <strong>cefalosporina de segunda ou terceira geração</strong> (cefuroxima, cefixima) ou amoxicilina-clavulanato, por 7 a 10 dias. Os ensaios mostraram que a via oral tem os mesmos resultados da venosa em cura, recorrência e cicatriz renal. Vão para o hospital e para a via parenteral (ceftriaxona, gentamicina, ampicilina com gentamicina) o menor de 2 meses, o toxemiado, o que vomita, o imunodeprimido e o com anomalia urinária conhecida ou falha do tratamento oral em 48 horas.</p>
<p>Alguns antimicrobianos não servem para a infecção febril: a <strong>nitrofurantoína</strong> e a fosfomicina atingem concentração apenas na urina e não tratam o parênquima renal nem a bacteremia; sulfametoxazol-trimetoprim e cefalexina têm resistência alta da <em>E. coli</em> em muitas regiões. Após a primeira infecção febril, faz-se ultrassonografia de rins e vias urinárias; a uretrocistografia fica para o ultrassom alterado ou a recorrência.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Reavaliar em 48 horas é obrigatório: persistência da febre pede troca guiada pela cultura e imagem para abscesso ou obstrução. Lembrar que a <strong>profilaxia antibiótica contínua</strong> é hoje restrita ao refluxo de alto grau e às recorrências.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre sem foco no lactente: pensar em pielonefrite; urina por cateterismo, cultura antes do antibiótico.</li>
<li>Bom estado geral, mais de 2 a 3 meses, aceitando via oral: cefalosporina oral por 7 a 10 dias.</li>
<li>Nitrofurantoína não trata infecção febril; aminoglicosídeo parenteral para o toxemiado.</li>
<li>Ultrassom após a primeira infecção febril; reavaliar em 48 horas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 5 semanas com febre e piúria. Via oral ou parenteral? <details><summary>Resposta</summary>Parenteral, internado: abaixo de 2 meses o risco de bacteremia e sepse impõe o tratamento venoso.</details></li>
<li>Por que a nitrofurantoína não serve para a pielonefrite? <details><summary>Resposta</summary>Porque só atinge concentração terapêutica na urina, não no tecido renal nem no sangue.</details></li>
</ol>
`,

"sirio2026#50": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a desidratação grave pelos sinais da terceira coluna.</li>
<li>Prescrever o Plano C com os volumes e tempos por faixa etária.</li>
<li>Diferenciar a fase rápida do Plano C da expansão do choque.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Desidratação grave</dt>
<dd>Letargia ou inconsciência, incapacidade de beber, pulsos fracos, prega que desaparece muito lentamente, enchimento capilar maior que 3 segundos.</dd>
<dt>Plano C</dt>
<dd>Reidratação venosa em duas fases: rápida (30 mL/kg) e de manutenção da reposição (70 mL/kg), com soro oral assim que possível.</dd>
<dt>Fase rápida</dt>
<dd>30 mL/kg em 30 minutos acima de 1 ano e em 1 hora abaixo de 1 ano; repete-se se o pulso continua fraco.</dd>
<dt>Gastróclise</dt>
<dd>Soro oral por sonda nasogástrica, recurso do Plano B quando a criança não bebe mas está alerta.</dd>
</dl>
<h4>O essencial</h4>
<p>A criança com diarreia que chega <strong>letárgica</strong>, sem conseguir beber, com olhos muito fundos, boca seca, prega cutânea que demora a voltar, pulsos finos e <strong>enchimento capilar lento</strong> perdeu mais de 10% do peso em água: é <strong>desidratação grave</strong>, e o soro oral — mesmo por sonda — não acompanha a perda. Entra o <strong>Plano C</strong>, hidratação venosa, com acesso periférico ou, se falhar em dois ou três minutos, intraósseo.</p>
<p>O esquema da OMS, adotado pelo Ministério da Saúde, tem dois tempos. A <strong>fase rápida</strong> repõe 30 mL/kg: em <strong>30 minutos</strong> para quem tem 1 ano ou mais, em <strong>1 hora</strong> para o lactente menor de 1 ano. Em seguida vêm 70 mL/kg em <strong>2 horas e 30 minutos</strong> (1 ano ou mais) ou em <strong>5 horas</strong> (menor de 1 ano). A solução é ringer lactato ou soro fisiológico. Reavalia-se a cada 15 a 30 minutos; se o pulso radial continua fraco após a fase rápida, ela se repete. Assim que a criança consegue beber, o soro oral entra em paralelo, e ao fim das 3 ou 6 horas ela é reclassificada e passa ao Plano B ou A.</p>
<p>Não confundir com o <strong>choque</strong>: na criança hipotensa ou com sinais de choque descompensado, a expansão é em bolos de 20 mL/kg em 5 a 20 minutos, repetidos conforme a resposta — ritmo mais rápido, próprio do choque séptico ou hipovolêmico. E o Plano B (soro oral 50 a 100 mL/kg em 4 a 6 horas, na unidade) é para a desidratação sem gravidade, com a criança alerta e bebendo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Durante o Plano C, dosar glicemia e eletrólitos quando possível; a <strong>hipoglicemia</strong> é comum no lactente desidratado e letárgico e se trata com glicose a 10%, 2 a 5 mL/kg. O zinco e a alimentação entram quando a criança reidrata.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Letargia, incapacidade de beber, pulsos fracos e enchimento capilar lento = desidratação grave = Plano C.</li>
<li>1 ano ou mais: 30 mL/kg em 30 min + 70 mL/kg em 2 h 30. Menor de 1 ano: 30 mL/kg em 1 h + 70 mL/kg em 5 h.</li>
<li>Repetir a fase rápida se o pulso continuar fraco; soro oral assim que beber.</li>
<li>Bolos de 20 mL/kg são para choque; 100 mL/kg em 4 a 6 horas é o Plano B.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 8 meses, 8 kg, em desidratação grave. Como é a fase rápida? <details><summary>Resposta</summary>240 mL (30 mL/kg) em 1 hora, seguidos de 560 mL (70 mL/kg) em 5 horas.</details></li>
<li>Após a fase rápida o pulso radial continua fraco. O que fazer? <details><summary>Resposta</summary>Repetir a fase rápida (mais 30 mL/kg) antes de passar à segunda fase.</details></li>
</ol>
`,

"sirio2026#51": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a estrutura dos critérios de Phoenix para sepse pediátrica.</li>
<li>Definir choque séptico pela disfunção cardiovascular e seus cortes por idade.</li>
<li>Saber o que mudou em relação à SIRS e por quê.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sepse (Phoenix)</dt>
<dd>Infecção suspeita ou confirmada com escore de Phoenix de 2 ou mais pontos em quatro sistemas.</dd>
<dt>Choque séptico (Phoenix)</dt>
<dd>Sepse com pelo menos 1 ponto cardiovascular: vasoativo, lactato acima de 5 mmol/L ou PAM abaixo do corte da idade.</dd>
<dt>Pressão arterial média</dt>
<dd>Cortes para 1 ponto: abaixo de 31 (menor de 1 mês), 39 (1 a 11 meses), 44 (1 a menos de 2 anos), 45 (2 a 4 anos), 49 (5 a 11 anos), 52 (12 a 17 anos).</dd>
<dt>SIRS</dt>
<dd>Critérios antigos baseados em febre, taquicardia, taquipneia e leucócitos: sensíveis, mas pouco específicos; abandonados.</dd>
</dl>
<h4>O essencial</h4>
<p>Em 2024 a sepse pediátrica ganhou definição nova, baseada em dados de mais de 3 milhões de atendimentos: a infecção só é sepse quando há <strong>disfunção orgânica</strong>, medida pelo <strong>escore de Phoenix</strong>. Ele pontua quatro sistemas. <strong>Respiratório</strong> (0 a 3): relação PaO₂/FiO₂ ou SpO₂/FiO₂ reduzida em criança sob suporte respiratório, com mais pontos para ventilação invasiva. <strong>Cardiovascular</strong> (0 a 6): número de drogas vasoativas, lactato acima de 5 ou de 11 mmol/L e pressão arterial média abaixo dos cortes por idade. <strong>Coagulação</strong> (0 a 2): plaquetas abaixo de 100 mil, RNI acima de 1,3, D-dímero elevado, fibrinogênio baixo. <strong>Neurológico</strong> (0 a 2): Glasgow de 10 ou menos, pupilas fixas bilaterais. Dois pontos ou mais, com infecção, é sepse.</p>
<p><strong>Choque séptico</strong> é sepse com <strong>ao menos 1 ponto cardiovascular</strong>. Isso significa que a criança em uso de qualquer vasoativo, com lactato acima de 5 mmol/L ou com PAM abaixo do corte da idade está em choque — e que a taquicardia, o enchimento capilar lento ou a febre, por mais úteis à beira do leito, não definem choque pelos critérios. A mortalidade da sepse de Phoenix fica em torno de 7%; a do choque séptico, em torno de 10%.</p>
<p>O que mudou em relação a 2005: a SIRS saiu, porque febre e taquicardia estão presentes em quase toda infecção e não separam quem vai morrer; "sepse grave" deixou de existir; e o escore vale em qualquer ambiente, inclusive onde não há UTI, porque pode ser calculado com dados mínimos (PAM, saturação, plaquetas, Glasgow).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Phoenix é critério <strong>diagnóstico e epidemiológico</strong>, não gatilho de triagem: a criança febril, taquicárdica e mal perfundida recebe reconhecimento precoce, cultura, antibiótico na primeira hora e volume <em>antes</em> de preencher o escore. Esperar a PAM cair para agir é chegar tarde.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sepse = infecção + escore de Phoenix de 2 ou mais (respiratório, cardiovascular, coagulação, neurológico).</li>
<li>Choque séptico = sepse + 1 ponto cardiovascular: vasoativo, lactato maior que 5 ou PAM abaixo do corte da idade.</li>
<li>PAM que pontua: menor que 44 de 1 a menos de 2 anos; menor que 45 de 2 a 4; menor que 49 de 5 a 11.</li>
<li>Febre, frequência cardíaca e enchimento capilar não entram no escore; tratar não espera o escore.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 3 anos com pneumonia, plaquetas de 80 mil e PAM de 42 mmHg. Como classificar? <details><summary>Resposta</summary>Choque séptico: ponto de coagulação mais ponto cardiovascular (PAM abaixo de 45 para 2 a 4 anos).</details></li>
<li>Lactente febril com FC de 190 e enchimento capilar de 4 segundos, PAM normal, sem outras disfunções. É sepse pelos critérios de Phoenix? <details><summary>Resposta</summary>Não pelos critérios — mas é um lactente que precisa de tratamento imediato; o escore não é ferramenta de triagem.</details></li>
</ol>
`,

"sirio2026#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir estado de mal epiléptico pelo tempo e saber por que o tempo importa.</li>
<li>Executar a sequência de atendimento: suporte, primeira, segunda e terceira linhas.</li>
<li>Escolher a via do benzodiazepínico conforme o acesso disponível.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Estado de mal epiléptico</dt>
<dd>Crise com mais de 5 minutos ou crises repetidas sem recuperação da consciência entre elas (definição operacional da ILAE).</dd>
<dt>Primeira linha</dt>
<dd>Benzodiazepínico: diazepam venoso ou retal, midazolam venoso, intramuscular ou nasal, lorazepam venoso; até duas doses.</dd>
<dt>Segunda linha</dt>
<dd>Fenitoína (ou fosfenitoína), levetiracetam ou valproato venosos, em dose de ataque, com eficácia equivalente.</dd>
<dt>Estado de mal refratário</dt>
<dd>Crise que persiste após primeira e segunda linhas: anestesia (midazolam contínuo, tiopental, propofol) em UTI.</dd>
</dl>
<h4>O essencial</h4>
<p>A crise convulsiva que ultrapassa <strong>5 minutos</strong> dificilmente para sozinha e, depois de 30 minutos, começa a causar lesão neuronal — por isso a definição operacional já manda tratar aos 5 minutos. O atendimento começa pelo <strong>suporte</strong>: posicionar, aspirar, oxigênio a 100%, monitorizar, medir a <strong>glicemia</strong> (hipoglicemia se trata com glicose antes de qualquer anticonvulsivante) e obter acesso venoso, sem atrasar a droga por causa dele.</p>
<p>A <strong>primeira linha</strong> é um <strong>benzodiazepínico</strong>, que atua em minutos: diazepam venoso 0,2 a 0,3 mg/kg (ou retal 0,5 mg/kg), midazolam venoso 0,1 a 0,2 mg/kg, intramuscular 0,2 mg/kg ou nasal 0,2 a 0,3 mg/kg, lorazepam venoso 0,1 mg/kg. Sem acesso, o midazolam intramuscular ou nasal é tão eficaz quanto o venoso e evita a espera. Pode-se repetir uma vez após 5 minutos; mais de duas doses só acrescentam depressão respiratória.</p>
<p>Se a crise continua após 10 a 20 minutos, entra a <strong>segunda linha</strong>: fenitoína 20 mg/kg (ou fosfenitoína), levetiracetam 40 a 60 mg/kg ou valproato 40 mg/kg, todos venosos, em dose de ataque. O ensaio ESETT mostrou que os três param a crise em cerca de metade dos casos, sem diferença entre eles; a escolha segue disponibilidade e contraindicações (valproato não em hepatopatia nem em suspeita de doença mitocondrial; fenitoína com cautela em cardiopatas). O fenobarbital é a segunda linha preferida no neonato e opção de terceira nos demais. Persistindo a crise, é estado de mal refratário: UTI e anestesia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Enquanto a crise cede, procura-se a causa: febre e infecção do sistema nervoso, suspensão ou nível baixo do anticonvulsivante habitual, distúrbio eletrolítico, intoxicação, trauma. Na criança que já usa levetiracetam, a dose de ataque dele é uma boa segunda linha — mas depois do benzodiazepínico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Crise acima de 5 minutos = estado de mal: tratar sem esperar.</li>
<li>Suporte primeiro: via aérea, oxigênio, glicemia, acesso.</li>
<li>Primeira linha: benzodiazepínico (diazepam venoso, midazolam IM ou nasal), até duas doses.</li>
<li>Segunda linha: fenitoína, levetiracetam ou valproato, equivalentes; refratário vai para a UTI.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança em crise há 8 minutos, sem acesso venoso. Qual é a droga e a via? <details><summary>Resposta</summary>Midazolam intramuscular (ou nasal), 0,2 mg/kg — tão eficaz quanto a via venosa e sem esperar o acesso.</details></li>
<li>Duas doses de diazepam não pararam a crise. Próximo passo? <details><summary>Resposta</summary>Segunda linha venosa em dose de ataque: fenitoína, levetiracetam ou valproato.</details></li>
</ol>
`,

"sirio2026#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar os ritmos de parada em chocáveis e não chocáveis.</li>
<li>Aplicar as cargas de desfibrilação e o momento das drogas no algoritmo pediátrico.</li>
<li>Diferenciar desfibrilação de cardioversão sincronizada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ritmo chocável</dt>
<dd>Fibrilação ventricular e taquicardia ventricular sem pulso: tratados com desfibrilação.</dd>
<dt>Ritmo não chocável</dt>
<dd>Assistolia e atividade elétrica sem pulso: só compressões, ventilação e adrenalina.</dd>
<dt>Desfibrilação</dt>
<dd>Choque não sincronizado: 2 J/kg, depois 4 J/kg, depois 4 a 10 J/kg (máximo da dose adulta).</dd>
<dt>Cardioversão sincronizada</dt>
<dd>Choque sincronizado com o QRS, 0,5 a 1 J/kg (depois 2 J/kg), para taquiarritmia com pulso e instabilidade.</dd>
</dl>
<h4>O essencial</h4>
<p>Na parada cardiorrespiratória pediátrica a base é a <strong>RCP de alta qualidade</strong>: compressões de 100 a 120 por minuto, com profundidade de um terço do diâmetro do tórax, relação 15:2 com dois socorristas (30:2 com um), ventilação com bolsa-máscara e oxigênio, e interrupções mínimas. Com o monitor, checa-se o ritmo a cada 2 minutos. Os ritmos de parada se dividem em dois braços do algoritmo. Os <strong>não chocáveis</strong> — assistolia e atividade elétrica sem pulso, que são 80 a 90% das paradas em crianças, de causa hipóxica — recebem adrenalina 0,01 mg/kg (0,1 mL/kg da solução 1:10.000) o mais cedo possível e a cada 3 a 5 minutos.</p>
<p>Os <strong>chocáveis</strong> — fibrilação ventricular e <strong>taquicardia ventricular sem pulso</strong> (QRS largo, regular, sem onda P, sem pulso) — recebem <strong>desfibrilação</strong>: primeira carga de <strong>2 J/kg</strong>, retomando imediatamente as compressões por 2 minutos; segunda carga de 4 J/kg; cargas seguintes de 4 a 10 J/kg, sem passar da dose do adulto. A adrenalina entra após o segundo choque, e após o terceiro choque sem sucesso acrescenta-se <strong>amiodarona</strong> 5 mg/kg (ou lidocaína 1 mg/kg). Procuram-se e tratam-se as causas reversíveis (os H e T: hipóxia, hipovolemia, hidrogênio-acidose, hipo/hiperpotassemia, hipotermia, tensão no tórax, tamponamento, toxinas, trombose).</p>
<p>A <strong>cardioversão sincronizada</strong> é outra situação: taquiarritmia <em>com pulso</em> e sinais de instabilidade (hipotensão, alteração da consciência, choque). Aí a carga é menor, 0,5 a 1 J/kg, e sincronizada com o QRS para não cair na onda T. Na parada, sincronizar não faz sentido — não há complexo organizado com pulso para proteger — e o aparelho pode não disparar.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Atropina só tem lugar na bradicardia com pulso por tônus vagal ou bloqueio, e o bicarbonato não é rotina: reserva-se à hiperpotassemia, à intoxicação por tricíclicos ou bloqueadores de canal de sódio e à acidose grave documentada. Na parada, o que salva é compressão, ventilação, choque certo e adrenalina no tempo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>RCP de alta qualidade; ritmo a cada 2 minutos.</li>
<li>Não chocável (assistolia, AESP): adrenalina precoce a cada 3–5 minutos.</li>
<li>Chocável (FV, TV sem pulso): 2 J/kg, 4 J/kg, 4–10 J/kg; adrenalina após o 2º choque, amiodarona após o 3º.</li>
<li>Cardioversão sincronizada (0,5–1 J/kg) é para taquiarritmia com pulso e instabilidade.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 20 kg em FV. Qual é a primeira carga? <details><summary>Resposta</summary>40 J (2 J/kg), seguida de 2 minutos de compressões antes de checar o ritmo.</details></li>
<li>Lactente com taquicardia supraventricular a 280 bpm, hipotenso e sonolento, com pulso. Choque? Qual? <details><summary>Resposta</summary>Cardioversão sincronizada com 0,5 a 1 J/kg (adenosina se o acesso for imediato).</details></li>
</ol>
`,

"sirio2026#54": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Medir a pressão arterial da criança do jeito certo e saber quando medir.</li>
<li>Classificar a pressão pelas tabelas de percentil e pelos cortes dos 13 anos.</li>
<li>Decidir a investigação e o tratamento inicial da hipertensão na infância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pressão normal</dt>
<dd>Abaixo do percentil 90 para sexo, idade e estatura (ou abaixo de 120/80 a partir dos 13 anos).</dd>
<dt>Pressão arterial elevada</dt>
<dd>Do percentil 90 ao 95 (ou 120/80 a 129/79 a partir dos 13 anos); antiga "pré-hipertensão".</dd>
<dt>Hipertensão estágio 1</dt>
<dd>Do percentil 95 até 12 mmHg acima dele (ou 130/80 a 139/89), confirmada em três visitas.</dd>
<dt>Hipertensão estágio 2</dt>
<dd>Percentil 95 mais 12 mmHg ou acima (ou 140/90 ou mais).</dd>
</dl>
<h4>O essencial</h4>
<p>A pressão arterial deve ser medida <strong>anualmente a partir dos 3 anos</strong> em toda criança, e em toda consulta quando há obesidade, doença renal, cardiopatia, diabetes ou uso de medicamentos que elevam a pressão. A técnica importa mais que o aparelho: criança sentada e em repouso, braço direito na altura do coração, <strong>manguito</strong> cuja bolsa cubra 40% da circunferência do braço; a ausculta confirma o valor alterado do oscilométrico. A pressão de uma consulta nunca fecha diagnóstico: valores no percentil 90 ou acima são repetidos e a média de duas ou três aferições é comparada à tabela.</p>
<p>As <strong>tabelas</strong> da diretriz da AAP de 2017, construídas com crianças de peso normal, dão os percentis 50, 90, 95 e 95 + 12 mmHg por <strong>sexo, idade e percentil de estatura</strong>: a criança mais alta tem limite mais alto. A partir dos <strong>13 anos</strong> usam-se os cortes do adulto. Quando sistólica e diastólica discordam, vale a categoria mais alta. Hipertensão estágio 1 exige confirmação em <strong>três visitas</strong> separadas por semanas; estágio 2 pede reavaliação em uma semana e, se sintomático, atendimento imediato.</p>
<p>Confirmada a hipertensão, a <strong>MAPA</strong> afasta hipertensão do jaleco branco, e a investigação procura causa secundária, mais frequente quanto menor a criança: doença renal (urina, creatinina, ultrassom com Doppler), coarctação (pulsos e pressão nos quatro membros), endocrinopatias. Em adolescentes obesos a hipertensão primária predomina. O tratamento começa por <strong>estilo de vida</strong> — peso, atividade física, sódio, sono — e os anti-hipertensivos (inibidores da ECA, bloqueadores do receptor de angiotensina, bloqueadores de canal de cálcio, tiazídicos) entram no estágio 2, no estágio 1 sintomático ou que não responde em 6 a 12 meses, e sempre que houver lesão de órgão-alvo ou diabetes.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Procure <strong>lesão de órgão-alvo</strong> em toda criança hipertensa: ecocardiograma para hipertrofia ventricular esquerda, fundo de olho, relação albumina/creatinina. Hipertrofia ventricular já presente muda a urgência e a decisão de medicar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Medir a partir dos 3 anos, com manguito adequado e técnica correta; confirmar com média de aferições.</li>
<li>Classificar pela tabela de sexo, idade e estatura até os 12 anos; cortes adultos a partir dos 13.</li>
<li>Estágio 1: P95 até P95 + 12, confirmado em três visitas; estágio 2: acima disso.</li>
<li>MAPA para confirmar; investigar causa secundária e órgão-alvo; estilo de vida primeiro, droga no estágio 2 ou na falha.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Adolescente de 14 anos com 128/78 mmHg em três visitas. Qual é a categoria? <details><summary>Resposta</summary>Pressão arterial elevada: a partir dos 13 anos valem os cortes adultos, e 120 a 129 por menos de 80 é a faixa elevada.</details></li>
<li>Menino de 6 anos com pressão no P95 + 14 mmHg na primeira consulta, sem sintomas. Conduta? <details><summary>Resposta</summary>Estágio 2: repetir a medida e reavaliar em até uma semana, com investigação de causa secundária e órgão-alvo.</details></li>
</ol>
`,

"sirio2026#55": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a escarlatina pelo exantema e pelos sinais de boca e pele.</li>
<li>Separar as doenças exantemáticas pela sequência febre–exantema e pelo tipo de lesão.</li>
<li>Tratar a escarlatina e saber o que a antibioticoterapia previne.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Exantema escarlatiniforme</dt>
<dd>Micropapular, áspero como lixa, que começa no tronco, generaliza em 24 horas e poupa palmas e plantas.</dd>
<dt>Sinal de Filatov</dt>
<dd>Palidez perioral contrastando com as bochechas vermelhas.</dd>
<dt>Linhas de Pastia</dt>
<dd>Acentuação linear e hiperpigmentada do exantema nas dobras (cubital, inguinal, poplítea).</dd>
<dt>Língua em framboesa</dt>
<dd>Papilas hipertrofiadas e avermelhadas, após a fase de língua saburrosa.</dd>
<dt>Descamação</dt>
<dd>Em lâminas, nas mãos e pés, na segunda ou terceira semana — assinatura tardia da escarlatina.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>escarlatina</strong> é a faringoamigdalite pelo <em>Streptococcus pyogenes</em> (grupo A) acompanhada de exantema produzido pelas <strong>exotoxinas pirogênicas</strong> da bactéria; acomete sobretudo escolares de 5 a 15 anos. Começa com febre alta, odinofagia, vômitos e cefaleia, <strong>sem tosse nem coriza</strong>, com amígdalas hiperemiadas ou exsudativas, petéquias no palato e adenomegalia cervical dolorosa. Em 12 a 48 horas surge o exantema micropapular, de textura de <strong>lixa</strong>, que começa no pescoço e tronco, poupa palmas, plantas e a região perioral (sinal de Filatov) e se acentua nas dobras (linhas de Pastia). A língua passa de saburrosa a <strong>framboesa</strong>. O teste rápido ou a cultura de orofaringe confirmam.</p>
<p>O diagnóstico diferencial se faz pelo <strong>padrão</strong>. <strong>Sarampo</strong>: pródromo catarral intenso de 3 dias (tosse, coriza, conjuntivite), manchas de Koplik, exantema maculopapular que começa atrás das orelhas e desce, confluente, com descamação furfurácea. <strong>Exantema súbito</strong>: lactente com 3 dias de febre alta que cede quando o exantema aparece. <strong>Varicela</strong>: vesículas pruriginosas em estágios diferentes. <strong>Doença de Kawasaki</strong>: febre por mais de 5 dias com conjuntivite, boca vermelha, exantema polimorfo, edema de mãos e adenomegalia — a grande confusão com a escarlatina, que não tem conjuntivite nem edema e responde à penicilina em 24 a 48 horas.</p>
<p>O tratamento é <strong>penicilina benzatina</strong> em dose única (600.000 UI até 27 kg, 1.200.000 UI acima) ou <strong>amoxicilina</strong> por 10 dias; alérgicos recebem macrolídeo ou clindamicina. O antibiótico encurta a doença, interrompe a transmissão em 24 horas (a criança volta à escola depois disso) e, iniciado em até 9 dias do início, <strong>previne a febre reumática</strong>; não previne a glomerulonefrite pós-estreptocócica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Toda faringite com exantema em lixa deve ser tratada como estreptocócica mesmo que o teste rápido seja negativo e a cultura ainda não tenha saído, porque o quadro é clinicamente característico e o custo de não tratar é a febre reumática.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Faringite sem tosse + exantema em lixa poupando palmas, plantas e boca + língua em framboesa = escarlatina.</li>
<li>Pastia nas dobras, Filatov na face, descamação tardia das mãos.</li>
<li>Diferenciais pelo padrão: sarampo (catarral, Koplik), súbito (lactente), varicela (vesículas), Kawasaki (conjuntivite, edema).</li>
<li>Penicilina benzatina ou amoxicilina 10 dias: previne febre reumática, corta a transmissão em 24 horas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Escolar com escarlatina tratada há 36 horas, afebril. Pode voltar à escola? <details><summary>Resposta</summary>Sim: 24 horas de antibiótico interrompem a transmissão.</details></li>
<li>Que complicação a penicilina previne na escarlatina, e qual não previne? <details><summary>Resposta</summary>Previne a febre reumática (se iniciada em até 9 dias); não previne a glomerulonefrite pós-estreptocócica.</details></li>
</ol>
`,

"sirio2026#56": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar o atendimento à vítima de violência sexual nas primeiras 72 horas.</li>
<li>Prescrever as profilaxias: IST não virais, HIV, hepatite B e anticoncepção de emergência.</li>
<li>Cumprir as obrigações legais: notificação, registro e encaminhamentos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Janela de 72 horas</dt>
<dd>Prazo para a profilaxia do HIV e o limite de eficácia da anticoncepção de emergência (até 5 dias, com eficácia decrescente).</dd>
<dt>Profilaxia das IST não virais</dt>
<dd>Penicilina benzatina, ceftriaxona, azitromicina e metronidazol, em dose única, na primeira consulta.</dd>
<dt>Anticoncepção de emergência</dt>
<dd>Levonorgestrel 1,5 mg em dose única, para toda vítima em idade fértil, sem exigir teste de gravidez.</dd>
<dt>Notificação compulsória</dt>
<dd>Ficha do SINAN de violência interpessoal, obrigatória e imediata em menores de 18 anos, com comunicação ao Conselho Tutelar.</dd>
</dl>
<h4>O essencial</h4>
<p>A violência sexual é emergência médica, e o atendimento não depende de boletim de ocorrência — a equipe atende, trata, registra e encaminha. A primeira consulta reúne: <strong>acolhimento</strong> em ambiente reservado, história e exame físico com documentação das lesões, coleta de material para o IML quando houver fluxo pactuado, <strong>sorologias de base</strong> (HIV, sífilis, hepatites B e C) e βhCG, e as <strong>profilaxias</strong>, todas iniciadas na mesma visita.</p>
<p>As profilaxias são quatro. <strong>IST não virais</strong>: penicilina benzatina (sífilis), ceftriaxona 500 mg IM (gonorreia), azitromicina 1 g (clamídia e cancro mole) e metronidazol 2 g (tricomoníase) — na criança as doses são por peso. <strong>HIV</strong>: tenofovir, lamivudina e dolutegravir por 28 dias, iniciados em até 72 horas, quando o agressor é desconhecido ou soropositivo e houve penetração ou exposição a fluidos. <strong>Hepatite B</strong>: vacina para quem não tem esquema completo, e imunoglobulina em até 14 dias para a não vacinada ou com esquema incompleto; a vítima com três doses documentadas não precisa de nada. <strong>Anticoncepção de emergência</strong>: levonorgestrel 1,5 mg para toda vítima pós-menarca, o quanto antes, independentemente do βhCG — que serve só para detectar gravidez prévia.</p>
<p>O seguimento repete as sorologias em 6 semanas, 3 e 6 meses, acompanha a profilaxia do HIV e oferece apoio psicológico. A <strong>notificação</strong> ao SINAN é obrigatória e imediata em menores de 18 anos, com comunicação ao Conselho Tutelar; a vítima e a família são encaminhadas à rede de proteção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Para a criança pré-púbere, a profilaxia das IST não virais não é automática: faz-se quando há evidência de penetração, secreção ou lesão, ou se a família não tem como retornar; e a anticoncepção só se aplica após a menarca. A profilaxia do HIV segue os mesmos critérios de risco e prazo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Atendimento imediato e integral, sem exigir boletim de ocorrência; registro detalhado.</li>
<li>Na primeira consulta: sorologias de base, profilaxia das IST não virais, HIV em até 72 horas, hepatite B conforme a vacinação, anticoncepção de emergência.</li>
<li>Vacinada com três doses contra hepatite B: nem imunoglobulina nem vacina.</li>
<li>Notificação ao SINAN e Conselho Tutelar; sorologias em 6 semanas, 3 e 6 meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Adolescente violentada há 5 dias, sem profilaxia. O que ainda cabe? <details><summary>Resposta</summary>Anticoncepção de emergência (eficácia reduzida, até 5 dias), profilaxia das IST não virais, imunoglobulina e vacina para hepatite B se indicadas e sorologias; a profilaxia do HIV já passou da janela de 72 horas.</details></li>
<li>Por que não se espera o βhCG para dar o levonorgestrel? <details><summary>Resposta</summary>Porque ele só detecta gravidez anterior à violência; a anticoncepção de emergência age sobre a ovulação e perde eficácia a cada hora.</details></li>
</ol>
`,

"sirio2026#58": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Percorrer a sequência da reanimação neonatal pelos tempos do minuto de ouro.</li>
<li>Indicar massagem cardíaca, intubação e adrenalina pelos limites de frequência cardíaca.</li>
<li>Conhecer as vias e doses das drogas na sala de parto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Passos iniciais</dt>
<dd>Aquecer, posicionar, aspirar se necessário e secar, em 30 segundos; avaliar respiração e frequência cardíaca.</dd>
<dt>Ventilação com pressão positiva</dt>
<dd>Indicada se apneia, respiração irregular ou FC abaixo de 100 bpm; começa com ar ambiente no RN a termo.</dd>
<dt>Massagem cardíaca</dt>
<dd>FC abaixo de 60 bpm após 30 segundos de ventilação eficaz, coordenada 3:1 com a ventilação, por cânula traqueal e oxigênio a 100%.</dd>
<dt>Cateter venoso umbilical</dt>
<dd>Via preferencial para adrenalina e expansores; inserido 1 a 2 cm além do anel, até refluir sangue.</dd>
</dl>
<h4>O essencial</h4>
<p>Cerca de 1 em cada 10 recém-nascidos precisa de ajuda para respirar e 1 em cada 100 precisa de reanimação avançada. A sequência da SBP segue a <strong>frequência cardíaca</strong> e a respiração, reavaliadas a cada 30 segundos. Nos primeiros 30 segundos, os <strong>passos iniciais</strong>; se o bebê não respira ou a FC está abaixo de 100 bpm, inicia-se a <strong>ventilação com pressão positiva</strong> com máscara — a intervenção mais importante da reanimação —, em ar ambiente no RN de 34 semanas ou mais e com oxigênio a 30% no prematuro, guiada pela oximetria no pulso direito. A ventilação eficaz é a que sobe a FC; se não sobe, corrige-se a técnica (máscara, posição, pressão, aspiração) antes de qualquer outro passo.</p>
<p>Se após 30 segundos de ventilação eficaz a FC continua abaixo de <strong>60 bpm</strong>, intuba-se, passa-se o oxigênio a 100% e inicia-se a <strong>massagem cardíaca</strong> no terço inferior do esterno, com os dois polegares, na relação de 3 compressões para 1 ventilação, por 60 segundos antes de reavaliar. Persistindo a FC abaixo de 60, é a hora da <strong>adrenalina</strong>: 0,01 a 0,03 mg/kg (0,1 a 0,3 mL/kg da solução 1:10.000) pela <strong>veia umbilical</strong>, repetida a cada 3 a 5 minutos. Enquanto o cateter é inserido, uma dose única pode ir pela cânula traqueal, em dose maior (0,05 a 0,1 mg/kg), com absorção imprevisível. A via intraóssea é a opção fora da sala de parto ou quando o umbigo não é acessível.</p>
<p>O <strong>expansor de volume</strong> — soro fisiológico 10 mL/kg em 5 a 10 minutos, pela veia umbilical — é indicado quando há sinais de choque hipovolêmico (palidez, pulsos fracos, história de sangramento) sem resposta à reanimação. Hipoglicemia e hipotermia são procuradas e tratadas na estabilização pós-reanimação, com encaminhamento à UTI neonatal.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prática, a maior parte das falhas de reanimação é falha de <strong>ventilação</strong>: antes de intubar ou medicar, a equipe revisa os passos "MR SOPA" — ajuste da máscara, reposicionamento, sucção, abertura da boca, aumento da pressão e outra via aérea.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Avaliar FC e respiração a cada 30 segundos; VPP se apneia ou FC menor que 100.</li>
<li>FC menor que 60 após VPP eficaz: intubar, oxigênio a 100%, massagem 3:1 por 60 segundos.</li>
<li>FC ainda menor que 60: adrenalina 0,01–0,03 mg/kg pela veia umbilical, a cada 3–5 minutos.</li>
<li>Traqueal só como ponte; intraóssea como saída; expansor se hipovolemia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN com FC de 80 bpm após 30 segundos de VPP com máscara. Próximo passo? <details><summary>Resposta</summary>Corrigir a técnica da ventilação e manter a VPP; massagem só com FC abaixo de 60 após ventilação eficaz.</details></li>
<li>Qual é a dose venosa de adrenalina na reanimação neonatal? <details><summary>Resposta</summary>0,01 a 0,03 mg/kg, isto é, 0,1 a 0,3 mL/kg da solução 1:10.000, pela veia umbilical.</details></li>
</ol>
`,

"sirio2026#60": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os princípios do atendimento ao adolescente: privacidade, confidencialidade e autonomia.</li>
<li>Reconhecer as situações em que o sigilo deve ser quebrado.</li>
<li>Conduzir a consulta com e sem os pais, respeitando a lei e a ética.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Privacidade</dt>
<dd>O direito do adolescente de ser atendido sozinho em parte da consulta.</dd>
<dt>Confidencialidade</dt>
<dd>O compromisso de não revelar o que foi dito, inclusive aos pais, salvo risco relevante.</dd>
<dt>Discernimento</dt>
<dd>Capacidade de compreender a situação e as consequências das escolhas; condição para a autonomia.</dd>
<dt>Quebra justificada do sigilo</dt>
<dd>Risco de vida ou de dano grave a si ou a terceiros, abuso, violência, gravidez com risco, incapacidade de autocuidado.</dd>
</dl>
<h4>O essencial</h4>
<p>O adolescente tem direito a ser atendido <strong>sem a presença dos pais</strong>, se assim desejar, e a ter suas informações mantidas em sigilo: é o que dizem o Estatuto da Criança e do Adolescente, o Código de Ética Médica (art. 74) e os documentos do Ministério da Saúde e da SBP. A lógica é prática: sem a garantia de confidencialidade, o adolescente não procura o serviço nem conta o que importa — sexualidade, uso de substâncias, sofrimento psíquico, violência —, e é justamente isso que o profissional precisa saber para protegê-lo. Idealmente, a consulta tem um momento com a família e outro a sós com o jovem, e no início se explicam as regras do sigilo e seus limites.</p>
<p>A autonomia é proporcional ao <strong>discernimento</strong>: um adolescente que compreende seu problema e as consequências das escolhas pode decidir sobre contracepção, teste e tratamento de IST e outras condições que ele mesmo consiga manejar. A participação da família deve ser <strong>estimulada</strong>, nunca imposta, e a ausência dos pais não impede o atendimento — o profissional registra que atendeu o adolescente sozinho, com o consentimento dele.</p>
<p>O sigilo é a regra, e a <strong>quebra</strong> é a exceção, sempre justificada e, sempre que possível, comunicada ao adolescente antes: risco de morte (ideação suicida com plano, doença grave que ele não consegue tratar sozinho), abuso ou violência sexual (notificação compulsória), uso de drogas com risco de vida, gravidez de risco, recusa de tratamento essencial, incapacidade de compreender. Mesmo então, revela-se apenas o necessário para proteger. Comportamento sexual consentido e protegido, orientação sexual e contracepção não são motivo de quebra.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a quebra for necessária, o caminho é: avisar o adolescente, explicar o motivo, oferecer que ele conte primeiro e com apoio, e envolver só quem precisa saber. Chamar os pais escondido ou condicionar o atendimento à presença deles destrói o vínculo e expulsa o jovem do serviço.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Privacidade e confidencialidade são direitos do adolescente; explique-os no início da consulta.</li>
<li>Autonomia proporcional ao discernimento; família estimulada, não imposta.</li>
<li>Quebra do sigilo só por risco grave, abuso, violência ou incapacidade — e comunicada ao adolescente.</li>
<li>Sexualidade consentida e protegida não é motivo de quebra.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Adolescente de 15 anos pede contraceptivo e exige sigilo; tem discernimento. É possível prescrever sem os pais? <details><summary>Resposta</summary>Sim: contracepção é decisão dentro da autonomia do adolescente com discernimento, com registro em prontuário.</details></li>
<li>Adolescente de 16 anos relata ideação suicida com plano definido e pede segredo. O que fazer? <details><summary>Resposta</summary>Quebrar o sigilo, avisando-o antes: risco de vida é exceção obrigatória, e a família precisa ser envolvida na proteção.</details></li>
</ol>
`,

/* --- Volume 2 · Sírio-Libanês 2027 → ped66–ped80 ----------------------------------------- */
"sirio2027#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir obstrução leve de grave da via aérea por corpo estranho.</li>
<li>Executar as manobras de desobstrução no lactente e na criança.</li>
<li>Saber o que fazer quando a vítima perde a consciência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tosse eficaz</dt>
<dd>Vítima que tosse com força, chora ou fala e respira: obstrução leve — só estimular a tosse e observar.</dd>
<dt>Tosse ineficaz</dt>
<dd>Não consegue tossir, falar ou chorar, cianose, consciência preservada: obstrução grave — manobras imediatas.</dd>
<dt>Golpes dorsais</dt>
<dd>Cinco tapas firmes entre as escápulas, com a cabeça mais baixa que o tronco.</dd>
<dt>Compressões torácicas (lactente)</dt>
<dd>Cinco compressões no terço inferior do esterno, com dois dedos, substituindo o Heimlich abaixo de 1 ano.</dd>
<dt>Compressões abdominais (criança)</dt>
<dd>Manobra de Heimlich: punho entre umbigo e apêndice xifoide, compressões rápidas para dentro e para cima.</dd>
</dl>
<h4>O essencial</h4>
<p>O engasgo é a principal causa de morte acidental em menores de 4 anos, e os vilões são alimentos redondos e firmes — salsicha, uva, amendoim, pipoca, balas — e objetos pequenos. A avaliação é imediata e visual: a criança que <strong>tosse com força</strong>, chora ou fala tem obstrução leve, e a melhor conduta é <strong>não interferir</strong>, estimular a tosse, ficar ao lado e observar até o alívio ou a piora. A criança que <strong>não consegue tossir, chorar ou respirar</strong>, com cianose e as mãos no pescoço, tem obstrução grave e precisa de manobras agora.</p>
<p>No <strong>lactente</strong> (menos de 1 ano), apoiado de bruços sobre o antebraço, com a cabeça baixa: <strong>5 golpes dorsais</strong>; vira-se de costas e aplicam-se <strong>5 compressões torácicas</strong> no esterno, lentas e fortes; alterna-se até o alívio. O Heimlich é contraindicado no lactente pelo risco de lesão hepática e esplênica. Na <strong>criança</strong> (1 ano ou mais), em pé ou sentada, o socorrista por trás: <strong>5 golpes dorsais</strong> seguidos de <strong>5 compressões abdominais</strong> (ERC/ILCOR), ou diretamente as compressões abdominais repetidas (AHA), até o corpo estranho sair.</p>
<p>Se a vítima <strong>perde a consciência</strong>, coloca-se no chão, chama-se ajuda e começa-se a <strong>RCP</strong>: 30 compressões (15:2 com dois socorristas), abertura da via aérea, olhar a boca e remover o objeto apenas se visível — nunca varredura às cegas —, 2 ventilações, e assim por diante; as compressões torácicas geram pressão que pode expulsar o corpo estranho. Depois da desobstrução, toda criança que recebeu compressões abdominais é avaliada por médico por causa do risco de lesão interna.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Prevenção é a melhor manobra: cortar salsicha e uva em quatro no sentido longitudinal, evitar amendoim, pipoca e balas duras até os 4 anos, não deixar a criança comer correndo ou deitada, e guardar peças pequenas longe do alcance. Oriente isso em toda consulta de puericultura.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tosse eficaz: não interferir, observar. Tosse ineficaz e consciente: manobras.</li>
<li>Lactente: 5 golpes dorsais + 5 compressões torácicas; sem Heimlich.</li>
<li>Criança: 5 golpes dorsais + 5 compressões abdominais (ou Heimlich direto), até sair.</li>
<li>Inconsciente: RCP; olhar a boca antes de ventilar; nunca dedo às cegas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 8 meses engasgado, cianótico, sem choro. Qual é a sequência? <details><summary>Resposta</summary>5 golpes dorsais de bruços e 5 compressões torácicas de costas, alternando até desobstruir ou perder a consciência.</details></li>
<li>Criança de 5 anos tossindo forte depois de engasgar com amendoim. O que fazer? <details><summary>Resposta</summary>Nada além de estimular a tosse e observar: a tosse eficaz é a melhor manobra; intervir pode piorar a obstrução.</details></li>
</ol>
`,

"sirio2027#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Montar o raciocínio da anemia microcítica a partir do hemograma e da cinética do ferro.</li>
<li>Distinguir deficiência de ferro, anemia da inflamação e as duas juntas.</li>
<li>Interpretar a ferritina como proteína de fase aguda e usar os cortes da OMS.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ferritina</dt>
<dd>Reflete os estoques de ferro, mas sobe na inflamação; corte de depleção: 12 µg/L (menores de 5 anos), 15 (5 anos ou mais), 30 na inflamação.</dd>
<dt>Capacidade total de ligação do ferro</dt>
<dd>Medida indireta da transferrina: alta na ferropenia, baixa na inflamação.</dd>
<dt>Saturação da transferrina</dt>
<dd>Ferro sérico dividido pela TIBC; baixa nas duas condições, por isso não as separa.</dd>
<dt>Hepcidina</dt>
<dd>Hormônio hepático que, induzido pela interleucina-6, bloqueia a saída do ferro dos enterócitos e macrófagos.</dd>
</dl>
<h4>O essencial</h4>
<p>Anemia microcítica e hipocrômica na criança tem três causas a considerar: <strong>deficiência de ferro</strong> (a mais comum do mundo), <strong>anemia da doença crônica</strong> ou da inflamação e <strong>talassemia menor</strong>. A história ajuda — aleitamento prolongado sem suplementação, excesso de leite de vaca, prematuridade, sangramentos apontam para ferropenia; artrite, infecção crônica, doença inflamatória intestinal e neoplasia apontam para inflamação; ancestralidade e microcitose desproporcional à anemia, com RDW normal e índice de Mentzer baixo, para talassemia.</p>
<p>A <strong>cinética do ferro</strong> faz a separação. Na <strong>ferropenia</strong>, os estoques estão vazios: ferritina baixa, ferro sérico baixo, <strong>TIBC alta</strong> (o fígado produz mais transferrina para captar o pouco ferro), saturação baixa, RDW alto. Na <strong>inflamação</strong>, a interleucina-6 eleva a <strong>hepcidina</strong>, que tranca o ferro nos macrófagos e nos enterócitos: ferro sérico baixo, mas <strong>ferritina normal ou alta</strong> — porque é proteína de fase aguda — e <strong>TIBC baixa</strong>; a anemia costuma ser leve, normocítica ou discretamente microcítica. Quando as duas coexistem, o que acontece em doenças crônicas com sangramento ou má absorção, a ferritina fica em zona intermediária, e por isso a OMS recomenda o corte de <strong>30 µg/L</strong> em quem tem infecção ou inflamação; o receptor solúvel de transferrina, que não sobe na inflamação, ajuda a confirmar o componente ferroprivo.</p>
<p>A conduta segue a causa: na ferropenia, ferro oral 3 a 5 mg/kg/dia de ferro elementar por 3 a 6 meses após normalizar a hemoglobina, mais a correção da dieta; na inflamação, tratar a doença de base — ferro não corrige, porque o problema é distribuição, não estoque. A resposta ao ferro (reticulócitos em 7 a 10 dias, hemoglobina em 4 semanas) é o teste terapêutico que confirma a ferropenia quando o laboratório é ambíguo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Peça a PCR junto com a ferritina: uma ferritina "normal" com PCR elevada não exclui deficiência de ferro. E lembre que a plaquetose reativa acompanha tanto a ferropenia quanto a inflamação — não decide nada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Microcitose: ferropenia, inflamação ou talassemia menor; história e índices orientam.</li>
<li>Ferropenia: ferritina baixa, TIBC alta. Inflamação: ferritina normal ou alta, TIBC baixa; hepcidina é o mecanismo.</li>
<li>Cortes da OMS: ferritina abaixo de 12 (menor de 5 anos), 15 (5 anos ou mais), 30 na inflamação.</li>
<li>Ferropenia: ferro oral e dieta; inflamação: tratar a causa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 18 meses, leite de vaca 1 litro por dia, Hb 9, VCM 62, ferritina 6, TIBC 450. Diagnóstico? <details><summary>Resposta</summary>Anemia ferropriva: estoques vazios (ferritina baixa) e transferrina alta (TIBC elevada).</details></li>
<li>Qual marcador do ferro não se altera com a inflamação e ajuda a detectar ferropenia escondida? <details><summary>Resposta</summary>O receptor solúvel de transferrina.</details></li>
</ol>
`,

"sirio2027#44": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Calcular os volumes do Plano C para a criança acima e abaixo de 1 ano.</li>
<li>Reavaliar durante a reidratação venosa e decidir quando passar ao soro oral.</li>
<li>Reconhecer a hipernatremia e a hiponatremia que complicam a diarreia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ringer lactato</dt>
<dd>Solução cristaloide balanceada, preferida pela OMS no Plano C; o soro fisiológico também serve.</dd>
<dt>Fase de expansão</dt>
<dd>Os primeiros 30 mL/kg, em 30 minutos (1 ano ou mais) ou 1 hora (menor de 1 ano).</dd>
<dt>Fase de reposição</dt>
<dd>Os 70 mL/kg seguintes, em 2 horas e 30 minutos (1 ano ou mais) ou 5 horas (menor de 1 ano).</dd>
<dt>Reclassificação</dt>
<dd>Ao fim do Plano C, nova avaliação do estado de hidratação para escolher o plano seguinte.</dd>
</dl>
<h4>O essencial</h4>
<p>O <strong>Plano C</strong> trata a desidratação grave — letargia, incapacidade de beber, pulsos fracos, prega lenta, enchimento capilar prolongado — e repõe por via venosa cerca de <strong>100 mL/kg</strong>, o déficit de uma perda de 10% do peso, em tempos que dependem da idade. Para a criança de <strong>1 ano ou mais</strong>: 30 mL/kg em 30 minutos e 70 mL/kg em 2 horas e 30 minutos (total em 3 horas). Para o <strong>menor de 1 ano</strong>: 30 mL/kg em 1 hora e 70 mL/kg em 5 horas (total em 6 horas). A solução é ringer lactato ou soro fisiológico, por veia periférica calibrosa ou, se o acesso falha em poucos minutos, por via intraóssea.</p>
<p>A <strong>reavaliação</strong> é contínua, a cada 15 a 30 minutos: pulso, enchimento capilar, nível de consciência, diurese. Se após a fase de expansão o pulso radial continua fraco ou impalpável, a expansão se <strong>repete</strong>. Assim que a criança está acordada e consegue beber — em geral na segunda fase —, o <strong>soro oral</strong> começa em paralelo (cerca de 5 mL/kg/h), e ao término das 3 ou 6 horas ela é <strong>reclassificada</strong>: se ainda desidratada, Plano B; se hidratada, Plano A, com alimentação, zinco e observação por algumas horas antes da alta.</p>
<p>Duas complicações pedem atenção. A <strong>hipernatremia</strong> (sódio acima de 150), com irritabilidade, sede intensa e pele pastosa, exige correção lenta — queda do sódio de no máximo 10 a 12 mEq/L por dia, porque a queda rápida causa edema cerebral. A <strong>hiponatremia</strong> grave (abaixo de 125), com convulsão, trata-se com salina a 3%, 3 a 5 mL/kg. Também se monitora o potássio (a diarreia o depleta; o soro de manutenção recebe potássio quando a criança urina) e a glicemia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pese a criança na chegada e na saída: a diferença é a melhor medida do déficit reposto. E não confunda os tempos: o bolo de 20 mL/kg em 5 a 20 minutos é a expansão do <strong>choque</strong> — se a criança desidratada estiver hipotensa, ela está em choque hipovolêmico e recebe esse bolo primeiro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Plano C: 100 mL/kg venosos em 3 horas (1 ano ou mais) ou 6 horas (menor de 1 ano).</li>
<li>Expansão de 30 mL/kg: 30 min ou 1 h; reposição de 70 mL/kg: 2 h 30 ou 5 h; repetir a expansão se o pulso segue fraco.</li>
<li>Soro oral assim que beber; reclassificar ao fim e seguir para B ou A.</li>
<li>Corrigir sódio devagar; potássio no soro quando urinar; glicemia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 2 anos, 12 kg, no Plano C. Quais são os volumes e os tempos? <details><summary>Resposta</summary>360 mL em 30 minutos e 840 mL em 2 horas e 30 minutos, com reavaliação a cada 15 a 30 minutos.</details></li>
<li>Após 3 horas de Plano C a criança está alerta, bebendo, com prega normal e pulsos cheios. Próximo passo? <details><summary>Resposta</summary>Reclassificar como hidratada e passar ao Plano A, com alimentação, zinco e observação antes da alta.</details></li>
</ol>
`,

"sirio2027#45": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a regra PECARN nas duas faixas etárias (menores e maiores de 2 anos).</li>
<li>Decidir entre alta, observação e tomografia no traumatismo craniano leve.</li>
<li>Orientar a família sobre sinais de alarme e retorno.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>TCE leve</dt>
<dd>Glasgow 14 ou 15 na avaliação inicial; 95% dos traumatismos cranianos da infância.</dd>
<dt>Lesão clinicamente importante</dt>
<dd>A que exige neurocirurgia, intubação, internação por mais de 2 noites ou causa morte: é o que a PECARN prevê.</dd>
<dt>Mecanismo grave</dt>
<dd>Queda de mais de 1,5 m (0,9 m abaixo de 2 anos), atropelamento, ejeção de veículo, impacto por objeto de alta energia.</dd>
<dt>Observação</dt>
<dd>Vigilância de 4 a 6 horas no serviço, no lugar da tomografia no grupo de risco intermediário.</dd>
</dl>
<h4>O essencial</h4>
<p>A tomografia de crânio detecta lesões, mas expõe o cérebro em desenvolvimento a radiação com risco mensurável de câncer ao longo da vida, e a maioria das crianças com traumatismo leve não tem nada a tratar. A regra <strong>PECARN</strong>, derivada e validada em mais de 42 mil crianças, identifica quem tem risco <strong>muito baixo</strong> de lesão clinicamente importante e pode ir para casa sem imagem.</p>
<p>Para <strong>2 anos ou mais</strong>, os preditores são: Glasgow 14 ou alteração do estado mental (agitação, sonolência, resposta lenta); sinais de <strong>fratura de base de crânio</strong> (hemotímpano, olhos de guaxinim, sinal de Battle, rinorreia ou otorreia de líquor); perda de consciência; vômitos; cefaleia intensa; mecanismo grave. Os dois primeiros são de <strong>alto risco</strong> (4% de lesão) e indicam tomografia; os quatro seguintes são de <strong>risco intermediário</strong> (0,9%), em que se escolhe entre observar por 4 a 6 horas e tomografar, pesando idade, achados múltiplos, piora durante a observação e preferência dos pais; sem nenhum deles, o risco é menor que 0,05% e a criança recebe <strong>alta</strong>.</p>
<p>Para <strong>menores de 2 anos</strong>, os preditores mudam: Glasgow 14 ou alteração do estado mental e <strong>fratura palpável</strong> de crânio são de alto risco; hematoma de couro cabeludo não frontal (occipital, parietal ou temporal), perda de consciência de 5 segundos ou mais, mecanismo grave e "não agir normalmente" segundo os pais são de risco intermediário. A radiografia de crânio não tem lugar em nenhuma faixa: fratura linear sem sinais não muda conduta e a ausência de fratura não exclui lesão intracraniana.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A alta vem com <strong>orientações escritas</strong>: retornar imediatamente se houver vômitos repetidos, sonolência excessiva ou dificuldade para acordar, convulsão, cefaleia progressiva, alteração da fala ou da marcha, saída de líquido pelo nariz ou ouvido. Em menores de 2 anos, hematoma que cresce também é motivo de retorno.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>PECARN separa alto risco (tomografia), intermediário (observar ou tomografar) e muito baixo (alta).</li>
<li>2 anos ou mais: Glasgow 14/estado mental e fratura de base = alto; perda de consciência, vômitos, cefaleia intensa, mecanismo grave = intermediário.</li>
<li>Menores de 2 anos: fratura palpável e estado mental = alto; hematoma não frontal, perda de consciência maior que 5 s, mecanismo grave, comportamento anormal = intermediário.</li>
<li>Radiografia de crânio não faz parte da avaliação; alta com sinais de alarme por escrito.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 10 meses caiu do sofá (60 cm), está normal, mas tem hematoma parietal grande. Conduta? <details><summary>Resposta</summary>Risco intermediário (hematoma não frontal em menor de 2 anos): observar por 4 a 6 horas ou tomografar, conforme evolução e preferência dos pais.</details></li>
<li>Menina de 6 anos com TCE leve apresenta hemotímpano. Conduta? <details><summary>Resposta</summary>Tomografia de crânio imediata: sinal de fratura de base de crânio é preditor de alto risco.</details></li>
</ol>
`,

"sirio2027#46": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar os mecanismos do cateter nasal de alto fluxo.</li>
<li>Posicionar o alto fluxo na escala de suporte respiratório da bronquiolite.</li>
<li>Reconhecer falha do alto fluxo e indicar a escalada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cateter nasal de alto fluxo</dt>
<dd>Gás aquecido (37 °C) e umidificado (100%), em fluxo acima do pico inspiratório, por cânulas que ocupam até metade das narinas.</dd>
<dt>Efeito CPAP-like</dt>
<dd>Pressão positiva variável (2 a 6 cmH₂O) gerada pelo fluxo, dependente do escape pela boca e do tamanho da cânula.</dd>
<dt>Lavagem do espaço morto</dt>
<dd>O fluxo alto renova o gás da nasofaringe, reduz a reinalação de CO₂ e melhora a ventilação alveolar efetiva.</dd>
<dt>Falha do alto fluxo</dt>
<dd>Persistência de FR, FC e tiragem elevadas, saturação abaixo de 92% com FiO₂ acima de 40 a 50%, apneias ou acidose: escalar para VNI ou intubação.</dd>
</dl>
<h4>O essencial</h4>
<p>O <strong>cateter nasal de alto fluxo</strong> entrega uma mistura de ar e oxigênio em fluxos de <strong>1 a 2 L/kg/min</strong> (até 20 a 25 L/min no lactente), aquecida e umidificada. Seus efeitos são físicos e fisiológicos: o fluxo alto <strong>lava o espaço morto</strong> da nasofaringe, de modo que cada inspiração traz menos CO₂ reinalado; o fluxo acima da demanda inspiratória mantém uma <strong>pressão positiva</strong> leve e contínua que ajuda a recrutar alvéolos e a diminuir o colapso expiratório; a <strong>FiO₂</strong> entregue fica estável, porque o paciente não dilui o gás com ar ambiente; e o gás aquecido e úmido reduz a resistência nasal, preserva o muco e o epitélio e diminui o gasto metabólico de condicionar o ar. O resultado é a queda do <strong>trabalho respiratório</strong> em 60 a 90 minutos quando funciona.</p>
<p>Na <strong>bronquiolite</strong>, a escala de suporte começa com higiene nasal e oxigênio em baixo fluxo quando a saturação cai abaixo de 90 a 92%. O alto fluxo entra como <strong>resgate</strong> para o lactente que mantém desconforto ou hipoxemia apesar do baixo fluxo: o ensaio PARIS mostrou que ele reduz a falha terapêutica e a necessidade de transferência para UTI, sem encurtar a internação nem reduzir intubações. Não é, portanto, primeira linha para todo lactente, e não substitui a VNI quando há insuficiência respiratória estabelecida.</p>
<p>O monitoramento é clínico: frequência respiratória, frequência cardíaca, tiragem, saturação e nível de consciência na primeira hora e depois a cada 2 a 4 horas. <strong>Falha</strong> — ausência de melhora em 1 a 2 horas, FiO₂ acima de 40 a 50%, apneias, gasometria com acidose respiratória, exaustão — indica escalar para CPAP ou BiPAP e, se necessário, intubação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A cânula deve ocupar no máximo <strong>metade</strong> do diâmetro da narina: cânula justa transforma o alto fluxo em CPAP sem válvula de segurança e aumenta o risco de barotrauma; cânula frouxa perde o efeito de pressão. E a criança continua podendo mamar com o alto fluxo instalado — vantagem sobre o CPAP.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Alto fluxo = 1 a 2 L/kg/min de gás aquecido e umidificado.</li>
<li>Mecanismos: lavagem do espaço morto, efeito CPAP-like, FiO₂ estável, menor trabalho respiratório.</li>
<li>Na bronquiolite é resgate após o baixo fluxo; reduz falha terapêutica, não encurta internação.</li>
<li>Sem melhora em 1 a 2 horas, FiO₂ acima de 40 a 50% ou apneias: VNI ou intubação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 6 kg com bronquiolite em alto fluxo. Qual é o fluxo inicial? <details><summary>Resposta</summary>12 L/min (2 L/kg/min), com FiO₂ titulada para saturação de 92 a 97%.</details></li>
<li>Após 2 horas de alto fluxo o lactente mantém FR de 75, tiragem intensa e precisa de FiO₂ de 60%. O que fazer? <details><summary>Resposta</summary>Falha do alto fluxo: escalar para VNI (CPAP ou BiPAP) e preparar para intubação se não houver resposta.</details></li>
</ol>
`,

"sirio2027#47": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer as grandes síndromes toxicológicas pelo exame físico.</li>
<li>Tratar a síndrome colinérgica: suporte, atropina e pralidoxima.</li>
<li>Saber quando a descontaminação gástrica ajuda e quando atrapalha.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome colinérgica</dt>
<dd>Excesso de acetilcolina: salivação, lacrimejamento, diurese, diarreia, miose, broncorreia, bradicardia, fasciculações e convulsão.</dd>
<dt>Organofosforados e carbamatos</dt>
<dd>Inseticidas que inibem a acetilcolinesterase; o carbamato se solta da enzima em horas, o organofosforado "envelhece" e fixa a inibição.</dd>
<dt>Atropina</dt>
<dd>Antagonista muscarínico: seca as secreções e reverte a bradicardia; dose repetida até a ausculta ficar limpa.</dd>
<dt>Pralidoxima</dt>
<dd>Oxima que reativa a colinesterase ainda não envelhecida; só para organofosforados, nas primeiras horas.</dd>
</dl>
<h4>O essencial</h4>
<p>A criança intoxicada raramente chega com o rótulo do produto; chega com uma <strong>síndrome</strong>. A <strong>colinérgica</strong> é a mais exuberante: secreções por todos os orifícios (sialorreia, lacrimejamento, rinorreia, broncorreia, vômitos, diarreia, incontinência), <strong>miose puntiforme</strong>, bradicardia, sibilos e roncos, sudorese — efeitos muscarínicos — somados a <strong>fasciculações</strong>, fraqueza e paralisia — efeitos nicotínicos — e a agitação, convulsão e coma — efeitos centrais. A morte vem pela via aérea afogada em secreção e pela paralisia respiratória.</p>
<p>O tratamento começa pelo <strong>suporte</strong>: via aérea (intubação precoce se Glasgow baixo ou hipoxemia — evitando a succinilcolina, que a colinesterase inibida não degrada), oxigênio, aspiração, monitorização, e <strong>descontaminação externa</strong> com retirada das roupas e lavagem da pele, protegendo a equipe. A <strong>atropina</strong> é o antídoto da emergência: 0,02 a 0,05 mg/kg venosa, dobrando a dose a cada 3 a 5 minutos até a <strong>ausculta pulmonar limpa</strong> e a frequência cardíaca acima de 80 — o alvo é a secreção, não a pupila. Doses totais altas são frequentes e esperadas.</p>
<p>A <strong>descontaminação gástrica</strong> tem papel menor: carvão ativado apenas na primeira hora e com via aérea protegida; lavagem gástrica raramente se justifica e nunca antes da estabilização. A observação dura ao menos 24 a 48 horas pela possibilidade de síndrome intermediária (paralisia proximal 24 a 96 horas depois) e de recorrência quando o veneno é liberado dos depósitos de gordura.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>As outras síndromes ajudam a não errar: a <strong>anticolinérgica</strong> (anti-histamínicos, tricíclicos, plantas) é o espelho — pele seca e quente, midríase, taquicardia, retenção urinária, delírio; a <strong>opioide</strong> é miose com depressão respiratória e sem secreções; a <strong>simpaticomimética</strong> é midríase com taquicardia, hipertensão e agitação. Pupila e pele decidem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Secreções, miose, bradicardia, fasciculações e coma = síndrome colinérgica = organofosforado ou carbamato.</li>
<li>Primeiro suporte e descontaminação da pele; depois atropina até secar o pulmão.</li>
<li>Pralidoxima só no organofosforado, cedo; benzodiazepínico para convulsão.</li>
<li>Carvão só na primeira hora com via aérea protegida; observar 24 a 48 horas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o parâmetro que guia a dose de atropina na intoxicação por organofosforado? <details><summary>Resposta</summary>A ausculta pulmonar: repete-se até as secreções brônquicas secarem (e a frequência cardíaca subir), não até a pupila dilatar.</details></li>
<li>Criança com midríase, pele seca e quente, taquicardia e delírio após ingerir um xarope. Que síndrome e que classe de droga? <details><summary>Resposta</summary>Síndrome anticolinérgica, típica de anti-histamínicos; o tratamento é suporte e benzodiazepínico para a agitação.</details></li>
</ol>
`,

"sirio2027#48": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a epidemiologia do VSR e por que o lactente pequeno é o mais vulnerável.</li>
<li>Comparar as três estratégias de proteção: vacina materna, nirsevimabe e palivizumabe.</li>
<li>Saber quem recebe o quê no Brasil a partir de 2025.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Vírus sincicial respiratório</dt>
<dd>Principal causa de bronquiolite e de internação em menores de 1 ano; quase todas as crianças se infectam até os 2 anos.</dd>
<dt>Vacina RSVpreF</dt>
<dd>Proteína F pré-fusão recombinante, dose única na gestação; os anticorpos cruzam a placenta e protegem o lactente por cerca de 6 meses.</dd>
<dt>Nirsevimabe</dt>
<dd>Anticorpo monoclonal de meia-vida longa contra a proteína F; dose única intramuscular protege por toda a temporada.</dd>
<dt>Palivizumabe</dt>
<dd>Anticorpo monoclonal de primeira geração; cinco doses mensais, restrito a prematuros extremos e cardiopatas.</dd>
</dl>
<h4>O essencial</h4>
<p>O VSR circula no Brasil sobretudo entre fevereiro e julho (mais cedo no Norte e Nordeste) e causa a maior parte das bronquiolites e das pneumonias virais do lactente; o risco de internação é maior nos <strong>primeiros 6 meses</strong>, e a doença grave acomete também bebês a termo e saudáveis, não só os prematuros. A imunidade não é duradoura, e as reinfecções ao longo da vida costumam ser leves. Não há antiviral útil, e por isso a prevenção passou a ser o eixo do manejo.</p>
<p>A primeira estratégia é a <strong>vacina da gestante</strong>: a RSVpreF, incorporada ao calendário do PNI em 2025, em <strong>dose única entre a 28ª e a 36ª semana</strong>, em qualquer mês do ano. Os anticorpos maternos atravessam a placenta nas últimas semanas, e o bebê nasce protegido pelos primeiros meses; a eficácia contra doença grave fica em torno de 70 a 80%. A segunda é o <strong>nirsevimabe</strong>, anticorpo monoclonal de ação prolongada, em dose única intramuscular: no SUS, dirigido aos lactentes de maior risco — <strong>prematuros</strong>, portadores de cardiopatia com repercussão, pneumopatia crônica, imunodeficiência — e indicado pelas sociedades também quando a mãe não foi vacinada ou o parto ocorreu menos de 14 dias após a vacina. O recém-nascido a termo de mãe vacinada em tempo hábil está, em geral, protegido pela vacina e não precisa do anticorpo. O <strong>palivizumabe</strong>, com cinco doses mensais na temporada, foi a estratégia histórica para prematuros abaixo de 29 semanas e cardiopatas até 2 anos, e vem sendo substituído pelo nirsevimabe.</p>
<p>Além da imunização, as medidas de sempre: aleitamento materno, evitar tabagismo domiciliar, lavar as mãos, afastar o lactente de pessoas com sintomas respiratórios e vacinar a família contra influenza e coqueluche.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na consulta de pré-natal e na primeira consulta do recém-nascido, pergunte: a mãe tomou a vacina do VSR? Em que semana? O bebê é prematuro ou cardiopata? A resposta decide se ele é candidato ao nirsevimabe antes da temporada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>VSR: maior causa de internação do lactente; risco maior nos primeiros 6 meses.</li>
<li>Vacina da gestante (RSVpreF): dose única, 28 a 36 semanas, o ano todo, no PNI desde 2025.</li>
<li>Nirsevimabe: dose única para prematuros e grupos de risco, ou se a mãe não foi vacinada a tempo.</li>
<li>Palivizumabe: cinco doses mensais, estratégia antiga em substituição.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Recém-nascido a termo, saudável, de mãe vacinada com RSVpreF na 32ª semana. Precisa de nirsevimabe? <details><summary>Resposta</summary>Em geral não: a vacina materna aplicada com mais de 14 dias antes do parto confere proteção suficiente.</details></li>
<li>Prematuro de 30 semanas cuja mãe não se vacinou. Qual é a proteção indicada? <details><summary>Resposta</summary>Nirsevimabe em dose única antes ou no início da temporada do VSR.</details></li>
</ol>
`,

"sirio2027#49": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as vacinas do calendário do PNI no primeiro ano de vida.</li>
<li>Explicar a mudança da poliomielite: por que só VIP e desde quando.</li>
<li>Reconhecer as vacinas do segundo ano e os reforços.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>VIP</dt>
<dd>Vacina inativada contra a poliomielite, injetável; esquema de 2, 4, 6 e 15 meses desde 2024.</dd>
<dt>VOP</dt>
<dd>Vacina oral atenuada (Sabin); retirada do calendário em 2024 pelo risco raro de paralisia associada à vacina.</dd>
<dt>Pentavalente</dt>
<dd>DTP + hepatite B + Hib, aos 2, 4 e 6 meses.</dd>
<dt>Reforços</dt>
<dd>DTP e VIP aos 15 meses; DTP aos 4 anos.</dd>
</dl>
<h4>O essencial</h4>
<p>O Calendário Nacional de Vacinação começa na maternidade com <strong>BCG</strong> e <strong>hepatite B</strong>. Aos <strong>2 meses</strong> entram pentavalente, VIP, pneumocócica 10-valente e rotavírus; aos <strong>3 meses</strong>, meningocócica C; aos <strong>4 meses</strong>, segunda dose de pentavalente, VIP, pneumocócica e rotavírus; aos <strong>5 meses</strong>, meningocócica C; aos <strong>6 meses</strong>, terceira dose de pentavalente e VIP, e a influenza a partir dos 6 meses na campanha; aos <strong>9 meses</strong>, febre amarela; aos <strong>12 meses</strong>, tríplice viral, reforço da pneumocócica e meningocócica C; aos <strong>15 meses</strong>, tetraviral, DTP, VIP e hepatite A; aos <strong>4 anos</strong>, DTP, febre amarela e varicela.</p>
<p>A <strong>poliomielite</strong> mudou em 2024. Até então o esquema básico já era com a VIP (2, 4 e 6 meses), mas os reforços de 15 meses e 4 anos e as campanhas usavam a VOP, a gotinha. Com a certificação do Brasil como livre do vírus selvagem desde 1994 e a recomendação da OMS para países sem circulação, a VOP foi retirada: o único risco remanescente era o da <strong>poliomielite associada à vacina</strong> (cerca de 1 caso por 2,4 milhões de doses) e dos vírus derivados da vacina em populações com baixa cobertura. Hoje o esquema é <strong>exclusivamente VIP</strong>: três doses aos 2, 4 e 6 meses e um reforço aos 15 meses, intramuscular. A VIP protege contra os três sorotipos e não causa paralisia vacinal; a desvantagem, menor imunidade intestinal, é aceitável onde não há vírus circulando.</p>
<p>Atrasos se recuperam sem reiniciar o esquema, respeitando os intervalos mínimos (30 dias entre doses da VIP). Crianças com imunodeficiência ou contato domiciliar de imunodeprimidos sempre receberam VIP, e isso não mudou; a diferença é que agora todas recebem.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Confira a caderneta em toda consulta e aproveite a oportunidade: a criança que veio por um resfriado leve pode e deve ser vacinada. Febre baixa e doença leve não são contraindicação; adiar por "estar gripado" é a maior causa evitável de atraso vacinal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>2 meses: pentavalente, VIP, pneumocócica 10, rotavírus; 3 e 5 meses: meningocócica C.</li>
<li>Poliomielite só com VIP desde 2024: 2, 4, 6 e 15 meses; a gotinha saiu.</li>
<li>12 meses: tríplice viral e reforços; 15 meses: tetraviral, DTP, VIP, hepatite A.</li>
<li>Atraso se recupera sem reiniciar; doença leve não contraindica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 7 meses sem nenhuma dose contra poliomielite. Como fica o esquema? <details><summary>Resposta</summary>Três doses de VIP com intervalo mínimo de 30 dias e reforço aos 15 meses (ou 6 meses após a terceira), sem VOP.</details></li>
<li>Por que a VOP foi retirada do calendário brasileiro? <details><summary>Resposta</summary>Porque, sem circulação do vírus selvagem, o único risco que restava era a paralisia associada à própria vacina oral.</details></li>
</ol>
`,

"sirio2027#50": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir crise febril simples e complexa.</li>
<li>Decidir quem precisa de punção lombar, exames ou neuroimagem.</li>
<li>Orientar a família sobre recorrência, prognóstico e manejo em casa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Crise febril</dt>
<dd>Crise convulsiva com febre, entre 6 meses e 5 anos, sem infecção do sistema nervoso nem causa metabólica, em criança sem crise afebril prévia.</dd>
<dt>Crise febril simples</dt>
<dd>Generalizada, com menos de 15 minutos, única em 24 horas, sem déficit pós-ictal.</dd>
<dt>Crise febril complexa</dt>
<dd>Focal, ou com 15 minutos ou mais, ou repetida nas mesmas 24 horas, ou com paralisia de Todd.</dd>
<dt>Risco de recorrência</dt>
<dd>Cerca de um terço; maior se a primeira crise ocorre antes de 1 ano, com febre baixa, pouco tempo após o início da febre, ou com história familiar.</dd>
</dl>
<h4>O essencial</h4>
<p>A crise febril acomete 2 a 5% das crianças e é o distúrbio convulsivo mais comum da infância. Ocorre em geral nas primeiras 24 horas da febre — às vezes a convulsão é o primeiro sinal de que a criança está febril — e resulta da combinação de cérebro imaturo, predisposição genética e febre em elevação. É <strong>simples</strong> quando generalizada, breve e única, e <strong>complexa</strong> quando focal, prolongada ou repetida. A distinção importa porque a complexa tem risco maior de epilepsia futura e de causa estrutural, e por isso merece mais investigação.</p>
<p>Na <strong>crise febril simples</strong>, a investigação se dirige à causa da febre, não à crise: exame físico completo, procura do foco e exames apenas conforme o quadro infeccioso. A <strong>punção lombar</strong> não é de rotina; está indicada quando há sinais meníngeos ou aparência tóxica, e deve ser considerada nos lactentes de 6 a 12 meses com vacinação incompleta para Hib e pneumococo e nos que já usavam antibiótico (que pode mascarar a meningite). Eletroencefalograma, neuroimagem e exames de sangue de rotina não têm indicação: não predizem recorrência nem epilepsia e não mudam a conduta.</p>
<p>O <strong>prognóstico</strong> é excelente: não há dano cognitivo, e o risco de epilepsia depois de uma crise simples é de 1 a 2%, pouco acima da população geral (maior na complexa, na história familiar de epilepsia e no atraso do desenvolvimento). <strong>Profilaxia</strong> contínua com fenobarbital ou valproato não é recomendada — os efeitos adversos superam o benefício —, e antitérmicos não previnem a recorrência, embora tratem o desconforto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A criança que chega <strong>sonolenta logo após a crise</strong> está em período pós-ictal, não em déficit; se em 30 a 60 minutos não acorda e volta ao normal, ou se há sinal focal persistente, a avaliação muda — e a punção lombar e a imagem entram em cena.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Crise febril: 6 meses a 5 anos, com febre, sem infecção do SNC; simples ou complexa.</li>
<li>Simples: investigar a febre, não a crise; sem EEG, imagem ou exames de rotina.</li>
<li>Punção lombar só com sinais meníngeos, toxemia, vacinação incompleta ou antibiótico prévio.</li>
<li>Recorrência em um terço; epilepsia em 1 a 2%; sem profilaxia; orientar a família.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 9 meses com crise febril simples, vacinação atrasada (sem pneumocócica), sem sinais meníngeos. Punção lombar? <details><summary>Resposta</summary>Deve ser considerada: entre 6 e 12 meses com vacinação incompleta para Hib e pneumococo, a meningite pode ser oligossintomática.</details></li>
<li>Pré-escolar de 3 anos com crise febril focal de 20 minutos. Como classificar e o que muda? <details><summary>Resposta</summary>Crise febril complexa (focal e prolongada): investigação ampliada, com atenção a infecção do SNC e avaliação neurológica, e maior risco de recorrência e de epilepsia.</details></li>
</ol>
`,

"sirio2027#52": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar a pega e a posição na amamentação e reconhecer os sinais de pega incorreta.</li>
<li>Diagnosticar e tratar os problemas mamários do puerpério: fissura, ingurgitamento, mastite, abscesso.</li>
<li>Manter a amamentação durante o tratamento, com segurança para a mãe e o bebê.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pega correta</dt>
<dd>Boca bem aberta, lábio inferior virado para fora, queixo tocando a mama, mais aréola visível acima do que abaixo da boca, sucções lentas e profundas sem dor.</dd>
<dt>Fissura mamilar</dt>
<dd>Lesão do mamilo por trauma mecânico da sucção incorreta; a dor começa com a mamada e melhora corrigindo a pega.</dd>
<dt>Ingurgitamento</dt>
<dd>Mamas tensas, dolorosas e brilhantes por estase de leite, do 3º ao 5º dia; tratado com esvaziamento, não com suspensão.</dd>
<dt>Mastite</dt>
<dd>Inflamação com área de calor, rubor e dor, febre e mal-estar; infecção por <em>S. aureus</em> na maioria; trata-se com antibiótico e amamentação mantida.</dd>
</dl>
<h4>O essencial</h4>
<p>Quase todos os problemas das primeiras semanas de amamentação nascem de uma causa: a <strong>pega incorreta</strong>. O bebê que abocanha só o mamilo o comprime contra o palato duro, machuca a pele e extrai pouco leite; o resultado é dor, fissura, mamadas longas e frequentes, ingurgitamento e, adiante, mastite e baixo ganho de peso. A avaliação da mamada — posição da mãe e do bebê, abertura da boca, lábios, queixo, aréola, ritmo e som da sucção, deglutição audível — é o exame físico mais importante da consulta de puerpério.</p>
<p>A <strong>fissura</strong> se trata corrigindo a causa: ensinar a pega e variar as posições para mudar o ponto de pressão; iniciar a mamada pela mama menos dolorida e, quando o reflexo de ejeção estiver ativo, passar para a afetada; expor os mamilos ao ar e ao sol; passar o próprio leite ou <strong>lanolina anidra</strong> após as mamadas; analgésico compatível com a lactação (paracetamol, ibuprofeno). Protetores de silicone reduzem a transferência de leite e não corrigem a pega — ficam para situações excepcionais e por pouco tempo. Não se suspende a mamada do lado afetado, porque a estase leva ao ingurgitamento e à mastite.</p>
<p>O <strong>ingurgitamento</strong> pede esvaziamento: mamadas frequentes, ordenha manual para amolecer a aréola antes da pega, compressas frias entre as mamadas. A <strong>mastite</strong> — área endurecida, quente e vermelha, com febre e mal-estar — recebe antibiótico (cefalexina por 10 a 14 dias) e esvaziamento continuado da mama afetada, cujo leite é seguro para o bebê; abscesso (flutuação, ultrassom) é drenado, e a amamentação segue na outra mama e, se possível, na afetada. Candidíase mamilar (dor em queimação persistente, mamilos rosados e brilhantes, bebê com monilíase oral) trata mãe e filho com antifúngico tópico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor para amamentar nunca é normal depois dos primeiros segundos da pega. Observe uma mamada inteira antes de prescrever qualquer pomada: a maior parte das fissuras cicatriza em 2 a 3 dias só com a pega corrigida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pega incorreta é a raiz da fissura, do ingurgitamento e da mastite.</li>
<li>Fissura: corrigir a pega, começar pela mama boa, leite ou lanolina, analgésico; manter a amamentação.</li>
<li>Ingurgitamento: esvaziar; mastite: cefalexina e esvaziar; abscesso: drenar.</li>
<li>Nunca suprimir a lactação por fissura; protetor de silicone só como exceção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Puérpera com fissura bilateral dolorosa e bebê com lábios invertidos ao mamar. Qual é a primeira medida? <details><summary>Resposta</summary>Corrigir a pega: boca bem aberta, lábio inferior evertido, queixo na mama, mais aréola acima — e observar a mamada.</details></li>
<li>Mastite à direita com febre de 38,5 °C. Pode amamentar desse lado? <details><summary>Resposta</summary>Sim: o esvaziamento é parte do tratamento e o leite é seguro; acrescenta-se cefalexina e analgesia.</details></li>
</ol>
`,

"sirio2027#53": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a gravidade da crise de asma e conduzir o tratamento na emergência.</li>
<li>Avaliar o controle da asma e escolher o passo de tratamento pelo GINA para 6 a 11 anos.</li>
<li>Montar a alta: medicação de manutenção, técnica, plano de ação e retorno.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Crise moderada</dt>
<dd>Fala frases curtas, prefere sentar, FR e FC aumentadas, saturação de 90 a 95%, uso de musculatura acessória.</dd>
<dt>Crise grave</dt>
<dd>Fala palavras, agitação, FR acima de 30 e FC acima de 120, saturação abaixo de 90%; tórax silencioso e sonolência anunciam parada.</dd>
<dt>Controle da asma</dt>
<dd>Nas últimas 4 semanas: sintomas diurnos até 2 vezes por semana, sem despertar noturno, alívio até 2 vezes por semana, sem limitação de atividade.</dd>
<dt>Plano de ação</dt>
<dd>Instruções escritas de como reconhecer a piora, o que fazer com a medicação e quando procurar o serviço.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>crise</strong> se gradua pela fala, pela postura, pelos sinais vitais e pela saturação. O tratamento da crise moderada a grave na emergência é: <strong>oxigênio</strong> para saturação de <strong>94 a 98%</strong>; <strong>salbutamol</strong> por inalador dosimetrado com espaçador (4 a 10 jatos) ou nebulização, repetido a cada 20 minutos na primeira hora; <strong>corticoide sistêmico</strong> precoce (prednisolona 1 a 2 mg/kg, máximo de 40 mg, por 3 a 5 dias), que reduz internações e recaídas; <strong>brometo de ipratrópio</strong> acrescentado na crise moderada a grave; e, na crise grave sem resposta à primeira hora, <strong>sulfato de magnésio</strong> venoso.</p>
<p>A crise é um sinal de <strong>asma não controlada</strong>, e a alta é o momento de corrigir o tratamento de fundo. O GINA abandonou o salbutamol isolado em qualquer idade: todo asmático recebe um <strong>anti-inflamatório</strong>.</p>
<p>O pacote da <strong>alta</strong>: iniciar ou ajustar o corticoide inalatório, revisar e demonstrar a <strong>técnica inalatória</strong> com espaçador (a causa mais comum de falha é a técnica errada), entregar um <strong>plano de ação por escrito</strong>, orientar sobre gatilhos (tabaco, alérgenos, infecções), completar o corticoide oral de 3 a 5 dias, e agendar retorno em 1 a 2 semanas para reavaliar o controle. Antibiótico não faz parte do tratamento da crise sem evidência de infecção bacteriana.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte sempre: quantas vezes usou a bombinha de alívio no último mês? Mais de dois dias por semana — ou mais de um frasco de salbutamol a cada 3 a 4 meses — é o sinal mais simples de descontrole e de risco de crise grave.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Crise: oxigênio (94–98%), salbutamol com espaçador a cada 20 min, corticoide sistêmico precoce; ipratrópio na moderada a grave, magnésio na grave refratária.</li>
<li>Crise = asma não controlada: todo asmático precisa de corticoide inalatório; salbutamol isolado acabou.</li>
<li>6–11 anos: passo 2 é corticoide inalatório diário em dose baixa; passos 3 e 4 incluem budesonida-formoterol de manutenção e alívio.</li>
<li>Alta: manutenção, técnica com espaçador, plano de ação escrito, retorno em 1 a 2 semanas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Escolar de 9 anos, crise moderada, saturação de 91%. Qual é o alvo da oxigenoterapia? <details><summary>Resposta</summary>Saturação de 94 a 98%; não se busca 100%, e o oxigênio é titulado.</details></li>
<li>Criança de 7 anos com sintomas 3 vezes por semana e uma crise no último mês, sem tratamento de fundo. Que passo iniciar? <details><summary>Resposta</summary>Pelo menos o passo 2: corticoide inalatório diário em dose baixa, com salbutamol de alívio.</details></li>
</ol>
`,

"sirio2027#57": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais precoces do transtorno do espectro autista na puericultura.</li>
<li>Aplicar os critérios do DSM-5 e saber que o diagnóstico é clínico.</li>
<li>Encaminhar para avaliação e intervenção precoce e investigar comorbidades.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Atenção compartilhada</dt>
<dd>Olhar alternado entre o objeto e o adulto para dividir o interesse; esperada aos 9 a 12 meses.</dd>
<dt>Apontar protodeclarativo</dt>
<dd>Apontar para mostrar algo, não para pedir; sua ausência aos 12 a 18 meses é sinal de alerta forte.</dd>
<dt>M-CHAT-R/F</dt>
<dd>Questionário de rastreio para 16 a 30 meses, recomendado aos 18 e 24 meses; positivo pede avaliação, não fecha diagnóstico.</dd>
<dt>Estereotipias</dt>
<dd>Movimentos repetitivos (balançar as mãos, girar, balançar o corpo) e uso repetitivo de objetos (enfileirar, girar rodas).</dd>
</dl>
<h4>O essencial</h4>
<p>O <strong>transtorno do espectro autista</strong> acomete cerca de 1 em cada 36 crianças e se define, pelo DSM-5, por dois domínios: <strong>déficits persistentes na comunicação e na interação social</strong> (reciprocidade, comunicação não verbal, relações) e <strong>padrões restritos e repetitivos</strong> de comportamento, interesses ou atividades (estereotipias, insistência na mesmice, interesses fixos, alterações sensoriais), presentes desde cedo e com prejuízo funcional. Os sinais aparecem no segundo ano, e o pediatra é quem os vê primeiro.</p>
<p>Os <strong>sinais de alerta</strong> que a SBP lista: não responder ao nome aos 12 meses; não apontar para mostrar nem compartilhar interesse aos 12 a 18 meses; não balbuciar aos 12 meses nem dizer palavras aos 16; não fazer gestos (tchau, bater palmas); contato visual pobre; não brincar de faz de conta aos 24 meses; preferir objetos a pessoas; movimentos repetitivos; sensibilidade exagerada a sons e texturas; seletividade alimentar extrema; sofrimento intenso com mudanças de rotina; e <strong>qualquer perda de habilidade</strong> de linguagem ou social em qualquer idade.</p>
<p>O <strong>diagnóstico é clínico</strong>, por equipe com experiência (pediatra do desenvolvimento, neuropediatra, psiquiatra infantil, psicólogo, fonoaudiólogo), com instrumentos padronizados quando disponíveis. Exames — ressonância, eletroencefalograma, cariótipo, X frágil, painéis genéticos — <strong>não confirmam o autismo</strong>: servem para investigar causas e comorbidades (epilepsia, síndromes genéticas, deficiência intelectual, déficit auditivo, que deve sempre ser excluído). Marcos motores normais e ausência de regressão não afastam o diagnóstico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Peça à mãe para chamar a criança pelo nome, ofereça um brinquedo e aponte para algo interessante: a criança que não se vira, não acompanha o seu dedo e não olha para você para compartilhar está dizendo mais do que qualquer questionário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dois domínios do DSM-5: comunicação social e comportamentos restritos e repetitivos.</li>
<li>Alerta: não responder ao nome, não apontar para mostrar, não fazer gestos, estereotipias, regressão.</li>
<li>Diagnóstico clínico; exames investigam comorbidades, não confirmam o autismo.</li>
<li>Suspeitou: encaminhar para avaliação e já iniciar a intervenção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 18 meses que não aponta, não responde ao nome e não faz gestos; M-CHAT positivo. Conduta? <details><summary>Resposta</summary>Encaminhar para avaliação diagnóstica multidisciplinar e, simultaneamente, para intervenção precoce; investigar a audição.</details></li>
<li>A ressonância de crânio normal afasta autismo? <details><summary>Resposta</summary>Não: o diagnóstico é clínico; a imagem só investiga causas associadas quando há sinais neurológicos.</details></li>
</ol>
`,

"sirio2027#58": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir icterícia fisiológica de patológica e identificar a hemólise.</li>
<li>Reconhecer a doença hemolítica ABO e a Rh e diferenciá-las.</li>
<li>Indicar fototerapia e exsanguineotransfusão e monitorar a resposta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Icterícia patológica</dt>
<dd>Nas primeiras 24 horas, com elevação acima de 0,2 mg/dL por hora, acima das curvas de fototerapia, bilirrubina direta elevada ou prolongada além de 2 semanas.</dd>
<dt>Incompatibilidade ABO</dt>
<dd>Mãe O com bebê A ou B; anticorpos IgG anti-A ou anti-B maternos; Coombs direto positivo (fraco em parte dos casos); hemólise em geral leve a moderada, já na primeira gestação.</dd>
<dt>Encefalopatia bilirrubínica aguda</dt>
<dd>Letargia, sucção débil, hipotonia; depois irritabilidade, choro agudo, hipertonia em opistótono, febre; é emergência.</dd>
<dt>Exsanguineotransfusão</dt>
<dd>Troca de duas volemias para remover bilirrubina e anticorpos; indicada por sinais de encefalopatia ou bilirrubina acima da curva apesar da fototerapia intensiva.</dd>
</dl>
<h4>O essencial</h4>
<p>Metade dos recém-nascidos a termo fica ictérica, e a maioria tem a icterícia <strong>fisiológica</strong>: começa após 24 horas, atinge o pico no 3º ao 5º dia, não passa de 12 a 13 mg/dL e desaparece em uma semana. É <strong>patológica</strong> a icterícia que aparece nas primeiras 24 horas, que sobe rápido, que ultrapassa as curvas da idade em horas, que tem bilirrubina direta elevada ou que dura mais de duas semanas.</p>
<p>A causa mais frequente de icterícia hemolítica hoje é a <strong>incompatibilidade ABO</strong>: mãe O, bebê A ou B, Coombs direto positivo, reticulócitos elevados, esferócitos no esfregaço, anemia leve a moderada. Ocorre já na primeira gestação e costuma ser menos grave que a <strong>doença Rh</strong>, que exige sensibilização prévia (gestação anterior sem imunoglobulina anti-D), afeta bebês Rh positivos de mães Rh negativas e pode causar hidropisia. A <strong>deficiência de G6PD</strong>, mais comum em meninos de ascendência africana e mediterrânea, causa hemólise com Coombs negativo.</p>
<p>O tratamento segue as <strong>curvas por idade em horas e fatores de risco</strong> (AAP 2022; na doença hemolítica, os limiares são menores). A <strong>fototerapia intensiva</strong> — irradiância de ao menos 30 µW/cm²/nm medida na pele, maior superfície exposta possível — é a primeira linha; a bilirrubina se repete em 4 a 6 horas para medir a resposta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Todo recém-nascido deve ter a bilirrubina medida (transcutânea ou sérica) antes da alta e um retorno marcado em 48 a 72 horas, sobretudo se a alta foi antes de 72 horas de vida — é nesse intervalo que a hemólise ABO atinge o pico, em casa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Patológica: antes de 24 horas, subida rápida, acima das curvas, direta elevada ou prolongada.</li>
<li>ABO: mãe O, bebê A/B, Coombs positivo, reticulócitos altos, já na primeira gestação; Rh exige sensibilização prévia.</li>
<li>Fototerapia intensiva pelas curvas; irradiância na pele e bilirrubina a cada 4–6 horas.</li>
<li>Letargia e sucção débil = encefalopatia: exsanguineotransfusão; imunoglobulina na hemólise imune.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN de 36 horas, mãe O negativo, bebê B positivo, Coombs positivo, bilirrubina de 15 mg/dL. Há dois mecanismos possíveis? <details><summary>Resposta</summary>Sim: incompatibilidade ABO e Rh podem coexistir; verificar o Coombs indireto materno e a história de imunoglobulina anti-D, e tratar pela curva de hemólise.</details></li>
<li>Qual parâmetro mede se a fototerapia está funcionando? <details><summary>Resposta</summary>A irradiância aferida na pele do bebê e a queda da bilirrubina sérica nas dosagens seriadas.</details></li>
</ol>
`,

"sirio2027#59": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais de alerta do transtorno factício imposto a outro.</li>
<li>Diferenciá-lo da ansiedade parental e da doença rara não diagnosticada.</li>
<li>Agir conforme o ECA: proteger, notificar e documentar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Transtorno factício imposto a outro</dt>
<dd>Antiga síndrome de Munchausen por procuração: o cuidador inventa, exagera ou provoca sintomas na criança e busca atenção médica repetida.</dd>
<dt>Sinais de alerta</dt>
<dd>Sintomas que só ocorrem na presença do cuidador, discordância entre relato e achados, exames extensos normais, melhora na separação, cuidador que parece confortável no hospital.</dd>
<dt>Notificação compulsória</dt>
<dd>Dever legal (ECA, art. 13) de comunicar ao Conselho Tutelar toda suspeita de maus-tratos; não exige certeza.</dd>
<dt>Plano de proteção</dt>
<dd>Supervisão contínua, afastamento do cuidador do cuidado direto, documentação, equipe multiprofissional e articulação com a rede.</dd>
</dl>
<h4>O essencial</h4>
<p>O transtorno factício imposto a outro é uma forma de <strong>maus-tratos</strong> em que o cuidador — a mãe em mais de 90% dos casos, muitas vezes com conhecimento em saúde — fabrica a doença do filho: relata sintomas que não existem, falsifica exames (contamina urina, aquece termômetro, desconecta monitores), ou induz sintomas de fato (sufocação, administração de medicamentos, laxantes, sal, insulina). A criança sofre duas vezes: pela agressão e pela cascata de exames, internações e tratamentos que a equipe, enganada, executa. A mortalidade chega a 6 a 10%, e os irmãos frequentemente também são vítimas.</p>
<p>Os <strong>sinais de alerta</strong>: episódios dramáticos (apneia, cianose, convulsão, sangramento) <strong>só presenciados pelo cuidador</strong>; sintomas que cessam quando a criança é separada dele; investigação extensa e repetidamente normal; história que muda ou não bate com a fisiologia; vários serviços e opiniões; cuidador insistente por mais exames e procedimentos, mas estranhamente calmo ou à vontade na internação; história pessoal de transtorno factício; e, por vezes, a observação direta da manipulação — como a mãe que desconecta o oxímetro. Um vídeo caseiro editado não é prova de doença.</p>
<p>A <strong>conduta</strong> é a de qualquer suspeita de violência contra a criança, com uma particularidade: evitar o confronto precoce e desorganizado, que leva à fuga e à troca de serviço.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O diagnóstico diferencial honesto inclui a <strong>doença rara ainda não diagnosticada</strong> e a <strong>mãe ansiosa</strong> que superinterpreta sinais benignos. O que separa é a <strong>fabricação</strong>: a ansiedade não desconecta monitores nem edita vídeos. Na dúvida, a separação supervisionada e a monitorização contínua são diagnósticas e terapêuticas.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cuidador que inventa ou provoca doença na criança; mortalidade de 6 a 10%.</li>
<li>Alerta: sintomas só com o cuidador, exames normais, melhora na separação, manipulação observada.</li>
<li>Proteger, documentar, notificar o Conselho Tutelar, plano multiprofissional; sem alta.</li>
<li>Diferenciar de ansiedade parental e doença rara pela presença de fabricação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>A equipe suspeita, mas não tem certeza. Pode notificar o Conselho Tutelar? <details><summary>Resposta</summary>Deve: o ECA obriga a notificação da suspeita fundamentada de maus-tratos; a certeza não é exigida e a omissão é infração.</details></li>
<li>Qual é a primeira medida ao presenciar a mãe desconectando o monitor e simulando uma queda de saturação? <details><summary>Resposta</summary>Garantir a segurança da criança: supervisão contínua, não deixá-la sozinha com a mãe e não dar alta, enquanto se aciona a equipe e a notificação.</details></li>
</ol>
`,

"sirio2027#60": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir tratamento materno adequado e inadequado da sífilis na gestação.</li>
<li>Classificar o recém-nascido exposto e indicar os exames de cada situação.</li>
<li>Escolher o esquema de penicilina conforme líquor, clínica e tratamento materno.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tratamento materno adequado</dt>
<dd>Penicilina benzatina no esquema do estágio, concluído ao menos 30 dias antes do parto, com queda documentada dos títulos quando possível.</dd>
<dt>Sífilis congênita precoce</dt>
<dd>Manifestações até os 2 anos: hepatoesplenomegalia, icterícia, petéquias, rinite, lesões cutâneas, periostite e osteocondrite, anemia, pneumonia alba.</dd>
<dt>Neurossífilis do RN</dt>
<dd>Líquor com VDRL reagente, ou mais de 25 células/mm³, ou proteínas acima de 150 mg/dL.</dd>
<dt>Título do RN</dt>
<dd>VDRL do bebê duas diluições (quatro vezes) acima do materno sugere infecção ativa; título igual ou menor pode ser anticorpo materno transferido.</dd>
</dl>
<h4>O essencial</h4>
<p>A sífilis congênita é evitável e ainda assim cresce no Brasil, porque falha o tratamento da gestante e do parceiro. O ponto de partida da avaliação do recém-nascido é o <strong>tratamento materno</strong>: é adequado quando feito com penicilina benzatina, no número de doses do estágio (uma dose na sífilis recente, três semanais na tardia ou de duração ignorada), <strong>concluído ao menos 30 dias antes do parto</strong>.</p>
<p>Todo recém-nascido exposto faz VDRL em sangue periférico (não do cordão). Mãe <strong>adequadamente tratada</strong> e RN assintomático com VDRL não reagente ou menor que o materno: acompanhamento com VDRL aos 1, 3, 6, 12 e 18 meses, sem tratamento. Mãe <strong>inadequadamente tratada</strong>, ou RN com VDRL maior que o materno em duas diluições, ou RN sintomático: investigação completa — hemograma, <strong>radiografia de ossos longos</strong>, <strong>líquor</strong> (VDRL, celularidade, proteínas), função hepática e, conforme o caso, radiografia de tórax — e tratamento.</p>
<p>O esquema segue os achados. <strong>Líquor alterado</strong> (neurossífilis): penicilina cristalina 50.000 UI/kg/dose venosa, a cada 12 horas nos primeiros 7 dias de vida e a cada 8 horas depois, por 10 dias. <strong>Líquor normal</strong> com alguma outra alteração (clínica, laboratorial ou radiológica): penicilina cristalina no mesmo esquema ou procaína 50.000 UI/kg/dia intramuscular por 10 dias.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dois erros frequentes: considerar adequado um tratamento materno que terminou a menos de 30 dias do parto, e colher o VDRL do sangue do cordão (contaminado por sangue materno). Sem a segurança do seguimento, trate em vez de observar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tratamento materno adequado: penicilina benzatina, doses completas, concluído 30 dias antes do parto.</li>
<li>Inadequado, VDRL do RN maior que o materno ou sintomático: hemograma, ossos longos, líquor, e tratar.</li>
<li>Líquor alterado: cristalina venosa 10 dias (12/12 h até o 7º dia, depois 8/8 h); líquor normal com outra alteração: cristalina ou procaína 10 dias.</li>
<li>Tudo normal e mãe inadequada: benzatina dose única com seguimento; VDRL seriado até negativar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Mãe tratou sífilis latente tardia com três doses, a última 45 dias antes do parto; RN assintomático com VDRL 1:2 (materno 1:8). Conduta? <details><summary>Resposta</summary>Tratamento materno adequado e título do RN menor que o materno: acompanhamento com VDRL seriado, sem tratar.</details></li>
<li>RN sintomático com líquor normal e radiografia de ossos longos com periostite. Qual esquema? <details><summary>Resposta</summary>Penicilina cristalina venosa por 10 dias (ou procaína intramuscular por 10 dias): há alteração clínica e radiológica, sem neurossífilis.</details></li>
</ol>
`,

/* --- Volume 2 · UNESP 2025 → ped81–ped90 ------------------------------------------------- */
"unesp2025#3": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o recém-nascido que precisa de UTI neonatal e não pode ficar onde nasceu.</li>
<li>Estabilizar antes do transporte: temperatura, glicose, via aérea, acesso.</li>
<li>Organizar o transporte: regulação, consentimento, equipe e equipamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Regionalização</dt>
<dd>Rede em que a maternidade de nível secundário estabiliza e transfere o RN de alto risco para o serviço terciário.</dd>
<dt>Estabilização pré-transporte</dt>
<dd>Temperatura de 36,5 a 37,5 °C, glicemia acima de 45 mg/dL, via aérea segura, acesso venoso, oxigenação adequada.</dd>
<dt>Transporte inter-hospitalar</dt>
<dd>Em incubadora de transporte, com equipe treinada em reanimação neonatal, oxigênio, monitor e medicações.</dd>
<dt>Consentimento informado</dt>
<dd>A família é informada do motivo, do destino e dos riscos, e a mãe autoriza; o nome do hospital e o contato ficam com ela.</dd>
</dl>
<h4>O essencial</h4>
<p>Nem toda maternidade tem UTI neonatal, e isso é esperado na rede regionalizada: o que se exige de todo serviço que faz partos é saber <strong>reanimar, estabilizar e transferir</strong>. Precisam de nível terciário o prematuro abaixo de 32 a 34 semanas ou de 1.500 g, o RN com desconforto respiratório que exige mais que oxigênio em baixo fluxo ou CPAP com FiO₂ crescente, o que precisa de surfactante, ventilação mecânica, drogas vasoativas, cirurgia ou investigação de cardiopatia, e o que convulsiona ou tem sepse grave. Transferir cedo, com o bebê ainda compensado, é melhor do que esperar a piora.</p>
<p>A sequência começa pela <strong>regulação</strong>: solicitar a vaga à central e conversar diretamente com o médico do serviço receptor, que confirma a aceitação e orienta a estabilização. Em paralelo, a família é <strong>informada</strong> e a mãe dá o <strong>consentimento</strong>; quando a mãe está internada, o acompanhante e os documentos vão com o bebê.</p>
<p>O <strong>transporte</strong> em si exige incubadora aquecida, fonte de oxigênio e ar comprimido, monitor com oximetria, material de reanimação e drogas, e equipe (médico e enfermeiro) treinada em reanimação neonatal; o CPAP pode ser mantido durante o trajeto. Escores de risco do transporte, como o TRIPS, descrevem a gravidade e avaliam a qualidade do serviço, mas a decisão de transferir vem da necessidade clínica. O bebê não sai sem estar o mais estável possível: um RN frio, hipoglicêmico e dessaturando na ambulância é o pior cenário.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de fechar a porta da incubadora, repasse a lista: temperatura, glicemia, saturação e FiO₂, acesso fixo, sonda, documentos, relatório com horários de medicações, nome e telefone do serviço receptor, e a mãe informada. Ligue para o receptor ao sair e ao chegar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Serviço secundário reanima, estabiliza e transfere; UTI para prematuros pequenos e RN com desconforto importante.</li>
<li>Ordem: vaga pela regulação e contato com o receptor, consentimento da mãe, estabilização.</li>
<li>Estabilizar = aquecer, corrigir a glicemia, via aérea segura, acesso, culturas e antibiótico se indicado.</li>
<li>Intubar só por necessidade clínica; CPAP pode viajar; equipe treinada e incubadora de transporte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN de 1.300 g, 35,8 °C, glicemia de 28 mg/dL, com vaga aceita. Pode sair agora? <details><summary>Resposta</summary>Não: aquecer e corrigir a glicemia primeiro; só se transporta o bebê estabilizado.</details></li>
<li>O escore TRIPS decide quem precisa de transferência? <details><summary>Resposta</summary>Não: ele mede a gravidade e a qualidade do transporte; a indicação vem da necessidade clínica que o serviço de origem não atende.</details></li>
</ol>
`,

"unesp2025#4": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que o recém-nascido é deficiente em vitamina K.</li>
<li>Descrever as três formas do sangramento por deficiência de vitamina K.</li>
<li>Prescrever a profilaxia e reconhecer as situações de maior risco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Vitamina K</dt>
<dd>Cofator da carboxilação dos fatores II, VII, IX e X e das proteínas C e S; pouco transferida pela placenta e escassa no leite materno.</dd>
<dt>Forma precoce</dt>
<dd>Primeiras 24 horas; associada a drogas maternas (anticonvulsivantes, varfarina, rifampicina, isoniazida); pode ser grave.</dd>
<dt>Forma clássica</dt>
<dd>Do 2º ao 7º dia; sangramento de coto, gastrointestinal, cutâneo e de punções; a que a profilaxia universal eliminou.</dd>
<dt>Forma tardia</dt>
<dd>De 2 semanas a 6 meses; em aleitamento exclusivo sem profilaxia ou com colestase; hemorragia intracraniana em metade dos casos.</dd>
</dl>
<h4>O essencial</h4>
<p>O recém-nascido nasce com <strong>reservas mínimas de vitamina K</strong>: a placenta transfere pouco, o fígado imaturo armazena menos, o intestino ainda não tem a flora que a sintetiza e o leite materno contém apenas 1 a 4 µg/L — contra 50 µg/L das fórmulas. Sem suplemento, os fatores dependentes de vitamina K caem nos primeiros dias e o bebê sangra. A doença tem três formas, separadas pelo tempo e pela causa.</p>
<p>A <strong>forma precoce</strong> ocorre nas primeiras 24 horas, em filhos de mães que usaram drogas que interferem com a vitamina K; a profilaxia do bebê ao nascer chega tarde, e a prevenção é tratar a gestante. A <strong>forma clássica</strong>, entre o 2º e o 7º dia, é a deficiência fisiológica agravada pela ingestão baixa dos primeiros dias: sangramento do coto umbilical, hematêmese e melena, equimoses, sangramento após punções e circuncisão; acometia até 1,7% dos bebês não suplementados e praticamente desapareceu com a dose intramuscular.</p>
<p>A <strong>profilaxia</strong> é universal: <strong>1 mg de vitamina K intramuscular</strong> na primeira hora de vida para o RN com mais de 1.500 g (0,5 mg abaixo disso), dose única, que previne as formas clássica e tardia. Os esquemas orais exigem várias doses, dependem da adesão e falham na colestase — por isso a via intramuscular é a recomendada pela SBP e pela AAP. A recusa dos pais deve ser registrada depois de orientação clara sobre o risco de hemorragia intracraniana. O tratamento do sangramento é vitamina K venosa (1 a 2 mg, lenta) e, se grave, plasma fresco congelado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lactente de 1 a 3 meses, em aleitamento exclusivo, que chega com vômitos, irritabilidade ou convulsão e equimoses: pergunte se recebeu a vitamina K na maternidade antes de pensar em infecção ou trauma. Hemorragia intracraniana por deficiência de vitamina K ainda acontece em bebês nascidos fora do hospital ou cujos pais recusaram a dose.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>RN nasce com pouca vitamina K; leite materno tem pouca; sem profilaxia, sangra.</li>
<li>Precoce (24 h, drogas maternas); clássica (2º–7º dia, coto e trato digestivo); tardia (2 semanas–6 meses, intracraniana).</li>
<li>1 mg IM ao nascer previne a clássica e a tardia; via oral é inferior.</li>
<li>Sangramento: vitamina K venosa e plasma se grave.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 6 semanas, aleitamento exclusivo, nascido em casa, com convulsão e equimoses. Qual é a hipótese principal? <details><summary>Resposta</summary>Forma tardia da doença hemorrágica por deficiência de vitamina K, com hemorragia intracraniana; vitamina K venosa e imagem urgentes.</details></li>
<li>Por que a profilaxia do bebê não previne a forma precoce? <details><summary>Resposta</summary>Porque ela decorre de drogas maternas que agem na gestação; o sangramento começa nas primeiras horas, antes que a dose faça efeito.</details></li>
</ol>
`,

"unesp2025#5": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que a anemia ferropriva é tão frequente entre 6 e 24 meses.</li>
<li>Prescrever a profilaxia de ferro por grupo de risco, com dose, início e duração.</li>
<li>Orientar a dieta que previne a deficiência de ferro no lactente.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ferro elementar</dt>
<dd>A dose se prescreve em ferro elementar: o sulfato ferroso tem 20%, e as apresentações em gotas variam.</dd>
<dt>Profilaxia universal</dt>
<dd>Suplementação de todo lactente, independentemente de risco, dos 6 aos 24 meses (SBP).</dd>
<dt>Ferro heme</dt>
<dd>Ferro das carnes e vísceras, absorvido em 15 a 35%; o ferro não heme dos vegetais absorve 2 a 10% e depende da vitamina C.</dd>
<dt>Inibidores da absorção</dt>
<dd>Cálcio do leite, fitatos dos cereais integrais, taninos do chá e do café.</dd>
</dl>
<h4>O essencial</h4>
<p>A anemia ferropriva acomete cerca de um terço dos lactentes brasileiros e tem consequências que não se recuperam depois — atraso cognitivo e motor, menor rendimento escolar —, por isso a prevenção vale mais que o tratamento. O lactente nasce com reservas que duram <strong>cerca de 6 meses</strong> (menos no prematuro, no baixo peso, no filho de mãe anêmica e no clampeamento precoce do cordão); o leite materno tem pouco ferro, mas bem absorvido; e a dieta complementar brasileira, rica em leite de vaca e pobre em carne, não cobre a demanda do crescimento acelerado do segundo semestre e do segundo ano.</p>
<p>A SBP recomenda <strong>profilaxia universal</strong>. Para o lactente <strong>a termo, com peso adequado</strong>: <strong>1 mg/kg/dia</strong> de ferro elementar, dos <strong>6 aos 24 meses</strong>, começando aos 3 meses se não estiver em aleitamento exclusivo e receber menos de 500 mL de fórmula ao dia. Para o <strong>prematuro</strong> ou <strong>baixo peso</strong>: 2 mg/kg/dia a partir dos 30 dias (3 mg/kg/dia abaixo de 1.500 g, 4 mg/kg/dia abaixo de 1.000 g) durante o primeiro ano, depois 1 mg/kg/dia até os 24 meses. A dose é dada <strong>longe das refeições lácteas</strong>, de preferência com suco cítrico, e o Programa Nacional de Suplementação de Ferro distribui o sulfato ferroso nas UBS.</p>
<p>A <strong>dieta</strong> complementa: carne vermelha, frango, peixe e vísceras desde o início da alimentação complementar aos 6 meses (ferro heme, bem absorvido); feijões e vegetais verde-escuros acompanhados de frutas ricas em vitamina C; <strong>leite de vaca</strong> apenas após 1 ano e no máximo 500 mL/dia, porque o cálcio inibe a absorção e o excesso de leite ocupa o lugar dos alimentos ricos em ferro e causa microssangramento intestinal. Chá e café não entram na alimentação do lactente. O rastreio com hemograma é feito aos 12 meses em todas as crianças.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O lactente de 1 ano que toma mamadeira de 1 litro por dia e "não come" é o retrato da ferropenia: trate a anemia (3 a 5 mg/kg/dia de ferro elementar por 3 a 6 meses após normalizar a hemoglobina) e, sobretudo, reduza o leite e introduza a carne. Sem mudar a dieta, a anemia volta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reservas acabam aos 6 meses; leite de vaca em excesso e pouca carne causam a ferropenia.</li>
<li>Termo e peso adequado: 1 mg/kg/dia dos 6 aos 24 meses (dos 3 meses se não houver aleitamento exclusivo).</li>
<li>Prematuro e baixo peso: 2 a 4 mg/kg/dia a partir de 30 dias.</li>
<li>Longe do leite, com vitamina C; carne desde os 6 meses; leite de vaca só após 1 ano, até 500 mL.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 4 meses, a termo, em fórmula infantil (700 mL/dia). Já precisa de ferro profilático? <details><summary>Resposta</summary>Ainda não: com mais de 500 mL de fórmula fortificada por dia, a profilaxia de 1 mg/kg começa aos 6 meses.</details></li>
<li>Prematuro de 34 semanas, 2.000 g, com 1 mês. Qual é a dose? <details><summary>Resposta</summary>2 mg/kg/dia de ferro elementar a partir dos 30 dias, durante o primeiro ano; depois 1 mg/kg/dia até 24 meses.</details></li>
</ol>
`,

"unesp2025#6": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as doenças do teste do pezinho do SUS e as etapas de expansão previstas em lei.</li>
<li>Interpretar o TSH da triagem e conduzir a confirmação do hipotireoidismo congênito.</li>
<li>Saber por que o tratamento precoce decide o prognóstico neurológico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Teste do pezinho</dt>
<dd>Triagem bioquímica em sangue de papel-filtro, colhida idealmente entre o 3º e o 5º dia de vida (até o 7º).</dd>
<dt>Hipotireoidismo congênito</dt>
<dd>Incidência de 1:2.000 a 1:4.000; disgenesia tireoidiana na maioria; assintomático ao nascer.</dd>
<dt>Triagem alterada</dt>
<dd>TSH neonatal acima do corte (em geral 10 mUI/L em papel-filtro): convocação imediata para confirmação em soro.</dd>
<dt>Janela terapêutica</dt>
<dd>Levotiroxina iniciada até os 14 dias de vida preserva o desenvolvimento intelectual.</dd>
</dl>
<h4>O essencial</h4>
<p>O <strong>Programa Nacional de Triagem Neonatal</strong> garante pelo SUS o teste do pezinho a todo recém-nascido. Na fase implantada em quase todos os estados, ele rastreia <strong>seis grupos de doenças</strong>: fenilcetonúria, hipotireoidismo congênito, doença falciforme e outras hemoglobinopatias, fibrose cística, hiperplasia adrenal congênita e deficiência de biotinidase; a toxoplasmose congênita foi incluída em parte dos estados.</p>
<p>O <strong>hipotireoidismo congênito</strong> é o exemplo do valor da triagem: o bebê nasce quase sempre sem sinais (os clássicos — icterícia prolongada, hérnia umbilical, macroglossia, hipotonia, fontanelas amplas, letargia — aparecem tarde), e cada semana sem hormônio custa pontos de QI. A triagem mede o TSH em papel-filtro; valores acima do corte do laboratório (em geral 10 mUI/L; entre 10 e 20 pede nova coleta em alguns programas, acima de 20 confirmação direta) geram <strong>convocação imediata</strong>.</p>
<p>Confirmado (TSH elevado com T4 livre baixo, ou TSH muito elevado), inicia-se <strong>levotiroxina</strong> 10 a 15 µg/kg/dia, de preferência antes dos 14 dias de vida, com reavaliação em 2 semanas e ajustes frequentes no primeiro ano. Tratado cedo, o desenvolvimento é normal. A triagem alterada sem confirmação não é diagnóstico: começar o hormônio antes dos exames de soro impede a confirmação e pode tratar um falso-positivo (prematuros, doentes graves, coleta precoce).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Confira a data da coleta: pezinho colhido antes de 48 horas de vida tem mais falsos-positivos de TSH (pico fisiológico) e falsos-negativos de fenilcetonúria (pouca proteína ingerida). Prematuros e bebês em UTI repetem a coleta aos 15 dias e, abaixo de 32 semanas, no 28º dia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pezinho do SUS: fenilcetonúria, hipotireoidismo, hemoglobinopatias, fibrose cística, hiperplasia adrenal, biotinidase (toxoplasmose em parte); expansão em cinco etapas pela Lei 14.154.</li>
<li>TSH alterado = triagem positiva: confirmar com TSH e T4 livre no soro, já.</li>
<li>Levotiroxina 10–15 µg/kg/dia, antes dos 14 dias; prognóstico neurológico depende do tempo.</li>
<li>Colher entre 3 e 5 dias; prematuros repetem aos 15 e 28 dias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>TSH de 35 mUI/L no papel-filtro em RN de 7 dias. Conduta? <details><summary>Resposta</summary>Convocar no mesmo dia, colher TSH e T4 livre séricos e, com a confirmação, iniciar levotiroxina imediatamente, antes de concluir a investigação etiológica.</details></li>
<li>O teste do coraçãozinho faz parte do teste do pezinho? <details><summary>Resposta</summary>Não: é a triagem por oximetria para cardiopatias críticas, feita entre 24 e 48 horas de vida; o pezinho é a triagem bioquímica.</details></li>
</ol>
`,

"unesp2025#7": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o paciente com dengue nos grupos A, B, C e D.</li>
<li>Reconhecer os sinais de alarme e os grupos de risco.</li>
<li>Conduzir a hidratação e o acompanhamento de cada grupo, com atenção às crianças.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinais de alarme</dt>
<dd>Dor abdominal intensa e contínua, vômitos persistentes, acúmulo de líquidos, hipotensão postural, hepatomegalia maior que 2 cm, sangramento de mucosas, letargia ou irritabilidade, aumento progressivo do hematócrito.</dd>
<dt>Grupo A</dt>
<dd>Sem sinais de alarme e sem risco: hidratação oral em casa, orientação, retorno.</dd>
<dt>Grupo B</dt>
<dd>Sem sinais de alarme, mas com sangramento de pele (espontâneo ou prova do laço positiva) ou condição de risco: menores de 2 anos, gestantes, maiores de 65, comorbidades, risco social.</dd>
<dt>Grupos C e D</dt>
<dd>Com sinais de alarme (C) ou sinais de choque, sangramento grave ou disfunção de órgão (D): internação e hidratação venosa.</dd>
</dl>
<h4>O essencial</h4>
<p>A dengue na criança é mais difícil de reconhecer: a febre pode ser o único sintoma, a dor abdominal e os vômitos imitam gastroenterite, e a <strong>deterioração</strong> na fase crítica — do 3º ao 7º dia, quando a febre cede — é mais rápida que no adulto. Por isso toda criança com febre em área de transmissão deve ser considerada caso suspeito, e o <strong>estadiamento</strong> do Ministério da Saúde decide a conduta: a pergunta não é "tem dengue?", mas "em que grupo está?".</p>
<p><strong>Grupo A</strong>: sem sinais de alarme, sem sangramento, sem condição de risco. Hidratação oral em casa (60 mL/kg/dia para a criança, um terço como soro de reidratação oral), antitérmico (paracetamol ou dipirona; <strong>nunca</strong> anti-inflamatórios nem AAS), cartão com os sinais de alarme, retorno diário ou no período de defervescência, hemograma conforme a situação epidemiológica e sorologia a partir do 6º dia.</p>
<p><strong>Grupo C</strong>: qualquer sinal de alarme — internação, reposição venosa com soro fisiológico ou ringer 10 mL/kg na primeira hora (até 20 mL/kg em 2 horas na criança), reavaliação clínica e de hematócrito a cada 2 horas, manutenção quando melhora. <strong>Grupo D</strong>: choque, sangramento grave ou disfunção de órgão — expansão rápida de 20 mL/kg em 20 minutos, repetida até três vezes, UTI, hemoderivados conforme a necessidade. Em todos, o critério de alta é ausência de febre por 48 horas, melhora clínica, hematócrito normal e plaquetas em ascensão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A <strong>prova do laço</strong> na criança: insufle o manguito no ponto médio entre a sistólica e a diastólica por 3 minutos e conte as petéquias num quadrado de 2,5 cm: 10 ou mais é positiva (20 no adulto). Positiva sem sinais de alarme já é grupo B.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Estadiar todo suspeito: A (nada), B (sangramento de pele ou risco: menor de 2 anos, gestante, idoso, comorbidade), C (alarme), D (choque).</li>
<li>A: hidratação oral em casa e sinais de alarme; B: hematócrito e hidratação supervisionada, reavaliar em 24 h.</li>
<li>C: internar, 10 mL/kg/h; D: 20 mL/kg em 20 minutos, UTI.</li>
<li>Sem anti-inflamatório nem AAS; fase crítica na defervescência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 10 meses com dengue, sem sinais de alarme, bem hidratado. Qual grupo e conduta? <details><summary>Resposta</summary>Grupo B pela idade: hemograma, hidratação oral supervisionada na unidade e reavaliação em 24 horas.</details></li>
<li>Escolar com dengue no 4º dia, afebril, com dor abdominal intensa e vômitos. Grupo e conduta? <details><summary>Resposta</summary>Grupo C (sinais de alarme na defervescência): internação e hidratação venosa de 10 mL/kg na primeira hora com reavaliação em 2 horas.</details></li>
</ol>
`,

"unesp2025#12": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Separar injúria renal aguda de doença renal crônica pelos sinais de cronicidade.</li>
<li>Conhecer as causas da doença renal crônica na infância e o peso das anomalias congênitas.</li>
<li>Reconhecer as manifestações da doença renal crônica e os pontos do seu tratamento conservador.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença renal crônica</dt>
<dd>Alteração estrutural ou funcional do rim por mais de 3 meses, ou filtração glomerular abaixo de 60 mL/min/1,73 m², com implicações para a saúde.</dd>
<dt>CAKUT</dt>
<dd>Anomalias congênitas dos rins e do trato urinário: hipodisplasia, nefropatia do refluxo, válvula de uretra posterior, obstruções; metade das causas na infância.</dd>
<dt>Sinais de cronicidade</dt>
<dd>Rins pequenos e sem diferenciação corticomedular, anemia, baixa estatura, osteodistrofia, incapacidade de concentrar a urina.</dd>
<dt>Nefropatia do refluxo</dt>
<dd>Cicatrizes renais por refluxo vesicoureteral e pielonefrites na infância precoce; causa de hipertensão e perda de função anos depois.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante de uma criança com creatinina elevada, a primeira pergunta é <strong>agudo ou crônico?</strong>.</p>
<p>As <strong>causas</strong> na infância diferem das do adulto. Cerca de metade são <strong>anomalias congênitas dos rins e do trato urinário</strong> — hipodisplasia renal, nefropatia do refluxo, válvula de uretra posterior, uropatias obstrutivas —, seguidas pelas glomerulopatias (síndrome nefrótica corticorresistente, glomeruloesclerose segmentar e focal, nefrites), pelas doenças hereditárias (nefronoftise, doença policística, Alport) e pelas sequelas de síndrome hemolítico-urêmica.</p>
<p>O <strong>tratamento conservador</strong> procura retardar a progressão e corrigir as consequências: controle da pressão arterial e da proteinúria com inibidores da ECA ou bloqueadores do receptor de angiotensina; correção da anemia com ferro e eritropoetina; manejo do metabolismo mineral (fósforo, cálcio, vitamina D ativa, paratormônio); bicarbonato para a acidose; nutrição adequada e hormônio do crescimento quando a estatura compromete; imunizações; e preparo para a terapia de substituição — diálise e, preferencialmente, <strong>transplante</strong>, que é o melhor tratamento da doença renal terminal na criança.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Toda criança que teve infecção urinária febril no primeiro ano, refluxo, válvula de uretra ou hidronefrose antenatal merece acompanhamento de pressão arterial, exame de urina e creatinina ao longo da infância — a doença renal crônica da CAKUT é silenciosa até ser avançada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Crônico: meses de sintomas, anemia, rins pequenos, urina diluída, hipertensão, baixa estatura.</li>
<li>Metade das causas na infância é CAKUT; nefropatia do refluxo é a face mais comum.</li>
<li>Glomerulopatias, doenças hereditárias e SHU completam a lista.</li>
<li>Tratar pressão e proteinúria, anemia, osso, acidose, nutrição; transplante como meta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado de ultrassonografia distingue melhor doença renal crônica de injúria aguda? <details><summary>Resposta</summary>Rins pequenos e sem diferenciação corticomedular indicam cronicidade; na injúria aguda os rins são normais ou aumentados.</details></li>
<li>Menino de 2 anos com válvula de uretra posterior corrigida. Que seguimento ele precisa? <details><summary>Resposta</summary>Pressão arterial, exame de urina e creatinina periódicos pela vida: a CAKUT é a principal causa de doença renal crônica na infância.</details></li>
</ol>
`,

"unesp2025#13": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a urtica e o angioedema e saber como se diferenciam.</li>
<li>Classificar a urticária em aguda e crônica e conhecer as causas em cada uma.</li>
<li>Tratar a urticária aguda e saber quando investigar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Urtica</dt>
<dd>Pápula ou placa edematosa, eritematosa, pruriginosa, de tamanho variável, que desaparece em menos de 24 horas sem deixar marca.</dd>
<dt>Angioedema</dt>
<dd>Edema da derme profunda e do subcutâneo, em lábios, pálpebras, genitais e extremidades, mais doloroso que pruriginoso, que dura até 72 horas.</dd>
<dt>Urticária aguda</dt>
<dd>Duração inferior a 6 semanas; na criança, infecções são a causa mais comum, seguidas por alimentos e medicamentos.</dd>
<dt>Urticária crônica</dt>
<dd>Lesões na maioria dos dias por mais de 6 semanas; espontânea (autoimune ou idiopática) ou induzida (dermografismo, frio, pressão, colinérgica).</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>urticária</strong> é a liberação de histamina e outros mediadores pelos mastócitos da derme superficial, que produz a <strong>urtica</strong>: lesão elevada, com centro edematoso pálido ou róseo e halo eritematoso, intensamente pruriginosa, migratória, e — o critério que define — <strong>evanescente</strong>, desaparecendo em menos de 24 horas sem descamação nem pigmentação.</p>
<p>A urticária <strong>aguda</strong> é a situação mais comum na infância, e sua causa principal não é a alergia alimentar, como as famílias supõem, mas a <strong>infecção</strong> — viroses respiratórias e gastrointestinais, estreptococo, micoplasma, parasitoses —, responsável por metade ou mais dos casos; alimentos (leite, ovo, trigo, amendoim, frutos do mar), medicamentos (antibióticos, anti-inflamatórios) e picadas de inseto vêm depois, e muitos casos ficam sem causa definida. O diagnóstico é clínico, e exames não são necessários na forma aguda sem sinais de anafilaxia.</p>
<p>O <strong>tratamento</strong> da urticária aguda é um <strong>anti-histamínico de segunda geração</strong> (cetirizina, loratadina, desloratadina, fexofenadina) em dose padrão, podendo chegar a quatro vezes a dose se necessário; os de primeira geração sedam e não são preferidos. Corticoide oral por 3 a 5 dias fica para os casos intensos ou com angioedema importante. Urticária com sinais de comprometimento de outros sistemas — rouquidão, sibilos, vômitos, hipotensão — é <strong>anafilaxia</strong>, e o tratamento é adrenalina intramuscular, não anti-histamínico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Peça aos pais que marquem uma lesão com caneta e vejam se ela sumiu em 24 horas: se sim, é urticária; se a lesão persiste, descama ou deixa marca, pense em vasculite urticariforme, eritema multiforme ou picadas, e aí investigue.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Urtica: elevada, pruriginosa, migratória, some em menos de 24 horas; angioedema: profundo, doloroso, até 72 horas.</li>
<li>Aguda (menos de 6 semanas): infecção é a causa mais comum na criança; alimentos e drogas depois.</li>
<li>Crônica (mais de 6 semanas): espontânea autoimune ou induzida (dermografismo, frio, pressão).</li>
<li>Anti-histamínico de segunda geração; corticoide curto nos casos intensos; anafilaxia pede adrenalina.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Pré-escolar com urticas há 3 dias, após uma virose, sem outros sintomas. Precisa de exames? <details><summary>Resposta</summary>Não: urticária aguda pós-infecciosa é diagnóstico clínico; trata-se com anti-histamínico de segunda geração.</details></li>
<li>Criança com urticas e sibilos minutos após comer camarão. Qual é a conduta? <details><summary>Resposta</summary>Anafilaxia: adrenalina intramuscular 0,01 mg/kg imediatamente, antes de qualquer anti-histamínico.</details></li>
</ol>
`,

"unesp2025#14": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o quadro clínico da coqueluche por faixa etária.</li>
<li>Diagnosticar, tratar e fazer a quimioprofilaxia dos contatos.</li>
<li>Explicar a estratégia vacinal, incluindo gestantes, puérperas e profissionais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bordetella pertussis</dt>
<dd>Bacilo gram-negativo de transmissão por gotículas, altamente contagioso (80% dos contatos suscetíveis adoecem).</dd>
<dt>Fase paroxística</dt>
<dd>Tosse em acessos, com guincho inspiratório, vômitos pós-tosse e cianose; no lactente, apneia e cianose podem ser a única manifestação.</dd>
<dt>Estratégia casulo</dt>
<dd>Vacinar os contatos próximos do lactente (mãe, pai, avós, cuidadores, profissionais) para que ninguém o infecte antes do esquema completo.</dd>
<dt>dTpa</dt>
<dd>Vacina acelular de adulto contra difteria, tétano e coqueluche; indicada a gestantes, puérperas e profissionais de saúde.</dd>
</dl>
<h4>O essencial</h4>
<p>A coqueluche voltou. Depois de anos de queda, os casos subiram em 2024 no Brasil e no mundo, pela queda da cobertura vacinal, pela perda da imunidade da vacina acelular com o tempo e pela redução da circulação durante a pandemia. A doença evolui em três fases: a <strong>catarral</strong> (1 a 2 semanas, indistinguível de resfriado, e a mais contagiosa), a <strong>paroxística</strong> (2 a 6 semanas, com acessos de tosse, guincho, vômitos, cianose e, no lactente, <strong>apneia</strong> e convulsão) e a de <strong>convalescença</strong>.</p>
<p>O <strong>diagnóstico</strong> é clínico e epidemiológico (tosse por 14 dias ou mais com paroxismos, guincho ou vômitos; no lactente, tosse de qualquer duração com apneia ou cianose), confirmado por PCR ou cultura de nasofaringe; o hemograma mostra leucocitose com linfocitose. O <strong>tratamento</strong> é com <strong>macrolídeo</strong> — azitromicina por 5 dias (claritromicina por 7, ou eritromicina por 14) —, que elimina a transmissão em 5 dias e encurta a doença se iniciado na fase catarral; lactentes pequenos são internados e monitorizados pela apneia.</p>
<p>A <strong>prevenção</strong> é a vacina em duas frentes. Para a criança: <strong>pentavalente</strong> (DTP + hepatite B + Hib) aos 2, 4 e 6 meses e reforços com <strong>DTP</strong> aos 15 meses e aos 4 anos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lactente de 6 semanas com apneia e cianose depois de "um resfriado da mãe" é coqueluche até prova em contrário: interne, monitorize, colha PCR, inicie azitromicina e trate todos os contatos da casa — e pergunte se a mãe tomou a dTpa na gravidez.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Catarral (contagiosa), paroxística (guincho, vômitos, apneia no lactente), convalescença; mortes abaixo de 6 meses.</li>
<li>PCR confirma; azitromicina trata e corta a transmissão; quimioprofilaxia de todos os contatos domiciliares.</li>
<li>Pentavalente 2, 4 e 6 meses; DTP 15 meses e 4 anos.</li>
<li>Casulo: dTpa para gestantes (20ª semana, toda gestação), puérperas e profissionais de saúde.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Pai de um lactente de 1 mês tem tosse paroxística há 3 semanas. Que condutas para a família? <details><summary>Resposta</summary>Tratar o pai com azitromicina, dar quimioprofilaxia a todos os contatos domiciliares (incluindo o lactente), notificar e avaliar o lactente de perto.</details></li>
<li>Por que a dTpa é repetida em cada gestação, mesmo em gestante vacinada há 2 anos? <details><summary>Resposta</summary>Porque a imunidade da vacina acelular cai em poucos anos e a transferência de anticorpos ao feto exige títulos altos no terceiro trimestre.</details></li>
</ol>
`,

"unesp2025#15": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Suspeitar de tuberculose na criança com pneumonia que não melhora.</li>
<li>Aplicar o sistema de pontuação e os exames disponíveis para o diagnóstico na infância.</li>
<li>Tratar a tuberculose pulmonar da criança e investigar o caso-fonte.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tuberculose primária</dt>
<dd>Forma da criança: adenomegalia hilar, consolidação segmentar, derrame; poucos bacilos e pouca transmissão.</dd>
<dt>Sistema de pontuação do MS</dt>
<dd>Soma pontos para quadro clínico, radiografia, contato com adulto bacilífero, prova tuberculínica e estado nutricional; 40 ou mais indica tratamento.</dd>
<dt>Lavado gástrico</dt>
<dd>Coleta matinal, em jejum, por sonda, do escarro deglutido durante a noite; três amostras em dias consecutivos para baciloscopia, TRM-TB e cultura.</dd>
<dt>Esquema RHZ</dt>
<dd>Rifampicina, isoniazida e pirazinamida por 2 meses, depois rifampicina e isoniazida por 4 meses, em menores de 10 anos; sem etambutol.</dd>
</dl>
<h4>O essencial</h4>
<p>A tuberculose na criança é <strong>paucibacilar</strong> e tem apresentação indolente: tosse, febre baixa persistente, perda ou não ganho de peso, sudorese, inapetência, e uma pneumonia que <strong>não responde ao antibiótico comum</strong>. A radiografia mostra adenomegalia hilar ou mediastinal, consolidação (que pode ser extensa, como a de um lobo inteiro) e, menos frequentemente, derrame, cavitação ou padrão miliar. O contato com adulto tossidor — em geral um familiar — é a pista mais valiosa, e por isso a história epidemiológica é parte do exame.</p>
<p>Como a criança não expectora e a baciloscopia é pouco sensível, o diagnóstico usa o <strong>sistema de pontuação</strong> do Ministério da Saúde: clínica (15 pontos), radiografia (15), contato com bacilífero (10), prova tuberculínica de 10 mm ou mais (ou 5 mm em imunodeprimido) (15) e desnutrição (5); <strong>40 pontos ou mais</strong> autorizam tratar sem confirmação bacteriológica, 30 a 35 é possível e pede mais investigação.</p>
<p>O <strong>tratamento</strong> da tuberculose pulmonar em menores de 10 anos é o esquema <strong>RHZ</strong> — rifampicina, isoniazida e pirazinamida por 2 meses — seguido de <strong>RH</strong> por 4 meses, em doses por peso, com comprimidos dispersíveis pediátricos; o etambutol não entra pela dificuldade de monitorar a toxicidade ocular. Nas formas meníngea e osteoarticular, o tratamento dura 12 meses e inclui corticoide na meningite.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A BCG não protege contra a tuberculose pulmonar do adulto nem impede a infecção; ela reduz as formas graves (meníngea e miliar) na criança pequena. Uma criança com BCG e cicatriz pode ter tuberculose — e a cicatriz não invalida a prova tuberculínica de 10 mm ou mais.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pneumonia que não melhora, febre arrastada, emagrecimento e contato com tossidor: pensar em tuberculose.</li>
<li>Pontuação do MS (40 ou mais trata); lavado gástrico ou escarro induzido para TRM-TB, baciloscopia e cultura.</li>
<li>Menores de 10 anos: RHZ 2 meses + RH 4 meses, sem etambutol; testar HIV.</li>
<li>Investigar o caso-fonte e tratar a infecção latente dos contatos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 4 anos com tosse há 3 semanas, radiografia com adenomegalia hilar, mãe com tuberculose bacilífera e PT de 12 mm. Pontuação e conduta? <details><summary>Resposta</summary>Clínica 15 + radiografia 15 + contato 10 + PT 15 = 55 pontos: diagnóstico muito provável, iniciar RHZ.</details></li>
<li>Por que o etambutol não faz parte do esquema abaixo dos 10 anos? <details><summary>Resposta</summary>Pela dificuldade de monitorar a neurite óptica (acuidade e visão de cores) em crianças pequenas.</details></li>
</ol>
`,

"unesp2025#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a rinossinusite bacteriana aguda na criança e indicar o tratamento.</li>
<li>Reconhecer as complicações orbitárias pela classificação de Chandler.</li>
<li>Identificar os sinais de complicação intracraniana e agir como emergência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Rinossinusite bacteriana aguda</dt>
<dd>Sintomas de resfriado que persistem por mais de 10 dias sem melhora, pioram após melhora inicial, ou começam graves (febre alta e secreção purulenta por 3 dias).</dd>
<dt>Celulite pré-septal</dt>
<dd>Chandler I: edema e eritema palpebral, com olho normal, sem proptose nem dor à movimentação.</dd>
<dt>Celulite orbitária e abscessos</dt>
<dd>Chandler II a IV: proptose, dor e limitação do movimento ocular, quemose, redução da acuidade visual.</dd>
<dt>Trombose do seio cavernoso</dt>
<dd>Chandler V: oftalmoplegia (III, IV, VI), paralisia do V, perda visual, meningismo, toxemia e tendência à bilateralidade.</dd>
</dl>
<h4>O essencial</h4>
<p>A criança tem 6 a 8 resfriados por ano, e 5 a 10% deles evoluem para <strong>rinossinusite bacteriana</strong>. O diagnóstico é clínico, por um de três padrões: sintomas <strong>persistentes</strong> por mais de 10 dias sem melhora (rinorreia de qualquer aspecto, tosse diurna que piora à noite), <strong>piora</strong> após melhora inicial ("dupla piora"), ou início <strong>grave</strong> com febre acima de 39 °C e secreção purulenta por 3 dias consecutivos.</p>
<p>As <strong>complicações orbitárias</strong> vêm do seio etmoidal, separado da órbita pela fina lâmina papirácea, e seguem a classificação de <strong>Chandler</strong>. I — celulite pré-septal: pálpebra edemaciada, mas olho que se move e enxerga bem; trata-se com antibiótico, muitas vezes oral. II — celulite orbitária: proptose, dor ao mover o olho, quemose, por vezes diplopia. III — abscesso subperiosteal: coleção entre a lâmina e o periósteo, com proptose e desvio do globo. IV — abscesso orbitário: coleção na gordura orbitária, oftalmoplegia e perda visual.</p>
<p>V — <strong>trombose do seio cavernoso</strong>, a complicação intracraniana: a infecção chega ao seio pelas veias oftálmicas, e o quadro passa a ter <strong>sinais sistêmicos e neurológicos</strong> — toxemia, cefaleia intensa, <strong>sinais meníngeos</strong>, paralisia dos nervos III, IV e VI (oftalmoplegia completa, ptose, midríase), hipoestesia do V, perda visual e, pela comunicação entre os seios, acometimento do <strong>outro olho</strong> em 1 a 2 dias.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Edema palpebral com febre: faça três testes à beira do leito — acuidade visual, movimentação ocular (dor ou limitação) e reflexo pupilar. Qualquer alteração tira o caso da celulite pré-septal e pede tomografia e antibiótico venoso hoje; sinais meníngeos somados a isso significam trombose do seio cavernoso.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rinossinusite bacteriana: persistente (mais de 10 dias), dupla piora ou início grave; amoxicilina 10 a 14 dias.</li>
<li>Chandler I: pré-septal, olho normal. II a IV: proptose, dor ao mover, visão em risco — tomografia, antibiótico venoso, drenagem.</li>
<li>Chandler V: trombose do seio cavernoso — oftalmoplegia, meningismo, toxemia, bilateralidade; emergência.</li>
<li>Acuidade, motilidade e pupila decidem a gravidade à beira do leito.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Pré-escolar com sinusite, edema palpebral, olho que se move sem dor e visão normal. Qual é o estádio e a conduta? <details><summary>Resposta</summary>Chandler I, celulite pré-septal: antibiótico (em geral oral) e reavaliação em 24 a 48 horas.</details></li>
<li>Que achado diferencia a trombose do seio cavernoso do abscesso orbitário? <details><summary>Resposta</summary>Os sinais intracranianos e sistêmicos — meningismo, toxemia, paralisia de múltiplos nervos cranianos — e a tendência a acometer o olho contralateral.</details></li>
</ol>
`,

/* --- Volume 2 · FAMEMA 2026 → ped91–ped100 ----------------------------------------------- */
"famema2026#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer o sono normal do lactente e do pré-escolar.</li>
<li>Diagnosticar a insônia comportamental da infância e seus dois tipos.</li>
<li>Orientar a higiene do sono e saber quando medicação e exames têm lugar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Despertar fisiológico</dt>
<dd>Breves despertares entre os ciclos de sono, normais em todas as idades; a diferença é a capacidade de voltar a dormir sozinho.</dd>
<dt>Associação ao início do sono</dt>
<dd>A criança só adormece com um estímulo externo (mamar, colo, balanço, tela) e o exige a cada despertar da noite.</dd>
<dt>Falta de limites</dt>
<dd>Tipo da insônia comportamental do pré-escolar e escolar: recusa e adiamento da hora de dormir sem rotina firme.</dd>
<dt>Higiene do sono</dt>
<dd>Horário fixo, ritual previsível, ambiente escuro e silencioso, sem telas e sem alimentação como indutor.</dd>
</dl>
<h4>O essencial</h4>
<p>Aos 12 a 18 meses a criança dorme 11 a 14 horas por dia, com um ou dois cochilos, e todo lactente acorda <strong>várias vezes por noite</strong> entre os ciclos de sono; o que separa a criança que "dorme bem" da que "não dorme" é a capacidade de <strong>voltar a dormir sozinha</strong>.</p>
<p>O diagnóstico é pela história: como a criança adormece, quantas vezes acorda, o que a faz voltar a dormir, horários, cochilos, telas, e como ela dorme em outro ambiente (creche, casa dos avós) — quando dorme sozinha fora de casa, o problema é de hábito. Sinais de <strong>distúrbio respiratório</strong> — ronco, respiração bucal, pausas, sono agitado, sudorese — mudam a direção e pedem avaliação de adenoide e amígdalas e, se necessário, polissonografia. Dor, refluxo, eczema com prurido e cólica também acordam, e o exame físico os procura.</p>
<p>O tratamento é <strong>comportamental</strong>: horário fixo de dormir e acordar, ritual de 20 a 30 minutos sempre igual (banho, jantar, história, luz baixa), quarto escuro e silencioso, última mamada antes do ritual e não como indutor, e ensino do adormecer independente — colocar a criança no berço ainda acordada e dar suporte gradual (extinção gradual ou presença com retirada progressiva). <strong>Telas</strong> estão fora para menores de 2 anos e nunca na hora de dormir, em qualquer idade: a luz e o conteúdo atrasam a melatonina e excitam.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte sobre o sono em toda consulta de puericultura e oriente antes do problema: aos 4 a 6 meses a criança já pode aprender a adormecer no berço. Família exausta é fator de risco para depressão materna e para violência — o sono da criança é assunto de saúde da família.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Despertares são normais; o problema é não saber voltar a dormir sozinho.</li>
<li>Insônia comportamental: associação ao início do sono (lactente) e falta de limites (pré-escolar).</li>
<li>Tratamento: rotina fixa, ritual, sem telas, adormecer independente; resultados em 1 a 2 semanas.</li>
<li>Melatonina e polissonografia só com indicação específica (neurodesenvolvimento, suspeita de apneia).</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 10 meses dorme no colo e acorda 4 vezes pedindo colo; na creche dorme sozinho. Diagnóstico e conduta? <details><summary>Resposta</summary>Insônia comportamental por associação ao início do sono: rotina fixa, sem telas e aprendizado do adormecer no berço, sem medicação.</details></li>
<li>Que sintomas noturnos mudam o raciocínio para apneia obstrutiva do sono? <details><summary>Resposta</summary>Ronco habitual, respiração bucal, pausas respiratórias, sono agitado e sudorese — indicam avaliação de adenoide e amígdalas.</details></li>
</ol>
`,

"famema2026#34": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a dermatite atópica pela morfologia e pela distribuição em cada idade.</li>
<li>Montar o tratamento de base e o das crises: hidratação, corticoide, inibidores da calcineurina.</li>
<li>Reconhecer e tratar a infecção secundária bacteriana e viral.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Dermatite atópica</dt>
<dd>Doença inflamatória crônica da pele, com barreira cutânea deficiente, prurido intenso e curso em surtos; 15 a 20% das crianças.</dd>
<dt>Liquenificação</dt>
<dd>Espessamento da pele com acentuação dos sulcos, resultado do ato de coçar crônico.</dd>
<dt>Impetiginização</dt>
<dd>Infecção secundária por <em>Staphylococcus aureus</em> (às vezes estreptococo): exsudato, pústulas e crostas melicéricas sobre o eczema.</dd>
<dt>Eczema herpético</dt>
<dd>Disseminação do herpes simples na pele atópica: vesículas monomórficas umbilicadas e erosões em saca-bocado, febre; emergência com aciclovir.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>dermatite atópica</strong> começa em geral antes dos 2 anos e tem três marcas: <strong>prurido</strong>, lesões eczematosas e <strong>cronicidade</strong> em surtos. A distribuição muda com a idade — no lactente, face (poupando o centro), couro cabeludo e superfícies extensoras; no pré-escolar e escolar, as <strong>dobras</strong> (fossas cubitais e poplíteas, pescoço, punhos, tornozelos), onde o coçar crônico produz liquenificação e escoriações; no adolescente, dobras, mãos e face. Pele seca generalizada, piora no inverno e no calor com suor, e história pessoal ou familiar de asma, rinite ou alergia alimentar completam o quadro.</p>
<p>O <strong>tratamento de base</strong> é a restauração da barreira: <strong>hidratante</strong> em quantidade generosa (250 g por semana numa criança), duas ou mais vezes ao dia e logo após o banho, que deve ser morno, curto e com sabonete suave; evitar lã, amaciantes perfumados e superaquecimento.</p>
<p>A pele atópica é colonizada por <em>S. aureus</em> em 90% dos pacientes, e a <strong>infecção secundária</strong> é a complicação mais comum: exsudato, pústulas e <strong>crostas melicéricas</strong> sobre as lesões, piora súbita do prurido e do eczema. Lesões localizadas recebem <strong>antibiótico tópico</strong> (mupirocina ou ácido fusídico) por 5 a 7 dias; infecção extensa ou com febre, cefalexina oral por 7 a 10 dias — e o corticoide tópico é mantido, porque a inflamação alimenta a infecção.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Escreva o plano por etapas para a família — o "plano de ação do eczema": o que usar todo dia (hidratante), o que usar na crise (qual corticoide, onde, por quantos dias) e quando voltar (crostas amareladas, vesículas, febre). A adesão melhora quando a família sabe que o corticoide tópico bem usado é seguro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Prurido, eczema e surtos; lactente na face e extensores, criança maior nas dobras.</li>
<li>Base: hidratante abundante e banho curto; crise: corticoide tópico de potência conforme local e idade; calcineurina para face e manutenção.</li>
<li>Crostas melicéricas = impetiginização: antibiótico tópico ou cefalexina, mantendo o anti-inflamatório.</li>
<li>Vesículas umbilicadas e febre = eczema herpético: aciclovir sistêmico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente de 8 meses com eczema nas bochechas. Qual corticoide tópico e por quanto tempo? <details><summary>Resposta</summary>Baixa potência (hidrocortisona 1%) por até 7 dias, com hidratante intensivo; nunca potência alta na face.</details></li>
<li>Criança atópica com vesículas monomórficas, erosões puntiformes e febre. Diagnóstico e conduta? <details><summary>Resposta</summary>Eczema herpético: aciclovir sistêmico imediato e avaliação oftalmológica se houver lesão perto dos olhos.</details></li>
</ol>
`,

"famema2026#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir puberdade precoce e suas variantes benignas.</li>
<li>Diferenciar puberdade precoce central de periférica pela clínica e pelo laboratório.</li>
<li>Indicar a investigação e o tratamento com análogo de GnRH.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Puberdade precoce</dt>
<dd>Caracteres sexuais secundários antes dos 8 anos na menina e dos 9 no menino.</dd>
<dt>Puberdade precoce central</dt>
<dd>Ativação do eixo hipotálamo-hipófise-gônadas: sequência puberal normal, mas adiantada, com LH puberal.</dd>
<dt>Puberdade precoce periférica</dt>
<dd>Esteroides sexuais sem ativação do eixo (tumores, cistos, hiperplasia adrenal, McCune-Albright, exógenos); LH suprimido.</dd>
<dt>Variantes benignas</dt>
<dd>Telarca precoce isolada, adrenarca precoce isolada e menarca isolada: sem estirão, sem avanço da idade óssea, sem progressão.</dd>
</dl>
<h4>O essencial</h4>
<p>A puberdade feminina começa pela <strong>telarca</strong> (M2), entre 8 e 13 anos, seguida em 6 a 12 meses pela pubarca, pelo estirão e, 2 a 2,5 anos depois, pela menarca; no menino, pelo aumento testicular (4 mL ou mais), entre 9 e 14 anos. É <strong>precoce</strong> antes dos 8 anos na menina e dos 9 no menino. Nem todo sinal precoce é doença: a <strong>telarca isolada</strong> do lactente e da pré-escolar (mamas pequenas, sem outros sinais, sem estirão, idade óssea normal) e a <strong>adrenarca isolada</strong> (pelos pubianos e odor axilar por ativação adrenal, comum na criança com sobrepeso) são variantes benignas que só exigem acompanhamento.</p>
<p>O que separa a puberdade verdadeira das variantes é a <strong>progressão</strong> e o <strong>eixo</strong>: avanço rápido dos estádios de Tanner em 3 a 6 meses, <strong>velocidade de crescimento</strong> acelerada (acima de 6 cm/ano antes do estirão esperado), <strong>idade óssea</strong> avançada em mais de 1 ano e, no laboratório, <strong>LH basal</strong> puberal (acima de 0,3 UI/L em ensaios ultrassensíveis) ou pico de LH acima de 5 UI/L após estímulo com GnRH — que caracterizam a <strong>puberdade precoce central</strong>.</p>
<p>A <strong>puberdade periférica</strong> tem LH suprimido com esteroides altos e pede investigação de cisto ou tumor ovariano, tumor adrenal ou testicular, hiperplasia adrenal congênita, síndrome de McCune-Albright (manchas café com leite, displasia óssea) e exposição a cremes ou medicamentos. O <strong>tratamento</strong> da forma central progressiva é o <strong>análogo de GnRH</strong> (leuprorrelina ou triptorrelina de depósito), que bloqueia o eixo, interrompe a progressão, preserva a estatura final e protege o ajuste psicossocial; é mantido até a idade puberal normal. A periférica se trata pela causa.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Três perguntas resolvem a maioria dos casos: a criança cresceu mais rápido nos últimos 6 meses? A idade óssea está avançada? Os sinais progrediram? Três "não" é variante benigna com retorno em 4 a 6 meses; qualquer "sim" é investigação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Precoce: antes dos 8 anos na menina e dos 9 no menino.</li>
<li>Variantes benignas: telarca ou adrenarca isoladas, sem estirão, sem avanço ósseo, sem progressão.</li>
<li>Central: estirão, idade óssea avançada, LH puberal; ressonância de crânio para causa; análogo de GnRH.</li>
<li>Periférica: LH suprimido; procurar cisto, tumor, hiperplasia adrenal, McCune-Albright, exógenos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Menina de 2 anos com mamas M2 há 6 meses, sem outros sinais, crescimento e idade óssea normais. Conduta? <details><summary>Resposta</summary>Telarca precoce isolada: acompanhamento clínico a cada 4 a 6 meses, sem exames adicionais nem tratamento.</details></li>
<li>Menino de 7 anos com pubarca, aumento peniano e testículos de 2 mL. Central ou periférica? <details><summary>Resposta</summary>Periférica: a virilização sem crescimento testicular indica andrógenos de origem adrenal (ou exógena), não ativação do eixo.</details></li>
</ol>
`,

"famema2026#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Calcular a dose ingerida de paracetamol e reconhecer o limiar tóxico.</li>
<li>Descrever as fases da intoxicação e o papel do nomograma de Rumack-Matthew.</li>
<li>Indicar a N-acetilcisteína e saber quando a descontaminação gástrica tem lugar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Dose tóxica</dt>
<dd>150 mg/kg ou mais em dose única (ou 7,5 g no adolescente); abaixo disso, com fígado sadio, o risco é mínimo.</dd>
<dt>NAPQI</dt>
<dd>Metabólito reativo formado pelo citocromo P450 quando a glicuronidação e a sulfatação saturam; neutralizado pela glutationa até ela acabar.</dd>
<dt>Nomograma de Rumack-Matthew</dt>
<dd>Relaciona o nível sérico de paracetamol ao tempo desde a ingestão (4 a 24 horas) e define quem trata; só vale para ingestão única com horário conhecido.</dd>
<dt>N-acetilcisteína</dt>
<dd>Precursor da glutationa; venosa em 21 horas (ou oral em 72 horas); máxima eficácia nas primeiras 8 horas.</dd>
</dl>
<h4>O essencial</h4>
<p>O paracetamol é o analgésico mais presente nas casas e a intoxicação medicamentosa mais comum da infância. Em dose terapêutica, 90% é conjugado no fígado e eliminado; em <strong>sobredose</strong>, as vias saturam e o excesso vai para o citocromo P450, que gera o <strong>NAPQI</strong>, tóxico para o hepatócito — até que a glutationa, que o neutraliza, se esgota.</p>
<p>A intoxicação é <strong>silenciosa</strong> no início. Fase 1 (até 24 horas): nada ou náuseas, vômitos e mal-estar. Fase 2 (24 a 72 horas): dor em hipocôndrio direito, elevação das transaminases, alargamento do tempo de protrombina. Fase 3 (72 a 96 horas): hepatite fulminante — encefalopatia, coagulopatia, hipoglicemia, acidose, insuficiência renal. Fase 4: recuperação ou morte. A ausência de sintomas nas primeiras horas é justamente a armadilha, porque a janela do antídoto fecha enquanto a criança parece bem.</p>
<p>A conduta na ingestão única com horário conhecido: dosar o <strong>paracetamol sérico às 4 horas</strong> (ou o mais cedo possível depois disso) e plotar no <strong>nomograma de Rumack-Matthew</strong> — acima da linha de tratamento (150 µg/mL às 4 horas), inicia-se a <strong>N-acetilcisteína</strong>. Quando o resultado não vem a tempo ou a dose relatada ultrapassa 150 mg/kg, começa-se o antídoto enquanto se aguarda, e ele é suspenso se o nível ficar abaixo da linha. O esquema venoso dura 21 horas (150, 50 e 100 mg/kg em três etapas) e é prolongado se as transaminases subirem.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Faça a conta na frente dos pais: número de comprimidos vezes a concentração, dividido pelo peso. Em comprimidos de 750 mg, dois já ultrapassam 150 mg/kg numa criança de 10 kg. Toda ingestão acima do limiar fica em observação com antídoto, por mais saudável que a criança pareça.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tóxico a partir de 150 mg/kg em dose única; NAPQI e esgotamento da glutationa.</li>
<li>Assintomático no primeiro dia; hepatite entre 24 e 96 horas.</li>
<li>Nível às 4 horas no nomograma; acima da linha ou sem resultado a tempo: N-acetilcisteína, melhor nas primeiras 8 horas.</li>
<li>Carvão só até 1 a 2 horas; lavagem gástrica não; alta sem antídoto é erro.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança de 12 kg ingeriu 1,5 g de paracetamol há 90 minutos, assintomática. Conduta? <details><summary>Resposta</summary>125 mg/kg, abaixo do limiar: carvão ativado ainda pode ser considerado; dosar o nível às 4 horas e tratar se acima da linha; sem fatores de risco, em geral observação.</details></li>
<li>Por que não se usa o nomograma na criança que tomou doses repetidas por 3 dias? <details><summary>Resposta</summary>Porque ele foi construído para ingestão única com horário conhecido; nas repetidas a decisão usa o nível, as transaminases e a clínica.</details></li>
</ol>
`,

"famema2026#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o choque na criança pelos sinais de hipoperfusão, antes da hipotensão.</li>
<li>Executar a primeira hora do choque séptico: oxigênio, acesso, volume, antibiótico, vasoativo.</li>
<li>Distinguir choque frio de quente e escolher a droga vasoativa.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Choque compensado</dt>
<dd>Taquicardia, enchimento capilar alterado, pulsos finos ou amplos, alteração do nível de consciência, com pressão ainda normal.</dd>
<dt>Choque descompensado</dt>
<dd>Hipotensão (sistólica abaixo de 70 + 2 × idade em anos, de 1 a 10 anos): sinal tardio na criança.</dd>
<dt>Choque frio</dt>
<dd>Extremidades frias, enchimento capilar lento, pulsos finos, pressão de pulso estreita: baixo débito; adrenalina é a droga inicial.</dd>
<dt>Choque quente</dt>
<dd>Extremidades quentes, enchimento capilar rápido, pulsos amplos, pressão de pulso larga: vasodilatação; noradrenalina.</dd>
</dl>
<h4>O essencial</h4>
<p>A criança compensa o choque com <strong>taquicardia</strong> e <strong>vasoconstrição</strong> por muito tempo, e a pressão arterial só cai no fim; esperar a hipotensão é chegar atrasado. Reconhece-se o choque pelos sinais de <strong>hipoperfusão</strong>: taquicardia inexplicada, enchimento capilar acima de 2 segundos (ou em flash), extremidades frias ou pulsos amplos, pulsos periféricos finos, oligúria, irritabilidade ou sonolência.</p>
<p>A <strong>primeira hora</strong> segue uma sequência: oxigênio e via aérea; <strong>acesso vascular</strong> em até 5 minutos (dois periféricos; intraósseo se falhar); coleta de culturas, gasometria, lactato e glicemia sem atrasar o tratamento; <strong>expansão volêmica</strong> com cristaloide em bolos de <strong>10 a 20 mL/kg</strong> em 5 a 20 minutos, reavaliando após cada bolo (perfusão, frequência, fígado, estertores) até 40 a 60 mL/kg na primeira hora, parando se surgem sinais de sobrecarga; <strong>antibiótico</strong> empírico de amplo espectro dentro da primeira hora (ceftriaxona, mais oxacilina ou vancomicina conforme o foco, ampicilina e gentamicina no neonato); correção da hipoglicemia e da hipocalcemia.</p>
<p>A escolha da droga segue o <strong>padrão</strong>: no <strong>choque frio</strong> (baixo débito, vasoconstrição) a <strong>adrenalina</strong> em infusão contínua; no <strong>choque quente</strong> (vasodilatação) a <strong>noradrenalina</strong>. Hidrocortisona é considerada no choque refratário a catecolaminas ou com risco de insuficiência adrenal. A meta é restaurar a perfusão — enchimento capilar de 2 segundos ou menos, pulsos normais, diurese de 1 mL/kg/h, consciência, lactato em queda — e transferir para a UTI.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Os três sinais de <strong>sobrecarga</strong> que mandam parar o volume: hepatomegalia que aumenta, estertores novos e piora do desconforto respiratório. Reavalie depois de cada bolo — o volume é remédio, e remédio tem dose.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Choque na criança = hipoperfusão com pressão normal; hipotensão é tardia.</li>
<li>Primeira hora: oxigênio, acesso em 5 minutos, culturas, bolos de 10–20 mL/kg até 40–60 mL/kg, antibiótico, glicose e cálcio.</li>
<li>Refratário a volume: adrenalina no choque frio, noradrenalina no quente; hidrocortisona se refratário a catecolaminas.</li>
<li>Metas: enchimento capilar até 2 s, pulsos, diurese, consciência, lactato em queda; UTI.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Lactente com sepse recebeu 60 mL/kg e segue frio, com enchimento capilar de 4 s e pressão baixa. Qual é a próxima droga e por que via? <details><summary>Resposta</summary>Adrenalina em infusão contínua (choque frio), pelo acesso periférico ou intraósseo disponível, sem esperar o acesso central.</details></li>
<li>Qual é o limite de pressão sistólica que define hipotensão numa criança de 4 anos? <details><summary>Resposta</summary>Abaixo de 78 mmHg (70 + 2 × 4) — mas o choque deve ser reconhecido antes disso, pelos sinais de hipoperfusão.</details></li>
</ol>
`,

"famema2026#42": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a hiponatremia pelo estado volêmico e pela osmolalidade urinária.</li>
<li>Reconhecer a SIADH e suas causas na criança internada.</li>
<li>Tratar a hiponatremia conforme os sintomas, com a velocidade de correção segura.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hiponatremia</dt>
<dd>Sódio abaixo de 135 mEq/L; grave abaixo de 125 ou com sintomas neurológicos.</dd>
<dt>SIADH</dt>
<dd>Secreção inapropriada de hormônio antidiurético: hiponatremia euvolêmica com urina concentrada (osmolalidade acima de 100 mOsm/kg) e sódio urinário acima de 30 a 40 mEq/L, sem doença renal, adrenal ou tireoidiana.</dd>
<dt>Correção lenta</dt>
<dd>Elevação do sódio de no máximo 8 a 10 mEq/L em 24 horas, para evitar a desmielinização osmótica.</dd>
<dt>Salina hipertônica</dt>
<dd>NaCl a 3%, 2 a 3 mL/kg em 10 a 20 minutos, repetida até cessarem os sintomas graves ou subir 5 mEq/L.</dd>
</dl>
<h4>O essencial</h4>
<p>A hiponatremia é o distúrbio eletrolítico mais comum da criança internada e, na maioria das vezes, é <strong>iatrogênica ou por excesso de água</strong>: soros hipotônicos de manutenção em criança que, por doença, está secretando hormônio antidiurético. O raciocínio começa pelo <strong>estado volêmico</strong>. <strong>Hipovolêmica</strong> (diarreia, vômitos, diuréticos, perda renal de sal): sinais de desidratação, sódio urinário baixo (exceto na perda renal); trata-se com soro fisiológico. <strong>Hipervolêmica</strong> (síndrome nefrótica, insuficiência cardíaca, cirrose): edema; restrição de água e sal, diurético.</p>
<p>A <strong>SIADH</strong> na pediatria acompanha pneumonia, meningite e encefalite, pós-operatório, trauma craniano, dor, náusea, ventilação mecânica e drogas (carbamazepina, ciclofosfamida, antidepressivos). O rim retém água, dilui o plasma e, para manter o volume, excreta sódio: urina <strong>concentrada</strong> (osmolalidade acima de 100 mOsm/kg) com <strong>sódio urinário alto</strong> (acima de 30 a 40 mEq/L), ácido úrico baixo, função renal, adrenal e tireoidiana normais.</p>
<p>O tratamento tem duas velocidades. Com <strong>sintomas graves</strong> (convulsão, coma, sinais de herniação), <strong>salina a 3%</strong> em bolos de 2 a 3 mL/kg até controlar os sintomas ou subir 5 mEq/L — e então parar. Com sintomas leves a moderados ou sem sintomas, trata-se a causa: na SIADH, <strong>restrição hídrica</strong> a dois terços da manutenção ou menos que o débito urinário, soro isotônico se precisar de volume, e correção do sódio de no máximo <strong>8 a 10 mEq/L em 24 horas</strong>; na hipovolêmica, soro fisiológico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Prevenir é mais fácil que tratar: a criança internada recebe soro de manutenção <strong>isotônico</strong> (soro fisiológico com glicose e potássio), não o antigo soro a um quarto ou a meio. A hiponatremia hospitalar caiu drasticamente onde essa regra foi adotada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Classificar pelo volume: hipovolêmica (soro fisiológico), hipervolêmica (restrição e diurético), euvolêmica (SIADH e outras).</li>
<li>SIADH: euvolemia, urina concentrada, sódio urinário alto; pneumonia, meningite, pós-operatório, drogas.</li>
<li>Sintomas graves: salina 3% em bolos de 2–3 mL/kg; demais: restrição hídrica e correção de até 8–10 mEq/L por dia.</li>
<li>Soro de manutenção isotônico previne a hiponatremia hospitalar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Criança com meningite, sódio de 118, convulsionando. Qual é a primeira medida? <details><summary>Resposta</summary>Salina a 3%, 2 a 3 mL/kg em 10 a 20 minutos, repetida até a crise parar ou o sódio subir 5 mEq/L; depois correção lenta.</details></li>
<li>Qual é a diferença do sódio urinário entre a SIADH e a hiponatremia por diarreia? <details><summary>Resposta</summary>Na SIADH o sódio urinário é alto (acima de 30–40 mEq/L); na diarreia o rim retém sódio e ele fica baixo (abaixo de 20).</details></li>
</ol>
`,

"famema2026#43": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os fatores de risco e a apresentação da trombose venosa na criança.</li>
<li>Confirmar o diagnóstico e tratar com anticoagulação.</li>
<li>Decidir o destino do cateter venoso central associado à trombose.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tromboembolismo venoso pediátrico</dt>
<dd>Raro fora do hospital; mais de 90% dos casos têm fator de risco, e o cateter venoso central é o principal.</dd>
<dt>Trombose associada a cateter</dt>
<dd>Trombo na veia que contém o dispositivo; sintomática (dor, edema, circulação colateral) ou achado de imagem.</dd>
<dt>Heparina de baixo peso molecular</dt>
<dd>Enoxaparina 1 mg/kg a cada 12 horas (1,5 mg/kg abaixo de 2 meses), ajustada pelo anti-Xa (0,5 a 1 UI/mL); tratamento de escolha na criança.</dd>
<dt>Síndrome pós-trombótica</dt>
<dd>Dor, edema e alteração cutânea crônicos no membro afetado; sequela em até um quarto das tromboses na criança.</dd>
</dl>
<h4>O essencial</h4>
<p>A trombose venosa na criança é um fenômeno <strong>hospitalar</strong>: acomete sobretudo neonatos e adolescentes, e quase sempre há um gatilho — <strong>cateter venoso central</strong> (PICC, cateter umbilical, port, cateter de hemodiálise), câncer e sua quimioterapia (asparaginase na leucemia linfoblástica), cirurgia e trauma, imobilização, infecção, cardiopatia, síndrome nefrótica, doença inflamatória intestinal, uso de estrogênio e trombofilias hereditárias.</p>
<p>A apresentação depende do sítio: no membro superior com PICC, <strong>dor, edema e assimetria</strong> do braço, circulação colateral no ombro e no tórax, cateter que não infunde ou não reflui; nos membros inferiores, dor e edema da panturrilha e coxa; na veia cava superior, edema de face e pescoço; e, quando o trombo embola, dispneia e dor torácica. Febre e sinais inflamatórios sugerem infecção associada do cateter, mas a trombose isolada não dá febre nem leucocitose.</p>
<p>O tratamento é a <strong>anticoagulação</strong>, em geral com <strong>heparina de baixo peso molecular</strong> (ou heparina não fracionada quando há risco de sangramento ou de procedimento, pela reversibilidade), por <strong>6 semanas a 3 meses</strong> na trombose provocada, mais tempo se o fator persiste; os anticoagulantes orais diretos (rivaroxabana, dabigatrana) já têm aprovação pediátrica a partir de certas idades.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Investigue <strong>trombofilia</strong> (fator V de Leiden, mutação da protrombina, deficiências de proteína C, S e antitrombina, anticorpos antifosfolípides) na trombose sem fator provocador claro, na recorrente, na extensa ou com história familiar — não de rotina na trombose por cateter, em que o resultado raramente muda a conduta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Trombose na criança é hospitalar: cateter central, câncer, cirurgia, imobilização, infecção.</li>
<li>Dor, edema e assimetria do membro com o cateter; Doppler confirma; sem febre não há infecção.</li>
<li>Heparina de baixo peso molecular por 6 semanas a 3 meses; remover o cateter após 3 a 5 dias de anticoagulação se não for mais necessário.</li>
<li>Trombolítico só se o membro ou a vida estão em risco; trombofilia só fora da trombose por cateter.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Adolescente em quimioterapia com trombose no braço do PICC; o cateter funciona e será necessário por meses. Retirar? <details><summary>Resposta</summary>Não obrigatoriamente: pode ser mantido sob anticoagulação com heparina de baixo peso molecular, com reavaliação clínica e por imagem.</details></li>
<li>Qual é o exame de escolha para confirmar trombose de veia subclávia? <details><summary>Resposta</summary>Ultrassonografia com Doppler; se a clavícula limitar a janela, venografia por tomografia ou ressonância.</details></li>
</ol>
`,

"famema2026#45": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar o lactente febril com até 60 dias e indicar a investigação completa.</li>
<li>Escolher o antibiótico empírico da sepse neonatal tardia.</li>
<li>Reconhecer os sinais que exigem aciclovir empírico: a infecção neonatal pelo herpes simples.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Febre no lactente até 60 dias</dt>
<dd>Temperatura de 38 °C ou mais; 10% têm infecção bacteriana grave (urinária, bacteremia, meningite).</dd>
<dt>Sepse neonatal tardia</dt>
<dd>Após 72 horas de vida: estreptococo do grupo B, <em>E. coli</em> e enterobactérias, <em>Listeria</em>, enterococo, estafilococos.</dd>
<dt>Herpes neonatal</dt>
<dd>Transmissão no parto; três formas: pele-olho-boca, do sistema nervoso central e disseminada (hepatite, pneumonite, coagulopatia); surge entre a 1ª e a 4ª semana.</dd>
<dt>Aciclovir empírico</dt>
<dd>60 mg/kg/dia venoso em 3 doses, até o resultado da PCR, quando há vesículas, convulsão, pleocitose, hepatite, plaquetopenia ou sepse sem resposta.</dd>
</dl>
<h4>O essencial</h4>
<p>Febre no <strong>lactente até 60 dias</strong> é uma situação à parte: a imunidade é imatura, o exame físico engana, e 1 em cada 10 tem infecção bacteriana grave — infecção urinária na maioria, bacteremia e meningite nos mais graves. O lactente de <strong>aparência tóxica</strong> (letargia, perfusão ruim, recusa alimentar, hipotonia, gemência) ou com até 21 a 28 dias recebe investigação completa — hemograma, hemocultura, urina por cateterismo com cultura, <strong>líquor</strong>, PCR e procalcitonina — e <strong>antibiótico empírico</strong> internado.</p>
<p>O esquema empírico da <strong>sepse neonatal tardia</strong> cobre os agentes do parto e da comunidade: <strong>ampicilina</strong> (estreptococo do grupo B, <em>Listeria</em>, enterococo) mais uma <strong>cefalosporina de terceira geração</strong> — cefotaxima ou, após o período neonatal, ceftriaxona — ou um aminoglicosídeo (gentamicina), com vancomicina acrescentada quando há suspeita de estafilococo (cateter, pele). O tratamento é ajustado pelas culturas em 48 a 72 horas.</p>
<p>Alguns dados obrigam a pensar no <strong>herpes simples neonatal</strong>, cuja mortalidade sem tratamento passa de 50% na forma disseminada: <strong>vesículas</strong> na pele, nos olhos ou na boca (ausentes em até metade dos casos), <strong>convulsão</strong> ou pleocitose liquórica com cultura negativa, <strong>hepatite</strong> (transaminases elevadas), plaquetopenia, coagulopatia, pneumonite, e sepse que não responde ao antibiótico — em geral entre a 1ª e a 4ª semana de vida, e a mãe pode não ter história de herpes.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Faça três perguntas em todo neonato febril antes de prescrever: há vesículas em algum lugar (olhe o couro cabeludo e a boca)? As transaminases estão altas? O líquor tem células com Gram negativo? Um "sim" acrescenta aciclovir hoje, não depois da PCR.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Febre até 60 dias: 10% de infecção bacteriana grave; tóxico ou até 28 dias = investigação completa e antibiótico internado.</li>
<li>Sepse tardia: ampicilina + cefotaxima (ou gentamicina); vancomicina se estafilococo.</li>
<li>Vesículas, convulsão, pleocitose, hepatite, plaquetopenia ou sepse sem resposta = acrescentar aciclovir 60 mg/kg/dia.</li>
<li>PCR para HSV em sangue, líquor e lesões; 14 a 21 dias de tratamento e supressão por 6 meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN de 10 dias com febre, bom estado geral, sem vesículas, com urina normal e líquor com 2 células. Precisa de aciclovir? <details><summary>Resposta</summary>Não há indicação empírica: sem vesículas, convulsão, pleocitose ou hepatite, mantém-se o antibiótico empírico e observa-se.</details></li>
<li>Qual é o esquema empírico de antibióticos para um lactente de 3 semanas com suspeita de sepse? <details><summary>Resposta</summary>Ampicilina mais cefotaxima (ou gentamicina), ajustados pelas culturas em 48 a 72 horas.</details></li>
</ol>
`,

"famema2026#46": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar icterícia fisiológica, do aleitamento, do leite materno e colestática.</li>
<li>Investigar a icterícia prolongada do recém-nascido pelo fracionamento da bilirrubina.</li>
<li>Reconhecer os sinais de alarme da atresia de vias biliares e a urgência do encaminhamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Icterícia prolongada</dt>
<dd>Persistência além de 14 dias no termo (21 no prematuro): obriga a dosar bilirrubina total e direta.</dd>
<dt>Icterícia do aleitamento</dt>
<dd>Primeira semana, por baixa ingestão de leite: desidratação, perda de peso, poucas fezes; trata-se melhorando a amamentação.</dd>
<dt>Icterícia do leite materno</dt>
<dd>Da 2ª à 12ª semana, em bebê que mama bem e ganha peso; indireta, benigna, por fatores do leite que aumentam a reabsorção intestinal de bilirrubina.</dd>
<dt>Colestase neonatal</dt>
<dd>Bilirrubina direta acima de 1 mg/dL (ou acima de 20% do total); nunca é fisiológica — atresia biliar até prova em contrário.</dd>
</dl>
<h4>O essencial</h4>
<p>A icterícia que persiste além de <strong>2 semanas</strong> no recém-nascido a termo tem uma pergunta obrigatória: <strong>indireta ou direta?</strong>. A hiperbilirrubinemia <strong>indireta</strong> prolongada em um bebê que mama bem, ganha peso, tem fezes amareladas e urina clara é, na grande maioria, a <strong>icterícia do leite materno</strong>, que acomete até um terço dos lactentes amamentados: começa depois da primeira semana, atinge o pico na 2ª ou 3ª e pode durar até 12 semanas, com bilirrubina em geral abaixo de 15 mg/dL.</p>
<p>Antes de rotular, afastam-se as outras causas de indireta prolongada: <strong>hemólise</strong> (Coombs, reticulócitos, esfregaço, G6PD), <strong>hipotireoidismo</strong> (TSH da triagem e sérico), infecção urinária (que pode se manifestar só por icterícia), hematomas e policitemia, obstrução intestinal, e a <strong>icterícia do aleitamento</strong> propriamente — a do bebê que mama <em>pouco</em>, perde peso, tem poucas fezes e está desidratado na primeira semana, cujo tratamento é corrigir a amamentação, não suspendê-la.</p>
<p>A hiperbilirrubinemia <strong>direta</strong> — acima de 1 mg/dL ou de 20% do total — é sempre patológica e é a emergência diagnóstica da icterícia prolongada, porque a principal causa cirúrgica, a <strong>atresia de vias biliares</strong>, só tem bom resultado quando a portoenterostomia de Kasai é feita antes de 60 dias de vida.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pergunte a cor das fezes a toda mãe de bebê ictérico com mais de 2 semanas e peça para mostrar a fralda ou a foto. Fezes brancas ou amarelo-claras valem uma bilirrubina direta no mesmo dia — não na próxima consulta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Icterícia além de 14 dias: dosar bilirrubina total e direta.</li>
<li>Indireta em bebê que mama bem e ganha peso, sem hemólise nem hipotireoidismo: icterícia do leite materno — manter o peito e acompanhar.</li>
<li>Icterícia do aleitamento (primeira semana, baixa ingestão): corrigir a amamentação.</li>
<li>Direta acima de 1 mg/dL, acolia e colúria: colestase — atresia biliar até prova em contrário, Kasai antes de 60 dias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN de 20 dias, amamentado, ganhando peso, ictérico, com fezes amarelo-claras e urina escura. Qual é o próximo passo? <details><summary>Resposta</summary>Bilirrubina total e direta no mesmo dia: acolia e colúria apontam colestase e a atresia biliar precisa ser afastada com urgência.</details></li>
<li>Por que não se suspende a amamentação para "testar" a icterícia do leite materno? <details><summary>Resposta</summary>Porque a queda da bilirrubina em 48 horas não muda a conduta, e a interrupção arrisca o aleitamento sem benefício ao bebê.</details></li>
</ol>
`,

"famema2026#47": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Montar o raciocínio da cianose neonatal: cardíaca, pulmonar ou outra.</li>
<li>Usar o teste da hiperóxia, as saturações pré e pós-ductal e a radiografia.</li>
<li>Reconhecer a cardiopatia dependente do canal arterial e iniciar a prostaglandina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cianose central</dt>
<dd>Lábios, língua e mucosas azulados; saturação abaixo de 85%; a periférica (mãos e pés) é normal nos primeiros dias.</dd>
<dt>Teste da hiperóxia</dt>
<dd>Gasometria arterial após 10 minutos de oxigênio a 100%: PaO₂ acima de 150 mmHg afasta shunt fixo; abaixo de 100, cardiopatia cianótica provável.</dd>
<dt>Saturação pré e pós-ductal</dt>
<dd>Mão direita versus pé; diferença maior que 10% indica shunt direita-esquerda pelo canal (hipertensão pulmonar, coarctação, interrupção do arco).</dd>
<dt>Prostaglandina E1</dt>
<dd>Alprostadil 0,01 a 0,05 µg/kg/min para manter o canal arterial aberto; efeitos adversos: apneia, febre, hipotensão, rubor.</dd>
</dl>
<h4>O essencial</h4>
<p>Cianose central no recém-nascido tem três grandes causas: <strong>pulmonar</strong> (síndrome do desconforto respiratório, taquipneia transitória, pneumonia, aspiração de mecônio, pneumotórax, hérnia diafragmática), <strong>cardíaca</strong> (cardiopatias com shunt direita-esquerda) e <strong>circulatória ou outra</strong> (hipertensão pulmonar persistente, sepse, policitemia, metemoglobinemia, hipoglicemia, doença neurológica com hipoventilação).</p>
<p>Três ferramentas organizam a investigação. O <strong>teste da hiperóxia</strong>: PaO₂ que sobe acima de 150 mmHg com oxigênio a 100% indica causa pulmonar; que fica abaixo de 100 indica shunt fixo — cardiopatia cianótica (ou hipertensão pulmonar grave).</p>
<p>Na suspeita de cardiopatia cianótica em que o fluxo pulmonar ou a mistura depende do canal arterial, inicia-se <strong>prostaglandina E1</strong> em infusão contínua — ela reabre e mantém o canal e melhora a saturação em minutos; a equipe fica pronta para a <strong>apneia</strong> (comum, sobretudo com doses maiores), febre e hipotensão. Oxigênio em alta concentração é usado com cautela, porque fecha o canal e aumenta o fluxo pulmonar nas lesões com shunt. O bebê é estabilizado — glicemia, temperatura, acesso, cálcio — e transferido para o centro de cardiologia pediátrica, onde a atriosseptostomia de Rashkind (na transposição) ou a cirurgia completam o tratamento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O <strong>teste do coraçãozinho</strong> (oximetria de mão direita e pé entre 24 e 48 horas) existe para pegar essas cardiopatias antes da alta: saturação abaixo de 90%, ou abaixo de 95% em duas medidas, ou diferença maior que 3% entre os membros, indica ecocardiograma antes de o bebê ir para casa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cianose com desconforto e radiografia alterada: pulmão; cianose tranquila com pulmão limpo: coração.</li>
<li>Hiperóxia que não sobe a PaO₂ acima de 100–150 = shunt fixo; saturações pré e pós-ductal apontam o tipo.</li>
<li>Cardiopatia dependente do canal: prostaglandina E1 já, antes do ecocardiograma; vigiar apneia e hipotensão.</li>
<li>Estabilizar e transferir; teste do coraçãozinho rastreia antes da alta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>RN cianótico, pré-ductal 95% e pós-ductal 78%, com taquipneia. Qual é a hipótese e por que a prostaglandina pode ajudar? <details><summary>Resposta</summary>Shunt direita-esquerda pelo canal: hipertensão pulmonar persistente ou coarctação/interrupção do arco; na coarctação crítica, a prostaglandina mantém o fluxo sistêmico pelo canal.</details></li>
<li>Que efeito adverso da prostaglandina exige preparo imediato da equipe? <details><summary>Resposta</summary>Apneia — material de ventilação à mão e, no transporte, considerar intubação profilática.</details></li>
</ol>
`,
};
