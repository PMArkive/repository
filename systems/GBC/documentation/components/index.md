<link href="table.css" rel="stylesheet">
<script src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
<script>
$(document).ready( function () {
    $('#GBCTable').DataTable( {
        paging: false,
		searching: true,
		dom: 'tpri'
    } );
} );
</script>

<script>
function searchFunction() {

    var table = $('#GBCTable').DataTable();
	var input = document.getElementById("GBCInput");
    table.search( input.value ).draw();
};
</script>

## A full table of every GBC component and their part numbers/specification.

<input type="text" id="GBCInput" onkeyup="searchFunction()" placeholder="Search for Component/Part Number/Spesification">

<table id="GBCTable" class="display">
    <thead>
        <tr>
            <th>Component</th>
            <th>Part Number/Spesification</th>
        </tr>
    </thead>
    <tbody>
  <tr>
    <td>P3</td>
    <td>EXT Connector</td>
  </tr>
  <tr>
    <td>EM9</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>FB1</td>
    <td>4W601</td>
  </tr>
  <tr>
    <td>C9</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>R9</td>
    <td>Resistor 150Ω(1/10W)</td>
  </tr>
  <tr>
    <td>D3</td>
    <td>GL381J2</td>
  </tr>
  <tr>
    <td>R10</td>
    <td>Resistor 1KΩ</td>
  </tr>
  <tr>
    <td>C3</td>
    <td>0.47µF/10V</td>
  </tr>
  <tr>
    <td>Q3</td>
    <td>2SC4081</td>
  </tr>
  <tr>
    <td>C4</td>
    <td>22pF/50V</td>
  </tr>
  <tr>
    <td>C5</td>
    <td>100pF/50V</td>
  </tr>
  <tr>
    <td>C6</td>
    <td>100pF/50V</td>
  </tr>
  <tr>
    <td>C7</td>
    <td>100pF/50V</td>
  </tr>
  <tr>
    <td>RA3</td>
    <td>Resistor 270Ω</td>
  </tr>
  <tr>
    <td>R26</td>
    <td>Resistor 5.6KΩ</td>
  </tr>
  <tr>
    <td>R0</td>
    <td>Resistor 45Ω</td>
  </tr>
  <tr>
    <td>R1</td>
    <td>Resistor 46Ω</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>Resistor 47Ω</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>Resistor 48Ω</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>Resistor 96Ω</td>
  </tr>
  <tr>
    <td>R15</td>
    <td>Resistor 1MΩ</td>
  </tr>
  <tr>
    <td>C12</td>
    <td>33pF/50V</td>
  </tr>
  <tr>
    <td>R13</td>
    <td>Resistor 200KΩ</td>
  </tr>
  <tr>
    <td>R12</td>
    <td>Resistor 4.7KΩ</td>
  </tr>
  <tr>
    <td>Q5</td>
    <td>PT38DF</td>
  </tr>
  <tr>
    <td>Q4</td>
    <td>2SC40B1</td>
  </tr>
  <tr>
    <td>C11</td>
    <td>0.015µF/25V</td>
  </tr>
  <tr>
    <td>R14</td>
    <td>Resistor 2KΩ</td>
  </tr>
  <tr>
    <td>R23</td>
    <td>Resistor 33KΩ</td>
  </tr>
  <tr>
    <td>C42</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>R24</td>
    <td>Resistor 33KΩ</td>
  </tr>
  <tr>
    <td>P1</td>
    <td>Cartridge Connector</td>
  </tr>
  <tr>
    <td>C10</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>R27</td>
    <td>Resistor 100Ω</td>
  </tr>
  <tr>
    <td>C47</td>
    <td>150pF/50V</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>Resistor 18KΩ</td>
  </tr>
  <tr>
    <td>C17</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>U6</td>
    <td>PST9135N</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>18pF/50V</td>
  </tr>
  <tr>
    <td>R25</td>
    <td>Resistor 1.5MΩ</td>
  </tr>
  <tr>
    <td>C2</td>
    <td>27pF/50V</td>
  </tr>
  <tr>
    <td>C41</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>C46</td>
    <td>Version Spesific (Sorry i don't know either)</td>
  </tr>
  <tr>
    <td>C45</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>X1</td>
    <td>KSS Oscillator 8.388608MHz</td>
  </tr>
  <tr>
    <td>P01</td>
    <td>DPAD Left</td>
  </tr>
  <tr>
    <td>P02</td>
    <td>DPAD Up</td>
  </tr>
  <tr>
    <td>P03</td>
    <td>DPAD Down</td>
  </tr>
  <tr>
    <td>P00</td>
    <td>DPAD Right</td>
  </tr>
  <tr>
    <td>P12</td>
    <td>Select Button</td>
  </tr>
  <tr>
    <td>P13</td>
    <td>Start Button</td>
  </tr>
  <tr>
    <td>P11</td>
    <td>B Button</td>
  </tr>
  <tr>
    <td>P10</td>
    <td>A Button</td>
  </tr>
  <tr>
    <td>C29</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>C19</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>C18</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>RA1</td>
    <td>Resistor 510Ω</td>
  </tr>
  <tr>
    <td>VR1</td>
    <td>10k x 2 (Two Circuits)</td>
  </tr>
  <tr>
    <td>C13</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>U1</td>
    <td>CGB-CPU</td>
  </tr>
  <tr>
    <td>C33</td>
    <td>0.01µF/50V</td>
  </tr>
  <tr>
    <td>U2</td>
    <td>256K SRAM TSOP</td>
  </tr>
  <tr>
    <td>P4</td>
    <td>DC Jack</td>
  </tr>
  <tr>
    <td>BT1</td>
    <td>Battery</td>
  </tr>
  <tr>
    <td>JC1</td>
    <td>Battery Contact</td>
  </tr>
  <tr>
    <td>JC2</td>
    <td>Battery Contact</td>
  </tr>
  <tr>
    <td>EM8</td>
    <td>BLM21P221SG</td>
  </tr>
  <tr>
    <td>EM10</td>
    <td>ACM4532-801-2P</td>
  </tr>
  <tr>
    <td>EM6</td>
    <td>BLM21P221SG</td>
  </tr>
  <tr>
    <td>EM7</td>
    <td>BLM21P221SG</td>
  </tr>
  <tr>
    <td>EM8</td>
    <td>BLM21P221SG(?)</td>
  </tr>
  <tr>
    <td>F2</td>
    <td>ICP-S10</td>
  </tr>
  <tr>
    <td>F1</td>
    <td>ICP-S10</td>
  </tr>
  <tr>
    <td>D2</td>
    <td>1SS355</td>
  </tr>
  <tr>
    <td>SW1</td>
    <td>Power SW</td>
  </tr>
  <tr>
    <td>R1</td>
    <td>Resistor 750Ω</td>
  </tr>
  <tr>
    <td>C31</td>
    <td>4.7µF/10V(2125)</td>
  </tr>
  <tr>
    <td>C22</td>
    <td>1µF/16V(2125)</td>
  </tr>
  <tr>
    <td>C32</td>
    <td>100µF/6.3V(ø6.3x5.4)</td>
  </tr>
  <tr>
    <td>C30</td>
    <td>1µF/16V(2125)</td>
  </tr>
  <tr>
    <td>U5</td>
    <td>DC-DC</td>
  </tr>
  <tr>
    <td>C40</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>C39</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>U7</td>
    <td>RN5RT33A</td>
  </tr>
  <tr>
    <td>D5</td>
    <td>1SS355</td>
  </tr>
  <tr>
    <td>D4</td>
    <td>SLI-332UR</td>
  </tr>
  <tr>
    <td>Q2</td>
    <td>2SC4081</td>
  </tr>
  <tr>
    <td>R7</td>
    <td>Resistor 750Ω</td>
  </tr>
  <tr>
    <td>R8</td>
    <td>Resistor 47KΩ</td>
  </tr>
  <tr>
    <td>C43</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>C44</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>P5</td>
    <td>Phone Jack</td>
  </tr>
  <tr>
    <td>EM5</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>SP1</td>
    <td>Speaker</td>
  </tr>
  <tr>
    <td>EM4</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>EM2</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>EM3</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>EM1</td>
    <td>BLM11B102S(1608)</td>
  </tr>
  <tr>
    <td>C38</td>
    <td>100µF/4V(ø5)</td>
  </tr>
  <tr>
    <td>RA2</td>
    <td>Resistor 15Ω</td>
  </tr>
  <tr>
    <td>C15</td>
    <td>0.047µF/25V</td>
  </tr>
  <tr>
    <td>C16</td>
    <td>0.047µF/25V</td>
  </tr>
  <tr>
    <td>C14</td>
    <td>0.047µF/25V</td>
  </tr>
  <tr>
    <td>C25</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>C26</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>C27</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>U3</td>
    <td>AMP-MGB</td>
  </tr>
  <tr>
    <td>C34</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>C35</td>
    <td>22µF/16V(ø4)</td>
  </tr>
  <tr>
    <td>U9</td>
    <td>HNIL02FU</td>
  </tr>
  <tr>
    <td>R17</td>
    <td>Resistor 12KΩ</td>
  </tr>
  <tr>
    <td>R19</td>
    <td>Resistor 20Ω</td>
  </tr>
  <tr>
    <td>C36</td>
    <td>1µF/16V(2125)</td>
  </tr>
  <tr>
    <td>U10</td>
    <td>UMZ2N</td>
  </tr>
  <tr>
    <td>R21</td>
    <td>Resistor 120KΩ</td>
  </tr>
  <tr>
    <td>C8</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>R20</td>
    <td>Resistor 15KΩ</td>
  </tr>
  <tr>
    <td>VR2</td>
    <td>Voltage Regulator 50K</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>Resistor 20Ω</td>
  </tr>
  <tr>
    <td>R22</td>
    <td>Resistor 11KΩ</td>
  </tr>
  <tr>
    <td>R5</td>
    <td>Resistor 18KΩ</td>
  </tr>
  <tr>
    <td>D1</td>
    <td>RD43S B1</td>
  </tr>
  <tr>
    <td>R6</td>
    <td>Resistor 18KΩ</td>
  </tr>
  <tr>
    <td>C20</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>R18</td>
    <td>Resistor 47KΩ</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>Resistor 4.7KΩ</td>
  </tr>
  <tr>
    <td>C37</td>
    <td>1µF/10V</td>
  </tr>
  <tr>
    <td>C21</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>Q1</td>
    <td>2SA1576A</td>
  </tr>
  <tr>
    <td>U8</td>
    <td>HR-TFT (CGB-Screen)</td>
  </tr>
  <tr>
    <td>P2</td>
    <td>LCD-Connector</td>
  </tr>
  <tr>
    <td>C23</td>
    <td>0.0µF/50V</td>
  </tr>
  <tr>
    <td>U4</td>
    <td>CGB-REG</td>
  </tr>
  <tr>
    <td>C24</td>
    <td>0.1µF/16V</td>
  </tr>
  <tr>
    <td>C28</td>
    <td>0.1µF/16V</td>
  </tr>
 </tbody>
</table>

<onebutton>
<ul>
            <li><a href="../">Go<strong>Back</strong></a></li>
          </ul>
</onebutton>
