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
