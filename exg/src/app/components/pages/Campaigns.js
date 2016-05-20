import React, { Component } from 'react';
import CampaignTraffic from '../../sitecore/layouts/Campaigns/CampaignTraffic';
import Campaigns from '../../sitecore/layouts/Campaigns/Campaigns';

class Page extends Component {
    render() {
        // TODO: Use state for campaigns
        const campaigns = [
            { name: "Social/Facebook/Facebook Content Messages", value: 0.3 },
            { name: "Television/TV2/Demand more", value: 0.5 }
        ];
        
        return (
            <div style={{marginTop: 15}}>
                <CampaignTraffic style={{ marginBottom: 20 }} />
                <Campaigns campaigns={campaigns} />
            </div>
        );
    }
}

export default Page;