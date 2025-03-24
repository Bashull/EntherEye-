@echo off

:: Step 1: Verify Git installation
echo Verifying Git installation...
git --version
if %ERRORLEVEL% NEQ 0 (
    echo Git is not installed. Please install Git and try again.
    exit /b 1
)

:: Step 2: Clone the Git repository
set "TARGET_DIR=C:\path\to\your\directory"
echo Cloning Git repository into %TARGET_DIR%...
if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"
cd "%TARGET_DIR%"
git clone https://github.com/git/git.git

:: Step 3: Verify cloning
if exist "%TARGET_DIR%\git" (
    echo Repository cloned successfully.
) else (
    echo Failed to clone the repository.
    exit /b 1
)

echo Done.
pause
