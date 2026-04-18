// PDF resumen por unidad (abre ventana y dispara impresion - usuario guarda como PDF).

const SUMMARIES = {
  u1: {
    title: "Unidad 1 - Sangre y sus componentes",
    html: `
<h2>Unidad 1 - Sangre y sus componentes</h2>

<h3>Conceptos clave</h3>
<ul>
  <li>La sangre es <b>bien irremplazable</b>; donacion <b>voluntaria y altruista</b>.</li>
  <li><b>Tamizaje obligatorio</b> de 6 agentes: VIH 1-2, HBV (HBsAg), HCV, HTLV I-II, sifilis, Chagas.</li>
</ul>

<h3>Sangre fresca total (SFT)</h3>
<ul>
  <li>500 ml +-10% - Hto 36-50% - Vigencia 6h ACD / 8h CPD.</li>
  <li>Conservacion +1 a +6 C (o +20 a +24 C si es para plaquetas).</li>
  <li>Indicaciones muy restringidas. Hoy no debe usarse.</li>
  <li>Contraindicada en anemia cronica, deficiencia IgA y soporte especifico.</li>
</ul>

<h3>Sangre total reconstituida</h3>
<ul>
  <li>CE + PFC - Hto 40-50% - CE con menos de 5 dias (minimiza hipercalemia).</li>
  <li>Indicaciones: exanguinotransfusion, transfusion masiva (&gt;10 U CE o &gt;1 VST/24h).</li>
  <li>Vigencia: segun anticoagulante (sistema cerrado) o 4 horas (sistema abierto).</li>
</ul>

<h3>Concentrado eritrocitario (CE)</h3>
<ul>
  <li>Hto 65-80%. Transporte de O2. Conservar +1 a +6 C.</li>
  <li>Vigencia: CPD 21d - CPD-A 35d - CPD-M/SA 42d.</li>
  <li>Decision clinica: Hb &lt; 7 g/dL toleran bien si no hay comorbilidad.</li>
  <li>No marcar como meta &gt; 10 g/dL ni cifras normales.</li>
</ul>

<h3>Reglas de oro transfusional</h3>
<ul>
  <li>Filtro estandar 170-210 micras - vigencia 4 horas - maximo 4 unidades.</li>
  <li>Tiempo maximo de infusion: 4 horas.</li>
  <li>Solo SSF 0.9% es compatible en la via.</li>
  <li>Signos vitales antes, durante y al final. Vigilancia estrecha los primeros 15 minutos.</li>
  <li>Mas de 30 minutos fuera de refrigeracion = destino final.</li>
</ul>

<h3>Clases de hemorragia aguda (adulto)</h3>
<table>
  <tr><th>Clase</th><th>% perdida</th><th>ml</th><th>Manejo</th></tr>
  <tr><td>I</td><td>0-15%</td><td>&lt;750</td><td>Cristaloides 1-2 L</td></tr>
  <tr><td>II</td><td>15-30%</td><td>750-1500</td><td>Cristaloides/coloides, posible CE</td></tr>
  <tr><td>III</td><td>30-40%</td><td>1500-2000</td><td>Probable CE</td></tr>
  <tr><td>IV</td><td>&gt;40%</td><td>&gt;2000</td><td>Requiere CE</td></tr>
</table>

<h3>Riesgos</h3>
<p>Sensibilizacion antigenica, hemolisis, TRALI, alergicas, anafilaxia, sobrecarga circulatoria, infecciosas, EICH, inmunomodulacion, purpura postransfusional, toxicidad al citrato, hipercalemia en masiva.</p>
`
  },

  u2: {
    title: "Unidad 2 - Transfusion de CE y Plaquetas",
    html: `
<h2>Unidad 2 - Transfusion de CE y Plaquetas</h2>

<h3>CE en adultos</h3>
<ul>
  <li>Anemia con hipoxia en normovolemicos (independiente de Hb).</li>
  <li>Hb preoperatoria &lt; 8 g/dL en cirugia con alto riesgo de hemorragia.</li>
  <li>Enfermedad coronaria/ACV/pulmonar severa, &gt;70 anos, Hb &lt; 10 g/dL.</li>
</ul>

<h3>Pediatrico menor de 4 meses (por Hto)</h3>
<ul>
  <li>Hto &lt; 20%: reticulocitos bajos + hipoxia.</li>
  <li>Hto &lt; 30%: apnea/bradicardia, FC&gt;180 o FR&gt;80, O2 nasal, campana &lt;35%.</li>
  <li>Hto &lt; 35%: campana &gt;=35%, presion mecanica asistida.</li>
  <li>Hto &lt; 45%: ECMO, cardiopatias cianogenas, RN&lt;24h con Hb&lt;13.</li>
  <li>Cirugia mayor: Hto &gt; 30% / Hb &gt; 10.</li>
</ul>

<h3>Dosis</h3>
<ul>
  <li>Adulto: 1 U sube Hb 1 g/dL (Hto 3-4%).</li>
  <li>Pediatrico: 8 ml/kg sube 1 g/dL. 10-15 ml/kg/dia (max 2 U/dia en cronicos).</li>
  <li>Velocidad 2-3 ml/min. Volumen por U &lt;10% VST.</li>
</ul>

<h3>CE modificados</h3>
<table>
  <tr><th>Tipo</th><th>Indicacion principal</th></tr>
  <tr><td>Lavado</td><td>Alergicos, deficiencia IgA, transfusion intrauterina</td></tr>
  <tr><td>Leucorreducido (&lt;1x10^6)</td><td>Anti-HLA, FNH recurrente, prevencion CMV. NO previene EICH.</td></tr>
  <tr><td>Radiado (25-50 Gy)</td><td>Previene EICH: CPH, Hodgkin, familiar 1-2 grado, &lt;1200g, in utero. Vigencia 28d.</td></tr>
  <tr><td>Aferesis</td><td>Fenotipo especial, Rh(-), menos donadores</td></tr>
</table>

<h3>Concentrados plaquetarios</h3>
<ul>
  <li>De ST: 45-60 ml, 5.5 x 10^10 plaq.</li>
  <li>De aferesis: 1 U = 3 x 10^11 = 5-8 CP de ST.</li>
  <li>Dosis: adulto 5-8 U o 1 aferesis. Pediatrico 4 CP/m2. RN 10-20 ml/kg.</li>
  <li>Conservacion: +20 a +24 C con agitacion 20 rpm. Vigencia 3-5 dias.</li>
</ul>

<h3>Profilactica vs Terapeutica</h3>
<table>
  <tr><th>Modo</th><th>Meta</th><th>Dosis</th><th>Limite</th></tr>
  <tr><td>Profilactica</td><td>&gt;25,000/uL</td><td>&gt;4x10^11</td><td>&lt;10,000/uL</td></tr>
  <tr><td>Terapeutica</td><td>&gt;40,000/uL</td><td>&gt;6x10^11</td><td>Individualizado</td></tr>
</table>

<h3>Umbrales por procedimiento</h3>
<ul>
  <li>Neurocirugia/oftalmo/SNC: &lt;100 x 10^9/L.</li>
  <li>Cirugia/CVC/puncion lumbar: &lt;50 x 10^9/L.</li>
  <li>Falla medular: &lt;10 x 10^9/L.</li>
  <li>Trombocitopenia + fiebre/coagulopatia: &lt;20 x 10^9/L.</li>
</ul>

<h3>Contraindicaciones de plaquetas</h3>
<p>PTI, PTT, SHU, HIT, coagulopatia por deficit de factores, sangrado por defecto anatomico.</p>

<h3>Refractariedad (IRC)</h3>
<p>Esperado &gt; 7.5 x 10^9/uL (adulto) o &gt; 8.2 x 10^9 (pediatrico) a 1 h post-transfusion.</p>
<p>IRC = (post - pre) x m2 SC / (plaq transfundidas x 10^11).</p>
`
  },

  u3: {
    title: "Unidad 3 - PFC y Crioprecipitado",
    html: `
<h2>Unidad 3 - Plasma fresco congelado y Crioprecipitado</h2>

<h3>Plasma fresco congelado (PFC)</h3>
<ul>
  <li>Del plasma tras retirar formes. Congelar en 6 h a menos -30 C.</li>
  <li>Almacenar &lt;= -18 C. Vigencia 12 meses. 6 h tras descongelar.</li>
  <li>Contiene &gt;= 70% de factores + &gt;70 UI F VIII/100 ml.</li>
  <li>PDC (desprovisto de crio) = pobre en F VIII, vW, XIII, fibrinogeno.</li>
</ul>

<h3>Indicaciones absolutas</h3>
<ul>
  <li>PTT / SHU.</li>
  <li>Purpura fulminante del RN (deficit congenito proteina C, S, AT-III).</li>
  <li>Exanguinotransfusion neonatal.</li>
  <li>Recambio plasmatico en PTT (preferir PDC).</li>
</ul>

<h3>En sangrado + tiempos alargados</h3>
<ul>
  <li>Deficit de factores sin concentrado especifico (II, V, X, XI).</li>
  <li>Enfermedad hemorragica del RN por deficit de vitamina K.</li>
  <li>Revertir anticoagulantes. Hemorragia post-trombolisis.</li>
  <li>CID aguda. Cirugia cardiaca con bomba.</li>
  <li>Transfusion masiva &gt;1 VST/24 h.</li>
  <li>Insuficiencia hepatica grave con hemorragia microvascular.</li>
</ul>

<h3>NO indicado</h3>
<p>Expansor de volumen, hipoalbuminemia, apoyo nutricional, aporte de Ig, tiempos alargados sin sangrado corregibles con vitamina K o desmopresina, sepsis sin sangrado, sangrias por policitemia.</p>

<h3>Indice de Coagulacion</h3>
<p>IC = TP paciente / TP testigo. Indicado si IC &gt; 1.5 + valoracion clinica.</p>

<h3>Dosis PFC</h3>
<p>10-20 ml/kg = 25-50% actividad de factores. Transfundir max 2 h antes del procedimiento. Dosis subsecuentes: 50%. No re-congelar.</p>

<h3>Seleccion ABO de plasma (INVERSA al CE)</h3>
<table>
  <tr><th>Receptor</th><th>Primera opcion</th></tr>
  <tr><td>O</td><td>O (luego A, B, AB)</td></tr>
  <tr><td>A</td><td>A o AB</td></tr>
  <tr><td>B</td><td>B o AB</td></tr>
  <tr><td>AB</td><td>AB solamente</td></tr>
</table>
<p>AB = donador universal de plasma. O = receptor universal.</p>

<h3>Crioprecipitado</h3>
<ul>
  <li>Fraccion precipitable del PFC a -70 C. 5-25 ml/bolsa. &lt;= -18 C. 12 meses.</li>
  <li>Contenido: F I (150-250 mg), F VIII &gt;= 80 UI, vW 40-70%, F XIII 20-30%.</li>
</ul>

<h3>Indicaciones crio</h3>
<ul>
  <li>Hipofibrinogenemia (&lt;100 mg/dL) + sangrado microvascular.</li>
  <li>Disfibrinogenemia. Deficit F XIII. Coagulopatia de consumo.</li>
  <li>Paciente uremico con sangrado sin respuesta a DDAVP.</li>
</ul>

<h3>Uso condicional</h3>
<ul>
  <li>Hemofilia A sin concentrado especifico.</li>
  <li>vW tipos 2 y 3 sin concentrado (tipo 1 primero DDAVP).</li>
  <li>Uso topico (cola de fibrina con trombina + CaCl2).</li>
</ul>

<h3>Dosis crio</h3>
<p>1 bolsa = 100 UI F VIII. Ejemplo: 60 kg con hemartrosis (15 UI/kg) = 900 UI = 9 bolsas. Fibrinogeno: 10 bolsas suben 80-100 mg/dL en adulto.</p>
`
  },

  u4: {
    title: "Unidad 4 - Aferesis",
    html: `
<h2>Unidad 4 - Aferesis</h2>

<h3>Concepto</h3>
<p>Extraer sangre - separar - retener componente - reinfundir resto. Dos tipos: Sustitutiva (para transfusion) y Terapeutica (tratamiento).</p>

<h3>Plaquetas por aferesis</h3>
<ul>
  <li>Duracion 60-90 min. Procesa 4000-5000 L. Rendimiento 3-9 x 10^11 (= 4-12 CP).</li>
  <li>Plaquetas predonacion &gt;= 150,000/uL. Sin ASA por 36 h.</li>
  <li>Intervalo: minimo 48 h con ST, minimo 2 dias entre plaquetaferesis (max 2/sem).</li>
</ul>

<h3>Doble CE por aferesis</h3>
<ul>
  <li>Hb &gt; 14 g/dL. Hto &gt; 42%. Volumen &gt; 5 L (peso &gt;= 70 kg).</li>
  <li>Hb postdonacion &gt;= 12 g/dL. Hto &gt;= 36%.</li>
  <li>Intervalo: 3 meses tras ST. 6 meses entre doble. Max 2/ano mujeres, 3/ano hombres.</li>
</ul>

<h3>Plasmaferesis</h3>
<ul>
  <li>Max 15% VST por sesion. Max 1 L/semana. Max 15 L/ano.</li>
  <li>Proteinas totales predonacion &gt;= 60 g/L.</li>
</ul>

<h3>Granulocitos</h3>
<ul>
  <li>Dosis minima 1 x 10^10. Optima 4-7 x 10^10.</li>
  <li>Donador estimulado 12 h antes: dexametasona 8-12 mg o FEC-G 5 ug/kg.</li>
  <li>Radiar 25-50 Gy. Transfundir ASAP. Max 24 h sin agitar. Compatibilidad ABO.</li>
  <li>Riesgo TRALI por hidroxietilalmidon.</li>
</ul>

<h3>CPH (Celulas progenitoras)</h3>
<ul>
  <li>Criterios flexibles. Consentimiento informado.</li>
  <li>Tipificacion HLA, ABO/Rh, fenotipo, serologia viral + endemicas.</li>
  <li>NO recibir radiacion gamma ni X. Cultivos en cada recoleccion.</li>
</ul>

<h3>Aferesis terapeutica</h3>
<p>Elimina celulas, plasma o componentes patologicos. Recambio Plasmatico: 1 vol elimina 66%, 2 vol 85%, 3 vol 95%.</p>

<h3>Formulas</h3>
<ul>
  <li>PV = VST x (1 - Hto).</li>
  <li>VST: 50 ml/kg obeso, 60 medio, 70 delgado.</li>
  <li>Volumen a remover: 1-1.5 PV (~40 ml/kg). PTT: 2-3 PV.</li>
</ul>

<h3>Categorias</h3>
<ul>
  <li>I (aceptada): Guillain-Barre, miastenia, PTT, Goodpasture, hiperviscosidad, Refsum.</li>
  <li>II (en combinacion): SHU, LES, Eaton-Lambert, Raynaud, linfomas T (fotoferesis).</li>
  <li>III (controvertida): aplasica, PTI, esclerosis multiple, EHRN, penfigo.</li>
  <li>IV (desconocida): SIDA, ELA, esquizofrenia, psoriasis.</li>
</ul>

<h3>Complicaciones</h3>
<ul>
  <li>Mortalidad 3/10,000: arritmia, edema pulmonar, SIRPA.</li>
  <li>Toxicidad al citrato: gluconato de calcio 10% IV (alternativa: heparina sodica).</li>
  <li>Reacciones alergicas, hipotension, coagulopatias.</li>
  <li>Intervalo minimo entre procedimientos: 48 h.</li>
</ul>

<h3>Cateter por peso</h3>
<p>&lt;10 kg: 7 Fr. 10-20: 8 Fr. 20-50: 9-10 Fr. &gt;50: 9-13.5 Fr.</p>
`
  },

  u5: {
    title: "Unidad 5 - Hemoderivados",
    html: `
<h2>Unidad 5 - Hemoderivados</h2>

<h3>Concepto</h3>
<p>Productos del fraccionamiento industrial del plasma. Incluyen albumina, Ig, anti-D, factores (VIII, IX, CTA, XIII, vW), AT-III, proteina C y S, selladores de fibrina.</p>

<h3>Reduccion viral</h3>
<p>Requiere 2+ procesos de inactivacion o 1+ de eliminacion. Metodos: solvente/detergente, pasteurizacion, calor vapor/seco, nanofiltracion 15/35 nm.</p>

<h3>IGIV</h3>
<ul>
  <li>&gt;95% IgG. Vida media 21-33 dias. Conservar &lt;=25 C. Usar en 3 h tras reconstituir.</li>
  <li>Velocidad: 1 mg/kg/min inicio, escalar a 2-3-4. Max 32 mg/kg/min.</li>
</ul>

<h3>Indicaciones y dosis IGIV</h3>
<table>
  <tr><th>Indicacion</th><th>Dosis</th></tr>
  <tr><td>Inmunodeficiencia primaria</td><td>400 mg/kg, luego 200-400 mg/kg c/21d</td></tr>
  <tr><td>Kawasaki</td><td>2 g/kg IV dosis unica en primeros 10 dias</td></tr>
  <tr><td>Guillain-Barre</td><td>400 mg/kg/dia x 5 dias</td></tr>
  <tr><td>PTI / AHAI grave</td><td>1 g/kg x 2d o 400 mg/kg/dia x 5d</td></tr>
  <tr><td>Rechazo trasplante</td><td>400 mg/kg IV</td></tr>
</table>

<h3>Inmunoglobulina anti-D (Rho)</h3>
<table>
  <tr><th>Condicion</th><th>Dosis</th></tr>
  <tr><td>Aborto o mola &lt;12 sem</td><td>120-150 ug</td></tr>
  <tr><td>&gt;12 sem, amnio, biopsia, 28 sem, postparto</td><td>250-300 ug</td></tr>
  <tr><td>Transfusion CE Rh(+)</td><td>100-250 ug por cada 10 ml</td></tr>
  <tr><td>PTI idiopatica</td><td>50-75 ug/kg IV x 3 dias</td></tr>
</table>

<h3>Albumina</h3>
<ul>
  <li>20-25% proteinas. 4-5x presion coloidosmotica. Pureza &gt;95%.</li>
  <li>Almacenar +2 a +8 C (10 anos) o &lt;=+37 C (3 anos). Evitar congelacion y luz.</li>
  <li>Adulto 125 ml/dia. Ninos 1-2 ml/kg al 2%. Velocidad 1-2 ml/min (max 30).</li>
  <li>Meta serica 2.5-3.5 g/dL.</li>
</ul>

<h4>Indicaciones albumina</h4>
<p>Choque distributivo con hipoalbuminemia &lt;2.5 g/dL. Paracentesis &gt;4 L. Sindrome nefrotico refractario. Enteropatia perdedora. Plasmaferesis. Peritonitis bacteriana. VOD hepatico. Hiperbilirrubinemia RN preexanguinotransfusion.</p>

<h4>Contraindicaciones</h4>
<p>Hipervolemia, expansor de volumen, ICC, desnutricion.</p>

<h3>Concentrados de factores</h3>
<ul>
  <li>F VIII: 1 UI/kg sube 2% actividad. Vida media 12 h. Hemofilia A.</li>
  <li>F IX: 1 UI/kg sube 1% actividad. Vida media 24 h. Hemofilia B.</li>
  <li>Pureza: intermedia (10-100 UI/mg), alta (100-1000), muy alta (&gt;1000).</li>
</ul>

<h3>CTA y rF VIIa</h3>
<ul>
  <li>CTA (complejo protrombinico activado): hemofilia con inhibidores. 50-100 UI/kg c/12 h.</li>
  <li>rF VIIa: hemofilia con inhibidores &gt;5 UB. 90 ug/kg c/2 h adulto.</li>
  <li>Riesgo trombotico: TVP, trombosis arterial, IAM, CID.</li>
</ul>

<h3>Antitrombina III</h3>
<ul>
  <li>Inhibidor principal de trombina. Acelerado por heparina.</li>
  <li>Deficit congenito o adquirido (CID, cirrosis).</li>
  <li>Formula: UI = (100 - actividad%) x kg. Meta &gt;= 80%.</li>
  <li>Reconstituido: 50 UI/ml. IV lento. Combinar con heparina o fibrinoliticos.</li>
</ul>

<h3>Selladores de fibrina</h3>
<p>Fibrinogeno + trombina + antifibrinolitico. Coagulo local. Cirugia oral, mucosa nasal, cardiaca. Efectos: anticuerpos anti F V bovino, anafilaxia, hipotension por kalicreina.</p>
`
  },

  comparativas: {
    title: "Tablas comparativas globales",
    html: `
<h2>Tablas comparativas - Medicina Transfusional</h2>

<h3>Temperaturas y vigencias</h3>
<table>
  <tr><th>Producto</th><th>Almacenamiento</th><th>Vigencia</th></tr>
  <tr><td>Sangre fresca total</td><td>+1 a +6 C</td><td>6-8 h</td></tr>
  <tr><td>CE CPD/ACD-CPD</td><td>+1 a +6 C</td><td>21 dias</td></tr>
  <tr><td>CE CPD-A</td><td>+1 a +6 C</td><td>35 dias</td></tr>
  <tr><td>CE CPD-M / SA</td><td>+1 a +6 C</td><td>42 dias</td></tr>
  <tr><td>CE lavado (cerrado)</td><td>+1 a +6 C</td><td>24 h</td></tr>
  <tr><td>CE lavado (abierto)</td><td>+1 a +6 C</td><td>4 h</td></tr>
  <tr><td>CE radiado</td><td>+1 a +6 C</td><td>28 d post-radiacion</td></tr>
  <tr><td>Concentrado plaquetario</td><td>+20 a +24 C, 20 rpm</td><td>3-5 dias</td></tr>
  <tr><td>PFC</td><td>&lt;= -18 C</td><td>12 meses (6 h descongelado)</td></tr>
  <tr><td>Crioprecipitado</td><td>&lt;= -18 C</td><td>12 meses (6 h descongelado)</td></tr>
  <tr><td>Granulocitos</td><td>+20 a +24 C sin agitar</td><td>&lt;24 h, ASAP</td></tr>
  <tr><td>Albumina</td><td>+2 a +8 C (10a) o &lt;=37 C (3a)</td><td>Segun almacenaje</td></tr>
  <tr><td>IGIV</td><td>&lt;=+25 C</td><td>3 h tras reconstituir</td></tr>
</table>

<h3>Componentes celulares</h3>
<table>
  <tr><th>Componente</th><th>Volumen</th><th>Contenido</th><th>Dosis adulto</th><th>Efecto</th></tr>
  <tr><td>CE estandar</td><td>230-330 ml</td><td>Hto 65-80%</td><td>1 U</td><td>Hb +1 g/dL</td></tr>
  <tr><td>CP de ST</td><td>45-60 ml</td><td>&gt;=5.5x10^10</td><td>5-8 U</td><td>+30-60,000/uL</td></tr>
  <tr><td>CP aferesis</td><td>~200 ml</td><td>3-9x10^11</td><td>1 U</td><td>+30-60,000/uL</td></tr>
  <tr><td>PFC</td><td>150-250 ml</td><td>Factores &gt;=70%</td><td>10-20 ml/kg</td><td>25-50% factores</td></tr>
  <tr><td>Crioprecipitado</td><td>5-25 ml</td><td>I, VIII, vW, XIII</td><td>1 bolsa/7-10 kg</td><td>1 bolsa = 100 UI F VIII</td></tr>
  <tr><td>Granulocitos</td><td>&lt;500 ml</td><td>&gt;1x10^10</td><td>4-7x10^10</td><td>Fagocitosis</td></tr>
</table>

<h3>Productos modificados del CE</h3>
<table>
  <tr><th>Modificacion</th><th>Indicacion</th><th>NO previene</th></tr>
  <tr><td>Lavado</td><td>Alergicos, IgA, intrauterina</td><td>Leucos, antigenos membrana</td></tr>
  <tr><td>Leucorreducido</td><td>Anti-HLA, FNH, CMV</td><td>EICH-AT</td></tr>
  <tr><td>Radiado (25-50 Gy)</td><td>Previene EICH: CPH, Hodgkin, familiar, &lt;1200g</td><td>Aloanticuerpos, FNH</td></tr>
  <tr><td>Aferesis</td><td>Fenotipo especial, Rh(-)</td><td>-</td></tr>
</table>

<h3>Seleccion ABO</h3>
<p><b>CE (eritrocitos):</b> donador universal = O(-). Receptor universal = AB(+). Se elige por antigeno.</p>
<p><b>Plasma (inverso):</b> donador universal = AB. Receptor universal = O. Se elige por anticuerpo.</p>

<h3>Que transfundir - decision rapida</h3>
<table>
  <tr><th>Escenario</th><th>Producto</th></tr>
  <tr><td>Anemia con hipoxia</td><td>CE</td></tr>
  <tr><td>Plaquetas bajas + procedimiento</td><td>CP (profilaxis &gt;25k, terapeutica &gt;40k)</td></tr>
  <tr><td>Deficit factores + sangrado o IC&gt;1.5</td><td>PFC</td></tr>
  <tr><td>Fibrinogeno &lt;100, F VIII, vW, XIII</td><td>Crioprecipitado</td></tr>
  <tr><td>Hemofilia A / B</td><td>Concentrado F VIII / F IX</td></tr>
  <tr><td>Hemofilia con inhibidores &gt;5 UB</td><td>CTA o rF VIIa</td></tr>
  <tr><td>Choque distributivo, hipoalbuminemia</td><td>Albumina</td></tr>
  <tr><td>PTI, Kawasaki, Guillain-Barre</td><td>IGIV</td></tr>
  <tr><td>Mujer Rh(-) postparto</td><td>Anti-D 250-300 ug</td></tr>
</table>

<h3>Factores - vida media</h3>
<table>
  <tr><th>Factor</th><th>Vida media</th><th>1 UI/kg sube</th><th>Nota</th></tr>
  <tr><td>F VIII</td><td>8-12 h</td><td>2%</td><td>Hemofilia A, crio 100 UI/bolsa</td></tr>
  <tr><td>F IX</td><td>18-24 h</td><td>1%</td><td>Hemofilia B, NO en crio</td></tr>
  <tr><td>AT-III</td><td>60-90 h</td><td>1%</td><td>UI = (100 - % basal) x kg</td></tr>
  <tr><td>Fibrinogeno</td><td>3-6 dias</td><td>-</td><td>1 bolsa crio / 7 kg</td></tr>
</table>

<h3>Tamizaje obligatorio (6 agentes)</h3>
<p>VIH (anti-VIH 1-2). Hepatitis B (HBsAg). Hepatitis C (anti-HCV). HTLV I-II. Sifilis. Chagas.</p>
`
  }
};

