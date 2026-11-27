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

/* --- Volume 2 · Cirurgia · Sírio-Libanês 2026 (cir51–cir65) --------------------------- */
"sirio2026#21": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar o mecanismo da síndrome de realimentação a partir do pico de insulina.</li>
<li>Identificar os pacientes de risco antes de iniciar a nutrição.</li>
<li>Descrever a prevenção e o tratamento: calorias baixas, eletrólitos, tiamina e vigilância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Síndrome de realimentação</dt>
<dd>Conjunto de distúrbios metabólicos e clínicos que surge nos primeiros dias de nutrição em pessoas desnutridas ou em jejum prolongado.</dd>
<dt>Hipofosfatemia</dt>
<dd>Marcador bioquímico central da síndrome; o fosfato é consumido na síntese de ATP e desviado para as células pela insulina.</dd>
<dt>Tiamina</dt>
<dd>Vitamina B1, cofator da glicólise; sua reserva se esgota em dias e a oferta de glicose sem reposição pode desencadear encefalopatia de Wernicke e acidose láctica.</dd>
<dt>Critérios NICE de risco</dt>
<dd>IMC abaixo de 16, perda de peso acima de 15% em três a seis meses, jejum acima de dez dias ou eletrólitos baixos antes da nutrição.</dd>
</dl>
<h4>O essencial</h4>
<p>No jejum prolongado o organismo troca a glicose pelos corpos cetônicos e pelos ácidos graxos como combustível, a insulina cai e as reservas intracelulares de fosfato, potássio e magnésio se esgotam, embora os níveis séricos pareçam normais. Quando a nutrição volta, sobretudo com carboidrato, a <strong>insulina dispara</strong>, a célula retoma a síntese de glicogênio, proteína e ATP e puxa para dentro o fosfato, o potássio e o magnésio que sobravam no plasma.</p>
<p>As consequências são fraqueza muscular e insuficiência respiratória, arritmias, insuficiência cardíaca por sobrecarga de volume num coração atrofiado, convulsões, rabdomiólise e hemólise, além de encefalopatia de Wernicke se a tiamina faltar.</p>
<p>A prevenção é a chave: identificar o risco, dosar e corrigir fosfato, potássio e magnésio antes de começar, dar tiamina de 200 a 300 mg por dia antes da primeira caloria e por cinco a sete dias, começar com <strong>10 kcal/kg/dia</strong> (5 kcal/kg nos casos extremos) e subir ao longo de quatro a sete dias, com dosagens diárias e reposição conforme o resultado.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O erro clássico é raciocinar que o paciente muito desnutrido precisa de muitas calorias logo. É o contrário: quanto mais grave a desnutrição, menor o aporte inicial e mais lenta a progressão. Na prova, desnutrição grave mais nutrição recém-iniciada mais fosfato baixo fecham o diagnóstico, e a conduta sempre inclui frear a oferta e repor fosfato, potássio, magnésio e tiamina.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mecanismo: pico de insulina na realimentação desloca fosfato, potássio e magnésio para as células.</li>
<li>Marcador: hipofosfatemia; manifestações cardíacas, neurológicas e respiratórias em 24 a 72 horas.</li>
<li>Risco: IMC abaixo de 16, perda de peso rápida, jejum prolongado, alcoolismo, câncer.</li>
<li>Prevenção: corrigir eletrólitos, tiamina antes das calorias, começar com 10 kcal/kg e progredir devagar.</li>
<li>Tratamento: suspender ou reduzir a nutrição, repor os íons por via venosa, monitorar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual eletrólito é o marcador mais característico da síndrome de realimentação? <details><summary>Resposta</summary>O fosfato: a hipofosfatemia é o achado central, acompanhada de hipocalemia e hipomagnesemia.</details></li>
<li>Por que a tiamina deve ser dada antes de iniciar a nutrição no paciente de risco? <details><summary>Resposta</summary>Porque a glicose consome a tiamina na glicólise e, com a reserva esgotada, pode precipitar encefalopatia de Wernicke e acidose láctica.</details></li>
<li>Com quantas calorias por quilo se inicia a nutrição num paciente de alto risco? <details><summary>Resposta</summary>Cerca de 10 kcal/kg/dia, ou 5 kcal/kg nos casos extremos, com progressão lenta em quatro a sete dias.</details></li>
</ol>
`,

"sirio2026#22": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Distinguir medidas estáticas de testes dinâmicos de responsividade a volume.</li>
<li>Descrever a técnica e a interpretação da elevação passiva das pernas.</li>
<li>Reconhecer as condições de validade da variação de pressão de pulso e da veia cava.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Responsividade a volume</dt>
<dd>Aumento do débito cardíaco de pelo menos 10 a 15% em resposta a uma expansão volêmica; só cerca de metade dos pacientes em choque é responsiva.</dd>
<dt>Elevação passiva das pernas</dt>
<dd>Manobra que eleva os membros inferiores a 45 graus a partir da posição semissentada, transferindo cerca de 300 mL de sangue ao tórax de forma reversível.</dd>
<dt>Variação da pressão de pulso</dt>
<dd>Oscilação da pressão de pulso com a ventilação mecânica; acima de 12 a 13% prevê resposta a volume em paciente sedado, em ritmo sinusal e com volume corrente de 8 mL/kg.</dd>
<dt>Pressão venosa central</dt>
<dd>Pressão no átrio direito; medida estática que não prevê a resposta a fluidos, exceto em valores extremos.</dd>
</dl>
<h4>O essencial</h4>
<p>Dar volume só faz sentido se o coração estiver na parte ascendente da curva de Frank-Starling, em que mais pré-carga gera mais débito. Na parte plana, o fluido só acumula no pulmão e nos tecidos, e o excesso de fluidos na sepse se associa a mais mortalidade. As <strong>medidas estáticas</strong>, como a pressão venosa central e a pressão de oclusão da artéria pulmonar, falharam em prever quem responde, porque a mesma pressão corresponde a volumes diferentes conforme a complacência do ventrículo.</p>
<p>Os <strong>testes dinâmicos</strong> provocam uma variação de pré-carga e observam a resposta do débito. A <strong>variação da pressão de pulso</strong> e a do volume sistólico usam a ventilação mecânica como provocação, mas exigem sedação profunda sem esforço respiratório, ritmo regular, volume corrente de pelo menos 8 mL/kg e complacência torácica normal, condições raras no paciente crítico.</p>
<p>A <strong>elevação passiva das pernas</strong> contorna quase todas essas restrições: funciona em arritmia, em respiração espontânea e com volume corrente baixo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, pressão venosa central como critério para dar volume está quase sempre errada; variação da cava em paciente com PEEP alta ou respirando ativamente também. A elevação passiva das pernas com medida direta do débito é a resposta robusta, e a condição "apenas infundir se houver aumento significativo" é a essência do conceito.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Só metade dos pacientes em choque responde a volume; o excesso de fluidos faz mal.</li>
<li>Medidas estáticas (PVC, pressão de oclusão) não prevêem resposta.</li>
<li>Variação de pressão de pulso e da cava exigem condições ventilatórias estritas.</li>
<li>Elevação passiva das pernas: bolus reversível de 300 mL; positiva se o débito sobe mais de 10%.</li>
<li>Medir débito ou volume sistólico em tempo real, nunca só a pressão arterial.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a pressão venosa central não prevê a resposta a volume? <details><summary>Resposta</summary>Porque é uma medida estática de pressão, e a relação entre pressão e volume depende da complacência ventricular, variável de paciente para paciente.</details></li>
<li>Quais condições a variação de pressão de pulso exige para ser válida? <details><summary>Resposta</summary>Ventilação mecânica controlada sem esforço espontâneo, ritmo regular, volume corrente de pelo menos 8 mL/kg e complacência torácica normal.</details></li>
<li>Como se interpreta a elevação passiva das pernas? <details><summary>Resposta</summary>Aumento do débito cardíaco ou do volume sistólico acima de 10% em 30 a 90 segundos indica responsividade a volume.</details></li>
</ol>
`,

"sirio2026#23": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar a sequência xABCDE e justificar a prioridade da hemorragia externa.</li>
<li>Descrever as técnicas de controle da hemorragia exsanguinante: compressão, curativo compressivo e torniquete.</li>
<li>Explicar a ressuscitação hemostática com transfusão balanceada e cristaloide limitado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hemorragia exsanguinante</dt>
<dd>Sangramento externo volumoso, em geral de extremidade, capaz de matar em poucos minutos; o "x" que precede o ABCDE.</dd>
<dt>Torniquete</dt>
<dd>Dispositivo que oclui o fluxo arterial de um membro acima da lesão quando a compressão direta falha; anota-se a hora e mantém-se até a hemostasia cirúrgica.</dd>
<dt>Transfusão balanceada</dt>
<dd>Reposição com plasma, plaquetas e concentrado de hemácias em proporção próxima de 1:1:1, imitando o sangue total perdido.</dd>
<dt>Protocolo de transfusão maciça</dt>
<dd>Ativação antecipada do banco de sangue para liberar hemocomponentes em pacotes, disparada por escores como ABC ou pela resposta transitória ao volume.</dd>
</dl>
<h4>O essencial</h4>
<p>A hemorragia é a principal causa de morte evitável no trauma. A experiência militar mostrou que boa parte dessas mortes vinha de sangramentos de extremidade que poderiam ter sido contidos com compressão e torniquete, e que a via aérea, embora prioritária, não salva quem já perdeu o volume.</p>
<p>A ressuscitação da circulação também mudou. O cristaloide em grandes volumes dilui os fatores de coagulação, esfria o paciente, eleva a pressão e desloca o coágulo, agravando a <strong>tríade letal</strong> de acidose, hipotermia e coagulopatia.</p>
<p>A reavaliação é contínua: a resposta ao volume classifica o paciente em respondedor, respondedor transitório e não respondedor, e os dois últimos exigem controle definitivo imediato, no centro cirúrgico ou na angiografia. Vasopressores não têm lugar no choque hemorrágico inicial, porque elevam a pressão à custa da perfusão tecidual e aumentam a mortalidade.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O torniquete deixou de ser proibido: em sangramento de membro que não cede à compressão, aplica-se bem apertado, 5 a 7 cm acima da lesão, anota-se a hora e não se afrouxa até a cirurgia; ele é seguro por até duas horas. Na prova, qualquer opção que coloque tomografia, intubação ou colar antes de comprimir uma hemorragia externa volumosa está errada, assim como 2 litros de cristaloide ou noradrenalina de início.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>xABCDE: hemorragia externa exsanguinante primeiro, depois via aérea, ventilação, circulação, neurológico e exposição.</li>
<li>Controle: compressão direta, curativo compressivo, hemostático tópico, torniquete com hora anotada.</li>
<li>Cristaloide aquecido limitado a cerca de 1 litro; sangue cedo em quem não responde.</li>
<li>Transfusão balanceada 1:1:1, ácido tranexâmico em até três horas, cálcio.</li>
<li>Vasopressor não é tratamento do choque hemorrágico inicial.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que significa o "x" do xABCDE? <details><summary>Resposta</summary>O controle da hemorragia externa exsanguinante, que precede a via aérea porque mata em minutos.</details></li>
<li>Qual o volume máximo de cristaloide recomendado antes de passar a hemocomponentes? <details><summary>Resposta</summary>Cerca de 1 litro de cristaloide aquecido; a partir daí, sangue, plasma e plaquetas em proporção balanceada.</details></li>
<li>Por que o vasopressor é evitado no início do choque hemorrágico? <details><summary>Resposta</summary>Porque eleva a pressão por vasoconstrição, piorando a perfusão dos tecidos já isquêmicos, e se associa a maior mortalidade sem tratar a causa, a perda de volume.</details></li>
</ol>
`,

"sirio2026#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a árvore de decisão do trauma abdominal fechado conforme estabilidade e FAST.</li>
<li>Reconhecer a fratura pélvica instável como fonte de choque e saber estabilizá-la.</li>
<li>Integrar laparotomia, cinta pélvica, empacotamento pré-peritoneal e angioembolização.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>FAST</dt>
<dd>Ultrassom focado no trauma: janelas hepatorrenal (Morison), esplenorrenal, pélvica e pericárdica, à procura de líquido livre; detecta a partir de 200 a 250 mL.</dd>
<dt>Cinta pélvica</dt>
<dd>Dispositivo ou lençol apertado ao nível dos trocânteres que fecha o anel pélvico em livro aberto, reduz o volume da pelve e tampona o sangramento venoso.</dd>
<dt>Empacotamento pré-peritoneal</dt>
<dd>Colocação de compressas no espaço pré-vesical e paravesical por incisão suprapúbica, para comprimir o plexo venoso pélvico; rápido, feito na mesma mesa da laparotomia.</dd>
<dt>Angioembolização</dt>
<dd>Oclusão por cateter dos ramos arteriais pélvicos sangrantes, indicada quando há extravasamento arterial na tomografia ou instabilidade persistente após as medidas iniciais.</dd>
</dl>
<h4>O essencial</h4>
<p>No trauma fechado, a decisão nasce de duas perguntas: o paciente está estável? Há sangue livre no abdome? O paciente <strong>instável com FAST positivo</strong> vai para a <strong>laparotomia</strong> sem passar pela tomografia; o instável com FAST negativo obriga a procurar o sangramento em outro lugar, no tórax, na pelve, nos ossos longos ou fora do corpo; o estável, mesmo com FAST positivo, faz tomografia com contraste e, se a lesão for de órgão sólido sem sangramento ativo, pode ser tratado sem cirurgia.</p>
<p>A <strong>fratura pélvica instável</strong> sangra do plexo venoso pré-sacral e das superfícies ósseas em 80% dos casos, e de ramos arteriais da ilíaca interna nos 20% restantes. O primeiro gesto, ainda na avaliação primária, é fechar o anel com a <strong>cinta pélvica</strong> ou um lençol, sem balançar a pelve repetidamente ao exame.</p>
<p>Quando as duas fontes coexistem, como no caso da paciente com FAST positivo e pelve instável, a laparotomia resolve o abdome e, na mesma anestesia, o cirurgião faz o empacotamento pré-peritoneal e o ortopedista a fixação externa; a angioembolização completa o controle se a instabilidade persistir após o abdome fechado. A cirurgia de controle de danos, com abdome aberto temporário e retorno à UTI para corrigir a tríade letal, é a estratégia nesse paciente grave.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A tomografia é o exame do paciente estável, e a frase "levar o hipotenso ao tomógrafo" é sinônimo de erro na prova. Da mesma forma, embolização antes da laparotomia só se defende quando o FAST é negativo e o sangramento é pélvico arterial; com sangue livre no abdome e choque, a laparotomia vem primeiro.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Instável e FAST positivo: laparotomia imediata, sem tomografia.</li>
<li>Instável e FAST negativo: procurar a fonte; pelve instável aponta para angioembolização ou empacotamento.</li>
<li>Estável: tomografia com contraste e, muitas vezes, tratamento não operatório.</li>
<li>Cinta pélvica na avaliação primária em toda fratura instável.</li>
<li>Fontes combinadas: laparotomia, empacotamento pré-peritoneal e fixação externa no mesmo tempo, angioembolização em seguida.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual a conduta no paciente instável com FAST positivo? <details><summary>Resposta</summary>Laparotomia imediata, sem tomografia, com ressuscitação hemostática em paralelo.</details></li>
<li>De onde vem a maior parte do sangramento na fratura pélvica instável? <details><summary>Resposta</summary>Do plexo venoso pré-sacral e das superfícies ósseas fraturadas, em cerca de 80% dos casos; o sangramento arterial responde por 20%.</details></li>
</ol>
`,

"sirio2026#26": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o cenário "não intubo, não ventilo" e seu lugar no algoritmo da via aérea difícil.</li>
<li>Descrever a técnica da cricotireoidostomia cirúrgica e suas contraindicações.</li>
<li>Diferenciar cricotireoidostomia, punção cricotireóidea e traqueostomia quanto à indicação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Via aérea definitiva</dt>
<dd>Tubo com balonete insuflado na traqueia, fixado e conectado a oxigênio: intubação orotraqueal, nasotraqueal ou via aérea cirúrgica.</dd>
<dt>Membrana cricotireóidea</dt>
<dd>Membrana entre as cartilagens tireoide e cricoide, superficial, pouco vascularizada, com cerca de 1 cm de altura no adulto; é o acesso da cricotireoidostomia.</dd>
<dt>Cricotireoidostomia por punção</dt>
<dd>Cateter calibroso através da membrana com ventilação a jato; medida temporária de oxigenação, por 30 a 45 minutos, sem eliminar CO2 adequadamente.</dd>
<dt>Dispositivo supraglótico</dt>
<dd>Máscara laríngea e similares, que ventilam sem entrar na traqueia; ponte útil quando a máscara facial falha, mas não é via aérea definitiva.</dd>
</dl>
<h4>O essencial</h4>
<p>O algoritmo da via aérea difícil tem uma escada: pré-oxigenação, laringoscopia com manobras de otimização, troca de dispositivo (videolaringoscópio, bougie), dispositivo supraglótico como resgate para oxigenar, e no fim a <strong>via aérea cirúrgica</strong>.</p>
<p>A <strong>cricotireoidostomia cirúrgica</strong> é a via aérea de emergência do adulto. Palpa-se a membrana entre as cartilagens tireoide e cricoide, estabiliza-se a laringe com a mão não dominante, faz-se incisão vertical na pele e horizontal na membrana, dilata-se com o cabo do bisturi ou uma pinça, introduz-se um bougie e sobre ele um tubo 6,0 ou uma cânula de traqueostomia 6, confirma-se a posição e fixa-se. A técnica "bisturi, bougie, tubo" leva menos de um minuto.</p>
<p>A <strong>traqueostomia</strong> é mais profunda, atravessa o istmo da tireoide e vasos, e exige mais tempo e iluminação; por isso não é a via de emergência, exceto na criança pequena e na lesão laríngea, e é a conversão eletiva da cricotireoidostomia nos dias seguintes. A punção com ventilação a jato oxigena por meia hora e serve de ponte na criança ou enquanto se prepara a técnica cirúrgica.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>No trauma de face com sangramento na orofaringe, a intubação nasotraqueal às cegas está contraindicada e a máscara laríngea tende a falhar pelo sangue. Quando a questão diz "tentativas de intubação sem sucesso e ventilação com máscara ineficaz", a resposta é cricotireoidostomia cirúrgica imediata; "traqueostomia em sala de emergência" é o distrator que parece definitivo mas custa minutos que o paciente não tem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>"Não intubo, não ventilo": intubação falhou e não há oxigenação por máscara nem supraglótico.</li>
<li>Resposta no adulto: cricotireoidostomia cirúrgica, técnica bisturi-bougie-tubo, menos de um minuto.</li>
<li>Punção com ventilação a jato é ponte de oxigenação, sobretudo em crianças.</li>
<li>Traqueostomia é eletiva ou para criança pequena e lesão laríngea.</li>
<li>Mais tentativas de laringoscopia num paciente dessaturando são o erro a evitar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que condição define o cenário que indica a via aérea cirúrgica de emergência? <details><summary>Resposta</summary>A falha da intubação associada à impossibilidade de oxigenar o paciente com máscara facial ou dispositivo supraglótico.</details></li>
<li>Por que a cricotireoidostomia é evitada em crianças pequenas? <details><summary>Resposta</summary>Porque a cartilagem cricoide é o único suporte circunferencial da traqueia infantil, a membrana é diminuta e o risco de estenose subglótica é alto; prefere-se a punção e, se preciso, a traqueostomia.</details></li>
</ol>
`,

"sirio2026#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar por que a hipotensão é devastadora no traumatismo craniencefálico grave.</li>
<li>Enunciar as metas de pressão arterial, oxigenação e CO2 recomendadas.</li>
<li>Situar a hiperventilação e a osmoterapia como medidas de resgate, não de rotina.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pressão de perfusão cerebral</dt>
<dd>Pressão arterial média menos pressão intracraniana; alvo de 60 a 70 mmHg no TCE grave.</dd>
<dt>Autorregulação cerebral</dt>
<dd>Capacidade dos vasos cerebrais de manter o fluxo constante entre PAM de 50 e 150 mmHg; perdida no cérebro lesado, que passa a depender diretamente da pressão arterial.</dd>
<dt>Hiperventilação</dt>
<dd>Redução da PaCO2 abaixo de 35 mmHg, que causa vasoconstrição cerebral e reduz a pressão intracraniana à custa do fluxo; só como ponte breve diante de herniação.</dd>
<dt>Lesão secundária</dt>
<dd>Dano que se soma à lesão do impacto nas horas seguintes: hipotensão, hipóxia, hipercapnia, hipertermia, hiperglicemia e hipertensão intracraniana.</dd>
</dl>
<h4>O essencial</h4>
<p>O cérebro traumatizado perde a autorregulação: o fluxo sanguíneo passa a acompanhar a pressão arterial de forma linear, e as áreas de penumbra em torno das contusões sobrevivem apenas se a perfusão se mantiver. Um único episódio de <strong>hipotensão</strong>, PAS abaixo de 90 mmHg, dobra a mortalidade do TCE grave, e estudos pré-hospitalares mostram que o risco já cresce com PAS abaixo de 110 a 120 mmHg.</p>
<p>A oxigenação e a ventilação seguem a mesma lógica da lesão secundária: saturação acima de 94%, PaO2 acima de 60 mmHg e <strong>PaCO2 entre 35 e 40 mmHg</strong>. A hipercapnia dilata os vasos cerebrais e eleva a pressão intracraniana; a hipocapnia os contrai e reduz a pressão, mas também o fluxo, e a hiperventilação profilática piorou os desfechos nos ensaios.</p>
<p>A osmoterapia com manitol ou salina hipertônica tem a mesma indicação de resgate e exige pressão arterial preservada; o manitol é diurético e pode agravar a hipotensão. Sedação, analgesia, cabeceira a 30 graus, normotermia, controle glicêmico e profilaxia de convulsão na primeira semana completam o cuidado, com monitorização da pressão intracraniana no paciente com Glasgow 8 ou menos e tomografia alterada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>O conflito entre hipotensão permissiva e TCE se resolve a favor do cérebro: no politraumatizado com lesão cerebral, a meta é PAS de pelo menos 110 mmHg, mesmo que isso custe mais sangramento. Na prova, "PAS 80 a 90 até a hemostasia" e "hiperventilar para PaCO2 abaixo de 30 desde a admissão" são sempre erradas quando há TCE.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipotensão e hipóxia são as lesões secundárias que mais matam no TCE grave.</li>
<li>Meta: PAS acima de 110 mmHg (acima de 100 dos 50 aos 69 anos), saturação acima de 94%.</li>
<li>PaCO2 de 35 a 40 mmHg; hiperventilação só como ponte breve diante de herniação.</li>
<li>Osmoterapia é resgate, com pressão arterial preservada.</li>
<li>Pressão de perfusão cerebral alvo de 60 a 70 mmHg com monitorização da PIC quando indicada.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual a meta de pressão arterial sistólica num paciente de 58 anos com TCE grave? <details><summary>Resposta</summary>Acima de 100 mmHg entre 50 e 69 anos pela Brain Trauma Foundation, e o ATLS recomenda evitar PAS abaixo de 100 a 110 mmHg; na prática, manter pelo menos 110.</details></li>
<li>Quando a hiperventilação é aceitável no TCE? <details><summary>Resposta</summary>Apenas como medida temporária, por minutos, diante de sinais de herniação, enquanto se prepara a osmoterapia ou a cirurgia; nunca como profilaxia.</details></li>
<li>Como se calcula a pressão de perfusão cerebral e qual o alvo? <details><summary>Resposta</summary>Pressão arterial média menos pressão intracraniana, com alvo de 60 a 70 mmHg.</details></li>
</ol>
`,

