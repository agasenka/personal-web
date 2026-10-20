<script setup>
import { eqState, progressSeconds, totalSeconds, rainState } from '../composables/useMusic'

const formatTime = (secs) => {
  const m = Math.floor(secs / 60)
  const s = secs % 60
  return `0${m}:${s < 10 ? '0' : ''}${s}`
}

const generateProgressString = (current, total, length) => {
  const ratio = current / total
  const filled = Math.floor(ratio * length)
  const empty = Math.max(0, length - filled)
  return `[${'█'.repeat(filled)}${'-'.repeat(empty)}]`
}
</script>

<template>
  <section class="mt-4 pb-8">
    <div class="inline-block bg-tui-muted text-tui-bg px-4 py-1 font-bold mb-6 text-sm sm:text-base uppercase tracking-wider">
      ABOUT_ME
    </div>
    
    <div class="pl-4 border-l-2 border-tui-muted mb-8">
      <p class="text-xl sm:text-2xl font-bold mb-2">Hello. I am Agas Pratama</p>
      <p class="text-tui-muted">> agasenka · Yet another NixOS user</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="border border-tui-text p-4 hover:border-white transition-colors">
        <div class="font-bold border-b border-tui-muted pb-1 mb-4 flex items-center">
          <span class="text-tui-muted mr-2">$&gt;</span> cat whoami.txt
        </div>
        <div class="text-sm leading-relaxed text-tui-text space-y-4">
          <p>
            Systems Engineering, C/C++, DSP & Embedded Audio enthusiast. Sehari-hari saya pakai NixOS dengan config flake karena suka sistem yang reproducible dan bisa dibongkar pasang sendiri.
          </p>
          <p>
            Daily environment: NixOS + Niri + Neovim + fish. Suka ngulik hal-hal yang dekat dengan hardware, buffer audio, timing, dan pemrosesan sinyal real-time.
          </p>
          <p class="text-tui-muted italic">
            "If I could be a constellation with you."
          </p>
        </div>
      </div>

      <div class="border border-tui-text p-4 hover:border-white transition-colors">
        <div class="font-bold border-b border-tui-muted pb-1 mb-4 flex items-center">
          <span class="text-tui-muted mr-2">$&gt;</span> cat focus.md
        </div>
        <div class="text-sm leading-relaxed text-tui-text space-y-3">
          <p class="font-bold text-tui-text"># Current Focus</p>
          <ul class="flex flex-col gap-2 text-tui-muted ml-2">
            <li class="flex items-start gap-2">
              <span class="text-tui-text">></span> Systems programming & low-level optimization
            </li>
            <li class="flex items-start gap-2">
              <span class="text-tui-text">></span> DSP pipelines & embedded/real-time audio
            </li>
            <li class="flex items-start gap-2">
              <span class="text-tui-text">></span> Declarative system configurations & tooling
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-6 border border-tui-text p-4 hover:border-white transition-colors">
      <div class="font-bold border-b border-tui-muted pb-1 mb-4 flex items-center justify-between">
        <div>
          <span class="text-tui-muted mr-2">$&gt;</span> ncmpcpp --now-playing
        </div>
        <span class="text-xs text-tui-muted animate-pulse">[PLAYING]</span>
      </div>
      <div class="flex items-center gap-4 sm:gap-6">
        <div class="hidden sm:block text-tui-muted text-[10px] leading-tight font-mono whitespace-pre w-10 text-center">{{ rainState.join('\n') }}</div>
        <div class="flex-1 font-mono text-sm min-w-0">
          <div class="mb-1 flex flex-row items-center justify-between min-w-0">
            <div class="flex items-center min-w-0 flex-1 pr-2">
              <span class="text-tui-muted w-14 sm:w-16 shrink-0">TITLE :</span>
              <span class="font-bold text-tui-text truncate">Ame to Kapuchino (雨とカプチーノ)</span>
            </div>
            <span class="text-tui-text font-bold text-xs tracking-widest hidden sm:inline-block shrink-0">{{ eqState }}</span>
          </div>
          <div class="mb-3 flex justify-between items-center min-w-0">
            <div class="flex items-center min-w-0 flex-1 pr-2">
              <span class="text-tui-muted w-14 sm:w-16 shrink-0">ARTIST:</span>
              <span class="text-tui-text truncate">Yorushika (ヨルシカ)</span>
            </div>
            <span class="text-tui-text font-bold text-xs tracking-widest sm:hidden shrink-0">{{ eqState }}</span>
          </div>
          
          <div class="flex items-center gap-2 sm:gap-3">
            <span class="text-tui-muted text-xs shrink-0">{{ formatTime(progressSeconds) }}</span>
            <div class="flex-1 text-tui-text tracking-widest text-xs overflow-hidden text-center whitespace-nowrap">
              <span class="hidden sm:inline">{{ generateProgressString(progressSeconds, totalSeconds, 28) }}</span>
              <span class="sm:hidden">{{ generateProgressString(progressSeconds, totalSeconds, 12) }}</span>
            </div>
            <span class="text-tui-muted text-xs shrink-0">{{ formatTime(totalSeconds) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
