let firebaseConfig = {
    apiKey: "AIzaSyB2dc7G54nZg1H-tKUbxRtWmADEQxRJv10",
    authDomain: "simple-login-page-736b4.firebaseapp.com",
    databaseURL: "https://simple-login-page-736b4-default-rtdb.firebaseio.com",
    projectId: "simple-login-page-736b4",
    storageBucket: "simple-login-page-736b4.appspot.com",
    messagingSenderId: "787439045671",
    appId: "1:787439045671:web:7f597366a3893300fed202",
    measurementId: "G-WTGQ0B68PM"
  };
  firebase.initializeApp(firebaseConfig)
  let database = firebase.firestore()
  let docRef = database.collection('Mobile-Features')

  
  let mobObj = []
    docRef
    .doc('V1J9pOfo3FEuzuJEoDgr')
    .get()
    .then(function(doc) {
        if (doc.exists) {
            mobObj = doc.data().MobileSpecs
            selOpt()
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }).catch(function(error) {
        console.log("Error getting document:", error);
      });
      console.log(mobObj);
  //let mobObj = 
  let defSel1 = ''
  let defSel2 = ''
//let vOptions = document.getElementById('mobile-options')
function selOpt()
{
    for(let i = 0; i < mobObj.length; i++)
    {
        let vOptions1 = document.createElement('option') 
        vOptions1.value = mobObj[i].Model
        vOptions1.innerText = mobObj[i].Model
        let vOptions2 = document.createElement('option') 
        vOptions2.value = mobObj[i].Model
        vOptions2.innerText = mobObj[i].Model
        document.getElementById('mobile-options-1').append(vOptions1)
        document.getElementById('mobile-options-2').append(vOptions2)

        defSel1 = document.getElementById('mobile-options-1').value
        defSel2 = document.getElementById('mobile-options-2').value
    }
}
let compareBtn = document.getElementById('compare-btn')
compareBtn.onclick = () =>
{
    document.querySelector('.image-container').style.visibility = 'visible'
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
        if(selectMob1.value==mobObj[j].Model)
        {
            document.getElementById('Image-id1').src = mobObj[j].Image
            document.getElementById('Storage-id1').innerText = mobObj[j].Storage
            document.getElementById('Display-id1').innerText = mobObj[j].Display
            document.getElementById('Camera-id1').innerText = mobObj[j].Camera
            document.getElementById('Battery-id1').innerText = mobObj[j].Battery
            document.getElementById('Processor-id1').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id1').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id1').innerText = mobObj[j].Sim
            document.getElementById('Weight-id1').innerText = mobObj[j].Weight                        
            document.getElementById('Price-id1').innerText = mobObj[j].Price
            //alert('Storage ' + mobObj[j].Storage)
            //alert('Display ' + mobObj[j].Display)
        }
        if(selectMob2.value==mobObj[j].Model)
        {
            document.getElementById('Image-id2').src = mobObj[j].Image
            document.getElementById('Storage-id2').innerText = mobObj[j].Storage
            document.getElementById('Display-id2').innerText = mobObj[j].Display
            document.getElementById('Camera-id2').innerText = mobObj[j].Camera
            document.getElementById('Battery-id2').innerText = mobObj[j].Battery
            document.getElementById('Processor-id2').innerText = mobObj[j].Processor
            document.getElementById('Resolution-id2').innerText = mobObj[j].Resolution
            document.getElementById('Sim-id2').innerText = mobObj[j].Sim
            document.getElementById('Weight-id2').innerText = mobObj[j].Weight
            document.getElementById('Price-id2').innerText = mobObj[j].Price
            //alert('2nd ' + mobObj[j].Storage)
        }
    }
}
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
