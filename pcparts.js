'use strict'
const totalprice = document.getElementById('totalprice');
const CPUandMotherboard = document.getElementById('CPUandMotherboard');
const CPUimage = document.getElementById('cpuimage');
const CPUprice = document.getElementById('cpuPrice');

const GPU = document.getElementById('GPUselect');
const GPUprice = document.getElementById('gpuPrice');
const GPUimage =document.getElementById('GPUimage');


const wattage = document.getElementById('wattage');
const Cooling = document.getElementById('Cooling');
const silent = document.getElementById('silent');
const removeableCables = document.getElementById('removeablecables');
const pcCase = document.getElementById('caseselect');
const casePrice = document.getElementById('casePrice');
const caseImage = document.getElementById('caseimage');
const glassPanel = document.getElementById('glasspanel');

const thermalPaste = document.getElementById('thermalpaste');
const ramSize = document.getElementById('ramsizeselect');
const ramBrand = document.getElementById('rambrandselect');
const ramSpeed = document.getElementById('ramspeedselect');
const RAMprice = document.getElementById('ramPrice');

const oneStick = document.getElementById('onestick');
const twoSticks = document.getElementById('twosticks');
const threeSticks = document.getElementById('threesticks');
const fourSticks = document.getElementById('foursticks');



const ssdSelect = document.getElementById('ssdselect');
const hddSelect = document.getElementById('hddselect');
const ssdImage = document.getElementById('ssdimage');
const hddImage = document.getElementById('hddimage');
const storagePrice = document.getElementById('storageprice');

const coolerSelect = document.getElementById('coolerselect');
const coolerImage = document.getElementById('coolerimage');
const coolerPrice = document.getElementById('coolerprice');

thermalPaste.addEventListener('change', function (ev) {
    if(!(coolerSelect.value==="0"))
        if(thermalPaste.checked)
            coolerPrice.innerHTML = Number(coolerSelect.value) + Number(thermalPaste.value) + '€';
        else
            coolerPrice.innerHTML = Number(coolerSelect.value) + '€';

});

coolerSelect.addEventListener('change', function (ev) {

    if(coolerSelect.value==="35")
        coolerImage.setAttribute('src', 'img/20181210090923_coolermaster_hyper_212_black_edition.jpeg');
    else if(coolerSelect.value==="75")
        coolerImage.setAttribute('src', 'img/20210211115456_be_quiet_dark_rock_pro_4.jpeg');
    else if(coolerSelect.value==="145")
        coolerImage.setAttribute('src', 'img/20200225160140_nzxt_kraken_x63.jpeg');
    else
        coolerImage.setAttribute('src', 'img/cooler.png');

    if(thermalPaste.checked)
        coolerPrice.innerHTML = Number(coolerSelect.value) + Number(thermalPaste.value) + '€';
    else
        coolerPrice.innerHTML = Number(coolerSelect.value) + '€';
});

ssdSelect.addEventListener('change', function (ev) {

    if(ssdSelect.value==="50")
        ssdImage.setAttribute('src', 'img/20190205171649_crucial_mx500_500gb.jpeg');
    else if(ssdSelect.value==="65")
        ssdImage.setAttribute('src', 'img/20210224132555_8d7bad01.jpeg');
    else if(ssdSelect.value==="85")
        ssdImage.setAttribute('src', 'img/Screenshot_2736.png');
    else
        ssdImage.setAttribute('src', 'img/ssd.png');

    storagePrice.innerHTML = Number(ssdSelect.value) + Number(hddSelect.value) + '€';
});

hddSelect.addEventListener('change', function (ev) {

    if(hddSelect.value==="30")
        hddImage.setAttribute('src', 'img/xlarge_20180611095617_western_digital_caviar_blue_1tb_3_5_sata_iii.jpeg');
    else if(hddSelect.value==="50")
        hddImage.setAttribute('src', 'img/xlarge_20200310121555_western_digital_blue_2tb_5400rpm.jpeg');
    else
        hddImage.setAttribute('src', 'img/hdd.png');

    storagePrice.innerHTML = Number(ssdSelect.value) + Number(hddSelect.value) + '€';  
});

