<link href="table.css" rel="stylesheet">
<script src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
<script>
$(document).ready( function () {
    $('#DMGTable').DataTable( {
        paging: false,
		searching: true,
		dom: 'tpri'
    } );
} );
</script>

<script>
function searchFunction() {

    var table = $('#DMGTable').DataTable();
	var input = document.getElementById("DMGInput");
    table.search( input.value ).draw();
};
</script>

## A full table of every DMG component and their part numbers.

<input type="text" id="DMGInput" onkeyup="searchFunction()" placeholder="Search for Component/Part Number">

<table id="DMGTable" class="display">
    <thead>
        <tr>
            <th>Component</th>
            <th>Part Number</th>
        </tr>
    </thead>
    <tbody>
  <tr>
    <td>U3</td>
    <td>LH5264</td>
  </tr>
  <tr>
    <td>DA1</td>
    <td>DAN215</td>
  </tr>
  <tr>
    <td>DA2</td>
    <td>DAN215</td>
  </tr>
  <tr>
    <td>DA3</td>
    <td>DAN215</td>
  </tr>
  <tr>
    <td>DA4</td>
    <td>DAN215</td>
  </tr>
  <tr>
    <td>R1</td>
    <td>Resistor 220Ω</td>
  </tr>
  <tr>
    <td>R2</td>
    <td>Resistor 220Ω</td>
  </tr>
  <tr>
    <td>R3</td>
    <td>Resistor 220Ω</td>
  </tr>
  <tr>
    <td>R4</td>
    <td>Resistor 220Ω</td>
  </tr>
  <tr>
    <td>R5</td>
    <td>Resistor 510Ω</td>
  </tr>
  <tr>
    <td>R6</td>
    <td>Resistor 510Ω</td>
  </tr>
  <tr>
    <td>U2</td>
    <td>LH5264_RAM</td>
  </tr>
  <tr>
    <td>X1</td>
    <td>KSS Oscillator 4.194304MHz</td>
  </tr>
  <tr>
    <td>R8</td>
    <td>Resistor 1MΩ</td>
  </tr>
  <tr>
    <td>U3</td>
    <td>LH5264_RAM</td>
  </tr>
  <tr>
    <td>U1</td>
    <td>LR350902_CPU</td>
  </tr>
  <tr>
    <td>R7</td>
    <td>Resistor 180kΩ</td>
  </tr>
  <tr>
    <td>U4</td>
    <td>R3R40</td>
  </tr>
  <tr>
    <td>P1</td>
    <td>Cartridge Socket</td>
  </tr>
  <tr>
    <td>P3</td>
    <td>LCD Board</td>
  </tr>
  <tr>
    <td>P2</td>
    <td>DMG Link Port</td>
  </tr>
  <tr>
    <td>C2</td>
    <td>100µ/10V</td>
  </tr>
  <tr>
    <td>C21</td>
    <td>27µF</td>
  </tr>
  <tr>
    <td>C22</td>
    <td>27µF</td>
  </tr>
  <tr>
    <td>C20</td>
    <td>100pF</td>
  </tr>
  <tr>
    <td>C10</td>
    <td>0.1µ</td>
  </tr>
  <tr>
    <td>C16</td>
    <td>100pF</td>
  </tr>
  <tr>
    <td>C17</td>
    <td>100pF</td>
  </tr>
  <tr>
    <td>C18</td>
    <td>100pF</td>
  </tr>
  <tr>
    <td>C19</td>
    <td>100pF</td>
  </tr>
  <tr>
    <td>C1</td>
    <td>100µ/10V</td>
  </tr>
  <tr>
    <td>C11</td>
    <td>0.01µ</td>
  </tr>
  <tr>
    <td>C12</td>
    <td>0.01µF</td>
  </tr>
  <tr>
    <td>C13</td>
    <td>0.01µF</td>
  </tr>
  <tr>
    <td>C14</td>
    <td>0.01µF</td>
  </tr>
  <tr>
    <td>C15</td>
    <td>0.01µ</td>
  </tr>
  <tr>
    <td>C4</td>
	<td>1µ/50V</td>
  </tr>
  <tr>
    <td>C3</td>
	<td>1µ/50V</td>
  </tr>
  <tr>
    <td>VR1</td>
	<td>10Kx2</td>
  </tr>
  <tr>
    <td>C9</td>
	<td>0.047µF</td>
  </tr>
  <tr>
    <td>C7</td>
	<td>0.047µF</td>
  </tr>
  <tr>
    <td>C6</td>
	<td>10µF/15V</td>
  </tr>
  <tr>
    <td>C5</td>
	<td>10µF/16V</td>
  </tr>
  <tr>
    <td>C8</td>
	<td>0.047µF</td>
  </tr>
  <tr>
    <td>D1</td>
	<td>Unsure/Diode</td>
  </tr>
  <tr>
    <td>D2</td>
	<td>Unsure/Diode</td>
  </tr>
 </tbody>
</table>

<onebutton>
<ul>
            <li><a href="../">Go<strong>Back</strong></a></li>
          </ul>
</onebutton>
