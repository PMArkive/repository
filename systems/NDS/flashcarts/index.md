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


---------------------------------------
<ul>
            <li><a href="AceKard.zip">AceKard</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.10</li>
            <li><a href="https://www.virustotal.com/#/file/88b88e2615f4d20aec63919a9994c1ee940e33388de2bd36340671e1469e2bc1/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="Acekard2.zip">AceKard 2</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 4.23</li>
            <li><a href="https://www.virustotal.com/#/file/037ec6bb9f6f56a5bbeaed6aebee578bf14056c02b70fcfdcfdb92c5e69aaa14/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="Acekard21.zip">Acekard 2.1</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.8.1</li>
            <li><a href="https://www.virustotal.com/#/file/5765a29cfa045cce9b9d5db6ef201c4baf143cf02b067e4de31e12f13594642f/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="Acekard2i.zip">Acekard 2i</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.4.1</li>
			<li><a href="https://www.virustotal.com/#/file/6c7dbe833a0b7835ed4267968e675860ccba0b4d27b845d96902fdc48fa6a0e8/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="AcekardRPG.zip">Acekard RPG</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.16</li>
			<li><a href="https://www.virustotal.com/#/file/6a2c63cc41db41da15c9eb459f3c0f2f13e803c4d6dece4838d3d7b3b5eeb33f/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="Acekard+.zip">Acekard+</a></li>
            <li><a href="http://www.acekard.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.15</li>
			<li><a href="https://www.virustotal.com/#/file/42b415daa454f0705e7ce14a662362130bfd5824c629149f58c4a0e74002b687/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="CycoloDSEvo.zip">CycloDS Evolution</a></li>
            <li><a href="http://www.cyclopsds.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.3(Stable)|1.59(Beta)|B.4(GUI)</li>
			<li><a href="https://www.virustotal.com/#/file/ecc4a0fab6cdc9f0c8203a029ae6be5b690f606405d31fc1f33ce9602cb02d93/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DSFireLink.zip">DS Fire Link</a></li>
            <li><a href="http://dsfirelink.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.45</li>
			<li><a href="https://www.virustotal.com/#/file/63ad22aec84e799ea78cf8e069127f8add4d69e83c9ff12cd40b2b29d8fb4f5c/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DSLink.zip">DS Link</a></li>
            <li><a href="http://www.ds-link.net/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.32</li>
			<li><a href="https://www.virustotal.com/#/file/e13c9b1c208aabbbefd0c79689d5985a1d0876aaf9b36baecb78ea7fc591ecc5/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DSLinker.zip">DSLinker</a></li>
            <li><a href="http://www.dslinker.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.45</li>
			<li><a href="https://www.virustotal.com/#/file/53599e749ff0ab7dc3b4dad0511f11fe04eca27948c8410ded48a9b80f279284/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DSTT.zip">DSTT</a></li>
            <li><a href="">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: Unknown</li>
			<li><a href="https://www.virustotal.com/#/file/a756abd1d2f15d9da7f9c31e3d59e2b091b4f3c6e38edd037c47ce95292eaf44/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DSTTi.zip">DSTTi</a></li>
            <li><a href="http://www.ndstt.com/download.html">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.4.1</li>
			<li><a href="https://www.virustotal.com/#/file/5ff790beb2def9b2d6501aab620bd62b92157015044f2ddd0a429c2cf19685d9/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="DS-Xtreme.zip">DS-Xtreme</a></li>
            <li><a href="http://www.ds-x.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.1.3</li>
			<li><a href="https://www.virustotal.com/#/file/42da2af0402216452f76860014af0b332dfe51c48aafb4cb5a03c9601cc6ee76/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="E7.zip">E7</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.01</li>
			<li><a href="https://www.virustotal.com/#/file/8177fb04f2a6eee76907f6a6e74355bd87a6e91e83b7f5585519036e20d8fc04/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="EDGE.zip">EDGE</a></li>
            <li><a href="http://www.edge-ds.cn/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.11</li>
			<li><a href="https://www.virustotal.com/#/file/6ea7ee0e636254a18cfb945933aaa380c265f7bd59d855ce9966e176b230d9e0/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="eWin2.zip">eWin2</a></li>
            <li><a href="http://www.ewin2.net/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.96.8</li>
			<li><a href="https://www.virustotal.com/#/file/ffd271657722f53e2cda71daaa093e14d8ef9f3d66808ec45837b7c2400ed8ec/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="EZ-FlashIV.zip">EZ-Flash IV</a></li>
            <li><a href="http://www.ezflash.cn/">Homepage</a></li>
            <li>DSi Compatible: No(Requires GBA Slot)</li>
            <li>Version: 2.05</li>
			<li><a href="https://www.virustotal.com/#/file/8881506392478848b57c7726924ea8437c6b0cd5b51715577682b563333523c5/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="EZ-FlashV.zip">EZ-Flash V</a></li>
            <li><a href="http://www.ezflash.cn/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.0 RC20</li>
			<li><a href="https://www.virustotal.com/#/file/21284ae2b6d2601b7474023e58f16663961646bb063492d503b4d19ec8519c15/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="EZ-FlashV.zip">EZ-Flash V+</a></li>
            <li><a href="http://www.ezflash.cn/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.0 RC20</li>
			<li><a href="https://www.virustotal.com/#/file/21284ae2b6d2601b7474023e58f16663961646bb063492d503b4d19ec8519c15/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="EZ-FlashVi.zip">EZ-Flash Vi</a></li>
            <li><a href="http://www.ezflash.cn">Homepage</a></li>
            <li>DSi Compatible: Yes (3DS compatible up to 4.0.0-7)</li>
            <li>Version: 3.0 ob8(Kernel)|108a(Firmware)</li>
			<li><a href="https://www.virustotal.com/#/file/5a4ca734c46325861d9f3b2b6efb975ad90de43295670347992d71575bef352c/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="G6DSReal.zip">G6 DS Real</a></li>
            <li><a href="http://www.g6flash.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 4.8f</li>
			<li><a href="https://www.virustotal.com/#/file/ef4eff8926be19053d763601339fdeaf164133152fdac7b01bec08127315ee74/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="G6Flash.zip">G6 Flash</a></li>
            <li><a href="http://www.g6flash.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 4.8(Kernel)|5.1(Software)</li>
			<li><a href="https://www.virustotal.com/#/file/626e4ad774f4d62d617271971fa7667fceeda11a4cf82256af89a6e754c0338a/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="G6Flash.zip">G6 Lite</a></li>
            <li><a href="http://www.g6flash.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 4.8(Kernel)|5.1(Software)</li>
			<li><a href="https://www.virustotal.com/#/file/626e4ad774f4d62d617271971fa7667fceeda11a4cf82256af89a6e754c0338a/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="GamesNMusic.zip">Games'N'Music</a></li>
            <li><a href="http://us.codejunkies.com/Products/NDS-Games-n-Music__EF000155.aspx">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: Unknown</li>
			<li><a href="https://www.virustotal.com/#/file/95a60d70f0d05412afb27ee3f2068f212b5cd6c700e1cd2c0111003f4ad73d86/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="GEiDS.zip">GEi DS</a></li>
            <li><a href="http://www.ge.ndsi.in/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 4.2</li>
			<li><a href="https://www.virustotal.com/#/file/025af37e5e6d1c5c65d069b753cd95f3cf55c1c263ac9a621e25c6dd9ec7ba21/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="iEDGE.zip">iEDGE</a></li>
            <li><a href="http://www.edge-ds.cn/">Homepage</a></li>
            <li>DSi Compatible: Yes(Up to 1.4)</li>
            <li>Version: 1.11</li>
			<li><a href="https://www.virustotal.com/#/file/3f46f0ca422de4220a9e62a553127650f7e5f58ce1fce7c0b9ff699458f9871b/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="iPlayer.zip">iPlayer</a></li>
            <li><a href="http://www.dsiplayer.com/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.06 & 1.41</li>
			<li><a href="https://www.virustotal.com/#/file/52920dbf0c2e29d41df0bc7b4531e5dd610719e1bf2653a89f7eb0777451500b/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="iSmartPremium.zip">iSmart Premium</a></li>
            <li><a href="http://ismartds.com">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.05</li>
			<li><a href="https://www.virustotal.com/#/file/f2c01d507db8061890636191c02ba52d76bafbc4c07109b4797bd7b2a8dcf283/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="iTouch2.zip">iTouch2</a></li>
            <li><a href="http://www.itouchds.com/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 3.8e</li>
			<li><a href="https://www.virustotal.com/#/file/762836f15e02cdca4aa44a3b307c6e076c5e12387791222a67a487c30de076e1/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="iTouch2.zip"></a></li>
            <li><a href="http://www.itouchds.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 3.8e</li>
			<li><a href="https://www.virustotal.com/#/file/762836f15e02cdca4aa44a3b307c6e076c5e12387791222a67a487c30de076e1/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3DS.zip">M3 DS Real</a></li>
            <li><a href="http://m3adapter.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.49X(M3 Sakura)|4.9(TouchPod)</li>
			<li><a href="https://www.virustotal.com/#/file/b4fd80b7a910d9ae86eb46ed8023baf4d985754ef1bedfe0d630f085db1fd1e9/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3DS.zip">M3 Perfect</a></li>
            <li><a href="http://m3adapter.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.49X(M3 Sakura)|4.9(TouchPod)</li>
			<li><a href="https://www.virustotal.com/#/file/b4fd80b7a910d9ae86eb46ed8023baf4d985754ef1bedfe0d630f085db1fd1e9/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3Simply.zip">M3 Simply</a></li>
            <li><a href="http://www.m3adapter.com">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.62</li>
			<li><a href="https://www.virustotal.com/#/file/2ff2c74ad99bea334ccb11a523d70bd5c380e8aa8ac6fee66365f89895f9eedc/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3iSDHC.zip">M3i SDHC</a></li>
            <li><a href="http://m3isdhc.com/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.4</li>
			<li><a href="https://www.virustotal.com/#/file/8ba574ecb302ede271cb32aa09a03154a5c9e8a3a9e5213e7cbca09665f4062d/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3iUpgrade.zip">M3i Upgrade</a></li>
            <li><a href="">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.45</li>
			<li><a href="https://www.virustotal.com/#/file/b2d8e7cf6c1730aaf124ab9741032267dbe25fea38053cbd6ed177c15f97bee0/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3iZero.zip">M3i Zero</a></li>
            <li><a href="http://m3adapter.com">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 4.5.0(Firmware)|1.49X(M3 Sakura)|4.9(TouchPod)</li>
			<li><a href="https://www.virustotal.com/#/file/3abb9a4b7af96da4ad44cda5dd6880e8c4f16be8e9b944a1cf272db997e9be97/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="M3lUpgrade.zip">M3l Upgrade</a></li>
            <li><a href="http://m3iupgrade.com/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.45</li>
			<li><a href="https://www.virustotal.com/#/file/4ab30ab38876e94b5f387a53f8b7c2dd8154347a59dfa1af930f57a1a123b87f/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="MARS.zip">MARS</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.03</li>
			<li><a href="https://www.virustotal.com/#/file/eae83fdf02f738d256549156b59b7ffc55b1d999eee775bd70d179d1e20b4a14/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="MaxMediaPlayer.zip">Max Media Player</a></li>
            <li><a href="http://us.codejunkies.com/mpds/index.htm">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.22</li>
			<li><a href="https://www.virustotal.com/#/file/525449834667955d61c9498d4cd66b865c28ef9f2edbcfaf11c28320185124a6/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="MK5.zip">MK5</a></li>
            <li><a href="http://www.neoflash.com">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 2.56</li>
			<li><a href="https://www.virustotal.com/#/file/7b3ad8014471443a6501ff4de68f0222322dcc6324069c27cbf2cb6614e12472/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="N5.zip">N5</a></li>
            <li><a href="http://www.dsn5.com/EN-N5/n5-en.htm">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.32</li>
			<li><a href="https://www.virustotal.com/#/file/fb2e9b0a72fc08bd06f53d53d28a8a5d7d2501eb8c7a70185c2cb1b73ae2b1d0/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="N5i.zip">N5i</a></li>
            <li><a href="http://www.dsn5.com/EN-N5/n5-en.htm">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 2.03</li>
			<li><a href="https://www.virustotal.com/#/file/9506fefc273ef3f2c751adb332813fb1aca20b2b5c4b6f9365c513c87e069d6b/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="N-Card.zip">N-Card</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: v25</li>
			<li><a href="https://www.virustotal.com/#/file/e88ae06f7ea692aae7814d2b5dc7257ba60ef9838cac40acebc375eac530e7c8/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="R43DS.zip">R4 3DS Upgrade SDHC Dual-Core RTS</a></li>
            <li><a href="http://r4-usas.com/">Homepage</a></li>
            <li>DSi Compatible: Yes (Also 3DS Compatible)</li>
            <li>Version: 3.9b</li>
			<li><a href="https://www.virustotal.com/#/file/87199364c910763689d0497ddec36d83f6169a1d613e831cb00980ab3162dc00/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="R4DS.zip">R4 DS</a></li>
            <li><a href="http://www.r4ds.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.62</li>
			<li><a href="https://www.virustotal.com/#/file/5c4dc90c03ebd82af786deefbcbf80940dc21e1159379db8448d962de9de9c07/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="R4SDHCUpgrade.zip">R4 SDHC Upgrade</a></li>
            <li><a href="http://www.r4i-sdhc.com/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.27b</li>
			<li><a href="https://www.virustotal.com/#/file/6668835406235ba2b215db811f8b25616c554770e99fa178617b2dbb02a96e33/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="R4Ultra.zip">R4 Ultra</a></li>
            <li><a href="http://www.r4ultra.com">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.56</li>
			<li><a href="https://www.virustotal.com/#/file/cc17c9d1156f2d6549be3dc1eb962276d495f8c7ef0e94b5f1b9aa885b555778/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="SuperR4i.zip">Super R4i</a></li>
            <li><a href="http://www.super4i.com/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.20</li>
			<li><a href="https://www.virustotal.com/#/file/d29fb6c767c7e0561625b8edc3ea7658548e1cf6294820aea416025365ea99ff/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="SuperCardDSONE.zip">SuperCard DSONE</a></li>
            <li><a href="http://eng.supercard.sc/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.0</li>
			<li><a href="https://www.virustotal.com/#/file/976d949f38d2e0eb04c59f9e1a63842a80257bda2971be86c22078c027b06607/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="SuperCardDSONE.zip">SuperCard DSONE v3</a></li>
            <li><a href="http://eng.supercard.sc/">Homepage</a></li>
            <li>DSi Compatible: No</li>
            <li>Version: 1.0</li>
			<li><a href="https://www.virustotal.com/#/file/976d949f38d2e0eb04c59f9e1a63842a80257bda2971be86c22078c027b06607/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="SuperCardDSONEi.zip">SuperCard DSONEi</a></li>
            <li><a href="http://eng.supercard.sc/">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.0/1.1(Firmware) + DSI 1.4.1 Patch</li>
			<li><a href="https://www.virustotal.com/#/file/be4e5174942947c28823c57dcd9227361b9a6b8135c3d4357a3c171eaf619872/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="SuperCardDSTWO.zip">SuperCard DSTWO</a></li>
            <li><a href="">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.30</li>
			<li><a href="https://www.virustotal.com/#/file/61157adf51692dd680320c1e9e39516c894ee5c8ebee9d1a29eadd8bb06785a0/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="TTiUpgrade.zip">TTi Upgrade</a></li>
            <li><a href="http://www.nds-tti.com">Homepage</a></li>
            <li>DSi Compatible: Yes</li>
            <li>Version: 1.19</li>
			<li><a href="https://www.virustotal.com/#/file/167bb060fe7588c1afd649aabd388489c71ccf2f8f3b55e25969fa01418e4f09/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="U2DS.zip">U2DS</a></li>
            <li><a href="http://www.u2ds.com/">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.7c</li>
			<li><a href="https://www.virustotal.com/#/file/2d971101b40188b980a443d1f82bfdd183e8af73ab2d60612994aba93462ac08/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="UltraFlashpassEx.zip">Ultra Flashpass Ex</a></li>
            <li><a href="http://www.ndsgba.net/">Homepage</a></li>
            <li>DSi Compatible: Unknown</li>
            <li>Version: 1.45</li>
			<li><a href="https://www.virustotal.com/#/file/e22c40e6bc5f95814580ef4f9f4b179df09c5ad0683d8fd52062519ac1180617/detection">Virus Scan</a></li>
</ul>
---------------------------------------
<ul>
            <li><a href="R4i_RTS_3DS.zip">R4i RTS 3DS</a></li>
			<li><a href="http://r4ids.cn/">Homepage</a></li>
            <li>DSi Compatible: Yes (3DS Compatible)</li>
            <li>Version: 1.64</li>
			<li><a href="https://www.virustotal.com/#/file/5e36a6389b2641bf2569d3e232c4ef3cdd452a5f7d5d8c93aae5a0bd56d678cd/detection">Virus Scan</a></li>
</ul>
---------------------------------------

<onebutton>
<ul>
            <li><a href="../">Go<strong>Back</strong></a></li>
          </ul>
</onebutton>
