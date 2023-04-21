<script lang="javascript">
  import { createWorker } from "tesseract.js";

  let video, canvas, ctx;
  let running = false;
  let output = "";
  let worker;

  const start = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      video.srcObject = stream;
      video.play();
      video.onresize = () => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        running = true;
      };
    } catch (error) {
      /* Do you have a webcam? */
      console.log(error);
    }

    // TODO: Initialize Tesseract worker
    // Initialize Tesseract worker
    worker = await createWorker({
      logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage("deu");
    await worker.initialize("deu");
  };

  const capture = async () => {
    ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const img = canvas.toDataURL("image/png");
    const {
      data: { text },
    } = await worker.recognize(img);
    output = text;
  };

  // Start the webcam
  start();
</script>

<main>
  <h1>OCR with Tesseract.js from Camera !</h1>
  <video bind:this={video} style="display: none" />
  <canvas bind:this={canvas} />
  {#if running}
    <button on:click={capture}>Capture</button>
    <div><b>output:</b> {output}</div>
  {:else}
    <div>Loading...</div>
  {/if}
</main>
