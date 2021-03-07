import Interaction from '../Interaction.js';

class MasterKeyPlusVault extends Interaction {
  merge() {
    const { master_key: key, vault } = this.refs;

    key.moveNodeTo(vault);
    return 'The <strong>master_key</strong> fits the <strong>vault</strong> keyhole perfectly. Shall I unlock it?';
  }
}

export default MasterKeyPlusVault;