"sirio2026#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Dividir o pescoço em zonas e reconhecer os sinais duros de lesão penetrante.</li>
<li>Identificar a lesão laringotraqueal e planejar a via aérea de forma controlada.</li>
<li>Descrever a investigação com angiotomografia no paciente estável.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Zonas do pescoço</dt>
<dd>Zona I, da clavícula à cricoide; zona II, da cricoide ao ângulo da mandíbula; zona III, acima do ângulo da mandíbula até a base do crânio.</dd>
<dt>Sinais duros</dt>
<dd>Hemorragia ativa, hematoma expansivo ou pulsátil, sopro, déficit neurológico, choque, escape de ar pelo ferimento, enfisema subcutâneo extenso, hemoptise ou hematêmese maciças, obstrução da via aérea.</dd>
<dt>Via aérea ameaçada</dt>
<dd>Via aérea ainda pérvia mas em risco de obstrução por edema, hematoma ou lesão estrutural; exige controle precoce e planejado.</dd>
<dt>Intubação com paciente acordado</dt>
<dd>Intubação sob fibrobroncoscópio ou videolaringoscópio com sedação leve e anestesia tópica, mantendo a respiração espontânea até o tubo estar na traqueia.</dd>
</dl>
<h4>O essencial</h4>
<p>No trauma penetrante do pescoço, a conduta clássica era explorar cirurgicamente toda a zona II com lesão do platisma; hoje a decisão é guiada pela clínica. Paciente com <strong>sinais duros</strong> ou instável vai para a cirurgia; paciente estável sem sinais duros faz <strong>angiotomografia</strong> de pescoço, que avalia vasos, laringe, traqueia, esôfago e coluna, complementada por esofagografia ou endoscopia quando o trajeto se aproxima do esôfago. A via aérea, porém, não espera a imagem.</p>
<p>A <strong>lesão laringotraqueal</strong> se revela por escape de ar pelo ferimento, enfisema subcutâneo, rouquidão, estridor, hemoptise e dor à fonação. Essa via aérea é traiçoeira: o paciente respira, mas a laringe fragmentada pode colapsar, o hematoma cresce e a sequência rápida de intubação com bloqueador neuromuscular pode transformar um paciente que respirava num paciente apneico com um tubo que não passa ou que cria falso trajeto.</p>
<p>A cricotireoidostomia é resgate, não escolha, porque a lesão pode estar justamente na laringe ou na traqueia proximal. Curativos oclusivos sobre ferimentos que vazam ar são perigosos: o ar passa a dissecar os planos do pescoço e do mediastino. Depois da via aérea, a lesão de laringe e traqueia é reparada cirurgicamente, com cobertura antibiótica e avaliação do esôfago, que se lesa junto em até um quarto dos casos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Pescoço penetrante com ar saindo pelo ferimento é via aérea cirúrgica em potencial: a resposta certa combina intubação precoce, visão direta ou por fibra, paciente respirando, e cirurgião ao lado. Observar, tapar o ferimento ou fazer sequência rápida às cegas são as três armadilhas da prova.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Zonas I, II e III; a conduta atual é guiada por sinais duros e angiotomografia, não pela zona.</li>
<li>Escape de ar, enfisema, rouquidão e estridor indicam lesão laringotraqueal.</li>
<li>Via aérea ameaçada: intubação precoce, controlada, sob visão, com respiração espontânea.</li>
<li>Equipe cirúrgica presente para traqueostomia imediata se a intubação falhar.</li>
<li>Não ocluir ferimento com escape de ar; não fazer sequência rápida às cegas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os limites da zona II do pescoço? <details><summary>Resposta</summary>Da cartilagem cricoide ao ângulo da mandíbula.</details></li>
<li>Por que a sequência rápida de intubação é perigosa na lesão laringotraqueal? <details><summary>Resposta</summary>Porque o bloqueador neuromuscular abole a respiração espontânea e a laringoscopia direta pode não passar o tubo ou criar um falso trajeto na via aérea rompida, deixando o paciente apneico sem via aérea.</details></li>
</ol>
`,

"sirio2026#29": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a deiscência de anastomose pelo tempo e pelos sinais clínicos.</li>
<li>Graduar a conduta pela estabilidade do paciente e pela extensão da contaminação.</li>
<li>Aplicar o princípio do controle da fonte na infecção intra-abdominal.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Deiscência de anastomose</dt>
<dd>Falha da sutura intestinal com extravasamento de conteúdo; ocorre em 3 a 15% das anastomoses colorretais, mais nas baixas, entre o quinto e o décimo dia.</dd>
<dt>Controle da fonte</dt>
<dd>Medida física que elimina o foco infeccioso: drenagem do abscesso, ressecção ou desvio do segmento que vaza, lavagem da cavidade.</dd>
<dt>Drenagem percutânea</dt>
<dd>Colocação de cateter no abscesso guiada por tomografia ou ultrassom; eficaz em coleções únicas, bem delimitadas e com janela de acesso seguro.</dd>
<dt>Colostomia de proteção</dt>
<dd>Estoma proximal à anastomose que desvia o trânsito; reduz as consequências da deiscência em anastomoses baixas de alto risco.</dd>
</dl>
<h4>O essencial</h4>
<p>A deiscência é a complicação mais temida da cirurgia colorretal. Os fatores de risco são anastomose baixa, sexo masculino, desnutrição, tabagismo, corticoide, radioterapia prévia, cirurgia de urgência, transfusão e tensão ou isquemia na linha de sutura. Os sinais costumam surgir entre o <strong>terceiro e o décimo dia</strong>: febre, taquicardia, íleo prolongado, dor, leucocitose e proteína C reativa que não cai; a tomografia com contraste venoso e retal mostra ar e líquido junto à anastomose, coleção ou extravasamento do contraste.</p>
<p>A conduta é graduada. Deiscência <strong>contida</strong>, com abscesso localizado e paciente <strong>estável</strong>, trata-se com antibiótico venoso de amplo espectro e <strong>drenagem percutânea</strong>, mantendo a anastomose; coleções pequenas, menores que 3 cm, podem resolver só com antibiótico. Deiscência com <strong>peritonite difusa</strong> ou paciente <strong>instável</strong> exige reoperação: lavagem, desmonte da anastomose com colostomia terminal (Hartmann) ou, em casos selecionados, sutura do defeito com ileostomia de proteção. Em anastomoses retais baixas, a drenagem transanal ou a terapia endoscópica a vácuo são opções.</p>
<p>O antibiótico acompanha sempre o controle da fonte e cobre enterobactérias, enterococos e anaeróbios; a cultura orienta o descalonamento. A duração é curta, cerca de quatro dias após o controle adequado, segundo o ensaio STOP-IT. A nutrição, o controle glicêmico e a profilaxia de trombose fazem parte do cuidado, e a decisão de reoperar deve ser precoce quando a drenagem falha, antes que a sepse progrida.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A pergunta da prova é quase sempre a mesma: estável com coleção localizada, dreno percutâneo e antibiótico venoso; instável ou com peritonite difusa, reoperar. "Antibiótico oral e observar" e "reabordagem imediata com colostomia" são os dois extremos errados para o caso intermediário.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Deiscência colorretal: 3 a 15%, entre o terceiro e o décimo dia, mais nas anastomoses baixas.</li>
<li>Sinais: febre, taquicardia, íleo, dor, leucocitose e proteína C reativa persistente; tomografia confirma.</li>
<li>Contida e estável: antibiótico venoso e drenagem percutânea guiada por imagem.</li>
<li>Peritonite difusa ou instabilidade: reoperação com lavagem e desvio do trânsito.</li>
<li>Antibiótico por cerca de quatro dias após o controle da fonte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que período pós-operatório a deiscência de anastomose costuma se manifestar? <details><summary>Resposta</summary>Entre o terceiro e o décimo dia, com pico em torno do quinto ao sétimo.</details></li>
<li>Quando a drenagem percutânea é a conduta adequada para a deiscência? <details><summary>Resposta</summary>Quando o paciente está hemodinamicamente estável e a tomografia mostra coleção localizada e acessível, sem peritonite difusa.</details></li>
</ol>
`,

"sirio2026#30": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Interpretar o padrão hemodinâmico do choque obstrutivo.</li>
<li>Reconhecer o tamponamento cardíaco no trauma contuso e seus sinais.</li>
<li>Diferenciar tamponamento de pneumotórax hipertensivo e de embolia pulmonar maciça.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Choque obstrutivo</dt>
<dd>Choque por impedimento mecânico ao enchimento ou ao esvaziamento do coração; cursa com pressão venosa alta e débito baixo.</dd>
<dt>Tríade de Beck</dt>
<dd>Hipotensão, turgência jugular e hipofonese de bulhas; presente em menos da metade dos tamponamentos traumáticos.</dd>
<dt>Pulso paradoxal</dt>
<dd>Queda da pressão sistólica acima de 10 mmHg na inspiração, pela competição entre os ventrículos dentro do pericárdio tenso.</dd>
<dt>Janela pericárdica do FAST</dt>
<dd>Corte subxifóideo que mostra líquido entre as lâminas do pericárdio e o colapso diastólico do átrio e do ventrículo direitos.</dd>
</dl>
<h4>O essencial</h4>
<p>O raciocínio hemodinâmico começa por duas variáveis: a pressão de enchimento e o débito. Débito baixo com <strong>pressão venosa baixa</strong> é hipovolemia; débito baixo com <strong>pressão venosa alta</strong> é falha da bomba ou obstrução. No trauma, a obstrução tem três causas clássicas: o pneumotórax hipertensivo, que desvia o mediastino e dobra as veias cavas, o <strong>tamponamento cardíaco</strong>, e, mais tarde, a embolia pulmonar maciça.</p>
<p>O tamponamento no trauma contuso é raro, mas ocorre por ruptura de câmara, em geral o átrio direito ou o apêndice atrial, ou de vaso pericárdico, após desaceleração contra o volante. O pericárdio é pouco distensível no agudo: 150 a 200 mL bastam para igualar as pressões diastólicas, impedir o enchimento do ventrículo direito e derrubar o débito.</p>
<p>O tratamento é a descompressão imediata. No paciente instável, a toracotomia ou a esternotomia com pericardiotomia e reparo da lesão são definitivas; a pericardiocentese é apenas ponte quando a cirurgia não está disponível, e falha com frequência porque o sangue coagula. Volume eleva transitoriamente a pré-carga e ganha minutos. No pneumotórax hipertensivo, ao contrário, a solução é a descompressão pleural com agulha ou toracostomia digital, e a distinção à beira do leito se faz pela ausculta pulmonar, pela percussão e pelo ultrassom.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, "PVC alta mais débito baixo mais hipotensão refratária" é choque obstrutivo; o mecanismo da lesão decide entre as causas: volante deformado e impacto anterior apontam para tamponamento; ventilação com pressão positiva, pressão de pico subindo e hipertimpanismo apontam para pneumotórax hipertensivo. Uma opção que descreva "PVC não elevada" não pode ser a resposta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipotensão com PVC alta e débito baixo é choque obstrutivo ou cardiogênico, não hipovolemia.</li>
<li>Causas obstrutivas no trauma: pneumotórax hipertensivo, tamponamento, embolia pulmonar maciça.</li>
<li>Tamponamento contuso: ruptura de câmara após desaceleração; 150 a 200 mL bastam.</li>
<li>Tríade de Beck inconstante; a janela pericárdica do FAST confirma.</li>
<li>Tratamento: descompressão cirúrgica imediata; pericardiocentese é ponte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que padrão hemodinâmico distingue o choque obstrutivo do hipovolêmico? <details><summary>Resposta</summary>No obstrutivo a pressão venosa central está alta com débito baixo; no hipovolêmico ambos estão baixos.</details></li>
<li>Qual é o exame de escolha para confirmar tamponamento no trauma? <details><summary>Resposta</summary>A janela pericárdica do FAST ou o ecocardiograma à beira do leito, que mostram líquido pericárdico e colapso diastólico das câmaras direitas.</details></li>
</ol>
`,

"sirio2026#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a anatomia do canal inguinal e os pontos de saída das hérnias direta, indireta e femoral.</li>
<li>Aplicar o exame físico do canal inguinal para diferenciá-las.</li>
<li>Relacionar cada tipo de hérnia ao perfil epidemiológico e ao risco de encarceramento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hérnia inguinal indireta</dt>
<dd>Saco que entra pelo anel inguinal profundo, lateral aos vasos epigástricos inferiores, e percorre o canal junto ao cordão espermático; de origem congênita, pela persistência do conduto peritoneovaginal.</dd>
<dt>Hérnia inguinal direta</dt>
<dd>Protrusão pelo assoalho do canal, no triângulo de Hesselbach, medial aos vasos epigástricos; adquirida, por enfraquecimento da fáscia transversal.</dd>
<dt>Hérnia femoral</dt>
<dd>Saco que passa pelo canal femoral, abaixo do ligamento inguinal e medial à veia femoral; mais comum em mulheres e com alto risco de encarceramento.</dd>
<dt>Triângulo de Hesselbach</dt>
<dd>Área limitada pelo ligamento inguinal, pela borda lateral do reto abdominal e pelos vasos epigástricos inferiores; sede da hérnia direta.</dd>
</dl>
<h4>O essencial</h4>
<p>O canal inguinal corre obliquamente do anel profundo, na fáscia transversal, ao anel superficial, na aponeurose do oblíquo externo, logo acima do tubérculo púbico. A <strong>hérnia indireta</strong> acompanha o trajeto do cordão: nasce lateral aos vasos epigástricos, no anel profundo, e desce pelo canal podendo chegar ao escroto. É a hérnia mais comum em todas as idades e em ambos os sexos, e a predominante em crianças e jovens, pela persistência do conduto peritoneovaginal.</p>
<p>No exame, a <strong>manobra do dedo no canal</strong>: invagina-se a pele escrotal com o indicador até o anel superficial e pede-se Valsalva. Se a protrusão bate na <strong>ponta do dedo</strong>, vem de cima, pelo anel profundo: indireta. Se empurra a <strong>polpa ou a lateral do dedo</strong>, vem do assoalho: direta. A oclusão do anel profundo com o dedo durante o esforço impede a hérnia indireta de aparecer e não impede a direta.</p>
<p>O risco de encarceramento é maior nas hérnias de colo estreito: a femoral encarcera em até 40% dos casos e a indireta mais que a direta. Toda hérnia sintomática se opera; a assintomática do homem pode ser acompanhada, mas a femoral e a da mulher se operam sempre. O reparo com tela, por via aberta (Lichtenstein) ou laparoscópica (TEP ou TAPP), cobre os três orifícios do miopectíneo de Fruchaud.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A prova cobra a tríade de pistas: jovem, protrusão na ponta do dedo e massa acima do ligamento inguinal é indireta; idoso, protrusão na polpa, raramente escrotal, é direta; mulher, massa abaixo do ligamento e lateral ao tubérculo púbico, encarcerada, é femoral. Lipoma e linfonodo não variam com o esforço nem reduzem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Indireta: anel profundo, lateral aos epigástricos, segue o cordão; a mais comum, congênita.</li>
<li>Direta: assoalho do canal, medial aos epigástricos, no triângulo de Hesselbach; adquirida, do idoso.</li>
<li>Femoral: abaixo do ligamento inguinal; mulheres; encarcera com frequência.</li>
<li>Manobra do dedo: ponta é indireta, polpa é direta.</li>
<li>Reparo com tela cobre o orifício miopectíneo; femoral e hérnia da mulher operam-se sempre.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual a relação da hérnia indireta com os vasos epigástricos inferiores? <details><summary>Resposta</summary>O saco da indireta sai lateral aos vasos epigástricos, pelo anel inguinal profundo; a direta sai medial a eles.</details></li>
<li>Por que a hérnia femoral deve sempre ser operada? <details><summary>Resposta</summary>Porque o canal femoral é rígido e estreito, e o risco de encarceramento e estrangulamento chega a 40%.</details></li>
</ol>
`,

"sirio2026#36": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Delimitar o triângulo hepatocístico e identificar seu conteúdo.</li>
<li>Explicar a visão crítica de segurança de Strasberg e seus três critérios.</li>
<li>Reconhecer as variações anatômicas que levam à lesão da via biliar.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Triângulo hepatocístico</dt>
<dd>Espaço entre o ducto cístico, o ducto hepático comum e a borda inferior do fígado; o "triângulo de Calot" da prática cirúrgica.</dd>
<dt>Artéria cística</dt>
<dd>Ramo da artéria hepática direita, em geral único, que cruza o triângulo hepatocístico para irrigar a vesícula.</dd>
<dt>Linfonodo de Mascagni</dt>
<dd>Linfonodo do triângulo, junto à artéria cística; referência para encontrá-la.</dd>
<dt>Visão crítica de segurança</dt>
<dd>Dissecção que deixa o triângulo livre de gordura, expõe o terço inferior da vesícula separado do leito e mostra apenas duas estruturas entrando na vesícula.</dd>
</dl>
<h4>O essencial</h4>
<p>Calot descreveu em 1891 um triângulo formado pelo ducto cístico, pelo ducto hepático comum e pela <strong>artéria cística</strong>. A cirurgia moderna redesenhou o espaço: o lado superior passou a ser a <strong>borda inferior do fígado</strong>, e o triângulo, chamado hepatocístico, contém a artéria cística, o linfonodo de Mascagni, gordura e, com frequência, variações anatômicas. É esse espaço que precisa ser aberto para que a colecistectomia seja segura.</p>
<p>A <strong>lesão da via biliar</strong> acontece em cerca de 0,3 a 0,5% das colecistectomias laparoscópicas, quase sempre por erro de identificação: o ducto hepático comum ou o colédoco é tomado pelo cístico e clipado. Para evitar isso, Strasberg propôs a <strong>visão crítica de segurança</strong>, que exige três coisas antes de clipar: o triângulo hepatocístico limpo de gordura e tecido fibroso, o terço inferior da vesícula descolado do leito hepático expondo a placa cística, e apenas <strong>duas estruturas</strong>, ducto e artéria císticos, entrando na vesícula. Quando essa visão não é alcançada, as saídas são a colangiografia, a conversão ou a colecistectomia subtotal, nunca a dissecção às cegas.</p>
<p>As variações mais perigosas são o ducto cístico curto ou que desemboca no ducto hepático direito, a artéria hepática direita que faz uma curva junto à vesícula (a "corcova de camelo") e pode ser confundida com a cística, e o ducto hepático direito aberrante que atravessa o triângulo. A inflamação aguda, o sangramento e a obesidade dificultam a visão e aumentam o risco.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, o triângulo "de Calot" cirúrgico é hepático comum, cístico e borda do fígado; a artéria cística é o que está dentro dele. A visão crítica de segurança é a conduta que a banca espera quando a anatomia não está clara, junto com a colangiografia intraoperatória.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Triângulo hepatocístico: ducto hepático comum, ducto cístico e borda inferior do fígado.</li>
<li>Conteúdo: artéria cística, linfonodo de Mascagni, variações anatômicas.</li>
<li>Lesão da via biliar em 0,3 a 0,5%, por erro de identificação.</li>
<li>Visão crítica de segurança: triângulo limpo, placa cística exposta, duas estruturas apenas.</li>
<li>Sem visão crítica: colangiografia, conversão ou colecistectomia subtotal.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual estrutura é o conteúdo, e não o limite, do triângulo hepatocístico? <details><summary>Resposta</summary>A artéria cística, acompanhada do linfonodo de Mascagni.</details></li>
<li>Quais são os três critérios da visão crítica de segurança? <details><summary>Resposta</summary>Triângulo hepatocístico livre de gordura e fibrose, terço inferior da vesícula descolado do leito, e apenas duas estruturas entrando na vesícula.</details></li>
</ol>
`,

"sirio2026#37": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar os nervos em risco na endarterectomia carotídea e o déficit de cada lesão.</li>
<li>Localizar o trajeto do hipoglosso em relação à bifurcação carotídea.</li>
<li>Rever as indicações da endarterectomia na estenose carotídea.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nervo hipoglosso</dt>
<dd>XII par craniano, motor da língua; cruza as carótidas 2 a 3 cm acima da bifurcação, acompanhado da alça cervical e da veia facial.</dd>
<dt>Nervo vago</dt>
<dd>X par, corre no feixe carotídeo entre a carótida e a jugular, posteriormente; dá os nervos laríngeos superior e recorrente.</dd>
<dt>Ramo marginal da mandíbula</dt>
<dd>Ramo do facial que corre junto ao ângulo da mandíbula; sua lesão produz queda do canto da boca.</dd>
<dt>Endarterectomia carotídea</dt>
<dd>Remoção da placa ateromatosa da bifurcação carotídea por arteriotomia, indicada na estenose sintomática de 50 a 99% e em casos selecionados de estenose assintomática acima de 70%.</dd>
</dl>
<h4>O essencial</h4>
<p>A endarterectomia reduz o risco de AVC na estenose carotídea sintomática e deve ser feita em até duas semanas do evento. O acesso é por incisão ao longo do esternocleidomastóideo, com exposição da carótida comum, da bifurcação e das carótidas interna e externa. Nesse campo passam nervos cuja lesão responde por 5 a 10% das complicações, a maioria transitória.</p>
<p>O <strong>nervo hipoglosso</strong> é o mais exposto: desce entre a jugular interna e a carótida interna, faz uma curva anterior e cruza as carótidas interna e externa alguns centímetros acima da bifurcação, rumo à língua. A alça cervical e a veia facial o marcam. Sua lesão causa <strong>desvio da língua para o lado operado</strong>, disartria e dificuldade de mastigar; lesão bilateral, em cirurgias dos dois lados, pode obstruir a via aérea. O <strong>vago</strong> fica posterior, no feixe, e pode ser clampeado junto com a carótida; a lesão dá disfonia, por paralisia da corda vocal pelo recorrente, e disfagia. O <strong>laríngeo superior</strong>, perto da carótida externa, produz voz fatigável e aspiração. O <strong>ramo marginal da mandíbula</strong> do facial se lesa pela tração do afastador no ângulo da mandíbula, com queda do lábio. O <strong>glossofaríngeo</strong> está em risco só nas exposições altas.</p>
<p>A prevenção é a dissecção cuidadosa junto à parede do vaso, sem tração excessiva, com identificação do hipoglosso antes de clampear a carótida interna alta. O nervo acessório, do trapézio, e o auriculotemporal, sensitivo, não fazem parte do campo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Memorize o déficit de cada nervo: hipoglosso, língua desvia para o lado da lesão; vago e recorrente, rouquidão; laríngeo superior, voz fraca e engasgos; marginal da mandíbula, boca torta. A pergunta "qual nervo preservar para evitar disfunção motora da língua" só tem uma resposta anatômica.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Endarterectomia: estenose sintomática de 50 a 99%, em até duas semanas do evento.</li>
<li>Hipoglosso cruza as carótidas acima da bifurcação; lesão desvia a língua para o lado operado.</li>
<li>Vago e recorrente: disfonia; laríngeo superior: voz fatigável e aspiração.</li>
<li>Ramo marginal da mandíbula: queda do lábio pela tração do afastador.</li>
<li>Lesão de nervo craniano em 5 a 10%, a maioria transitória.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Para que lado a língua desvia na lesão unilateral do hipoglosso? <details><summary>Resposta</summary>Para o lado da lesão, porque o genioglosso do lado sadio empurra a língua para o lado paralisado.</details></li>
<li>Que referência anatômica ajuda a localizar o hipoglosso durante a dissecção carotídea? <details><summary>Resposta</summary>A alça cervical, que dele se origina, e a veia facial, que cruza a carótida logo abaixo do nervo.</details></li>
</ol>
`,

