import { NovaAssist } from "./NovaAssist";
import { Novaconnect } from "./NovaConnect";
import { NovaCountSolution } from "./Novacount";
import { NovaDoc } from "./Novadoc";
import { NovaEngage } from "./NovaEngage";
import { NovaStart } from "./Novastart";
import { NovaTrackSolution } from "./Novatrack";
import { NovaTrain } from "./NovaTrain";
import { Novaverify } from "./Novaverify";

{/* <script src="https://js-eu1.hsforms.net/forms/embed/146385824.js" defer></script>
<div class="hs-form-frame" data-region="eu1" data-form-id="f5f72187-e5a2-46ec-ae51-a1a043b67e07" data-portal-id="146385824"></div> */}
export const solutionPageList = [
    {
        url:"novacount",
        page:NovaCountSolution
    },
    {
        url:"novatrack",
        page:NovaTrackSolution
    },
    {
        url:"novadoc",
        page:NovaDoc
    },
    {
        url:"novastart",
        page:NovaStart
    },
    {
        url:"novaassist",
        page:NovaAssist
    },
    {
        url:"novaengage",
        page:NovaEngage
    },
    {
        url:"novatrain",
        page:NovaTrain
    },
    {
        url:"novaverify",
        page:Novaverify
    },
    {
        url:"novaconnect",
        page:Novaconnect
    },
]