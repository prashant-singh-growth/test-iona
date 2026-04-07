import { NovaAssist } from "./NovaAssist";
// import { Novaconnect } from "./NovaConnect";
import { NovaCountSolution } from "./Novacount";
import { NovaDoc } from "./Novadoc";
// import { NovaEngage } from "./NovaEngage";
import { NovaStart } from "./Novastart";
import { NovaTrackSolution } from "./Novatrack";
// import { NovaTrain } from "./NovaTrain";
// import { Novaverify } from "./Novaverify";


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
    // {
    //     url:"novaengage",
    //     page:NovaEngage
    // },
    // {
    //     url:"novatrain",
    //     page:NovaTrain
    // },
    // {
    //     url:"novaverify",
    //     page:Novaverify
    // },
    // {
    //     url:"novaconnect",
    //     page:Novaconnect
    // },
]