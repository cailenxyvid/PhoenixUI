<script lang="ts">
    import type { Meeting } from "$lib/data/customTypes";
    import { PUBLIC_DEFAULT_LOCALE_CODE } from "$env/static/public";
    import { localText } from "$lib/data/localize";
    import { user, dictionary } from "$lib/data/application";
  

    export let meeting: Meeting
    const eventDate = new Date(meeting.options.startDate);
</script>

<div class="flex flex-col text-center">
    <div class="text-4xl">
        {eventDate.toLocaleDateString($user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE, {                        
            day: "numeric",           
          })}
    </div>
    <div class="text-lg">
        {eventDate.toLocaleDateString($user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE, {                        
            month: "short",            
          })}
    </div>
    <div class="brandPrimaryText p-2 text-xl text-center hover:opacity-50">
        <button class="btn" title="{localText($dictionary, 'add_to_calendar')}">
            <i class="fa-solid fa-calendar-plus"></i>
        </button>
    </div>
</div>