<?php 
	
	echo "printed";
	exec('DYLD_LIBRARY_PATH= && lp -d EPSON_TM_T88V_2 -o PageSize=RP80x297 -o TmtPaperSource=DocFeedCut -o TmtPaperReduction=Both -o orientation-requested=3 -o TmtSpeed=4 receipt1.png');

 ?>
 
 