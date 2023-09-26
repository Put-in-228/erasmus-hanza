<template>
    <PowerBIEmbedModule
    :embedConfig = config,

    :cssClassName = cssName

    :phasedEmbedding = phasedEmbed
    ></PowerBIEmbedModule>

    <iframe title="new_proj_20_09" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=efb8d325-f98b-41a1-acc4-85d43b65c43a&autoAuth=true&ctid=3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57" frameborder="0" allowFullScreen="true"></iframe>

</template>

<script>
    import { PowerBIEmbedModule } from 'powerbi-client-vue-js';
    export default {
        components: {
            PowerBIEmbedModule
        }
    
    
    }

    var config = {
        type: "report",
        id: "efb8d325-f98b-41a1-acc4-85d43b65c43a",
        embedUrl: undefined,
        accessToken: "3efd4d88-9b88-4fc9-b6c0-c7ca50f1db57",
        tokenType: models.TokenType.Embed,
        settings: {
            panes: {
                filters: {
                    expanded: false,
                    visible: false
                }
            },
            background: models.BackgroundType.Transparent,
        }

    };

    var cssName = "reportCSS";

    var phasedEmbed = false;
</script>

