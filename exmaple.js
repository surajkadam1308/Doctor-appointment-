function toggleSettings() {
    const settingsPanel = document.querySelector('.settings-panel');
    if (settingsPanel.style.display === 'block') {
      settingsPanel.style.display = 'none';
    } else {
      settingsPanel.style.display = 'block';
    }
  }
  