"use strict";
var express = require('express');
var fs = require('fs');

module.exports = (PORT) => {
  const apiServer = express();

  apiServer.get('/api/hello', function (req, res) {
    res.send(JSON.stringify({
      "hello": "world",
      "data": [
        { "name": "hello" },
        { "name": "world" }
      ]
    }));
  });

  apiServer.get('/api/outcomes/', function (req, res) {
    res.send(JSON.stringify([
      { id: 1, category: 'Identification', label: 'Contact Acquisition', value: 0.3 },
      { id: 2, category: 'Lead Management Funnel', label: 'Close - Cancelled', value: 0.1 },
      { id: 3, category: 'Lead Management Funnel', label: 'Close - Lost', value: 0 },
      { id: 4, category: 'Lead Management Funnel', label: 'Close - Won', value: 0.8 },
      { id: 5, category: 'Lead Management Funnel', label: 'Marketing Lead', value: 0.4 },
      { id: 6, category: 'Lead Management Funnel', label: 'Opportunity', value: 0.2 },
      { id: 7, category: 'Lead Management Funnel', label: 'Sales Lead', value: 0.6 },
      { id: 8, category: 'Purchase', label: 'Product Purchase', value: 1 }
    ]));
  });

  apiServer.get('/api/landingpages/', function (req, res) {
    res.send(JSON.stringify({
      id: 1, image: '/images/icons/home.png', label: 'Test 1', sliderValue: 0.2, items: [
        {
          id: 2, image: '/images/icons/folder.png', label: 'Test 2', sliderValue: 0.1, items: [
            { id: 3, image: '/images/icons/cubes_blue.png', label: 'Test 3', sliderValue: 0.7 },
            { id: 4, image: '/images/icons/window_colors.png', label: 'Test 4', sliderValue: 0.4 }
          ]
        },
        { id: 5, image: '/images/icons/preferences.png', label: 'Test 5', sliderValue: 0.9 },
        { id: 6, image: '/images/icons/workstation1.png', label: 'Test 6', sliderValue: 0.5 }
      ]
    }));
  });

  apiServer.get('/api/dashboard/', function (req, res) {
    var output = {
      data: {
        visitsPerChannel: [
          { "label": "LandingPages", "value": 25 },
          { "label": "RefURLs", "value": 15 },
          { "label": "Search", "value": 42 },
          { "label": "Campaigns", "value": 32 },
          { "label": "Other", "value": 48 }
        ],
        monthlyDistribution: [
          {
            key: "Monthly Distribution",
            values: [
              { "label": "January", "value": 88 },
              { "label": "February", "value": 75 },
              { "label": "March", "value": 32 },
              { "label": "April", "value": 44 },
              { "label": "Maj", "value": 57 },
              { "label": "June", "value": 61 },
              { "label": "July", "value": 65 },
              { "label": "August", "value": 72 },
              { "label": "September", "value": 48 },
              { "label": "October", "value": 36 },
              { "label": "November", "value": 51 },
              { "label": "December", "value": 88 }
            ]
          }
        ]
      }
    }

    res.send(JSON.stringify(output));
  });

  var id = 0;

  apiServer.post('/api/xgen/jobs', function (req, res) {
    // Ignore incoming data as this is a mock server 
    // ---
    res.send(JSON.stringify({
      "Id": id++
    }));
  });

  const progressMap = {};

  apiServer.get('/api/xgen/jobs/:id', function (req, res) {
    var id = req.params.id;

    if (!progressMap[id])
      progressMap[id] = { value: 0 };

    progressMap[id].value += 0.1; // increase with 10% per request..
    
    var isInProgress = progressMap[id].value <= 0.9;
    
    // Fake progress

    if (isInProgress) {
      res.send(JSON.stringify({
        "Id": id,
        "CompletedVisitors": 100,
        "Progress": progressMap[id].value,
        "CompletedVisits": 501,
        "JobStatus": "Running",
        "Segments": []
      }));
    } else {
      res.send(JSON.stringify({
          "Id": id,
          "StatusUrl": "/api/xgen/jobs/9c2b8061-df40-4deb-ac2d-1c84ddfe08f5?action=get",
          "LastException": null,
          "Started": "2016-06-01T01:19:56.3389798-07:00",
          "Ended": "2016-06-01T01:20:36.7442466-07:00",
          "JobStatus": "Complete",
          "TargetVisitors": 100,
          "CompletedVisitors": 100,
          "Progress": 1.0,
          "CompletedVisits": 501,
          "Exceptions": 0,
          "Specification": {
            "RootUrl": "http://pocweb1dk1.pocdomain.scua:5515",
            "VisitorCount": 100,
            "Specification": {
              "Segments": {
                "Default": {
                  "Identified": 0.2,
                  "BounceRate": 0.05,
                  "VisitCount": 5,
                  "PageViews": 4,
                  "Duration": 30,
                  "StartDate": "2015-05-31T22:00:00Z",
                  "EndDate": "2016-05-31T22:00:00Z",
                  "YearlyTrend": 1,
                  "DayOfWeek": {
                    "Monday": 0.5,
                    "Tuesday": 0.5,
                    "Wednesday": 0.5,
                    "Thursday": 0.5,
                    "Friday": 0.5,
                    "Saturday": 0.5,
                    "Sunday": 0.5
                  },
                  "Month": {
                    "1": 0.5,
                    "2": 0.5,
                    "3": 0.5,
                    "4": 0.5,
                    "5": 0.5,
                    "6": 0.5,
                    "7": 0.5,
                    "8": 0.5,
                    "9": 0.5,
                    "10": 0.5,
                    "11": 0.5,
                    "12": 0.5
                  },
                  "LandingPage": {
                    "Site": {
                      "micro": 0.5,
                      "website": 1
                    },
                    "Item": {}
                  },
                  "Referrer": {},
                  "InternalSearch": {
                    "Percentage": 0.5,
                    "Keywords": {}
                  },
                  "ExternalSearch": {
                    "Percentage": 0.5,
                    "Keywords": {},
                    "Engine": {
                      "google": 0.5,
                      "yahoo": 0.5,
                      "bing": 0.5,
                      "lycos": 0.5,
                      "baidu": 0.5,
                      "googleppc": 0.5,
                      "yahooppc": 0.5,
                      "bingppc": 0.5
                    }
                  },
                  "Geo": {
                    "Region": {
                      "emea": 0.5,
                      "apac": 0.5,
                      "amer": 0.5
                    }
                  },
                  "Outcomes": {
                    "{75D53206-47B3-4391-BD48-75C42E5FC2CE}": 0.05,
                    "{F4830B80-1BB1-4746-89C7-96EFE40DA572}": 0.05,
                    "{B4D9C749-65E7-457D-B61D-4150B9E51424}": 0.05,
                    "{5646D20E-B10A-42BA-876B-2A3BB3CBC641}": 0.05,
                    "{52054874-4767-47DC-8099-8C08BFA307AA}": 0.05,
                    "{BF6B8EE3-9FFB-4C58-9CB4-301C1C710F89}": 0.05,
                    "{C2D9DFBC-E465-45FD-BA21-0A06EBE942D6}": 0.05,
                    "{9016E456-95CB-42E9-AD58-997D6D77AE83}": 0.05
                  },
                  "Channel": {
                    "Percentage": 0,
                    "Weights": {
                      "{ADA3552B-264F-4B5F-BDEF-73463AF33290}": 0,
                      "{DF9900DE-61DD-47BF-9628-058E78EF05C6}": 0,
                      "{A709D712-D835-4168-ACDF-D427BC138DA7}": 0,
                      "{15C3060B-CADC-47CA-B1FB-6931A43D48A2}": 0,
                      "{3F01FFD3-FAD0-4E35-BC99-C2994D281649}": 0,
                      "{03119E3C-5FC0-4216-ABCB-271BCEA239FD}": 0,
                      "{1914DA0E-9C3A-4EC3-A2C2-A12EED2A4577}": 0,
                      "{59BD107F-D725-4BA1-91C6-61BEE3CB768C}": 0,
                      "{3881E0E9-B930-4850-9954-3EA17C7A7905}": 0,
                      "{4404CE1F-830B-4B76-BB26-635DD024986B}": 0,
                      "{18A68A88-F1B0-4FA1-9C93-6182B366616B}": 0,
                      "{61288021-478A-4802-8DF7-617C6B8D8D21}": 0,
                      "{4F4E0E1F-B3EE-4175-950D-B353F5764FDE}": 0,
                      "{35E92942-82FF-4057-AB2B-4FE41FF4366C}": 0,
                      "{B418E4F2-1013-4B42-A053-B6D4DCA988BF}": 0.5,
                      "{030BDC09-7720-4EC2-B778-EB0BC7FD13BC}": 0,
                      "{5783355A-F9E4-476E-BA9D-9620E3E452EB}": 0,
                      "{829FAEB1-1393-44DA-B04A-B5C01986610A}": 0,
                      "{A43E7EB6-8610-4DF7-BD6B-FEE899743D30}": 0,
                      "{4A0B6C13-EFC8-4A00-8A6A-B709A89B1E11}": 0,
                      "{DDAFB85B-1511-48B8-9374-2A8A1F371645}": 0,
                      "{52B75873-4CE0-4E98-B63A-B535739E6180}": 0,
                      "{A03FFC6F-6851-42BA-A5EC-F1A73CFF0B3A}": 0,
                      "{C8D1E13E-F697-417C-A53D-E3C3130A05FD}": 0,
                      "{304FDFFC-DE5D-4D45-96DF-07ED0E423F43}": 0,
                      "{BA1D62CB-4224-47D0-AF59-78A8972FD538}": 0,
                      "{FB8FA660-0A07-4EE9-A9F4-930FC5D10AEC}": 0,
                      "{B979A670-5AAF-4E63-94AC-C3C3E5BFBE84}": 0,
                      "{5854B151-1555-49FD-8F35-D40E446BEB3C}": 0,
                      "{B2747066-06F8-4E0B-9EA7-64D8859A119A}": 0,
                      "{B55EC2C2-CD7A-4E03-B155-EEFDAE872B7D}": 0,
                      "{EC74A09A-7FA7-4A5A-874A-6B5CA9E05773}": 0,
                      "{67150678-B200-44BB-BBAE-1D7B901D0860}": 0,
                      "{145304B1-C2E0-4B88-A200-D5AA18206CF7}": 0,
                      "{B5234879-DFFC-47AF-8267-59D4D3DF6226}": 0,
                      "{0D600460-DA2E-41A6-955A-9253D2A063C2}": 0,
                      "{92B2E36D-3334-4D20-BE8E-8C77B6D57F6F}": 0,
                      "{A1831F25-40FB-43EE-A740-518D4F9D92DB}": 0,
                      "{44DD9FF5-44B2-4C59-8DF8-849E400F4B6B}": 0,
                      "{AF3A1889-7022-4809-82EB-7D3CF17B83D8}": 0,
                      "{E102E1A1-5EB2-4D5A-8BA9-8E04129B4362}": 0,
                      "{AAF21F18-C413-44B1-A01B-CA79F83E1438}": 0,
                      "{1437A2B7-AF9E-460E-895B-F24A80C8BA8C}": 0,
                      "{26CE4AD6-4ACC-49AB-9B27-CB7EB2CF6E35}": 0,
                      "{2C3D8CF9-930F-4634-8536-D37EA43EC0AB}": 0,
                      "{DC8E7268-BDBA-4545-A703-CCD0775A86BD}": 0,
                      "{0FC3C8ED-0F72-45BF-BFC6-36F6F9193F60}": 0,
                      "{A9F2D058-95A5-4461-B1E5-8502D2303AF1}": 0,
                      "{DC70F72E-0A36-404D-8B10-86FE765A3BCC}": 0,
                      "{6FD56D27-FD68-405A-BC26-566C7BEF7031}": 0,
                      "{1DA15267-B0DB-4BE1-B44F-E57C2EEB8A6B}": 0,
                      "{6D3D2374-AF56-44FE-B99A-20843B440B58}": 0,
                      "{86761432-FDBB-4C4B-AFAE-557130AE4D61}": 0,
                      "{7EAA9ED7-188F-40CA-80B9-4439C28386C9}": 0,
                      "{53CD340A-0F81-4750-8AC1-8EF3203249D3}": 0,
                      "{62D19735-E898-4FF5-B53A-13B02D3B8D6F}": 0,
                      "{CC784594-B048-49FF-A8F6-D10383A5DE02}": 0,
                      "{C97092FD-225A-4A5A-BF9E-DE006FD6D37F}": 0,
                      "{32752968-325C-4872-958A-DC9DA7F13831}": 0,
                      "{5A73DC04-132A-484E-BC41-00AE56A93A2B}": 0
                    }
                  },
                  "Campaign": {
                    "Percentage": 0.5,
                    "Weights": {
                      "{EC6599A5-A682-44CF-8CDA-132EC6C14F4E}": 0.1,
                      "{B1CA4F7D-C6EC-4A41-A9A5-8A01B0FCC24F}": 0.1,
                      "{BD3F6069-120D-49F7-B760-D015CE5E38DE}": 0.1,
                      "{F48A3D88-C851-4101-81A7-4C0B1E8ECBD3}": 0.1,
                      "{0BFFAF94-F523-452A-9F2A-1FA3292D4647}": 0.1,
                      "{EAEF3BE2-3800-48D4-9199-A88C3947F752}": 0.1,
                      "{F01366D9-2BAC-4C65-9A47-D8F66A56615D}": 0.1,
                      "{19563CBA-D45D-4314-968E-A05C039671D5}": 0.1,
                      "{9D20BC0A-E391-41C8-9724-3A9E41222A76}": 0.1,
                      "{CB1DDA9C-8DB1-4E6F-A9B3-12622FE82C74}": 0.1,
                      "{C792EC69-ADE9-479C-8FA6-1425E604A9DA}": 0.1,
                      "{C621EB54-310C-4DA2-ABB0-6792212B510E}": 0.1,
                      "{A221152F-E51C-419D-A09A-DE1C4185FFDE}": 0.1
                    }
                  }
                }
              }
            }
          },
          "Segments": [
            {
              "Id": "9f1574da-3541-4899-bd6a-6b5ebbbda145",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 71,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3389798-07:00",
              "Ended": "2016-06-01T01:20:36.6852363-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "c0893720-a879-4d90-b3b1-9fe7a93ed3e0",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 59,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3389798-07:00",
              "Ended": "2016-06-01T01:20:26.3305793-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "25f0377e-e147-4b6d-8725-7b4d5da4709e",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 58,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3399736-07:00",
              "Ended": "2016-06-01T01:20:25.6765917-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "50a833f6-5005-4323-8310-99e6080918a0",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 61,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3409736-07:00",
              "Ended": "2016-06-01T01:20:30.3425084-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "d417bfc8-dd79-49ec-9271-109b564dbbf0",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 61,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3409736-07:00",
              "Ended": "2016-06-01T01:20:28.1415486-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "6da28c07-3cee-4107-a107-09b0d831b7a0",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 61,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3419738-07:00",
              "Ended": "2016-06-01T01:20:23.8886155-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "bc4e5457-4418-40ee-9a51-ee1134733346",
              "TargetVisitors": 12,
              "CompletedVisitors": 12,
              "CompletedVisits": 51,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3419738-07:00",
              "Ended": "2016-06-01T01:20:25.2355977-07:00",
              "JobStatus": "Complete"
            },
            {
              "Id": "d31a9eb9-033d-460b-93ad-835e97239d47",
              "TargetVisitors": 16,
              "CompletedVisitors": 16,
              "CompletedVisits": 79,
              "Exceptions": 0,
              "LastException": null,
              "Started": "2016-06-01T01:19:56.3519737-07:00",
              "Ended": "2016-06-01T01:20:36.7442466-07:00",
              "JobStatus": "Complete"
            }
          ]
        }
      ));
    }
  });


  apiServer.listen(PORT, 'localhost');
}
