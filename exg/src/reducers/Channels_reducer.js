import * as types from '../constants/ActionTypes';
import { combineReducers } from 'redux';

const channelsInitState = [
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
    { category: "Direct", label: "Facebook display", value: 0 },
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

const channelCategorySlider = (state = channelsInitState, action) => {
  switch (action.type) {
    case types.UPDATE_CATEGORY_SLIDER:
    console.log(action.index, action.value)
    let channels = [...state];
    channels[action.index].value =  action.value;
      return channels;
  }
  
  return state;
}

const dragging = (state = false, action) => {
  switch (action.type) {
    case types.DRAG_START:
      return true;

    case types.DRAG_STOP:
      return false;
  }
  
  return state;
} 

const channelTraffic = (state = 0.5, action) => {
  switch (action.type) {
    case types.UPDATE_SLIDER:
      return action.value;
  }
  
  return state;
}

export default combineReducers({channelCategorySlider, channelTraffic, dragging});