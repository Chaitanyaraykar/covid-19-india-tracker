import axios from 'axios';

const totalDataUrl = "https://api.rootnet.in/covid19-in/stats/latest";
const dailyDataUrl = "https://api.rootnet.in/covid19-in/stats/history";

export const fetchData = async (value) => {
    const response = await axios.get(totalDataUrl);
    const { total, deaths, discharged, confirmedCasesIndian, confirmedCasesForeign } = response.data.data.summary;
    const lastUpdate = response.data.lastOriginUpdate;

    const stateListFromResponse = response.data.data.regional;

    const stateList = stateListFromResponse.map(({ loc,totalConfirmed, deaths, discharged, confirmedCasesIndian, confirmedCasesForeign}) => {
        return {
        state: loc,
        infected: totalConfirmed,
        deaths: deaths,
        recovered: discharged,
        casesIndian: confirmedCasesIndian,
        casesForeign: confirmedCasesForeign,
        lastUpdate
        }
    })

    if(value==="send_card_data"){
        return {
            infected: total,
            deaths: deaths,
            recovered: discharged,
            casesIndian: confirmedCasesIndian,
            casesForeign: confirmedCasesForeign,
            lastUpdate
        };
    }

    else if(value==="send_state_data"){
        return stateList;
    }

    
}
       