"sirio2026#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever o espaço pré-peritoneal e o orifício miopectíneo de Fruchaud.</li>
<li>Localizar a coroa mortis e o triângulo da perdição e explicar por que não se fixa tela neles.</li>
<li>Conhecer o triângulo da dor e os nervos em risco no reparo laparoscópico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Ligamento de Cooper</dt>
<dd>Ligamento pectíneo, espessamento do periósteo do ramo superior do púbis; ponto de fixação medial da tela.</dd>
<dt>Coroa mortis</dt>
<dd>Anastomose entre os sistemas obturatório e epigástrico inferior ou ilíaco externo que cruza o ramo púbico, lateral ao ligamento de Cooper; presente em cerca de um terço das pessoas.</dd>
<dt>Triângulo da perdição</dt>
<dd>Área entre o ducto deferente, medialmente, e os vasos espermáticos, lateralmente, com os vasos ilíacos externos no fundo.</dd>
<dt>Triângulo da dor</dt>
<dd>Área lateral aos vasos espermáticos e abaixo do trato iliopúbico, onde correm os nervos cutâneo femoral lateral e genitofemoral.</dd>
</dl>
<h4>O essencial</h4>
<p>O reparo laparoscópico, por via totalmente extraperitoneal (TEP) ou transabdominal pré-peritoneal (TAPP), coloca uma tela grande no espaço pré-peritoneal cobrindo o <strong>orifício miopectíneo de Fruchaud</strong>, por onde saem as hérnias direta, indireta e femoral. A dissecção abre o espaço de Retzius, medialmente, e o de Bogros, lateralmente, e identifica o ligamento de Cooper, os vasos epigástricos inferiores, o trato iliopúbico, o ducto deferente e os vasos espermáticos.</p>
<p>Três zonas merecem respeito. A <strong>coroa mortis</strong> é a anastomose arterial ou venosa que cruza o ramo superior do púbis, lateral ao ligamento de Cooper; um grampo ou uma dissecção bruta nessa região produz sangramento retroperitoneal difícil de controlar, daí o nome "coroa da morte". O <strong>triângulo da perdição</strong> guarda os vasos ilíacos externos e os espermáticos; a fixação ali é proibida. O <strong>triângulo da dor</strong>, lateral e inferior ao trato iliopúbico, abriga os nervos cutâneo femoral lateral e o ramo femoral do genitofemoral; grampos nessa área causam dor crônica e parestesia da coxa. Por isso os grampos, quando usados, limitam-se ao ligamento de Cooper, acima do trato iliopúbico, e a fixação com cola ou a tela autofixante são preferidas.</p>
<p>A artéria epigástrica inferior nasce da ilíaca externa, sobe medialmente ao anel inguinal profundo e separa a hérnia direta da indireta; a circunflexa ilíaca profunda segue lateralmente, junto à crista ilíaca; os vasos vesicais e pudendos ficam fora do campo habitual.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sangramento arterial ao manipular a face lateral do ligamento de Cooper é coroa mortis; dor crônica na face anterolateral da coxa após reparo laparoscópico é grampo no triângulo da dor; lesão vascular catastrófica é o triângulo da perdição. A prova costuma descrever a situação e pedir a estrutura responsável.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>TEP e TAPP cobrem o orifício miopectíneo com tela pré-peritoneal.</li>
<li>Coroa mortis: anastomose obturatória-epigástrica sobre o púbis, lateral ao Cooper, em um terço das pessoas.</li>
<li>Triângulo da perdição: vasos ilíacos e espermáticos; nunca grampear.</li>
<li>Triângulo da dor: nervos cutâneo femoral lateral e genitofemoral abaixo do trato iliopúbico.</li>
<li>Grampos só no ligamento de Cooper e acima do trato iliopúbico; cola ou tela autofixante são preferidas.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Onde está a coroa mortis e por que ela é perigosa? <details><summary>Resposta</summary>Sobre o ramo superior do púbis, lateral ao ligamento de Cooper; sua lesão sangra em retroperitônio profundo e é difícil de controlar por laparoscopia.</details></li>
<li>Que estruturas delimitam o triângulo da perdição? <details><summary>Resposta</summary>O ducto deferente medialmente e os vasos espermáticos lateralmente, com os vasos ilíacos externos no seu interior.</details></li>
</ol>
`,

"sirio2026#39": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a irrigação do baço e do estômago a partir do tronco celíaco.</li>
<li>Explicar por que a gastroepiploica esquerda e os vasos curtos são poupados na esplenectomia.</li>
<li>Rever as indicações e os cuidados da esplenectomia eletiva, incluindo a vacinação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Artéria esplênica</dt>
<dd>Ramo do tronco celíaco que corre pela borda superior do pâncreas e se divide no hilo; emite ramos pancreáticos, a gastroepiploica esquerda e os vasos gástricos curtos.</dd>
<dt>Vasos gástricos curtos</dt>
<dd>Quatro a seis ramos da esplênica ou de seus ramos terminais que irrigam o fundo gástrico pelo ligamento gastroesplênico.</dd>
<dt>Arco da grande curvatura</dt>
<dd>Anastomose entre a gastroepiploica esquerda, da esplênica, e a gastroepiploica direita, da gastroduodenal.</dd>
<dt>Sepse pós-esplenectomia</dt>
<dd>Infecção fulminante por encapsulados (pneumococo, meningococo, Haemophilus) no esplenectomizado; prevenida por vacinação e educação do paciente.</dd>
</dl>
<h4>O essencial</h4>
<p>O estômago tem irrigação redundante: a gástrica esquerda (do tronco celíaco) e a gástrica direita (da hepática) formam o arco da pequena curvatura; a <strong>gastroepiploica esquerda</strong> (da esplênica) e a gastroepiploica direita (da gastroduodenal) formam o arco da grande curvatura; e os <strong>vasos curtos</strong> irrigam o fundo. O baço recebe a artéria esplênica, que antes do hilo também nutre o corpo e a cauda do pâncreas.</p>
<p>Na <strong>esplenectomia</strong>, a sequência é abrir o ligamento gastroesplênico ligando os vasos curtos rente ao baço, liberar os ligamentos esplenofrênico e esplenocólico, e ligar a artéria e a veia esplênicas no hilo, de preferência nos ramos terminais, para não lesar a cauda do pâncreas e para poupar a gastroepiploica esquerda quando ela nasce proximalmente.</p>
<p>As indicações eletivas incluem púrpura trombocitopênica refratária, anemias hemolíticas, hiperesplenismo, sequestro esplênico recorrente na doença falciforme e algumas neoplasias. Antes da cirurgia, idealmente duas semanas antes, vacina-se contra pneumococo, meningococo e Haemophilus; depois, antibiótico profilático em crianças e orientação para procurar atendimento a qualquer febre. A trombose da veia porta e a leucocitose com plaquetose reativa são complicações a vigiar.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A prova pergunta "qual artéria preservar para manter o suprimento do estômago": é a gastroepiploica esquerda, com os vasos curtos. A gástrica esquerda e a gastroepiploica direita vêm de outros troncos e não são tocadas no hilo esplênico; a esplênica proximal é justamente a que se liga.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Estômago: arcos da pequena curvatura (gástricas) e da grande curvatura (gastroepiploicas) mais vasos curtos no fundo.</li>
<li>Esplênica: ramos pancreáticos, gastroepiploica esquerda, vasos curtos, ramos terminais do hilo.</li>
<li>Ligar no hilo e rente ao baço; poupar a gastroepiploica esquerda e não queimar o fundo gástrico.</li>
<li>Vacinar contra encapsulados antes da esplenectomia eletiva.</li>
<li>Complicações: isquemia do fundo, lesão da cauda do pâncreas, trombose portal, sepse fulminante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais vasos irrigam o fundo gástrico e são manipulados na esplenectomia? <details><summary>Resposta</summary>Os vasos gástricos curtos e a gastroepiploica esquerda, ramos da artéria esplênica que passam pelo ligamento gastroesplênico.</details></li>
<li>Contra quais agentes se vacina antes da esplenectomia eletiva? <details><summary>Resposta</summary>Pneumococo, meningococo e Haemophilus influenzae tipo b, idealmente duas semanas antes da cirurgia.</details></li>
</ol>
`,

"sirio2026#40": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever a irrigação do cólon e as suas anastomoses marginais.</li>
<li>Localizar os pontos de Griffiths e de Sudeck e explicar sua vulnerabilidade.</li>
<li>Comparar ligadura alta e baixa da mesentérica inferior na cirurgia do reto.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Artéria marginal de Drummond</dt>
<dd>Arcada paralela ao cólon formada pelos ramos das mesentéricas superior e inferior; conecta os dois territórios.</dd>
<dt>Ponto de Griffiths</dt>
<dd>Ângulo esplênico, fronteira entre a cólica média e a cólica esquerda, onde a arcada marginal é fina ou ausente em até metade das pessoas.</dd>
<dt>Ponto de Sudeck</dt>
<dd>Junção retossigmoide, entre a última sigmoidea e a retal superior, onde a anastomose pode ser insuficiente.</dd>
<dt>Ligadura alta (high-tie)</dt>
<dd>Secção da mesentérica inferior na origem aórtica, para linfadenectomia completa; a ligadura baixa preserva a cólica esquerda.</dd>
</dl>
<h4>O essencial</h4>
<p>A <strong>mesentérica superior</strong> irriga o delgado e o cólon direito até o terço proximal do transverso, pela ileocólica, cólica direita e cólica média; a <strong>mesentérica inferior</strong> nasce da aorta 3 a 4 cm acima da bifurcação e dá a cólica esquerda, duas a quatro sigmoideas e termina como <strong>retal superior</strong>. Os territórios se ligam pela artéria marginal de Drummond e, de modo inconstante, pelo arco de Riolan, mais central. O reto distal recebe ainda as retais médias e inferiores, da ilíaca interna, o que lhe dá segurança vascular.</p>
<p>Dois pontos têm colateral fraca. O <strong>ponto de Griffiths</strong>, no ângulo esplênico, é o mais conhecido: na isquemia mesentérica não oclusiva e na hipotensão prolongada é a área que mais sofre, e após ligadura da mesentérica inferior o cólon esquerdo depende dessa arcada. O <strong>ponto de Sudeck</strong>, na junção retossigmoide, fica entre a última sigmoidea e a retal superior; quando a mesentérica inferior é ligada na origem, o coto do sigmoide que vai para a anastomose pode ficar mal perfundido ali.</p>
<p>Na cirurgia do câncer de reto, a <strong>ligadura alta</strong> permite linfadenectomia até a origem e maior mobilidade do cólon para uma anastomose sem tensão, mas sacrifica a cólica esquerda e deixa o cólon descendente dependente da arcada marginal pelo ângulo esplênico. A <strong>ligadura baixa</strong>, abaixo da cólica esquerda, preserva o fluxo e tem fístula anastomótica semelhante ou menor nos estudos, com sobrevida oncológica igual. Quando se opta pela ligadura alta, confirma-se a perfusão da borda de secção pela cor, pelo sangramento arterial e, se disponível, pela fluorescência com indocianina verde, e muda-se o nível da secção se houver dúvida.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Griffiths é ângulo esplênico; Sudeck é junção retossigmoide; Riolan é inconstante e não garante nada. Isquemia focal do coto após high-tie é Sudeck, e a lição prática é checar a perfusão antes de anastomosar ou preservar a cólica esquerda e a retal superior quando a oncologia permite.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mesentérica inferior: cólica esquerda, sigmoideas e retal superior; ligada na cirurgia do reto.</li>
<li>Arcada marginal de Drummond conecta os territórios; arco de Riolan é inconstante.</li>
<li>Griffiths (ângulo esplênico) e Sudeck (junção retossigmoide) são os pontos frágeis.</li>
<li>Ligadura alta: mais linfonodos e mobilidade, mais risco de isquemia do coto.</li>
<li>Avaliar a perfusão da borda antes da anastomose; indocianina verde ajuda.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Onde fica o ponto de Sudeck e entre quais artérias? <details><summary>Resposta</summary>Na junção retossigmoide, entre a última artéria sigmoidea e a artéria retal superior.</details></li>
<li>O que a ligadura alta da mesentérica inferior ganha e o que arrisca? <details><summary>Resposta</summary>Ganha linfadenectomia completa e mobilidade do cólon; arrisca isquemia do cólon descendente e do coto retossigmoide, dependentes das arcadas marginais.</details></li>
</ol>
`,

/* --- Volume 2 · Cirurgia · Sírio-Libanês 2027 (cir66–cir80) --------------------------- */
"sirio2027#21": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Explicar o encadeamento fisiopatológico entre acidose, hipotermia e coagulopatia.</li>
<li>Reconhecer a coagulopatia induzida pelo trauma como fenômeno precoce e multifatorial.</li>
<li>Descrever as medidas que interrompem o ciclo: controle de danos e ressuscitação hemostática.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tríade letal</dt>
<dd>Acidose, hipotermia e coagulopatia que se alimentam mutuamente no choque hemorrágico e marcam o ponto em que a cirurgia definitiva deve dar lugar ao controle de danos.</dd>
<dt>Coagulopatia induzida pelo trauma</dt>
<dd>Distúrbio da coagulação presente em um quarto dos traumatizados graves já na admissão, por lesão tecidual, choque, ativação da proteína C, fibrinólise e consumo.</dd>
<dt>Cirurgia de controle de danos</dt>
<dd>Laparotomia abreviada para hemostasia e controle de contaminação, abdome aberto temporário, ressuscitação na UTI e reoperação programada em 24 a 48 horas.</dd>
<dt>Déficit de bases</dt>
<dd>Medida da acidose metabólica na gasometria; valores abaixo de -6 indicam choque grave e pior prognóstico.</dd>
</dl>
<h4>O essencial</h4>
<p>No choque hemorrágico a oferta de oxigênio não cobre a demanda, as células migram para a glicólise anaeróbia, produzem <strong>lactato</strong> e consomem bicarbonato: instala-se a <strong>acidose metabólica</strong>, medida pelo lactato e pelo déficit de bases.</p>
<p>Acidose e hipotermia agridem a <strong>coagulação</strong>: as enzimas da cascata perdem atividade a cada grau e a cada décimo de pH perdido, as plaquetas aderem e agregam menos, e a fibrinólise se acelera. Somam-se o consumo de fatores nas lesões, a diluição pelos cristaloides, a ativação da proteína C pelo choque e a hipocalcemia dos hemoderivados citratados. O resultado é a coagulopatia, que perpetua o sangramento, aprofunda o choque e fecha o círculo.</p>
<p>Romper o ciclo exige agir nas três pontas ao mesmo tempo. A cirurgia de <strong>controle de danos</strong> para o sangramento e a contaminação em menos de uma hora e devolve o paciente à UTI para aquecimento ativo, correção da acidose pela restauração da perfusão, e transfusão balanceada de plasma, plaquetas e hemácias, guiada por tromboelastografia quando disponível, com ácido tranexâmico e cálcio.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Os gatilhos para abreviar a cirurgia são temperatura abaixo de 34 graus, pH abaixo de 7,2, coagulopatia clínica, transfusão acima de 10 unidades e instabilidade persistente. Na prova, a explicação correta da tríade sempre começa na hipoperfusão, passa pelo lactato e pela falência energética e termina nas enzimas da coagulação; bicarbonato como solução é sempre distrator.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hipoperfusão produz lactato e acidose; a falência energética e a exposição produzem hipotermia.</li>
<li>Acidose e frio inativam enzimas e plaquetas e aceleram a fibrinólise: coagulopatia.</li>
<li>Coagulopatia perpetua o sangramento e o choque; o ciclo se autoalimenta.</li>
<li>Controle de danos, aquecimento, transfusão balanceada e ácido tranexâmico quebram o ciclo.</li>
<li>Bicarbonato não trata a acidose do choque nem restaura a coagulação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a hipotermia piora o sangramento? <details><summary>Resposta</summary>Porque reduz a atividade das enzimas da cascata da coagulação e a função plaquetária, e aumenta a fibrinólise.</details></li>
<li>Quais parâmetros indicam abreviar a cirurgia e partir para o controle de danos? <details><summary>Resposta</summary>Temperatura abaixo de 34 graus, pH abaixo de 7,2, coagulopatia clínica, grande volume transfundido e instabilidade que persiste apesar da ressuscitação.</details></li>
</ol>
`,

"sirio2027#24": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Escolher o tratamento do cálculo renal pelo tamanho, pela localização e pela composição.</li>
<li>Descrever a nefrolitotomia percutânea, suas indicações e complicações.</li>
<li>Situar a litotripsia extracorpórea e a ureteroscopia flexível na escala terapêutica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Nefrolitotomia percutânea</dt>
<dd>Acesso ao sistema coletor por punção lombar guiada por imagem, dilatação do trajeto e fragmentação com retirada do cálculo pelo nefroscópio.</dd>
<dt>Litotripsia extracorpórea por ondas de choque</dt>
<dd>Fragmentação do cálculo por ondas focalizadas através da pele; melhor para cálculos renais menores que 1 a 1,5 cm, não muito duros e sem obstáculo distal.</dd>
<dt>Ureteroscopia flexível</dt>
<dd>Acesso retrógrado ao rim pelo ureter com fragmentação a laser; indicada em cálculos de 1 a 2 cm, polo inferior e anatomia desfavorável à litotripsia.</dd>
<dt>Cálculo coraliforme</dt>
<dd>Cálculo que ocupa a pelve e os cálices, em geral de estruvita e infeccioso; tratamento percutâneo, às vezes em mais de um acesso.</dd>
</dl>
<h4>O essencial</h4>
<p>O cálculo renal assintomático pequeno pode ser observado. Quando há dor, infecção, obstrução, crescimento ou profissão de risco, trata-se, e a escolha segue o <strong>tamanho</strong>.</p>
<p>A técnica se faz em decúbito ventral ou dorsal, com punção do cálice posterior guiada por fluoroscopia ou ultrassom, passagem de fio-guia, dilatação até 24 a 30 French (ou miniaturizada, 12 a 20 French) e introdução do nefroscópio, por onde o cálculo é quebrado com ultrassom, energia balística ou laser e aspirado. Termina-se com nefrostomia ou sem tubo. As complicações são sangramento, que pode exigir transfusão ou embolização em 1 a 3%, febre e sepse, lesão de pleura nos acessos altos e lesão de cólon, rara.</p>
<p>A litotripsia extracorpórea perde eficácia com cálculos grandes, densos (acima de 1.000 unidades Hounsfield), de cistina ou de oxalato monoidratado, e no paciente obeso; produz a "rua de cálculos" quando muitos fragmentos descem juntos. A ureteroscopia rígida alcança o ureter, não os cálices; a flexível alcança o rim, mas para cálculos acima de 2 cm exige múltiplas sessões. A cirurgia aberta ou laparoscópica ficou restrita a anatomias complexas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A régua da prova: até 5 ou 6 mm no ureter, expulsivo com alfabloqueador; renal até 1 cm, litotripsia ou ureteroscopia; 1 a 2 cm, ureteroscopia flexível ou litotripsia; acima de 2 cm ou coraliforme, percutânea. Qualquer opção que ofereça litotripsia como "preferencial para cálculos maiores que 2 cm" está errada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tratar o cálculo renal sintomático, obstrutivo, infectado ou em crescimento.</li>
<li>Abaixo de 1 cm: litotripsia extracorpórea ou ureteroscopia; 1 a 2 cm: ureteroscopia flexível ganha.</li>
<li>Acima de 2 cm e coraliforme: nefrolitotomia percutânea, limpeza acima de 90%.</li>
<li>Complicações da percutânea: sangramento, sepse, lesão pleural ou colônica.</li>
<li>Litotripsia falha em cálculos grandes, densos, de cistina e no polo inferior.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>A partir de que tamanho a nefrolitotomia percutânea é a primeira escolha? <details><summary>Resposta</summary>Acima de 2 cm, e em qualquer cálculo coraliforme.</details></li>
<li>Por que a litotripsia extracorpórea não é boa opção para cálculos grandes? <details><summary>Resposta</summary>Porque a fragmentação é incompleta, os fragmentos numerosos obstruem o ureter (rua de cálculos) e são necessárias várias sessões, com taxa de limpeza baixa.</details></li>
</ol>
`,

"sirio2027#25": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Listar as alterações fisiológicas da gestação que modificam a resposta ao trauma.</li>
<li>Reconhecer a hipotensão supina e executar o deslocamento uterino à esquerda.</li>
<li>Ordenar as prioridades: a mãe primeiro, avaliação fetal e indicações de cesárea de emergência.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipotensão supina</dt>
<dd>Queda da pressão em decúbito dorsal, no terceiro trimestre, pela compressão da veia cava inferior pelo útero, com queda de até 30% do débito cardíaco.</dd>
<dt>Deslocamento uterino</dt>
<dd>Inclinação da gestante 15 a 30 graus para a esquerda, com coxim sob a prancha ou empurrando o útero manualmente, mantendo a coluna alinhada.</dd>
<dt>Hipervolemia gestacional</dt>
<dd>Aumento de 40 a 50% do volume plasmático, que permite perda de 1.200 a 1.500 mL antes de sinais de choque, à custa da perfusão placentária.</dd>
<dt>Imunoglobulina anti-D</dt>
<dd>Profilaxia da aloimunização em toda gestante Rh negativa com trauma abdominal, pelo risco de hemorragia feto-materna.</dd>
</dl>
<h4>O essencial</h4>
<p>A gestante traumatizada é atendida com as mesmas prioridades do ATLS, e o melhor tratamento do feto é reanimar a mãe.</p>
<p>A partir de 20 semanas, o útero em decúbito dorsal comprime a <strong>veia cava inferior</strong> e, em menor grau, a aorta: o retorno venoso cai, o débito cardíaco despenca e surge a <strong>hipotensão supina</strong>, que simula hemorragia. A correção é imediata e simples: inclinar a gestante para a <strong>esquerda</strong>, elevando o lado direito da prancha com coxim, ou deslocar o útero manualmente para a esquerda, sempre mantendo a imobilização da coluna.</p>
<p>Outras particularidades: o diafragma elevado em 4 cm exige dreno de tórax um ou dois espaços mais altos; a motilidade gástrica reduzida aumenta o risco de aspiração; a bexiga e o útero ficam expostos a lesões; o descolamento de placenta pode ocorrer sem sinais externos, e a monitorização fetal por pelo menos 4 a 6 horas é indicada acima de 20 a 24 semanas. Exames de imagem necessários não devem ser omitidos pela gravidez.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Gestante hipotensa em prancha, sem sangramento evidente, que melhora ao reposicionar: hipotensão supina por compressão da cava, resolvida com inclinação à esquerda. Na prova, a opção que fala de compressão da aorta "com aumento da pré-carga", ou de manter o decúbito dorsal, está errada; a correta sempre menciona a cava, o retorno venoso e o lado esquerdo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Reanimar a mãe é tratar o feto; prioridades do ATLS inalteradas.</li>
<li>Hipervolemia mascara a hemorragia; o sofrimento fetal é o primeiro sinal.</li>
<li>Acima de 20 semanas, decúbito dorsal comprime a cava: inclinar 15 a 30 graus à esquerda.</li>
<li>Dreno torácico mais alto, risco de aspiração, anti-D na Rh negativa, monitorização fetal.</li>
<li>Cesárea perimortem em até 4 a 5 minutos de parada materna.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual o mecanismo da hipotensão supina na gestante e como corrigi-la? <details><summary>Resposta</summary>Compressão da veia cava inferior pelo útero, com queda do retorno venoso; corrige-se inclinando a gestante para a esquerda ou deslocando o útero manualmente, com a coluna imobilizada.</details></li>
<li>Por que a gestante pode estar em choque com sinais vitais normais? <details><summary>Resposta</summary>Porque a hipervolemia de 40 a 50% permite perder 1.200 a 1.500 mL antes de taquicardia e hipotensão, enquanto a perfusão uteroplacentária já está reduzida.</details></li>
</ol>
`,

