$(function () {
  $("textarea")[0].value = `color: ${$("#colorT").val()};\ntext-shadow: 10px 5px 5px ${$("#colorT").val()};\nfont-size: 55px;\nfont-weight: 600;`;
  $("textarea")[1].value = "color: rgba(104,104,104,1);\ntext-shadow: 10px 5px 5px rgba(104,104,104,1);\nfont-size: 55px;\nfont-weight: 600;";

  function hexToRGBA(hex, isShadow = true) {
    if (isShadow) var opacityType = $("#opacity").val();
    else var opacityType = $("#opacityT").val();
    var m = hex.slice(1).match(/.{2}/g);
    m[0] = parseInt(m[0], 16);
    m[1] = parseInt(m[1], 16);
    m[2] = parseInt(m[2], 16);
    return `(${m.join(",")},${opacityType})`;
  }

  $("input").on("input", () => {
    let rgba = hexToRGBA($("#color").val());
    let sizeVal = $("#size").val();
    let textColor = $("#colorT").val();
    let rgbaT = hexToRGBA(textColor, false);

    $("h1").css({
      color: `rgba${rgbaT}`,
      fontSize: `${sizeVal}px`,
      fontWeight: $("#bold").val(),
      textShadow: `${$("#x-offset").val()}px ${$("#y-offset").val()}px ${$("#blur").val()}px rgba${rgba}`,
    });

    $("textarea")[0].value = `color: ${textColor};\ntext-shadow: ${$("#x-offset").val()}px ${$("#y-offset").val()}px ${$("#blur").val()}px ${$("#color").val()};
font-size: ${sizeVal}px;\nfont-weight: ${$("#bold").val()};`;
    $("textarea")[1].value = `color: rgba${rgbaT};\ntext-shadow: ${$("#x-offset").val()}px ${$("#y-offset").val()}px ${$("#blur").val()}px rgba${rgba};
font-size: ${sizeVal}px;\nfont-weight: ${$("#bold").val()};`;
  });
});
