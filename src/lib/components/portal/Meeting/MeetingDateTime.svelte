<script lang="ts">
  import type { Meeting } from "$lib/data/customTypes";
  import { PUBLIC_DEFAULT_LOCALE_CODE } from "$env/static/public";
  import { user } from "$lib/data/application";

  export let meeting: Meeting;
  const eventDate = new Date(meeting.options.startDate);
</script>

<div class="">
  {eventDate.toLocaleDateString(
    $user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE,
    {
      weekday: "long",
    }
  )},
  {eventDate.toLocaleDateString($user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE, {                        
    month: "short",            
  })}
  {eventDate.toLocaleDateString($user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE, {                        
    day: "numeric",           
  })}
  {eventDate.toLocaleTimeString($user.locale?.code ?? PUBLIC_DEFAULT_LOCALE_CODE)}
</div>
