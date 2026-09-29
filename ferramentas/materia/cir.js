/* "Sobre a matéria" — a página de livro-texto de cada questão de cir.
   Chave "fonte#numero" (a mesma da entrada); HTML em linhas, uma tag de
   bloco por linha (montar.js tira as quebras). Seis partes na ordem:
   Objetivos de aprendizagem · Termos-chave · O essencial · Ponto clínico
   (div.ponto) · Resumo · Verifique o que aprendeu. As regras estão em
   verificar.js. Escrito à mão. */
module.exports = {
"susp2026#22": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a crise adrenal no perioperatório do paciente em corticoterapia crônica.</li>
<li>Diferenciar insuficiência adrenal primária de secundária pelo potássio e pela pigmentação.</li>
<li>Tratar com hidrocortisona intravenosa e volume, sem esperar exames.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Supressão do eixo</dt>
<dd>Prednisona de 5 mg ou mais por 3 semanas ou mais pode inibir o eixo hipotálamo-hipófise-adrenal por meses.</dd>
<dt>Crise adrenal</dt>
<dd>Hipotensão refratária, dor abdominal, vômitos, febre, hiponatremia e hipoglicemia por falta de cortisol num estresse.</dd>
<dt>Insuficiência secundária</dt>
<dd>Falta de ACTH: cortisol baixo com aldosterona preservada; potássio normal, sem hiperpigmentação.</dd>
<dt>Dose de estresse</dt>
<dd>Hidrocortisona 100 mg IV e depois 200 mg/dia, reduzida conforme a recuperação.</dd>
</dl>
<h4>O essencial</h4>
<p>Quem usa corticoide por semanas suprime a produção de ACTH e atrofia a camada fasciculada da adrenal; a produção basal de cortisol pode bastar no dia a dia, mas não responde ao estresse de uma infecção, de uma cirurgia ou de um trauma. O resultado é a <strong>crise adrenal aguda</strong>: hipotensão que não responde a volume nem a vasopressor, dor abdominal difusa, náuseas, vômitos, febre, confusão, <strong>hiponatremia</strong> e <strong>hipoglicemia</strong>. No pós-operatório, ela imita sepse e abdome agudo, e a pista é a história de corticoide, mesmo em dose modesta como prednisona 10 mg/dia por anos.</p>
<p>Na insuficiência <strong>secundária</strong> (por supressão ou doença hipofisária), a aldosterona continua sob o controle do sistema renina-angiotensina: por isso <strong>o potássio é normal</strong> e não há hiperpigmentação (o ACTH está baixo). Na <strong>primária</strong> (Addison, hemorragia adrenal, tuberculose), faltam cortisol e aldosterona: <strong>hipercalemia</strong>, hiponatremia mais intensa, avidez por sal e hiperpigmentação pelo ACTH alto. A distinção guia a investigação, mas não atrasa o tratamento.</p>
<p>Diante da suspeita, colhe-se cortisol e ACTH e administra-se de imediato <strong>hidrocortisona 100 mg intravenosa</strong>, seguida de 200 mg/dia em infusão ou doses divididas, com <strong>soro fisiológico</strong> e glicose; a resposta hemodinâmica em horas confirma. A dose é reduzida à medida que o paciente melhora, até a dose de manutenção. Para prevenir, o paciente em corticoterapia crônica recebe <strong>dose de estresse</strong> antes de cirurgias de médio e grande porte e em infecções graves, e é orientado a nunca suspender o corticoide de forma abrupta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pós-operatório com hipotensão que não sobe com soro nem noradrenalina, em quem toma prednisona há anos: hidrocortisona 100 mg agora, antes do resultado do cortisol. A ausência de hipercalemia não afasta; na insuficiência secundária o potássio é normal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Corticoide crônico suprime o eixo; estresse cirúrgico ou infeccioso precipita a crise.</li>
<li>Crise: hipotensão refratária, dor abdominal, vômitos, hiponatremia, hipoglicemia.</li>
<li>Secundária: potássio normal, sem pigmentação; primária: hipercalemia e pigmentação.</li>
<li>Hidrocortisona 100 mg IV e soro, sem esperar exames; dose de estresse antes de cirurgias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o potássio fica normal na insuficiência adrenal por supressão? <details><summary>Resposta</summary>Porque a aldosterona é regulada pela renina-angiotensina, não pelo ACTH, e continua preservada.</details></li>
<li>Qual é o tratamento imediato da crise adrenal? <details><summary>Resposta</summary>Hidrocortisona 100 mg intravenosa, seguida de 200 mg/dia, com soro fisiológico e glicose.</details></li>
</ol>
`,
"susp2026#24": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a classificação de Forrest ao sangramento por úlcera péptica.</li>
<li>Saber quais lesões recebem tratamento endoscópico e como (terapia dual).</li>
<li>Definir o momento da endoscopia e o tratamento clínico associado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Classificação de Forrest</dt>
<dd>Ia jato, Ib babação, IIa vaso visível, IIb coágulo aderido, IIc hematina, III base limpa.</dd>
<dt>Terapia dual</dt>
<dd>Injeção de adrenalina combinada com um segundo método: clipe, termocoagulação ou esclerosante.</dd>
<dt>Alto risco de ressangramento</dt>
<dd>Forrest Ia, Ib e IIa (e IIb após remover o coágulo): tratar por endoscopia.</dd>
<dt>Inibidor de bomba de prótons em dose alta</dt>
<dd>Bolus e infusão ou doses altas intermitentes por 72 horas após a hemostasia endoscópica.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia digestiva alta por úlcera é tratada em duas frentes: <strong>reanimação</strong> (dois acessos calibrosos, cristaloide, transfusão com meta de hemoglobina de 7 a 8 g/dL, proteção da via aérea se houver rebaixamento ou hematêmese maciça) e <strong>endoscopia em até 24 horas</strong> da admissão, depois de estabilizar; a endoscopia de urgência antes de 12 horas não melhora desfechos e é feita só na instabilidade persistente. O inibidor de bomba de prótons intravenoso começa antes da endoscopia, e o escore de Glasgow-Blatchford separa quem pode ir para casa (zero ou um) de quem interna.</p>
<p>A <strong>classificação de Forrest</strong> descreve a úlcera e prevê o ressangramento: <strong>Ia</strong> sangramento em jato e <strong>Ib</strong> em babação (ativos), <strong>IIa</strong> vaso visível não sangrante, <strong>IIb</strong> coágulo aderido, <strong>IIc</strong> base com hematina e <strong>III</strong> base limpa. As lesões <strong>Ia, Ib e IIa</strong> são de alto risco (ressangramento de 40 a 55% sem tratamento) e recebem <strong>hemostasia endoscópica</strong>; o coágulo aderido (IIb) é removido e a base tratada conforme o achado; IIc e III têm risco baixo e não são tratados.</p>
<p>A hemostasia é <strong>dual</strong>: a <strong>injeção de adrenalina</strong> reduz o fluxo e limpa o campo, mas sozinha ressangra mais; associa-se um segundo método definitivo, <strong>clipe hemostático</strong>, <strong>termocoagulação</strong> ou esclerosante, ou o pó hemostático como resgate. Após o sucesso, <strong>inibidor de bomba em dose alta por 72 horas</strong>, teste e tratamento do <em>Helicobacter pylori</em>, suspensão de anti-inflamatórios e reavaliação do ácido acetilsalicílico. O ressangramento leva a uma segunda endoscopia; a falha da segunda, à embolização arterial ou à cirurgia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Vaso visível numa úlcera é o mesmo que sangramento ativo para a decisão: trate na primeira endoscopia com adrenalina mais clipe, e não deixe o paciente de alta antes das 72 horas de inibidor de bomba. A adrenalina sozinha é meio tratamento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reanimar, inibidor de bomba IV, endoscopia em até 24 horas após estabilizar.</li>
<li>Forrest Ia, Ib e IIa: alto risco, hemostasia endoscópica; IIc e III: não tratar.</li>
<li>Terapia dual: adrenalina mais clipe ou termocoagulação.</li>
<li>Inibidor de bomba em dose alta por 72 horas, tratar H. pylori, suspender AINE.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que classes de Forrest recebem tratamento endoscópico? <details><summary>Resposta</summary>Ia, Ib e IIa; o coágulo aderido (IIb) é removido e tratado conforme a base.</details></li>
<li>Por que a adrenalina não deve ser usada sozinha? <details><summary>Resposta</summary>Porque o efeito é temporário e o ressangramento é maior; associa-se clipe, termocoagulação ou esclerosante.</details></li>
</ol>
`,
"susp2026#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a falha do tratamento endoscópico na úlcera sangrante.</li>
<li>Listar as indicações de cirurgia e o papel da embolização.</li>
<li>Conhecer os procedimentos cirúrgicos para a úlcera duodenal e a gástrica sangrantes.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Falha endoscópica</dt>
<dd>Sangramento não controlado na endoscopia ou ressangramento após a segunda tentativa.</dd>
<dt>Embolização arterial</dt>
<dd>Oclusão da artéria gastroduodenal ou gástrica esquerda por radiologia intervencionista; opção à cirurgia.</dd>
<dt>Sangramento contínuo</dt>
<dd>Necessidade transfusional persistente, como mais de 3 unidades por dia ou 6 nas primeiras 24 horas.</dd>
<dt>Sutura da artéria gastroduodenal</dt>
<dd>Duodenotomia com pontos no vaso na úlcera duodenal posterior; pode-se associar vagotomia e piloroplastia.</dd>
</dl>
<h4>O essencial</h4>
<p>A maioria das úlceras sangrantes é resolvida pela endoscopia e pelo inibidor de bomba de prótons; a cirurgia ficou reservada às falhas, mas quando indicada não pode atrasar, porque cada unidade transfundida e cada hora de choque aumentam a mortalidade. As <strong>indicações</strong>: <strong>instabilidade hemodinâmica</strong> refratária à reanimação, <strong>sangramento não controlado</strong> na endoscopia, <strong>ressangramento após a segunda hemostasia endoscópica</strong>, <strong>sangramento lento mas contínuo</strong> com necessidade transfusional persistente (mais de 3 unidades por dia, ou 6 nas primeiras 24 horas), perfuração ou obstrução associadas e indisponibilidade de endoscopia ou de radiologia intervencionista.</p>
<p>Quando há radiologia intervencionista, a <strong>embolização</strong> da artéria gastroduodenal ou da gástrica esquerda é uma opção com menos morbidade, sobretudo no paciente de alto risco cirúrgico, e com resultados semelhantes; a cirurgia permanece para a falha da embolização e para a instabilidade que não permite esperar.</p>
<p>Os <strong>procedimentos</strong> visam controlar o vaso, não curar a doença ulcerosa, que o inibidor de bomba e a erradicação do <em>H. pylori</em> resolvem: na <strong>úlcera duodenal</strong>, duodenotomia com <strong>sutura da artéria gastroduodenal</strong> em três pontos, com ou sem vagotomia troncular e piloroplastia; na <strong>úlcera gástrica</strong>, ressecção em cunha ou gastrectomia parcial, porque a úlcera gástrica pode ser maligna e a biópsia é obrigatória. No paciente instável, o controle do sangramento com a operação mais curta possível é a regra.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A pergunta que define a cirurgia não é "quanto ele sangrou?", é "ele parou de sangrar?". Duas endoscopias e três bolsas por dia respondem não. Nesse ponto, cada nova transfusão sem decisão é tempo perdido; chame a radiologia intervencionista se houver, senão o centro cirúrgico.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cirurgia: instabilidade refratária, falha endoscópica, ressangramento após segunda endoscopia, transfusão contínua (mais de 3 unidades/dia).</li>
<li>Embolização é opção quando disponível, sobretudo no alto risco cirúrgico.</li>
<li>Duodenal: sutura da gastroduodenal; gástrica: ressecção com biópsia.</li>
<li>A cirurgia controla o vaso; a doença se trata com inibidor de bomba e erradicação do H. pylori.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Cite três indicações de cirurgia na úlcera sangrante. <details><summary>Resposta</summary>Instabilidade refratária, falha ou ressangramento após a segunda endoscopia, e transfusão contínua acima de 3 unidades por dia.</details></li>
<li>Qual é o procedimento na úlcera duodenal posterior sangrante? <details><summary>Resposta</summary>Duodenotomia com sutura da artéria gastroduodenal, com ou sem vagotomia e piloroplastia.</details></li>
</ol>
`,
"susp2026#26": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome de Mallory-Weiss pela história e pela endoscopia.</li>
<li>Saber que a evolução é autolimitada na grande maioria.</li>
<li>Indicar o tratamento endoscópico apenas no sangramento ativo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Laceração de Mallory-Weiss</dt>
<dd>Rasgo longitudinal da mucosa na junção esofagogástrica, por aumento súbito de pressão durante vômitos.</dd>
<dt>Síndrome de Boerhaave</dt>
<dd>Rotura transmural do esôfago por vômitos; dor torácica, enfisema subcutâneo, mediastinite.</dd>
<dt>Hematêmese após vômitos</dt>
<dd>Vômitos inicialmente sem sangue que passam a ter sangue: a assinatura da laceração.</dd>
<dt>Resolução espontânea</dt>
<dd>Cessação do sangramento sem intervenção em 80 a 90% dos casos, em 24 a 72 horas.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome de Mallory-Weiss responde por 5 a 10% das hemorragias digestivas altas. A história é típica: episódios de <strong>vômitos ou ânsia repetidos</strong> (gastroenterite, ingestão de álcool, hiperêmese) e, depois deles, <strong>hematêmese</strong>, em geral de pequeno a moderado volume. O esforço eleva de repente a pressão intragástrica contra o cárdia fechado e rasga a mucosa da junção esofagogástrica, mais frequentemente na pequena curvatura, logo abaixo da transição. Hérnia de hiato e uso de álcool e anti-inflamatórios são fatores associados.</p>
<p>A <strong>endoscopia</strong> confirma: laceração linear, única ou múltipla, de 1 a 4 cm, na junção, com ou sem sangramento ativo. A maioria já não sangra no momento do exame. A conduta é <strong>suporte</strong>: antiemético, inibidor de bomba de prótons, correção do volume, e observação, porque <strong>80 a 90% dos casos cessam sozinhos em 24 a 72 horas</strong> e a laceração cicatriza em dias. O tratamento endoscópico (clipe, injeção de adrenalina, ligadura elástica) é reservado ao <strong>sangramento ativo</strong> ou ao vaso visível; a angioembolização e a cirurgia são raríssimas.</p>
<p>O ressangramento é incomum e o prognóstico é excelente, salvo em pacientes com coagulopatia, hipertensão portal ou cirrose, em que o sangramento pode ser maior. O diferencial que não pode escapar é a <strong>síndrome de Boerhaave</strong>: os mesmos vômitos, mas com dor torácica intensa, dispneia, enfisema subcutâneo e sinais sistêmicos, por rotura transmural, que é emergência cirúrgica. Sem esses sinais, a laceração é mucosa e benigna.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem com gastroenterite, três dias de vômitos e hematêmese de pequeno volume, estável: inibidor de bomba, antiemético, endoscopia para confirmar e tranquilizar. Se houver dor torácica ou crepitação no pescoço, muda tudo: tomografia com contraste oral e cirurgião.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Vômitos repetidos e depois hematêmese: laceração da junção esofagogástrica.</li>
<li>Endoscopia confirma; a maioria já não sangra.</li>
<li>Autolimitada em 80 a 90%, em 24 a 72 horas; suporte, inibidor de bomba, antiemético.</li>
<li>Hemostasia endoscópica só no sangramento ativo; Boerhaave é o diferencial grave.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a evolução esperada da laceração de Mallory-Weiss? <details><summary>Resposta</summary>Resolução espontânea em 80 a 90% dos casos em até 72 horas.</details></li>
<li>Que sinais apontam para Boerhaave em vez de Mallory-Weiss? <details><summary>Resposta</summary>Dor torácica intensa, dispneia, enfisema subcutâneo e toxemia após os vômitos.</details></li>
</ol>
`,
"susp2026#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a hérnia interna como a complicação tardia mais temida do bypass gástrico.</li>
<li>Explicar por que a obstrução da alça biliopancreática exige cirurgia precoce.</li>
<li>Conhecer os espaços herniários e a investigação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bypass gástrico em Y de Roux</dt>
<dd>Pequena bolsa gástrica anastomosada a uma alça alimentar; a alça biliopancreática traz as secreções do estômago excluído.</dd>
<dt>Hérnia interna</dt>
<dd>Alça intestinal que passa por um defeito mesentérico criado pela cirurgia (de Petersen, do mesocólon ou da enteroanastomose).</dd>
<dt>Alça fechada</dt>
<dd>Segmento obstruído nas duas extremidades, que distende sem via de escape: risco de isquemia e rotura.</dd>
<dt>Sinal do redemoinho</dt>
<dd>Rotação dos vasos mesentéricos na tomografia, sugestivo de hérnia interna com volvo.</dd>
</dl>
<h4>O essencial</h4>
<p>O bypass gástrico cria espaços mesentéricos por onde alças podem se insinuar, sobretudo depois que a perda de peso reduz a gordura que os preenchia: o espaço de Petersen (entre a alça alimentar e o mesocólon transverso), o defeito do mesocólon (na via retrocólica) e o da enteroanastomose. A <strong>hérnia interna</strong> aparece meses a anos depois, com <strong>dor abdominal intermitente</strong> pós-prandial em cólica, náuseas e episódios que cedem sozinhos, até o dia em que a alça encarcera: dor intensa, vômitos, distensão e sinais de sofrimento.</p>
<p>O que torna a complicação perigosa é a anatomia: se a hérnia obstrui a <strong>alça biliopancreática</strong>, o segmento entre o estômago excluído e a enteroanastomose vira uma <strong>alça fechada</strong>. O estômago remanescente e o duodeno continuam a secretar, a alça distende sem poder esvaziar pela boca nem pelo intestino, e a pressão cresce até <strong>romper a linha de grampeamento</strong> do estômago excluído ou causar isquemia e perfuração. O paciente pode não vomitar (a bolsa gástrica está do outro lado), o que atrasa o diagnóstico; a amilase e a lipase sobem, e o quadro evolui para peritonite e sepse em horas.</p>
<p>A <strong>tomografia</strong> com contraste mostra o estômago excluído distendido, o sinal do redemoinho e alças agrupadas; mas uma tomografia normal não afasta, e a clínica manda. A conduta é <strong>exploração cirúrgica precoce</strong>, com redução da hérnia, avaliação da viabilidade das alças e <strong>fechamento de todos os defeitos mesentéricos</strong>.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Operado de bypass com dor abdominal intensa é hérnia interna até prova em contrário, mesmo sem vômitos e com tomografia "sem alterações". Chame o cirurgião bariátrico e prepare a laparoscopia; a lipase alta e o estômago excluído dilatado são o alarme de alça fechada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hérnia interna: complicação tardia do bypass, pelos espaços mesentéricos que a perda de peso abre.</li>
<li>Obstrução da alça biliopancreática cria alça fechada: distensão do estômago excluído, rotura, isquemia.</li>
<li>Pode não vomitar; tomografia pode ser normal; clínica decide.</li>
<li>Cirurgia precoce, laparoscópica, com fechamento de todos os defeitos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a obstrução da alça biliopancreática é tão perigosa? <details><summary>Resposta</summary>Forma uma alça fechada que distende o estômago excluído sem via de escape, com risco de rotura da linha de grampos e isquemia.</details></li>
<li>Uma tomografia normal afasta hérnia interna no operado de bypass com dor intensa? <details><summary>Resposta</summary>Não; a sensibilidade é limitada e a exploração cirúrgica precoce é indicada pela clínica.</details></li>
</ol>
`,
"susp2026#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a gastroparesia diabética pelos sintomas e pela endoscopia sem obstrução.</li>
<li>Explicar a fisiopatologia: neuropatia autonômica vagal por hiperglicemia crônica.</li>
<li>Conduzir o diagnóstico e o tratamento escalonado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Gastroparesia</dt>
<dd>Esvaziamento gástrico retardado sem obstrução mecânica, com náuseas, vômitos, plenitude e saciedade precoce.</dd>
<dt>Neuropatia autonômica</dt>
<dd>Lesão das fibras vagais e do sistema nervoso entérico pela hiperglicemia crônica.</dd>
<dt>Cintilografia de esvaziamento gástrico</dt>
<dd>Padrão-ouro: retenção acima de 10% em 4 horas de uma refeição sólida marcada.</dd>
<dt>Células intersticiais de Cajal</dt>
<dd>Marcapasso gástrico; sua perda contribui para a disritmia e o atraso do esvaziamento.</dd>
</dl>
<h4>O essencial</h4>
<p>A gastroparesia diabética é uma complicação da <strong>neuropatia autonômica</strong>, que aparece após anos de <strong>hiperglicemia mal controlada</strong>, em geral junto de retinopatia, nefropatia e neuropatia periférica. A lesão do <strong>nervo vago</strong>, das células intersticiais de Cajal e da rede entérica reduz a contratilidade do antro, altera o relaxamento do fundo e descoordena o piloro; o esvaziamento fica lento e irregular. A hiperglicemia aguda também retarda o esvaziamento de forma reversível, o que piora o controle glicêmico num ciclo: a comida chega tarde e a insulina age antes.</p>
<p>Os sintomas são <strong>náuseas, vômitos de alimentos ingeridos horas antes, plenitude pós-prandial, saciedade precoce, distensão e dor epigástrica</strong>, com perda de peso e glicemias instáveis. A <strong>endoscopia</strong> é o primeiro exame e mostra <strong>ausência de obstrução</strong> mecânica, às vezes com resíduo alimentar após jejum; a <strong>cintilografia</strong> com refeição sólida confirma o atraso. Afastam-se causas medicamentosas (opioides, agonistas do GLP-1, anticolinérgicos) e outras (pós-cirúrgica, idiopática).</p>
<p>O tratamento é escalonado: <strong>controle glicêmico</strong> e correção de eletrólitos; <strong>dieta</strong> fracionada, com pouca gordura e fibra, de consistência pastosa nos períodos piores; <strong>procinéticos</strong> (metoclopramida por curto período, pelos efeitos extrapiramidais; domperidona; eritromicina em ciclos, pela taquifilaxia); antieméticos; e, nos casos refratários, injeção de toxina botulínica no piloro (evidência fraca), piloromiotomia endoscópica ou estimulação gástrica elétrica, além de suporte nutricional por jejunostomia quando há desnutrição.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabética de longa data com vômitos de comida velha e endoscopia normal tem gastroparesia, e a primeira receita é a glicemia controlada e a dieta fracionada, não o procinético crônico. Revise os agonistas do GLP-1 e os opioides: eles paralisam o estômago que já está lento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Neuropatia autonômica vagal por hiperglicemia crônica; ciclo com o mau controle.</li>
<li>Náuseas, vômitos tardios, plenitude, saciedade precoce; endoscopia sem obstrução.</li>
<li>Cintilografia confirma; afastar fármacos que retardam o esvaziamento.</li>
<li>Controle glicêmico, dieta fracionada, procinéticos com cautela; refratários: piloro e estimulação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a base fisiopatológica da gastroparesia diabética? <details><summary>Resposta</summary>Neuropatia autonômica vagal e do sistema entérico causada pela hiperglicemia crônica.</details></li>
<li>Que exame confirma o diagnóstico após a endoscopia normal? <details><summary>Resposta</summary>A cintilografia de esvaziamento gástrico com refeição sólida.</details></li>
</ol>
`,
"susp2026#29": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os fatores de risco que indicam profilaxia de úlcera de estresse na UTI.</li>
<li>Explicar a fisiopatologia da lesão de mucosa relacionada ao estresse.</li>
<li>Escolher o fármaco e saber quando suspender a profilaxia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Lesão de mucosa por estresse</dt>
<dd>Erosões e úlceras superficiais do fundo e do corpo gástrico por hipoperfusão esplâncnica no doente crítico.</dd>
<dt>Sangramento clinicamente importante</dt>
<dd>Hemorragia com instabilidade, queda de hemoglobina ou necessidade de transfusão ou intervenção.</dd>
<dt>Fatores maiores</dt>
<dd>Ventilação mecânica por mais de 48 horas e coagulopatia; cada um por si indica profilaxia.</dd>
<dt>Fatores adicionais</dt>
<dd>Choque, sepse, lesão renal, hepatopatia, corticoide, anticoagulante, queimadura, trauma craniano.</dd>
</dl>
<h4>O essencial</h4>
<p>No doente crítico, a <strong>hipoperfusão esplâncnica</strong> do choque e a resposta inflamatória rompem a barreira da mucosa gástrica: cai o muco e o bicarbonato, cai o fluxo, e o ácido erode o fundo e o corpo, produzindo erosões difusas e úlceras superficiais. A maioria é silenciosa; o <strong>sangramento clinicamente importante</strong> ocorre em 1 a 3% dos ventilados e aumenta a mortalidade e o tempo de internação.</p>
<p>A profilaxia não é para todos, é para quem tem <strong>fatores de risco</strong>. Os <strong>maiores</strong>: <strong>ventilação mecânica</strong> por mais de 48 horas e <strong>coagulopatia</strong> (plaquetas abaixo de 50.000, INR acima de 1,5 ou TTPa duas vezes o normal). Os <strong>adicionais</strong>, que somados indicam profilaxia: <strong>choque</strong> ou uso de vasopressor, sepse, lesão renal aguda ou diálise, hepatopatia, uso de corticoide em dose alta ou anticoagulante, queimadura extensa, trauma craniano ou raquimedular, cirurgia de grande porte e história de úlcera ou sangramento. Um homem sob ventilação, com noradrenalina após choque séptico e em jejum, soma três motivos.</p>
<p>O <strong>inibidor de bomba de prótons</strong> é a primeira escolha (o ensaio REVISE de 2024 confirmou redução de sangramento importante em ventilados, sem aumento de mortalidade); os antagonistas H2 são a opção, e o sucralfato tem menor eficácia. A nutrição enteral plena reduz o risco, mas não substitui a profilaxia em quem tem fatores maiores. A profilaxia é <strong>suspensa</strong> quando os fatores desaparecem (extubação, saída do choque, dieta plena), porque o uso prolongado aumenta pneumonia e infecção por <em>Clostridioides difficile</em>, e não deve seguir na receita de alta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na visita da UTI, a profilaxia de úlcera de estresse é uma linha da lista de verificação com duas perguntas: ele ainda tem fator de risco? Então mantém. Extubou, saiu do vasopressor e come? Então suspende hoje, senão o omeprazol vai para casa com ele sem motivo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipoperfusão esplâncnica rompe a barreira; erosões do fundo e corpo.</li>
<li>Maiores: ventilação por mais de 48 horas, coagulopatia; adicionais: choque, sepse, renal, hepático, corticoide, anticoagulante.</li>
<li>Inibidor de bomba de prótons é a escolha; H2 é opção.</li>
<li>Suspender quando os fatores somem; não levar para a alta.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os dois fatores maiores para a profilaxia? <details><summary>Resposta</summary>Ventilação mecânica por mais de 48 horas e coagulopatia.</details></li>
<li>Quando a profilaxia deve ser suspensa? <details><summary>Resposta</summary>Quando os fatores de risco desaparecem: extubação, saída do choque, dieta plena; nunca manter na alta.</details></li>
</ol>
`,
"susp2026#30": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a síndrome clínica do câncer de retossigmoide no idoso.</li>
<li>Diferenciar as apresentações do câncer de cólon direito e esquerdo.</li>
<li>Conduzir a investigação: colonoscopia com biópsia e estadiamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hábito intestinal alternante</dt>
<dd>Diarreia e constipação alternadas, com fezes afiladas, por obstrução parcial do sigmoide ou reto.</dd>
<dt>Tenesmo</dt>
<dd>Sensação de evacuação incompleta e urgência, por massa no reto.</dd>
<dt>Anemia ferropriva no idoso</dt>
<dd>Sangramento oculto crônico; no homem ou na mulher pós-menopausa é câncer de cólon até prova em contrário.</dd>
<dt>Proctite actínica</dt>
<dd>Inflamação do reto por radioterapia pélvica; sangramento e urgência, mas sem massa nem emagrecimento.</dd>
</dl>
<h4>O essencial</h4>
<p>O câncer colorretal é o segundo mais frequente no Brasil, e a apresentação depende do lado. No <strong>cólon direito</strong>, de calibre largo e conteúdo líquido, o tumor cresce como massa vegetante que sangra em silêncio: <strong>anemia ferropriva</strong>, fadiga, perda de peso, massa palpável, sem obstrução até muito tarde. No <strong>cólon esquerdo, sigmoide e reto</strong>, de calibre estreito e fezes formadas, o tumor é anular e infiltrativo: <strong>mudança do hábito intestinal</strong>, alternância de diarreia e constipação, <strong>fezes afiladas</strong>, muco e sangue vivo, <strong>tenesmo</strong> quando é retal, cólica e distensão, até a obstrução.</p>
<p>A tríade do <strong>retossigmoide</strong> no idoso, portanto, é <strong>hábito alternante com tenesmo, sangramento e emagrecimento</strong>, com anemia no hemograma. Tabagismo, idade acima de 50, dieta pobre em fibras, obesidade e história familiar são os fatores de risco. Uma radioterapia pélvica prévia pode causar proctite actínica com sangramento, mas não explica emagrecimento, anemia progressiva e fezes afiladas, e aumenta, com os anos, o risco de um segundo tumor no campo irradiado.</p>
<p>A investigação é a <strong>colonoscopia completa com biópsia</strong>, que também procura lesões sincrônicas; o toque retal diagnostica a maioria dos tumores do reto baixo. O <strong>estadiamento</strong> inclui tomografia de tórax, abdome e pelve, CEA basal e, no reto, ressonância pélvica para definir a relação com a fáscia mesorretal. O tratamento é a ressecção com linfadenectomia, com neoadjuvância no reto localmente avançado. O rastreamento da população geral começa aos 45 a 50 anos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idoso com "intestino que mudou" nos últimos meses, fezes finas e emagrecimento não recebe laxante nem antidiarreico: recebe toque retal e colonoscopia. A história de outra doença pélvica é distração; a anemia é o dado que decide.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Direito: anemia e massa; esquerdo e reto: hábito alternante, fezes afiladas, sangue, tenesmo, obstrução.</li>
<li>Retossigmoide no idoso: alternância, tenesmo, sangramento, emagrecimento, anemia.</li>
<li>Colonoscopia completa com biópsia; toque retal; tomografia, CEA, ressonância no reto.</li>
<li>Proctite actínica não explica emagrecimento nem anemia progressiva.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o câncer de cólon esquerdo obstrui mais que o direito? <details><summary>Resposta</summary>Porque o calibre é estreito, as fezes são formadas e o tumor cresce de forma anular e infiltrativa.</details></li>
<li>Qual é o primeiro exame diante da suspeita? <details><summary>Resposta</summary>Toque retal e colonoscopia completa com biópsia.</details></li>
</ol>
`,
"susp2026#31": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar as hemorroidas internas pelos graus de Goligher.</li>
<li>Indicar o tratamento de cada grau, do clínico ao cirúrgico.</li>
<li>Conhecer a ligadura elástica: técnica, resultados e complicações.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Classificação de Goligher</dt>
<dd>I sangra sem prolapso; II prolapsa e reduz sozinha; III reduz com a mão; IV irredutível.</dd>
<dt>Ligadura elástica</dt>
<dd>Anel de borracha na base do mamilo hemorroidário interno, acima da linha pectínea, em consultório.</dd>
<dt>Linha pectínea</dt>
<dd>Divide o canal anal: acima, mucosa insensível (hemorroidas internas); abaixo, pele sensível (externas).</dd>
<dt>Hemorroidectomia</dt>
<dd>Excisão dos mamilos (Milligan-Morgan aberta, Ferguson fechada); para graus III e IV e doença mista.</dd>
</dl>
<h4>O essencial</h4>
<p>Hemorroidas são os coxins vasculares normais do canal anal que se tornam sintomáticos quando deslizam e ingurgitam, pelo esforço evacuatório, pela constipação, pela gestação e pelo tempo sentado. As <strong>internas</strong>, acima da linha pectínea, <strong>sangram sem dor</strong> (sangue vivo no papel ou gotejando) e <strong>prolapsam</strong>; as <strong>externas</strong>, cobertas por pele, doem quando trombosam. A classificação de <strong>Goligher</strong> gradua o prolapso das internas: <strong>grau I</strong> sangramento sem prolapso; <strong>grau II</strong> prolapso ao esforço com <strong>redução espontânea</strong>; <strong>grau III</strong> prolapso que exige redução manual; <strong>grau IV</strong> prolapso irredutível.</p>
<p>O tratamento segue o grau. <strong>Todos</strong> recebem medidas clínicas: fibras e água, evitar esforço e tempo no vaso, banhos de assento, flavonoides por curto período. <strong>Graus I e II</strong> (e III selecionados) que persistem sintomáticos vão para <strong>procedimentos de consultório</strong>: a <strong>ligadura elástica</strong> é o mais eficaz, seguida de escleroterapia e coagulação infravermelha. <strong>Graus III e IV</strong>, doença mista com componente externo e falha dos procedimentos vão para a <strong>hemorroidectomia</strong> (ou hemorroidopexia grampeada e desarterialização guiada por Doppler em casos selecionados).</p>
<p>A <strong>ligadura elástica</strong> coloca um anel na base do mamilo, ao menos 1 cm acima da linha pectínea, onde não há sensibilidade; o tecido necrosa e cai em 5 a 7 dias, deixando fibrose que fixa a mucosa. Trata-se um a três mamilos por sessão, com resolução em 70 a 80% e recorrência tratável com nova ligadura. As complicações são dor (anel baixo demais), sangramento tardio na queda da escara, retenção urinária e, raramente, sepse pélvica, cujo alarme é dor intensa com febre e retenção urinária.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sangramento anal indolor com prolapso que volta sozinho é grau II, e a resposta é a ligadura elástica no consultório, sem internação e sem cirurgia. Antes de ligar, porém, em maiores de 45 anos ou com fatores de risco, a colonoscopia afasta o tumor que também sangra.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Goligher: I sangra; II prolapsa e reduz sozinha; III reduz com a mão; IV irredutível.</li>
<li>Todos: fibras, água, sem esforço; I e II persistentes: ligadura elástica.</li>
<li>III e IV, mista e falhas: hemorroidectomia.</li>
<li>Ligadura acima da linha pectínea; alarme de sepse pélvica: dor, febre, retenção urinária.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o tratamento de escolha para a hemorroida interna grau II sintomática? <details><summary>Resposta</summary>Ligadura elástica em consultório, após as medidas clínicas.</details></li>
<li>Por que a ligadura é feita acima da linha pectínea? <details><summary>Resposta</summary>Porque a mucosa acima dela não tem sensibilidade somática; abaixo, o anel causa dor intensa.</details></li>
</ol>
`,
"susp2026#32": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a doença pilonidal pela localização na linha média sacrococcígea e pelos orifícios com pelos.</li>
<li>Diferenciá-la do abscesso perianal, da fístula e da hidradenite.</li>
<li>Tratar o abscesso agudo e conhecer as opções para a doença crônica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença pilonidal</dt>
<dd>Reação de corpo estranho a pelos que penetram a pele do sulco interglúteo, formando seio e cistos.</dd>
<dt>Orifícios primários</dt>
<dd>Pequenos poros na linha média do sulco, muitas vezes com pelos saindo; a marca da doença.</dd>
<dt>Abscesso pilonidal</dt>
<dd>Infecção aguda do seio, com dor, tumefação e secreção, em geral lateral à linha média.</dd>
<dt>Cirurgia fora da linha média</dt>
<dd>Técnicas (Karydakis, Bascom, Limberg) que deslocam a cicatriz do sulco e reduzem a recidiva.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença pilonidal acomete jovens entre 15 e 30 anos, sobretudo homens, com muitos pelos, sulco interglúteo profundo, obesidade e tempo sentado. Pelos soltos são empurrados para a pele do sulco pelo atrito, penetram por poros dilatados e criam um <strong>seio</strong> com reação de corpo estranho, que se infecta. A apresentação típica é <strong>dor e tumefação na região sacrococcígea</strong>, com <strong>saída intermitente de secreção purulenta e fétida</strong> por um ou mais <strong>orifícios na linha média</strong>, a alguns centímetros do ânus, muitas vezes com <strong>pelos</strong> visíveis; pode haver um trajeto secundário lateral e episódios repetidos.</p>
<p>A localização é o que fecha o diagnóstico e o separa das doenças <strong>perianais</strong>: o <strong>abscesso perianal</strong> e a <strong>fístula</strong> ficam junto do ânus, com orifício externo perianal e relação com as criptas; a <strong>hidradenite supurativa</strong> acomete as regiões de glândulas apócrinas (axilas, virilhas, nádegas) com múltiplos nódulos e cicatrizes. Um orifício na linha média sacrococcígea com pelos é pilonidal.</p>
<p>O <strong>abscesso agudo</strong> é tratado com <strong>incisão e drenagem</strong>, fora da linha média quando possível, com antibiótico só se houver celulite extensa ou imunossupressão. A <strong>doença crônica</strong> ou recorrente tem opções: depilação e higiene do sulco, tratamento minimamente invasivo (pit picking, fenol, laser) e, nos casos extensos, excisão com técnicas <strong>fora da linha média</strong> (Karydakis, Bascom, retalho de Limberg), que cicatrizam melhor e recidivam menos do que a excisão com fechamento na linha média. A remoção dos pelos do sulco é parte de qualquer tratamento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de chamar de abscesso perianal, meça a distância até o ânus e procure o poro na linha média com o pelo saindo: a doença pilonidal se trata com drenagem simples e depilação, não com fistulotomia. Dor no cóccix em jovem peludo que dirige o dia todo é pilonidal até prova em contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pelos que penetram o sulco interglúteo: seio com reação de corpo estranho.</li>
<li>Dor, tumefação e secreção na linha média sacrococcígea, com orifícios e pelos.</li>
<li>Perianais ficam junto do ânus; hidradenite é apócrina e múltipla.</li>
<li>Abscesso: drenagem; crônica: depilação, minimamente invasivo, excisão fora da linha média.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado do exame diferencia a doença pilonidal do abscesso perianal? <details><summary>Resposta</summary>Orifício na linha média sacrococcígea, distante do ânus, com pelos, sem relação com as criptas anais.</details></li>
<li>Por que as técnicas fora da linha média são preferidas na doença crônica? <details><summary>Resposta</summary>Porque a cicatriz no sulco cicatriza mal e recidiva mais; deslocar a cicatriz reduz a recorrência.</details></li>
</ol>
`,
"susp2026#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Escolher o tratamento do condiloma anogenital conforme extensão e localização.</li>
<li>Rastrear HIV e outras infecções sexualmente transmissíveis, no paciente e nos parceiros.</li>
<li>Conhecer a prevenção pelo HPV e o seguimento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Condiloma acuminado</dt>
<dd>Verrugas anogenitais por HPV de baixo risco (6 e 11), transmitidas por contato sexual.</dd>
<dt>Ácido tricloroacético</dt>
<dd>Cáustico aplicado pelo profissional em lesões pequenas e externas, seguro na gestação.</dd>
<dt>Tratamento ablativo</dt>
<dd>Eletrocoagulação, crioterapia, laser ou excisão, para lesões extensas, internas ou refratárias.</dd>
<dt>Rastreio de IST</dt>
<dd>Testes para HIV, sífilis e hepatites B e C em quem tem uma IST, com convocação das parcerias.</dd>
</dl>
<h4>O essencial</h4>
<p>O condiloma anogenital é a manifestação clínica do HPV de baixo risco oncogênico, com crescimento em meses, indolor, em pápulas e placas verrucosas na região perianal, vulvar, peniana e no canal anal. O diagnóstico é clínico; a biópsia fica para lesões atípicas, pigmentadas, ulceradas, fixas ou sem resposta, pelo diferencial com carcinoma. Em toda lesão perianal, o exame inclui a anuscopia, porque as lesões internas são frequentes.</p>
<p>O tratamento depende da <strong>extensão e do local</strong>. Lesões <strong>pequenas e externas</strong> são tratadas em consultório com <strong>ácido tricloroacético</strong> a 80 a 90% em aplicações semanais, ou pelo paciente com imiquimode ou podofilotoxina (essa contraindicada na gestação e no canal anal). Lesões <strong>extensas, numerosas, internas ou refratárias</strong> exigem tratamento <strong>ablativo sob sedação ou anestesia</strong>: <strong>eletrocoagulação</strong>, crioterapia, laser ou excisão, muitas vezes combinando as duas frentes: o tópico enquanto se programa a ablação. A recidiva é comum e o seguimento por meses é parte do plano.</p>
<p>Um condiloma é uma <strong>infecção sexualmente transmissível</strong>, e o protocolo do Ministério da Saúde manda <strong>rastrear HIV, sífilis e hepatites B e C</strong> em todo paciente com IST, <strong>convocar e testar as parcerias</strong>, oferecer vacinação contra hepatite B e HPV (a vacina é indicada até os 45 anos em situações especiais e não trata a lesão) e orientar preservativo, que reduz mas não elimina a transmissão. Lesões muito extensas ou refratárias levantam a suspeita de imunossupressão, e o HIV positivo muda o seguimento, com citologia anal para lesões precursoras.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Condiloma perianal extenso em jovem que começou a vida sexual recentemente recebe três coisas na mesma consulta: o ácido tricloroacético nas lesões externas, o agendamento da eletrocoagulação sob sedação e os pedidos de HIV, sífilis e hepatites, com o convite para o parceiro vir na semana seguinte.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>HPV 6 e 11; diagnóstico clínico; anuscopia em toda lesão perianal.</li>
<li>Pequenas e externas: ácido tricloroacético, imiquimode; extensas ou internas: eletrocoagulação sob sedação.</li>
<li>Rastrear HIV, sífilis e hepatites B e C; convocar e testar parceiros.</li>
<li>Vacinar HPV e hepatite B; recidiva comum, seguimento por meses.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando o condiloma exige tratamento ablativo sob sedação? <details><summary>Resposta</summary>Quando é extenso, numeroso, interno (canal anal) ou refratário ao tratamento tópico.</details></li>
<li>Que exames acompanham o diagnóstico de condiloma? <details><summary>Resposta</summary>HIV, sífilis e hepatites B e C, no paciente e nas parcerias.</details></li>
</ol>
`,
"susp2026#34": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a formação da veia porta e seus afluentes.</li>
<li>Explicar suas características: sem válvulas, 75% do fluxo hepático, ramificação por segmentos.</li>
<li>Relacionar a anatomia à hipertensão portal e às colaterais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Veia porta</dt>
<dd>Formada pela confluência das veias mesentérica superior e esplênica, atrás do colo do pâncreas.</dd>
<dt>Veia mesentérica inferior</dt>
<dd>Drena o cólon esquerdo e o reto superior; desemboca em geral na esplênica.</dd>
<dt>Sistema sem válvulas</dt>
<dd>Permite fluxo retrógrado quando a pressão sobe: base das varizes e das colaterais.</dd>
<dt>Segmentos de Couinaud</dt>
<dd>Oito segmentos definidos pelos ramos portais e pelas veias hepáticas.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>veia porta</strong> se forma <strong>posteriormente ao colo do pâncreas</strong>, na altura de L2, pela junção da <strong>veia mesentérica superior</strong> (que traz o sangue do intestino delgado, do cólon direito e transverso e do pâncreas) com a <strong>veia esplênica</strong> (que traz o do baço, do pâncreas e do estômago pelas gástricas curtas e gastroepiploica esquerda). A <strong>mesentérica inferior</strong>, que drena o cólon esquerdo e o reto superior, desemboca na maioria das pessoas na esplênica, às vezes na confluência ou na mesentérica superior. A porta recebe ainda a gástrica esquerda (coronária), a gástrica direita, a pancreaticoduodenal e as císticas.</p>
<p>Com 6 a 8 cm, a porta sobe no ligamento hepatoduodenal, <strong>posterior à artéria hepática e ao ducto colédoco</strong>, e no hilo se divide em ramos direito e esquerdo; o direito em anterior e posterior, o esquerdo em segmentos II, III e IV; os ramos definem os <strong>segmentos de Couinaud</strong>. O sistema porta <strong>não tem válvulas</strong>, conduz cerca de <strong>75% do fluxo sanguíneo hepático</strong> (e metade do oxigênio; o resto vem da artéria hepática) e tem pressão baixa, de 5 a 10 mmHg.</p>
<p>Sem válvulas, a obstrução ao fluxo (cirrose, trombose de porta, esquistossomose) eleva a pressão e inverte o sentido nas <strong>anastomoses portossistêmicas</strong>: gástrica esquerda com ázigos (varizes de esôfago), retal superior com retais médias e inferiores (varizes retais), paraumbilicais com epigástricas (cabeça de medusa), retroperitoneais de Retzius e esplenorrenais. Essa anatomia explica as varizes, a esplenomegalia e a lógica das derivações e do TIPS.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na ultrassonografia com Doppler, o fluxo portal deve ser hepatopetal; fluxo hepatofugal em cirrótico significa pressão alta e colaterais abertas. Na cirurgia do hilo, a porta está atrás da artéria e do colédoco: é a última estrutura a aparecer e a mais perigosa de lesar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Porta = mesentérica superior + esplênica, atrás do colo do pâncreas; mesentérica inferior entra na esplênica.</li>
<li>Posterior à artéria hepática e ao colédoco no ligamento hepatoduodenal; divide-se no hilo.</li>
<li>Sem válvulas; 75% do fluxo hepático; baixa pressão.</li>
<li>Colaterais: esôfago (gástrica esquerda-ázigos), reto, umbigo, retroperitônio.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Onde e como se forma a veia porta? <details><summary>Resposta</summary>Atrás do colo do pâncreas, pela junção das veias mesentérica superior e esplênica.</details></li>
<li>Por que a ausência de válvulas importa na cirrose? <details><summary>Resposta</summary>Permite o fluxo retrógrado quando a pressão sobe, abrindo as colaterais que formam as varizes.</details></li>
</ol>
`,
"susp2026#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a hemorragia varicosa maciça: reanimação, vasoconstritor, antibiótico e endoscopia.</li>
<li>Indicar o balão de Sengstaken-Blakemore como ponte no sangramento incontrolável.</li>
<li>Conhecer a técnica, a eficácia e o limite de tempo do balão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Balão de Sengstaken-Blakemore</dt>
<dd>Sonda com balão gástrico e esofágico que comprime as varizes; ponte de até 24 horas.</dd>
<dt>Terlipressina ou octreotida</dt>
<dd>Vasoconstritores esplâncnicos iniciados antes da endoscopia e mantidos por 2 a 5 dias.</dd>
<dt>Ligadura elástica</dt>
<dd>Tratamento endoscópico de escolha das varizes esofágicas sangrantes.</dd>
<dt>TIPS de resgate</dt>
<dd>Derivação portossistêmica intra-hepática para a falha do tratamento endoscópico e farmacológico.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia varicosa é a complicação mais letal da hipertensão portal. O manejo inicial é <strong>reanimação restritiva</strong> (meta de hemoglobina de 7 a 8 g/dL; transfundir demais eleva a pressão portal), <strong>proteção da via aérea</strong> com intubação no sangramento maciço ou no rebaixamento, <strong>vasoconstritor esplâncnico</strong> (terlipressina ou octreotida) desde a suspeita, <strong>antibiótico profilático</strong> (ceftriaxona por até 7 dias, que reduz infecção, ressangramento e mortalidade) e <strong>endoscopia em até 12 horas</strong> com <strong>ligadura elástica</strong> das varizes esofágicas (cianoacrilato nas gástricas).</p>
<p>Quando o sangramento é <strong>maciço e incontrolável</strong>, impedindo a visualização, ou persiste após a ligadura, o <strong>balão de Sengstaken-Blakemore</strong> (ou o Minnesota, com aspiração esofágica) é a <strong>ponte</strong>: passa-se a sonda pela boca no paciente intubado, insufla-se o balão gástrico com 250 a 300 mL de ar, confirma-se a posição e traciona-se contra o cárdia com peso leve; só se o sangramento persistir insufla-se o balão esofágico a 30 a 40 mmHg. A hemostasia é obtida em <strong>mais de 85% dos casos</strong>, mas o ressangramento à desinsuflação é de metade, e por isso o balão só compra tempo para o tratamento definitivo: nova endoscopia, <strong>TIPS de resgate</strong>.</p>
<p>O balão exige <strong>técnica rigorosa e tempo limitado</strong>: manter por no máximo <strong>24 horas</strong>, com alívio periódico da pressão do balão esofágico, radiografia de confirmação, aspiração gástrica e esofágica contínuas e o paciente em terapia intensiva. As complicações são <strong>necrose e rotura do esôfago</strong>, migração com obstrução da via aérea (por isso a intubação prévia), aspiração e úlceras de pressão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Balão insuflado é relógio ligado: anote a hora, mantenha a tração leve, alivie o balão esofágico a cada poucas horas e tenha o plano das próximas 24 horas definido: endoscopia de novo ou TIPS. Balão que fica dois dias vira necrose de esôfago.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reanimação restritiva, via aérea, terlipressina ou octreotida, ceftriaxona, endoscopia em 12 horas com ligadura.</li>
<li>Sangramento incontrolável: balão de Sengstaken-Blakemore como ponte, hemostasia em mais de 85%.</li>
<li>Gástrico primeiro, esofágico só se preciso; máximo de 24 horas; paciente intubado.</li>
<li>Depois: nova endoscopia, TIPS de resgate ou prótese esofágica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o papel do balão na hemorragia varicosa? <details><summary>Resposta</summary>Ponte temporária no sangramento incontrolável, até a endoscopia ou o TIPS, com eficácia acima de 85% mas alto ressangramento ao retirar.</details></li>
<li>Por que o balão não pode ficar mais de 24 horas? <details><summary>Resposta</summary>Pelo risco de necrose e rotura do esôfago por isquemia de pressão.</details></li>
</ol>
`,
"susp2026#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a pancreatite crônica avançada pela tríade dor, esteatorreia e diabetes.</li>
<li>Confirmar pela imagem: calcificações, dilatação ductal e atrofia.</li>
<li>Tratar com reposição enzimática, suporte nutricional, controle da dor e do diabetes.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pancreatite crônica</dt>
<dd>Inflamação fibrosante progressiva e irreversível do pâncreas, com perda das funções exócrina e endócrina.</dd>
<dt>Insuficiência exócrina</dt>
<dd>Esteatorreia, perda de peso e deficiência de vitaminas lipossolúveis quando a lipase cai abaixo de 10%.</dd>
<dt>Diabetes tipo 3c</dt>
<dd>Diabetes pancreatogênico, com deficiência de insulina e de glucagon; risco alto de hipoglicemia.</dd>
<dt>Elastase fecal</dt>
<dd>Teste de triagem da função exócrina; abaixo de 200 µg/g indica insuficiência.</dd>
</dl>
<h4>O essencial</h4>
<p>A pancreatite crônica no Brasil é sobretudo <strong>alcoólica</strong>, com o tabagismo como cofator; causas genéticas, obstrutivas e autoimunes respondem pelo resto. Anos de <strong>dor epigástrica recorrente</strong>, irradiada ao dorso, pior após comer e beber, precedem as manifestações de falência: <strong>esteatorreia</strong> (fezes volumosas, gordurosas, que boiam) e <strong>perda de peso</strong> quando a secreção de lipase cai abaixo de 10%, deficiência de vitaminas A, D, E e K e de B12, osteoporose, e <strong>diabetes</strong> pancreatogênico quando as ilhotas são destruídas. Dor, esteatorreia e diabetes juntos definem a doença avançada.</p>
<p>A confirmação é por <strong>imagem</strong>: <strong>calcificações</strong> pancreáticas na tomografia (quase patognomônicas na alcoólica), <strong>dilatação irregular do ducto</strong> principal com estenoses e cálculos, <strong>atrofia</strong> do parênquima, pseudocistos; a colangiorressonância e a ecoendoscopia detalham. A <strong>elastase fecal</strong> baixa e a gordura fecal aumentada documentam a insuficiência exócrina; glicemia e hemoglobina glicada, a endócrina.</p>
<p>O tratamento é de <strong>reposição e suporte</strong>: abstinência de álcool e tabaco; <strong>enzimas pancreáticas</strong> (lipase 40.000 a 50.000 unidades nas refeições principais, com inibidor de bomba se a resposta for parcial); <strong>dieta</strong> fracionada e hipercalórica, sem restrição excessiva de gordura, com reposição de vitaminas lipossolúveis e cálcio; <strong>insulina</strong> para o diabetes tipo 3c, com atenção à hipoglicemia pela falta de glucagon; analgesia escalonada, com pregabalina e antidepressivos antes dos opioides. A endoscopia (drenagem do ducto, litotripsia) e a cirurgia (derivação de Puestow ou Frey, ressecções) ficam para a dor refratária com ducto dilatado e para as complicações.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Etilista com calcificações no pâncreas, fezes que boiam e glicemia alta não precisa de mais um exame: precisa de enzima na refeição, vitamina D, insulina com cuidado e o convite firme para parar de beber.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Alcoólica na maioria; dor de anos, depois esteatorreia, perda de peso e diabetes.</li>
<li>Imagem: calcificações, ducto dilatado e irregular, atrofia; elastase fecal baixa.</li>
<li>Irreversível: enzimas nas refeições, dieta hipercalórica, vitaminas, insulina, abstinência.</li>
<li>Endoscopia e cirurgia para dor refratária com ducto dilatado e complicações.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado de imagem é quase patognomônico da pancreatite crônica alcoólica? <details><summary>Resposta</summary>As calcificações pancreáticas na tomografia.</details></li>
<li>Por que o diabetes pancreatogênico tem mais hipoglicemia? <details><summary>Resposta</summary>Porque faltam insulina e também glucagon, que faria a contrarregulação.</details></li>
</ol>
`,
"susp2026#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios de Light para separar transudato de exsudato.</li>
<li>Reconhecer o encarceramento pulmonar como causa de não reexpansão após drenagem.</li>
<li>Conhecer as causas de transudato e a conduta na insuficiência cardíaca.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios de Light</dt>
<dd>Exsudato se proteína pleural/sérica acima de 0,5, ou LDH pleural/sérica acima de 0,6, ou LDH pleural acima de dois terços do limite superior sérico.</dd>
<dt>Transudato</dt>
<dd>Líquido por desequilíbrio de pressões, com pleura íntegra: insuficiência cardíaca, cirrose, síndrome nefrótica.</dd>
<dt>Encarceramento pulmonar</dt>
<dd>Casca fibrosa na pleura visceral que impede o pulmão de expandir; pressão pleural muito negativa ao drenar.</dd>
<dt>Pneumotórax ex vacuo</dt>
<dd>Ar no espaço pleural após drenar um derrame cujo pulmão não expande; não é fístula.</dd>
</dl>
<h4>O essencial</h4>
<p>O derrame pleural é investigado pela toracocentese, e a primeira pergunta é <strong>transudato ou exsudato</strong>. Os <strong>critérios de Light</strong> definem exsudato se qualquer um for verdadeiro: relação <strong>proteína pleural/sérica acima de 0,5</strong>, relação <strong>LDH pleural/sérica acima de 0,6</strong>, ou <strong>LDH pleural acima de dois terços</strong> do limite superior do normal sérico. Nenhum verdadeiro: transudato, e a causa está fora da pleura: <strong>insuficiência cardíaca</strong> (a mais comum), cirrose com ascite, síndrome nefrótica, diálise peritoneal, hipoalbuminemia, atelectasia. Em cardiopata com diurético, um transudato pode ser rotulado de exsudato pelos critérios; o gradiente de albumina sérica menos pleural acima de 1,2 g/dL corrige a leitura.</p>
<p>No transudato por insuficiência cardíaca, o tratamento é o da doença de base: diurético, e a drenagem só para alívio de dispneia em derrames volumosos.</p>
<p>Quando se drena um derrame e o <strong>pulmão não reexpande</strong>, a radiografia mostra um espaço pleural persistente, às vezes com ar (pneumotórax ex vacuo), e o paciente tem dor torácica durante a drenagem por pressão pleural muito negativa. Isso é <strong>encarceramento pulmonar</strong>: uma casca fibrosa sobre a pleura visceral, resultado de derrames antigos, empiema, hemotórax, tuberculose ou neoplasia, que prende o pulmão. Não se coloca mais dreno nem se aspira mais líquido; o dreno é retirado, e o tratamento, quando sintomático, é a <strong>decorticação</strong> cirúrgica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor no meio da drenagem e pulmão que não sobe na radiografia de controle não são fístula nem erro do dreno: são pulmão encarcerado. Pare de aspirar, retire o dreno, faça a tomografia para ver a casca e discuta a decorticação se a dispneia justificar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Light: exsudato se proteína pleural/sérica acima de 0,5, LDH pleural/sérica acima de 0,6 ou LDH pleural acima de 2/3 do limite sérico.</li>
<li>Transudato: insuficiência cardíaca, cirrose, nefrótico; tratar a causa.</li>
<li>Diurético pode "exsudatizar"; gradiente de albumina acima de 1,2 corrige.</li>
<li>Pulmão que não reexpande com dor ao drenar: encarceramento; retirar o dreno, decorticação se sintomático.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Proteína pleural 2,0 com sérica 6,0 e LDH pleural 100 com sérica 250 (limite 220): transudato ou exsudato? <details><summary>Resposta</summary>Transudato: relações 0,33 e 0,4, e LDH pleural abaixo de dois terços de 220.</details></li>
<li>O que explica o pulmão que não expande após drenar um derrame crônico? <details><summary>Resposta</summary>Encarceramento pulmonar por casca fibrosa na pleura visceral; a conduta é retirar o dreno e considerar decorticação.</details></li>
</ol>
`,
"susp2026#39": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o pneumotórax hipertensivo pela clínica, sem imagem.</li>
<li>Descomprimir de imediato e depois drenar.</li>
<li>Situar a ameaça à vida dentro da sequência do ATLS.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pneumotórax hipertensivo</dt>
<dd>Ar que entra no espaço pleural a cada inspiração sem sair, desvia o mediastino e colapsa o retorno venoso.</dd>
<dt>Descompressão por agulha</dt>
<dd>Cateter calibroso no 5º espaço intercostal, linha axilar anterior (ou 2º espaço, linha hemiclavicular).</dd>
<dt>Toracostomia digital</dt>
<dd>Incisão e abertura da pleura com o dedo no 5º espaço, opção mais eficaz para descomprimir.</dd>
<dt>Avaliação primária</dt>
<dd>ABCDE: cada ameaça imediata à vida é tratada quando encontrada, antes de seguir.</dd>
</dl>
<h4>O essencial</h4>
<p>No trauma, a avaliação primária segue o ABCDE e <strong>trata cada problema quando o encontra</strong>. No B (ventilação), o pneumotórax hipertensivo é a ameaça que mata em minutos: o ar entra no espaço pleural por uma lesão em válvula, acumula pressão, colapsa o pulmão, empurra o mediastino e comprime as veias cavas, reduzindo o retorno venoso até o choque obstrutivo e a parada.</p>
<p>O diagnóstico é <strong>clínico</strong>: <strong>dispneia e agitação</strong>, <strong>ausência de murmúrio</strong> e <strong>hipertimpanismo</strong> do lado afetado, <strong>desvio da traqueia</strong> para o lado oposto (tardio), <strong>turgência jugular</strong> (pode faltar se há hipovolemia), hipotensão, cianose e enfisema subcutâneo; equimose torácica e fraturas de costela apontam o lado. Não se espera radiografia: o tratamento é a <strong>descompressão imediata</strong>, por <strong>agulha</strong> (cateter 14 G ou mais longo no 5º espaço intercostal, linha axilar anterior, no adulto; 2º espaço, linha hemiclavicular, na criança) ou por <strong>toracostomia digital</strong>, que não falha por parede espessa. O escape de ar confirma. Segue-se a <strong>drenagem torácica</strong> em selo d'água no mesmo local.</p>
<p>Só depois de resolver o B se prossegue: circulação, avaliação neurológica, exposição, e então a radiografia e o FAST. Intubar e ventilar com pressão positiva um pneumotórax hipertensivo não descomprimido acelera a parada; dar volume ao choque obstrutivo não resolve; pedir radiografia perde os minutos que decidem. A ordem, no trauma, é o próprio tratamento: identificar e tratar a ameaça imediata à vida antes de avaliar o resto.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Politraumatizado agitado, sem murmúrio de um lado, com o tórax timpânico e a pressão caindo: a agulha entra antes do raio X, antes do tubo e antes do soro. Se a descompressão por agulha não muda o quadro, abra com o dedo. Depois, o dreno.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Válvula unidirecional: pressão pleural, desvio do mediastino, choque obstrutivo.</li>
<li>Clínica: dispneia, sem murmúrio, hipertimpanismo, desvio de traqueia, jugulares, hipotensão.</li>
<li>Descompressão imediata por agulha (5º espaço, axilar anterior) ou toracostomia digital; depois dreno.</li>
<li>Sem radiografia, sem intubar antes, sem volume como resposta: tratar a ameaça e seguir o ABCDE.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que não se espera a radiografia no pneumotórax hipertensivo? <details><summary>Resposta</summary>Porque o diagnóstico é clínico e a descompressão precisa acontecer em minutos; a imagem atrasa o tratamento.</details></li>
<li>Onde se faz a descompressão por agulha no adulto? <details><summary>Resposta</summary>No 5º espaço intercostal, linha axilar anterior; o 2º espaço hemiclavicular é opção.</details></li>
</ol>
`,
"susp2026#40": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Abrir a via aérea no trauma com suspeita de lesão cervical: tração da mandíbula.</li>
<li>Saber quando a cânula nasofaríngea é contraindicada e quando a via aérea definitiva é necessária.</li>
<li>Reconhecer o paciente em que a coluna cervical não pode ser liberada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Jaw-thrust</dt>
<dd>Tração anterior da mandíbula com os dedos nos ângulos, sem estender o pescoço.</dd>
<dt>Chin-lift</dt>
<dd>Elevação do queixo com extensão da cabeça; contraindicada quando a coluna não está liberada.</dd>
<dt>Via aérea definitiva</dt>
<dd>Tubo na traqueia com balonete insuflado, fixado e conectado a oxigênio: intubação ou cricotireoidostomia.</dd>
<dt>Paciente não avaliável</dt>
<dd>Rebaixado, intoxicado ou com lesão distrativa: a coluna cervical não pode ser liberada clinicamente.</dd>
</dl>
<h4>O essencial</h4>
<p>No A do ATLS, a via aérea é avaliada com a <strong>coluna cervical protegida</strong>, porque todo trauma de alta energia com rebaixamento pode ter lesão cervical.</p>
<p>A manobra correta é a <strong>tração da mandíbula (jaw-thrust)</strong>: os dedos nos ângulos da mandíbula a empurram para a frente, levantando a língua da faringe, <strong>sem estender o pescoço</strong>; o <strong>chin-lift</strong>, que eleva o queixo e estende a cabeça, fica para quem não tem suspeita de lesão cervical. Somam-se aspiração da orofaringe, oxigênio suplementar em alto fluxo por máscara com reservatório e, para manter a via, uma cânula: a <strong>orofaríngea</strong> (Guedel) no paciente sem reflexo de vômito, ou a <strong>nasofaríngea</strong> no que ainda tem reflexo, mas essa é <strong>contraindicada</strong> na suspeita de fratura de base de crânio e nos traumas de face médios (rinorreia, otorreia, hematoma periorbital, sinal de Battle, fratura de nariz e maxila), pelo risco de penetrar o crânio.</p>
<p>A <strong>via aérea definitiva</strong> é indicada com apneia, Glasgow de 8 ou menos, incapacidade de proteger a via (sangramento, vômitos, sem reflexo), risco de obstrução (queimadura inalatória, hematoma cervical em expansão) e hipoxemia refratária. A <strong>coluna cervical só é liberada</strong> clinicamente (NEXUS ou regra canadense) em quem está alerta, sem intoxicação, sem dor à palpação da linha média, sem déficit e sem lesão distrativa; a paciente sonolenta com hálito etílico não cumpre nenhum critério, e o colar fica até a tomografia de coluna e a reavaliação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Motociclista sonolenta, bêbada, com sangue no nariz: dedos nos ângulos da mandíbula, aspiração, máscara com reservatório, Guedel se tolerar; nada pelo nariz. E o colar não sai por ela "mexer o pescoço": só sai quando ela puder ser examinada sóbria e acordada, ou pela imagem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Via aérea com coluna protegida; quem fala tem via pérvia.</li>
<li>Jaw-thrust, não chin-lift, na suspeita de lesão cervical; aspiração e oxigênio em alto fluxo.</li>
<li>Cânula nasofaríngea contraindicada no trauma de face e na fratura de base de crânio.</li>
<li>Definitiva: apneia, Glasgow 8 ou menos, sem proteção da via, obstrução iminente; coluna só liberada em paciente avaliável.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que manobra abre a via aérea sem mover a coluna cervical? <details><summary>Resposta</summary>A tração da mandíbula (jaw-thrust), com os dedos nos ângulos da mandíbula, sem extensão do pescoço.</details></li>
<li>Por que a coluna da paciente sonolenta e etilizada não pode ser liberada? <details><summary>Resposta</summary>Porque a liberação clínica exige paciente alerta, sem intoxicação, sem dor na linha média, sem déficit e sem lesão distrativa.</details></li>
</ol>
`,
"susp2021#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a apendicite complicada e a base apendicular comprometida.</li>
<li>Escolher a técnica de fechamento do coto conforme a viabilidade da base.</li>
<li>Saber que o dreno não tem lugar na apendicite complicada.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sutura de Parker-Kerr</dt>
<dd>Sutura invaginante contínua em duas camadas sobre o coto, sem ligadura isolada, para base friável ou isquêmica.</dd>
<dt>Ligadura simples com invaginação em bolsa</dt>
<dd>Técnica clássica para base íntegra: ligadura do coto e sepultamento com sutura em bolsa.</dd>
<dt>Tiflectomia</dt>
<dd>Ressecção parcial do ceco quando a base está necrosada até a parede cecal.</dd>
<dt>Apendicite complicada</dt>
<dd>Gangrena, perfuração, abscesso ou peritonite; sintomas há mais de 48 a 72 horas.</dd>
</dl>
<h4>O essencial</h4>
<p>A apendicite que chega com quatro dias de dor, febre, disúria e alteração do hábito intestinal é <strong>complicada</strong>: o apêndice inflamado, muitas vezes pélvico ou retrocecal, irrita a bexiga e o reto, e a evolução prolongada leva à gangrena, à perfuração e ao abscesso. A conduta é a <strong>apendicectomia</strong>, por via convencional ou laparoscópica conforme a experiência e o achado, com <strong>antibiótico</strong> de amplo espectro mantido por 3 a 5 dias no pós-operatório; o abscesso organizado sem peritonite pode ser drenado por punção e operado depois.</p>
<p>No intraoperatório, a <strong>base do apêndice decide a técnica</strong>. Base <strong>íntegra</strong>: ligadura do coto e, se o cirurgião preferir, invaginação em bolsa, ou grampeamento na laparoscopia. Base <strong>friável, edemaciada ou isquêmica</strong>, em que a ligadura cortaria ou soltaria: <strong>sutura de Parker-Kerr</strong>, uma sutura invaginante contínua em duas camadas que fecha o coto sepultando-o na parede do ceco sem apertar um nó sobre tecido doente. Base <strong>necrosada com o ceco comprometido</strong>: ressecção parcial do ceco (tiflectomia) com grampeador ou sutura, ou, se a necrose for extensa, colectomia direita. A avaliação da base é o momento mais importante da operação na apendicite tardia, porque a fístula cecal é a complicação que mais custa.</p>
<p>O <strong>dreno</strong> abdominal <strong>não é indicado</strong> na apendicite complicada, mesmo perfurada com peritonite: as evidências mostram que ele não reduz abscesso intra-abdominal nem fístula, e aumenta o tempo de internação e as complicações da ferida. O que previne o abscesso é a lavagem e aspiração da cavidade, a remoção de coprólitos e o antibiótico. O fechamento da pele pode ser primário ou tardio conforme a contaminação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ao encontrar a base do apêndice friável, não force a ligadura: faça a Parker-Kerr e sepulte o coto. E resista ao dreno "por segurança": na apendicite, ele não protege de nada e atrasa a alta. Lave, aspire, antibiótico, e o paciente vai para casa em poucos dias.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Apendicite tardia com sintomas urinários e retais: apêndice pélvico complicado.</li>
<li>Base íntegra: ligadura (com ou sem bolsa); base friável ou isquêmica: sutura de Parker-Kerr.</li>
<li>Base necrosada com ceco comprometido: tiflectomia ou colectomia direita.</li>
<li>Sem dreno na apendicite complicada; lavagem, aspiração e antibiótico previnem o abscesso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quando a sutura de Parker-Kerr está indicada? <details><summary>Resposta</summary>Quando a base do apêndice está friável ou isquêmica e a ligadura simples não é segura.</details></li>
<li>O dreno reduz abscesso na apendicite perfurada? <details><summary>Resposta</summary>Não; não reduz abscesso nem fístula e aumenta internação e complicações da ferida.</details></li>
</ol>
`,
"susp2021#62": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar as técnicas de hernioplastia inguinal em teciduais e com tela.</li>
<li>Explicar por que a técnica de Bassini tem tensão e recidiva mais.</li>
<li>Saber qual é o padrão atual e quando as técnicas teciduais ainda se usam.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Reparo tecidual</dt>
<dd>Aproximação com sutura das estruturas da parede (Bassini, McVay, Shouldice), com tensão na linha.</dd>
<dt>Reparo sem tensão</dt>
<dd>Tela de polipropileno que cobre o defeito sem aproximar tecidos (Lichtenstein, plug, laparoscópico).</dd>
<dt>Técnica de Bassini</dt>
<dd>Sutura do tendão conjunto ao ligamento inguinal, sob tensão; recidiva de 10 a 30% em séries históricas.</dd>
<dt>Lichtenstein</dt>
<dd>Tela anterior fixada ao ligamento inguinal e ao tendão conjunto; padrão da via aberta.</dd>
</dl>
<h4>O essencial</h4>
<p>As técnicas de correção da hérnia inguinal se dividem em duas famílias. As <strong>teciduais</strong>, do fim do século XIX ao meio do XX, aproximam estruturas próprias com sutura e por isso trabalham <strong>sob tensão</strong>: <strong>Bassini</strong> sutura o tendão conjunto (oblíquo interno e transverso) ao ligamento inguinal; <strong>McVay</strong> sutura ao ligamento de Cooper, o que serve também às hérnias femorais; <strong>Shouldice</strong> reconstrói o assoalho em quatro planos de sutura contínua com aço ou polipropileno e tem os melhores resultados entre as teciduais. As <strong>com tela</strong>, a partir de Lichtenstein nos anos 1980, cobrem o defeito com uma prótese <strong>sem tensão</strong>, por via anterior (Lichtenstein, plug e patch) ou posterior laparoscópica (TAPP, TEP), e reduziram a recidiva para 1 a 3%.</p>
<p>A tensão é o problema da <strong>Bassini</strong>: os tecidos suturados sob tração isquemiam, cortam e se afrouxam, e a dor no pós-operatório é maior; a recidiva nas séries históricas chega a 10 a 30%, a pior entre as técnicas correntes, e por isso ela foi abandonada como padrão. A Shouldice, quando bem executada em centros dedicados, chega perto da tela, mas depende da curva de aprendizado.</p>
<p>Hoje, as diretrizes internacionais recomendam a <strong>tela</strong> para o adulto: Lichtenstein pela via aberta com anestesia local ou regional, e laparoscopia para hérnias bilaterais, recidivadas após reparo anterior e quando o cirurgião domina a técnica, com menos dor crônica e retorno mais rápido. As técnicas teciduais permanecem para <strong>campo contaminado</strong> (estrangulamento com necrose intestinal), para a criança (Marcy, fechamento do saco) e para quem recusa a prótese; a Shouldice é a escolha nesses casos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na hérnia estrangulada com alça necrosada, a tela fica de fora: reparo tecidual, de preferência Shouldice ou McVay, e explicação ao paciente de que a recidiva será maior. Fora dessa situação, tela é a resposta, e Bassini é história.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Teciduais (Bassini, McVay, Shouldice): sutura sob tensão; tela (Lichtenstein, laparoscopia): sem tensão.</li>
<li>Bassini: maior tensão e maior recidiva (10 a 30%); abandonada como padrão.</li>
<li>Shouldice é a melhor tecidual; McVay serve à femoral.</li>
<li>Padrão: tela; teciduais em campo contaminado, criança e recusa de prótese.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual técnica tecidual tem a maior recidiva e por quê? <details><summary>Resposta</summary>Bassini, pela tensão da sutura do tendão conjunto ao ligamento inguinal.</details></li>
<li>Quando se evita a tela na hérnia inguinal? <details><summary>Resposta</summary>Em campo contaminado, como estrangulamento com necrose intestinal, e na criança.</details></li>
</ol>
`,
"susp2021#69": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar o algoritmo do trauma abdominal fechado pela estabilidade e pelo FAST.</li>
<li>Indicar a tomografia com contraste no paciente estável com FAST positivo.</li>
<li>Reconhecer quando a laparotomia é imediata.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>FAST</dt>
<dd>Ultrassonografia focada no trauma: líquido livre no espaço hepatorrenal, esplenorrenal, pelve e pericárdio.</dd>
<dt>Estabilidade hemodinâmica</dt>
<dd>Pressão e frequência normais sustentadas, sem necessidade de transfusão contínua, com resposta ao volume.</dd>
<dt>Tratamento não operatório</dt>
<dd>Observação com monitorização, exames seriados e, se preciso, angioembolização, para lesões de órgãos sólidos em estáveis.</dd>
<dt>Laparotomia imediata</dt>
<dd>Instável com FAST positivo, peritonite, evisceração, pneumoperitônio ou lesão de víscera oca.</dd>
</dl>
<h4>O essencial</h4>
<p>No trauma abdominal fechado, a primeira pergunta depois do ABC é <strong>estável ou instável?</strong>, e a segunda é <strong>o sangue está no abdome?</strong>, respondida pelo <strong>FAST</strong> na sala de trauma. O cruzamento decide. <strong>Instável com FAST positivo</strong>: <strong>laparotomia</strong> imediata, sem tomografia, porque o abdome é a fonte do choque. <strong>Instável com FAST negativo</strong>: procurar o sangue em outro lugar (tórax, pelve, retroperitônio, ossos longos, externo) e repetir o FAST. <strong>Estável com FAST positivo</strong>: <strong>tomografia de abdome e pelve com contraste intravenoso</strong>, que identifica o órgão lesado, gradua a lesão, mostra extravasamento ativo e permite o <strong>tratamento não operatório</strong> do fígado, do baço e do rim na maioria dos casos. <strong>Estável com FAST negativo</strong>: observação e tomografia se houver mecanismo importante, dor, exame não confiável ou lesões associadas.</p>
<p>O paciente sem cinto, em colisão em rodovia, com dor abdominal e FAST positivo, mas com pressão 130 por 90 e frequência normal, é estável: vai para a tomografia com contraste. Nela, uma lesão esplênica de grau III sem extravasamento vai para a observação em terapia intensiva ou semi-intensiva, com hemoglobina seriada, repouso e exame físico frequente; extravasamento de contraste ou pseudoaneurisma vai para a angioembolização; instabilidade a qualquer momento ou peritonite mudam para a laparotomia.</p>
<p>O FAST não vê lesão de víscera oca, de diafragma nem de retroperitônio; a tomografia também pode perder lesões de intestino e mesentério nas primeiras horas, e por isso o exame físico seriado e a reavaliação em 6 a 12 horas fazem parte do tratamento não operatório.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>FAST positivo com pressão normal não é indicação de laparotomia, é indicação de tomografia com contraste e de um leito monitorado. O que muda a rota é a pressão que cai ou o abdome que endurece, não a quantidade de líquido na imagem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Instável e FAST positivo: laparotomia; instável e FAST negativo: procurar outra fonte.</li>
<li>Estável e FAST positivo: tomografia com contraste; tratamento não operatório se possível.</li>
<li>Extravasamento ativo ou pseudoaneurisma no estável: angioembolização.</li>
<li>FAST e tomografia não afastam víscera oca: exame seriado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o próximo passo no trauma fechado estável com FAST positivo? <details><summary>Resposta</summary>Tomografia de abdome e pelve com contraste intravenoso.</details></li>
<li>Quando o tratamento não operatório do baço deve ser abandonado? <details><summary>Resposta</summary>Com instabilidade hemodinâmica, peritonite ou necessidade transfusional persistente; extravasamento ativo pede angioembolização.</details></li>
</ol>
`,
"susp2021#70": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Delimitar as três zonas do retroperitônio e o que cada uma contém.</li>
<li>Aplicar a regra de exploração: zona 1 sempre, zona 2 seletiva, zona 3 quase nunca no trauma fechado.</li>
<li>Diferenciar a conduta no trauma penetrante e no fechado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Zona 1 (central)</dt>
<dd>Do hiato ao promontório: aorta, cava, tronco celíaco, mesentéricos, duodeno, pâncreas.</dd>
<dt>Zona 2 (lateral)</dt>
<dd>Flancos: rins, ureteres e vasos renais, cólons retroperitoneais.</dd>
<dt>Zona 3 (pélvica)</dt>
<dd>Vasos ilíacos, plexo venoso presacral, reto extraperitoneal; hematoma das fraturas de pelve.</dd>
<dt>Controle proximal e distal</dt>
<dd>Clampeamento dos vasos antes de abrir um hematoma central, para não converter tamponamento em exsanguinação.</dd>
</dl>
<h4>O essencial</h4>
<p>O retroperitônio tampona: um hematoma retroperitoneal pode estar contido pela pressão dos tecidos, e abri-lo sem preparo transforma um sangramento controlado numa hemorragia livre. Por isso a conduta na laparotomia depende da <strong>zona</strong> e do <strong>mecanismo</strong>.</p>
<p>A <strong>zona 1</strong>, central, contém a aorta, a cava, os grandes ramos viscerais, o duodeno e o pâncreas; um hematoma ali significa lesão de grande vaso ou de víscera que não pode ficar sem reparo, e <strong>sempre é explorado</strong>, no fechado e no penetrante, após <strong>controle proximal e distal</strong> dos vasos (manobras de Mattox, à esquerda, para a aorta supracelíaca, e de Cattell-Braasch, à direita, para a cava e o duodeno). A <strong>zona 2</strong>, lateral, contém os rins e os cólons: no <strong>penetrante</strong> explora-se; no <strong>fechado</strong> a exploração é <strong>seletiva</strong>: só se o hematoma é expansivo, pulsátil ou há lesão de cólon, porque abrir um hematoma perirrenal estável costuma terminar em nefrectomia de um rim que teria sarado. A <strong>zona 3</strong>, pélvica, contém os vasos ilíacos e o plexo presacral, e o hematoma do trauma <strong>fechado</strong> vem da fratura de pelve: <strong>não se explora</strong>, porque o sangramento venoso e ósseo não é suturável e a abertura descomprime o tamponamento; o tratamento é a estabilização da pelve, a angioembolização e, se preciso, o empacotamento pré-peritoneal. No <strong>penetrante</strong>, a zona 3 é explorada pelo risco de lesão ilíaca.</p>
<p>Em qualquer zona, um hematoma que <strong>expande ou pulsa</strong> durante a operação exige exploração. A tomografia pré-operatória, quando o paciente é estável, mostra a extensão e o extravasamento e orienta a embolização antes da cirurgia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na laparotomia do trauma fechado, hematoma na linha média se abre com os vasos controlados; hematoma no flanco que não cresce se deixa quieto; hematoma na pelve não se toca, e a pergunta passa a ser como estabilizar a pelve e chamar a radiologia intervencionista.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Zona 1 (central): sempre explorar, com controle proximal e distal.</li>
<li>Zona 2 (flancos): seletiva no fechado (expansivo, pulsátil, cólon); explorar no penetrante.</li>
<li>Zona 3 (pelve): não explorar no fechado; estabilizar, embolizar, empacotar; explorar no penetrante.</li>
<li>Hematoma expansivo ou pulsátil: explorar em qualquer zona.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o hematoma de zona 3 do trauma fechado não é explorado? <details><summary>Resposta</summary>Porque vem da fratura de pelve, com sangramento venoso e ósseo não suturável, e a abertura descomprime o tamponamento.</details></li>
<li>O que fazer antes de abrir um hematoma de zona 1? <details><summary>Resposta</summary>Obter controle proximal e distal dos grandes vasos, com as manobras de Mattox ou Cattell-Braasch.</details></li>
</ol>
`,
"susp2021#71": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar os efeitos fisiológicos do pneumoperitônio com CO2.</li>
<li>Identificar as contraindicações à videolaparoscopia.</li>
<li>Reconhecer as complicações do acesso e da insuflação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pneumoperitônio</dt>
<dd>Insuflação de CO2 a 12 a 15 mmHg para criar espaço de trabalho.</dd>
<dt>Hipercapnia</dt>
<dd>Absorção peritoneal do CO2, que exige aumento da ventilação; problema no pneumopata grave.</dd>
<dt>Redução do retorno venoso</dt>
<dd>Compressão da cava pela pressão abdominal, com queda do débito cardíaco, pior no cardiopata restritivo.</dd>
<dt>Contraindicação absoluta</dt>
<dd>Instabilidade hemodinâmica, incapacidade de tolerar o pneumoperitônio, ausência de condições técnicas.</dd>
</dl>
<h4>O essencial</h4>
<p>A laparoscopia depende do <strong>pneumoperitônio</strong>, e ele tem custo fisiológico. O CO2 é absorvido pelo peritônio e produz <strong>hipercapnia e acidose</strong>, que o anestesista compensa aumentando a ventilação; a <strong>pressão intra-abdominal</strong> de 12 a 15 mmHg eleva o diafragma, reduz a complacência pulmonar e a capacidade residual, <strong>comprime a veia cava</strong> e reduz o retorno venoso e o débito cardíaco, ao mesmo tempo que aumenta a resistência vascular periférica; a posição de Trendelenburg ou reversa acentua os efeitos. Em pacientes saudáveis tudo isso é bem tolerado; em quem não tem reserva, não.</p>
<p>Daí as <strong>contraindicações</strong>. Absolutas: <strong>instabilidade hemodinâmica</strong> (choque, trauma instável), impossibilidade de tolerar o pneumoperitônio, como na <strong>doença cardiovascular restritiva importante</strong> (cardiomiopatia restritiva, pericardite constritiva, insuficiência cardíaca avançada, em que o retorno venoso reduzido derruba o débito) e na <strong>doença pulmonar grave</strong> com retenção de CO2 (DPOC avançado, hipertensão pulmonar), e falta de equipe e material. Relativas, que a experiência do cirurgião e a otimização podem contornar: cirurgias abdominais múltiplas com aderências extensas, distensão intestinal importante, gestação avançada, coagulopatia não corrigida, hérnia diafragmática, derivação ventriculoperitoneal e glaucoma descompensado.</p>
<p>As <strong>complicações</strong> específicas vêm do acesso e do gás: lesão de vasos e vísceras pela agulha de Veress ou pelo trocarte, embolia gasosa por insuflação intravascular, enfisema subcutâneo, pneumotórax e pneumomediastino por passagem do gás, arritmias vagais na insuflação rápida e dor referida no ombro pelo CO2 residual.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de indicar laparoscopia, pergunte se o coração e o pulmão do paciente toleram menos retorno venoso e mais CO2 por duas horas. Se a resposta é não (pericardite constritiva, cardiomiopatia restritiva, DPOC com retenção), a cirurgia aberta é a opção mais segura.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pneumoperitônio: hipercapnia, menos complacência pulmonar, menos retorno venoso e débito.</li>
<li>Absolutas: instabilidade hemodinâmica, cardiopatia restritiva importante, pneumopatia grave com retenção de CO2, falta de condições.</li>
<li>Relativas: aderências, distensão, gestação avançada, coagulopatia, derivações.</li>
<li>Complicações: lesão no acesso, embolia gasosa, enfisema, pneumotórax, arritmia vagal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a doença cardiovascular restritiva contraindica a laparoscopia? <details><summary>Resposta</summary>Porque o pneumoperitônio reduz o retorno venoso e o coração restritivo não consegue manter o débito.</details></li>
<li>Cite duas complicações ligadas ao gás. <details><summary>Resposta</summary>Embolia gasosa e enfisema subcutâneo (também pneumotórax e hipercapnia).</details></li>
</ol>
`,
"susp2021#74": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a classificação da AAST ao trauma de pâncreas, definida pela integridade do ducto.</li>
<li>Escolher a conduta por grau: drenagem, pancreatectomia distal ou procedimentos complexos.</li>
<li>Reconhecer os sinais e os exames que apontam a lesão ductal.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Graus AAST do pâncreas</dt>
<dd>I contusão ou laceração menor sem ducto; II maior sem ducto; III distal com ducto; IV proximal com ducto ou ampola; V destruição da cabeça.</dd>
<dt>Ducto pancreático principal</dt>
<dd>Sua integridade define a gravidade; a lesão leva a fístula, pseudocisto e abscesso.</dd>
<dt>Veia mesentérica superior</dt>
<dd>Marco entre pâncreas distal (à esquerda) e proximal (à direita) na classificação.</dd>
<dt>Pancreatectomia distal</dt>
<dd>Ressecção do corpo e cauda com ou sem esplenectomia; tratamento do grau III.</dd>
</dl>
<h4>O essencial</h4>
<p>O pâncreas é lesado por compressão contra a coluna (guidão, volante, cinto) ou por ferimento penetrante, muitas vezes junto do duodeno e dos vasos. A <strong>classificação da AAST</strong> é anatômica e o eixo é o <strong>ducto principal</strong>: <strong>grau I</strong>, hematoma ou laceração superficial <strong>sem lesão ductal</strong>; <strong>grau II</strong>, laceração maior ou hematoma extenso, ainda <strong>sem lesão ductal</strong>; <strong>grau III</strong>, <strong>transecção ou lesão com ducto à esquerda da veia mesentérica superior</strong> (pâncreas distal); <strong>grau IV</strong>, transecção ou lesão com ducto à direita da mesentérica superior (cabeça) ou envolvendo a ampola; <strong>grau V</strong>, destruição maciça da cabeça.</p>
<p>A suspeita vem do mecanismo, da dor epigástrica irradiada ao dorso, da amilase e lipase elevadas ou em ascensão (inespecíficas nas primeiras horas) e da <strong>tomografia</strong>, que pode subestimar a lesão ductal; a colangiopancreatografia por ressonância ou a endoscópica definem o ducto no estável, e na laparotomia a exploração da retrocavidade com inspeção da glândula é o método direto. Lesão ductal não reconhecida é a causa das fístulas, pseudocistos e abscessos tardios.</p>
<p>A conduta segue o grau. <strong>Graus I e II</strong>: <strong>drenagem</strong> externa ampla, hemostasia, sem sutura do parênquima; o tratamento não operatório é possível no estável sem outra indicação de cirurgia. <strong>Grau III</strong>: <strong>pancreatectomia distal</strong>, com preservação do baço quando as condições permitem, e drenagem. <strong>Grau IV</strong>: drenagem ampla e, quando o duodeno e a ampola estão íntegros, preservação da cabeça com derivação ou drenagem; em casos selecionados, pancreatectomia distal ampliada. <strong>Grau V</strong>: controle de danos e, em segundo tempo, duodenopancreatectomia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na laparotomia por trauma, abra a retrocavidade e olhe o pâncreas por inteiro: uma laceração à esquerda da mesentérica com o ducto visivelmente rompido é grau III, e a resposta é a pancreatectomia distal na mesma operação, não o dreno "para ver".</p>
</div>
<h4>Resumo</h4>
<ul>
<li>AAST: I e II sem ducto; III ducto distal; IV ducto proximal ou ampola; V destruição da cabeça.</li>
<li>Marco: veia mesentérica superior separa distal (III) de proximal (IV).</li>
<li>I e II: drenagem; III: pancreatectomia distal; IV e V: procedimentos complexos, controle de danos.</li>
<li>Ducto não reconhecido causa fístula, pseudocisto e abscesso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que define o grau III do trauma pancreático? <details><summary>Resposta</summary>Transecção ou lesão com comprometimento do ducto à esquerda da veia mesentérica superior.</details></li>
<li>Qual é a conduta no grau III? <details><summary>Resposta</summary>Pancreatectomia distal, com preservação do baço se possível, e drenagem.</details></li>
</ol>
`,
"susp2021#78": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estadiar o câncer de reto e reconhecer o localmente avançado (T3-T4 ou N positivo).</li>
<li>Indicar a neoadjuvância antes da cirurgia no reto localmente avançado.</li>
<li>Conhecer a sequência: radioquimioterapia, cirurgia com excisão total do mesorreto, adjuvância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Excisão total do mesorreto</dt>
<dd>Ressecção do reto com a gordura e os linfonodos do mesorreto em bloco; base da cirurgia curativa.</dd>
<dt>Neoadjuvância</dt>
<dd>Tratamento antes da cirurgia: radioterapia longa com quimioterapia sensibilizante ou curso curto.</dd>
<dt>Terapia neoadjuvante total</dt>
<dd>Radioquimioterapia e quimioterapia sistêmica completas antes da cirurgia; padrão emergente.</dd>
<dt>Margem circunferencial</dt>
<dd>Distância do tumor à fáscia mesorretal na ressonância; ameaçada quando menor que 1 mm.</dd>
</dl>
<h4>O essencial</h4>
<p>O câncer de reto se estadia com toque retal, colonoscopia com biópsia, <strong>ressonância magnética da pelve</strong> (profundidade T, linfonodos N, margem circunferencial, invasão vascular extramural), tomografia de tórax e abdome e CEA. O tratamento depende do estádio e da altura. O <strong>localmente avançado</strong>, <strong>T3 ou T4, ou qualquer N positivo</strong>, recebe <strong>neoadjuvância antes da ressecção</strong>.</p>
<p>A neoadjuvância no reto existe por três razões: a pelve estreita limita as margens, a recidiva local é a principal falha e a radioterapia antes da cirurgia é mais eficaz e menos tóxica do que depois (o intestino delgado ainda não caiu na pelve, o tumor está oxigenado). As formas: <strong>radioquimioterapia de curso longo</strong> (5 semanas com fluoropirimidina sensibilizante), seguida de cirurgia em 8 a 12 semanas; <strong>radioterapia de curso curto</strong> (5 dias) com cirurgia imediata ou tardia; e a <strong>terapia neoadjuvante total</strong>, que antecipa também a quimioterapia sistêmica, aumenta a resposta completa e permite, em selecionados, a estratégia de vigilância sem cirurgia.</p>
<p>A <strong>cirurgia</strong> é a <strong>excisão total do mesorreto</strong>, com ressecção anterior e anastomose (com ileostomia de proteção) nos tumores médios e altos, ou amputação abdominoperineal com colostomia definitiva nos tumores que invadem o esfíncter. A <strong>quimioterapia adjuvante</strong> completa o tratamento após a cirurgia quando não foi dada antes. Um adenocarcinoma de reto distal <strong>T3 N1 M0</strong>, portanto, segue a sequência radioquimioterapia, ressecção e quimioterapia adjuvante, ou a neoadjuvância total.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Tumor de reto baixo que a ressonância mostra atravessando a parede e com linfonodo suspeito não vai para o centro cirúrgico na semana seguinte: vai para a radioterapia. Explique ao paciente que operar depois é o que reduz a recidiva na pelve.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Estadiar com ressonância pélvica; localmente avançado é T3-T4 ou N positivo.</li>
<li>Reto localmente avançado: neoadjuvância (radioquimioterapia) antes da cirurgia.</li>
<li>Cirurgia: excisão total do mesorreto; adjuvância depois se não feita antes.</li>
<li>Neoadjuvância total e vigilância sem cirurgia em selecionados; cólon é cirurgia primeiro.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a sequência no adenocarcinoma de reto T3 N1 M0? <details><summary>Resposta</summary>Radioquimioterapia neoadjuvante, excisão total do mesorreto e quimioterapia adjuvante (ou neoadjuvância total).</details></li>
<li>Por que a radioterapia é feita antes e não depois da cirurgia no reto? <details><summary>Resposta</summary>Porque é mais eficaz e menos tóxica antes: tumor oxigenado, intestino delgado fora da pelve e melhor chance de margem e preservação esfincteriana.</details></li>
</ol>
`,
"susp2021#79": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a fisiopatologia da doença diverticular e por que o sigmoide é o mais acometido.</li>
<li>Identificar os fatores que aumentam o risco de perfuração e de complicação séptica.</li>
<li>Classificar a diverticulite e conhecer o tratamento por estágio.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Divertículo de pulsão</dt>
<dd>Herniação da mucosa pela parede muscular nos pontos de entrada dos vasos retos, por pressão intraluminal alta.</dd>
<dt>Diverticulite</dt>
<dd>Inflamação e microperfuração de um divertículo, com dor no quadrante inferior esquerdo e febre.</dd>
<dt>Classificação de Hinchey</dt>
<dd>I abscesso pericólico; II abscesso pélvico ou à distância; III peritonite purulenta; IV peritonite fecal.</dd>
<dt>Perfuração livre</dt>
<dd>Rotura do divertículo para a cavidade, com peritonite; mais frequente em imunossuprimidos.</dd>
</dl>
<h4>O essencial</h4>
<p>Os divertículos do cólon são <strong>pseudodivertículos de pulsão</strong>: a mucosa hernia pela camada muscular nos pontos fracos onde os vasos retos a atravessam, empurrada pela <strong>pressão intraluminal alta</strong> que a dieta pobre em fibras, as fezes duras e a segmentação do cólon produzem. O <strong>sigmoide</strong> é o segmento de menor calibre e maior pressão, e por isso concentra a doença no Ocidente; a prevalência sobe com a idade.</p>
<p>A <strong>diverticulite</strong> nasce da obstrução e da erosão de um divertículo, com microperfuração contida: dor no quadrante inferior esquerdo, febre, leucocitose, alteração do hábito; a <strong>tomografia</strong> confirma e gradua. Os <strong>fatores de risco de perfuração e de complicação séptica</strong> são bem definidos: <strong>corticosteroides</strong> e outros imunossupressores (transplantados, quimioterapia), que mascaram os sinais e enfraquecem a resposta local, <strong>anti-inflamatórios não esteroides</strong>, <strong>opioides</strong> (que elevam a pressão intraluminal), tabagismo e obesidade.</p>
<p>O tratamento segue a gravidade: diverticulite <strong>não complicada</strong> em paciente sem risco pode ser tratada ambulatorialmente, e o antibiótico é seletivo; <strong>complicada</strong> (Hinchey I e II) recebe antibiótico venoso e drenagem percutânea dos abscessos maiores que 3 a 4 cm; <strong>peritonite</strong> (III e IV) exige cirurgia, com ressecção do sigmoide e anastomose primária com ou sem ileostomia no paciente estável, ou procedimento de Hartmann no instável e na peritonite fecal. Após o episódio, colonoscopia em 6 a 8 semanas para afastar câncer.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Paciente em prednisona com dor discreta no quadrante inferior esquerdo e febre baixa merece tomografia hoje, não anti-inflamatório e retorno: no imunossuprimido a diverticulite perfura em silêncio, e o abdome "quase normal" é o que engana.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pseudodivertículos de pulsão por pressão alta; sigmoide é o mais acometido.</li>
<li>Risco de perfuração e sepse: corticoide e imunossupressores, AINE, opioides, tabaco, obesidade.</li>
<li>Hinchey I e II: antibiótico e drenagem percutânea; III e IV: cirurgia (ressecção, Hartmann se instável).</li>
<li>Colonoscopia após o episódio; cirurgia eletiva individualizada; fibras previnem.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o corticoide aumenta o risco de perfuração na diverticulite? <details><summary>Resposta</summary>Porque enfraquece a resposta inflamatória local que contém a microperfuração e mascara os sinais, atrasando o diagnóstico.</details></li>
<li>Qual é a conduta na diverticulite Hinchey II com abscesso pélvico de 5 cm? <details><summary>Resposta</summary>Antibiótico venoso e drenagem percutânea guiada por imagem.</details></li>
</ol>
`,
"unesp2026#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a luxação do joelho como lesão de alto risco para a artéria poplítea.</li>
<li>Escolher o substituto vascular no trauma de membro: veia autóloga, retirada do membro contralateral.</li>
<li>Conhecer os passos da revascularização e a fasciotomia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Luxação do joelho</dt>
<dd>Lesão da artéria poplítea em até um terço dos casos, mesmo quando a luxação reduziu sozinha.</dd>
<dt>Sinais duros de lesão arterial</dt>
<dd>Ausência de pulso, isquemia, sangramento pulsátil, hematoma expansivo, frêmito ou sopro.</dd>
<dt>Veia safena magna contralateral</dt>
<dd>Substituto de escolha: autóloga, resistente à infecção, sem comprometer a drenagem do membro lesado.</dd>
<dt>Fasciotomia</dt>
<dd>Abertura dos quatro compartimentos da perna para prevenir ou tratar a síndrome compartimental após reperfusão.</dd>
</dl>
<h4>O essencial</h4>
<p>A artéria poplítea está fixa acima e abaixo do joelho e, na <strong>luxação</strong>, é tracionada e lesada com frequência; o membro fica com <strong>sinais duros</strong> (sem pulso, frio, pálido, com dor e parestesia) e a janela para salvar a perna é de cerca de <strong>6 horas</strong> de isquemia. Sinais duros indicam exploração cirúrgica direta; sinais moderados ou índice tornozelo-braço abaixo de 0,9 pedem angiotomografia. A fratura ou luxação é reduzida e estabilizada, e a revascularização vem em seguida, com shunt temporário se a ortopedia precisar de tempo.</p>
<p>A lesão da poplítea raramente permite sutura simples ou anastomose término-terminal sem tensão: na maioria é preciso <strong>interposição de enxerto</strong>. O substituto de escolha no trauma é a <strong>veia autóloga</strong>, quase sempre a <strong>safena magna</strong>, porque tem calibre compatível, resiste à infecção no campo contaminado e tem boa perviedade a longo prazo; as próteses sintéticas ficam para quando não há veia, e infectam mais. A regra é retirá-la do <strong>membro contralateral</strong>: o membro lesado pode ter as veias profundas comprometidas pelo trauma ou pela síndrome compartimental, e a safena ipsilateral é uma via de drenagem que não se deve sacrificar; além disso, dissecar a coxa lesada aumenta a morbidade local.</p>
<p>Completam a operação a <strong>fasciotomia</strong> dos quatro compartimentos, liberal quando a isquemia passou de 4 a 6 horas, houve lesão venosa associada, hipotensão ou lesão de partes moles extensa, o reparo das veias maiores quando possível, a anticoagulação intraoperatória e a vigilância da síndrome de reperfusão. A amputação primária se discute pela extensão da lesão de nervo, osso e partes moles, e o escore MESS ajuda sem decidir sozinho.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Joelho luxado que "voltou ao lugar" no local do acidente é o mais perigoso: a poplítea pode estar rota com o joelho aparentemente normal. Palpe os pulsos, meça o índice tornozelo-braço e, na dúvida, angiotomografia. E quando for enxertar, marque a safena da outra perna.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Luxação do joelho: lesão da poplítea em até um terço; janela de 6 horas.</li>
<li>Sinais duros: cirurgia; sinais moderados ou ITB abaixo de 0,9: angiotomografia.</li>
<li>Substituto de escolha: veia safena magna do membro contralateral.</li>
<li>Fasciotomia liberal; reparo venoso; vigiar reperfusão.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que retirar a safena do membro contralateral? <details><summary>Resposta</summary>Porque a safena do membro lesado é via de drenagem que não se sacrifica, as veias profundas podem estar comprometidas e a dissecção na coxa lesada aumenta a morbidade.</details></li>
<li>Quando a fasciotomia é indicada de forma liberal? <details><summary>Resposta</summary>Isquemia acima de 4 a 6 horas, lesão venosa associada, hipotensão ou lesão extensa de partes moles.</details></li>
</ol>
`,
"unesp2026#62": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a bioquímica da lesão de isquemia e reperfusão.</li>
<li>Reconhecer o papel dos radicais livres, dos leucócitos e da lipoperoxidação.</li>
<li>Prever as consequências locais e sistêmicas após a revascularização.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Xantina oxidase</dt>
<dd>Enzima gerada na isquemia que, com o oxigênio da reperfusão, produz superóxido e peróxido de hidrogênio.</dd>
<dt>Radicais livres do oxigênio</dt>
<dd>Superóxido, peróxido e hidroxila, que oxidam lipídios, proteínas e DNA.</dd>
<dt>Lipoperoxidação</dt>
<dd>Oxidação em cadeia dos ácidos graxos das membranas, com perda da integridade celular.</dd>
<dt>Síndrome de reperfusão</dt>
<dd>Hipercalemia, acidose, mioglobinúria, lesão renal e edema após o retorno do fluxo.</dd>
</dl>
<h4>O essencial</h4>
<p>A isquemia prepara o terreno: sem oxigênio, a célula esgota o ATP, acumula hipoxantina (produto da degradação dos nucleotídeos), o cálcio entra e converte a xantina desidrogenase em <strong>xantina oxidase</strong>, e o pH cai. Quando a revascularização devolve o sangue, o <strong>oxigênio</strong> encontra essa maquinaria e a xantina oxidase gera uma explosão de <strong>radicais livres</strong>: superóxido, peróxido de hidrogênio e, na presença de ferro livre, o radical hidroxila, o mais reativo. Por isso o dano se agrava depois que o fluxo volta: é a <strong>lesão de reperfusão</strong>.</p>
<p>Os radicais atacam as <strong>membranas</strong> pela <strong>lipoperoxidação</strong>, uma reação em cadeia nos ácidos graxos poli-insaturados que destrói a barreira celular e a mitocondrial, além de oxidar proteínas e DNA. O endotélio lesado expressa moléculas de adesão e libera quimiocinas; os <strong>leucócitos</strong>, sobretudo neutrófilos, aderem, migram e produzem mais radicais e proteases, obstruem capilares (fenômeno de não refluxo) e amplificam a inflamação, junto do complemento e das plaquetas. O edema celular e intersticial comprime a microcirculação e fecha o ciclo.</p>
<p>No membro, o resultado é <strong>edema, síndrome compartimental e necrose muscular</strong>; no organismo, a <strong>síndrome de reperfusão</strong>: hipercalemia e acidose pelo conteúdo celular liberado, mioglobinúria e lesão renal, arritmias, e lesão pulmonar e de órgãos à distância pelos mediadores inflamatórios. A prevenção passa por revascularizar cedo, fasciotomia liberal, hidratação vigorosa com alcalinização da urina, correção do potássio e monitorização; antioxidantes e pré-condicionamento têm evidência experimental e pouco uso clínico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Depois da revascularização, o pior inimigo do rim e do coração é o que sai do músculo: potássio e mioglobina. Soro, bicarbonato se a urina está ácida, potássio seriado e a perna aberta se os compartimentos endurecem. Um membro que piora após o fluxo voltar é reperfusão, não trombose, até que o Doppler diga o contrário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Isquemia acumula hipoxantina e xantina oxidase; reperfusão traz oxigênio e gera radicais livres.</li>
<li>Radicais oxidam membranas (lipoperoxidação), proteínas e DNA; ferro livre gera hidroxila.</li>
<li>Leucócitos aderem, migram, obstruem e amplificam a inflamação.</li>
<li>Consequências: síndrome compartimental, hipercalemia, acidose, mioglobinúria, lesão renal e pulmonar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o dano aumenta quando o sangue volta ao membro isquêmico? <details><summary>Resposta</summary>Porque o oxigênio reage com a xantina oxidase acumulada na isquemia e gera radicais livres, que lesam membranas e atraem leucócitos.</details></li>
<li>Quais são as consequências sistêmicas da reperfusão? <details><summary>Resposta</summary>Hipercalemia, acidose, mioglobinúria com lesão renal, arritmias e lesão inflamatória à distância.</details></li>
</ol>
`,
"unesp2026#63": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Avaliar os sintomas do trato urinário inferior com o IPSS e o exame inicial.</li>
<li>Aplicar a escada terapêutica da hiperplasia prostática benigna.</li>
<li>Reconhecer as indicações de cirurgia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>IPSS</dt>
<dd>Escore de sintomas prostáticos: 0 a 7 leve, 8 a 19 moderado, 20 a 35 grave.</dd>
<dt>Alfabloqueador</dt>
<dd>Tansulosina, doxazosina, alfuzosina: relaxam o músculo liso do colo e da próstata; alívio em dias.</dd>
<dt>Inibidor da 5-alfa-redutase</dt>
<dd>Finasterida, dutasterida: reduzem o volume da próstata grande em meses e o risco de retenção e cirurgia.</dd>
<dt>Indicações absolutas de cirurgia</dt>
<dd>Retenção refratária, infecções repetidas, hematúria recorrente, cálculos vesicais, insuficiência renal pós-renal.</dd>
</dl>
<h4>O essencial</h4>
<p>A hiperplasia prostática benigna produz sintomas de <strong>esvaziamento</strong> (jato fraco, hesitação, gotejamento, esforço) e de <strong>armazenamento</strong> (frequência, urgência, noctúria). A avaliação inicial é história com <strong>IPSS</strong>, exame físico com toque retal, urina simples, <strong>PSA</strong> (que também estima o volume e afasta o câncer quando o toque é suspeito), creatinina se houver suspeita de obstrução e ultrassonografia com resíduo pós-miccional. O diário miccional identifica a poliúria noturna, que não é próstata.</p>
<p>O tratamento é escalonado. Sintomas <strong>leves</strong> (IPSS até 7) ou sem incômodo: <strong>vigilância</strong> com medidas comportamentais (reduzir líquidos à noite, cafeína e álcool, revisar diuréticos). Sintomas <strong>moderados a graves</strong> que incomodam: <strong>alfabloqueador</strong> como primeira escolha, com resposta em dias e reavaliação em 4 a 6 semanas; os efeitos são hipotensão postural, tontura e ejaculação retrógrada. Se a próstata é <strong>grande</strong> (acima de 30 a 40 g ou PSA acima de 1,5), associa-se o <strong>inibidor da 5-alfa-redutase</strong>, que em 6 meses reduz o volume e, a longo prazo, o risco de retenção e cirurgia; a combinação é a mais eficaz na próstata volumosa. Antimuscarínico ou agonista beta-3 entram para sintomas de armazenamento persistentes com resíduo baixo; a tadalafila diária é opção com disfunção erétil.</p>
<p>A <strong>cirurgia</strong> (ressecção transuretral, enucleação a laser, prostatectomia simples para próstatas muito grandes) é indicada nas <strong>complicações</strong>: retenção urinária refratária, infecções de repetição, hematúria recorrente, cálculo vesical, insuficiência renal por obstrução, e na falha ou intolerância ao tratamento clínico com sintomas que prejudicam a vida. Um homem com IPSS 19, PSA baixo e toque benigno começa pelo alfabloqueador, não pela cirurgia nem pela combinação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de prescrever, olhe o diário miccional e a lista de remédios: noctúria por poliúria noturna ou por diurético à noite não melhora com tansulosina. E avise sobre a tontura ao levantar; a queda do idoso na primeira semana é o efeito adverso que mais desfaz o tratamento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>IPSS, toque, PSA, urina, resíduo pós-miccional, diário miccional.</li>
<li>Leve: vigilância e comportamento; moderado a grave: alfabloqueador primeiro.</li>
<li>Próstata grande: associar inibidor da 5-alfa-redutase.</li>
<li>Cirurgia: retenção refratária, infecções, hematúria, cálculo, insuficiência renal, falha clínica.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro fármaco para sintomas moderados de HPB? <details><summary>Resposta</summary>Um alfabloqueador, com reavaliação em 4 a 6 semanas.</details></li>
<li>Quando associar o inibidor da 5-alfa-redutase? <details><summary>Resposta</summary>Na próstata grande (acima de 30 a 40 g ou PSA acima de 1,5), para reduzir volume, retenção e cirurgia.</details></li>
</ol>
`,
"unesp2026#64": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conduzir a cólica renal: analgesia com anti-inflamatório e imagem com tomografia sem contraste.</li>
<li>Indicar a terapia expulsiva para o cálculo ureteral distal pequeno.</li>
<li>Reconhecer as indicações de intervenção urgente e eletiva.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Terapia médica expulsiva</dt>
<dd>Alfabloqueador (tansulosina) por até 4 semanas para facilitar a passagem de cálculos ureterais de 5 a 10 mm.</dd>
<dt>Tomografia sem contraste</dt>
<dd>Padrão-ouro na cólica renal: localiza, mede e caracteriza o cálculo e mostra hidronefrose.</dd>
<dt>Cálculo obstrutivo infectado</dt>
<dd>Febre com hidronefrose: emergência que exige drenagem (duplo J ou nefrostomia) antes de tratar o cálculo.</dd>
<dt>Ureteroscopia e litotripsia extracorpórea</dt>
<dd>Opções para cálculos que não saem ou não podem esperar.</dd>
</dl>
<h4>O essencial</h4>
<p>A cólica renal é a dor da distensão aguda do sistema coletor por um cálculo que migra. O paciente jovem, com dor lombar intensa irradiada ao flanco e à virilha, hematúria microscópica e sem febre, é o quadro típico. A <strong>tomografia sem contraste</strong> confirma, mede o cálculo, localiza e mostra o grau de hidronefrose; a ultrassonografia é a opção na gestante e para seguimento. O laboratório inclui urina, creatinina e, se houver febre, hemograma e urocultura.</p>
<p>O tratamento começa pela <strong>analgesia</strong>: <strong>anti-inflamatório não esteroide</strong> (diclofenaco, cetorolaco, ibuprofeno) é a primeira escolha, mais eficaz que o opioide e com menos náusea, porque reduz a pressão intrapélvica e o edema ureteral; opioide como resgate; antiespasmódico tem pouco valor. Hidratação forçada não ajuda a expelir.</p>
<p>A chance de eliminação espontânea depende do tamanho e da posição: cálculos <strong>até 5 mm</strong> saem em mais de 80% dos casos, sobretudo no <strong>ureter distal</strong>; de 5 a 10 mm, em cerca de metade; acima de 10 mm, raramente. Para o cálculo ureteral <strong>até 10 mm</strong>, com dor controlada, sem infecção, sem insuficiência renal e com rim contralateral normal, indica-se a <strong>terapia expulsiva</strong>: <strong>alfabloqueador</strong> (tansulosina) por até 4 semanas, com maior benefício nos cálculos distais de 5 a 10 mm, mais analgesia e filtragem da urina, com imagem de controle. A <strong>intervenção</strong> (ureteroscopia com laser, litotripsia extracorpórea) entra na dor refratária, no cálculo que não migra em 4 a 6 semanas, nos maiores que 10 mm, na obstrução persistente e no rim único; a <strong>obstrução com febre</strong> é emergência de drenagem por duplo J ou nefrostomia, com antibiótico, antes de qualquer tratamento do cálculo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cálculo distal de 5 mm sem hidronefrose e sem febre vai para casa com anti-inflamatório, tansulosina e a orientação de voltar se tiver febre ou dor que não cede. Se voltar febril com o rim dilatado, o tratamento é o duplo J hoje e a ureteroscopia depois; ureteroscopar um sistema infectado é o erro que leva à sepse.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tomografia sem contraste; anti-inflamatório é a analgesia de primeira linha.</li>
<li>Até 5 mm: sai na maioria; até 10 mm distal: terapia expulsiva com alfabloqueador por até 4 semanas.</li>
<li>Intervenção: dor refratária, sem migração em 4 a 6 semanas, acima de 10 mm, rim único.</li>
<li>Febre com obstrução: drenar (duplo J ou nefrostomia) e antibiótico antes do cálculo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a conduta no cálculo ureteral distal de 5 mm sem complicações? <details><summary>Resposta</summary>Analgesia com anti-inflamatório e terapia expulsiva com alfabloqueador, com controle por imagem.</details></li>
<li>O que fazer diante de cálculo obstrutivo com febre? <details><summary>Resposta</summary>Drenar de urgência com duplo J ou nefrostomia e iniciar antibiótico; o cálculo se trata depois.</details></li>
</ol>
`,
"unesp2026#65": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais de lesão uretral no trauma pélvico e perineal.</li>
<li>Aplicar a regra: uretrografia retrógrada antes de qualquer sondagem.</li>
<li>Conduzir a derivação urinária e o tratamento da lesão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sinais de lesão uretral</dt>
<dd>Sangue no meato, hematoma perineal em borboleta, incapacidade de urinar, próstata alta ou não palpável.</dd>
<dt>Uretrocistografia retrógrada</dt>
<dd>Contraste injetado pelo meato com radiografia oblíqua; mostra extravasamento e o nível da lesão.</dd>
<dt>Cistostomia suprapúbica</dt>
<dd>Derivação da urina pela punção da bexiga, sem passar pela uretra lesada.</dd>
<dt>Lesão de uretra anterior e posterior</dt>
<dd>Anterior (bulbar) no trauma perineal em queda a cavaleiro; posterior (membranosa) na fratura de pelve.</dd>
</dl>
<h4>O essencial</h4>
<p>A uretra masculina se lesa de dois modos: a <strong>anterior</strong>, sobretudo bulbar, no <strong>trauma perineal direto</strong> (queda a cavaleiro, guidão de moto), com hematoma perineal e escrotal em <strong>borboleta</strong> limitado pela fáscia de Colles; a <strong>posterior</strong>, membranosa, na <strong>fratura de pelve</strong>, por cisalhamento do diafragma urogenital, com próstata deslocada para cima ao toque retal. Em ambas, os sinais clássicos são <strong>sangue no meato uretral</strong>, <strong>incapacidade de urinar</strong> com bexiga palpável e o hematoma; qualquer um deles é suficiente para suspeitar.</p>
<p>A regra que não admite exceção: <strong>diante de sinais de lesão uretral, não se passa sonda vesical</strong>. A sonda às cegas pode converter uma laceração parcial em completa, criar falso trajeto, infectar o hematoma e piorar a estenose futura. O exame é a <strong>uretrocistografia retrógrada</strong>: 20 a 30 mL de contraste injetados pelo meato com o paciente em oblíqua, que mostra a uretra íntegra (então a sonda pode ser passada) ou o <strong>extravasamento</strong>, parcial ou completo, e o seu nível. No paciente instável a uretrografia espera a estabilização, e a urina é derivada.</p>
<p>Confirmada a lesão, a <strong>derivação</strong> é a <strong>cistostomia suprapúbica</strong>, por punção guiada ou aberta. Lesões parciais podem ser tratadas com sonda passada sob visão endoscópica; a lesão posterior completa tem duas opções: realinhamento endoscópico precoce ou cistostomia com uretroplastia tardia em 3 a 6 meses, quando o hematoma se organizou; a anterior completa por trauma fechado também vai para uretroplastia tardia. As sequelas são estenose, incontinência e disfunção erétil, e a lesão de bexiga associada é procurada pela cistografia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Motociclista com sangue no meato e escroto roxo em borboleta: a sonda fica na gaveta. Uretrografia na sala de trauma; se houver extravasamento, punção suprapúbica com a bexiga cheia. Passar a sonda "para monitorar a diurese" é o erro que o urologista vai operar por anos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Anterior: trauma perineal, hematoma em borboleta; posterior: fratura de pelve, próstata alta.</li>
<li>Sangue no meato, retenção, hematoma: nunca sondar antes da uretrografia retrógrada.</li>
<li>Extravasamento: cistostomia suprapúbica; parcial pode receber sonda sob visão.</li>
<li>Completa: realinhamento precoce ou uretroplastia tardia; sequelas: estenose, incontinência, disfunção erétil.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais contraindicam a sondagem vesical no trauma? <details><summary>Resposta</summary>Sangue no meato, hematoma perineal, incapacidade de urinar e próstata alta ao toque.</details></li>
<li>Como se deriva a urina na lesão uretral confirmada? <details><summary>Resposta</summary>Por cistostomia suprapúbica.</details></li>
</ol>
`,
"unesp2026#66": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais ultrassonográficos de malignidade do nódulo de tireoide.</li>
<li>Somar os pontos do ACR TI-RADS e aplicar o limiar de tamanho para a punção.</li>
<li>Conhecer a sequência: TSH, ultrassonografia, punção com Bethesda.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>ACR TI-RADS</dt>
<dd>Pontuação por composição, ecogenicidade, forma, margens e focos ecogênicos; categorias 1 a 5.</dd>
<dt>Mais alto que largo</dt>
<dd>Diâmetro anteroposterior maior que o transversal no corte axial: crescimento que atravessa os planos, sinal de malignidade.</dd>
<dt>Microcalcificações</dt>
<dd>Focos ecogênicos puntiformes sem sombra, típicos do carcinoma papilífero.</dd>
<dt>Sistema Bethesda</dt>
<dd>Classificação citológica da punção em seis categorias, com risco de malignidade e conduta.</dd>
</dl>
<h4>O essencial</h4>
<p>Nódulos de tireoide são achados comuns e a maioria é benigna; a tarefa é selecionar quem punciona. A avaliação começa com <strong>TSH</strong>: se suprimido, cintilografia, porque o nódulo quente quase nunca é maligno e não se punciona; se normal ou alto, a <strong>ultrassonografia</strong> decide pelo <strong>ACR TI-RADS</strong>, que soma pontos em cinco categorias: <strong>composição</strong> (cístico 0, espongiforme 0, misto 1, <strong>sólido 2</strong>), <strong>ecogenicidade</strong> (anecoico 0, hiper ou isoecoico 1, <strong>hipoecoico 2</strong>, muito hipoecoico 3), <strong>forma</strong> (mais largo que alto 0, <strong>mais alto que largo 3</strong>), <strong>margens</strong> (lisas ou mal definidas 0, lobuladas ou <strong>irregulares 2</strong>, extensão extratireoidiana 3) e <strong>focos ecogênicos</strong> (nenhum ou cauda de cometa 0, macrocalcificações 1, periféricas 2, <strong>puntiformes 3</strong>).</p>
<p>A soma define a categoria: 0 pontos TR1 (benigno), 2 TR2 (não suspeito), 3 TR3 (levemente suspeito), 4 a 6 TR4 (moderadamente suspeito) e <strong>7 ou mais TR5 (altamente suspeito)</strong>. O <strong>tamanho</strong> decide a punção: TR3 punciona com 2,5 cm ou mais (seguimento a partir de 1,5), TR4 com 1,5 cm ou mais (seguimento a partir de 1,0) e <strong>TR5 com 1,0 cm ou mais</strong> (seguimento a partir de 0,5). Um nódulo sólido (2), hipoecoico (2), mais alto que largo (3), de margens irregulares (2) e com microcalcificações (3) soma 12 pontos: TR5, e com 2,0 cm é puncionado.</p>
<p>A <strong>punção aspirativa por agulha fina</strong> guiada por ultrassom é classificada por <strong>Bethesda</strong>: I não diagnóstico (repetir), II benigno (seguimento), III e IV indeterminados (repetir, teste molecular ou lobectomia), V suspeito e VI maligno (cirurgia). Linfonodos cervicais suspeitos são puncionados também. O carcinoma papilífero, o mais comum, é o que mais reúne esses sinais e tem excelente prognóstico.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ao ler o laudo, some os pontos você mesmo: sólido, hipoecoico, mais alto que largo, irregular e com pontos brilhantes passam de 7 antes de chegar às margens. Confira o TSH antes de puncionar e peça ao radiologista para olhar os linfonodos laterais no mesmo exame.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>TSH primeiro: suprimido, cintilografia; normal, ultrassonografia com TI-RADS.</li>
<li>Pontos: sólido 2, hipoecoico 2, mais alto que largo 3, irregular 2, microcalcificações 3.</li>
<li>7 ou mais: TR5, punção a partir de 1,0 cm; TR4 a partir de 1,5; TR3 a partir de 2,5.</li>
<li>Punção classificada por Bethesda; V e VI vão à cirurgia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quantos pontos soma um nódulo sólido, hipoecoico, mais alto que largo, irregular e com focos puntiformes? <details><summary>Resposta</summary>12 pontos: TI-RADS 5, altamente suspeito.</details></li>
<li>A partir de que tamanho um TR5 é puncionado? <details><summary>Resposta</summary>1,0 cm; entre 0,5 e 1,0 cm faz-se seguimento.</details></li>
</ol>
`,
"unesp2026#67": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o carcinoma de orofaringe associado ao HPV pelo fenótipo do paciente.</li>
<li>Diferenciar os fatores de risco e os sítios: HPV na orofaringe, tabaco e álcool na boca e laringe, EBV na nasofaringe.</li>
<li>Conhecer as implicações no estadiamento, no prognóstico e na prevenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>HPV 16</dt>
<dd>Tipo oncogênico responsável pela maioria dos carcinomas de orofaringe HPV-positivos.</dd>
<dt>p16</dt>
<dd>Marcador imuno-histoquímico substituto da infecção por HPV no tumor de orofaringe.</dd>
<dt>Orofaringe</dt>
<dd>Amígdalas, base da língua, palato mole e parede posterior; sítio do câncer por HPV.</dd>
<dt>Vírus Epstein-Barr</dt>
<dd>Associado ao carcinoma de nasofaringe, sobretudo o indiferenciado.</dd>
</dl>
<h4>O essencial</h4>
<p>O câncer de cabeça e pescoço tem duas epidemias. A clássica, do <strong>tabaco e do álcool</strong>, acomete homens mais velhos, com tumores de cavidade oral, laringe e hipofaringe, muitas vezes precedidos de leucoplasia e eritroplasia. A nova, do <strong>HPV</strong>, sobretudo o tipo 16, acomete <strong>adultos mais jovens, não fumantes e não etilistas</strong>, com tumores da <strong>orofaringe</strong>: <strong>amígdala palatina</strong> e base da língua, onde o epitélio das criptas é vulnerável ao vírus transmitido por sexo oral. A apresentação típica é uma lesão exofítica na amígdala ou uma massa cervical cística (metástase linfonodal) com tumor primário pequeno, em homem de 35 a 55 anos.</p>
<p>A confirmação do HPV se faz pela <strong>imuno-histoquímica para p16</strong>, com ou sem detecção do DNA viral; o resultado muda o <strong>estadiamento</strong> (a 8ª edição do TNM tem uma classificação própria para o carcinoma de orofaringe p16-positivo) e o <strong>prognóstico</strong>, muito melhor do que o do tumor por tabaco no mesmo estádio, com resposta maior à radioquimioterapia e menos segundos tumores. O tratamento é cirurgia (transoral robótica em selecionados) ou radioterapia com quimioterapia, e a desintensificação está em estudo.</p>
<p>O mapa dos vírus e sítios ajuda a não confundir: <strong>HPV na orofaringe</strong>; <strong>EBV na nasofaringe</strong>, com massa cervical alta, obstrução nasal, otite serosa unilateral e epistaxe, comum no sul da China e na África; herpes-vírus não causam esse câncer; e o HPV não é o fator dominante na cavidade oral nem na laringe. A prevenção é a <strong>vacina contra o HPV</strong>, que o PNI oferece a meninos e meninas de 9 a 14 anos e a grupos especiais, e o exame da orofaringe em toda massa cervical.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem que não fuma nem bebe, com odinofagia de meses e amígdala assimétrica exofítica, tem carcinoma por HPV até prova em contrário: biópsia, p16, e o pescoço examinado com atenção. Explique que o prognóstico é melhor que o do fumante e que o parceiro não precisa ser "testado".</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Orofaringe (amígdala, base da língua) em jovem sem tabaco e álcool: HPV 16.</li>
<li>p16 confirma; estadiamento e prognóstico próprios, mais favoráveis.</li>
<li>Tabaco e álcool: boca, laringe, hipofaringe; EBV: nasofaringe.</li>
<li>Prevenção: vacina contra o HPV; massa cervical cística leva a examinar a orofaringe.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o principal fator de risco do carcinoma de amígdala em jovem não fumante? <details><summary>Resposta</summary>A infecção por papilomavírus humano, sobretudo o tipo 16.</details></li>
<li>Que vírus se associa ao carcinoma de nasofaringe? <details><summary>Resposta</summary>O vírus Epstein-Barr.</details></li>
</ol>
`,
"unesp2026#69": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as complicações mecânicas do infarto que exigem cirurgia de urgência.</li>
<li>Reconhecer cada uma pela clínica e pelo ecocardiograma.</li>
<li>Conduzir a estabilização até a sala cirúrgica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Comunicação interventricular pós-infarto</dt>
<dd>Rotura do septo, com sopro holossistólico novo, frêmito e choque; mais comum no infarto anterior.</dd>
<dt>Insuficiência mitral aguda</dt>
<dd>Rotura ou disfunção do músculo papilar, sobretudo o posteromedial, no infarto inferior; edema agudo e choque.</dd>
<dt>Rotura de parede livre</dt>
<dd>Tamponamento e dissociação eletromecânica; a mais letal; pseudoaneurisma quando contida.</dd>
<dt>Balão intra-aórtico</dt>
<dd>Suporte circulatório temporário que reduz a pós-carga e o shunt enquanto se prepara a cirurgia.</dd>
</dl>
<h4>O essencial</h4>
<p>Depois do infarto, a necrose amolece a parede entre o 2º e o 7º dia, e a parede pode se romper em três lugares. A <strong>rotura do septo interventricular</strong> cria uma comunicação com shunt da esquerda para a direita: <strong>sopro holossistólico novo</strong> na borda esternal esquerda, frêmito, insuficiência biventricular e choque; o ecocardiograma mostra o defeito e o fluxo. A <strong>rotura do músculo papilar</strong>, quase sempre o posteromedial, irrigado só pela coronária direita, produz <strong>insuficiência mitral aguda maciça</strong>: edema agudo de pulmão súbito com sopro que pode ser discreto, no infarto inferior. A <strong>rotura da parede livre</strong> leva a hemopericárdio, <strong>tamponamento</strong> e dissociação eletromecânica, e mata em minutos; quando o pericárdio contém a rotura, forma-se um pseudoaneurisma, que também é indicação de cirurgia pelo risco de rotura.</p>
<p>As três são <strong>complicações mecânicas</strong> e têm em comum o tratamento <strong>cirúrgico de urgência ou emergência</strong>: fechamento da comunicação com remendo, troca ou plastia da valva mitral, e reparo da parede com pericardiocentese de ponte no tamponamento. Enquanto se organiza a cirurgia, o suporte inclui vasodilatador se a pressão permitir (reduz o shunt e a regurgitação), inotrópico, ventilação e <strong>balão intra-aórtico</strong> ou outro suporte mecânico; a mortalidade sem cirurgia é quase total e, com ela, ainda alta, mas é a única chance. O fechamento percutâneo da comunicação é opção em selecionados.</p>
<p>Outras complicações do infarto não entram nessa lista cirúrgica: as arritmias se tratam com fármacos e dispositivos; o choque cardiogênico por disfunção, com revascularização e suporte; a pericardite e a síndrome de Dressler, com anti-inflamatório; o aneurisma verdadeiro do ventrículo, com tratamento clínico e cirurgia eletiva raramente; o trombo mural, com anticoagulante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sopro novo ou edema agudo súbito entre o 2º e o 7º dia de um infarto é ecocardiograma à beira do leito naquele minuto: comunicação interventricular ou papilar roto não esperam a próxima visita. Chame a cirurgia cardíaca com o balão sendo passado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Complicações mecânicas: comunicação interventricular, insuficiência mitral aguda por músculo papilar, rotura de parede livre.</li>
<li>Do 2º ao 7º dia; sopro novo, edema agudo súbito, tamponamento.</li>
<li>Todas cirúrgicas de urgência ou emergência; balão intra-aórtico como ponte.</li>
<li>Arritmias, pericardite, aneurisma e trombo não são cirurgia de urgência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as três complicações mecânicas do infarto que exigem cirurgia? <details><summary>Resposta</summary>Comunicação interventricular, insuficiência mitral aguda por rotura do músculo papilar e rotura da parede livre.</details></li>
<li>Por que o músculo papilar posteromedial rompe mais? <details><summary>Resposta</summary>Porque tem irrigação única, pela coronária direita, e sofre no infarto inferior.</details></li>
</ol>
`,
"unesp2026#76": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir a infecção necrotizante de partes moles do abscesso e da celulite comuns.</li>
<li>Reconhecer a gangrena de Fournier e seus fatores de risco.</li>
<li>Tratar com desbridamento cirúrgico imediato, antibiótico de amplo espectro e suporte.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fasceíte necrotizante</dt>
<dd>Infecção que se propaga pela fáscia com necrose e trombose dos vasos; polimicrobiana no períneo.</dd>
<dt>Gangrena de Fournier</dt>
<dd>Fasceíte necrotizante do períneo e da genitália, a partir de foco anorretal, urogenital ou cutâneo.</dd>
<dt>Dor desproporcional</dt>
<dd>Dor muito maior do que o aspecto da pele sugere; sinal precoce de necrose profunda.</dd>
<dt>Crepitação</dt>
<dd>Gás no subcutâneo produzido por anaeróbios e enterobactérias; sinal tardio e de gravidade.</dd>
</dl>
<h4>O essencial</h4>
<p>Um abscesso perianal comum dói, flutua e melhora com drenagem. A <strong>infecção necrotizante</strong> começa parecida e em horas muda de natureza: a bactéria corre pela <strong>fáscia</strong>, trombosa os vasos perfurantes e mata a pele por cima, enquanto as toxinas produzem <strong>toxemia</strong>. Os sinais que separam as duas são <strong>dor desproporcional</strong> ao aspecto local, <strong>edema tenso</strong> que extrapola a área de eritema, <strong>áreas de necrose</strong> ou bolhas violáceas, <strong>crepitação</strong>, anestesia da pele, secreção fétida "de água de louça" e <strong>sinais sistêmicos</strong>: taquicardia, febre ou hipotermia, hipotensão, confusão, leucocitose ou leucopenia, acidose, creatinina alta. O escore LRINEC (PCR, leucócitos, hemoglobina, sódio, creatinina, glicose) ajuda, mas a clínica manda.</p>
<p>No <strong>períneo</strong>, a forma é a <strong>gangrena de Fournier</strong>: infecção polimicrobiana (enterobactérias, estreptococos, anaeróbios) a partir de abscesso perianal, fístula, infecção urinária, estenose de uretra ou lesão de pele, em <strong>diabéticos</strong>, obesos, etilistas, tabagistas e imunossuprimidos, sobretudo homens. Espalha-se pelas fáscias de Colles, Dartos e Scarpa até a parede abdominal, poupando os testículos, que têm irrigação própria. A tomografia mostra gás e a extensão, mas não deve atrasar a cirurgia.</p>
<p>O tratamento é <strong>desbridamento cirúrgico imediato e amplo</strong> de toda a fáscia e pele desvitalizadas, repetido a cada 24 a 48 horas até não haver necrose, com colostomia ou derivação urinária quando o foco ou a contaminação exigem; <strong>antibiótico de amplo espectro</strong> intravenoso (carbapenêmico ou piperacilina-tazobactam com vancomicina, e clindamicina pelo efeito antitoxina) e <strong>reanimação</strong> da sepse com controle glicêmico. A mortalidade é de 20 a 40%, e cada hora de atraso no desbridamento a aumenta; a reconstrução vem depois, com enxertos e retalhos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Diabético descompensado com "abscesso perianal" e pele escura, crepitação e pressão caindo não vai para a drenagem no ambulatório: vai para o centro cirúrgico com o antibiótico correndo, e o cirurgião abre até encontrar tecido que sangra. A tomografia é útil se não atrasar a incisão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Necrotizante: dor desproporcional, edema tenso, necrose, crepitação, toxemia; abscesso comum não tem isso.</li>
<li>Fournier: períneo e genitália, polimicrobiana, em diabéticos e imunossuprimidos; testículos poupados.</li>
<li>Desbridamento imediato e repetido, antibiótico amplo com clindamicina, reanimação.</li>
<li>Imagem não atrasa a cirurgia; mortalidade sobe a cada hora.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais indicam infecção necrotizante e não abscesso simples? <details><summary>Resposta</summary>Dor desproporcional, edema além do eritema, necrose ou bolhas violáceas, crepitação e toxemia.</details></li>
<li>Qual é o tratamento definitivo da gangrena de Fournier? <details><summary>Resposta</summary>Desbridamento cirúrgico amplo e repetido, com antibiótico de amplo espectro e suporte da sepse.</details></li>
</ol>
`,
"unesp2026#78": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a doença diverticular como a causa mais comum de hemorragia digestiva baixa volumosa no idoso.</li>
<li>Conduzir a hemorragia baixa: reanimação, afastar fonte alta, colonoscopia.</li>
<li>Saber que a maioria para sozinha e quando intervir.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hematoquezia</dt>
<dd>Sangue vivo ou vinhoso pelo reto; fonte baixa na maioria, mas alta em 10 a 15% quando volumosa.</dd>
<dt>Sangramento diverticular</dt>
<dd>Rotura do vaso reto no colo do divertículo; indolor, volumoso, sem inflamação, cede em 75 a 90%.</dd>
<dt>Angiectasia</dt>
<dd>Malformação vascular do cólon direito do idoso; segunda causa, sangramento menor e recorrente.</dd>
<dt>Angiotomografia</dt>
<dd>Localiza o sangramento ativo acima de 0,3 mL/min e orienta a embolização.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia digestiva baixa aguda acomete sobretudo idosos, e a <strong>doença diverticular</strong> é a causa mais comum do sangramento <strong>volumoso</strong>: a artéria reta no colo do divertículo se rompe por trauma da parede fina, sem inflamação, e produz <strong>hematoquezia indolor</strong>, muitas vezes de grande volume, com instabilidade e necessidade de transfusão. Anti-inflamatórios, ácido acetilsalicílico e anticoagulantes aumentam o risco. As outras causas: angiectasias (idosos, sangramento menor e recorrente), colite isquêmica (dor e diarreia sanguinolenta), neoplasia e pólipos, doença inflamatória, hemorroidas e, no jovem, o divertículo de Meckel.</p>
<p>O manejo começa pela <strong>reanimação</strong> e pela estratificação; um sangramento volumoso com instabilidade exige <strong>afastar a fonte alta</strong> (10 a 15% das hematoquezias maciças vêm de úlcera ou varizes): sonda nasogástrica com aspirado sem sangue ajuda, e a endoscopia alta é feita se houver dúvida. A <strong>colonoscopia</strong> após preparo, nas primeiras 24 horas, é o exame de escolha: identifica a fonte, permite hemostasia (clipe, injeção, ligadura) e mostra o divertículo com estigma. No instável em que a colonoscopia não é possível, a <strong>angiotomografia</strong> localiza e a <strong>angioembolização</strong> trata.</p>
<p>O sangramento diverticular <strong>cessa espontaneamente em 75 a 90%</strong> dos casos, e a conduta inicial é <strong>suporte clínico</strong>: transfusão com meta de hemoglobina de 7 a 8, suspensão de anticoagulantes e anti-inflamatórios quando possível, observação. A recorrência é de 25 a 40%. A cirurgia (colectomia segmentar da fonte localizada ou subtotal quando não se localiza) fica para o sangramento persistente com transfusão maciça (mais de 6 unidades), instabilidade refratária ou falha da endoscopia e da embolização. Toque retal normal e fezes formadas sem esforço afastam a origem anorretal e reforçam o cólon como fonte.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idosa com sangue vinhoso em quantidade, sem dor, com toque retal limpo, é diverticular até a colonoscopia dizer o contrário. Transfunda com meta baixa, tire a aspirina se der, prepare o cólon e espere: a maioria para antes do exame. Não se opera na primeira noite.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hemorragia baixa volumosa no idoso: doença diverticular; indolor, sem inflamação.</li>
<li>Reanimar; afastar fonte alta se maciça; colonoscopia em 24 horas com preparo.</li>
<li>Instável sem colonoscopia: angiotomografia e embolização.</li>
<li>Cessa sozinho em 75 a 90%: suporte; cirurgia só na persistência ou falha das outras vias.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a causa mais comum de hemorragia digestiva baixa volumosa no idoso? <details><summary>Resposta</summary>A doença diverticular dos cólons.</details></li>
<li>Qual é a conduta inicial no sangramento diverticular? <details><summary>Resposta</summary>Suporte clínico com reanimação e transfusão conforme a meta, suspensão de antiagregantes e anticoagulantes quando possível, e colonoscopia após preparo.</details></li>
</ol>
`,
"unesp2026#80": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar a fisiologia do ferimento torácico aspirativo e do curativo de três pontas.</li>
<li>Saber quando o curativo pode ser fechado nas quatro pontas.</li>
<li>Conhecer os sítios de descompressão por agulha e de drenagem segundo o ATLS.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ferimento torácico aspirativo</dt>
<dd>Abertura na parede maior que dois terços do diâmetro da traqueia; o ar entra por ela na inspiração.</dd>
<dt>Curativo de três pontas</dt>
<dd>Oclusivo fixado em três lados: válvula que impede a entrada de ar e deixa sair.</dd>
<dt>Dreno torácico</dt>
<dd>Tubo no 5º espaço intercostal, linha axilar anterior a média, em selo d'água.</dd>
<dt>Pneumotórax hipertensivo iatrogênico</dt>
<dd>Consequência de ocluir totalmente o ferimento sem dreno: o ar do pulmão lesado não escapa.</dd>
</dl>
<h4>O essencial</h4>
<p>Quando a parede torácica tem um orifício grande, o ar prefere entrar por ele a passar pela traqueia: a cada inspiração o pulmão do lado colapsa e o do outro ventila mal. É o <strong>pneumotórax aberto</strong>, ou ferimento aspirativo, reconhecido pelo ruído de sucção e pela dessaturação. O tratamento imediato do ATLS é o <strong>curativo oclusivo fixado em três lados</strong>: na inspiração a pressão negativa cola o curativo e fecha o orifício; na expiração o lado livre se abre e deixa o ar sair. É uma válvula improvisada que evita converter o pneumotórax aberto em <strong>hipertensivo</strong>, o que aconteceria se o curativo fosse fechado nos quatro lados sem outra via de escape, porque o pulmão lesado continua a vazar ar para a pleura.</p>
<p>O curativo de três pontas é ponte. O tratamento definitivo é a <strong>drenagem torácica</strong> em selo d'água, por incisão separada do ferimento, e o fechamento cirúrgico da parede. <strong>Com o tórax drenado</strong>, o ar da pleura tem por onde sair, e o curativo pode então ser <strong>oclusivo fechado nos quatro lados</strong>; sem dreno, nunca. Se o paciente piora após o curativo, a primeira medida é descolar o curativo para liberar o ar.</p>
<p>Os sítios do ATLS: <strong>descompressão por agulha</strong> do pneumotórax hipertensivo no <strong>5º espaço intercostal, linha axilar anterior</strong> no adulto (o 2º espaço, linha hemiclavicular, é opção, sobretudo na criança), com cateter longo; <strong>dreno torácico</strong> no <strong>5º espaço intercostal, entre as linhas axilar anterior e média</strong>, acima da borda superior da costela inferior, direcionado para cima e para trás, conectado ao selo d'água e confirmado por radiografia. A toracotomia fica para drenagem inicial acima de 1.500 mL ou 200 mL por hora por 2 a 4 horas, e para o escape aéreo maciço com lesão de via aérea.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ferimento que "chupa" ar: plástico estéril colado em três lados na hora, oxigênio, e o dreno no 5º espaço logo depois, longe do buraco. Só depois do dreno o curativo vira quatro lados. Se a saturação cair após o curativo, solte um lado antes de pensar em qualquer outra coisa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ferimento aspirativo: ar entra pela parede; curativo oclusivo em três lados como válvula.</li>
<li>Quatro lados só com o tórax drenado; sem dreno, converte em hipertensivo.</li>
<li>Agulha: 5º espaço, axilar anterior (ou 2º hemiclavicular); dreno: 5º espaço, axilar anterior a média.</li>
<li>Definitivo: dreno em selo d'água e fechamento cirúrgico da parede.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o curativo do ferimento aspirativo é fixado em três lados? <details><summary>Resposta</summary>Para funcionar como válvula: impede a entrada de ar na inspiração e deixa sair na expiração, evitando o pneumotórax hipertensivo.</details></li>
<li>Quando o curativo pode ser fechado nos quatro lados? <details><summary>Resposta</summary>Depois que o tórax está drenado, porque o ar da pleura passa a ter via de escape pelo dreno.</details></li>
</ol>
`,
"einstein2026#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a diverticulite aguda pela clínica e confirmá-la por tomografia antes de tratar.</li>
<li>Classificar em não complicada e complicada e escolher o tratamento.</li>
<li>Saber por que a colonoscopia espera a fase aguda.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Diverticulite aguda</dt>
<dd>Inflamação e microperfuração de um divertículo, com dor no quadrante inferior esquerdo, febre e leucocitose.</dd>
<dt>Tomografia com contraste</dt>
<dd>Exame de escolha: confirma, gradua (Hinchey) e afasta abscesso, perfuração e outras causas.</dd>
<dt>Não complicada</dt>
<dd>Espessamento e densificação da gordura sem abscesso, perfuração, fístula ou obstrução.</dd>
<dt>Colonoscopia tardia</dt>
<dd>Feita 6 a 8 semanas após o episódio para afastar neoplasia; contraindicada na fase aguda pelo risco de perfuração.</dd>
</dl>
<h4>O essencial</h4>
<p>Dor no abdome inferior esquerdo de dias, febre baixa, leucocitose e, ao exame, dor localizada com ou sem massa palpável, em pessoa acima de 50 anos, é diverticulite até prova em contrário. Mas o diagnóstico clínico erra em um quarto dos casos, e o tratamento depende do que há dentro do abdome: por isso a <strong>tomografia com contraste</strong> vem <strong>antes de tratar</strong>. Ela confirma a inflamação pericólica, <strong>gradua</strong> (Hinchey I abscesso pericólico, II pélvico ou à distância, III peritonite purulenta, IV fecal), mostra ar extraluminal, fístula e obstrução, e afasta apendicite, câncer perfurado, doença inflamatória e doença ginecológica, que se tratam de outra forma. Enquanto se aguarda a imagem, <strong>jejum</strong>, hidratação e <strong>sintomáticos</strong>; o antibiótico é decidido pelo resultado.</p>
<p>Diverticulite <strong>não complicada</strong> em paciente imunocompetente, sem comorbidades graves e sem toxemia pode ser tratada <strong>ambulatorialmente</strong>, com dieta líquida e analgesia; o antibiótico deixou de ser obrigatório nesses casos, mas se mantém em imunossuprimidos, gestantes, sepse e comorbidades. <strong>Complicada</strong>: internação, antibiótico venoso, drenagem percutânea de abscessos acima de 3 a 4 cm; peritonite exige cirurgia (ressecção com anastomose ou Hartmann conforme a estabilidade e a contaminação).</p>
<p>A <strong>colonoscopia é contraindicada na fase aguda</strong>: a insuflação e o aparelho podem perfurar o segmento inflamado. Ela é feita <strong>6 a 8 semanas depois</strong>, em quem não fez colonoscopia recente, para afastar um câncer que a tomografia pode confundir com diverticulite. Em paciente com história de câncer de mama e sem alteração do hábito, a colonoscopia tardia é ainda mais importante, mas nunca agora.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Não prescreva antibiótico "para diverticulite" com base no exame físico: peça a tomografia com contraste, deixe em jejum com analgesia e decida com a imagem. E anote na alta: colonoscopia em 6 a 8 semanas. É nessa consulta que se acha o tumor escondido atrás do divertículo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Clínica sugere; tomografia com contraste confirma, gradua e afasta diferenciais antes do tratamento.</li>
<li>Não complicada: ambulatorial, dieta líquida, analgesia; antibiótico seletivo.</li>
<li>Complicada: internação, antibiótico venoso, drenagem percutânea; peritonite: cirurgia.</li>
<li>Colonoscopia só 6 a 8 semanas depois; na fase aguda perfura.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a tomografia precede o antibiótico na suspeita de diverticulite? <details><summary>Resposta</summary>Porque confirma o diagnóstico, gradua a gravidade e afasta apendicite, câncer perfurado e doença ginecológica, que mudam o tratamento.</details></li>
<li>Quando fazer a colonoscopia? <details><summary>Resposta</summary>De 6 a 8 semanas após o episódio, para afastar neoplasia; nunca na fase aguda.</details></li>
</ol>
`,
"einstein2026#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais de alarme da disfagia.</li>
<li>Indicar a endoscopia digestiva alta como primeiro exame na disfagia com alarme.</li>
<li>Diferenciar disfagia mecânica de motora e conhecer os exames seguintes.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Disfagia progressiva</dt>
<dd>Primeiro para sólidos, depois para pastosos e líquidos: padrão da obstrução mecânica que cresce.</dd>
<dt>Sinais de alarme</dt>
<dd>Idade acima de 50, perda de peso, anemia, sangramento, tabagismo e etilismo, história curta e progressiva.</dd>
<dt>Carcinoma espinocelular de esôfago</dt>
<dd>Tumor do terço médio associado a tabaco e álcool, comum no Brasil; o adenocarcinoma segue o Barrett.</dd>
<dt>Acalasia</dt>
<dd>Disfagia para sólidos e líquidos desde o início, regurgitação, esofagograma em bico de pássaro e manometria com aperistalse.</dd>
</dl>
<h4>O essencial</h4>
<p>A disfagia esofágica tem dois padrões. A <strong>mecânica</strong> (estenose, tumor, anel) começa com <strong>sólidos</strong> e progride para pastosos e líquidos à medida que a luz se estreita; a <strong>motora</strong> (acalasia, espasmo, esclerodermia) é para <strong>sólidos e líquidos desde o início</strong>, intermitente, com regurgitação. Uma disfagia de meses que começou com sólidos e agora atinge líquidos, em homem de 69 anos, tabagista pesado, com perda de 5 kg, reúne o padrão mecânico e vários <strong>sinais de alarme</strong>: idade, emagrecimento, tabagismo, progressão rápida.</p>
<p>Com alarme, o primeiro exame é a <strong>endoscopia digestiva alta</strong>, porque vê a mucosa, biopsia a lesão e dilata ou coloca prótese quando preciso. O carcinoma espinocelular do terço médio, ligado ao tabaco e ao álcool e frequente no Nordeste e no Sul, e o adenocarcinoma do terço distal, que surge do esôfago de Barrett, são os diagnósticos a afastar; a estenose péptica e o anel de Schatzki são as causas benignas. Nenhum diagnóstico funcional (acalasia, espasmo) pode ser feito antes de excluir a obstrução mecânica, porque o tumor da cárdia imita a acalasia (pseudoacalasia).</p>
<p>Se a endoscopia é normal ou mostra esôfago dilatado com resíduos e cárdia que se abre com pressão, seguem-se o <strong>esofagograma baritado</strong> (afilamento em bico de pássaro na acalasia) e a <strong>manometria de alta resolução</strong>, que define os subtipos de acalasia e os outros distúrbios motores. A tomografia estadia o tumor confirmado. Na atenção primária, a conduta certa é o pedido da endoscopia com prioridade, sem tentar tratamento empírico com inibidor de bomba de prótons ou procinético diante desse quadro.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Disfagia que "desce" de sólidos para líquidos em quatro meses, com cinco quilos a menos, em fumante de 50 anos-maço, não é refluxo nem "nervoso": é endoscopia com urgência. Anote na guia os sinais de alarme; eles encurtam a fila.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mecânica: sólidos depois líquidos, progressiva; motora: sólidos e líquidos desde o início.</li>
<li>Alarme: idade, perda de peso, anemia, tabaco e álcool, progressão rápida.</li>
<li>Com alarme, endoscopia primeiro; afastar carcinoma espinocelular e adenocarcinoma.</li>
<li>Endoscopia normal: esofagograma e manometria para acalasia e distúrbios motores.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o primeiro exame na disfagia progressiva com emagrecimento? <details><summary>Resposta</summary>A endoscopia digestiva alta, para afastar obstrução mecânica e neoplasia com biópsia.</details></li>
<li>Por que não diagnosticar acalasia sem endoscopia? <details><summary>Resposta</summary>Porque o tumor da cárdia imita a acalasia (pseudoacalasia), e a obstrução mecânica precisa ser excluída antes.</details></li>
</ol>
`,
"einstein2026#22": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a infecção de sítio cirúrgico e reconhecer a forma complicada.</li>
<li>Saber que tecido necrótico exige desbridamento, não só antibiótico.</li>
<li>Escolher o antibiótico empírico e os cuidados da ferida aberta.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Infecção de sítio cirúrgico</dt>
<dd>Incisional superficial (pele e subcutâneo), profunda (fáscia e músculo) ou de órgão e espaço, até 30 dias.</dd>
<dt>Desbridamento</dt>
<dd>Remoção cirúrgica de todo o tecido necrótico e purulento até o tecido viável que sangra.</dd>
<dt>Cicatrização por segunda intenção</dt>
<dd>Ferida deixada aberta, com curativos ou pressão negativa, até o fechamento pelo tecido de granulação.</dd>
<dt>Fatores de risco</dt>
<dd>Diabetes descontrolado, obesidade, tabagismo, desnutrição, corticoide, cirurgia longa e contaminada.</dd>
</dl>
<h4>O essencial</h4>
<p>A infecção de sítio cirúrgico aparece em geral entre o 4º e o 7º dia: eritema, calor, dor, edema e secreção na incisão, com ou sem febre. A forma <strong>superficial</strong> sem coleção pode responder à abertura de alguns pontos e a cuidados locais, com antibiótico se houver celulite acima de 5 cm ou sinais sistêmicos. Quando há <strong>exsudato purulento</strong>, <strong>odor fétido</strong>, <strong>necrose</strong> de pele ou de gordura, deiscência ou coleção, a infecção é <strong>complicada</strong>, e o antibiótico sozinho não a resolve: o tecido morto não é perfundido, o antibiótico não chega e as bactérias seguem se multiplicando nele.</p>
<p>A conduta é <strong>abrir a ferida e desbridar</strong> no centro cirúrgico: remover todo o tecido desvitalizado e o pus, lavar, colher cultura do tecido profundo (o swab superficial contamina) e deixar a ferida <strong>aberta</strong> para curativos diários ou terapia por pressão negativa, com fechamento tardio quando a granulação estiver limpa. Na mastectomia, isso inclui verificar a viabilidade dos retalhos de pele e drenar o seroma infectado.</p>
<p>O <strong>antibiótico</strong> é adjuvante e começa <strong>empírico intravenoso</strong>, escolhido pelo local e pelo risco: na ferida com necrose e odor fétido em diabética hospitalizada, cobre-se estafilococo resistente à meticilina (vancomicina), gram-negativos e anaeróbios (piperacilina-tazobactam ou carbapenêmico), com ajuste pela cultura. O <strong>controle glicêmico</strong> (meta abaixo de 180 mg/dL) é parte do tratamento, porque a hiperglicemia paralisa o neutrófilo, e a nutrição também. A prevenção passa por profilaxia no tempo certo, normotermia, glicemia controlada, tricotomia com tosquiador na hora e antissepsia adequada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ferida com cheiro e pele preta não melhora com mais um antibiótico: o que ela precisa é de bisturi até sangrar, cultura do fundo e a glicemia abaixo de 180. Depois disso, o antibiótico de amplo espectro faz sentido e a pressão negativa fecha em semanas o que a sutura fecharia mal.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Superficial sem coleção: abrir pontos e cuidado local; antibiótico se celulite extensa ou sinais sistêmicos.</li>
<li>Pus, necrose, odor, coleção: desbridamento cirúrgico, cultura profunda, ferida aberta.</li>
<li>Antibiótico empírico venoso amplo (vancomicina mais betalactâmico com anaeróbios) ajustado pela cultura.</li>
<li>Controle glicêmico e nutrição fazem parte do tratamento.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o antibiótico sozinho não resolve a ferida com necrose? <details><summary>Resposta</summary>Porque o tecido necrótico não é perfundido e o antibiótico não o alcança; é preciso desbridar.</details></li>
<li>Como se colhe a cultura da infecção de sítio cirúrgico? <details><summary>Resposta</summary>Do tecido ou da secreção profunda durante o desbridamento; o swab superficial reflete contaminação.</details></li>
</ol>
`,
"einstein2026#23": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir o momento da profilaxia antibiótica cirúrgica: até uma hora antes da incisão.</li>
<li>Escolher o fármaco pelo tipo de cirurgia e saber quando repetir a dose.</li>
<li>Distinguir profilaxia de tratamento e evitar o prolongamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Profilaxia cirúrgica</dt>
<dd>Antibiótico dado para que a concentração tecidual esteja no pico na hora da incisão e da contaminação.</dd>
<dt>Cirurgia limpa-contaminada</dt>
<dd>Abre trato respiratório, digestivo, urinário ou genital sob controle; a profilaxia é sempre indicada.</dd>
<dt>Redose intraoperatória</dt>
<dd>Repetição a cada duas meias-vidas do fármaco (cefazolina a cada 4 horas) ou com perda de mais de 1.500 mL.</dd>
<dt>Cefazolina</dt>
<dd>Agente padrão para a maioria das cirurgias; com metronidazol quando há anaeróbios (cólon, íleo).</dd>
</dl>
<h4>O essencial</h4>
<p>A profilaxia antibiótica reduz a infecção de sítio cirúrgico quando o fármaco está no tecido <strong>no momento em que a contaminação acontece</strong>: na incisão e durante a operação. Por isso o único momento correto é <strong>até 60 minutos antes da incisão</strong> (até 120 minutos para vancomicina e fluoroquinolonas, pela infusão lenta), em geral na indução anestésica. Dar na véspera, na enfermaria "na chamada" ou depois da incisão perde o efeito; dar após o fechamento não protege nada e só seleciona resistência.</p>
<p>A indicação depende da <strong>classe da ferida</strong>: nas <strong>limpas</strong> só com prótese ou alto risco; nas <strong>limpas-contaminadas</strong>, sempre; nas <strong>contaminadas</strong>, sempre; nas <strong>infectadas</strong>, o que se faz é tratamento, não profilaxia. A cistectomia com conduto ileal abre o trato urinário e o intestino: limpa-contaminada com flora entérica, e a profilaxia cobre gram-negativos e anaeróbios (cefazolina com metronidazol, cefoxitina ou ampicilina-sulbactam), com dose ajustada ao peso (cefazolina 2 g, 3 g acima de 120 kg).</p>
<p>Durante a operação, a <strong>redose</strong> mantém a concentração: a cada duas meias-vidas (cefazolina a cada 4 horas) ou quando o sangramento passa de 1.500 mL. A profilaxia termina <strong>com o fechamento da pele</strong>; prolongar por 24 horas ou mais não reduz infecção, aumenta resistência e <em>Clostridioides difficile</em>, mesmo com drenos ou cateteres. Se a cirurgia encontra infecção estabelecida, o esquema vira terapêutico com duração própria. Vancomicina entra na colonização conhecida por MRSA ou alergia grave a betalactâmico, associada à cobertura de gram-negativos quando indicada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A pergunta do checklist "profilaxia feita nos últimos 60 minutos?" existe porque o antibiótico que fica na bolsa do carrinho até depois da incisão é o erro mais comum e mais evitável da prevenção de infecção. Na indução, com a dose pelo peso, e de novo às 4 horas se a cirurgia for longa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Momento: até 60 minutos antes da incisão (120 para vancomicina e quinolonas), na indução.</li>
<li>Limpas com prótese, limpas-contaminadas e contaminadas: profilaxia; infectadas: tratamento.</li>
<li>Cefazolina padrão; com metronidazol quando há anaeróbios; dose pelo peso.</li>
<li>Redose a cada duas meias-vidas ou sangramento acima de 1.500 mL; termina no fechamento da pele.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é o momento correto da profilaxia antibiótica? <details><summary>Resposta</summary>Até uma hora antes da incisão, em geral na indução anestésica.</details></li>
<li>Por que não prolongar a profilaxia após a cirurgia? <details><summary>Resposta</summary>Porque não reduz infecção de sítio cirúrgico e aumenta resistência e infecção por C. difficile.</details></li>
</ol>
`,
"einstein2026#24": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o choque hemorrágico compensado pelos sinais precoces.</li>
<li>Iniciar a reanimação com cristaloide aquecido em volume limitado e preparar sangue.</li>
<li>Acionar a cirurgia na chegada do trauma abdominal com FAST positivo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Classes de hemorragia</dt>
<dd>I até 15% da volemia; II 15 a 30% (taquicardia, pressão de pulso estreita); III 30 a 40% (hipotensão); IV acima de 40%.</dd>
<dt>Choque compensado</dt>
<dd>Pressão mantida à custa de taquicardia, vasoconstrição e ansiedade; a queda da pressão é tardia.</dd>
<dt>Reanimação com controle de danos</dt>
<dd>Cristaloide limitado, hemocomponentes cedo em proporção, hipotensão permissiva até o controle cirúrgico.</dd>
<dt>Lactato e déficit de base</dt>
<dd>Marcadores da hipoperfusão que quantificam o choque e guiam a resposta.</dd>
</dl>
<h4>O essencial</h4>
<p>No trauma, choque é hemorrágico até prova em contrário, e a pressão arterial é o último sinal a cair. O ATLS ensina a ler os sinais precoces: <strong>taquicardia</strong>, <strong>pressão de pulso estreita</strong>, pele fria e pálida, enchimento capilar lento, <strong>ansiedade ou confusão</strong>, diurese reduzida. Uma mulher taquicárdica com pressão ainda normal após capotamento em alta velocidade está em <strong>classe II</strong>, com 15 a 30% da volemia perdida, e o abdome com FAST positivo é a fonte provável.</p>
<p>A reanimação inicial é <strong>cristaloide aquecido</strong> em volume limitado, <strong>500 mL a 1 litro</strong> em bolus com reavaliação da resposta (respondedor, transitório, não respondedor), e não os 2 litros de antigamente, porque o excesso de cristaloide dilui os fatores, esfria, acidifica e desfaz o coágulo. Ao mesmo tempo, <strong>tipagem e prova cruzada</strong> com sangue O reservado, <strong>gasometria com lactato</strong> e déficit de base para medir a hipoperfusão, ácido tranexâmico nas primeiras 3 horas, e a ativação do protocolo de transfusão maciça se a resposta for transitória ou ausente, com hemácias, plasma e plaquetas em proporção próxima de 1:1:1. A meta de pressão é modesta (sistólica em torno de 90) até o controle do sangramento, salvo no trauma craniano.</p>
<p>A <strong>cirurgia é acionada na chegada</strong>, não depois da falha da reanimação: o cirurgião avalia o FAST, decide entre tomografia (estável) e laparotomia (instável) e acompanha a resposta ao volume. Esperar para ver se "o soro resolve" no abdome que sangra é perder o tempo em que a laparotomia ainda salva. Os erros clássicos: confiar na pressão normal, dar cristaloide sem limite, atrasar o sangue e chamar a cirurgia só quando o paciente hipotende.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pressão normal com frequência de 120 depois de um capotamento é choque, e a FAST positiva diz onde. Um bolus de 500 mL aquecido, sangue pedido, lactato colhido e o cirurgião ao lado da maca: essa é a sequência dos primeiros cinco minutos, não a tomografia.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sinais precoces: taquicardia, pressão de pulso estreita, pele fria, ansiedade; pressão cai tarde.</li>
<li>Cristaloide aquecido em bolus limitado (500 mL a 1 L) com reavaliação; sangue cedo, 1:1:1 se maciça.</li>
<li>Tipagem, gasometria com lactato, ácido tranexâmico em 3 horas, hipotensão permissiva até o controle.</li>
<li>Cirurgia acionada na chegada com FAST positivo; instável vai à laparotomia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que sinais indicam choque hemorrágico antes da queda da pressão? <details><summary>Resposta</summary>Taquicardia, pressão de pulso estreita, pele fria e pálida, enchimento capilar lento e ansiedade.</details></li>
<li>Quando a cirurgia deve ser acionada no trauma abdominal com FAST positivo? <details><summary>Resposta</summary>Na chegada, durante a reanimação inicial, para decidir entre tomografia e laparotomia conforme a estabilidade.</details></li>
</ol>
`,
"einstein2026#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer os sinais de lesão inalatória na vítima de incêndio em ambiente fechado.</li>
<li>Indicar a intubação precoce antes do edema fechar a via aérea.</li>
<li>Conduzir a reanimação inicial do queimado e a intoxicação por monóxido de carbono.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Lesão inalatória</dt>
<dd>Queimadura térmica da via aérea superior, lesão química das vias inferiores pela fumaça e intoxicação por CO e cianeto.</dd>
<dt>Sinais de lesão inalatória</dt>
<dd>Incêndio em ambiente fechado, queimadura de face, cílios e vibrissas chamuscados, escarro carbonáceo, rouquidão, estridor.</dd>
<dt>Intubação precoce</dt>
<dd>Via aérea definitiva antes que o edema torne a laringoscopia impossível, nas primeiras horas.</dd>
<dt>Carboxiemoglobina</dt>
<dd>Marcador da intoxicação por monóxido de carbono; oximetria de pulso falsamente normal.</dd>
</dl>
<h4>O essencial</h4>
<p>A vítima de incêndio em <strong>ambiente pequeno e fechado</strong>, retirada após 20 minutos, agitada e confusa, tem três problemas ao mesmo tempo: <strong>queimadura térmica da via aérea superior</strong> pelo ar quente, <strong>lesão química das vias inferiores</strong> pelos produtos da combustão e <strong>intoxicação por monóxido de carbono</strong> (e cianeto), que explica a confusão. Os <strong>sinais</strong> que apontam a lesão inalatória são a história do ambiente fechado, <strong>queimaduras de face e pescoço</strong>, <strong>cílios e vibrissas chamuscados</strong>, fuligem na boca e no nariz, <strong>escarro carbonáceo</strong>, rouquidão, tosse, estridor e sibilos.</p>
<p>O edema da via aérea evolui nas primeiras horas, sobretudo com a reanimação volêmica, e a laringoscopia que é fácil na chegada vira impossível depois. Por isso a regra é <strong>intubar cedo</strong>, com tubo de calibre adequado, em quem tem sinais de lesão inalatória, queimadura extensa de face, estridor, rebaixamento ou queimadura de mais de 40% da superfície; oxigênio a 100% por máscara com reservatório enquanto se prepara. A broncoscopia confirma e gradua depois. A oximetria de pulso não vê a carboxiemoglobina; a gasometria com cooximetria mede, e o tratamento do CO é <strong>oxigênio a 100%</strong>, hiperbárico em casos selecionados; a hidroxocobalamina trata o cianeto na suspeita com instabilidade e lactato alto.</p>
<p>Em seguida, o ABCDE do queimado: <strong>reanimação volêmica</strong> pela fórmula de Parkland (2 a 4 mL/kg por % de superfície queimada em 24 horas, metade nas primeiras 8 horas, ajustada pela diurese de 0,5 mL/kg/h), analgesia, prevenção da hipotermia, avaliação da superfície pela regra dos nove, escarotomias nas queimaduras circunferenciais e transferência para centro de queimados. A lesão inalatória, por si, aumenta a necessidade de volume e a mortalidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cílios queimados e voz rouca em quem saiu de um quarto em chamas são indicação de tubo agora, com o paciente ainda falando, e não depois que o estridor aparecer. Peça a cooximetria, mantenha oxigênio a 100% e comece o Parkland pelo relógio da queimadura, não pelo da chegada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ambiente fechado, queimadura de face, cílios e vibrissas chamuscados, escarro carbonáceo, rouquidão: lesão inalatória.</li>
<li>Intubar cedo, antes do edema; oxigênio a 100%; cooximetria para CO.</li>
<li>Parkland 2 a 4 mL/kg por % queimado em 24 horas, metade em 8 horas, guiado pela diurese.</li>
<li>Analgesia, aquecimento, escarotomia se circunferencial, centro de queimados.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a intubação na lesão inalatória deve ser precoce? <details><summary>Resposta</summary>Porque o edema da via aérea progride nas primeiras horas e torna a intubação impossível depois.</details></li>
<li>Por que a oximetria de pulso engana na intoxicação por monóxido de carbono? <details><summary>Resposta</summary>Porque não distingue carboxiemoglobina de oxiemoglobina; é preciso cooximetria na gasometria.</details></li>
</ol>
`,
"einstein2026#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir ressecabilidade anatômica de operabilidade clínica no câncer de pâncreas.</li>
<li>Indicar a paliação biliar endoscópica quando a cirurgia está fora.</li>
<li>Conhecer a avaliação do risco cirúrgico e as opções paliativas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ressecável</dt>
<dd>Tumor sem contato com artérias e com veias livres ou pouco envolvidas; candidato à duodenopancreatectomia.</dd>
<dt>Inoperável</dt>
<dd>Paciente cujo estado clínico não tolera a cirurgia, ainda que o tumor seja ressecável.</dd>
<dt>Drenagem biliar por CPRE</dt>
<dd>Prótese metálica autoexpansível no colédoco, que alivia icterícia, prurido e colangite.</dd>
<dt>Duodenopancreatectomia (Whipple)</dt>
<dd>Única cirurgia curativa para o tumor de cabeça; mortalidade de 2 a 5% em centros de volume, morbidade alta.</dd>
</dl>
<h4>O essencial</h4>
<p>A icterícia indolor com colúria, prurido e emagrecimento no idoso é o quadro clássico do <strong>adenocarcinoma da cabeça do pâncreas</strong>, confirmado por tomografia com protocolo pancreático e, quando preciso, ecoendoscopia com punção. O estadiamento responde a uma pergunta anatômica: o tumor é <strong>ressecável</strong> (sem contato arterial, veia porta e mesentérica livres), <strong>borderline</strong> (contato limitado, candidato a neoadjuvância) ou <strong>irressecável</strong> (envolvimento arterial ou metástase)?</p>
<p>A segunda pergunta é sobre o <strong>paciente</strong>: ele é <strong>operável</strong>? A duodenopancreatectomia dura horas, tem morbidade de 30 a 50% (fístula, gastroparesia, sangramento) e exige reserva cardiopulmonar; a avaliação inclui estado funcional (ECOG), fragilidade, DPOC e sua gravidade, cardiopatia, nutrição e idade biológica. Um homem de 74 anos com DPOC grave, hipertensão e perda de 12 kg pode ter um tumor anatomicamente ressecável e ser <strong>clinicamente inoperável</strong>: a cirurgia teria mortalidade e perda de qualidade de vida maiores que o benefício, que já é limitado pela sobrevida da doença.</p>
<p>Nesse caso a conduta é <strong>paliar a bile</strong>: <strong>CPRE com prótese metálica</strong> no colédoco, que alivia a icterícia, o prurido e o risco de colangite com menos morbidade que a derivação cirúrgica; a drenagem transparietal ou por ecoendoscopia fica para a falha. Somam-se controle da dor (bloqueio do plexo celíaco quando preciso), suporte nutricional com enzimas, prótese duodenal se obstruir, e quimioterapia paliativa se o estado funcional permitir, com cuidados paliativos desde o início. A drenagem pré-operatória de rotina em quem vai operar não é indicada, salvo colangite, bilirrubina muito alta ou neoadjuvância.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Antes de dizer "ressecável, vamos operar", olhe o pulmão e a escala de fragilidade: um Whipple em DPOC grave é uma operação que o tumor não justifica. A prótese biliar pela CPRE devolve semanas sem prurido e sem icterícia, e a conversa sobre o que o paciente quer para o tempo que tem começa ali.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Ressecabilidade é do tumor (vasos); operabilidade é do paciente (reserva, fragilidade, comorbidades).</li>
<li>Ressecável mas inoperável: sem cirurgia; paliar.</li>
<li>Paliação biliar: CPRE com prótese metálica; dor, nutrição, prótese duodenal, quimioterapia se possível.</li>
<li>Drenagem pré-operatória de rotina não é indicada em quem vai operar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que diferencia ressecável de operável? <details><summary>Resposta</summary>Ressecável descreve a anatomia do tumor; operável descreve se o paciente tolera a cirurgia.</details></li>
<li>Qual é a conduta na icterícia obstrutiva do tumor de pâncreas em paciente inoperável? <details><summary>Resposta</summary>Drenagem biliar por CPRE com prótese metálica e cuidados paliativos.</details></li>
</ol>
`,
"einstein2025#16": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diagnosticar a pancreatite aguda pelos critérios clínicos e laboratoriais.</li>
<li>Tratar a fase inicial: hidratação com Ringer lactato, analgesia, antiemético, monitorização.</li>
<li>Saber o que não fazer: antibiótico profilático e tomografia precoce.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios diagnósticos</dt>
<dd>Dois de três: dor típica, lipase ou amilase acima de 3 vezes o normal, imagem compatível.</dd>
<dt>Ringer lactato</dt>
<dd>Cristaloide de escolha; hidratação moderada, guiada por metas, sem excesso.</dd>
<dt>Gravidade (Atlanta)</dt>
<dd>Leve sem falência; moderada com falência transitória ou complicação local; grave com falência persistente.</dd>
<dt>Tomografia tardia</dt>
<dd>Feita após 72 a 96 horas, quando há dúvida ou piora, para ver necrose e coleções.</dd>
</dl>
<h4>O essencial</h4>
<p>A pancreatite aguda é diagnosticada com <strong>dois de três critérios</strong>: dor epigástrica intensa irradiada ao dorso, <strong>lipase ou amilase acima de três vezes</strong> o limite superior (a lipase é mais sensível e específica e permanece alta por mais dias) e imagem compatível. Numa mulher jovem com dias de dor, vômitos e enzimas elevadas, o diagnóstico está feito sem tomografia; a <strong>ultrassonografia</strong> é o exame inicial, para procurar cálculos, a causa mais comum, seguida do álcool.</p>
<p>O tratamento das primeiras horas é <strong>suporte</strong>: <strong>monitorização</strong> de sinais vitais, diurese e laboratório; <strong>jejum</strong> curto, com dieta oral precoce em 24 a 48 horas assim que a dor e os vômitos permitirem (a nutrição enteral precoce reduz infecção); <strong>hidratação com Ringer lactato</strong>, hoje em ritmo moderado (bolus de 10 mL/kg se houver hipovolemia, depois 1,5 mL/kg/h com reavaliação), porque a hidratação agressiva aumentou sobrecarga sem benefício; <strong>analgesia</strong> escalonada (dipirona, opioide se preciso); <strong>antiemético</strong>; e sonda vesical quando é preciso medir a diurese na hipovolemia. A gravidade é estimada pela clínica, pelo hematócrito, pela ureia e pela PCR em 48 horas, e pela falência de órgãos.</p>
<p>O que <strong>não</strong> se faz: <strong>antibiótico profilático</strong>, que não previne infecção da necrose e seleciona fungos e resistentes (antibiótico só na necrose infectada ou colangite); <strong>tomografia precoce</strong>, que subestima a necrose antes de 72 horas e não muda a conduta inicial; sonda nasogástrica de rotina; inibidor de secreção. Na pancreatite biliar, a colangiografia endoscópica urgente é só para colangite ou obstrução persistente, e a colecistectomia se faz na mesma internação nos casos leves.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pancreatite com lipase alta e paciente estável não precisa de tomografia nem de ceftriaxona no primeiro dia: precisa de Ringer no ritmo certo, dor controlada, ultrassonografia procurando pedra e a decisão de alimentar cedo. A tomografia tem hora: quando piora ou no terceiro dia com dúvida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Diagnóstico: dois de três (dor, enzimas acima de 3 vezes, imagem); ultrassonografia inicial para cálculos.</li>
<li>Suporte: monitorização, Ringer lactato moderado por metas, analgesia, antiemético, dieta precoce.</li>
<li>Sem antibiótico profilático; sem tomografia antes de 72 horas.</li>
<li>Biliar leve: colecistectomia na mesma internação; CPRE só com colangite ou obstrução.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os critérios diagnósticos da pancreatite aguda? <details><summary>Resposta</summary>Dois de três: dor típica, lipase ou amilase acima de três vezes o normal e imagem compatível.</details></li>
<li>Por que não usar antibiótico profilático? <details><summary>Resposta</summary>Porque não previne a infecção da necrose e seleciona fungos e bactérias resistentes; só na necrose infectada ou colangite.</details></li>
</ol>
`,
"einstein2025#21": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o pneumotórax hipertensivo pela clínica no politraumatizado.</li>
<li>Descomprimir antes de qualquer exame, depois drenar.</li>
<li>Diferenciar do hemotórax maciço e do tamponamento cardíaco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pneumotórax hipertensivo</dt>
<dd>Ar sob pressão na pleura que colapsa o pulmão, desvia o mediastino e comprime as cavas.</dd>
<dt>Toracocentese descompressiva</dt>
<dd>Cateter longo e calibroso no 5º espaço intercostal, linha axilar anterior; escape de ar confirma.</dd>
<dt>Hemotórax maciço</dt>
<dd>Mais de 1.500 mL na pleura: macicez, sem murmúrio, jugulares colabadas, choque hipovolêmico.</dd>
<dt>Tamponamento cardíaco</dt>
<dd>Tríade de Beck: hipotensão, jugulares túrgidas, bulhas abafadas; pulmões normais.</dd>
</dl>
<h4>O essencial</h4>
<p>O politraumatizado que chega com <strong>dispneia, agitação, hipotensão e taquicardia</strong>, <strong>sem murmúrio</strong> de um lado, com <strong>hipertimpanismo</strong>, <strong>desvio da traqueia</strong> e <strong>jugulares túrgidas</strong>, tem pneumotórax hipertensivo, e a decisão é tomada no B do ATLS, antes de radiografia, FAST ou qualquer outro exame. A fisiologia explica a pressa: cada inspiração bombeia mais ar para a pleura, o mediastino desvia, as cavas dobram e o retorno venoso desaba, num choque obstrutivo que a reposição de volume não corrige.</p>
<p>A conduta é a <strong>toracocentese descompressiva</strong> imediata: cateter de 14 G ou maior, longo, no <strong>5º espaço intercostal, linha axilar anterior</strong> (o 2º espaço, linha hemiclavicular, é a opção clássica e a de escolha na criança), com escape de ar e melhora hemodinâmica que confirmam; se a agulha falha pela parede espessa, a toracostomia digital resolve. A descompressão converte o hipertensivo em aberto, e a <strong>drenagem torácica</strong> em selo d'água no mesmo espaço é o passo seguinte, ainda na sala de trauma. Só então vêm a radiografia e o resto da avaliação.</p>
<p>Os diferenciais do choque com tórax lesado se separam pelo exame: o <strong>hemotórax maciço</strong> também tira o murmúrio, mas o hemitórax é <strong>maciço à percussão</strong> e as <strong>jugulares estão colabadas</strong> pela hipovolemia, e o tratamento é dreno calibroso com reposição de sangue e toracotomia se drenar mais de 1.500 mL; o <strong>tamponamento cardíaco</strong> tem jugulares túrgidas e hipotensão, mas os <strong>pulmões estão normais</strong> e as bulhas abafadas, e o FAST mostra o líquido pericárdico, tratado com pericardiocentese ou toracotomia. Intubar e ventilar com pressão positiva um pneumotórax hipertensivo não descomprimido precipita a parada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Ausculta silenciosa de um lado, percussão de tambor e jugulares cheias em quem hipotende: a agulha entra antes que alguém peça o raio X. Se a percussão for maciça e as jugulares vazias, é sangue, e a resposta é dreno e transfusão. O exame físico decide em 30 segundos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dispneia, hipotensão, sem murmúrio, hipertimpanismo, traqueia desviada, jugulares túrgidas: hipertensivo.</li>
<li>Descompressão por agulha (5º espaço axilar anterior) ou toracostomia digital, depois dreno.</li>
<li>Sem imagem antes; sem ventilação com pressão positiva antes de descomprimir.</li>
<li>Hemotórax maciço: macicez e jugulares colabadas; tamponamento: pulmões normais e bulhas abafadas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a primeira medida no pneumotórax hipertensivo? <details><summary>Resposta</summary>Toracocentese descompressiva imediata com cateter calibroso, seguida de drenagem torácica.</details></li>
<li>Como diferenciar do hemotórax maciço à beira do leito? <details><summary>Resposta</summary>No hemotórax a percussão é maciça e as jugulares estão colabadas; no hipertensivo há hipertimpanismo e jugulares túrgidas.</details></li>
</ol>
`,
"einstein2025#22": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o traumatismo cranioencefálico pelo Glasgow e reconhecer a piora.</li>
<li>Indicar a intubação com Glasgow de 8 ou menos.</li>
<li>Transferir ao centro de trauma com neurocirurgião sem atrasar por exames.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>TCE grave</dt>
<dd>Glasgow de 3 a 8 após a reanimação; exige via aérea definitiva e neurocirurgia disponível.</dd>
<dt>Deterioração neurológica</dt>
<dd>Queda de 2 pontos ou mais no Glasgow, anisocoria ou déficit novo: hematoma em expansão até prova em contrário.</dd>
<dt>Sequência rápida de intubação</dt>
<dd>Pré-oxigenação, indutor e bloqueador neuromuscular com estabilização cervical em linha.</dd>
<dt>Transferência precoce</dt>
<dd>Decisão de transferir tomada assim que se reconhece a necessidade, sem esperar exames que o destino repetirá.</dd>
</dl>
<h4>O essencial</h4>
<p>Motociclista sem capacete que chega com Glasgow que cai para 8 nos primeiros minutos tem <strong>TCE grave</strong> em evolução, e o mecanismo (queda a 50 km/h sem proteção) faz do hematoma extradural ou subdural a causa mais provável. O Glasgow é calculado componente por componente após o ABC e a correção de hipóxia e hipotensão, e o que importa é a <strong>tendência</strong>: a queda de 2 pontos ou mais, a anisocoria e o déficit motor são sinais de lesão expansiva.</p>
<p>Com <strong>Glasgow de 8 ou menos</strong>, a via aérea está em risco (perda de reflexos, hipoventilação, aspiração) e a hipóxia e a hipercapnia agravam a lesão: indica-se <strong>intubação orotraqueal</strong> por sequência rápida, com estabilização manual da coluna, evitando hipotensão na indução, com ventilação para normocapnia (PaCO2 de 35 a 40) e saturação acima de 90%. Hiperventilação só como resgate breve diante de sinais de herniação, junto de salina hipertônica ou manitol. A pressão arterial é mantida (sistólica acima de 100 a 110 no adulto) porque um só episódio de hipotensão dobra a mortalidade.</p>
<p>O hospital que recebe o paciente e não tem neurocirurgião nem tomografia imediata deve <strong>transferir para o centro de trauma</strong> assim que a necessidade é reconhecida, com o paciente intubado, estabilizado e com a coluna protegida. A tomografia é feita se estiver disponível sem atraso e pode ser transmitida; não se retarda a transferência para completar exames que o destino repetirá, nem se espera "para ver se melhora". Durante o transporte, monitorização, cabeceira elevada, sedação e analgesia, glicemia e temperatura controladas, e comunicação prévia com a equipe receptora.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Glasgow 8 em quem chegou com 11 é uma corrida contra um hematoma: tubo agora, pressão mantida, e o telefone do centro de trauma antes da tomografia. O exame que salva esse paciente é a craniotomia no lugar certo, não a imagem no lugar errado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Glasgow após ABC; queda de 2 pontos, anisocoria ou déficit: lesão expansiva.</li>
<li>Glasgow 8 ou menos: intubação por sequência rápida com coluna estabilizada; normocapnia, saturação acima de 90%.</li>
<li>Manter pressão; hiperventilação e osmoterapia só na herniação iminente.</li>
<li>Transferir cedo ao centro com neurocirurgião; exames não atrasam a transferência.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual é a indicação de via aérea definitiva no TCE? <details><summary>Resposta</summary>Glasgow de 8 ou menos, além de incapacidade de proteger a via aérea ou hipoxemia refratária.</details></li>
<li>O que fazer se o hospital não tem neurocirurgião? <details><summary>Resposta</summary>Estabilizar, intubar se indicado e transferir de imediato para o centro de trauma, sem atrasar por exames.</details></li>
</ol>
`,
"einstein2025#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer que a colelitíase na criança pede investigação de hemólise crônica.</li>
<li>Explicar a formação de cálculos pigmentares na anemia falciforme.</li>
<li>Conduzir a colelitíase sintomática no paciente falciforme.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cálculo pigmentar preto</dt>
<dd>Bilirrubinato de cálcio formado pelo excesso de bilirrubina indireta da hemólise crônica.</dd>
<dt>Anemia falciforme</dt>
<dd>Hemólise crônica com colelitíase em até metade dos pacientes até a adolescência.</dd>
<dt>Causas de colelitíase na criança</dt>
<dd>Hemólise (falciforme, esferocitose, talassemia), nutrição parenteral, obesidade, ceftriaxona, doença ileal, fibrose cística.</dd>
<dt>Colecistectomia eletiva no falciforme</dt>
<dd>Feita fora da crise, com hidratação, oxigenação e, em casos selecionados, transfusão pré-operatória.</dd>
</dl>
<h4>O essencial</h4>
<p>Cálculo na vesícula de uma criança de 12 anos não é achado banal: sem obesidade, nutrição parenteral prolongada, uso de ceftriaxona, doença de Crohn ileal ou fibrose cística, a primeira hipótese é <strong>hemólise crônica</strong>. A destruição acelerada de hemácias inunda o fígado de bilirrubina indireta, que é conjugada e excretada em excesso na bile, precipita como bilirrubinato de cálcio e forma <strong>cálculos pigmentares pretos</strong>, múltiplos e pequenos, com vesícula de paredes normais. A <strong>anemia falciforme</strong> é a causa a lembrar no Brasil, seguida da esferocitose hereditária e das talassemias.</p>
<p>A investigação é simples: hemograma com reticulócitos (anemia com reticulocitose), bilirrubina indireta e LDH elevadas, haptoglobina baixa, esfregaço (drepanócitos, esferócitos), <strong>eletroforese de hemoglobina</strong> para a falciforme e teste de fragilidade osmótica ou EMA para a esferocitose. Uma criança de 12 anos com falciforme não diagnosticada é rara onde há triagem neonatal, mas o traço, as formas SC e a esferocitose leve escapam, e a colelitíase pode ser a primeira pista.</p>
<p>No falciforme, a colelitíase é frequente e a <strong>colecistectomia laparoscópica</strong> está indicada quando sintomática, e muitos centros a recomendam mesmo assintomática, para evitar a confusão entre cólica biliar e crise vaso-oclusiva e as complicações (colecistite, coledocolitíase, pancreatite) num paciente que tolera mal a cirurgia de urgência. A operação é <strong>eletiva, fora da crise</strong>, com hidratação, oxigenação, aquecimento, analgesia e, nas cirurgias de médio porte, transfusão pré-operatória para hemoglobina em torno de 10 g/dL, que reduz a síndrome torácica aguda; a colangiorressonância afasta cálculos no colédoco antes. Na esferocitose, a colecistectomia pode ser combinada à esplenectomia quando essa é indicada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Menina de 12 anos com cólica biliar e cálculos múltiplos: antes de marcar a cirurgia, peça reticulócitos, bilirrubinas e a eletroforese de hemoglobina. Operar um falciforme sem saber que ele é falciforme é a receita da síndrome torácica no pós-operatório.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Colelitíase na criança sem causa óbvia: investigar hemólise crônica.</li>
<li>Hemólise gera cálculos pigmentares pretos; falciforme é a principal causa, depois esferocitose e talassemia.</li>
<li>Reticulócitos, bilirrubina indireta, LDH, haptoglobina, esfregaço, eletroforese de hemoglobina.</li>
<li>No falciforme: colecistectomia eletiva fora da crise, com preparo e transfusão em casos selecionados.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a anemia falciforme causa cálculos biliares? <details><summary>Resposta</summary>A hemólise crônica gera excesso de bilirrubina que precipita na bile como cálculos pigmentares pretos.</details></li>
<li>Que cuidados precedem a colecistectomia no falciforme? <details><summary>Resposta</summary>Operar fora da crise, com hidratação, oxigenação, aquecimento, e transfusão pré-operatória em casos selecionados.</details></li>
</ol>
`,
"einstein2025#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a lesão subepitelial gástrica pelo aspecto endoscópico.</li>
<li>Explicar por que a biópsia de superfície resulta em falso negativo.</li>
<li>Conhecer a investigação por ecoendoscopia e as hipóteses principais, com o GIST à frente.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Lesão subepitelial</dt>
<dd>Abaulamento recoberto por mucosa normal, originado da submucosa ou da muscular própria.</dd>
<dt>GIST</dt>
<dd>Tumor estromal gastrointestinal, da muscular própria, com KIT (CD117) e DOG1 positivos; potencial maligno pelo tamanho e mitoses.</dd>
<dt>Ecoendoscopia</dt>
<dd>Define a camada de origem, o tamanho e a ecogenicidade, e permite punção com agulha fina ou grossa.</dd>
<dt>Umbilicação central</dt>
<dd>Ulceração no ápice da lesão, por onde ela sangra; comum no GIST e no tumor neuroendócrino.</dd>
</dl>
<h4>O essencial</h4>
<p>Uma lesão de 3 cm no fundo gástrico, <strong>recoberta por mucosa normal</strong>, com <strong>umbilicação central</strong>, que sangrou, é uma <strong>lesão subepitelial</strong>: o tumor nasce abaixo do epitélio e empurra a mucosa, que permanece íntegra por cima. A <strong>biópsia endoscópica convencional</strong> pega a mucosa normal e não alcança o tumor; o resultado "gastrite" ou "mucosa sem alterações" é <strong>falso negativo</strong>, e não afasta nada. Biópsias em túnel (biópsia sobre biópsia) e a biópsia da úlcera da umbilicação aumentam o rendimento, mas o exame de escolha é outro.</p>
<p>A <strong>ecoendoscopia</strong> define a <strong>camada de origem</strong> e a natureza: lesão hipoecoica da <strong>muscular própria</strong> (4ª camada) é <strong>GIST</strong> ou leiomioma; da submucosa, lipoma (hiperecoico), tumor neuroendócrino, pâncreas ectópico (antro, com ducto), cisto de duplicação; a compressão extrínseca pelo baço ou por vasos também é reconhecida. A <strong>punção guiada</strong> por ecoendoscopia, de preferência com agulha de biópsia, dá tecido para imuno-histoquímica (KIT e DOG1 no GIST; desmina e actina no leiomioma; cromogranina no neuroendócrino), e a tomografia estadia.</p>
<p>O <strong>GIST</strong> é a lesão subepitelial mais importante do estômago: sangra por ulceração, tem potencial maligno estimado pelo tamanho e pelo índice mitótico, e o tratamento é a <strong>ressecção com margens</strong> (em cunha, laparoscópica) sem linfadenectomia, com imatinibe adjuvante nos de alto risco e neoadjuvante nos grandes ou de localização difícil. Lesões abaixo de 2 cm sem sinais de alarme podem ser vigiadas; acima de 2 cm, ou com sangramento, crescimento ou aspecto irregular, investigam-se e ressecam-se.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando o laudo diz "nódulo submucoso, biópsias com mucosa normal", o caso não está encerrado: está no começo. Peça a ecoendoscopia com punção antes de dar alta por hematêmese; um GIST de 3 cm que sangrou é cirurgia, e a biópsia que "não mostrou nada" é o motivo pelo qual ele volta a sangrar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mucosa normal sobre abaulamento com umbilicação: lesão subepitelial.</li>
<li>Biópsia de superfície é falso negativo; não afasta tumor.</li>
<li>Ecoendoscopia define camada e permite punção com imuno-histoquímica.</li>
<li>GIST: muscular própria, KIT e DOG1; ressecção com margens sem linfadenectomia; imatinibe conforme o risco.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a biópsia convencional falha na lesão subepitelial? <details><summary>Resposta</summary>Porque colhe a mucosa normal que recobre o tumor, sem alcançar a submucosa ou a muscular própria.</details></li>
<li>Qual exame define a origem e permite o diagnóstico? <details><summary>Resposta</summary>A ecoendoscopia, que mostra a camada de origem e guia a punção para imuno-histoquímica.</details></li>
</ol>
`,
"einstein2025#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer as estratégias de rastreamento do câncer colorretal e o papel duplo da colonoscopia.</li>
<li>Saber as idades e os intervalos para a população geral e para os grupos de risco.</li>
<li>Aplicar as regras de rastreio nas doenças inflamatórias intestinais e na história familiar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sequência adenoma-carcinoma</dt>
<dd>A maioria dos cânceres nasce de pólipos adenomatosos ao longo de 10 anos; remover o pólipo previne o câncer.</dd>
<dt>Teste imunoquímico fecal (FIT)</dt>
<dd>Pesquisa de sangue oculto anual; positivo leva à colonoscopia.</dd>
<dt>Colonoscopia terapêutica</dt>
<dd>Polipectomia e ressecção endoscópica de lesões precoces, que diagnostica e trata no mesmo ato.</dd>
<dt>Rastreio na colite</dt>
<dd>Colonoscopia com cromoscopia 8 anos após o início da colite extensa, repetida a cada 1 a 3 anos.</dd>
</dl>
<h4>O essencial</h4>
<p>O câncer colorretal é o único cujo rastreamento <strong>previne</strong> a doença, e não só a detecta cedo, porque a <strong>sequência adenoma-carcinoma</strong> leva anos e o pólipo removido não vira câncer. A <strong>colonoscopia</strong> tem por isso um <strong>papel duplo</strong>: <strong>diagnostica</strong> e, na mesma sessão, <strong>trata</strong> por polipectomia ou mucosectomia os adenomas e os cânceres precoces confinados à mucosa ou à submucosa superficial (T1 de baixo risco), que dispensam cirurgia. Nenhum outro método de rastreio faz as duas coisas.</p>
<p>Para a população de <strong>risco médio</strong>, o rastreio começa aos <strong>45 anos</strong> nas diretrizes americanas (50 nas brasileiras, com tendência a antecipar pelo aumento em jovens) e vai até 75, individualizado depois: <strong>teste imunoquímico fecal anual</strong>, <strong>colonoscopia a cada 10 anos</strong>, ou sigmoidoscopia a cada 5 anos; tomografia virtual e DNA fecal são opções. O teste positivo leva sempre à colonoscopia. No Brasil não há programa populacional organizado, e o rastreio é oportunístico.</p>
<p>Os <strong>grupos de risco</strong> começam antes e repetem mais: <strong>parente de primeiro grau</strong> com câncer ou adenoma avançado antes de 60 anos, colonoscopia aos 40 ou 10 anos antes do caso, a cada 5 anos; <strong>síndromes hereditárias</strong> (polipose adenomatosa familiar, Lynch) com protocolos próprios desde a adolescência ou os 20 a 25 anos; <strong>doença inflamatória intestinal</strong> (retocolite e Crohn colônico extensos) com colonoscopia de vigilância a partir de <strong>8 anos do início dos sintomas</strong>, com cromoscopia e biópsias, a cada 1 a 3 anos conforme a extensão, a atividade e a colangite esclerosante (anual desde o diagnóstico). Adenomas prévios definem intervalos de 3 a 7 anos conforme número, tamanho e histologia.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Aos 45 a 50 anos, ofereça o rastreio e explique a diferença: o sangue oculto anual é fácil, a colonoscopia a cada 10 anos tira o pólipo que faria o câncer. Em quem tem colite há 8 anos, o relógio da vigilância já começou, mesmo com a doença quieta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Rastreio previne pelo ciclo adenoma-carcinoma; colonoscopia diagnostica e trata (polipectomia, lesões precoces).</li>
<li>Risco médio: 45 a 50 até 75 anos; FIT anual ou colonoscopia a cada 10 anos; positivo vai à colonoscopia.</li>
<li>Parente de primeiro grau antes de 60: aos 40 ou 10 anos antes, a cada 5 anos.</li>
<li>Colite extensa: vigilância 8 anos após o início, a cada 1 a 3 anos, com cromoscopia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que papel terapêutico a colonoscopia tem no rastreio? <details><summary>Resposta</summary>Remove adenomas e resseca cânceres precoces confinados à mucosa ou à submucosa superficial, prevenindo e tratando.</details></li>
<li>Quando começa a vigilância na retocolite extensa? <details><summary>Resposta</summary>Oito anos após o início dos sintomas, com colonoscopia e cromoscopia a cada 1 a 3 anos.</details></li>
</ol>
`,
"einstein2025#29": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a insuficiência venosa crônica pelo CEAP, usando o sinal clínico mais grave presente.</li>
<li>Indicar o tratamento cirúrgico das varizes pelos sintomas e pelo impacto na qualidade de vida.</li>
<li>Prescrever a compressão elástica e as medidas conservadoras.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Classificação CEAP</dt>
<dd>Clínica (C0 a C6), etiologia, anatomia e fisiopatologia; C3 é edema, C4 alterações de pele, C5 úlcera cicatrizada, C6 úlcera ativa.</dd>
<dt>Refluxo safeno-femoral</dt>
<dd>Incompetência da válvula da junção, mostrada pelo Doppler; alvo da cirurgia ou da ablação.</dd>
<dt>Meias de compressão graduada</dt>
<dd>20 a 30 mmHg para C2 e C3 sintomáticas; 30 a 40 para C4 a C6; contraindicadas na doença arterial.</dd>
<dt>Ablação endovenosa</dt>
<dd>Laser ou radiofrequência na safena, com escleroterapia ou flebectomia das tributárias; opção à safenectomia.</dd>
</dl>
<h4>O essencial</h4>
<p>A insuficiência venosa crônica é classificada pelo <strong>CEAP</strong>, e a letra clínica é dada pelo <strong>sinal mais grave presente</strong>: C0 sem sinais, C1 telangiectasias e veias reticulares, C2 varizes, <strong>C3 edema</strong>, C4 alterações tróficas (pigmentação, eczema, lipodermatoesclerose), C5 úlcera cicatrizada, C6 úlcera ativa; acrescenta-se "s" quando há sintomas. Uma cabeleireira de 45 anos com varizes, dor, peso e queimação no fim do dia que melhoram com a elevação, <strong>e edema</strong>, é <strong>C3s</strong>, ainda que as varizes sejam o achado mais chamativo: o edema supera as varizes na escala.</p>
<p>O <strong>Doppler venoso</strong> mapeia o refluxo (safena magna, parva, junções, perfurantes) e afasta trombose e obstrução. O tratamento conservador vale para todos: <strong>meias de compressão graduada</strong> (20 a 30 mmHg), elevação dos membros, atividade física, controle do peso e pausas na ortostase prolongada; flebotônicos aliviam sintomas. Mas a compressão trata sintomas, não corrige o refluxo, e a adesão a longo prazo é baixa em quem trabalha de pé e no calor.</p>
<p>O <strong>tratamento intervencionista</strong> é indicado quando há <strong>sintomas que prejudicam a qualidade de vida</strong>, edema, alterações de pele, úlcera, tromboflebite ou sangramento de variz, com refluxo documentado: safenectomia com ligadura da junção, ou <strong>ablação endovenosa</strong> por laser ou radiofrequência, hoje preferida pelas diretrizes pela menor dor e retorno mais rápido, com flebectomia ou escleroterapia das tributárias; a escleroterapia com espuma trata tributárias e recidivas. As meias continuam no pós-operatório e como prevenção. Varizes sem sintomas e sem sinais tróficos podem ser apenas acompanhadas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quem passa o dia em pé e tem dor, peso e edema no fim da tarde, com refluxo safeno-femoral no Doppler, não melhora só com a meia que ela não consegue usar no salão: a indicação é a ablação ou a safenectomia, com a compressão como coadjuvante. Classifique pelo edema (C3), não pela variz.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>CEAP clínico pelo sinal mais grave: C3 é edema; C4 pele; C5 e C6 úlcera.</li>
<li>Doppler mapeia o refluxo; compressão, elevação e exercício para todos.</li>
<li>Cirurgia ou ablação endovenosa: sintomas com impacto, edema, alterações de pele, úlcera, com refluxo documentado.</li>
<li>Meias de 20 a 30 mmHg como coadjuvante; contraindicadas na doença arterial.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se classifica uma paciente com varizes, sintomas e edema? <details><summary>Resposta</summary>C3s: o edema é o sinal mais grave presente, e o "s" indica sintomas.</details></li>
<li>Quando o tratamento cirúrgico das varizes está indicado? <details><summary>Resposta</summary>Quando há sintomas com impacto na qualidade de vida, edema, alterações de pele, úlcera, tromboflebite ou sangramento, com refluxo documentado.</details></li>
</ol>
`,
};
