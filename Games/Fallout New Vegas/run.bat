rmdir /s /q .\output
"C:\Program Files\7-Zip\7z.exe" x *.7z -ooutput
"C:\Program Files\7-Zip\7z.exe" x *.zip -ooutput
move .\output\NVSE\Plugins\nvac.dll .\output\Data\NVSE
rmdir /s /q .\output\NVSE
rmdir /s /q .\output\fomod
del /f /q .\output\*.txt
echo "DONE"
pause
