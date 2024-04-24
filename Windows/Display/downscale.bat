@ECHO OFF

SET TempVBSFile=%tmp%\~tmpSendKeys.vbs
IF EXIST "%TempVBSFile%" DEL /F /Q "%TempVBSFile%"
ECHO Set WshShell = WScript.CreateObject("WScript.Shell")     >>"%TempVBSFile%"
ECHO WshShell.Run "explorer ms-settings:easeofaccess-display" >>"%TempVBSFile%"
ECHO WScript.Sleep 1000                                       >>"%TempVBSFile%"
ECHO WshShell.SendKeys "{TAB}{ }{HOME}{DOWN 1}{ENTER}"        >>"%TempVBSFile%"
ECHO WshShell.Run "explorer ms-settings:sound"                >>"%TempVBSFile%"
ECHO WScript.Sleep 1000                                       >>"%TempVBSFile%"
ECHO WshShell.SendKeys "speakers {(}2%%{F4}"                  >>"%TempVBSFile%"

CSCRIPT //nologo "%TempVBSFile%"
EXIT