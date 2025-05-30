// Advanced Obfuscated Text Editor Application - Security Hardened & Optimized
(function() {
    'use strict';
    
    // Lightweight protection system
    var _0xSecurity = {
        // Fast anti-debugging
        _antiDebug: function() {
            var start = performance.now();
            debugger;
            if (performance.now() - start > 50) {
                this._terminate();
            }
        },
        
        // Quick detection evasion
        _evadeDetection: function() {
            if (typeof console !== 'undefined') {
                try {
                    console.clear();
                    console.log('%cText Document Editor v2.1', 'color: #666; font-size: 11px;');
                } catch(e) {}
            }
        },
        
        // Fast integrity check
        _integrityCheck: function() {
            if (document.querySelectorAll('script').length > 3) {
                this._terminate();
            }
        },
        
        // Quick terminate
        _terminate: function() {
            document.body.innerHTML = '<div style="font-family: Segoe UI; padding: 20px;">Document corrupted. Please restart.</div>';
        }
    };
    
    // Fast obfuscation
    var _0xObf = {
        _enc: function(str) {
            return btoa(str);
        },
        _dec: function(str) {
            try {
                return atob(str);
            } catch(e) {
                return '';
            }
        }
    };
    
    // Pre-encoded element IDs for speed
    var _0xElements = [
        'YXVkaW9QbGF5ZXI=', 'cGxheUJ0bg==', 'cHJldkJ0bg==', 'bmV4dEJ0bg==', 
        'cHJvZ3Jlc3NCYXI=', 'dm9sdW1lU2xpZGVy', 'Y3VycmVudFRpbWU=', 'dG90YWxUaW1l',
        'bXVzaWNDb250cm9scw==', 'bm90ZXBhZFRleHQ=', 'aGlkZGVu', 'Y2xpY2s=',
        'dm9sdW1lVmFsdWU=', 'dHJhY2tUaXRsZQ==', 'dHJhY2tBcnRpc3Q=', 'ZmlsZUluZm8=',
        'c3RhdHVzVGV4dA=='
    ];
    
    var _0xGlobalInstance;
    
    // Fast main application
    var _0xMainApp = (function() {
        function AppConstructor() {
            // Quick security check
            _0xSecurity._antiDebug();
            
            // Fast element initialization
            this._elements = {
                audio: document.getElementById(_0xObf._dec(_0xElements[0])),
                playBtn: document.getElementById(_0xObf._dec(_0xElements[1])),
                prevBtn: document.getElementById(_0xObf._dec(_0xElements[2])),
                nextBtn: document.getElementById(_0xObf._dec(_0xElements[3])),
                progressBar: document.getElementById(_0xObf._dec(_0xElements[4])),
                volumeSlider: document.getElementById(_0xObf._dec(_0xElements[5])),
                volumeValue: document.getElementById(_0xObf._dec(_0xElements[12])),
                currentTime: document.getElementById(_0xObf._dec(_0xElements[6])),
                totalTime: document.getElementById(_0xObf._dec(_0xElements[7])),
                trackTitle: document.getElementById(_0xObf._dec(_0xElements[13])),
                trackArtist: document.getElementById(_0xObf._dec(_0xElements[14])),
                fileInfo: document.getElementById(_0xObf._dec(_0xElements[15])),
                statusText: document.getElementById(_0xObf._dec(_0xElements[16])),
                notepadText: document.getElementById(_0xObf._dec(_0xElements[9])),
                musicControls: document.getElementById(_0xObf._dec(_0xElements[8])),
                shuffleBtn: document.getElementById('shuffleBtn'),
                repeatBtn: document.getElementById('repeatBtn'),
                playlistContainer: document.getElementById('playlistContainer'),
                playlistCount: document.getElementById('playlistCount')
            };
            
            // Fast state initialization
            this._state = {
                isPlaying: false,
                controlsVisible: false,
                currentTrack: 0,
                shuffle: false,
                repeat: false
            };
            
            // Pre-built music library (no randomization for speed)
            this._library = [
                {
                    src: './assets/music/03 Too Many Nights (feat. Don Toliver & Future).mp3',
                    title: 'Too Many Nights (feat. Don Toliver & Future)',
                    artist: 'Metro Boomin',
                    album: 'Heroes & Villains'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] After Hours.mp3',
                    title: 'After Hours',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Alone Again.mp3',
                    title: 'Alone Again',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] BAILE INoLVIDABLE.mp3',
                    title: 'BAILE INOLVIDABLE',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Blinding Lights.mp3',
                    title: 'Blinding Lights',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] BOKeTE.mp3',
                    title: 'BOKETE',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] BRIAN STEEL.mp3',
                    title: 'BRIAN STEEL',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] CAFé CON RON.mp3',
                    title: 'CAFÉ CON RON',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] CELIBACY.mp3',
                    title: 'CELIBACY',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] CN TOWER.mp3',
                    title: 'CN TOWER',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] CRYING IN CHANEL.mp3',
                    title: 'CRYING IN CHANEL',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] DEEPER.mp3',
                    title: 'DEEPER',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] DIE TRYING.mp3',
                    title: 'DIE TRYING',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] DtMF.mp3',
                    title: 'DtMF',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] EL CLúB.mp3',
                    title: 'EL CLUB',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] EoO.mp3',
                    title: 'EoO',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Escape From LA.mp3',
                    title: 'Escape From LA',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Faith.mp3',
                    title: 'Faith',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] GIMME A HUG.mp3',
                    title: 'GIMME A HUG',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] GLORIOUS.mp3',
                    title: 'GLORIOUS',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] GREEDY.mp3',
                    title: 'GREEDY',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Hardest To Love.mp3',
                    title: 'Hardest To Love',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Heartless.mp3',
                    title: 'Heartless',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] In Your Eyes.mp3',
                    title: 'In Your Eyes',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] KETU TeCRÉ.mp3',
                    title: 'KETU TECRÉ',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] KLOuFRENS.mp3',
                    title: 'KLOUFRENS',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] LA MuDANZA.mp3',
                    title: 'LA MUDANZA',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] LASERS.mp3',
                    title: 'LASERS',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] LO QUE LE PASÓ A HAWAii.mp3',
                    title: 'LO QUE LE PASÓ A HAWAII',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] MEET YOUR PADRE.mp3',
                    title: 'MEET YOUR PADRE',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] MOTH BALLS.mp3',
                    title: 'MOTH BALLS',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] NOKIA.mp3',
                    title: 'NOKIA',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] NUEVAYoL.mp3',
                    title: 'NUEVAYOL',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] OMW.mp3',
                    title: 'OMW',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] PERFuMITO NUEVO.mp3',
                    title: 'PERFUMITO NUEVO',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] PIMMIE\'S DILEMMA.mp3',
                    title: 'PIMMIE\'S DILEMMA',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] PIToRRO DE COCO.mp3',
                    title: 'PITORRO DE COCO',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] RAINING IN HOUSTON.mp3',
                    title: 'RAINING IN HOUSTON',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Repeat After Me (Interlude).mp3',
                    title: 'Repeat After Me (Interlude)',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Save Your Tears.mp3',
                    title: 'Save Your Tears',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Scared To Live.mp3',
                    title: 'Scared To Live',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] SMALL TOWN FAME.mp3',
                    title: 'SMALL TOWN FAME',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Snowchild.mp3',
                    title: 'Snowchild',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] SOMEBODY LOVES ME.mp3',
                    title: 'SOMEBODY LOVES ME',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] SOMETHING ABOUT YOU.mp3',
                    title: 'SOMETHING ABOUT YOU',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] SPIDER-MAN SUPERMAN.mp3',
                    title: 'SPIDER-MAN SUPERMAN',
                    artist: 'Artist',
                    album: 'Album'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Too Late.mp3',
                    title: 'Too Late',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] TURiSTA.mp3',
                    title: 'TURISTA',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] Until I Bleed Out.mp3',
                    title: 'Until I Bleed Out',
                    artist: 'The Weeknd',
                    album: 'After Hours'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] VeLDÁ.mp3',
                    title: 'VELDÁ',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] VOY A LLeVARTE PA PR.mp3',
                    title: 'VOY A LLEVARTE PA PR',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] WELTiTA.mp3',
                    title: 'WELTITA',
                    artist: 'Bad Bunny',
                    album: 'DeBÍ TiRAR MáS FOToS'
                },
                {
                    src: './assets/music/[SPOTDOWNLOADER.COM] WHEN HE\'S GONE.mp3',
                    title: 'WHEN HE\'S GONE',
                    artist: 'Artist',
                    album: 'Album'
                }
            ];
            
            // Immediate initialization (no delays)
            this._initialize();
        }
        
        AppConstructor.prototype._initialize = function() {
            this._setupEventHandlers();
            this._loadTrack(0);
            this._loadSavedText();
            this._updateVolumeDisplay();
            this._updateTrackInfo();
            this._buildPlaylist();
            
            // Start lightweight security monitoring
            this._startSecurityMonitoring();
        };
        
        AppConstructor.prototype._startSecurityMonitoring = function() {
            // Reduced frequency security checks for speed
            setInterval(function() {
                _0xSecurity._evadeDetection();
            }, 15000); // Every 15 seconds instead of random
        };
        
        AppConstructor.prototype._setupEventHandlers = function() {
            var self = this;
            
            this._elements.playBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                self._togglePlay();
            });
            
            this._elements.prevBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                self._previousTrack();
            });
            
            this._elements.nextBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                self._nextTrack();
            });
            
            this._elements.shuffleBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                self._toggleShuffle();
            });
            
            this._elements.repeatBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                self._toggleRepeat();
            });
            
            this._elements.progressBar.addEventListener('input', function() {
                self._seek();
            });
            
            this._elements.volumeSlider.addEventListener('input', function() {
                self._updateVolume();
            });
            
            this._elements.audio.addEventListener('loadedmetadata', function() {
                self._updateDuration();
            });
            
            this._elements.audio.addEventListener('timeupdate', function() {
                self._updateProgress();
            });
            
            this._elements.audio.addEventListener('ended', function() {
                self._trackEnded();
            });
            
            this._elements.audio.addEventListener('error', function(e) {
                console.log('Audio processing error - switching source...');
                self._updateStatusBar('Switching audio source...');
                setTimeout(function() {
                    self._nextTrack();
                }, 1000);
            });
            
            document.addEventListener('keydown', function(e) {
                self._handleKeyboard(e);
            });
            
            this._elements.notepadText.addEventListener('input', function() {
                self._saveText();
            });
            
            var closeBtn = document.querySelector('.close');
            if (closeBtn) {
                closeBtn.addEventListener(_0xObf._dec(_0xElements[11]), function() {
                    if (confirm('Save document before closing?')) {
                        window.close();
                    }
                });
            }
        };
        
        AppConstructor.prototype._buildPlaylist = function() {
            var self = this;
            this._elements.playlistContainer.innerHTML = '';
            
            this._library.forEach(function(track, index) {
                var item = document.createElement('div');
                item.className = 'playlist-item';
                item.dataset.index = index;
                
                item.innerHTML = 
                    '<span class="track-number">' + (index + 1) + '</span>' +
                    '<div class="track-info">' +
                        '<div class="track-name">' + track.title + '</div>' +
                        '<div class="track-artist-small">' + track.artist + '</div>' +
                    '</div>';
                
                item.addEventListener('click', function() {
                    self._playTrack(parseInt(this.dataset.index));
                });
                
                self._elements.playlistContainer.appendChild(item);
            });
            
            this._elements.playlistCount.textContent = this._library.length + ' tracks';
            this._updatePlaylistHighlight();
        };
        
        AppConstructor.prototype._updatePlaylistHighlight = function() {
            var items = this._elements.playlistContainer.querySelectorAll('.playlist-item');
            var currentIndex = this._state.currentTrack;
            var isPlaying = this._state.isPlaying;
            
            items.forEach(function(item, index) {
                item.classList.remove('active', 'playing');
                if (index === currentIndex) {
                    item.classList.add('active');
                    if (isPlaying) {
                        item.classList.add('playing');
                    }
                }
            });
        };
        
        AppConstructor.prototype._playTrack = function(index) {
            this._state.currentTrack = index;
            this._loadTrack(index);
            this._updateTrackInfo();
            this._updatePlaylistHighlight();
            this._play();
        };
        
        AppConstructor.prototype._toggleShuffle = function() {
            this._state.shuffle = !this._state.shuffle;
            this._elements.shuffleBtn.classList.toggle('active', this._state.shuffle);
            this._updateStatusBar(this._state.shuffle ? 'Shuffle ON' : 'Shuffle OFF');
        };
        
        AppConstructor.prototype._toggleRepeat = function() {
            this._state.repeat = !this._state.repeat;
            this._elements.repeatBtn.classList.toggle('active', this._state.repeat);
            this._updateStatusBar(this._state.repeat ? 'Repeat ON' : 'Repeat OFF');
        };
        
        AppConstructor.prototype._toggleMusicControls = function() {
            this._state.controlsVisible = !this._state.controlsVisible;
            
            if (this._state.controlsVisible) {
                this._elements.musicControls.classList.remove(_0xObf._dec(_0xElements[10]));
                this._updateTrackInfo();
            } else {
                this._elements.musicControls.classList.add(_0xObf._dec(_0xElements[10]));
                this._elements.fileInfo.textContent = 'Ready';
            }
        };
        
        AppConstructor.prototype._togglePlay = function() {
            if (this._state.isPlaying) {
                this._pause();
            } else {
                this._play();
            }
        };
        
        AppConstructor.prototype._play = function() {
            var self = this;
            this._elements.audio.play().then(function() {
                self._state.isPlaying = true;
                self._elements.playBtn.textContent = '⏸';
                var currentTrack = self._library[self._state.currentTrack];
                self._updateStatusBar('Playing: ' + currentTrack.title);
                document.querySelector('.title').textContent = 'Notepad - ♪ ' + currentTrack.title;
                self._updatePlaylistHighlight();
            }).catch(function(error) {
                console.log('Audio playback error - trying alternative...');
                self._updateStatusBar('Audio processing - please wait...');
                setTimeout(function() {
                    self._nextTrack();
                }, 1000);
            });
        };
        
        AppConstructor.prototype._pause = function() {
            this._elements.audio.pause();
            this._state.isPlaying = false;
            this._elements.playBtn.textContent = '▶';
            this._updateStatusBar('Music paused');
            document.querySelector('.title').textContent = 'Notepad - Untitled';
            this._updatePlaylistHighlight();
        };
        
        AppConstructor.prototype._previousTrack = function() {
            this._state.currentTrack = (this._state.currentTrack - 1 + this._library.length) % this._library.length;
            this._loadTrack(this._state.currentTrack);
            this._updateTrackInfo();
            this._updatePlaylistHighlight();
            if (this._state.isPlaying) {
                this._play();
            }
        };
        
        AppConstructor.prototype._nextTrack = function() {
            if (this._state.shuffle) {
                this._state.currentTrack = Math.floor(Math.random() * this._library.length);
            } else {
                this._state.currentTrack = (this._state.currentTrack + 1) % this._library.length;
            }
            
            this._loadTrack(this._state.currentTrack);
            this._updateTrackInfo();
            this._updatePlaylistHighlight();
            if (this._state.isPlaying) {
                this._play();
            }
        };
        
        AppConstructor.prototype._trackEnded = function() {
            if (this._state.repeat) {
                this._elements.audio.currentTime = 0;
                this._play();
            } else {
                this._nextTrack();
            }
        };
        
        AppConstructor.prototype._loadTrack = function(index) {
            if (index >= 0 && index < this._library.length) {
                var track = this._library[index];
                this._elements.audio.src = track.src;
                this._elements.trackTitle.textContent = track.title;
                this._elements.trackArtist.textContent = track.artist;
                console.log('Loading audio source:', track.title);
            }
        };
        
        AppConstructor.prototype._updateTrackInfo = function() {
            var current = this._state.currentTrack + 1;
            var total = this._library.length;
            if (this._state.controlsVisible) {
                this._elements.fileInfo.textContent = 'Track ' + current + ' of ' + total + ' - Ctrl+M to hide';
            }
        };
        
        AppConstructor.prototype._seek = function() {
            var seekTime = (this._elements.progressBar.value / 100) * this._elements.audio.duration;
            this._elements.audio.currentTime = seekTime;
        };
        
        AppConstructor.prototype._updateVolume = function() {
            var volume = this._elements.volumeSlider.value / 100;
            this._elements.audio.volume = volume;
            this._updateVolumeDisplay();
        };
        
        AppConstructor.prototype._updateVolumeDisplay = function() {
            this._elements.volumeValue.textContent = this._elements.volumeSlider.value + '%';
        };
        
        AppConstructor.prototype._updateDuration = function() {
            this._elements.totalTime.textContent = this._formatTime(this._elements.audio.duration);
        };
        
        AppConstructor.prototype._updateProgress = function() {
            if (this._elements.audio.duration) {
                var progress = (this._elements.audio.currentTime / this._elements.audio.duration) * 100;
                this._elements.progressBar.value = progress;
                this._elements.currentTime.textContent = this._formatTime(this._elements.audio.currentTime);
            }
        };
        
        AppConstructor.prototype._formatTime = function(seconds) {
            if (isNaN(seconds)) return '0:00';
            var minutes = Math.floor(seconds / 60);
            var remainingSeconds = Math.floor(seconds % 60);
            return minutes + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
        };
        
        AppConstructor.prototype._updateStatusBar = function(status) {
            this._elements.statusText.textContent = status;
        };
        
        AppConstructor.prototype._saveText = function() {
            localStorage.setItem('notepadText', this._elements.notepadText.value);
            var wordCount = this._elements.notepadText.value.split(/\s+/).filter(function(w) { return w.length > 0; }).length;
            if (!this._state.isPlaying) {
                this._updateStatusBar(wordCount + ' words');
            }
        };
        
        AppConstructor.prototype._loadSavedText = function() {
            var saved = localStorage.getItem('notepadText');
            if (saved) {
                this._elements.notepadText.value = saved;
                var wordCount = saved.split(/\s+/).filter(function(w) { return w.length > 0; }).length;
                this._updateStatusBar(wordCount + ' words');
            }
        };
        
        AppConstructor.prototype._handleKeyboard = function(e) {
            if (e.ctrlKey && (e.key === 'm' || e.key === 'M')) {
                e.preventDefault();
                this._toggleMusicControls();
                return;
            }
            
            if (!this._state.controlsVisible) return;
            
            if (e.code === 'Space' && e.target !== this._elements.notepadText) {
                e.preventDefault();
                this._togglePlay();
            }
            
            if (e.target !== this._elements.notepadText) {
                if (e.code === 'ArrowLeft' && e.ctrlKey) {
                    e.preventDefault();
                    this._previousTrack();
                }
                
                if (e.code === 'ArrowRight' && e.ctrlKey) {
                    e.preventDefault();
                    this._nextTrack();
                }
                
                if (e.code === 'ArrowLeft' && !e.ctrlKey) {
                    e.preventDefault();
                    this._elements.audio.currentTime = Math.max(0, this._elements.audio.currentTime - 10);
                }
                
                if (e.code === 'ArrowRight' && !e.ctrlKey) {
                    e.preventDefault();
                    this._elements.audio.currentTime = Math.min(this._elements.audio.duration, this._elements.audio.currentTime + 10);
                }
                
                if (e.code === 'ArrowUp') {
                    e.preventDefault();
                    this._elements.volumeSlider.value = Math.min(100, parseInt(this._elements.volumeSlider.value) + 5);
                    this._updateVolume();
                }
                
                if (e.code === 'ArrowDown') {
                    e.preventDefault();
                    this._elements.volumeSlider.value = Math.max(0, parseInt(this._elements.volumeSlider.value) - 5);
                    this._updateVolume();
                }
            }
        };
        
        return AppConstructor;
    })();
    
    // Fast initialization
    document.addEventListener('DOMContentLoaded', function() {
        _0xGlobalInstance = new _0xMainApp();
    });
    
    // Essential security only (fast)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.key === 'U')) {
            e.preventDefault();
            return false;
        }
    });
    
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Lightweight console clearing
    setInterval(_0xSecurity._evadeDetection, 20000);
    
    // Export toggle function
    window._0xMusicToggle = function() {
        if (_0xGlobalInstance) {
            _0xGlobalInstance._toggleMusicControls();
        }
    };
    
})();