"sirio2027#27": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o choque hemorrágico e reconhecer o não respondedor.</li>
<li>Explicar a hipotensão permissiva e suas exceções.</li>
<li>Descrever a ressuscitação hemostática: proporção 1:1:1, ácido tranexâmico, cálcio e metas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hipotensão permissiva</dt>
<dd>Aceitar PAS de 80 a 90 mmHg, ou pulso radial palpável com consciência preservada, até o controle cirúrgico do sangramento, para não deslocar o coágulo nem diluir o sangue.</dd>
<dt>Ressuscitação hemostática</dt>
<dd>Reposição precoce com hemocomponentes em proporção balanceada, mínimo cristaloide, ácido tranexâmico, cálcio e aquecimento.</dd>
<dt>Classes de choque hemorrágico</dt>
<dd>Classe I até 15% da volemia; II, 15 a 30%, com taquicardia; III, 30 a 40%, com hipotensão; IV, acima de 40%, com rebaixamento e pulso filiforme.</dd>
<dt>Protocolo de transfusão maciça</dt>
<dd>Liberação em pacotes de plasma, plaquetas e hemácias, ativada por escores como ABC (penetrante, FAST positivo, PAS abaixo de 90, FC acima de 120) ou pela resposta transitória.</dd>
</dl>
<h4>O essencial</h4>
<p>A resposta ao volume inicial classifica o paciente: o <strong>respondedor</strong> estabiliza e permite investigar; o <strong>respondedor transitório</strong> melhora e volta a piorar, sinal de sangramento ativo; o <strong>não respondedor</strong> segue instável e precisa de controle definitivo imediato e de sangue. O paciente penetrante, com FAST positivo, em choque classe III ou IV, pertence ao último grupo e vai para a cirurgia enquanto a ressuscitação acontece.</p>
<p>Até a hemostasia, a meta pressórica é moderada. Elevar a pressão com cristaloide antes de parar o sangramento aumenta a perda: dilui fatores e plaquetas, esfria, desloca o trombo que se formara no vaso lesado e eleva o fluxo pelo orifício.</p>
<p>A <strong>ressuscitação hemostática</strong> repõe o que foi perdido: plasma, plaquetas e hemácias em proporção próxima de 1:1:1, mostrada pelo PROPPR como mais eficaz em reduzir a morte por exsanguinação, ou sangue total quando disponível. O cristaloide aquecido limita-se a cerca de 1 litro. O ácido tranexâmico, 1 g em 10 minutos e 1 g em 8 horas, dentro de três horas do trauma, reduz a mortalidade. O cálcio é reposto porque o citrato dos hemoderivados o quela e a hipocalcemia agrava a coagulopatia e a hipotensão.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A frase da prova é "PAS 80 a 90 até a hemostasia, minimizar cristaloide, transfusão balanceada 1:1:1". Metas de PAS 110 a 120 com 2 litros de cristaloide, vasopressor de início, bicarbonato para lactato e hemácias isoladas até hemoglobina 10 são as versões erradas do mesmo cenário. Se houver TCE, a hipotensão permissiva deixa de valer.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Não respondedor: controle cirúrgico imediato com ressuscitação em paralelo.</li>
<li>Hipotensão permissiva (PAS 80 a 90) até a hemostasia, exceto no TCE e na lesão medular.</li>
<li>Cristaloide até 1 litro; depois plasma, plaquetas e hemácias em 1:1:1 ou sangue total.</li>
<li>Ácido tranexâmico em até três horas; repor cálcio; aquecer.</li>
<li>Vasopressor só como ponte; bicarbonato sem papel.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Em que paciente a hipotensão permissiva está contraindicada? <details><summary>Resposta</summary>No traumatismo craniencefálico e na lesão medular, em que a meta é PAS acima de 110 mmHg para preservar a perfusão do sistema nervoso.</details></li>
<li>Qual a dose e a janela do ácido tranexâmico no trauma? <details><summary>Resposta</summary>1 g intravenoso em 10 minutos seguido de 1 g em 8 horas, iniciado dentro de três horas do trauma.</details></li>
</ol>
`,

"sirio2027#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar hérnia redutível, encarcerada e estrangulada pela clínica.</li>
<li>Decidir entre cirurgia eletiva, redução manual e cirurgia de urgência.</li>
<li>Conhecer as opções de reparo e a conduta na hérnia gigante com perda de domicílio.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hérnia encarcerada</dt>
<dd>Hérnia irredutível, por aderência do conteúdo ao saco ou por volume; pode ser aguda e dolorosa ou crônica e assintomática.</dd>
<dt>Hérnia estrangulada</dt>
<dd>Encarceramento com comprometimento vascular da alça: dor intensa, hérnia tensa e dolorosa, sinais inflamatórios locais, obstrução e, tarde, peritonite e sepse.</dd>
<dt>Redução em massa</dt>
<dd>Complicação da redução forçada em que o saco herniário e seu conteúdo são empurrados para o abdome ainda encarcerados, mantendo a obstrução oculta.</dd>
<dt>Perda de domicílio</dt>
<dd>Hérnia gigante cujo conteúdo não cabe mais na cavidade abdominal; exige preparo com pneumoperitônio progressivo ou toxina botulínica antes do reparo.</dd>
</dl>
<h4>O essencial</h4>
<p>A hérnia <strong>redutível</strong> volta ao abdome espontaneamente ou com manobra suave; a <strong>encarcerada</strong> não volta, mas o conteúdo está íntegro; a <strong>estrangulada</strong> tem a alça isquêmica.</p>
<p>A conduta segue essa divisão. Hérnia encarcerada aguda, recente, sem sinais de estrangulamento, pode ser reduzida com analgesia, sedação leve, Trendelenburg e pressão suave e constante (taxis), seguindo-se cirurgia programada em dias; manobras vigorosas são proibidas pelo risco de rompimento da alça e de redução em massa. Hérnia <strong>estrangulada</strong> ou com qualquer suspeita de sofrimento de alça é cirurgia de <strong>urgência</strong>, com inspeção do conteúdo, ressecção se inviável e reparo, com tela se o campo não estiver contaminado.</p>
<p>O reparo eletivo da hérnia inguinal usa tela, pela técnica de Lichtenstein aberta ou por via laparoscópica; na hérnia inguinoescrotal volumosa, a via aberta costuma ser preferida e o saco pode ser deixado in situ no escroto para evitar hematoma. Hérnias gigantes com perda de domicílio exigem tomografia para medir o volume e preparo pré-operatório. Cintas e fundas não tratam, podem lesar o conteúdo e só se justificam em pacientes inoperáveis.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hérnia há anos, irredutível, indolor, com ruídos dentro dela e trânsito normal é encarcerada crônica: eletiva. Hérnia tensa, dolorosa, vermelha, com vômitos é estrangulada: urgência. A armadilha da prova é confundir irredutibilidade com emergência, e a outra é "reduzir com manobras vigorosas", sempre errada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Redutível, encarcerada (irredutível com alça viva) e estrangulada (alça isquêmica).</li>
<li>Estrangulamento: dor intensa, hérnia tensa, pele vermelha, obstrução, toxemia; cirurgia de urgência.</li>
<li>Encarcerada aguda sem estrangulamento: taxis suave e cirurgia em dias.</li>
<li>Encarcerada crônica assintomática: avaliação pré-operatória e reparo eletivo com tela.</li>
<li>Cintas não tratam; redução forçada pode romper a alça ou reduzir em massa.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais sinais indicam estrangulamento numa hérnia irredutível? <details><summary>Resposta</summary>Dor intensa e contínua, hérnia tensa e muito dolorosa, eritema ou equimose da pele, vômitos e parada de eliminação, febre, taquicardia e peritonismo.</details></li>
<li>O que é redução em massa? <details><summary>Resposta</summary>Empurrar para o abdome o saco herniário com o conteúdo ainda encarcerado dentro dele, o que mantém a obstrução e a isquemia fora da vista do examinador.</details></li>
</ol>
`,

"sirio2027#29": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar a doutrina de Monro-Kellie e a curva pressão-volume intracraniana.</li>
<li>Reconhecer os sinais clínicos de hipertensão intracraniana e de herniação.</li>
<li>Ordenar as medidas de tratamento da hipertensão intracraniana por níveis.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doutrina de Monro-Kellie</dt>
<dd>O volume intracraniano, soma de parênquima, sangue e líquor, é constante; um volume novo só é tolerado se outro componente diminuir.</dd>
<dt>Complacência intracraniana</dt>
<dd>Capacidade de acomodar volume sem elevar a pressão; alta no início, quando líquor e sangue venoso são deslocados, e esgotada depois.</dd>
<dt>Pressão de perfusão cerebral</dt>
<dd>Pressão arterial média menos pressão intracraniana; cai quando a pressão intracraniana sobe, com isquemia global.</dd>
<dt>Herniação uncal</dt>
<dd>Deslocamento do úncus temporal pela incisura tentorial, comprimindo o III nervo (pupila dilatada ipsilateral) e o pedúnculo cerebral (hemiparesia contralateral).</dd>
</dl>
<h4>O essencial</h4>
<p>A pressão intracraniana normal é de 5 a 15 mmHg. Quando um hematoma, um edema ou um tumor acrescenta volume, o organismo desloca líquor para o saco dural espinhal e espreme o sangue venoso dos seios: a pressão quase não muda. Esse é o trecho plano da <strong>curva pressão-volume</strong>, e explica o intervalo lúcido do hematoma extradural e a aparente estabilidade de pacientes com lesões em expansão.</p>
<p>A pressão alta reduz a perfusão (PAM menos PIC), causa isquemia difusa e desloca o tecido pelas aberturas rígidas: herniação subfalcina, uncal, central e tonsilar. Os sinais clínicos são cefaleia, vômitos, rebaixamento progressivo, pupila dilatada e fixa do lado da lesão, hemiparesia contralateral (ou ipsilateral, pelo fenômeno de Kernohan), postura em extensão e a tríade de Cushing: hipertensão, bradicardia e respiração irregular, que anuncia a herniação iminente.</p>
<p>O tratamento é escalonado. Primeiro nível: cabeceira a 30 graus com o pescoço alinhado, sedação e analgesia, normotermia, normocapnia, sódio e glicemia normais, drenagem de líquor pelo cateter ventricular quando há. Segundo nível: osmoterapia com manitol 0,25 a 1 g/kg ou salina hipertônica, hiperventilação breve como ponte. Terceiro nível, refratário: craniectomia descompressiva, coma barbitúrico, hipotermia controlada em casos selecionados.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, a resposta certa sobre Monro-Kellie sempre tem duas partes: compensação inicial por deslocamento de líquor e sangue venoso, e aumento exponencial da pressão depois. Afirmações de que o crânio "comporta expansão", de que a perfusão "aumenta" com a pressão intracraniana ou de que a compensação se faz "aumentando o líquor" invertem o conceito.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Volume intracraniano fixo: parênquima, sangue e líquor; novo volume exige deslocar outro.</li>
<li>Compensação por saída de líquor e sangue venoso; depois, curva exponencial.</li>
<li>Pressão de perfusão cerebral = PAM menos PIC; alvo 60 a 70 mmHg.</li>
<li>Sinais: rebaixamento, pupila dilatada ipsilateral, hemiparesia, tríade de Cushing.</li>
<li>Tratamento escalonado: posição, sedação, líquor, osmoterapia, cirurgia descompressiva.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o paciente com hematoma em expansão pode parecer estável no início? <details><summary>Resposta</summary>Porque a compensação pela saída de líquor e sangue venoso mantém a pressão intracraniana no trecho plano da curva até esgotar a reserva de volume.</details></li>
<li>Qual a tríade de Cushing e o que ela anuncia? <details><summary>Resposta</summary>Hipertensão arterial, bradicardia e respiração irregular, sinais de hipertensão intracraniana grave com herniação iminente.</details></li>
</ol>
`,

"sirio2027#30": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o pneumotórax espontâneo em primário e secundário e estimar seu tamanho.</li>
<li>Escolher entre observação, aspiração, drenagem e cirurgia conforme a evolução.</li>
<li>Conhecer as indicações da videotoracoscopia com pleurodese.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pneumotórax espontâneo primário</dt>
<dd>Ar no espaço pleural sem trauma e sem doença pulmonar conhecida; típico de homens jovens, altos, magros e fumantes, por ruptura de blebs apicais.</dd>
<dt>Pneumotórax espontâneo secundário</dt>
<dd>Pneumotórax em pulmão doente (DPOC, fibrose cística, pneumocistose, tuberculose); pior tolerado e tratado de forma mais agressiva.</dd>
<dt>Cateter de pequeno calibre</dt>
<dd>Dreno de 8 a 14 French, tipo pigtail, inserido por Seldinger; equivale ao dreno grosso no pneumotórax não traumático, com menos dor.</dd>
<dt>Pleurodese</dt>
<dd>Aderência da pleura visceral à parietal por abrasão mecânica, pleurectomia apical ou talco, para impedir recidivas.</dd>
</dl>
<h4>O essencial</h4>
<p>O pneumotórax espontâneo primário tem recidiva de 30% após o primeiro episódio e raramente é fatal; a conduta depende do <strong>tamanho</strong> e dos <strong>sintomas</strong>. As diretrizes britânicas medem a distância entre a parede e o pulmão no nível do hilo: pequeno abaixo de 2 cm, grande acima; a norte-americana usa 3 cm no ápice.</p>
<p>Quando o pneumotórax é grande, quando há dispneia significativa ou quando ele <strong>aumenta na reavaliação</strong>, a conduta conservadora falhou e é preciso tirar o ar. A <strong>aspiração simples</strong> com agulha ou cateter resolve metade dos casos e pode ser a primeira tentativa; a <strong>drenagem com cateter fino</strong> em selo d'água ou com válvula de Heimlich é a opção equivalente e permite alta precoce em pacientes selecionados. O dreno tubular grosso fica para o pneumotórax traumático com hemotórax e para o paciente ventilado.</p>
<p>A <strong>cirurgia</strong>, por videotoracoscopia, com ressecção das blebs e pleurodese por abrasão ou pleurectomia apical, é indicada no segundo episódio ipsilateral, no primeiro episódio contralateral, no pneumotórax bilateral, na fuga aérea persistente além de 3 a 5 dias, no hemopneumotórax, em profissões de risco (pilotos, mergulhadores) e na gestação. O pneumotórax secundário, por sua vez, costuma ser drenado já no primeiro episódio e operado mais cedo. Parar de fumar reduz a recidiva.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>A sequência da prova: pequeno e assintomático, observar; cresceu ou sintomático, drenar com cateter fino ou aspirar; recidiva, fuga persistente ou bilateral, operar. "Videotoracoscopia imediata" no primeiro episódio e "alta com retorno em 24 horas" para quem está piorando são os distratores opostos.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Primário: jovem, alto, fumante, blebs apicais; recidiva de 30%.</li>
<li>Pequeno (menos de 2 cm no hilo) e pouco sintomático: observação com controle radiológico.</li>
<li>Grande, sintomático ou em expansão: aspiração ou drenagem com cateter fino.</li>
<li>Cirurgia com pleurodese: recidiva, fuga aérea persistente, bilateral, profissão de risco.</li>
<li>Secundário: drenar no primeiro episódio e operar mais cedo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como a diretriz britânica define o pneumotórax pequeno? <details><summary>Resposta</summary>Distância entre a parede torácica e o pulmão menor que 2 cm no nível do hilo.</details></li>
<li>Quais são as indicações de videotoracoscopia no pneumotórax espontâneo? <details><summary>Resposta</summary>Recidiva, primeiro episódio contralateral ou bilateral, fuga aérea persistente além de 3 a 5 dias, hemopneumotórax e profissões de risco como pilotos e mergulhadores.</details></li>
</ol>
`,

"sirio2027#31": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Descrever as reconstruções após gastrectomia distal: Billroth I, Billroth II e Y de Roux.</li>
<li>Diferenciar as síndromes pós-gastrectomia pela clínica e pelo tempo após a refeição.</li>
<li>Explicar a má absorção de B12 e a esteatorreia por estase na alça aferente.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Alça aferente</dt>
<dd>No Billroth II, o segmento de duodeno e jejuno proximal que traz bile e suco pancreático até a gastrojejunostomia, sem receber alimento.</dd>
<dt>Síndrome de dumping</dt>
<dd>Precoce, 15 a 30 minutos após comer, com sintomas vasomotores e gastrointestinais por chegada rápida de conteúdo hiperosmolar ao jejuno; tardia, 1 a 3 horas, por hipoglicemia reativa.</dd>
<dt>Gastrite alcalina de refluxo</dt>
<dd>Dor epigástrica contínua, vômito bilioso que não alivia e perda de peso pelo refluxo de bile ao remanescente gástrico.</dd>
<dt>Supercrescimento bacteriano</dt>
<dd>Proliferação de bactérias num segmento intestinal estagnado, que consomem B12 e desconjugam sais biliares, com anemia macrocítica e esteatorreia.</dd>
</dl>
<h4>O essencial</h4>
<p>Após a gastrectomia distal, o remanescente gástrico pode ser ligado ao duodeno (<strong>Billroth I</strong>), ao jejuno em alça (<strong>Billroth II</strong>), com o duodeno fechado formando a alça aferente, ou ao jejuno em <strong>Y de Roux</strong>, com a bile desembocando 40 a 60 cm abaixo. Cada montagem tem suas complicações, e o Billroth II concentra as síndromes de alça.</p>
<p>A <strong>síndrome da alça aferente</strong> é a obstrução parcial da alça que traz as secreções biliopancreáticas. Após a refeição, a secreção se acumula na alça fechada, que distende e dói em cólica epigástrica; quando a pressão vence a obstrução, o conteúdo é despejado no estômago e sai como <strong>vômito bilioso, volumoso, em jato, sem alimento, que alivia a dor</strong>. A obstrução completa aguda é emergência cirúrgica, com risco de necrose e pancreatite.</p>
<p>As outras síndromes se distinguem pela cronologia e pela natureza do vômito: a <strong>alça eferente</strong> obstruída vomita alimento misturado a bile e dá quadro de obstrução alta; o <strong>dumping precoce</strong> traz sudorese, palpitação, tontura e diarreia logo após comer, tratado com dieta fracionada, pobre em açúcares e com líquidos entre as refeições, e octreotida nos refratários; o <strong>dumping tardio</strong> é hipoglicemia reativa; a <strong>gastrite alcalina</strong> tem dor contínua e vômito bilioso que não alivia, tratada com conversão em Y de Roux; a <strong>úlcera marginal</strong> sangra e dói na anastomose, com anemia ferropriva.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Vômito bilioso em jato que alivia a dor, sem alimento, mais anemia macrocítica e fezes gordurosas em Billroth II é alça aferente. Vômito bilioso que não alivia, com dor contínua, é gastrite alcalina. Sudorese e diarreia meia hora após comer é dumping. A prova troca esses três com frequência.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Billroth II cria a alça aferente, que conduz bile e suco pancreático sem alimento.</li>
<li>Alça aferente: cólica pós-prandial, vômito bilioso em jato que alivia, sem comida.</li>
<li>Estase na alça: supercrescimento bacteriano, déficit de B12 e esteatorreia.</li>
<li>Tratamento cirúrgico: conversão para Y de Roux ou anastomose de Braun.</li>
<li>Dumping, alça eferente, gastrite alcalina e úlcera marginal têm cronologia e vômito distintos.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o vômito da alça aferente não contém alimento? <details><summary>Resposta</summary>Porque a alça aferente só recebe bile e suco pancreático; o alimento segue do estômago para a alça eferente.</details></li>
<li>Qual o mecanismo da anemia macrocítica nessa síndrome? <details><summary>Resposta</summary>O supercrescimento bacteriano na alça estagnada consome a vitamina B12 antes que ela seja absorvida no íleo.</details></li>
</ol>
`,

"sirio2027#32": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar os critérios NEXUS e a regra canadense para liberar a coluna cervical sem imagem.</li>
<li>Escolher o exame de imagem quando ele está indicado.</li>
<li>Reconhecer o paciente que não pode ser liberado clinicamente e o papel da ressonância.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Critérios NEXUS</dt>
<dd>Sem dor na linha média cervical, sem déficit neurológico focal, alerta e orientado, sem intoxicação e sem lesão distratora dolorosa: cinco critérios que, juntos, liberam a coluna.</dd>
<dt>Regra canadense da coluna cervical</dt>
<dd>Sem fator de alto risco (idade acima de 65, mecanismo perigoso, parestesia), com fator de baixo risco e rotação ativa de 45 graus para cada lado: sem imagem.</dd>
<dt>Lesão distratora</dt>
<dd>Lesão dolorosa, como fratura de osso longo ou queimadura extensa, capaz de desviar a atenção do paciente de uma dor cervical.</dd>
<dt>Restrição de movimento da coluna</dt>
<dd>Termo atual para a imobilização com colar e alinhamento, mantida até a liberação clínica ou radiológica.</dd>
</dl>
<h4>O essencial</h4>
<p>Todo paciente com trauma de alta energia ou mecanismo compatível chega com restrição de movimento da coluna, mas o colar não é inócuo: causa úlceras, dificulta a via aérea e eleva a pressão intracraniana. A pergunta é quem pode ser liberado sem exame.</p>
<p>A <strong>regra canadense</strong> é um pouco mais específica: exclui primeiro os fatores de alto risco, idade acima de 65 anos, mecanismo perigoso (queda acima de 1 metro ou cinco degraus, carga axial na cabeça como no mergulho, colisão acima de 100 km/h, capotamento, ejeção, atropelamento, veículo recreativo) e parestesias; depois exige um fator de baixo risco, como colisão traseira simples, paciente sentado ou deambulando, dor de início tardio e ausência de dor à palpação da linha média; e por fim pede rotação ativa de 45 graus para os dois lados.</p>
<p>Quando a imagem é necessária, o exame é a <strong>tomografia</strong> da coluna cervical, que substituiu as radiografias em três incidências pela maior sensibilidade. Pacientes rebaixados ou intubados com tomografia normal de boa qualidade podem ter o colar removido na maioria dos protocolos atuais; a <strong>ressonância</strong> fica para déficit neurológico com tomografia normal, suspeita de lesão ligamentar e dor persistente.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Jovem acordado, sóbrio, sem dor, sem déficit e sem outra lesão dolorosa: colar fora, sem radiografia nem tomografia. Idade acima de 65, mergulho, queda de altura ou qualquer dor na linha média: tomografia. Álcool, rebaixamento ou fratura de fêmur: não liberar pela clínica. Essa é a lógica que a prova cobra.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>NEXUS: alerta, sem intoxicação, sem dor na linha média, sem déficit, sem lesão distratora.</li>
<li>Regra canadense: sem alto risco, com baixo risco e rotação de 45 graus para cada lado.</li>
<li>Preenchidos os critérios, o colar sai sem imagem.</li>
<li>Imagem indicada: tomografia, não radiografia em três incidências.</li>
<li>Ressonância para déficit com tomografia normal ou suspeita de lesão ligamentar.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os cinco critérios NEXUS? <details><summary>Resposta</summary>Ausência de dor na linha média cervical, ausência de déficit neurológico focal, nível de consciência normal, ausência de intoxicação e ausência de lesão distratora dolorosa.</details></li>
<li>Cite três mecanismos considerados perigosos pela regra canadense. <details><summary>Resposta</summary>Queda acima de 1 metro ou cinco degraus, carga axial na cabeça (mergulho), colisão em alta velocidade, capotamento ou ejeção, atropelamento e acidente com veículo recreativo.</details></li>
</ol>
`,

"sirio2027#33": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir sepse e choque séptico pelos critérios atuais e reconhecê-los no pós-operatório.</li>
<li>Executar o pacote da primeira hora da campanha Surviving Sepsis.</li>
<li>Escolher o antibiótico empírico para o foco biliar e abdominal e planejar o descalonamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Sepse</dt>
<dd>Disfunção orgânica ameaçadora à vida causada por resposta desregulada à infecção; na prática, aumento de 2 ou mais pontos no SOFA.</dd>
<dt>Choque séptico</dt>
<dd>Sepse com necessidade de vasopressor para PAM de 65 mmHg e lactato acima de 2 mmol/L apesar de volume adequado.</dd>
<dt>Pacote da primeira hora</dt>
<dd>Medir lactato, colher hemoculturas, iniciar antibiótico de amplo espectro, infundir 30 mL/kg de cristaloide se hipotensão ou lactato acima de 4, e vasopressor se a PAM continuar baixa.</dd>
<dt>Descalonamento</dt>
<dd>Ajuste do antibiótico para espectro mais estreito, ou suspensão, quando as culturas e a evolução permitem, em geral em 48 a 72 horas.</dd>
</dl>
<h4>O essencial</h4>
<p>No pós-operatório, febre e taquicardia podem ser atelectasia, infecção de ferida, infecção urinária, pneumonia, tromboembolismo, coleção intra-abdominal, fístula ou infecção de cateter; quando se somam hipotensão, taquipneia, oligúria, confusão ou <strong>lactato elevado</strong>, o quadro é <strong>sepse</strong> e o relógio começa a correr. A mortalidade cresce cerca de 7% por hora de atraso do antibiótico no choque séptico, e a campanha Surviving Sepsis condensou as medidas iniciais no <strong>pacote da primeira hora</strong>.</p>
<p>As medidas são simultâneas: dosar o lactato e repeti-lo em 2 a 4 horas se alto; colher <strong>duas hemoculturas</strong> e culturas do foco provável antes do antibiótico, desde que isso não atrase a dose em mais de 45 minutos; iniciar <strong>antibiótico venoso de amplo espectro</strong> em até uma hora; infundir <strong>30 mL/kg</strong> de cristaloide balanceado nas primeiras três horas se há hipotensão ou lactato acima de 4; e começar <strong>noradrenalina</strong> se a PAM ficar abaixo de 65 mmHg apesar do volume, com reavaliação dinâmica da resposta a fluidos depois.</p>
<p>No foco biliar e intra-abdominal pós-operatório, os agentes são enterobactérias, enterococos, anaeróbios e, no paciente hospitalizado, Pseudomonas e produtores de betalactamase de espectro estendido; a escolha empírica é piperacilina-tazobactam ou carbapenêmico em casos graves ou com fatores de risco para resistência, considerando a flora local.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipotensão, lactato alto e febre no pós-operatório: hemoculturas e antibiótico empírico de amplo espectro imediatos, volume e lactato seriado. Qualquer opção que condicione o antibiótico ao resultado de cultura, à estabilização prévia, à vaga de UTI ou ao parecer de outro especialista está errada.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sepse: disfunção orgânica por infecção; choque séptico: vasopressor e lactato acima de 2.</li>
<li>Primeira hora: lactato, hemoculturas, antibiótico de amplo espectro, 30 mL/kg se hipotensão, noradrenalina se PAM menor que 65.</li>
<li>Culturas antes do antibiótico, sem atrasá-lo além de 45 minutos.</li>
<li>Controle da fonte em 6 a 12 horas é tão importante quanto o antibiótico.</li>
<li>Descalonar em 48 a 72 horas pelas culturas; duração curta após controle da fonte.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os critérios de choque séptico? <details><summary>Resposta</summary>Necessidade de vasopressor para manter PAM de 65 mmHg e lactato acima de 2 mmol/L apesar de reposição volêmica adequada.</details></li>
<li>Quando o antibiótico pode esperar a coleta das culturas? <details><summary>Resposta</summary>Só se a coleta não atrasar a primeira dose em mais de 45 minutos; caso contrário, o antibiótico é dado primeiro.</details></li>
</ol>
`,

"sirio2027#35": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Estratificar o risco de coledocolitíase pelos critérios da ASGE.</li>
<li>Indicar a colangiografia intraoperatória como ferramenta de segurança e de diagnóstico.</li>
<li>Comparar as estratégias de tratamento do cálculo de colédoco: CPRE antes, depois ou exploração laparoscópica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Colangiografia intraoperatória</dt>
<dd>Injeção de contraste pelo ducto cístico com fluoroscopia durante a colecistectomia; desenha a via biliar e detecta cálculos no colédoco.</dd>
<dt>Preditores de coledocolitíase</dt>
<dd>Muito fortes: cálculo visto no colédoco, colangite, bilirrubina acima de 4; fortes: colédoco dilatado acima de 6 mm, bilirrubina de 1,8 a 4; moderados: enzimas alteradas, idade acima de 55, pancreatite biliar.</dd>
<dt>Colangiopancreatografia endoscópica retrógrada</dt>
<dd>Acesso endoscópico à papila com papilotomia e retirada de cálculos; terapêutica, com risco de pancreatite em 3 a 5%.</dd>
<dt>Exploração laparoscópica da via biliar</dt>
<dd>Retirada do cálculo pelo cístico ou por coledocotomia no mesmo ato da colecistectomia, em centros com experiência.</dd>
</dl>
<h4>O essencial</h4>
<p>Cerca de 10 a 15% dos pacientes com colelitíase sintomática têm cálculo no colédoco. A ASGE divide o risco em alto (preditor muito forte ou dois fortes), que indica CPRE antes da colecistectomia; intermediário (um preditor forte ou moderados), que pede confirmação por colangiorressonância, ecoendoscopia ou <strong>colangiografia intraoperatória</strong>; e baixo, que vai direto à colecistectomia.</p>
<p>A colangiografia intraoperatória tem dois papéis. O primeiro é <strong>diagnóstico</strong>: detecta coledocolitíase com sensibilidade acima de 90% no grupo intermediário, evitando CPRE desnecessárias.</p>
<p>Encontrado o cálculo, há três caminhos: exploração laparoscópica transcística ou por coledocotomia na mesma cirurgia, CPRE no pós-operatório, com stent deixado se houver dúvida, ou CPRE intraoperatória combinada (rendez-vous), em centros equipados. A conversão para cirurgia aberta não esclarece a anatomia por si e fica para quando a dissecção segura é impossível; interromper a cirurgia para uma segunda abordagem só se justifica sem recursos.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Anatomia duvidosa mais risco intermediário de coledocolitíase é a dupla indicação de colangiografia intraoperatória. Risco alto, com colangite, bilirrubina acima de 4 ou cálculo visto no ultrassom, é CPRE antes de operar. Converter para aberta ou parar a cirurgia são os distratores que parecem prudentes mas não respondem à dúvida.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Coledocolitíase em 10 a 15% das colelitíases; risco pela ASGE em alto, intermediário e baixo.</li>
<li>Alto: CPRE pré-operatória; intermediário: colangiorressonância, ecoendoscopia ou colangiografia intraoperatória.</li>
<li>Colangiografia intraoperatória: diagnóstico de cálculo e mapa da anatomia quando a visão crítica falha.</li>
<li>Cálculo achado: exploração laparoscópica, CPRE pós-operatória ou rendez-vous.</li>
<li>Conversão não esclarece anatomia; serve quando a dissecção segura é impossível.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais preditores colocam o paciente no risco alto de coledocolitíase? <details><summary>Resposta</summary>Cálculo visualizado no colédoco, colangite aguda, bilirrubina acima de 4 mg/dL, ou dois preditores fortes como colédoco acima de 6 mm e bilirrubina entre 1,8 e 4.</details></li>
<li>Como se realiza a colangiografia intraoperatória? <details><summary>Resposta</summary>Clipa-se o cístico junto à vesícula, abre-se o ducto, introduz-se um cateter e injeta-se contraste sob fluoroscopia, observando as vias intra-hepáticas, o colédoco, a passagem ao duodeno e falhas de enchimento.</details></li>
</ol>
`,

