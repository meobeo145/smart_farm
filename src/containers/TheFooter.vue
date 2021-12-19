<template>
  <CFooter>
    <div class="mt-2">
      Liên hệ với chúng tôi
    </div>
    <div class="mt-2 ml-auto">
      <i class="fas fa-envelope"></i> Email:
      <a href="mailto:hangvt14599@gmail.com">hangvt14599@gmail.com</a>
    </div>
    <div class="mt-2 ml-auto">
      <i class="fas fa-phone-alt"></i> Hotline:
      <span style="color:red;">090-123-4567</span>
    </div>
    <div class="ml-auto">
      <a href="" target="_blank">Smart Farm</a>
      <span class="ml-1">&copy; {{ new Date().getFullYear() }}</span>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>
