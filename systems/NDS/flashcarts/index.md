<link href="table.css" rel="stylesheet">
<script src="jquery-3.2.1.min.js"></script>
<script type="text/javascript" charset="utf8" src="//cdn.datatables.net/1.10.16/js/jquery.dataTables.js"></script>
<script>
$(document).ready( function () {
    $('#FlashTable').DataTable( {
        paging: false,
		searching: true,
		dom: 'tpri'
    } );
} );
</script>

<script>
function searchFunction() {

    var table = $('#FlashTable').DataTable();
	var input = document.getElementById("FlashInput");
    table.search( input.value ).draw();
};
</script>

## NDS Flashcart Firmware/Software

Note: Virus scans might contain False Positives.

<input type="text" id="FlashInput" onkeyup="searchFunction()" placeholder="Search for Component/Part Number/Specification">

<table id="FlashTable" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Website</th>
			<th>DSi Compatible</th>
			<th>Version</th>
			<th>Virus Scan</th>
        </tr>
    </thead>
    <tbody>
    <tr>
	    <td><a href="AceKard.zip">AceKard</a></td>
		<td><a href="http://www.acekard.com">http://www.acekard.com</a></td>
		<td>No</td>
		<td>1.10</td>
		<td><a href="https://www.virustotal.com/#/file/88b88e2615f4d20aec63919a9994c1ee940e33388de2bd36340671e1469e2bc1/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard2.zip">AceKard 2</a></td>
		<td><a href="http://www.acekard.com">"http://www.acekard.com</a></td>
		<td>No</td>
		<td>4.23</td>
		<td><a href="https://www.virustotal.com/#/file/037ec6bb9f6f56a5bbeaed6aebee578bf14056c02b70fcfdcfdb92c5e69aaa14/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard21.zip">Acekard 2.1</a></td>
		<td><a href="http://www.acekard.com">"http://www.acekard.com</a></td>
		<td>No</td>
		<td>1.8.1</td>
		<td><a href="https://www.virustotal.com/#/file/5765a29cfa045cce9b9d5db6ef201c4baf143cf02b067e4de31e12f13594642f/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard2i.zip">Acekard 2i</a></td>
		<td><a href="http://www.acekard.com">"http://www.acekard.com</a></td>
		<td>Yes</td>
		<td>1.4.1</td>
		<td><a href="https://www.virustotal.com/#/file/6c7dbe833a0b7835ed4267968e675860ccba0b4d27b845d96902fdc48fa6a0e8/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="AcekardRPG.zip">Acekard RPG</a></td>
		<td><a href="http://www.acekard.com">"http://www.acekard.com</a></td>
		<td>No</td>
		<td>1.16</td>
		<td><a href="https://www.virustotal.com/#/file/6a2c63cc41db41da15c9eb459f3c0f2f13e803c4d6dece4838d3d7b3b5eeb33f/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard+.zip">Acekard+</a></td>
		<td><a href="http://www.acekard.com">"http://www.acekard.com</a></td>
		<td>No</td>
		<td>1.15</td>
		<td><a href="https://www.virustotal.com/#/file/42b415daa454f0705e7ce14a662362130bfd5824c629149f58c4a0e74002b687/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td><a href="CycoloDSEvo.zip">CycloDS Evolution</a></td>
		<td><a href="http://www.cyclopsds.com">ttp://www.cyclopsds.com</a></td>
		<td>No</td>
		<td>2.3|1.59|B.4</td>
		<td><a href="https://www.virustotal.com/#/file/ecc4a0fab6cdc9f0c8203a029ae6be5b690f606405d31fc1f33ce9602cb02d93/detection">Virus Scan</a></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
	</tr>
    <tr>
	    <td></td>
		<td></td>
		<td></td>
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