"sirio2027#36": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar torção testicular, torção de apêndice testicular e orquiepididimite.</li>
<li>Relacionar o tempo de isquemia à viabilidade do testículo.</li>
<li>Decidir entre exploração imediata e ultrassom com Doppler e justificar a orquidopexia bilateral.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Torção do cordão espermático</dt>
<dd>Rotação do testículo sobre o cordão com oclusão venosa e depois arterial; pico na adolescência e no período neonatal.</dd>
<dt>Deformidade em badalo de sino</dt>
<dd>Inserção alta da túnica vaginal que deixa o testículo suspenso e livre para girar; presente nos dois lados em boa parte dos pacientes.</dd>
<dt>Sinal de Prehn</dt>
<dd>Alívio da dor ao elevar o testículo na orquiepididimite e ausência de alívio na torção; pouco confiável, mas clássico.</dd>
<dt>Reflexo cremastérico</dt>
<dd>Elevação do testículo ao estimular a face interna da coxa; sua ausência é o sinal mais sensível de torção.</dd>
</dl>
<h4>O essencial</h4>
<p>O escroto agudo tem três causas principais. A <strong>torção testicular</strong> é súbita, intensa, com náuseas e vômitos, testículo elevado e horizontalizado, reflexo cremastérico ausente e, às vezes, história de episódios anteriores que cederam sozinhos; acomete sobretudo meninos de 12 a 18 anos. A <strong>torção de apêndice testicular</strong> é mais insidiosa, em meninos de 7 a 12 anos, com dor localizada no polo superior e o "ponto azul" visível pela pele; trata-se com repouso e anti-inflamatório.</p>
<p>O tempo decide o destino do testículo: a viabilidade é de 90 a 100% até <strong>6 horas</strong>, 50% entre 6 e 12 horas e abaixo de 10% depois de 24 horas. Por isso, no quadro clínico típico, o diagnóstico é clínico e a conduta é a <strong>exploração cirúrgica imediata</strong>, sem exames que atrasem; o ultrassom com Doppler, com sensibilidade de 80 a 90%, fica para os casos de dúvida, e um Doppler com fluxo presente não exclui torção parcial ou intermitente.</p>
<p>Na cirurgia, destorce-se o cordão, envolve-se o testículo em compressas mornas e avalia-se a viabilidade; o testículo viável é fixado em três pontos (<strong>orquidopexia</strong>), o inviável é retirado. O testículo <strong>contralateral</strong> é fixado no mesmo ato, porque a deformidade em badalo de sino costuma ser bilateral e a torção do único testículo restante seria catastrófica. O escore TWIST (edema, endurecimento, reflexo ausente, náuseas, testículo alto) ajuda a triar quem vai direto à cirurgia e quem faz Doppler.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Adolescente com dor escrotal súbita há poucas horas, testículo alto e edemaciado: cirurgia agora, orquidopexia bilateral. Pedir Doppler em quadro típico, dar antibiótico e reavaliar em 48 horas, ou "esperar melhorar a dor" são as três formas de perder o testículo que a prova oferece como distratores.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Torção: súbita, intensa, testículo alto e horizontal, reflexo cremastérico ausente, 12 a 18 anos.</li>
<li>Viabilidade: quase total até 6 horas, metade até 12, quase nula após 24.</li>
<li>Quadro típico: exploração imediata; Doppler só na dúvida e sem atrasar.</li>
<li>Destorção, avaliação da viabilidade, orquidopexia ou orquiectomia; fixar o contralateral sempre.</li>
<li>Apêndice torcido: ponto azul, conservador; orquiepididimite: febre, piúria, antibiótico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual sinal de exame físico é o mais sensível para torção testicular? <details><summary>Resposta</summary>A ausência do reflexo cremastérico do lado afetado.</details></li>
<li>Por que se fixa o testículo contralateral na cirurgia da torção? <details><summary>Resposta</summary>Porque a deformidade em badalo de sino que permite a torção costuma ser bilateral, e a torção do testículo restante levaria à anorquia.</details></li>
</ol>
`,

"sirio2027#38": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar as indicações e contraindicações da toracotomia de reanimação.</li>
<li>Descrever os objetivos técnicos do procedimento.</li>
<li>Comparar o prognóstico no trauma penetrante e no fechado.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Toracotomia de reanimação</dt>
<dd>Toracotomia anterolateral esquerda feita na sala de emergência em paciente em parada ou agonia por trauma, para aliviar tamponamento, controlar hemorragia e clampear a aorta.</dd>
<dt>Sinais de vida</dt>
<dd>Reatividade pupilar, movimentos respiratórios, atividade elétrica organizada, pulso ou pressão mensuráveis, movimentos espontâneos.</dd>
<dt>Atividade elétrica sem pulso</dt>
<dd>Ritmo organizado no monitor sem pulso palpável; no trauma, indica tamponamento, hipovolemia extrema ou pneumotórax hipertensivo, causas potencialmente reversíveis.</dd>
<dt>Clampeamento aórtico</dt>
<dd>Oclusão da aorta torácica descendente para redistribuir o fluxo ao coração e ao cérebro e reduzir a perda abdominal; opção endovascular com balão (REBOA).</dd>
</dl>
<h4>O essencial</h4>
<p>A parada cardíaca traumática raramente responde às manobras convencionais, porque a causa é mecânica: tamponamento, exsanguinação, pneumotórax hipertensivo. A <strong>toracotomia de reanimação</strong> enfrenta essas causas diretamente, mas só compensa quando há chance real de reversão. Os melhores candidatos são as vítimas de <strong>trauma penetrante torácico</strong>, sobretudo por arma branca com lesão cardíaca, que chegam com <strong>sinais de vida</strong> ou cuja parada foi presenciada há menos de 15 minutos; a sobrevida varia de 10 a 35%.</p>
<p>A técnica é a toracotomia anterolateral esquerda no quinto espaço intercostal, estendida ao lado direito (clamshell) quando necessário.</p>
<p>As contraindicações são a parada no trauma fechado sem sinais de vida, a parada penetrante com mais de 15 minutos de reanimação sem resposta, a ausência de equipe capaz de completar o tratamento e a lesão incompatível com a vida. O REBOA, balão de oclusão aórtica por via femoral, é opção ao clampeamento para hemorragia abdominal e pélvica em paciente ainda não parado, mas não substitui a toracotomia no tamponamento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Facada no tórax, chegada em parada com pupilas reativas ou pulso intermitente: toracotomia na sala, agora. Trauma fechado em parada sem sinais de vida: encerrar. Transportar ao centro cirúrgico ou drenar o tórax em quem está parado por tamponamento são erros frequentes nas opções.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Melhor indicação: penetrante torácico com sinais de vida ou parada há menos de 15 minutos.</li>
<li>Trauma fechado: só se parada presenciada, há menos de 10 minutos, com sinais de vida.</li>
<li>Passos: pericardiotomia, controle da lesão cardíaca, massagem interna, hilo pulmonar, clampeamento aórtico.</li>
<li>Sobrevida: 10 a 35% no penetrante torácico, 1 a 2% no fechado.</li>
<li>Contraindicações: fechado sem sinais de vida, parada prolongada, falta de equipe.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são os sinais de vida que justificam a toracotomia de reanimação? <details><summary>Resposta</summary>Pupilas reativas, movimentos respiratórios ou espontâneos, atividade elétrica organizada e pulso ou pressão mensuráveis.</details></li>
<li>Qual o primeiro passo após abrir o tórax? <details><summary>Resposta</summary>Abrir o pericárdio longitudinalmente, anterior ao nervo frênico, para aliviar o tamponamento e expor o coração.</details></li>
</ol>
`,

"sirio2027#39": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar a indicação consensual do filtro de veia cava inferior.</li>
<li>Listar as contraindicações à anticoagulação no politraumatizado.</li>
<li>Planejar a retirada do filtro e a transição para a anticoagulação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Filtro de veia cava inferior</dt>
<dd>Dispositivo metálico implantado por via femoral ou jugular abaixo das veias renais, que retém trombos vindos dos membros inferiores e da pelve.</dd>
<dt>Filtro recuperável</dt>
<dd>Modelo que pode ser retirado por via endovascular quando a anticoagulação se torna possível; deve ser removido em semanas a poucos meses.</dd>
<dt>Trombose iliofemoral</dt>
<dd>Trombose venosa proximal de alto risco embólico e de síndrome pós-trombótica; candidata a trombólise dirigida por cateter em pacientes selecionados.</dd>
<dt>Contraindicação absoluta à anticoagulação</dt>
<dd>Sangramento ativo grave, hemorragia intracraniana recente, cirurgia neurológica ou ocular recente, trauma com lesão sangrante não controlada.</dd>
</dl>
<h4>O essencial</h4>
<p>O tratamento da trombose venosa profunda é a anticoagulação, e as diretrizes são claras ao recomendar <strong>contra</strong> o filtro de veia cava em quem pode ser anticoagulado: o ensaio PREPIC mostrou que o filtro reduz embolia pulmonar precoce mas aumenta a recorrência de trombose, sem ganho de sobrevida. A única indicação consensual é a <strong>trombose proximal ou embolia pulmonar aguda com contraindicação absoluta à anticoagulação</strong>.</p>
<p>No politraumatizado, as contraindicações se acumulam: hemorragia intracraniana, craniectomia ou laparotomia recentes, fraturas pélvicas com sangramento, lesão de órgão sólido em tratamento não operatório, lesão medular com hematoma. O paciente com craniectomia há dois dias por hematoma subdural e trombose iliofemoral extensa é o protótipo: a heparina plena é proibida, a trombólise é proibida, a compressão pneumática não trata trombose instalada, e esperar significa aceitar o risco de embolia maciça.</p>
<p>O filtro é implantado por radiologia intervencionista abaixo das renais, com confirmação da posição; as complicações incluem trombose do próprio filtro, migração, perfuração da cava e trombose da cava a longo prazo. Por isso a regra é <strong>retirar</strong> o filtro assim que a anticoagulação se torne segura, o que exige rastreamento ativo dos pacientes: boa parte dos filtros recuperáveis nunca é removida por perda de seguimento.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Trombose proximal ou embolia mais "não pode anticoagular" é igual a filtro de veia cava; é a única combinação que a prova aceita. Se o paciente pode ser anticoagulado, a resposta é anticoagular, mesmo com câncer ou com trombose extensa. Compressão pneumática é profilaxia, nunca tratamento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Trombose venosa profunda trata-se com anticoagulação; o filtro não substitui.</li>
<li>Filtro indicado na trombose proximal ou embolia aguda com contraindicação absoluta à anticoagulação.</li>
<li>Contraindicações no trauma: hemorragia intracraniana, neurocirurgia recente, sangramento não controlado.</li>
<li>Preferir filtro recuperável e retirá-lo quando a anticoagulação for liberada.</li>
<li>Filtro profilático sem trombose não é recomendado.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que mostrou o estudo PREPIC sobre o filtro de veia cava? <details><summary>Resposta</summary>Redução da embolia pulmonar precoce, mas aumento da recorrência de trombose venosa profunda e nenhum ganho de sobrevida, em pacientes que também recebiam anticoagulação.</details></li>
<li>Quando o filtro recuperável deve ser retirado? <details><summary>Resposta</summary>Assim que a anticoagulação plena se tornar segura e estiver estabelecida, em geral dentro de semanas a poucos meses.</details></li>
</ol>
`,

"sirio2027#40": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir hipertensão intra-abdominal e síndrome compartimental abdominal pelos critérios da WSACS.</li>
<li>Explicar os efeitos da pressão intra-abdominal elevada em cada sistema.</li>
<li>Ordenar as medidas clínicas e indicar a descompressão cirúrgica.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Pressão intra-abdominal</dt>
<dd>Medida pela pressão vesical com 25 mL de soro, em decúbito dorsal, no fim da expiração; normal de 5 a 7 mmHg no adulto crítico.</dd>
<dt>Hipertensão intra-abdominal</dt>
<dd>Pressão sustentada igual ou acima de 12 mmHg, em graus I (12 a 15), II (16 a 20), III (21 a 25) e IV (acima de 25).</dd>
<dt>Síndrome compartimental abdominal</dt>
<dd>Pressão sustentada acima de 20 mmHg com nova disfunção ou falência de órgão.</dd>
<dt>Abdome aberto</dt>
<dd>Laparostomia com curativo a vácuo que mantém as vísceras protegidas enquanto o edema cede, com fechamento progressivo em dias.</dd>
</dl>
<h4>O essencial</h4>
<p>A síndrome compartimental abdominal é primária quando a causa está no abdome (trauma, hemoperitônio, pancreatite, obstrução, empacotamento, fechamento sob tensão) e secundária quando decorre de ressuscitação maciça por choque, queimadura ou sepse, com edema de alças e retroperitônio. O cenário clássico é o politraumatizado que recebeu litros de cristaloide e hemoderivados, foi operado e horas depois tem o abdome tenso.</p>
<p>A pressão alta agride todos os sistemas. <strong>Rim</strong>: compressão das veias renais e do parênquima, oligúria que não responde a volume. <strong>Pulmão</strong>: o diafragma sobe, a complacência cai, as pressões de pico sobem, há hipoxemia e <strong>hipercapnia</strong>. <strong>Circulação</strong>: compressão da veia cava reduz o retorno venoso e o débito, enquanto a pressão intratorácica transmitida eleva falsamente a pressão venosa central. <strong>Intestino</strong>: hipoperfusão, translocação bacteriana e mais edema. <strong>Cérebro</strong>: a pressão venosa alta eleva a pressão intracraniana.</p>
<p>Na hipertensão sem falência de órgão, tratam-se as causas e reduz-se a pressão: sonda nasogástrica e retal, prócinéticos, sedação e analgesia, bloqueio neuromuscular, cabeceira baixa, drenagem percutânea de coleções, balanço hídrico negativo com diurético ou hemofiltração, e evitar fluidos em excesso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Após laparotomia e ressuscitação maciça: abdome distendido, pressões ventilatórias subindo com retenção de CO2, hipotensão que não melhora com volume e oligúria. Esse conjunto é síndrome compartimental, e a resposta é descomprimir. "Mais volume", "antibiótico sem reabordagem" e "observar o íleo" agravam ou ignoram a pressão.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Pressão vesical mede a pressão intra-abdominal; hipertensão a partir de 12 mmHg.</li>
<li>Síndrome compartimental: acima de 20 mmHg com nova disfunção de órgão.</li>
<li>Efeitos: oligúria, hipercapnia e pressões ventilatórias altas, hipotensão com PVC falsamente alta, isquemia intestinal.</li>
<li>Hipertensão sem falência: descompressão gástrica e retal, sedação, bloqueio neuromuscular, balanço negativo, drenagem de coleções.</li>
<li>Síndrome instalada: laparotomia descompressiva e abdome aberto a vácuo.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se mede a pressão intra-abdominal à beira do leito? <details><summary>Resposta</summary>Pela pressão intravesical, instilando 25 mL de soro na bexiga, com o paciente em decúbito dorsal, no fim da expiração, com o transdutor zerado na linha axilar média.</details></li>
<li>Por que a pressão venosa central engana na síndrome compartimental? <details><summary>Resposta</summary>Porque a pressão abdominal se transmite ao tórax e eleva a PVC medida, enquanto o retorno venoso real está reduzido pela compressão da cava.</details></li>
</ol>
`,

/* --- Volume 2 · Cirurgia · UNESP 2025 (cir81–cir90) --------------------------- */
"unesp2025#61": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Organizar a investigação da doença do refluxo: prova terapêutica, endoscopia, pHmetria e manometria.</li>
<li>Reconhecer o refluxo não erosivo e o refluxo refratário.</li>
<li>Saber o que cada exame funcional do esôfago responde.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Doença do refluxo não erosiva</dt>
<dd>Sintomas típicos de refluxo com mucosa esofágica normal à endoscopia; corresponde a 60 a 70% dos casos.</dd>
<dt>pHmetria de 24 horas</dt>
<dd>Cateter transnasal com sensor 5 cm acima do esfíncter inferior; tempo de exposição ácida acima de 6% confirma refluxo patológico (Lyon 2.0), abaixo de 4% exclui.</dd>
<dt>pH-impedanciometria</dt>
<dd>Combina pH com detecção de bolus líquido e gasoso; identifica refluxo não ácido e correlaciona sintomas com episódios.</dd>
<dt>Manometria de alta resolução</dt>
<dd>Mede pressão e coordenação do corpo esofágico e dos esfíncteres; diagnostica acalasia e distúrbios de motilidade, localiza o esfíncter para a pHmetria.</dd>
</dl>
<h4>O essencial</h4>
<p>Diante de pirose e regurgitação típicas, sem sinais de alarme (disfagia, emagrecimento, anemia, sangramento, vômitos, idade acima de 50 anos), a conduta inicial é a <strong>prova terapêutica</strong> com inibidor de bomba de prótons por 4 a 8 semanas.</p>
<p>A endoscopia normal não exclui refluxo. Para o paciente com sintomas persistentes e mucosa íntegra, os exames que confirmam são os <strong>funcionais</strong>. A pHmetria de 24 horas, feita fora do inibidor de bomba por 7 dias, mede o tempo de exposição ácida e o índice de sintomas; a pH-impedanciometria acrescenta o refluxo fracamente ácido e não ácido e é feita em uso da medicação quando a pergunta é por que o paciente não responde.</p>
<p>A <strong>manometria</strong> não mede refluxo: ela caracteriza a motilidade e o esfíncter inferior, exclui acalasia e espasmo que imitam refluxo, e é obrigatória antes da cirurgia antirrefluxo para escolher a técnica. O refluxo <strong>refratário</strong> verdadeiro, confirmado pelos exames, com hérnia e esfíncter hipotônico, é candidato à fundoplicatura; o paciente com exames normais tem pirose funcional ou esôfago hipersensível, que não se opera e trata-se com neuromoduladores.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Sintomas típicos, falha do inibidor de bomba e endoscopias normais: pHmetria para provar o refluxo. Disfagia e regurgitação de alimento: manometria para procurar acalasia. Disfagia em jovem atópico com endoscopia mostrando anéis e sulcos: biópsias para esofagite eosinofílica. Cada exame responde a uma pergunta diferente, e a prova cobra qual.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Sintomas típicos sem alarme: prova terapêutica com inibidor de bomba por 4 a 8 semanas.</li>
<li>Falha ou alarme: endoscopia, que confirma só se houver esofagite C ou D, estenose ou Barrett.</li>
<li>Endoscopia normal com sintomas persistentes: pHmetria ou pH-impedanciometria.</li>
<li>Manometria caracteriza a motilidade, exclui acalasia e precede a cirurgia.</li>
<li>Exames funcionais normais: pirose funcional, sem cirurgia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achados endoscópicos são prova conclusiva de refluxo pelo consenso de Lyon? <details><summary>Resposta</summary>Esofagite de Los Angeles C ou D, estenose péptica e esôfago de Barrett longo.</details></li>
<li>Qual exame se pede quando o paciente não responde ao inibidor de bomba e a endoscopia é normal? <details><summary>Resposta</summary>A pHmetria de 24 horas fora da medicação, ou a pH-impedanciometria, para medir a exposição ácida e correlacionar sintomas com episódios de refluxo.</details></li>
</ol>
`,

"unesp2025#63": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Aplicar a sequência ABCDE ao motociclista grave que chega com capacete.</li>
<li>Executar a remoção do capacete com dois socorristas e alinhamento cervical.</li>
<li>Reconhecer os sinais de via aérea comprometida e a indicação de via aérea definitiva.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Remoção do capacete a dois</dt>
<dd>Um socorrista estabiliza cabeça e pescoço por baixo, segurando mandíbula e occipício; o outro afasta as laterais do capacete e o desliza para cima e para trás, sem fletir nem estender.</dd>
<dt>Via aérea definitiva</dt>
<dd>Tubo com balonete na traqueia, fixado e conectado a oxigênio; indicada em apneia, Glasgow 8 ou menos, incapacidade de proteger a via aérea, hipoxemia refratária e choque grave.</dd>
<dt>Estabilização manual em linha</dt>
<dd>Manutenção da cabeça alinhada com o tronco pelas mãos do socorrista durante a manipulação da via aérea, substituindo o colar.</dd>
<dt>Respiração ruidosa e paradoxal</dt>
<dd>Roncos, gargarejo e uso de musculatura acessória indicam obstrução parcial; a prioridade é desobstruir e ventilar.</dd>
</dl>
<h4>O essencial</h4>
<p>O motociclista arremessado a 10 metros tem trauma de alta energia e deve ser presumido com lesão cervical até prova em contrário. Mas a proteção da coluna nunca impede a via aérea: o paciente arresponsivo, com respiração ruidosa e saturação de 72%, está morrendo de hipóxia, e tudo o que o <strong>capacete fechado</strong> faz é impedir a inspeção da boca, a aspiração, a elevação da mandíbula, a ventilação com máscara e a laringoscopia.</p>
<p>A <strong>remoção do capacete</strong> é um procedimento de dois socorristas. O primeiro, ao lado, passa as mãos por baixo do capacete e segura a mandíbula e a região occipital, assumindo o controle do pescoço. O segundo, na cabeceira, afasta as bordas laterais do capacete para liberar as orelhas, inclina-o levemente para trás para passar o nariz e o desliza para fora, enquanto o primeiro mantém a cabeça alinhada.</p>
<p>Com a via aérea exposta, aspira-se sangue e secreção, faz-se a elevação da mandíbula sem estender o pescoço, oxigena-se com máscara com reservatório e, no paciente arresponsivo e hipóxico, intuba-se com estabilização manual em linha e sequência rápida, com plano de resgate para via aérea cirúrgica. Só depois vêm os acessos venosos, a reposição com sangue e a busca da fonte do choque.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Na prova, a resposta correta descreve a técnica: "retirar o capacete evitando movimentar a coluna, com auxílio de um segundo socorrista, para abordar a via aérea". Máscara a 10 L/min em paciente arresponsivo, acessos venosos antes da via aérea e cricotireoidostomia como primeira medida são os erros clássicos de ordem.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Capacete integral bloqueia o A: sai antes de qualquer manobra de via aérea.</li>
<li>Remoção a dois: um controla mandíbula e occipício, o outro afasta e desliza o capacete.</li>
<li>Após a remoção, estabilização manual em linha e colar depois.</li>
<li>Arresponsivo, hipóxico e com respiração ruidosa: aspirar, oxigenar e intubar.</li>
<li>Acessos, volume e fonte do choque vêm no C, depois da via aérea e da ventilação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quem controla a coluna cervical durante a retirada do capacete? <details><summary>Resposta</summary>O socorrista posicionado ao lado, com as mãos por baixo do capacete segurando a mandíbula e o occipício, enquanto o outro desliza o capacete.</details></li>
<li>Quais indicações de via aérea definitiva o motociclista do caso apresenta? <details><summary>Resposta</summary>Arresponsividade com incapacidade de proteger a via aérea, respiração ineficaz e hipoxemia grave apesar de oxigênio, além do choque.</details></li>
</ol>
`,

