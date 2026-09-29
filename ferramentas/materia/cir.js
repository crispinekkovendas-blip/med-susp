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
<p>Quem usa corticoide por semanas suprime a produção de ACTH e atrofia a camada fasciculada da adrenal; a produção basal de cortisol pode bastar no dia a dia, mas não responde ao estresse de uma infecção, de uma cirurgia ou de um trauma. O resultado é a <strong>crise adrenal</strong>: hipotensão que não responde a volume nem a vasopressor, dor abdominal difusa, náuseas, vômitos, febre, confusão, <strong>hiponatremia</strong> e <strong>hipoglicemia</strong>. No pós-operatório, ela imita sepse e abdome agudo, e a pista é a história de corticoide, mesmo em dose modesta como prednisona 10 mg/dia por anos.</p>
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
};
