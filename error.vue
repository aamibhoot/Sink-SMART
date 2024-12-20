<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  // Add HTML content directly to the DOM
  document.body.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #f3f4f6; text-align: center; color: #374151;">
      <h1 style="font-size: 2rem; font-weight: bold; margin-bottom: 1rem;">404 | Murubbii....</h1>
      <img
        src="https://i.pinimg.com/originals/b1/03/3b/b1033bc996c69d3a6003c2fa07281aaf.gif"
        alt="Murubbii GIF"
        style="width: 300px; height: auto; border-radius: 8px;"
      />
      <p style="margin-top: 1rem; color: #6b7280;">
        Redirecting to <a href="https://smartbd.com" style="color: #3b82f6; text-decoration: underline;">Smart Technologies</a> in 6 seconds...
      </p>
    </div>
  `;

  // Redirect to the specified URL after 6 seconds
  setTimeout(() => {
    window.location.href = 'https://smartbd.com';
  }, 6000);
});
</script>