"unesp2025#64": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar choque neurogênico de choque hipovolêmico e de choque medular.</li>
<li>Relacionar o mecanismo de mergulho à lesão cervical e seus níveis.</li>
<li>Descrever o tratamento do choque neurogênico e as metas de pressão.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Choque neurogênico</dt>
<dd>Hipotensão com bradicardia ou frequência normal e pele quente, por perda do tônus simpático na lesão medular acima de T6.</dd>
<dt>Choque medular</dt>
<dd>Perda transitória de reflexos, tônus e sensibilidade abaixo da lesão nos primeiros dias; fenômeno neurológico, não hemodinâmico.</dd>
<dt>Lesão medular completa</dt>
<dd>Ausência de função motora e sensitiva abaixo do nível, incluindo os segmentos sacrais; a preservação sacral define lesão incompleta.</dd>
<dt>Nível neurológico</dt>
<dd>Segmento mais caudal com função motora e sensitiva normais nos dois lados; C5 flexiona o cotovelo, C6 estende o punho, C7 estende o cotovelo, T1 abduz os dedos.</dd>
</dl>
<h4>O essencial</h4>
<p>O mergulho em água rasa produz carga axial sobre a cabeça e fratura ou luxação da coluna cervical, com lesão medular em jovens, muitas vezes alcoolizados. A clínica é a paresia ou plegia abaixo do nível, a perda sensitiva e a disfunção esfincteriana; o álcool e o traumatismo craniano associado confundem o exame, mas a <strong>paraparesia simétrica</strong> aponta para a medula, não para o cérebro, cuja lesão produz déficit focal unilateral ou coma.</p>
<p>O <strong>choque neurogênico</strong> surge nas lesões acima de T6: a interrupção das vias simpáticas descendentes elimina a vasoconstrição e a resposta cronotrópica, enquanto o vago segue íntegro. O resultado é hipotensão com <strong>bradicardia</strong> ou frequência inadequadamente normal, pele quente e seca, e diurese preservada no início, o contrário do choque hemorrágico, que tem taquicardia, extremidades frias e sudorese. A distinção importa porque no politraumatizado os dois podem coexistir, e a hemorragia deve ser excluída com FAST, radiografia de tórax e de pelve antes de atribuir a hipotensão à medula.</p>
<p>O tratamento começa com volume criterioso para repor o conteúdo do leito vascular dilatado, seguido de <strong>vasopressor</strong> com ação alfa e beta, noradrenalina ou dopamina, para corrigir a vasodilatação e a bradicardia; a atropina trata bradicardia sintomática e o marcapasso é raro. A meta recomendada é PAM de 85 a 90 mmHg nos primeiros 5 a 7 dias, para perfundir a medula lesada.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Hipotensão com frequência de 68, paresia de pernas e mergulho: choque neurogênico por lesão cervical baixa ou torácica alta. A prova usa o álcool e a saturação boa como distratores; a resposta lembra que o choque e o déficit têm a mesma causa, a medula, e que 2 litros em bolus são a conduta do choque hemorrágico, não deste.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Mergulho: carga axial, fratura cervical, lesão medular no jovem.</li>
<li>Choque neurogênico: hipotensão com bradicardia e pele quente, lesão acima de T6.</li>
<li>Excluir hemorragia antes de atribuir a hipotensão à medula.</li>
<li>Tratamento: volume cauteloso, noradrenalina, atropina se bradicardia; PAM 85 a 90 por uma semana.</li>
<li>Paraparesia simétrica é medular; lesão cerebral dá déficit focal ou coma.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado distingue o choque neurogênico do hemorrágico à beira do leito? <details><summary>Resposta</summary>A frequência cardíaca: bradicardia ou frequência normal com pele quente no neurogênico; taquicardia com extremidades frias no hemorrágico.</details></li>
<li>Qual a meta de pressão arterial média na lesão medular aguda? <details><summary>Resposta</summary>PAM de 85 a 90 mmHg nos primeiros 5 a 7 dias, para manter a perfusão da medula.</details></li>
</ol>
`,

"unesp2025#65": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar cólica biliar, colecistite aguda e coledocolitíase pela clínica e pelos exames.</li>
<li>Justificar o ultrassom como exame inicial e saber quando a tomografia entra.</li>
<li>Definir corretamente o sinal de Murphy e os critérios de Tóquio.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cólica biliar</dt>
<dd>Dor epigástrica ou no hipocôndrio direito por obstrução transitória do cístico, que dura menos de 6 horas e cede sem febre nem leucocitose.</dd>
<dt>Colecistite aguda</dt>
<dd>Inflamação da vesícula por obstrução persistente do cístico: dor acima de 6 horas, febre, leucocitose e sinal de Murphy; parede espessada e líquido perivesicular ao ultrassom.</dd>
<dt>Sinal de Murphy</dt>
<dd>Interrupção da inspiração profunda por dor quando o examinador comprime o ponto cístico, abaixo do rebordo costal direito.</dd>
<dt>Critérios de Tóquio</dt>
<dd>Diagnóstico de colecistite com sinal local (Murphy ou dor no hipocôndrio), sinal sistêmico (febre, leucocitose, proteína C reativa) e imagem compatível.</dd>
</dl>
<h4>O essencial</h4>
<p>A doença calculosa da vesícula tem espectro. A <strong>cólica biliar</strong> é dor pós-prandial intensa, em geral noturna, que dura de 30 minutos a algumas horas e passa; os exames são normais. A <strong>colecistite aguda</strong> é a dor que não passa, com febre, leucocitose, defesa no hipocôndrio e Murphy positivo; as enzimas podem subir pouco. A <strong>coledocolitíase</strong> acrescenta icterícia, bilirrubina e fosfatase alcalina altas e colédoco dilatado, e a <strong>colangite</strong> soma febre com calafrios à tríade de Charcot.</p>
<p>O <strong>ultrassom</strong> é o primeiro exame em todas essas situações: vê cálculos com sensibilidade acima de 95%, mede a parede (espessada acima de 4 mm), detecta líquido perivesicular e o Murphy ultrassonográfico, mede o colédoco e mostra dilatação intra-hepática. É rápido, barato, sem radiação e repetível.</p>
<p>O tratamento da cólica biliar é analgesia, com anti-inflamatório ou opioide, e colecistectomia eletiva; antibiótico não tem indicação. Na colecistite aguda, hidratação, analgesia, antibiótico contra enterobactérias e <strong>colecistectomia precoce</strong>, nas primeiras 72 horas da internação, com menos complicações e internação mais curta do que a cirurgia tardia; no paciente de alto risco cirúrgico, colecistostomia percutânea. Na pancreatite biliar leve, colecistectomia na mesma internação.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor biliar em mulher obesa de meia-idade com episódios prévios: ultrassom primeiro, sempre. Murphy é a parada da inspiração, não apenas dor. Antibiótico só na colecistite, não na cólica nem na pancreatite leve. Tomografia como primeiro exame em suspeita biliar é o distrator que a prova mais usa.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Cólica biliar: dor que passa em horas, exames normais; colecistite: dor persistente, febre, leucocitose, Murphy.</li>
<li>Ultrassom é o exame inicial: cálculos, parede, líquido perivesicular, colédoco.</li>
<li>Tomografia perde cálculos; serve para complicações e dúvida diagnóstica.</li>
<li>Murphy: interrupção da inspiração à compressão do ponto cístico.</li>
<li>Colecistite: antibiótico e colecistectomia precoce em 72 horas; cólica: analgesia e cirurgia eletiva.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Como se define o sinal de Murphy? <details><summary>Resposta</summary>Pela interrupção súbita da inspiração profunda provocada pela dor ao se comprimir o ponto cístico sob o rebordo costal direito.</details></li>
<li>Por que a tomografia não é o exame inicial na suspeita de colelitíase? <details><summary>Resposta</summary>Porque muitos cálculos são isodensos à bile e passam despercebidos, com sensibilidade de 50 a 75%, enquanto o ultrassom detecta mais de 95% deles sem radiação.</details></li>
</ol>
`,

"unesp2025#67": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a invaginação intestinal pela tríade clínica e pelos sinais de exame.</li>
<li>Confirmar o diagnóstico pelo ultrassom e conhecer os sinais radiológicos.</li>
<li>Indicar a redução por imagem e saber quando a cirurgia é obrigatória.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Invaginação intestinal</dt>
<dd>Telescopagem de um segmento intestinal (intussuscepto) para dentro do segmento distal (intussuscipiente), em geral ileocólica; causa mais comum de obstrução entre 6 meses e 3 anos.</dd>
<dt>Sinal de Dance</dt>
<dd>Fossa ilíaca direita vazia à palpação, porque o ceco foi arrastado para dentro do cólon.</dd>
<dt>Fezes em geleia de framboesa</dt>
<dd>Muco com sangue eliminado pelo reto, sinal tardio de isquemia da mucosa; presente em menos da metade dos casos.</dd>
<dt>Ponto de partida patológico</dt>
<dd>Lesão que inicia a invaginação em crianças maiores e adultos: divertículo de Meckel, pólipo, linfoma, duplicação; em lactentes, hiperplasia linfoide após virose.</dd>
</dl>
<h4>O essencial</h4>
<p>A invaginação típica acomete lactentes de 6 a 24 meses, muitas vezes após infecção viral que hipertrofia as placas de Peyer do íleo terminal e cria o ponto de arrasto. A clínica é a <strong>dor em crises</strong>: o lactente chora, encolhe as pernas e empalidece por alguns minutos, depois fica quieto, prostrado ou sonolento, e as crises se repetem a intervalos de 15 a 30 minutos. Vêm os vômitos, primeiro alimentares e depois biliosos, a recusa alimentar e, tarde, as fezes com muco e sangue.</p>
<p>O <strong>ultrassom</strong> confirma com sensibilidade próxima de 100%: imagem em alvo ou rosquinha no corte transversal e em pseudorrim no longitudinal, e o Doppler avalia a perfusão da alça. A radiografia pode mostrar ausência de gás no quadrante inferior direito e sinal do crescente, mas é dispensável. O diagnóstico diferencial inclui gastroenterite, apendicite (rara nessa idade), volvo, hérnia encarcerada e estenose hipertrófica do piloro no lactente menor.</p>
<p>O tratamento, na criança <strong>estável</strong>, sem peritonite, sem perfuração e sem choque, é a <strong>redução</strong> pneumática ou hidrostática guiada por fluoroscopia ou ultrassom, com sucesso de 80 a 95% e recidiva de cerca de 10%, geralmente nas primeiras 48 horas; o cirurgião deve estar avisado. A <strong>cirurgia</strong> é indicada quando a redução falha, há perfuração, peritonite, choque, sinais de necrose ou ponto de partida patológico suspeito, e consiste em redução manual por ordenha, com ressecção se a alça for inviável.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Lactente com dor paroxística, palidez entre as crises, vômito bilioso, massa à direita e fossa ilíaca vazia: invaginação, ultrassom e redução por imagem. Apendicite é rara antes de 2 anos, enterocolite necrosante é do recém-nascido e áscaris é da criança maior; a prova oferece os três como distratores.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Idade de 6 a 24 meses; íleo terminal entra no cólon após hiperplasia linfoide.</li>
<li>Dor em crises com palidez e letargia entre elas, vômitos, massa em salsicha, sinal de Dance.</li>
<li>Ultrassom em alvo confirma; fezes em geleia de framboesa são tardias.</li>
<li>Estável: redução pneumática ou hidrostática, sucesso de 80 a 95%.</li>
<li>Cirurgia se falha, perfuração, peritonite, choque ou ponto de partida patológico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que é o sinal de Dance? <details><summary>Resposta</summary>A fossa ilíaca direita vazia à palpação, porque o ceco e o íleo terminal foram arrastados para dentro do cólon.</details></li>
<li>Quais condições contraindicam a redução por imagem? <details><summary>Resposta</summary>Peritonite, perfuração com pneumoperitônio, choque ou instabilidade e sinais de necrose intestinal; nesses casos a conduta é cirúrgica.</details></li>
</ol>
`,

"unesp2025#70": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a cólica renal e seus diferenciais.</li>
<li>Escolher o exame de imagem: tomografia sem contraste, ultrassom, radiografia.</li>
<li>Tratar a crise e decidir entre terapia expulsiva e intervenção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Cólica renal</dt>
<dd>Dor lombar intensa, em ondas, irradiada para flanco, virilha e genitais, com náuseas e hematúria, por distensão aguda do sistema coletor obstruído.</dd>
<dt>Tomografia sem contraste</dt>
<dd>Exame padrão da litíase: sensibilidade e especificidade acima de 95%, mostra cálculo, hidronefrose, densidade e diferenciais; protocolo de baixa dose reduz a radiação.</dd>
<dt>Sinal de Giordano</dt>
<dd>Dor à punho-percussão lombar, por distensão da cápsula renal; inespecífico.</dd>
<dt>Terapia expulsiva</dt>
<dd>Alfabloqueador (tansulosina) para cálculos ureterais distais de 5 a 10 mm, com analgesia e hidratação habitual, acompanhada por 4 a 6 semanas.</dd>
</dl>
<h4>O essencial</h4>
<p>A dor da litíase vem da obstrução súbita e do aumento da pressão no sistema coletor, não do cálculo em si; por isso ela é intensa, em cólica, com o paciente agitado, incapaz de achar posição, ao contrário da peritonite, em que ele fica imóvel. Náuseas, vômitos e hematúria microscópica acompanham; febre indica infecção associada e muda tudo. Os diferenciais incluem pielonefrite, apendicite retrocecal, diverticulite, torção de ovário, gravidez ectópica, aneurisma de aorta no idoso e infarto renal.</p>
<p>A <strong>tomografia de abdome e pelve sem contraste</strong> confirma o diagnóstico com acurácia superior a 95%: localiza o cálculo, mede o tamanho e a densidade, que prevê a composição e a resposta à litotripsia, mostra a hidronefrose e o edema perirrenal, e revela os diferenciais. O contraste é desnecessário e atrapalha, porque cálculos e contraste são ambos densos.</p>
<p>A crise se trata com anti-inflamatório não esteroide, mais eficaz que o opioide, antiemético e hidratação normal, sem forçar diurese. Cálculos ureterais abaixo de 5 mm saem espontaneamente em 70 a 90%; entre 5 e 10 mm, a tansulosina aumenta a eliminação, sobretudo nos distais. Indicações de intervenção urgente são obstrução com infecção, que exige descompressão por cateter duplo J ou nefrostomia e antibiótico, rim único, insuficiência renal, dor refratária e obstrução bilateral.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>"Exame para confirmar cólica renal" no adulto não gestante tem uma resposta: tomografia sem contraste. Ultrassom é para gestante e criança; radiografia e urografia são distratores históricos. Cálculo com febre é emergência de drenagem, não de tratamento expulsivo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Dor lombar em cólica irradiada para a virilha, náuseas, hematúria, paciente agitado.</li>
<li>Tomografia sem contraste: padrão-ouro, acima de 95% de acurácia.</li>
<li>Ultrassom na gestante e na criança; radiografia vê só metade dos cálculos.</li>
<li>Anti-inflamatório para a dor; tansulosina para cálculos distais de 5 a 10 mm.</li>
<li>Obstrução com infecção, rim único ou falência renal: descompressão urgente.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que não se usa contraste na tomografia para litíase? <details><summary>Resposta</summary>Porque o contraste excretado no sistema coletor tem a mesma densidade do cálculo e pode escondê-lo; a tomografia sem contraste já alcança acurácia acima de 95%.</details></li>
<li>Qual a conduta no cálculo ureteral obstrutivo com febre? <details><summary>Resposta</summary>Descompressão urgente do sistema coletor com cateter duplo J ou nefrostomia percutânea, culturas e antibiótico; o tratamento definitivo do cálculo fica para depois da infecção.</details></li>
</ol>
`,

"unesp2025#72": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o tamponamento cardíaco pela tríade de Beck e pelo ecocardiograma.</li>
<li>Entender a fisiopatologia do tamponamento e por que diuréticos e vasodilatadores são perigosos.</li>
<li>Escolher entre pericardiocentese e drenagem cirúrgica no pós-operatório cardíaco.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Tamponamento cardíaco</dt>
<dd>Compressão do coração por líquido pericárdico sob pressão, com igualação das pressões diastólicas, colapso das câmaras direitas e queda do débito.</dd>
<dt>Tríade de Beck</dt>
<dd>Hipotensão, turgência jugular e hipofonese de bulhas.</dd>
<dt>Pulso paradoxal</dt>
<dd>Queda inspiratória da pressão sistólica acima de 10 mmHg, pela interdependência ventricular dentro do pericárdio tenso.</dd>
<dt>Síndrome pós-pericardiotomia</dt>
<dd>Pericardite inflamatória com derrame semanas após cirurgia cardíaca, com febre, dor pleurítica e atrito; raramente tampona.</dd>
</dl>
<h4>O essencial</h4>
<p>O pericárdio normal contém 15 a 50 mL de líquido. No derrame agudo, 150 a 200 mL bastam para elevar a pressão intrapericárdica até o nível das pressões diastólicas; no crônico, o pericárdio se distende e tolera litros. Quando a pressão pericárdica iguala a pressão de enchimento do ventrículo direito, o átrio e o ventrículo direitos colapsam na diástole, o volume sistólico cai e o organismo compensa com taquicardia e vasoconstrição, até que a pressão arterial despenque.</p>
<p>No pós-operatório de cirurgia cardíaca, o derrame é frequente e o <strong>tamponamento</strong> ocorre em 1 a 2% dos pacientes, mais nos anticoagulados por prótese mecânica ou fibrilação atrial, nos primeiros dias ou de forma tardia, após uma a três semanas. Pode ser localizado, posterior, e comprimir só o átrio esquerdo, com sinais atípicos; a suspeita vem da hipotensão, da turgência jugular, da oligúria e do baixo débito inexplicados.</p>
<p>O tratamento é a <strong>retirada do líquido</strong>. A pericardiocentese guiada por ecocardiograma é a via de escolha no derrame circunferencial anterior; no pós-operatório recente, com coágulos e derrame posterior loculado, a <strong>drenagem cirúrgica</strong> subxifoide ou a reabertura da esternotomia são preferidas. Enquanto se prepara a drenagem, volume venoso sustenta a pré-carga; <strong>diuréticos e vasodilatadores são contraindicados</strong>, porque reduzem o enchimento, e a ventilação com pressão positiva pode precipitar o colapso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Tríade de Beck no quinto dia de pós-operatório cardíaco em anticoagulado é tamponamento, e a conduta é drenar o pericárdio. Tratar como insuficiência cardíaca com diurético, trocar o anticoagulante ou reoperar para substituir a prótese são as três respostas erradas que a prova oferece.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Tamponamento: pressão pericárdica iguala as pressões diastólicas; colapso das câmaras direitas; choque obstrutivo.</li>
<li>Pós-operatório cardíaco em anticoagulados: 1 a 2%, precoce ou tardio, às vezes loculado.</li>
<li>Tríade de Beck, pulso paradoxal, oligúria; ecocardiograma confirma.</li>
<li>Tratamento: pericardiocentese guiada ou drenagem cirúrgica; volume enquanto se prepara.</li>
<li>Diurético, vasodilatador e pressão positiva agravam; a prótese não é o problema.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que o diurético é perigoso no tamponamento? <details><summary>Resposta</summary>Porque reduz a pressão de enchimento ventricular, que já está comprometida pela compressão pericárdica, e precipita o colapso circulatório.</details></li>
<li>Quando se prefere a drenagem cirúrgica à pericardiocentese? <details><summary>Resposta</summary>No pós-operatório recente de cirurgia cardíaca, com derrame loculado posterior ou com coágulos, e quando a punção é tecnicamente arriscada ou falha.</details></li>
</ol>
`,

"unesp2025#73": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar a queimadura pela profundidade e estimar a extensão.</li>
<li>Tratar a queimadura de espessura parcial: analgesia, limpeza, curativo e tópicos.</li>
<li>Saber quando o antibiótico sistêmico tem e não tem indicação e quais os critérios de internação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Queimadura de segundo grau superficial</dt>
<dd>Lesão da epiderme e derme papilar: bolhas, base rósea e úmida, muito dolorosa, que reepiteliza em 10 a 14 dias sem cicatriz.</dd>
<dt>Queimadura de segundo grau profunda</dt>
<dd>Atinge a derme reticular: base pálida ou mosqueada, menos dolorosa, cicatriza em mais de três semanas com cicatriz e pode exigir enxerto.</dd>
<dt>Sulfadiazina de prata</dt>
<dd>Creme a 1% com ação contra gram-positivos, gram-negativos e fungos; tópico tradicional da queimadura, trocado a cada 12 a 24 horas.</dd>
<dt>Regra dos nove</dt>
<dd>Estimativa da superfície queimada no adulto: cabeça 9%, cada braço 9%, cada perna 18%, tronco anterior 18%, posterior 18%, períneo 1%.</dd>
</dl>
<h4>O essencial</h4>
<p>A profundidade define a dor e a cicatrização. A queimadura de <strong>primeiro grau</strong> atinge só a epiderme, é vermelha, seca e dolorosa, e cura em uma semana. A de <strong>segundo grau superficial</strong> forma bolhas sobre derme rósea e úmida, com terminações nervosas expostas: é a mais dolorosa, e cura sem cicatriz em duas semanas. A <strong>profunda</strong> é pálida, menos sensível, demora semanas e deixa cicatriz. A de <strong>terceiro grau</strong> é branca ou carbonizada, indolor, e exige enxerto.</p>
<p>O atendimento inicial segue o ABCDE quando a queimadura é extensa ou há inalação, e inclui resfriar com água corrente nos primeiros 20 minutos, retirar roupas e adornos, cobrir com pano limpo. Na lesão limitada, a prioridade é a <strong>analgesia</strong> proporcional à dor, venosa com opioide quando a dor é intensa, seguida de limpeza com soro e clorexidina degermante, desbridamento das bolhas rotas e das maiores, e <strong>curativo oclusivo</strong> com tópico.</p>
<p>O <strong>antibiótico sistêmico profilático</strong> não tem lugar: não reduz infecção e seleciona resistência; reserva-se à infecção estabelecida, com celulite, secreção purulenta ou sinais sistêmicos. Internam-se as queimaduras de segundo grau acima de 10% da superfície, de terceiro grau, as de face, mãos, pés, períneo e articulações, as elétricas, químicas e por inalação, e as em extremos de idade ou com comorbidades.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Queimadura recente de segundo grau superficial, pequena, com dor forte: analgesia venosa, limpeza, curativo com sulfadiazina de prata, sem antibiótico sistêmico. Colagenase é desbridante de necrose, não tratamento de derme viva. A prova testa a dupla analgesia e tópico, e o não ao antibiótico profilático.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Segundo grau superficial: bolhas, base rósea, dor intensa, cura em 10 a 14 dias sem cicatriz.</li>
<li>Resfriar, limpar, desbridar bolhas rotas, curativo oclusivo com sulfadiazina ou cobertura de prata.</li>
<li>Analgesia venosa com opioide se a dor for intensa.</li>
<li>Sem antibiótico sistêmico profilático; só para infecção estabelecida.</li>
<li>Internar: acima de 10% em segundo grau, terceiro grau, face, mãos, pés, períneo, elétrica, química, inalação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a queimadura de segundo grau superficial dói mais que a de terceiro grau? <details><summary>Resposta</summary>Porque as terminações nervosas da derme ficam vivas e expostas; no terceiro grau elas foram destruídas e a lesão é indolor.</details></li>
<li>Quando o antibiótico sistêmico é indicado na queimadura? <details><summary>Resposta</summary>Apenas na infecção estabelecida, com celulite perilesional, secreção purulenta ou sinais sistêmicos; nunca como profilaxia na queimadura aguda limpa.</details></li>
</ol>
`,

