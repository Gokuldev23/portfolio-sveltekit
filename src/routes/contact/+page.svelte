<script>
    let name = '';
    let email = '';
    let message = '';

    function handleSubmit() {
        const mailtoLink = `mailto:${email}?subject=Contact from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
    }
</script>

<section class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div class="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <img src='/contact.svg' alt="Contact Illustration" class="w-1/2 mx-auto mb-4" />
        <h2 class="text-2xl font-bold text-center mb-6">Let's work Together</h2>
        <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" bind:value={name} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" bind:value={email} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
            <div>
                <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows="4" bind:value={message} class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
            </div>
           
            <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Send Message</button>
            </div>
        </form>
        <div class="text-center">or</div>
        <div id="download" class="md:w-fit w-full mx-auto">
            <a href="/src/lib/assets/Gokul_frontend_dev_Resume.pdf" download="Gokul_Frontend_Dev_Resume.pdf" 
            class="text-center bg-black px-4 py-2  w-full rounded-full mt-4 text-sm inline-block text-white font-semibold hover:bg-blue-500 hover:text-white transition-all duration-500">Download my resume</a>
        </div>

    </div>
</section>