oneStick.addEventListener('change', function (ev) {
    
    if(!(ramSize.value==='0' || ramSpeed.value==='0' || ramBrand.value==='0'))
        RAMprice.innerHTML = Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value) + '€';
});

twoSticks.addEventListener('change', function (ev) {

    if(!(ramSize.value==='0' || ramSpeed.value==='0' || ramBrand.value==='0'))
        RAMprice.innerHTML = 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
});

threeSticks.addEventListener('change', function (ev) {

    if(!(ramSize.value==='0' || ramSpeed.value==='0' || ramBrand.value==='0'))
        RAMprice.innerHTML = 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
});

fourSticks.addEventListener('change', function (ev) {

    if(!(ramSize.value==='0' || ramSpeed.value==='0' || ramBrand.value==='0'))
        RAMprice.innerHTML = 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
});

ramSize.addEventListener('change', function (ev) {
 
    if(!(ramSize.value==="0"||ramSpeed.value==="0"||ramBrand.value==="0")){
        if(oneStick.checked)
            RAMprice.innerHTML= Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value) + '€';
        else if(twoSticks.checked)
            RAMprice.innerHTML = 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(threeSticks.checked)
            RAMprice.innerHTML = 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(fourSticks.checked)
            RAMprice.innerHTML = 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
    }
}); 

ramSpeed.addEventListener('change', function (ev) {

    if(!(ramSize.value==="0"||ramSpeed.value==="0"||ramBrand.value==="0")){
        if(oneStick.checked)
            RAMprice.innerHTML= Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value) + '€';
        else if(twoSticks.checked)
            RAMprice.innerHTML = 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(threeSticks.checked)
            RAMprice.innerHTML = 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(fourSticks.checked)
            RAMprice.innerHTML = 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
    }
});

ramBrand.addEventListener('change', function (ev) {

    if(!(ramSize.value==="0"||ramSpeed.value==="0"||ramBrand.value==="0")){
        if(oneStick.checked)
            RAMprice.innerHTML= Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value) + '€';
        else if(twoSticks.checked)
            RAMprice.innerHTML = 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(threeSticks.checked)
            RAMprice.innerHTML = 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(fourSticks.checked)
            RAMprice.innerHTML = 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
    }
});

ramSize.addEventListener('change', function (ev) {

    if(!(ramSize.value==="0"||ramSpeed.value==="0"||ramBrand.value==="0")){
        if(oneStick.checked)
            RAMprice.innerHTML= Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value) + '€';
        else if(twoSticks.checked)
            RAMprice.innerHTML = 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(threeSticks.checked)
            RAMprice.innerHTML = 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
        else if(fourSticks.checked)
            RAMprice.innerHTML = 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value)) + '€';
    }
}); 

CPUandMotherboard.addEventListener('change', function (ev) {

    if(CPUandMotherboard.value==="220")
        CPUimage.setAttribute('src', 'img/intel_core_i5_9400f_box.jpeg');
    else if(CPUandMotherboard.value==="300")
        CPUimage.setAttribute('src', 'img/ryzen_5_3600_box.jpeg');
    else if(CPUandMotherboard.value==="440")
        CPUimage.setAttribute('src', 'img/ryzen_7_3700x_box.jpeg');
    else
        CPUimage.setAttribute('src', 'img/toppng.com-file-processor-icon-vector-980x982.png');

    CPUprice.innerHTML = CPUandMotherboard.value + '€';
      
});

GPU.addEventListener('change', function (ev) {

    if(GPU.value==="150")
        GPUimage.setAttribute('src', 'img/xlarge_20200716105207_biostar_radeon_rx_550_2gb_va5515rf21_tbmra_bs2.jpeg');
    else if(GPU.value==="300")
        GPUimage.setAttribute('src', 'img/xlarge_20161103101515_gigabyte_geforce_gtx1050_ti_4gb_gv_n105td5_4gd.jpeg');
    else if(GPU.value==="600")
        GPUimage.setAttribute('src', 'img/xlarge_20191031102120_gigabyte_geforce_gtx_1660_super_6gb_gv_n166soc_6gd.jpeg');
    else
        GPUimage.setAttribute('src', 'img/gpu.png');

    GPUprice.innerHTML = GPU.value + '€';
});