function downloadSummary(unitId){
  const data = SUMMARIES[unitId];
  if (!data){ alert('Resumen no disponible'); return; }
  const w = window.open('', '_blank', 'width=800,height=900');
  if (!w){ alert('Habilita las ventanas emergentes para descargar el PDF.'); return; }

  const doc = w.document;
  const styles = `
@page{size:A4;margin:1cm}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-size:10pt;line-height:1.3;color:#1e293b;padding:0}
h2{color:#0f2a5c;font-size:14pt;border-bottom:2px solid #f59e0b;padding-bottom:3px;margin-bottom:6px}
h3{color:#0f2a5c;font-size:10.5pt;margin:6px 0 3px;padding-left:5px;border-left:3px solid #f59e0b}
h4{color:#1e4ba0;font-size:9.5pt;margin:4px 0 2px}
p{margin-bottom:3px;font-size:9pt}
ul{margin:2px 0 4px 16px;font-size:9pt}
li{margin-bottom:1px}
b{color:#0f2a5c}
table{width:100%;border-collapse:collapse;margin:3px 0;font-size:8.5pt}
th{background:#0f2a5c;color:#fff;padding:3px 5px;text-align:left;font-weight:600}
td{padding:2.5px 5px;border-bottom:1px solid #e2e8f0;vertical-align:top}
tr:nth-child(even) td{background:#f8fafc}
.head{background:linear-gradient(135deg,#0f2a5c 0%,#1e4ba0 100%);color:#fff;padding:6px 10px;margin-bottom:8px;border-radius:4px}
.head b{color:#f59e0b;font-size:8pt;float:right}
.footer{text-align:center;font-size:7pt;color:#64748b;margin-top:8px;padding-top:4px;border-top:1px solid #e2e8f0}
.btn-print{background:#0f2a5c;color:#fff;border:none;padding:8px 16px;border-radius:5px;cursor:pointer;font-size:10pt;margin-bottom:10px}
@media print{.btn-print{display:none}}
`;

  doc.open();
  doc.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + data.title + '</title><style>' + styles + '</style></head><body>');
  doc.write('<button class="btn-print" onclick="window.print()">Guardar como PDF</button>');
  doc.write('<div class="head"><b>' + data.title + '</b><span style="font-weight:600">Medicina Transfusional</span></div>');
  doc.write(data.html);
  doc.write('<div class="footer">Resumen de 2 paginas - Selecciona Guardar como PDF en el cuadro de impresion</div>');
  doc.close();

  setTimeout(function(){ w.focus(); w.print(); }, 500);
}
