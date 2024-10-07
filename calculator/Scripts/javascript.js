document.addEventListener('DOMContentLoaded', (event) => {  
    // 获取 <a> 标签元素  
    const replaceLink = document.getElementById('kg');  
  
    // 为 <a> 标签添加点击事件监听器  
    replaceLink.addEventListener('click', (e) => {  
        e.preventDefault(); // 阻止默认的链接跳转行为  
  
        // 获取所有具有 class="unit" 的元素  
        const units = document.getElementsByClassName('unit');  
  
        // 遍历所有匹配的元素并替换其内容  
        for (let unit of units) {  
            unit.textContent = '千克/Kg';  
        }  
    });  
});

document.addEventListener('DOMContentLoaded', (event) => {  
    // 获取 <a> 标签元素  
    const replaceLink = document.getElementById('g');  
  
    // 为 <a> 标签添加点击事件监听器  
    replaceLink.addEventListener('click', (e) => {  
        e.preventDefault(); // 阻止默认的链接跳转行为  
  
        // 获取所有具有 class="unit" 的元素  
        const units = document.getElementsByClassName('unit');  
  
        // 遍历所有匹配的元素并替换其内容  
        for (let unit of units) {  
            unit.textContent = '克/g'; 
        }  
    });  
});


document.getElementById('bt1').addEventListener('click', function() {  
    const unitElement = document.querySelector('.unit');  
    const unit = unitElement.textContent.trim();  
    const p_n = parseFloat(document.getElementById('p_n').value);  
    const p_w = parseFloat(document.getElementById('p_w').value);  
    const g_w = parseFloat(document.getElementById('g_w').value);  
    const r_w = parseFloat(document.getElementById('r_w').value);  
    const i_w = parseFloat(document.getElementById('i_w').value);

    let decimalPlaces = 4;  
    let unitLabel = 'Kg';  

    if (unit === '克/g') {  
        decimalPlaces = 2;  
        unitLabel = 'g';  
    }  

    const actualProduction = (p_n * p_w).toFixed(decimalPlaces);  
    const materialReceived = g_w.toFixed(decimalPlaces);  
    const materialReturned = r_w.toFixed(decimalPlaces);  
    const returned = (g_w - r_w).toFixed(decimalPlaces);  
    const waste = (g_w - (p_n * p_w) - r_w).toFixed(decimalPlaces);  
    const yieldPercentage = (((p_n * p_w) / (g_w - r_w)) * 100).toFixed(2);  
    const m_b = ((((p_n * p_w) + r_w + i_w) / g_w) * 100).toFixed(2);

    document.getElementById('yield').textContent = `${actualProduction} ${unitLabel}`;  
    document.getElementById('material_received').textContent = `${materialReceived} ${unitLabel}`;  
    document.getElementById('material_returned').textContent = `${materialReturned} ${unitLabel}`;  
    document.getElementById('returned').textContent = `${returned} ${unitLabel}`;  
    document.getElementById('waste').textContent = `${waste} ${unitLabel}`;  
    document.getElementById('yield_percentage').textContent = `${yieldPercentage}%`;  

    document.getElementById('yield1').textContent = `${actualProduction} ${unitLabel}`;
    document.getElementById('material_returned1').textContent = `${materialReturned} ${unitLabel}`;  
    document.getElementById('flaw').textContent = `${i_w} ${unitLabel}`;
    document.getElementById('material_balance').textContent = `${m_b}%`;

});  

// document.getElementById('bt3').addEventListener('click', function() {
//     const unitElement = document.querySelector('#yield');  
//     const textContent = unitElement.textContent || unitElement.innerText; 
//     const unitMatch = textContent.match(/\d+\.\d+\s*(\w+)/);  
//     let unit;
//     if (unitMatch && unitMatch.length > 1) {  
//         unit = unitMatch[1]; // 提取匹配到的单位  
//         // 您可以根据需要进一步处理单位，比如转换为统一的小写或大写  
//         unit = unit.toLowerCase(); // 转换为小写，以便统一处理  
//     } else {  
//         // 如果没有找到单位，您可以设置一个默认值或进行错误处理  
//         unit = 'unknown';  
//     }  

//     let decimalPlaces = 4;  
//     let unitLabel = 'Kg';  

//     if (unit === 'kg') {  
//         decimalPlaces = 2;  
//         unitLabel = 'g';  
//         toFixed(decimalPlaces)
//     }  

//     const yd = parseFloat(document.getElementById('yield').replace(/\s*\w+$/, ''));  
//     const md = parseFloat(document.getElementById('material_received').replace(/\s*\w+$/, ''));  
//     const m_d = parseFloat(document.getElementById('material_returned').replace(/\s*\w+$/, ''));  
//     const rd = parseFloat(document.getElementById('returned').replace(/\s*\w+$/, ''));  
//     const we = parseFloat(document.getElementById('waste').replace(/\s*\w+$/, ''));
//     const fw = parseFloat(document.getElementById('flaw').replace(/\s*\w+$/, ''));


//     document.getElementById('yield').textContent = `${yd.toFixed(decimalPlaces)} ${unitLabel}`;  
//     document.getElementById('material_received').textContent = `${md.toFixed(decimalPlaces)} ${unitLabel}`;  
//     document.getElementById('material_returned').textContent = `${m_d.toFixed(decimalPlaces)} ${unitLabel}`;  
//     document.getElementById('returned').textContent = `${rd.toFixed(decimalPlaces)} ${unitLabel}`;  
//     document.getElementById('waste').textContent = `${we.toFixed(decimalPlaces)} ${unitLabel}`;  

//     document.getElementById('yield1').textContent = `${yd.toFixed(decimalPlaces)} ${unitLabel}`;
//     document.getElementById('material_returned1').textContent = `${md.toFixed(decimalPlaces)} ${unitLabel}`;  
//     document.getElementById('flaw').textContent = `${fw.toFixed(decimalPlaces)} ${unitLabel}`;
// });

function refreash() {
    history.go(0);
}



document.getElementById('bt3').addEventListener('click', function() {  
    const elements = [  
        'yield', 'material_received', 'material_returned', 'returned', 'waste',  
        'yield1', 'material_returned1', 'flaw'  
    ];  

    elements.forEach(id => {  
        const element = document.getElementById(id);  
        if (element) {  
            let value = element.textContent.trim();  
            let number, unit;  

            if (value.endsWith('Kg')) {  
                number = parseFloat(value.slice(0, -2));  
                unit = 'Kg';  
                value = (number * 1000).toFixed(2) + ' g'; // 切换到g，保留两位小数  
            } else if (value.endsWith('g')) {  
                number = parseFloat(value.slice(0, -1));  
                unit = 'g';  
                value = (number / 1000).toFixed(4) + ' Kg'; // 切换到Kg，保留四位小数  
            }  

            element.textContent = value;  
        }  
    });  
});  