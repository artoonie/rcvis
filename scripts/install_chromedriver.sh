# TODO - keep this in sync programmatically with .ebextensions/03_install_chrome.config
cd /tmp # TODO - any changes must be synced to .ebextensions/03_install_chrome.config
wget https://chromedriver.storage.googleapis.com/84.0.4147.30/chromedriver_linux64.zip # TODO - any changes must be synced to .ebextensions/03_install_chrome.config
unzip chromedriver_linux64.zip # TODO - any changes must be synced to .ebextensions/03_install_chrome.config
sudo mv chromedriver /usr/bin/chromedriver # TODO - any changes must be synced to .ebextensions/03_install_chrome.config
