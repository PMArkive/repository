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

Note: Scans might contain False Positives.

<input type="text" id="FlashInput" onkeyup="searchFunction()" placeholder="Search for Component/Part Number/Specification">

<table id="FlashTable" class="display">
    <thead>
        <tr>
            <th>Name</th>
            <th>Website</th>
			<th>DSi</th>
			<th>Version</th>
			<th>Scan</th>
        </tr>
    </thead>
    <tbody>
    <tr>
	    <td><a href="AceKard.zip">AceKard</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>No</td>
		<td>1.10</td>
		<td><a href="https://www.virustotal.com/#/file/88b88e2615f4d20aec63919a9994c1ee940e33388de2bd36340671e1469e2bc1/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard2.zip">AceKard 2</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>No</td>
		<td>4.23</td>
		<td><a href="https://www.virustotal.com/#/file/037ec6bb9f6f56a5bbeaed6aebee578bf14056c02b70fcfdcfdb92c5e69aaa14/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard21.zip">Acekard 2.1</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>No</td>
		<td>1.8.1</td>
		<td><a href="https://www.virustotal.com/#/file/5765a29cfa045cce9b9d5db6ef201c4baf143cf02b067e4de31e12f13594642f/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard2i.zip">Acekard 2i</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>Yes</td>
		<td>1.4.1</td>
		<td><a href="https://www.virustotal.com/#/file/6c7dbe833a0b7835ed4267968e675860ccba0b4d27b845d96902fdc48fa6a0e8/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="AcekardRPG.zip">Acekard RPG</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>No</td>
		<td>1.16</td>
		<td><a href="https://www.virustotal.com/#/file/6a2c63cc41db41da15c9eb459f3c0f2f13e803c4d6dece4838d3d7b3b5eeb33f/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="Acekard+.zip">Acekard+</a></td>
		<td><a href="http://www.acekard.com">Website</a></td>
		<td>No</td>
		<td>1.15</td>
		<td><a href="https://www.virustotal.com/#/file/42b415daa454f0705e7ce14a662362130bfd5824c629149f58c4a0e74002b687/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="CycoloDSEvo.zip">CycloDS Evolution</a></td>
		<td><a href="http://www.cyclopsds.com">Website</a></td>
		<td>No</td>
		<td>2.3|1.59|B.4</td>
		<td><a href="https://www.virustotal.com/#/file/ecc4a0fab6cdc9f0c8203a029ae6be5b690f606405d31fc1f33ce9602cb02d93/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DSFireLink.zip">DS Fire Link</a></td>
		<td><a href="http://dsfirelink.com">Website</a></td>
		<td>No</td>
		<td>1.45</td>
		<td><a href="https://www.virustotal.com/#/file/63ad22aec84e799ea78cf8e069127f8add4d69e83c9ff12cd40b2b29d8fb4f5c/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DSLink.zip">DS Link</a></td>
		<td><a href="http://www.ds-link.net/">Website</a></td>
		<td>No</td>
		<td>2.32</td>
		<td><a href="https://www.virustotal.com/#/file/e13c9b1c208aabbbefd0c79689d5985a1d0876aaf9b36baecb78ea7fc591ecc5/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DSLinker.zip">DSLinker</a></td>
		<td><a href="http://www.dslinker.com/">Website</a></td>
		<td>No</td>
		<td>1.45</td>
		<td><a href="https://www.virustotal.com/#/file/53599e749ff0ab7dc3b4dad0511f11fe04eca27948c8410ded48a9b80f279284/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DSTT.zip">DSTT</a></td>
		<td><a href="http://www.ndstt.com/">Website</a></td>
		<td>Yes</td>
		<td>N/A</td>
		<td><a href="https://www.virustotal.com/#/file/5ff790beb2def9b2d6501aab620bd62b92157015044f2ddd0a429c2cf19685d9/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DSTTi.zip">DSTTi</a></td>
		<td><a href="http://www.ndstt.com/">Website</a></td>
		<td>Yes</td>
		<td>1.4.1</td>
		<td><a href="https://www.virustotal.com/#/file/5ff790beb2def9b2d6501aab620bd62b92157015044f2ddd0a429c2cf19685d9/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="DS-Xtreme.zip">DS-Xtreme</a></td>
		<td><a href="http://www.ds-x.com/">Website</a></td>
		<td>No</td>
		<td>1.1.3</td>
		<td><a href="https://www.virustotal.com/#/file/42da2af0402216452f76860014af0b332dfe51c48aafb4cb5a03c9601cc6ee76/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="E7.zip">E7</a></td>
		<td>N/A</td>
		<td>No</td>
		<td>2.01</td>
		<td><a href="https://www.virustotal.com/#/file/8177fb04f2a6eee76907f6a6e74355bd87a6e91e83b7f5585519036e20d8fc04/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="EDGE.zip">EDGE</a></td>
		<td><a href="http://www.edge-ds.cn/">Website</a></td>
		<td>No</td>
		<td>1.11</td>
		<td><a href="https://www.virustotal.com/#/file/6ea7ee0e636254a18cfb945933aaa380c265f7bd59d855ce9966e176b230d9e0/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="eWin2.zip">eWin2</a></td>
		<td><a href="http://www.ewin2.net/">Website</a></td>
		<td>No</td>
		<td>1.96.8</td>
		<td><a href="https://www.virustotal.com/#/file/ffd271657722f53e2cda71daaa093e14d8ef9f3d66808ec45837b7c2400ed8ec/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="EZ-FlashIV.zip">EZ-Flash IV</a></td>
		<td><a href="http://www.ezflash.cn/">Website</a></td>
		<td>No</td>
		<td>2.05</td>
		<td><a href="https://www.virustotal.com/#/file/8881506392478848b57c7726924ea8437c6b0cd5b51715577682b563333523c5/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="EZ-FlashV.zip">EZ-Flash V</a></td>
		<td><a href="http://www.ezflash.cn/">Website</a></td>
		<td>No</td>
		<td>2.0 RC20</td>
		<td><a href="https://www.virustotal.com/#/file/21284ae2b6d2601b7474023e58f16663961646bb063492d503b4d19ec8519c15/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="EZ-FlashV.zip">EZ-Flash V+</a></td>
		<td><a href="http://www.ezflash.cn/">Website</a></td>
		<td>No</td>
		<td>2.0 RC20</td>
		<td><a href="https://www.virustotal.com/#/file/21284ae2b6d2601b7474023e58f16663961646bb063492d503b4d19ec8519c15/detection">Scan</a></td>
	</tr>
    <tr>
	    <td><a href="EZ-FlashVi.zip">EZ-Flash Vi</a></td>
		<td><a href="http://www.ezflash.cn/">Website</a></td>
		<td>Yes (3DS < 4.0.0)</td>
		<td>3.0 ob8|108a</td>
		<td><a href="https://www.virustotal.com/#/file/5a4ca734c46325861d9f3b2b6efb975ad90de43295670347992d71575bef352c/detection">Scan</a></td>
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
