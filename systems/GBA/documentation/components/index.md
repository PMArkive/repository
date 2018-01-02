<link href="table.css" rel="stylesheet">
<script src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
<script>
$(document).ready( function () {
    $('#AGBTable').DataTable( {
        paging: false,
		searching: true,
    } );
} );
</script>

<script>
function searchFunction() {

    var table = $('#AGBTable').DataTable();
	var input = document.getElementById("AGBInput");
    table.search( input.value ).draw();
};
</script>

## A Searchable table of components that the Gameboy Advance(AGB) uses.

<input type="text" id="AGBInput" onkeyup="searchFunction()" placeholder="Search for Component/Part Number">

<table id="AGBTable" class="display">
    <thead>
        <tr>
            <th>Component</th>
            <th>Part Number</th>
        </tr>
    </thead>
    <tbody>
  <tr>
    <td>DA1</td>
    <td>DA204U</td>
  </tr>
  <tr>
    <td>DA2</td>
    <td>DA204U</td>
  </tr>
  <tr>
    <td>Q1</td>
    <td>DTA123JUA</td>
  </tr>
  <tr>
    <td>Q2</td>
    <td>DTA114TUA</td>
  </tr>
   <tr>
    <td>Q3</td>
    <td>DTC114YUA</td>
  </tr>
   <tr>
    <td>Q4</td>
    <td>FDV303N</td>
  </tr>
   <tr>
    <td>Q5</td>
    <td>FDV303N</td>
  </tr>
   <tr>
    <td>Q6</td>
    <td>2SK1582</td>
  </tr>
   <tr>
    <td>Q7</td>
    <td>SSM3J01F</td>
  </tr>
   <tr>
    <td>Q8</td>
    <td>2SC4081</td>
  </tr>
   <tr>
    <td>Q9</td>
    <td>2SC4081</td>
  </tr>
  <tr>
    <td>Q10</td>
    <td>DTC114YUA</td>
  </tr>
  <tr>
    <td>CP1</td>
	<td>100uF/4V</td>
  </tr>
  <tr>
    <td>CP2</td>
	<td>100uF/6.3V(Low Z)</td>
  </tr>
  <tr>
    <td>CP3</td>
	<td>470uF/6.3V</td>
  </tr>
  <tr>
    <td>DL1</td>
	<td>SML311UT</td>
  </tr>
  <tr>
    <td>DL2</td>
	<td>SML310MT</td>
  </tr>
  <tr>
    <td>D1</td>
	<td>MA112</td>
  </tr>
  <tr>
    <td>D2</td>
	<td>RB411D</td>
  </tr>
  <tr>
    <td>D3</td>
	<td>RB491D</td>
  </tr>
  <tr>
    <td>F1</td>
	<td>Fuse 4341.25</td>
  </tr>
  <tr>
    <td>R13</td>
	<td>Resistor 150Ω</td>
  </tr>
  <tr>
    <td>R33</td>
	<td>Resistor 5.1Ω</td>
  </tr>
  <tr>
    <td>C25</td>
	<td>B474K/6.3V(1608)</td>
  </tr>
  <tr>
    <td>C23</td>
	<td>B104K/6.3V</td>
  </tr>
  <tr>
    <td>C22</td>
	<td>B104K/6.3V</td>
  </tr>
  <tr>
    <td>C26</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C24</td>
	<td>B105K/6.3V(1608)</td>
  </tr>
  <tr>
    <td>C27</td>
	<td>F475Z/10V(2125)</td>
  </tr>
  <tr>
    <td>C40</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C41</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C36</td>
	<td>F105Z/16V(2125)</td>
  </tr>
  <tr>
    <td>C35</td>
	<td>F105Z/16V(2125)</td>
  </tr>
  <tr>
    <td>C56</td>
	<td>B225K/6.3V(2125)</td>
  </tr>
  <tr>
    <td>C57</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>R34</td>
	<td>Resistor 15kΩ</td>
  </tr>
  <tr>
    <td>R11</td>
	<td>Resistor 150Ω</td>
  </tr>
  <tr>
    <td>R12</td>
	<td>Resistor 150Ω</td>
  </tr>
  <tr>
    <td>L1</td>
	<td>SLF7045T/100uH</td>
  </tr>
  <tr>
    <td>C43</td>
	<td>B475K/6.3V(2125)</td>
  </tr>
  <tr>
    <td>C37</td>
	<td>F103Z/16V</td>
  </tr>
  <tr>
    <td>R32</td>
	<td>Resistor 1MΩ</td>
  </tr>
  <tr>
    <td>C44</td>
	<td>B225K/6.3V(2125)</td>
  </tr>
  <tr>
    <td>R25</td>
	<td>Resistor 47Ω</td>
  </tr>
  <tr>
    <td>R26</td>
	<td>Resistor 15kΩ</td>
  </tr>
  <tr>
    <td>R10</td>
	<td>Resistor 470Ω</td>
  </tr>
  <tr>
    <td>R18</td>
	<td>Resistor 33kΩ</td>
  </tr>
  <tr>
    <td>U10</td>
	<td>UMG3N(4.7K/-)</td>
  </tr>
  <tr>
    <td>C55</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>U4</td>
	<td>IC</td>
  </tr>
  <tr>
    <td>C17</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>EM3</td>
	<td>HW601(1608)</td>
  </tr>
  <tr>
    <td>EM1</td>
	<td>ACM4532-102-3P</td>
  </tr>
  <tr>
    <td>EM2</td>
	<td>ACM4532-102-3P</td>
  </tr>
  <tr>
    <td>C18</td>
	<td>CH101J/50V</td>
  </tr>
  <tr>
    <td>C19</td>
	<td>CH101J/50V</td>
  </tr>
  <tr>
    <td>C20</td>
	<td>CH101J/50V</td>
  </tr>
  <tr>
    <td>P4</td>
	<td>AGB 6 Pin Connector</td>
  </tr>
  <tr>
    <td>R29</td>
	<td>Resistor 18kΩ</td>
  </tr>
  <tr>
    <td>R35</td>
	<td>Resistor 100kΩ</td>
  </tr>
  <tr>
    <td>R21</td>
	<td>Resistor 330Ω</td>
  </tr>
  <tr>
    <td>R22</td>
	<td>Resistor 330Ω</td>
  </tr>
  <tr>
    <td>R23</td>
	<td>Resistor 330Ω</td>
  </tr>
  <tr>
    <td>R24</td>
	<td>Resistor 330Ω</td>
  </tr>
  <tr>
    <td>EM7</td>
	<td>HW601(1608)</td>
  </tr>
  <tr>
    <td>C30</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>C61</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>Q11</td>
	<td>DTC114YUA(10k/47k)</td>
  </tr>
  <tr>
    <td>U1</td>
	<td>AGB-CPU</td>
  </tr>
  <tr>
    <td>R38</td>
	<td>Resistor 47Ω</td>
  </tr>
  <tr>
    <td>R39</td>
	<td>Resistor 47Ω</td>
  </tr>
  <tr>
    <td>C7</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C2</td>
	<td>Unknown</td>
  </tr>
  <tr>
    <td>C1</td>
	<td>Unknown</td>
  </tr>
  <tr>
    <td>R40</td>
	<td>Resistor 15Ω</td>
  </tr>
  <tr>
    <td>R6</td>
	<td>Resistor 100kΩ</td>
  </tr>
  <tr>
    <td>R2</td>
	<td>Resistor 10kΩ</td>
  </tr>
  <tr>
    <td>R1</td>
	<td>Resistor 1.5MΩ</td>
  </tr>
  <tr>
    <td>R5</td>
	<td>Resistor 100kΩ</td>
  </tr>
  <tr>
    <td>C62</td>
	<td>F103Z/16V</td>
  </tr>
  <tr>
    <td>R43</td>
	<td>Resistor 15Ω</td>
  </tr>
  <tr>
    <td>C63</td>
	<td>F103Z/16V</td>
  </tr>
  <tr>
    <td>C64</td>
	<td>F103Z/16V</td>
  </tr>
  <tr>
    <td>R44</td>
	<td>Resistor 15Ω</td>
  </tr>
  <tr>
    <td>C3</td>
	<td>CH270J/50V</td>
  </tr>
  <tr>
    <td>R41</td>
	<td>Resistor 2.2kΩ</td>
  </tr>
  <tr>
    <td>C4</td>
	<td>CH330J/50V</td>
  </tr>
  <tr>
    <td>X1</td>
	<td>KSS Oscillator 4.194304MHz</td>
  </tr>
  <tr>
    <td>C52</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C53</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C15</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C16</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C5</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C34</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C6</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>U2</td>
	<td>AGB-SRAM</td>
  </tr>
  <tr>
    <td>C8</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C1</td>
	<td>F103Z/16V</td>
  </tr>
  <tr>
    <td>C2</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>R36</td>
	<td>Resistor 270Ω</td>
  </tr>
  <tr>
    <td>U3</td>
	<td>AGB-REG</td>
  </tr>
  <tr>
    <td>C42</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>C54</td>
	<td>B475K/6.3V(2125)</td>
  </tr>
  <tr>
    <td>U5</td>
	<td>DMD2N</td>
  </tr>
  <tr>
    <td>C33</td>
	<td>F105Z/15V(2125)</td>
  </tr>
  <tr>
    <td>R15</td>
	<td>Resistor 33kΩ</td>
  </tr>
  <tr>
    <td>VR1</td>
	<td>50K(VR)</td>
  </tr>
  <tr>
    <td>P2</td>
	<td>LCD Connector</td>
  </tr>
  <tr>
    <td>C13</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C14</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>U7</td>
	<td>AGB-LCD</td>
  </tr>
  <tr>
    <td>D4</td>
	<td>Ma112 or ISS355</td>
  </tr>
  <tr>
    <td>C28</td>
	<td>F105Z/10V(1608)</td>
  </tr>
  <tr>
    <td>R27</td>
	<td>Resistor 200kΩ</td>
  </tr>
  <tr>
    <td>R28</td>
	<td>Resistor 56kΩ</td>
  </tr>
  <tr>
    <td>R17</td>
	<td>Resistor 100kΩ</td>
  </tr>
  <tr>
    <td>R16</td>
	<td>Resistor 33kΩ</td>
  </tr>
  <tr>
    <td>C58</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C32</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>DZ1</td>
	<td>RD4.7S B1</td>
  </tr>
  <tr>
    <td>R31</td>
	<td>Resistor 47kΩ</td>
  </tr>
  <tr>
    <td>R30</td>
	<td>Resistor 47kΩ</td>
  </tr>
  <tr>
    <td>R37</td>
	<td>Resistor 470Ω</td>
  </tr>
  <tr>
    <td>VR2</td>
	<td>30K(VR)</td>
  </tr>
  <tr>
    <td>R14</td>
	<td>Resistor 4.7kΩ</td>
  </tr>
  <tr>
    <td>C59</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>R7</td>
	<td>Resistor 47kΩ</td>
  </tr>
  <tr>
    <td>R8</td>
	<td>Resistor 47kΩ</td>
  </tr>
  <tr>
    <td>C48</td>
	<td>B471K/16V</td>
  </tr>
  <tr>
    <td>C12</td>
	<td>B102K/16V</td>
  </tr>
  <tr>
    <td>C49</td>
	<td>CH101J/50V</td>
  </tr>
  <tr>
    <td>C11</td>
	<td>B470K/16V</td>
  </tr>
  <tr>
    <td>C39</td>
	<td>B104K/6.3V</td>
  </tr>
  <tr>
    <td>C51</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td>C50</td>
	<td>F104Z/16V</td>
  </tr>
  <tr>
    <td></td>
	<td></td>
  </tr>
  <tr>
    <td></td>
	<td></td>
  </tr>
  <tr>
    <td></td>
	<td></td>
  </tr>
  <tr>
    <td></td>
	<td></td>
  </tr>
 </tbody>
</table>

<onebutton>
<ul>
            <li><a href="../">Go<strong>Back</strong></a></li>
          </ul>
</onebutton>