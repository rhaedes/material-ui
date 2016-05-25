import { Component } from 'react';
import Panel from './internal/Panel.js';
import PanelRow from './internal/PanelRow.js';
import PanelCell from './internal/PanelCell.js';
import {Slider, Divider} from 'material-ui';

const data = [
  { category: "3rd Party", label: "Email inclusion", value: 0 },
  { category: "3rd Party", label: "Other 3rd party", value: 0 },
  { category: "3rd Party", label: "Other 3rd party pay-per-lead", value: 0 },
  { category: "3rd Party", label: "Virtual events", value: 0 },
  { category: "Apps", label: "App push", value: 0 },
  { category: "Apps", label: "App store activity", value: 0 },
  { category: "Apps", label: "App usage", value: 0 },
  { category: "Apps", label: "Other apps", value: 0 },
  { category: "Automation Programs", label: "Email automation", value: 0 },
  { category: "Automation Programs", label: "Other automation", value: 0 },
  { category: "Automation Programs", label: "SMS automation", value: 0 },
  { category: "Digital Events", label: "Other digital events", value: 0 },
  { category: "Digital Events", label: "Webinar live", value: 0 },
  { category: "Digital Events", label: "Webinar recorded", value: 0 },
  { category: "Direct", label: "Facebook display", value: 0.5 },
  { category: "Display", label: "Google display", value: 0 },
  { category: "Display", label: "LinkedIn display", value: 0 },
  { category: "Display", label: "Other display", value: 0 },
  { category: "Display", label: "Twitter display", value: 0 },
  { category: "Email Campaigns", label: "Email marketing", value: 0 },
  { category: "Email Campaigns", label: "Email newsletter", value: 0 },
  { category: "Email Campaigns", label: "Email notifications", value: 0 },
  { category: "Email Campaigns", label: "Email purchased list", value: 0 },
  { category: "Email Campaigns", label: "Email sent", value: 0 },
  { category: "Email Campaigns", label: "Other email", value: 0 },
  { category: "Organic Search", label: "Organic branded search", value: 0 },
  { category: "Organic Search", label: "Organic non-branded search", value: 0 },
  { category: "Organic Search", label: "Search not provided home page", value: 0 },
  { category: "Organic Search", label: "Search Not provided not Home page", value: 0 },
  { category: "Paid Search", label: "Bing ads", value: 0 },
  { category: "Paid Search", label: "Facebook ads", value: 0 },
  { category: "Paid Search", label: "Google ads", value: 0 },
  { category: "Paid Search", label: "LinkedIn ads", value: 0 },
  { category: "Paid Search", label: "Other ads", value: 0 },
  { category: "Paid Search", label: "YouTube ads", value: 0 },
  { category: "Referral", label: "Affiliate referrals", value: 0 },
  { category: "Referral", label: "Organic referrals", value: 0 },
  { category: "Referral", label: "Other referrals", value: 0 },
  { category: "Referral", label: "Owned referrals", value: 0 },
  { category: "Referral", label: "Partner referrals", value: 0 },
  { category: "Referral", label: "PR referrals", value: 0 },
  { category: "Referral", label: "RSS referrals", value: 0 },
  { category: "SMS Campaigns", label: "Other SMS", value: 0 },
  { category: "SMS Campaigns", label: "SMS marketing", value: 0 },
  { category: "SMS Campaigns", label: "SMS notifications", value: 0 },
  { category: "SMS Campaigns", label: "SMS sent", value: 0 },
  { category: "Social Community", label: "Facebook social community", value: 0 },
  { category: "Social Community", label: "Google Plus social community", value: 0 },
  { category: "Social Community", label: "LinkedIn social community", value: 0 },
  { category: "Social Community", label: "Other social community", value: 0 },
  { category: "Social Community", label: "Twitter social community", value: 0 },
  { category: "Social Community", label: "YouTube social community", value: 0 },
  { category: "Social Mentions", label: "Blogs", value: 0 },
  { category: "Social Mentions", label: "Other social mentions", value: 0 },
  { category: "Social Mentions", label: "Wiki", value: 0 },
  { category: "Social Sponsored Posts", label: "Facebook sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "LinkedIn sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "Other sponsored posts", value: 0 },
  { category: "Social Sponsored Posts", label: "Twitter sponsored posts", value: 0 },
];

class Page extends Component {
  onSliderChange(evt, value) {
    console.log(value);
  }

  render() {
    const rowStyle = { borderBottom: '1px solid #000', padding: '15px 0', margin: '0 15px' }

    return (
      <div>
        <Panel header="Channel traffic">
          <PanelRow>
            <PanelCell colClass="s6">Percentage of traffic with explicitly set channel</PanelCell>
            <PanelCell colClass="s6">
              <Slider defaultValue={0}></Slider>
            </PanelCell>
          </PanelRow>
        </Panel>
        <Panel header="Channels" style={{ paddingBottom: '15px' }}>
          {data.map((row, index, list) => {
            let prev = list[index - 1];
            let showCategory = row.category !== (prev && prev.category);
            const categoryStyle = { fontWeight: 'bold', visibility: showCategory ? '' : 'hidden' };

            return (
              <PanelRow key={index} style={rowStyle}>
                <PanelCell colClass="s2" style={categoryStyle}>{row.category}</PanelCell>
                <PanelCell colClass="s8">{row.label}</PanelCell>
                <PanelCell colClass="s2"><Slider defaultValue={row.value} onChange={this.onSliderChange.bind(this) }></Slider></PanelCell>
              </PanelRow>
            );
          }) }
        </Panel>
      </div>
    );
  }
}

export default Page;