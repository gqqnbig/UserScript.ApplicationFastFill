// ==UserScript==
// @name         Application Fast Fill
// @version      0.2
// @description  Fast fill an application
// @author       gqqnbig
// @include 	 http://www.example.com/*
// @grant
// ==/UserScript==

(function() {
    'use strict';
    
    function selectRadioButtons()
    {
        var processedNames = [];
		$("input[type=radio]:not([onclick])").each(function()
		{
			if (processedNames.indexOf(this.name) > -1)
				return;
			processedNames.push(this.name);

			var radioButtonsInThisGroup = $("input[type=radio][name='" + this.name + "']");
			if(!radioButtonsInThisGroup.filter(":checked").val())
				radioButtonsInThisGroup.eq(0).prop("checked", true);
		});
    }
    
    function selectDropdownList()
    {
    	$("select:not([onchange])").each(function ()
        {
            if(!$(this).val())
                $(this).val($(this).find("option[value!='']").eq(0).val());
        });
    }
    
    selectRadioButtons();
    selectDropdownList();
})();