wattage.addEventListener('change', function (ev) {

    if(silent.checked && removeableCables.checked)
        PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + Number(silent.value) + '€';
    else if(!silent.checked && removeableCables.checked)
        PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + '€';
    else if(silent.checked && !removeableCables.checked)
        PSUprice.innerHTML = Number(wattage.value) + Number(silent.value) + '€';
    else
        PSUprice.innerHTML = Number(wattage.value) + '€';
});

silent.addEventListener('change', function (ev) {

    if(!(wattage.value==="0"))
        if(silent.checked && removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + Number(silent.value) + '€';
        else if(!silent.checked && removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + '€';
        else if(silent.checked && !removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(silent.value) + '€';
        else
            PSUprice.innerHTML = Number(wattage.value) + '€';
});

removeableCables.addEventListener('change', function (ev) {

    if(!(wattage.value==="0"))
        if(silent.checked && removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + Number(silent.value) + '€';
        else if(!silent.checked && removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(removeableCables.value) + '€';
        else if(silent.checked && !removeableCables.checked)
            PSUprice.innerHTML = Number(wattage.value) + Number(silent.value) + '€';
        else
            PSUprice.innerHTML = Number(wattage.value) + '€';
});

pcCase.addEventListener('change', function (ev) {

    if(pcCase.value==="45")
        caseImage.setAttribute('src', 'img/xlarge_20200127102317_kolink_stronghold_black.jpeg');
    else if(pcCase.value==="60")
        caseImage.setAttribute('src', 'img/cougar_mx410_mesh_g_rgb.jpeg');
    else if(pcCase.value==="95")
        caseImage.setAttribute('src', 'img/be_quiet_pure_base_500dx_black.jpeg');
    else if(pcCase.value==="105")
        caseImage.setAttribute('src', 'img/nzxt_h510i_red.jpeg');
    else
        caseImage.setAttribute('src', 'img/case.png');

    if(!(pcCase.value==="0"))
        if(glassPanel.checked)
            casePrice.innerHTML = Number(pcCase.value) + Number(glassPanel.value) + '€';
        else
            casePrice.innerHTML = Number(pcCase.value) + '€';
    else
        casePrice.innerHTML = 0 + '€';
      
});

glassPanel.addEventListener('change', function (ev) {

    if(!(pcCase.value==="0"))
        if(glassPanel.checked)
            casePrice.innerHTML = Number(pcCase.value) + Number(glassPanel.value) + '€';
        else
            casePrice.innerHTML = Number(pcCase.value) + '€';
});

document.getElementById('calculate').addEventListener('click', function (ev) {

    let message = 0;

    message += Number(CPUandMotherboard.value);
    if(!(ramSize.value==="0"||ramSpeed.value==="0"||ramBrand.value==="0")){
        if(oneStick.checked)
            message += Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value);
        else if(twoSticks.checked)
            message += 2*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value));
        else if(threeSticks.checked)
            message += 3*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value));
        else if(fourSticks.checked)
            message += 4*(Number(ramSize.value) + Number(ramSpeed.value) + Number(ramBrand.value));
    }
    message += Number(GPU.value);
    if(!(wattage.value === "0")){
        if(silent.checked && removeableCables.checked)
            message += Number(wattage.value) + Number(removeableCables.value) + Number(silent.value);
        else if(!silent.checked && removeableCables.checked)
            message += Number(wattage.value) + Number(removeableCables.value);
        else if(silent.checked && !removeableCables.checked)
            message += Number(wattage.value) + Number(silent.value);
        else
            message += Number(wattage.value);
    }
    message += Number(ssdSelect.value) + Number(hddSelect.value);
    if(!(pcCase.value==="0"))
        if(glassPanel.checked)
            message += Number(pcCase.value) + Number(glassPanel.value);
        else
            message += Number(pcCase.value);

    if(!(coolerSelect.value==="0"))
        if(thermalPaste.checked)
            message += Number(coolerSelect.value) + Number(thermalPaste.value);
        else
            message += Number(coolerSelect.value);
    totalprice.innerHTML = message + '€';
});