"unesp2025#75": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o derrame parapneumônico em não complicado, complicado e empiema.</li>
<li>Interpretar pH, glicose, DHL, aspecto e tamanho para decidir a drenagem.</li>
<li>Conhecer as opções: antibiótico, dreno, fibrinolítico intrapleural e cirurgia.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Derrame parapneumônico não complicado</dt>
<dd>Exsudato estéril, reacional, com pH acima de 7,2, glicose acima de 60 e DHL abaixo de 1.000; resolve com o antibiótico da pneumonia.</dd>
<dt>Derrame parapneumônico complicado</dt>
<dd>Líquido com invasão bacteriana: pH abaixo de 7,2, glicose abaixo de 60, DHL acima de 1.000, Gram ou cultura positivos, loculações; exige drenagem.</dd>
<dt>Empiema</dt>
<dd>Pus franco na cavidade pleural, drenagem obrigatória, com decorticação se encarcerar o pulmão.</dd>
<dt>Critérios de Light</dt>
<dd>Exsudato se proteína pleura/soro acima de 0,5, DHL pleura/soro acima de 0,6 ou DHL pleural acima de dois terços do limite superior sérico.</dd>
</dl>
<h4>O essencial</h4>
<p>Até 40% das pneumonias bacterianas produzem derrame, que evolui em três fases. Na fase <strong>exsudativa</strong>, o líquido é reacional, fluido e estéril; na <strong>fibrinopurulenta</strong>, bactérias invadem, caem o pH e a glicose, sobe a DHL e aparecem septos de fibrina; na <strong>organizada</strong>, forma-se uma casca fibrosa que encarcera o pulmão. O tratamento acompanha a fase: antibiótico na primeira, drenagem na segunda, cirurgia na terceira.</p>
<p>A decisão de drenar segue critérios objetivos. Drena-se quando há <strong>pus</strong>, <strong>Gram ou cultura positivos</strong>, <strong>pH abaixo de 7,2</strong>, glicose abaixo de 60 mg/dL, DHL acima de 1.000 U/L, <strong>loculações</strong> ao ultrassom ou derrame <strong>grande</strong>, ocupando mais da metade do hemitórax. Derrames pequenos, abaixo de 1 cm em decúbito lateral, nem precisam ser puncionados; entre 1 cm e metade do hemitórax, a punção diagnóstica decide.</p>
<p>No derrame complicado, o dreno de pequeno calibre guiado por imagem é adequado, e o antibiótico passa a cobrir anaeróbios (amoxicilina-clavulanato, ou ceftriaxona com metronidazol, por 2 a 3 semanas).</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Memorize os números: pH 7,2, glicose 60, DHL 1.000 e metade do hemitórax. Abaixo do pH ou da glicose, acima da DHL ou do tamanho, drena; pus, bactéria ou loculação, drena. O derrame de 15 mm, seroso, com pH 7,2 exato, glicose 80 e DHL 270 fica do lado do antibiótico e da observação.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Três fases: exsudativa, fibrinopurulenta e organizada; antibiótico, dreno e cirurgia.</li>
<li>Drenar: pus, Gram ou cultura positivos, pH abaixo de 7,2, glicose abaixo de 60, DHL acima de 1.000, loculações, derrame maior que metade do hemitórax.</li>
<li>Pequeno e não complicado: antibiótico da pneumonia e reavaliação em 48 a 72 horas.</li>
<li>Complicado: dreno fino guiado, antibiótico com cobertura anaeróbia por 2 a 3 semanas.</li>
<li>Loculado refratário: fibrinolítico com DNase ou videotoracoscopia; organizado: decorticação.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais parâmetros bioquímicos do líquido pleural indicam drenagem no derrame parapneumônico? <details><summary>Resposta</summary>pH abaixo de 7,2, glicose abaixo de 60 mg/dL e DHL acima de 1.000 U/L, além de Gram ou cultura positivos.</details></li>
<li>Qual é a conduta no derrame parapneumônico pequeno e não complicado? <details><summary>Resposta</summary>Manter o antibiótico da pneumonia e reavaliar clínica e radiologicamente em 48 a 72 horas, puncionando de novo se aumentar ou a febre persistir.</details></li>
</ol>
`,

"unesp2025#80": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer o aneurisma de aorta abdominal roto pela tríade clínica.</li>
<li>Diferenciar as indicações de vigilância, cirurgia eletiva e cirurgia de emergência.</li>
<li>Comparar reparo endovascular e aberto e conhecer o rastreamento.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Aneurisma de aorta abdominal</dt>
<dd>Dilatação da aorta acima de 3 cm, em geral infrarrenal, ligada a tabagismo, idade, sexo masculino e história familiar.</dd>
<dt>Tríade da ruptura</dt>
<dd>Dor abdominal ou lombar súbita, massa pulsátil e hipotensão; presente completa em metade dos casos.</dd>
<dt>Reparo endovascular (EVAR)</dt>
<dd>Endoprótese introduzida pelas femorais que exclui o aneurisma; menor mortalidade perioperatória, exige anatomia adequada e vigilância por imagem.</dd>
<dt>Hipotensão permissiva</dt>
<dd>Na ruptura, tolerar PAS de 70 a 90 mmHg com paciente consciente até o controle, evitando volume excessivo que aumenta o sangramento.</dd>
</dl>
<h4>O essencial</h4>
<p>O aneurisma é assintomático na maioria dos casos e descoberto por acaso ou pelo <strong>rastreamento</strong> com ultrassom único em homens de 65 a 75 anos que já fumaram. A história natural é a expansão de 2 a 3 mm por ano e o risco de ruptura cresce com o diâmetro: cerca de 1% ao ano entre 4 e 5 cm, 10% entre 5,5 e 6 cm e mais de 30% acima de 7 cm.</p>
<p>O aneurisma <strong>sintomático</strong>, com dor abdominal ou lombar, é a ruptura iminente; o <strong>roto</strong> apresenta dor súbita, massa pulsátil e hipotensão, às vezes com síncope, equimose de flancos ou história de "cólica renal" ou "lombalgia" no idoso. A ruptura para o retroperitônio pode conter o sangramento por horas e dá a janela para o diagnóstico; a ruptura livre para o peritônio é quase sempre fatal.</p>
<p>O tratamento da ruptura é o <strong>reparo imediato</strong>, com hipotensão permissiva e transfusão balanceada no caminho. O <strong>EVAR</strong>, quando a anatomia permite e a equipe está disponível, tem mortalidade perioperatória menor que o reparo aberto; o reparo aberto, com clampeamento e enxerto tubular ou bifurcado, continua necessário em anatomias desfavoráveis. A mortalidade global da ruptura chega a 80% considerando quem morre antes do hospital, e 30 a 50% entre os operados.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor súbita, massa pulsátil e hipotensão no idoso: aneurisma roto, cirurgia agora. O diâmetro só manda no aneurisma assintomático: 5,5 cm no homem, 5,0 na mulher, ou crescimento acima de 1 cm por ano. Ultrassom seriado e betabloqueador são respostas para o aneurisma pequeno, nunca para o roto.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Aorta acima de 3 cm; rastreamento com ultrassom em homens de 65 a 75 anos que fumaram.</li>
<li>Eletiva: 5,5 cm no homem, 5,0 na mulher, crescimento acima de 1 cm por ano, ou qualquer sintoma.</li>
<li>Ruptura: dor súbita, massa pulsátil, hipotensão; mortalidade altíssima.</li>
<li>Instável: ultrassom à beira do leito e centro cirúrgico; estável: angiotomografia e EVAR se possível.</li>
<li>Hipotensão permissiva até o controle; vigilância de endoleaks após EVAR.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais são as indicações de reparo eletivo do aneurisma de aorta abdominal? <details><summary>Resposta</summary>Diâmetro de 5,5 cm no homem ou 5,0 cm na mulher, crescimento acima de 1 cm por ano ou 0,5 cm em seis meses, e presença de sintomas em qualquer tamanho.</details></li>
<li>Qual o exame no paciente instável com suspeita de ruptura? <details><summary>Resposta</summary>Ultrassom à beira do leito, que confirma o aneurisma e o líquido livre, seguido de cirurgia imediata; a angiotomografia é para o paciente estável.</details></li>
</ol>
`,

/* --- Volume 2 · Cirurgia · FAMEMA 2026 (cir91–cir100) --------------------------- */
"famema2026#18": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Definir hemotórax maciço pelos critérios numéricos do ATLS.</li>
<li>Indicar a drenagem pleural e reconhecer quando ela não basta.</li>
<li>Listar as indicações de toracotomia de urgência no trauma torácico.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hemotórax maciço</dt>
<dd>Acúmulo rápido de mais de 1.500 mL de sangue no tórax, ou mais de um terço da volemia; combina choque hipovolêmico com restrição ventilatória.</dd>
<dt>Toracostomia com dreno</dt>
<dd>Dreno de 28 a 32 French no quinto espaço intercostal, linha axilar anterior ou média, em selo d'água; trata hemotórax e pneumotórax e quantifica o sangramento.</dd>
<dt>Autotransfusão</dt>
<dd>Coleta do sangue drenado do tórax em sistema com anticoagulante e reinfusão no paciente, útil no hemotórax maciço.</dd>
<dt>Hemotórax retido</dt>
<dd>Sangue coagulado que o dreno não evacua; exige videotoracoscopia precoce para evitar empiema e fibrotórax.</dd>
</dl>
<h4>O essencial</h4>
<p>O hemotórax vem de laceração pulmonar, vasos intercostais ou mamária interna, hilo pulmonar, coração ou grandes vasos. O pulmão sangra pouco, porque sua circulação é de baixa pressão e o próprio colapso tampona; as artérias sistêmicas e o hilo sangram muito. O exame mostra hipotensão, murmúrio abolido e macicez à percussão, sem turgência jugular, e a radiografia ou o ultrassom (FAST estendido) confirmam o líquido.</p>
<p>O tratamento inicial é a <strong>drenagem pleural</strong> com dreno calibroso, enquanto se repõe volume com sangue e se ativa a transfusão balanceada. O dreno esvazia a cavidade, reexpande o pulmão, que ajuda a tamponar, e mede o débito, que decide o passo seguinte. Os critérios de <strong>hemotórax maciço</strong>, que indicam <strong>toracotomia de urgência</strong>, são: mais de <strong>1.500 mL</strong> na drenagem inicial, débito acima de <strong>200 mL por hora por 2 a 4 horas</strong>, necessidade persistente de transfusão para manter a hemodinâmica, ou instabilidade apesar do dreno e do volume. Nessa situação o sangue drenado pode ser autotransfundido.</p>
<p>Outras indicações de toracotomia no trauma são o tamponamento cardíaco, a lesão de grandes vasos, a fuga aérea maciça com suspeita de lesão traqueobrônquica, a lesão de esôfago e a embolia aérea. O hemotórax menor, que para de sangrar, é tratado só com o dreno, retirado quando o débito cai abaixo de 200 mL em 24 horas e o pulmão está expandido; o <strong>hemotórax retido</strong> acima de 300 mL vai para videotoracoscopia nos primeiros 3 a 7 dias. Antibiótico profilático na drenagem reduz empiema em alguns estudos e é prática comum no trauma penetrante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Os números são o que a prova cobra: 1.500 mL de uma vez, ou 200 mL por hora por 2 a 4 horas, mais choque que não melhora, é toracotomia no centro cirúrgico. Observar, pedir tomografia no instável ou colocar um segundo dreno são as três maneiras de assistir ao paciente exsanguinar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hemotórax: hipotensão, murmúrio abolido, macicez, sem turgência jugular.</li>
<li>Drenagem com dreno calibroso é o tratamento inicial e quantifica o sangramento.</li>
<li>Maciço: acima de 1.500 mL de início ou 200 mL por hora por 2 a 4 horas, com instabilidade.</li>
<li>Maciço é toracotomia de urgência, com autotransfusão do sangue drenado.</li>
<li>Hemotórax retido: videotoracoscopia precoce para evitar empiema.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais critérios de débito pelo dreno definem o hemotórax maciço? <details><summary>Resposta</summary>Mais de 1.500 mL na drenagem inicial ou mais de 200 mL por hora durante 2 a 4 horas, sobretudo com instabilidade hemodinâmica persistente.</details></li>
<li>Por que o sangramento de origem pulmonar costuma parar com o dreno? <details><summary>Resposta</summary>Porque a circulação pulmonar é de baixa pressão e a reexpansão do pulmão contra a parede tampona a laceração.</details></li>
</ol>
`,

"famema2026#19": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Classificar o traumatismo craniencefálico pelo Glasgow e reconhecer os fatores de risco de lesão intracraniana.</li>
<li>Indicar a tomografia de crânio no TCE leve com regras validadas.</li>
<li>Manejar o paciente anticoagulado: imagem, reversão e observação.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Traumatismo craniencefálico leve</dt>
<dd>Glasgow de 13 a 15 após o trauma; responde por 80% dos casos, com lesão tomográfica em cerca de 10% e necessidade de cirurgia em menos de 1%.</dd>
<dt>Regra canadense de tomografia de crânio</dt>
<dd>Alto risco: Glasgow abaixo de 15 após 2 horas, suspeita de fratura aberta ou afundada, sinais de fratura de base, dois ou mais vômitos, idade de 65 anos ou mais; médio risco: amnésia acima de 30 minutos e mecanismo perigoso.</dd>
<dt>Hematoma subdural</dt>
<dd>Sangue entre a dura e a aracnoide por ruptura de veias-ponte; frequente no idoso e no anticoagulado, pode crescer lentamente.</dd>
<dt>Complexo protrombínico</dt>
<dd>Concentrado de fatores II, VII, IX e X que reverte a varfarina em minutos; usado com vitamina K na hemorragia intracraniana.</dd>
</dl>
<h4>O essencial</h4>
<p>O TCE leve é a maioria dos atendimentos, e o desafio é achar os poucos pacientes com lesão intracraniana sem tomografar todos.</p>
<p>O <strong>idoso</strong> tem atrofia cerebral que estira as veias-ponte e cria espaço para o hematoma subdural crescer sem sinais precoces; a queda da própria altura é o mecanismo típico. O paciente <strong>anticoagulado</strong>, com varfarina ou anticoagulante direto, tem risco quatro a cinco vezes maior de hemorragia e de expansão do hematoma. Nele a tomografia é imediata mesmo com Glasgow 15 e sem sintomas, e muitos protocolos observam por 12 a 24 horas ou repetem a tomografia, porque até 6% dos sangramentos aparecem tardiamente.</p>
<p>Com tomografia normal e sem fatores de risco adicionais, o paciente pode ir para casa com acompanhante e orientações por escrito sobre sinais de alarme: sonolência, vômitos, cefaleia crescente, confusão, convulsão, fraqueza. Com lesão tomográfica, interna-se com avaliação neurocirúrgica; hematomas com desvio acima de 5 mm ou espessura acima de 10 mm e deterioração clínica vão à cirurgia. A síndrome pós-concussional, com cefaleia, tontura e dificuldade de concentração por semanas, é a sequela mais comum do TCE leve.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Idosa anticoagulada com queda, cefaleia e confusão transitória: tomografia agora, sem esperar deterioração, mesmo que o Glasgow volte a 15. Observar sem imagem, pedir radiografia de crânio ou aguardar 6 horas são as três respostas erradas que a prova apresenta como prudência.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>TCE leve: Glasgow 13 a 15; 10% têm lesão na tomografia.</li>
<li>Tomografia se Glasgow abaixo de 15, vômitos, cefaleia intensa, convulsão, déficit, fratura, mecanismo perigoso, idade acima de 65, anticoagulação.</li>
<li>Idoso e anticoagulado: hematoma subdural de crescimento lento; tomografia imediata e observação prolongada.</li>
<li>Reverter a anticoagulação se houver sangramento: complexo protrombínico e vitamina K para varfarina.</li>
<li>Radiografia de crânio não tem papel no TCE.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Cite quatro fatores que indicam tomografia no TCE leve. <details><summary>Resposta</summary>Idade de 65 anos ou mais, uso de anticoagulante, Glasgow abaixo de 15, vômitos repetidos, cefaleia intensa, convulsão, déficit focal, sinais de fratura de crânio e mecanismo perigoso.</details></li>
<li>Como se reverte a varfarina na hemorragia intracraniana? <details><summary>Resposta</summary>Com concentrado de complexo protrombínico, que age em minutos, associado a vitamina K intravenosa para o efeito sustentado.</details></li>
</ol>
`,

"famema2026#20": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar as indicações de laparotomia imediata no trauma penetrante abdominal.</li>
<li>Descrever o manejo seletivo não operatório do ferimento por arma branca.</li>
<li>Diferenciar a conduta nos ferimentos de parede anterior, flanco, dorso e toracoabdominais.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Manejo seletivo</dt>
<dd>Estratégia que reserva a laparotomia aos pacientes com indicação clara e observa os demais com exame seriado e imagem; reduz as laparotomias não terapêuticas.</dd>
<dt>Exploração local da ferida</dt>
<dd>Ampliação da ferida sob anestesia local para ver se a fáscia anterior foi violada; se íntegra, o paciente recebe alta; usada nos ferimentos da parede anterior.</dd>
<dt>Lesão de víscera oca</dt>
<dd>Perfuração de estômago, delgado ou cólon; a tomografia pode não a detectar no início, e o exame abdominal seriado é o que a revela.</dd>
<dt>Ferimento toracoabdominal</dt>
<dd>Ferimento entre o mamilo e o rebordo costal à esquerda; alto risco de lesão diafragmática oculta, que exige laparoscopia diagnóstica.</dd>
</dl>
<h4>O essencial</h4>
<p>Nem toda facada no abdome precisa de laparotomia: cerca de um terço não penetra o peritônio e, dos que penetram, metade não lesa nada que exija cirurgia. A laparotomia obrigatória gerava 30 a 40% de cirurgias não terapêuticas, com complicações próprias. Por isso o <strong>manejo seletivo</strong> se tornou padrão no ferimento por arma branca em paciente estável, com exame abdominal confiável, em centro com cirurgião disponível.</p>
<p>As <strong>indicações de laparotomia imediata</strong> são: instabilidade hemodinâmica, peritonite ao exame, evisceração, sangue no estômago ou no reto, objeto encravado e, para muitos, ferimento por arma de fogo transfixante do abdome.</p>
<p>Na parede anterior, a exploração local da ferida libera o paciente com fáscia íntegra; se a fáscia foi violada, observação seriada ou laparoscopia diagnóstica. No ferimento <strong>toracoabdominal esquerdo</strong>, a lesão do diafragma passa despercebida pela tomografia em até um terço dos casos e a laparoscopia é indicada para excluí-la, porque a hérnia diafragmática tardia é grave. O FAST tem valor limitado no penetrante: positivo ajuda, negativo não exclui lesão de víscera oca. O lavado peritoneal diagnóstico caiu em desuso.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Facada no flanco, estável, sem peritonite, sem evisceração, FAST negativo: tomografia e 24 horas de exame seriado, operando se mudar. Laparotomia obrigatória, alta imediata e lavado peritoneal são os três distratores. Arma de fogo no abdome anterior, ao contrário, ainda é laparotomia na maioria dos serviços.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Um terço das facadas não penetra; metade das que penetram não exige cirurgia.</li>
<li>Laparotomia imediata: instabilidade, peritonite, evisceração, sangue digestivo, objeto encravado.</li>
<li>Estável e sem indicação: observação por 24 horas com exame seriado, tomografia nos de flanco e dorso.</li>
<li>Parede anterior: exploração local da ferida define se a fáscia foi violada.</li>
<li>Toracoabdominal esquerdo: laparoscopia para excluir lesão diafragmática.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Quais achados indicam laparotomia imediata no ferimento por arma branca? <details><summary>Resposta</summary>Instabilidade hemodinâmica, sinais de peritonite, evisceração, sangue no estômago ou no reto e objeto encravado.</details></li>
<li>Por que a tomografia é especialmente útil nos ferimentos de flanco e dorso? <details><summary>Resposta</summary>Porque as lesões retroperitoneais de cólon, rim e ureter não produzem peritonite precoce e escapam ao exame físico.</details></li>
</ol>
`,

"famema2026#22": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a perfuração de víscera oca pela clínica e pelos sinais de pneumoperitônio.</li>
<li>Relacionar os anti-inflamatórios e o H. pylori à úlcera perfurada.</li>
<li>Descrever o tratamento cirúrgico e o manejo pós-operatório.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Abdome em tábua</dt>
<dd>Contratura involuntária generalizada da parede abdominal por peritonite difusa; o paciente fica imóvel e respira superficialmente.</dd>
<dt>Sinal de Jobert</dt>
<dd>Timpanismo à percussão da loja hepática, pelo ar livre interposto entre o fígado e a parede.</dd>
<dt>Pneumoperitônio</dt>
<dd>Ar livre na cavidade, visto na radiografia de tórax em pé sob o diafragma (sinal de Popper) ou na tomografia, mais sensível.</dd>
<dt>Epiploplastia de Graham</dt>
<dd>Sutura da úlcera perfurada com reforço de retalho de omento; técnica padrão, aberta ou laparoscópica.</dd>
</dl>
<h4>O essencial</h4>
<p>A úlcera perfurada ocorre em 2 a 10% dos ulcerosos e é a principal causa de perfuração de víscera oca não traumática. Os fatores de risco são anti-inflamatórios não esteroides, infecção por <em>H. pylori</em>, tabagismo, corticoide e cocaína. A perfuração duodenal anterior é a mais frequente; a gástrica, no idoso, pode esconder câncer e exige biópsia das bordas.</p>
<p>A clínica tem três fases. Nas primeiras duas horas, dor epigástrica <strong>súbita</strong> e lancinante que se generaliza, com taquicardia e abdome em tábua: é a <strong>peritonite química</strong> pelo ácido. Entre 2 e 12 horas, a dor pode melhorar, enganosamente, pela diluição do ácido pelo exsudato peritoneal. Depois de 12 horas, instala-se a peritonite bacteriana com febre, distensão, íleo e sepse. Ao exame, defesa generalizada, descompressão dolorosa, silêncio abdominal e <strong>sinal de Jobert</strong>. A radiografia de tórax em pé mostra ar sob o diafragma em 70 a 80% dos casos; a tomografia detecta quase todos e localiza a perfuração.</p>
<p>O tratamento é <strong>cirúrgico</strong>: jejum, sonda nasogástrica, volume, antibiótico de amplo espectro e inibidor de bomba de prótons venoso, e laparotomia ou laparoscopia com <strong>sutura simples e epiploplastia</strong>, lavagem peritoneal e, na úlcera gástrica, biópsia ou ressecção se houver suspeita de câncer. Cirurgias redutoras de ácido (vagotomia) perderam lugar com os inibidores de bomba e a erradicação do <em>H. pylori</em>, que se faz no pós-operatório e reduz a recidiva.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Dor súbita há minutos, abdome em tábua e Jobert em usuário de anti-inflamatório: úlcera perfurada, pneumoperitônio na radiografia em pé, cirurgia. Pancreatite tem dor em faixa e evolui em horas; obstrução tem distensão e vômitos progressivos; apendicite leva dias e começa à direita. A prova usa esses três como distratores.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Perfuração em 2 a 10% das úlceras; anti-inflamatórios e H. pylori são os fatores.</li>
<li>Dor súbita, abdome em tábua, silêncio, Jobert; melhora enganosa entre 2 e 12 horas.</li>
<li>Radiografia de tórax em pé mostra ar subdiafragmático; tomografia é mais sensível.</li>
<li>Cirurgia: sutura com epiploplastia, lavagem, biópsia da úlcera gástrica.</li>
<li>Inibidor de bomba e erradicação do H. pylori reduzem recidiva; vagotomia caiu em desuso.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>O que é o sinal de Jobert e o que ele indica? <details><summary>Resposta</summary>Timpanismo à percussão da região hepática, que indica ar livre entre o fígado e a parede abdominal, ou seja, pneumoperitônio.</details></li>
<li>Por que a dor pode melhorar algumas horas após a perfuração? <details><summary>Resposta</summary>Porque o exsudato peritoneal dilui o ácido e a peritonite química cede antes de a peritonite bacteriana se instalar, o que engana o examinador.</details></li>
</ol>
`,

