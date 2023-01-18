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
        Box:'In The Box Handset, Power Adapter, Micro USB Cable, SIM Insertion Tool, Warranty Card, User Guid'
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
        Box:'In The Box Handset, 18W Fast Charger, USB Type-C Cable, Protect Case, Sim Card Tool, Screen Protect Film, Quick Start Guide, Important Product Information (Including the Warranty Card)'
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
        Box:'In The Box Handset,Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Case, Screen Protector & SIM Tray Ejector'
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
        Box:'In The Box Handset,Warp Charge 65 Power Adapter, Warp Charge Type-C to Type-C Cable, Quick Start Guide, Welcome Letter, Safety Information and Warranty Card, LOGO Sticker, Case, Screen Protector & SIM Tray Ejector'
    },
    
]
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
}

let compareBtn = document.getElementById('compare-btn')
compareBtn.onclick = () =>
{
    let selectMob1 = document.getElementById('mobile-options-1')
    let selectMob2 = document.getElementById('mobile-options-2')
    for(let j = 0; j < mobObj.length; j++)
    {
        if(selectMob1.value==mobObj[j].model)
        {

            document.getElementById('storage-id1').innerText = mobObj[j].Storage
            document.getElementById('Display-id1').innerText = mobObj[j].Display
            document.getElementById('Camera-id1').innerText = mobObj[j].Camera
            document.getElementById('Battery-id1').innerText = mobObj[j].Battery
            document.getElementById('Processor-id1').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id1').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id1').innerText = mobObj[j].Sim
            document.getElementById('weight-id1').innerText = mobObj[j].weight
            document.getElementById('Box-id1').innerText = mobObj[j].Box
            //alert('Storage ' + mobObj[j].Storage)
            //alert('Display ' + mobObj[j].Display)
        }
        if(selectMob2.value==mobObj[j].model)
        {
            document.getElementById('storage-id2').innerText = mobObj[j].Storage
            document.getElementById('Display-id2').innerText = mobObj[j].Display
            document.getElementById('Camera-id2').innerText = mobObj[j].Camera
            document.getElementById('Battery-id2').innerText = mobObj[j].Battery
            document.getElementById('Processor-id2').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id2').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id2').innerText = mobObj[j].Sim
            document.getElementById('weight-id2').innerText = mobObj[j].weight
            document.getElementById('Box-id2').innerText = mobObj[j].Box
            //alert('2nd ' + mobObj[j].Storage)
        }
    }
}