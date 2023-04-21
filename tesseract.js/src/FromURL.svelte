<script lang="javascript">
  import { createWorker } from "tesseract.js";

  let running = false;
  let output = "";
  let worker;
  let imgURL = "https://tesseract.projectnaptha.com/img/eng_bw.png"

  const start = async () => {

    // TODO: Initialize Tesseract worker
    // Initialize Tesseract worker
    worker = await createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage("eng");
    await worker.initialize("eng");
  };

  const capture = async () => {
    const {
      data: { text },
    } = await worker.recognize(imgURL);
    running = false;
    output = text;
  };

  start();
</script>

<main>
  <h1>OCR with Tesseract.js from URL!</h1>
  <input style="width: 500px;" type="url" id="uploader" value="{imgURL}">
  {#if !running}
    <button on:click={capture}>Capture</button>
    <div><b>output:</b> {output}</div>
  {:else}
    <div>Loading...</div>
  {/if}
</main>