"famema2026#23": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Reconhecer a obstrução de intestino delgado pela clínica e pela radiografia.</li>
<li>Diferenciar obstrução alta e baixa, mecânica e funcional, simples e estrangulada.</li>
<li>Decidir entre tratamento conservador e cirurgia na obstrução por bridas.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Bridas</dt>
<dd>Aderências fibrosas pós-operatórias; causa de 60 a 75% das obstruções de delgado, seguidas por hérnias e tumores.</dd>
<dt>Níveis hidroaéreos</dt>
<dd>Interfaces ar-líquido em alças dilatadas na radiografia em pé, dispostas em degraus na obstrução de delgado.</dd>
<dt>Ponto de transição</dt>
<dd>Local na tomografia em que a alça dilatada passa a colapsada; marca a obstrução e ajuda a prever a causa.</dd>
<dt>Estrangulamento</dt>
<dd>Comprometimento vascular da alça obstruída, com dor contínua, peritonismo, febre, leucocitose, acidose e sinais tomográficos de isquemia.</dd>
</dl>
<h4>O essencial</h4>
<p>A obstrução de <strong>delgado</strong> apresenta dor em cólica periumbilical, vômitos precoces e biliosos, distensão moderada e parada de eliminação; a <strong>colônica</strong> tem distensão maior, vômitos tardios e fecaloides e, no volvo e no câncer, história mais arrastada. Na <strong>mecânica</strong>, os ruídos são aumentados e metálicos no início e diminuem quando a alça se exaure; no <strong>íleo paralítico</strong>, pós-operatório ou metabólico, há silêncio desde o começo e gás distribuído por todo o intestino, incluindo o cólon.</p>
<p>A <strong>radiografia</strong> em pé e deitado mostra alças de delgado dilatadas acima de 3 cm, com válvulas coniventes em "empilhamento de moedas", níveis hidroaéreos em degrau e <strong>ausência de gás no cólon e no reto</strong> na obstrução completa; a presença de gás distal sugere obstrução parcial ou íleo.</p>
<p>A obstrução por <strong>bridas</strong>, parcial e sem sinais de estrangulamento, resolve em 65 a 80% dos casos com <strong>tratamento conservador</strong>: jejum, sonda nasogástrica, reposição de volume e eletrólitos e analgesia, por até 48 a 72 horas; o contraste oral hidrossolúvel (gastrografina) tem valor diagnóstico e terapêutico, e a chegada do contraste ao cólon em 24 horas prevê resolução. Operam-se de imediato a obstrução completa com sinais de <strong>estrangulamento</strong>, a hérnia encarcerada, o abdome virgem de cirurgia com obstrução completa, e os casos que não melhoram em 72 horas.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Cicatriz mediana, vômitos biliosos, alças de delgado dilatadas e cólon sem gás: obstrução alta por bridas. Volvo de sigmoide tem o grão de café e obstrução baixa; perfuração tem pneumoperitônio; alça sentinela é uma só alça junto a inflamação vizinha. A prova testa a leitura da radiografia e a causa mais comum no abdome operado.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Delgado: cólica, vômitos biliosos precoces, distensão moderada; cólon: distensão maior e vômitos tardios.</li>
<li>Radiografia: alças dilatadas, níveis em degrau, cólon e reto sem gás.</li>
<li>Tomografia define ponto de transição, causa e sinais de isquemia.</li>
<li>Bridas sem estrangulamento: sonda, jejum, volume, gastrografina, até 72 horas.</li>
<li>Cirurgia: estrangulamento, hérnia encarcerada, abdome virgem, falha do conservador.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual achado radiográfico distingue a obstrução completa de delgado do íleo paralítico? <details><summary>Resposta</summary>A ausência de gás no cólon e no reto na obstrução completa, enquanto o íleo mostra gás distribuído por delgado e cólon.</details></li>
<li>Quais sinais tomográficos indicam estrangulamento? <details><summary>Resposta</summary>Espessamento e hipocaptação da parede da alça, líquido livre, pneumatose intestinal, gás no mesentério ou no sistema porta e sinal do redemoinho.</details></li>
</ol>
`,

"famema2026#24": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Conhecer a origem e os componentes do projeto ACERTO e sua relação com o ERAS.</li>
<li>Explicar a base fisiológica do jejum abreviado e da realimentação precoce.</li>
<li>Listar as rotinas abandonadas por falta de evidência e os resultados do protocolo.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Projeto ACERTO</dt>
<dd>Aceleração da Recuperação Total Pós-Operatória, protocolo multimodal brasileiro criado em 2005 na Universidade Federal de Mato Grosso.</dd>
<dt>ERAS</dt>
<dd>Enhanced Recovery After Surgery, consórcio europeu que desde 2001 reúne as evidências do cuidado perioperatório em protocolos por tipo de cirurgia.</dd>
<dt>Jejum abreviado</dt>
<dd>Sólidos até 6 horas antes da anestesia e líquidos claros com 12,5% de carboidrato até 2 horas antes, reduzindo resistência insulínica, sede, ansiedade e catabolismo.</dd>
<dt>Terapia nutricional perioperatória</dt>
<dd>Triagem do risco nutricional e suplementação, com imunonutrição em cirurgias oncológicas de grande porte, por 5 a 7 dias antes da operação.</dd>
</dl>
<h4>O essencial</h4>
<p>Boa parte dos rituais do perioperatório, jejum da meia-noite, preparo mecânico do cólon, sonda nasogástrica de rotina, drenos, repouso no leito e dieta zero por dias, nasceu de tradição, não de evidência.</p>
<p>Os pilares do ACERTO são: <strong>informação</strong> ao paciente sobre cada etapa, o que reduz ansiedade e melhora a adesão; <strong>jejum abreviado</strong> com bebida de carboidrato 2 horas antes, que mantém o estômago vazio (esvazia em 90 minutos) e atenua a resistência insulínica do trauma cirúrgico; <strong>realimentação precoce</strong>, no mesmo dia, inclusive após anastomoses, que protege a barreira intestinal e não aumenta deiscência; <strong>anestesia e analgesia multimodais</strong>, com bloqueios regionais, menos opioide e profilaxia de náuseas e vômitos; <strong>fluidos venosos restritos</strong>, suspensos quando o paciente bebe, evitando o edema de alças que atrasa o íleo; <strong>terapia nutricional</strong> pré e pós-operatória nos desnutridos; e <strong>mobilização precoce</strong>, com o paciente fora do leito no dia da cirurgia.</p>
<p>A base fisiológica é a resposta metabólica ao trauma: o jejum prolongado e a cirurgia disparam cortisol, catecolaminas e resistência à insulina, com hiperglicemia, proteólise e imunossupressão; carboidrato pré-operatório, analgesia eficaz, nutrição precoce e movimento atenuam essa resposta.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Quando a questão descreve "educação, jejum abreviado e realimentação precoce, analgesia multimodal, hidratação balanceada, mobilização precoce", é ACERTO ou ERAS. Os princípios de Halsted (assepsia, hemostasia, fio adequado, sem tensão, sem espaço morto) são técnica operatória; EPIs e descarte são biossegurança; cuidados com a ferida são orientação de alta.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>ACERTO (2005, Cuiabá) é a versão brasileira do ERAS: cuidado perioperatório baseado em evidência.</li>
<li>Pilares: informação, jejum abreviado com carboidrato, realimentação precoce, analgesia multimodal, fluidos restritos, nutrição, mobilização precoce.</li>
<li>Abandonar sonda nasogástrica, drenos e preparo de cólon de rotina.</li>
<li>Reduz complicações em 30 a 50% e a internação em 2 a 3 dias.</li>
<li>Fundamento: atenuar a resposta metabólica ao trauma cirúrgico.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual o esquema de jejum pré-operatório proposto pelo ACERTO? <details><summary>Resposta</summary>Sólidos até 6 horas antes e líquidos claros com carboidrato a 12,5% até 2 horas antes da anestesia.</details></li>
<li>Por que a realimentação precoce não aumenta a deiscência de anastomose? <details><summary>Resposta</summary>Porque o alimento no lúmen nutre a mucosa, preserva a barreira intestinal e estimula a motilidade, e os ensaios mostraram menos infecção sem aumento de fístula.</details></li>
</ol>
`,

"famema2026#28": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Dividir o mediastino em compartimentos e listar as massas de cada um.</li>
<li>Reconhecer a associação entre timoma e miastenia gravis.</li>
<li>Decidir entre ressecção direta e biópsia nas massas do mediastino anterior.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Mediastino anterior</dt>
<dd>Compartimento entre o esterno e o pericárdio; abriga timo, tireoide ectópica, tumores germinativos e linfomas, os "quatro T": timoma, tireoide, teratoma, "terrível linfoma".</dd>
<dt>Timoma</dt>
<dd>Tumor epitelial do timo, o mais comum do mediastino anterior no adulto; de crescimento lento, com potencial de invasão local e implantes pleurais.</dd>
<dt>Estadiamento de Masaoka-Koga</dt>
<dd>I, encapsulado; II, invasão da cápsula ou gordura; III, invasão de órgãos vizinhos; IV, disseminação pleural ou metástases.</dd>
<dt>Timectomia</dt>
<dd>Ressecção completa do timo e da gordura mediastinal, por esternotomia ou videotoracoscopia ou robótica; cura o timoma inicial e melhora a miastenia.</dd>
</dl>
<h4>O essencial</h4>
<p>A localização orienta o diagnóstico da massa mediastinal. No <strong>anterior</strong>: timoma, linfoma, tumores germinativos (teratoma, seminoma) e bócio mergulhante. No <strong>médio</strong>: linfonodomegalias, cistos broncogênicos e pericárdicos, aneurismas. No <strong>posterior</strong>: tumores neurogênicos (schwannoma, neurofibroma, ganglioneuroma), hérnia de Bochdalek, meningocele. Metade das massas é assintomática; as demais causam tosse, dor, dispneia, síndrome da veia cava superior ou síndromes paraneoplásicas.</p>
<p>O <strong>timoma</strong> acomete adultos de 40 a 60 anos e se associa a doenças autoimunes: <strong>miastenia gravis</strong> em 30 a 50% dos timomas, enquanto 10 a 15% dos miastênicos têm timoma, e ainda aplasia pura de hemácias e hipogamaglobulinemia. Na tomografia, é massa bem delimitada, homogênea, às vezes com calcificações, no mediastino anterior.</p>
<p>A <strong>timectomia</strong> estendida remove o timo e toda a gordura mediastinal anterior, do diafragma ao pescoço, de nervo frênico a nervo frênico. No timoma estádio I a sobrevida em 10 anos supera 90%; nos estádios II e III, radioterapia adjuvante; no IV, quimioterapia e cirurgia de citorredução. Na miastenia sem timoma, a timectomia também melhora o controle em pacientes jovens com anticorpo positivo (ensaio MGTX). No perioperatório, otimiza-se a miastenia com piridostigmina, imunoglobulina ou plasmaférese, e evita-se bloqueador neuromuscular e aminoglicosídeo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Fraqueza fatigável, anticorpo anti-receptor de acetilcolina e massa anterior encapsulada: timoma, ressecar sem biopsiar. Biópsia percutânea é para o irressecável ou para a suspeita de linfoma. Radioterapia exclusiva e observação não têm lugar no timoma ressecável.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Anterior: timoma, linfoma, germinativos, tireoide; médio: linfonodos e cistos; posterior: neurogênicos.</li>
<li>Timoma: 30 a 50% com miastenia; 10 a 15% dos miastênicos têm timoma.</li>
<li>Massa anterior encapsulada e ressecável: timectomia direta, sem biópsia.</li>
<li>Biópsia só no irressecável ou na suspeita de linfoma ou germinativo.</li>
<li>Estádio I: sobrevida acima de 90%; II e III: radioterapia adjuvante.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que não se biopsia o timoma encapsulado ressecável? <details><summary>Resposta</summary>Porque a punção pode romper a cápsula e disseminar células na pleura, principal via de recidiva, e porque a ressecção já é o tratamento definitivo e diagnóstico.</details></li>
<li>Em que situação a biópsia da massa mediastinal anterior é indicada? <details><summary>Resposta</summary>Quando a lesão é invasiva ou irressecável, ou quando há suspeita de linfoma ou tumor germinativo, cujo tratamento é quimioterapia e não cirurgia.</details></li>
</ol>
`,

"famema2026#29": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Graduar a doença hemorroidária interna e distinguir os componentes interno e externo.</li>
<li>Escolher o tratamento por grau: clínico, ambulatorial ou cirúrgico.</li>
<li>Descrever as técnicas de hemorroidectomia e seus epônimos.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Graduação de Goligher</dt>
<dd>Grau I, sangra sem prolapsar; II, prolapsa e reduz sozinho; III, prolapsa e exige redução manual; IV, irredutível.</dd>
<dt>Hemorroidectomia de Milligan-Morgan</dt>
<dd>Excisão dos mamilos com ligadura do pedículo e feridas deixadas abertas, separadas por pontes de mucosa e pele.</dd>
<dt>Hemorroidectomia de Ferguson</dt>
<dd>Mesma excisão, com fechamento das feridas por sutura contínua absorvível.</dd>
<dt>Hemorroidopexia de Longo</dt>
<dd>Ressecção circular de mucosa retal com grampeador acima dos mamilos, que os reposiciona e interrompe o fluxo; menos dor, mais recidiva.</dd>
</dl>
<h4>O essencial</h4>
<p>As hemorroidas são coxins vasculares normais do canal anal; a doença surge quando eles se dilatam e prolapsam, com sangramento vivo indolor ao evacuar, prolapso, prurido e desconforto. A dor intensa é da trombose, da fissura ou do abscesso, não da hemorroida interna simples. Os mamilos internos ficam acima da linha pectínea, nas posições clássicas de 3, 7 e 11 horas; o componente externo, abaixo dela, é coberto por pele sensível. A colonoscopia é indicada antes de atribuir o sangramento à hemorroida em pacientes acima de 45 a 50 anos ou com alarmes.</p>
<p>O tratamento segue o <strong>grau</strong>. Graus I e II: fibras, líquidos, hábito evacuatório, flebotônicos e banhos de assento; se persiste o sangramento, <strong>ligadura elástica</strong>, que é o procedimento ambulatorial de escolha, ou escleroterapia e fotocoagulação. Grau III: ligadura elástica em sessões ou cirurgia. <strong>Grau IV</strong>, hemorroida mista volumosa, componente externo importante, trombose ou falha dos métodos conservadores: <strong>hemorroidectomia</strong>.</p>
<p>A hemorroidectomia excisional é o tratamento mais definitivo, com recidiva abaixo de 5%, à custa de dor pós-operatória significativa. Na técnica <strong>aberta de Milligan-Morgan</strong> (1937), cada mamilo é dissecado da pele até o pedículo, que é ligado, e a ferida fica aberta para cicatrizar por segunda intenção em 4 a 6 semanas, preservando pontes para evitar estenose. Na <strong>fechada de Ferguson</strong>, as feridas são suturadas, com cicatrização mais rápida e dor semelhante.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Epônimos de prova: Milligan-Morgan é excisão aberta; Ferguson é excisão fechada; Longo é grampeador; THD ou HAL é Doppler. Grau IV com componente externo é excisional; ligadura elástica e laser não resolvem prolapso irredutível. Sangramento anal em quem tem mais de 50 anos pede colonoscopia antes de qualquer tratamento.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Goligher: I sangra; II reduz sozinho; III reduz com a mão; IV não reduz.</li>
<li>I e II: fibras e ligadura elástica; III: ligadura ou cirurgia; IV: hemorroidectomia.</li>
<li>Milligan-Morgan: excisão e ferida aberta; Ferguson: excisão e ferida fechada.</li>
<li>Longo (grampeador) e THD (Doppler): menos dor, mais recidiva, não para grau IV.</li>
<li>Dor intensa é trombose, fissura ou abscesso; sangramento no idoso exige colonoscopia.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Qual a diferença entre as técnicas de Milligan-Morgan e de Ferguson? <details><summary>Resposta</summary>Ambas excisam os mamilos e ligam o pedículo; Milligan-Morgan deixa as feridas abertas e Ferguson as sutura.</details></li>
<li>Qual o tratamento ambulatorial de escolha para a hemorroida interna grau II que sangra? <details><summary>Resposta</summary>A ligadura elástica, que estrangula o mamilo acima da linha pectínea e provoca sua necrose e fibrose.</details></li>
</ol>
`,

"famema2026#30": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Diferenciar hemangioma, hiperplasia nodular focal e adenoma pela clínica e pela imagem.</li>
<li>Reconhecer os riscos do adenoma hepatocelular e seus subtipos.</li>
<li>Decidir entre observação, suspensão do hormônio e ressecção.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Hemangioma hepático</dt>
<dd>Tumor benigno mais comum do fígado; preenchimento centrípeto lento pelo contraste; não maligniza, não sangra quase nunca, não se opera se assintomático.</dd>
<dt>Hiperplasia nodular focal</dt>
<dd>Resposta hiperplásica a uma malformação arterial; realce arterial intenso e homogêneo com cicatriz central que capta tardiamente; benigna, não se opera.</dd>
<dt>Adenoma hepatocelular</dt>
<dd>Neoplasia benigna de hepatócitos, estrogênio-dependente, sem cicatriz, com risco de hemorragia e de transformação maligna.</dd>
<dt>Subtipo beta-catenina</dt>
<dd>Adenoma com mutação ativadora da beta-catenina, mais comum em homens e com uso de anabolizantes; o de maior risco de carcinoma.</dd>
</dl>
<h4>O essencial</h4>
<p>Os três tumores benignos sólidos do fígado têm perfis distintos. O <strong>hemangioma</strong> atinge 5 a 20% da população, predomina em mulheres, é hiperecoico ao ultrassom e mostra na tomografia e na ressonância realce periférico nodular com preenchimento centrípeto lento, permanecendo hiperintenso em T2.</p>
<p>O <strong>adenoma</strong> é raro, de mulheres de 20 a 40 anos usuárias de <strong>anticoncepcional oral</strong> por anos, e também de homens com anabolizantes, obesos e portadores de glicogenoses. Na imagem é lesão hipervascular heterogênea, com gordura ou <strong>hemorragia</strong> intralesional e sem cicatriz central; não capta contraste hepatoespecífico na fase hepatobiliar.</p>
<p>A conduta no adenoma começa pela <strong>suspensão do hormônio</strong> e repetição da imagem em 6 meses; lesões que regridem para menos de 5 cm são acompanhadas. Indicam <strong>ressecção</strong>: tamanho acima de 5 cm que não regride, adenoma em homem (qualquer tamanho), subtipo beta-catenina, crescimento, sintomas e hemorragia; a embolização arterial controla o sangramento agudo antes da cirurgia. Gestação exige vigilância trimestral.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Mulher jovem, pílula há anos, lesão hipervascular sem cicatriz central com hemorragia: adenoma. Cicatriz central e lesão homogênea: hiperplasia nodular focal, não se toca. Preenchimento centrípeto lento: hemangioma, não se opera. A prova gosta de trocar as associações com a pílula e os riscos de sangrar e malignizar.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Hemangioma: o mais comum, preenchimento centrípeto, benigno, observação.</li>
<li>Hiperplasia nodular focal: cicatriz central, realce arterial homogêneo, benigna, sem relação forte com pílula.</li>
<li>Adenoma: pílula e anabolizantes, hipervascular sem cicatriz, hemorragia e risco de carcinoma.</li>
<li>Adenoma: suspender hormônio e reavaliar em 6 meses; ressecar acima de 5 cm, em homens e no subtipo beta-catenina.</li>
<li>Hemorragia aguda: embolização e depois ressecção.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Que achado de imagem diferencia a hiperplasia nodular focal do adenoma? <details><summary>Resposta</summary>A cicatriz central com captação tardia e a retenção de contraste hepatoespecífico na hiperplasia; o adenoma não tem cicatriz, pode ter gordura ou hemorragia e não retém o contraste hepatobiliar.</details></li>
<li>Quais são as indicações de ressecção do adenoma hepatocelular? <details><summary>Resposta</summary>Lesão acima de 5 cm que não regride após suspender o hormônio, adenoma em homem, subtipo beta-catenina, crescimento, sintomas ou hemorragia.</details></li>
</ol>
`,

"famema2026#32": `
<h4>Objetivos de aprendizagem</h4>
<ul>
<li>Enunciar as indicações de cirurgia antirrefluxo.</li>
<li>Escolher entre fundoplicatura total e parcial pela manometria.</li>
<li>Descrever a técnica de Nissen e suas complicações.</li>
</ul>
<h4>Termos-chave</h4>
<dl>
<dt>Fundoplicatura de Nissen</dt>
<dd>Válvula de 360 graus com o fundo gástrico envolvendo o esôfago distal, curta (1,5 a 2 cm) e frouxa, após redução da hérnia e fechamento dos pilares.</dd>
<dt>Fundoplicaturas parciais</dt>
<dd>Toupet, posterior de 270 graus; Dor, anterior de 180 graus; Lind, 300 graus; indicadas quando a motilidade do corpo esofágico está comprometida.</dd>
<dt>Esofagite de Los Angeles</dt>
<dd>Grau A, erosões até 5 mm; B, acima de 5 mm; C, confluentes em menos de 75% da circunferência; D, acima de 75%.</dd>
<dt>Síndrome gas-bloat</dt>
<dd>Distensão, dificuldade de eructar e flatulência após fundoplicatura, mais frequente na válvula total.</dd>
</dl>
<h4>O essencial</h4>
<p>A cirurgia antirrefluxo é indicada quando o refluxo está <strong>objetivamente documentado</strong> (esofagite C ou D, Barrett, pHmetria alterada) e há falha ou intolerância ao inibidor de bomba, dependência de dose alta em paciente jovem, sintomas extraesofágicos refratários com refluxo comprovado, hérnia hiatal volumosa ou complicações como estenose. O preparo inclui endoscopia, manometria de alta resolução, obrigatória para excluir acalasia e avaliar a motilidade, e pHmetria quando a endoscopia não é conclusiva; o esofagograma mapeia a hérnia.</p>
<p>A <strong>manometria</strong> decide a técnica. Com <strong>motilidade preservada</strong>, a <strong>fundoplicatura total de Nissen</strong>, por videolaparoscopia, é a escolha: controla o refluxo em 85 a 90% dos pacientes a 10 anos. A técnica envolve mobilizar o fundo com secção dos vasos curtos, reduzir a hérnia e dissecar o esôfago para obter 2 a 3 cm intra-abdominais, fechar os pilares do hiato com pontos ou tela em hérnias grandes, e construir a válvula curta e frouxa sobre uma sonda calibradora, a "floppy Nissen", que reduz a disfagia.</p>
<p>As complicações precoces são disfagia transitória, que cede em semanas, e a síndrome gas-bloat; as tardias, migração ou deslizamento da válvula, recidiva do refluxo e disfagia persistente por válvula apertada. A cirurgia não é indicada no paciente com sintomas e exames funcionais normais (pirose funcional), nem substitui a avaliação de obesidade grave, em que o bypass gástrico trata melhor o refluxo.</p>
<div class="ponto">
<h4>Ponto clínico</h4>
<p>Refluxo comprovado, refratário, com hérnia e esfíncter fraco, e manometria com peristalse normal: Nissen laparoscópico. Motilidade ineficaz: Toupet. Acalasia: Heller com Dor. A prova testa a escolha pela manometria e descarta esofagectomia e miotomia como absurdos para o refluxo.</p>
</div>
<h4>Resumo</h4>
<ul>
<li>Indicação: refluxo documentado com falha ou dependência do inibidor de bomba, hérnia grande ou complicações.</li>
<li>Manometria obrigatória: exclui acalasia e escolhe a válvula.</li>
<li>Motilidade normal: Nissen 360 graus, curto e frouxo, com fechamento dos pilares.</li>
<li>Motilidade ineficaz: fundoplicatura parcial, Toupet 270 graus.</li>
<li>Complicações: disfagia transitória, gas-bloat, migração da válvula, recidiva.</li>
</ul>
<h4>Verifique o que aprendeu</h4>
<ol>
<li>Por que a manometria é obrigatória antes da cirurgia antirrefluxo? <details><summary>Resposta</summary>Para excluir acalasia e outros distúrbios motores que imitam refluxo e para avaliar a peristalse, que decide entre válvula total e parcial.</details></li>
<li>Quando se prefere a fundoplicatura parcial de Toupet? <details><summary>Resposta</summary>Quando a manometria mostra motilidade esofágica ineficaz, porque a válvula total aumentaria o risco de disfagia persistente.</details></li>
</ol>
`,
};
