# TODO - keep this in sync programmatically with .ebextensions/04_install_chrome.config
cd /tmp # TODO - any changes must be synced to .ebextensions/04_install_chrome.config
wget https://chromedriver.storage.googleapis.com/86.0.4240.22/chromedriver_linux64.zip # TODO - any changes must be synced to .ebextensions/04_install_chrome.config
unzip chromedriver_linux64.zip # TODO - any changes must be synced to .ebextensions/04_install_chrome.config
$SUDOCMD mv chromedriver /usr/bin/chromedriver # TODO - any changes must be synced to .ebextensions/04_install_chrome.config
