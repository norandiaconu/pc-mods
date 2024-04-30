rmdir /s /q .\output
"C:\Program Files\7-Zip\7z.exe" x *.zip -ooutput
FOR %%G IN (C:\PROGRA~2 D: E: F:) DO IF EXIST "%%G\Steam\steamapps\common\Fallout 4\" ^
set directory="%%G\Steam\steamapps\common\Fallout 4\"
xcopy .\output\*.dll %directory% /y
xcopy .\output\*.ini %directory% /y
echo "DONE"
pause