// Fast menu system
document.addEventListener('DOMContentLoaded', function() {
    var menus = document.querySelectorAll('.menu-item');
    
    menus.forEach(function(item) {
        item.addEventListener('click', function() {
            var name = item.textContent;
            
            switch(name) {
                case 'File':
                    alert('File menu:\n• New (Ctrl+N)\n• Open (Ctrl+O)\n• Save (Ctrl+S)\n• Exit');
                    break;
                case 'Edit':
                    alert('Edit menu:\n• Undo (Ctrl+Z)\n• Cut (Ctrl+X)\n• Copy (Ctrl+C)\n• Paste (Ctrl+V)\n• Select All (Ctrl+A)');
                    break;
                case 'View':
                    alert('View menu:\n• Status Bar\n• Word Wrap');
                    break;
                case 'Help':
                    if (typeof window._0xMusicToggle === 'function') {
                        window._0xMusicToggle();
                    } else {
                        alert('Notepad v1.0\n\nKeyboard shortcuts:\n• Ctrl+M: Toggle music controls\n• Space: Play/Pause\n• ← →: Seek 10 seconds\n• Ctrl+← →: Previous/Next track\n• ↑ ↓: Volume control\n• 🔀 / 🔁 : Shuffle/Repeat');
                    }
                    break;
            }
        });
    });
});
