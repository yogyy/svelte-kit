<script lang="ts">
  import * as Select from '$lib/components/ui/select';

  const services = [
    { value: 'Renovation', label: 'Renovation' },
    { value: 'Architecture', label: 'Architecture' },
    { value: 'Building', label: 'Building' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Interior', label: 'Interior' }
  ];
</script>

<Select.Root>
  <Select.Trigger class="w-full bg-white">
    <Select.Value
      class="text-muted-foreground"
      placeholder="Select Your Service" />
  </Select.Trigger>
  <Select.Content>
    <Select.Group>
      <Select.Label>Select Your Service</Select.Label>
      {#each services as service}
        <Select.Item value={service.value} label={service.label}
          >{service.label}</Select.Item>
      {/each}
    </Select.Group>
  </Select.Content>
  <Select.Input name="services selected" />
</Select.Root>
