let mobObj = [
    {
        model:'redmi 11 prime 5g',
        Storage:'4 GB RAM,6 GB RAM | 64 GB ROM,128 GB ROM',
        Display:'16.71 cm (6.58 inch) Display 90Hz refresh rate',
        Camera:'5MP Rear Camera',
        Battery:'5000 mAh Battery',
        Processor:'processor media Tek dimensity 700 with 5G, 7nm Octa-core processor; up to 2.2GHz',
        Resolution:'Resolution 2400 x 1080 Pixels',
        Sim:'SIM Type Dual Sim',
        weight:'weight 200g ',
        Price:'Price 13,000 - 14,000'
    },
    {
        model:'realme 9i 5G ',
        Storage:'4 GB RAM,6 GB RAM | 64 GB ROM,128 GB ROM | Expandable Upto 1 TB',
        Display:'16.76 cm (6.6 inch) Full HD+ Display Features 90 Hz Refresh Rate, 180 Hz Touch Sampling Rate,400 nits Brightness',
        Camera:'50MP + 2MP + 2MP | 8MP Front Camera',
        Battery:'5000 mAh Lithium Ion Battery',
        Processor:'Mediatek Dimensity 810 5G Processor 2.4 GHz',
        Resolution:'Resolution 2408 x 1080 Pixels ',
        Sim:'SIM Type Dual Sim',
        weight:'Weight 187 g',
        Price:'Price 15,000 - 17,000'
        },
    {
        model:'onePlus 9 Pro 5G ',
        Storage:'8 GB RAM | 128 GB ROM',
        Display:'17.02 cm (6.7 inch) Fluid AMOLED Display with 120Hz refresh rate',
        Camera:'48MP Rear Camera',
        Battery:'4500 mAh Battery',
        Processor:'processor  Qualcomm Snapdragon 888 Processor',
        Resolution:'Resolution 3216 X 1440 pixels',
        Sim:'SIM Type Dual Sim',
        weight:'weight 197 g',
        Price:'Price 54,999'
        },
    {
        model:'OnePlus 10 Pro 5G',
        Storage:'8 GB RAM,12 GB RAM  | 128 GB ROM, 256 GB ROM',
        Display:'17.02 cm (6.7 inch) Display 120 Hz refresh rate',
        Camera:'48MP Rear Camera',
        Battery:'4500 mAh Battery',
        Processor:'processor  Qualcomm Snapdragon 888 Processor',
        Resolution:'Resolution 3216 X 1440 pixels',
        Sim:'SIM Type Dual Sim',
        weight:'weight 197 g',
        Price:'Price 62,000 - 67,000'
        },
    {
        model:'nothing phone 1',
        Storage:'12 GB RAM,8 GB RAM | 256 GB ROM,128 GB ROM',
        Display:'16.64 cm (6.55 inch) Full HD+ Display Brightness: 500 nits, Peak Brightness: 1,200 nits, Adaptive Refresh Rate: 60 Hz - 120 Hz, Touch Sampling Rate: 240 Hz        ',
        Camera:'50MP + 50MP | 16MP Front Camera',
        Battery:'4500 mAh Lithium-ion Battery',
        Processor:'processor Qualcomm Snapdragon 778G+ Processor',
        Resolution:'Resolution 2400 x 1080 Pixels',
        Sim:'SIM Type Dual Sim',
        weight:'weight 194 g',
        Price:'Price 26,000 - 35,000'
        },
    {
        model:'realme 10 Pro 5G',
        Storage:'8 GB RAM | 128 GB ROM | Expandable Upto 1 TB',
        Display:'17.07 cm (6.72 inch) Full HD+ Display Refresh Rate: 120 Hz Maximum Brightness: 600 nit ',
        Camera:'108MP + 2MP | 16MP Front Camera',
        Battery:'5000 mAh Battery',
        Processor:'Qualcomm Snapdragon 695 5G Processor',
        Resolution:'Resolution 2400 x 1080 Pixel',
        Sim:'SIM Type Dual Sim',
        weight:'weight 190 g',
        Price:'Price 18,999'
        },
    {
        model:'Redmi Note 10 Pro ',
        Storage:'6 GB RAM | 128 GB ROM | Expandable Upto 512 GB',
        Display:'16.94 cm (6.67 inch) Full HD+ Super AMOLED Display 120 Hz High Refresh Rate  1200 Nits Peak Brightness',
        Camera:'64MP + 8MP + 5MP + 2MP | 16MP Front Camera',
        Battery:'5020 mAh Li-Polymer Battery',
        Processor:'Qualcomm Snapdragon 732G Processor',
        Resolution:'Resolution 2400 x 1080 Pixels',
        Sim:'SIM Type Dual Sim',
        weight:'weight 192 g',
        Price:'Price 17,999'
        },
        {
            model:'vivo X70 Pro ',
            Storage:'8 GB RAM | 128 GB ROM,256 GB ROM ',
            Display:'16.66 cm (6.56 inch) Full HD+ Display refresh rate 120Hz',
            Camera:'50MP + 12MP + 12MP + 8MP | 32MP Front Camera',
            Battery:'4450 mAh Battery',
            Processor:'MediaTek Dimensity 1200 Processor',
            Resolution:'Resolution 2376 x 1080 Pixels',
            Sim:'SIM Type Dual Sim',
            weight:'weight 183 g',
            Price:'Price 46,999'
        },
        {
            model:'realme X50 Pro 5G',
            Storage:'8 GB RAM,12 GB RAM | 128 GB ROM,256 GB ROM',
            Display:'16.36 cm (6.44 inch) Full HD+ Display Screen Refresh rate: 90Hz',
            Camera:'64MP + 12MP + 8MP + 2MP | 32MP + 8MP Dual Front Camera',
            Battery:'4200 mAh Battery',
            Processor:'Qualcomm Snapdragon 865 Processor',
            Resolution:'Resolution 1080 x 2400 Pixels',
            Sim:'SIM Type Dual Sim',
            weight:'weight 207 g',
            Price:'Price 41,999'
        },
        {
            model:'APPLE Iphone 14 pro max',
            Storage:'128 GB ROM,256 GB ROM,512 GB ROM,1 TB ROM',
            Display:'17.02 cm (6.7 inch) Super Retina XDR Display Dynamic Island, Always-On Display,  Refresh Rates Upto 120 Hz Max Brightness: 1,000 nits, Peak Brightness: 1,600 nits, Peak Brightness : 2,000 nits',
            Camera:'48MP + 12MP + 12MP + 12MP | 12MP Front Camera',
            Battery:'4323 mAh Battery',
            Processor:'A16 Bionic Chip, 6 Core Processor',
            Resolution:'Resolution 2796 x 1290 Pixels',
            Sim:'SIM Type Dual Sim(Nano + eSIM)',
            weight:'weight 240 g',
            Price:'Price 1,32,000 - 1,82,999'
        },
]
  let defSel1 = ''
  let defSel2 = ''
