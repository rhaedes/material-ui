import { CAMPAIGNS_GET, CAMPAIGNS_TRAFFIC_UPDATE, CAMPAIGNS_UPDATE } from '../constants/ActionTypes';

export function getData() {
    const request = fetch('/api/campaigns').then(x => x.json());
    
    return {
        type: CAMPAIGNS_GET,
        payload: request
    }
}

export function updateCampaigns() {
    console.log('updateCampaigns()');
    
    return {
        type: CAMPAIGNS_UPDATE
    }
}

export function updateCampaignTraffic() {
    console.log('updateCampaignTraffic()');
    
    return {
        type: CAMPAIGNS_TRAFFIC_UPDATE
    }
}