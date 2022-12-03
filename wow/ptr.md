- Create or copy a character to set up on the PTR. Login to the character so the client can scaffold the preference folder. Exit the game.
- Navigate to `<WoW Installation>\_classic_ptr_\WTF` folder. Open `Config.wtf` file. Add the following lines at the bottom:```
SET synchronizeMacros "0"
SET synchronizeBindings "0"```
Doing so will prevent PTR client attempting to save local macros to the server. See https://us.forums.blizzard.com/en/wow/t/ptr-consistently-crashing/1411902/13 for additional details.
- Copy everything from `<wow>\_classic_\WTF\Account\<your account>\SavedVariables` to the mirroring PTR location. PTR account is typically name like `1140841#1` so the corresponding folder will be `<wow>\_classic_ptr_\WTF\Account\<your account>\SavedVariables`. Doing so essentially copies *live* profiles to *PTR* so any ACE-based addons (pretty much everything) with profile support can find the current data.

- Import Grid2 profile
- Import Clique profile
- Import Luna profile