//let vOptions = document.getElementById('mobile-options')
for(let i = 0; i < mobObj.length; i++)
{
    let vOptions1 = document.createElement('option') 
    vOptions1.value = mobObj[i].model
    vOptions1.innerText = mobObj[i].model
    let vOptions2 = document.createElement('option') 
    vOptions2.value = mobObj[i].model
    vOptions2.innerText = mobObj[i].model
    document.getElementById('mobile-options-1').append(vOptions1)
    document.getElementById('mobile-options-2').append(vOptions2)

    defSel1 = document.getElementById('mobile-options-1').value
    defSel2 = document.getElementById('mobile-options-2').value
}

let compareBtn = document.getElementById('compare-btn')
compareBtn.onclick = () =>
{
    document.getElementById('table-id').style.visibility = 'visible'
    let selectMob1 = document.getElementById('mobile-options-1')
let selectMob2 = document.getElementById('mobile-options-2')
    if(defSel1==selectMob1.value || defSel2==selectMob2.value)
    {
        alert('Select any mobiles')
        return;
    }
    if(selectMob1.value=='APPLE Iphone 14 pro max')
    {
        document.getElementById('Display-id1').classList.add('big-txt')
    }
    else
    {
        document.getElementById('Display-id1').classList.remove('big-txt')
    }
        if(selectMob2.value=='APPLE Iphone 14 pro max')
        {
            document.getElementById('Display-id2').classList.add('big-txt')
        }
        else
        {
            document.getElementById('Display-id2').classList.remove('big-txt')
        }

    let allGaps = document.querySelectorAll('.gap')
    for(let hrs of allGaps)
    {
        hrs.style.visibility = 'visible'
    }
    let leftTxt = document.querySelectorAll('.left-txt')
    for(let element of leftTxt)
    {
        element.style.visibility = 'visible'
    }
    let rightTxt = document.querySelectorAll('.right-txt')
    for(let element of rightTxt)
    {
        element.style.visibility = 'visible'
    }
    for(let j = 0; j < mobObj.length; j++)
    {
        if(selectMob1.value==mobObj[j].model)
        {
            document.getElementById('Storage-id1').innerText = mobObj[j].Storage
            document.getElementById('Display-id1').innerText = mobObj[j].Display
            document.getElementById('Camera-id1').innerText = mobObj[j].Camera
            document.getElementById('Battery-id1').innerText = mobObj[j].Battery
            document.getElementById('Processor-id1').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id1').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id1').innerText = mobObj[j].Sim
            document.getElementById('Weight-id1').innerText = mobObj[j].weight
            document.getElementById('Price-id1').innerText = mobObj[j].Price
            //alert('Storage ' + mobObj[j].Storage)
            //alert('Display ' + mobObj[j].Display)
        }
        if(selectMob2.value==mobObj[j].model)
        {
            document.getElementById('Storage-id2').innerText = mobObj[j].Storage
            document.getElementById('Display-id2').innerText = mobObj[j].Display
            document.getElementById('Camera-id2').innerText = mobObj[j].Camera
            document.getElementById('Battery-id2').innerText = mobObj[j].Battery
            document.getElementById('Processor-id2').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id2').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id2').innerText = mobObj[j].Sim
            document.getElementById('Weight-id2').innerText = mobObj[j].weight
            document.getElementById('Price-id2').innerText = mobObj[j].Price
            //alert('2nd ' + mobObj[j].Storage)
        }
    }
}
   /* document.getElementById('mobile-options-1').onclick = () =>
    {
        let vOption1 = document.getElementById('mobile-options-1')
        let vOption2 = document.getElementById('mobile-options-2')
        if(vOption1.value!=defSel1)
        {
                document.getElementById('compare-btn').style.backgroundColor = 'skyblue'
                //document.getElementById('disable-txt').style.display='none'
        }
    }*/
    const option1 = document.getElementById('mobile-options-1');
    const option2 = document.getElementById('mobile-options-2');
    //const compareBtn = document.getElementById('compare-btn');
    
    option1.addEventListener('change', updateButton);
    option2.addEventListener('change', updateButton);
    
    function updateButton() {
        if (option1.value !== '' && option2.value !== '') {
            compareBtn.style.backgroundColor = 'skyblue';
            compareBtn.disabled = false;
        } 
    }
