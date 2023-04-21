<script lang="javascript">
  import { createWorker } from "tesseract.js";

  let running = false;
  let output = "";
  let worker;

  const start = async () => {

    // TODO: Initialize Tesseract worker
    // Initialize Tesseract worker
    worker = await createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage("deu");
    await worker.initialize("deu");
  };

  const handleImageUpload = (event) => {
    const imageBlob = event.target.files[0];
    if (!imageBlob) {
      return;
    }
    running = true;
    output = "";
    capture(imageBlob);
  }

  const capture = async (imageBlob) => {
    const {
      data: { text },
    } = await worker.recognize(imageBlob);
    running = false;
    output = text;
  };

  start();
</script>

<main>
  <h1>OCR with Tesseract.js from File!</h1>
  <input on:change={handleImageUpload} type="file" id="uploader">
  {#if !running}
    <div><b>output:</b> {output}</div>
  {:else}
    <div>Loading...</div>
  {/if}
</main>
